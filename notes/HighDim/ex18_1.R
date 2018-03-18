## ####################################################################################
## R code for the simulation of Fig. 18.1
## 
## author: szcf-weiya <szcfweiya@gmail.com>
## 
## refer to https://esl.hohoweiya.xyz/notes/HighDim/sim18_1/index.html for more details
##
## ####################################################################################

genX <- function(p, N = 100){
  # mu
  mu = numeric(p)
  # due to var(x_j) = 1
  # covariance matrix equals to correlation matrix
  Sigma = matrix(0.2, nrow=p, ncol=p)
  diag(Sigma) = 1
  library(MASS)
  X = mvrnorm(N, mu, Sigma)
  if (is.null(dim(X)))
    X = matrix(X, ncol = p)
  return(X)
}

genY <- function(X){
  N = nrow(X)
  p = ncol(X)
  beta = rnorm(p, 0, 1)
  fX = X %*% as.matrix(beta, ncol = 1)
  #fX = rowSums(fX)
  epsi.var = var(as.vector(fX))/2 # not for test, just for train
  epsi = rnorm(N, 0, sqrt(epsi.var))
  Y = fX + epsi
  res = list(Y=Y, epsi.var=epsi.var)
  return(res)
}

for (p in c(20, 100, 1000)) {
  X = genX(p)
  Y = genY(X)$Y
  model = lm(Y~X)
  # count the number of significant terms
  coef.mat = coef(summary(model))
  sig.level = 0.05
  coef.p = coef.mat[, 4]
  # remove the intercept
  if (names(coef.p)[1] == "(Intercept)")
    coef.p = coef.p[-1]
  coef.p[which(is.nan(coef.p))] = 1 # replace NaN with 1
  sig.num = sum(coef.p < sig.level)
  cat("p = ", p, " sig.num = ", sig.num, "\n")
}

for (p in c(20, 100, 1000)){
  num = 0
  for (j in 1:100){
    X = genX(p)
    Y = genY(X)$Y
    for (i in 1:p){
      model = lm(Y~1+X[,i])
      coef.mat = coef(summary(model))
      #score = abs(coef.mat[2, 1]/coef.mat[2, 2])
      if(coef.mat[2, 4] < 0.05)
        num = num + 1
    }
  }
  num = num/100
  cat("p = ", p, " num of significant term: ", num ,"\n")
}

test.err.full = matrix(0, nrow=0, ncol=3)
epsi.var.full = c()
for (p in c(20, 100, 1000)){
  X = genX(p)
  Y.res = genY(X)
  Y = Y.res$Y
  epsi.var = Y.res$epsi.var
  epsi.var.full = c(epsi.var.full, epsi.var)
  model = lm.ridge(Y~X, lambda=c(0.001, 100, 1000))
  # calculate test error
  #X.test = genX(p)
  #Y.test = genY(X.test)
  #pred = cbind(1, X.test) %*% t(coef(model))
  #test.err = numeric(3)
  #for (i in 1:ncol(pred))
  #{
  #  test.err[i] = sum((Y.test - pred[,i])^2)/nrow(pred)
  #}
  #test.err.full = rbind(test.err.full, test.err)

  for (j in 1:100){
    x.test = genX(p, N=1)
    y.test = sum(x.test * rnorm(p)) + rnorm(1, 0, sqrt(epsi.var))
    pred = as.matrix(cbind(1, x.test)) %*% t(coef(model))
    test.err = (pred - y.test)^2
    test.err.full = rbind(test.err.full, test.err)
  }
}
t1 = test.err.full[1:100, ]
t2 = test.err.full[101:200, ]
t3 = test.err.full[201:300, ]



boxplot(t1/epsi.var.full[1], main = "20 features", col = "green")
boxplot(t2/epsi.var.full[2], main = "100 features", col = "green")
boxplot(t3/epsi.var.full[3], main = "1000 features", col = "green")

