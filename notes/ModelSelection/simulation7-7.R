## simulation of fig 7.7
## author: weiya <szcfweiya@gmail.com>

# generate dataset
genX <- function(n = 80, p = 20){
  X = matrix(runif(n*p, 0, 1), ncol = p, nrow = n)
  return(X)
}
# generate response 
genY <- function(X, case = 1){
  n = nrow(X)
  Y = numeric(n)
  if (case == 1){ # for the left panel of fig. 7.3
    Y = sapply(X[, 1], function(x) ifelse(x <= 0.5, 0, 1))
  } 
  else {
    Y = apply(X[, 1:10], 1, function(x) ifelse(sum(x) > 5, 1, 0))  
  }
  return(Y)
}

## global parameters setting
ntest = 10000
B = 100 # the number of repetition

## generate test data
X.test = genX(n = ntest)
Y.test = genY(X.test)
## case 1
## kNN
library(caret)
# for regression
err.aic = numeric(B)
err.bic = numeric(B)
# for classification
err.cl.aic = numeric(B)
err.cl.bic = numeric(B) 
N = 80
for (i in 1:B)
{
  X = genX(n = N)
  Y = genY(X)
  # vary the number of neighbor
  epe = numeric(46)
  epe.cl = numeric(46)
  aic = numeric(46) # pay attention!! the effective number is N/k
  bic = numeric(46)
  aic.cl = numeric(46)
  bic.cl = numeric(46)
  for (k in 5:50) 
  {
    model = knnreg(X, Y, k = k)
    pred = predict(model, X.test)
    # for classification
    pred.cl = sapply(pred, function(x) ifelse(x > 0.5, 1, 0))
    epe[k-4] = mean((pred - Y.test)^2)
    epe.cl[k-4] = mean(pred.cl!=Y.test)
    # the training error
    yhat = predict(model, X) 
    yhat.cl = sapply(yhat, function(x) ifelse(x > 0.5, 1, 0))
    err = yhat - Y
    err.cl = (yhat.cl != Y)
    aic[k-4] = mean(err^2)*(1 + 2/k * (N/(N-N/k)) )
    bic[k-4] = mean(err^2)*(1 + log(nrow(X))/k * (N/(N-N/k)) )
    aic.cl[k-4] = mean(err.cl)*(1 + 2/k * (N/(N-N/k)) )
    bic.cl[k-4] = mean(err.cl)*(1 + log(N)/k * (N/(N-N/k)) )
  }
  err.aic[i] = (epe[which.min(aic)] - min(epe)) / (max(epe) - min(epe))
  err.bic[i] = (epe[which.min(bic)] - min(epe)) / (max(epe) - min(epe))
  err.cl.aic[i] = (epe.cl[which.min(aic.cl)] - min(epe.cl)) / (max(epe.cl) - min(epe.cl))
  err.cl.bic[i] = (epe.cl[which.min(bic.cl)] - min(epe.cl)) / (max(epe.cl) - min(epe.cl))
}
## AIC plot
png("boxplot-AIC-kNN.png")
df.aic = data.frame(val = c(err.aic, err.cl.aic),
                    case = factor(c(rep("reg/kNN", B), rep("class/kNN", B)), 
                                  levels = c("reg/kNN", "class/kNN")) )
boxplot(val ~ case, data = df.aic, col = "green",
        main = "AIC", ylab = "Increase over best")
dev.off()

## BIC plot
png("boxplot-BIC-kNN.png")
df.bic = data.frame(val = c(err.bic, err.cl.bic),
                    case = factor(c(rep("reg/kNN", B), rep("class/kNN", B)), 
                                  levels = c("reg/kNN", "class/kNN")) )
boxplot(val ~ case, data = df.bic, col = "green",
        main = "BIC", ylab = "Increase over best")
dev.off()