## simulation for fig. 7.3
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

# case 1
set.seed(123)
X = genX()
Y = genY(X)
# divide X into two datasets, train and test
n = nrow(X)
train.id = sample(n, n*0.7)
X.train = X[train.id, ]
Y.train = Y[train.id, ]
X.test = X[-train.id, ]
Y.test = Y[-train.id, ]

## kNN
library(class)
library(caret)
for(i in c(1:50)){
  # for regression
  fit1 = knnreg(X.train, Y.train, k = i)
  Y.pred = predict(fit1, X.test)
  
  # for classification
  fit2 = knn(X.train, X.test, Y.train, k = i)
  
}
# kNN in R
