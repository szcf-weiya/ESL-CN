## ####################################################################################
## R code for the simulation of Fig. 18.1
## 
## author: szcf-weiya <szcfweiya@gmail.com>
## 
## refer to https://esl.hohoweiya.xyz/notes/HighDim/sim18_1/index.html for more details
##
## ####################################################################################
library(MASS)

genX <- function(p, N = 100){
  # mu
  mu = numeric(p)
  # due to var(x_j) = 1
  # covariance matrix equals to correlation matrix
  Sigma = matrix(0.2, nrow=p, ncol=p)
  diag(Sigma) = 1
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
  # if X is standardized, SNR should equal to ||beta||^2 / sigma2
  # cat("||beta||^2 / sigma2 = ", sum(beta^2)/epsi.var, "\n")
  return(res)
}

# simple linear regression
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

# single variable linear regression
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

calc_df <- function(X, lambda) {
  return(sum(diag(X %*% solve(t(X) %*% X + lambda * diag(ncol(X))) %*% t(X))))
}

test.err.full = matrix(0, nrow=0, ncol=3)
dfs = matrix(0, nrow = 0, ncol = 3)
for (p in c(20, 100, 1000)){
  for (j in 1:100){
    # training set
    Xall = genX(p, N = 200)
    X = Xall[1:100,]
    Y.res = genY(Xall)
    Y = Y.res$Y[1:100]
    epsi.var = Y.res$epsi.var
    model = lm.ridge(Y~0+X, lambda=c(0.001, 100, 1000))
    dfs = rbind(dfs, sapply(c(0.001, 100, 1000), function(lambda) calc_df(X, lambda)))
    
    X.test = Xall[101:200,]
    Y.test = Y.res$Y[101:200]
    # pred = as.matrix(cbind(1, X.test)) %*% t(coef(model))
    pred = X.test %*% t(coef(model))
    cat("p = ", p, ", ", epsi.var, " err = ", colMeans((pred - Y.test)^2), "\n")
    test.err = colMeans((pred - Y.test)^2) / epsi.var
    test.err.full = rbind(test.err.full, test.err)
  }
}


png("../ESL-CN/imgs/fig.18.1/p20.png")
boxplot(test.err.full[1:100, ], main = "20 features", col = "green")
dev.off()
png("../ESL-CN/imgs/fig.18.1/p100.png")
boxplot(test.err.full[101:200, ], main = "100 features", col = "green")
dev.off()
png("../ESL-CN/imgs/fig.18.1/p1000.png")
boxplot(test.err.full[201:300, ], main = "1000 features", col = "green")
dev.off()
