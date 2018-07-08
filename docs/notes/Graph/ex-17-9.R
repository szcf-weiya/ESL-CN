## ######################################################################################
##
## Solution for Ex. 17.9(c)
##
## refer to https://github.com/szcf-weiya/ESL-CN/issues/137
## for more details
##
## author: weiya <szcfweiya@gmail.com>
##
## ###################################################################################### 
rm(list = ls(all=TRUE))
## read data
data = read.table("data/data.txt")
covariance = read.table("data/covariance-mat.txt")
S = as.matrix(covariance)
colnames(data) = c("praf",
                   "pmek",
                   "plcg",
                   "PIP2",
                   "PIP3",
                   "p44/42",
                   "pakts473",
                   "PKA",
                   "PKC",
                   "P38",
                   "pjnk")

## miss first 100 for protein Jnk
data.raw = data
data[1:1000, ncol(data)] = rep(NA,1000)

EMpute <- function(X){
  p = ncol(X)
  N = nrow(X)
  # only consider missing one variable
  is.miss = colSums(is.na(X))
  idx.miss = which(is.miss != 0) ## simple case: equal 1
  obs.miss = which(is.na(X[,idx.miss]))
  # initialize
  mu = colMeans(X, na.rm = TRUE)
  Sigma = cov(X[-obs.miss, ])
  # main algorithm
  iter = 0
  while (TRUE) {
    # E step
    Sigma.mo = Sigma[idx.miss,-idx.miss]
    Sigma.oo = Sigma[-idx.miss, -idx.miss]
    mu.o = mu[-idx.miss]
    mu.m = mu[idx.miss]
    X[obs.miss, idx.miss] = t(mu.m + Sigma.mo %*% solve(Sigma.oo) %*% (t(X[obs.miss, -idx.miss]) - mu.o)) # minus by row with transpose
    # M step
    mu.new = colMeans(X)
    Sigma.new = cov(X) # no correction term due to a single missing variable
    err1 = sum((mu.new-mu)^2)
    err2 = norm(Sigma.new-Sigma)
    iter = iter + 1
    cat("iter = ", iter, " err mu: ", err1, " err sigma: ", err2, "\n")
    mu = mu.new
    Sigma = Sigma.new
    if (err1 < 1e-20 & err2 < 1e-11)
      break
  }
  pred = X[obs.miss, idx.miss]
  return(list(X=X, pred=pred))
}
res = EMpute(data)
pred = res$pred
X = res$X
truth = data.raw[1:1000, ncol(data)]
## compare the predicted values to the actual values
plot(pred, truth)

## results
source("ex-17-7.R")
# after EM imputation
estUGGM(cov(X), adj)
# non-missing data
estUGGM(cov(data.raw[-c(1:1000),]), adj)