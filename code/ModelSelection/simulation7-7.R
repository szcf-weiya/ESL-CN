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
for (i in 1:B)
{
  X = genX()
  Y = genY(X)
  # vary the number of neighbor
  epe = numeric(50)
  aic = numeric(50) # pay attention!! the effective number is N/k
  for (k in 1:50)
  {
    model = knnreg(X, Y, k = k)
    pred = predict(model, X.test)
    epe[k] = mean((pred - Y.test)^2)
  }
  
}