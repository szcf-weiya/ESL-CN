## ###############################################################################################################################
## R Code for the simulation of Fig. 3.18
## 
## Refer to 
##   1. https://esl.hohoweiya.xyz/03-Linear-Methods-for-Regression/3.6-A-Comparison-of-the-Selection-and-Shrinkage-Methods/index.html
##   2. https://esl.hohoweiya.xyz//notes/linear-reg/sim-3-18/index.html
## for more details
##
## ###############################################################################################################################

## ###############################################################################################################
## generate simulated data
## ###############################################################################################################
genXY <- function(rho = 0.5,  # correlation
                 N = 100, # number of sample
                 beta = c(4, 2)) # true coefficient
{
  # covariance matrix
  Sigma = matrix(c(1, rho,
                   rho, 1), 2, 2)
  library(MASS)
  X = mvrnorm(N, c(0, 0), Sigma)
  Y = X[, 1] * beta[1] + X[, 2] * beta[2]
  return(list(X=X, Y=Y))
}

## ###############################################################################################################
## main function 
##  return the beta calculated by 6 methods (ols, ridge, lasso, pcr (plus mypcr which from scratch), pls, subset)
## 
## ###############################################################################################################

select.vs.shrink <- function(X, Y)
{
  ## ############################################
  ## least square regressions
  ## ############################################
  ols.fit = lm(Y ~ 0 + X)
  ols.beta = coef(ols.fit)
  ols.beta = as.matrix(t(ols.beta))
  ## ###########################################
  ## setting
  ## ###########################################
  
  ## create grid to fit lasso/ridge path
  grid = 10^seq(10, -2, length = 100)
  
  ## ############################################
  ## lasso
  ## ############################################
  library(glmnet)
  ## use cross-validation to choose the best model
  ## lasso.fit = cv.glmnet(X, Y, alpha = 1)
  
  lasso.fit = glmnet(X, Y, alpha = 1, lambda = grid)
  #plot(lasso.fit)
  ## extract beta
  lasso.beta = as.matrix(lasso.fit$beta) # convert dsCMatrix to regular matrix
  #plot(lasso.beta[1,], lasso.beta[2,])
  lasso.beta = t(lasso.beta)
  attr(lasso.beta, "dimnames") = list(NULL,
                                      c("X1","X2"))
  
  ## ############################################
  ## ridge regression
  ## ############################################
  ridge.fit = glmnet(X, Y, alpha = 0, lambda = grid)
  ridge.beta = as.matrix(ridge.fit$beta) # convert dsCMatrix to regular matrix
  ridge.beta = t(ridge.beta)
  attr(ridge.beta, "dimnames") = list(NULL,
                                      c("X1", "X2"))
  ## ############################################
  ## principal component regression (PCR)
  ## ############################################
  library(pls)
  pcr.fit = pcr(Y ~ X, scale = FALSE)
  pcr.beta = pcr.fit$coefficients
  pcr.beta = rbind(c(0, 0), pcr.beta[,,1], pcr.beta[,,2]) # c(0, 0) for zero PC
  ## for plot 
  ## or write from scratch
  ## get PCs
  pc = prcomp(X, scale = FALSE)
  pc.m = pc$rotation
  ## scores
  pc.z = pc$x
  ## use one pc
  mypcr.fit.1 = lm(Y ~ 0+pc.z[,1])
  ## use two pc
  mypcr.fit.2 = lm(Y ~ 0+pc.z)
  ## original beta
  mypcr.beta.1 = coef(mypcr.fit.1) * pc.m[, 1]
  mypcr.beta.2 = t(pc.m %*% coef(mypcr.fit.2))
  mypcr.beta = rbind(c(0, 0), mypcr.beta.1, mypcr.beta.2)
  attr(mypcr.beta, "dimnames") = list(NULL,
                                      c("X1", "X2"))
  ## ############################################
  ## Partial Least Squares (PLS)
  ## ############################################
  pls.fit = plsr(Y ~ X, scale = FALSE)
  pls.beta = pls.fit$coefficients
  pls.beta = rbind(c(0, 0), pls.beta[,,1], pls.beta[,,2])
  ## ############################################
  ## Best Subset
  ## ############################################
  library(leaps)
  bs.fit = regsubsets(x = X, y = Y, intercept = FALSE)
  if (summary(bs.fit)$which[1, 1])
  {
    bs.beta = c(coef(bs.fit, 1), 0)
  } else {
    bs.beta = c(0, coef(bs.fit, 1))
  }
  bs.beta = rbind(c(0, 0), bs.beta, coef(bs.fit, 2))
  attr(bs.beta, "dimnames") = list(NULL,
                                   c("X1","X2"))  
  res = list(ols = ols.beta,
              ridge = ridge.beta,
              lasso = lasso.beta,
              pcr = pcr.beta,
              mypcr = mypcr.beta,
              pls = pls.beta,
              subset = bs.beta)
  class(res) = "selectORshrink"
  return(res)
}
## #######################################################################
## plot function
## #######################################################################
plot.selectORshrink <- function(obj, rho = 0.5)
{
  plot(0, 0,
       type = "n",
       xlab = expression(beta[1]),
       ylab = expression(beta[2]),
       main = substitute(paste(rho,"=",r), list(r=rho)),
       xlim = c(0, 6),
       ylim = c(-1, 3))
  par(lwd = 3, cex = 1)
  lines(obj$ridge, col = "red")
  lines(obj$lasso, col = "green")
  lines(obj$pcr, col = "purple")
  lines(obj$pls, col = "orange")
  lines(obj$subset, col = "blue")
  points(obj$ols, col = "black", pch = 16)
  abline(h=0, lty = 2)
  abline(v=0, lty = 2)
  legend(4.8, 3,
         c("Ridge", "Lasso", "PCR", "PLS", "Best Subset", "Least Squares"),
         col = c("red", "green", "purple", "orange", "blue", "black"),
         lty = c(1,1,1,1,1,NA),
         pch =c(NA,NA,NA,NA,NA, 16),
         box.col = "white",
         box.lwd = 0,
         bg = "transparent")
}

## ###################################################################################
## results
## ###################################################################################

## case 1
set.seed(1234)
data = genXY()
X = data$X
Y = data$Y
res1 = select.vs.shrink(X, Y)
png("res_rho_05.png", width = 640, height = 480)
plot(res1, rho = 0.5)
dev.off()
## case 2
set.seed(1234)
data2 = genXY(rho = -0.5)
X2 = data2$X
Y2 = data2$Y
res2 = select.vs.shrink(X2, Y2)
png("res_rho_-05.png", width = 640, height = 480)
plot(res2, rho = -0.5)
dev.off()
