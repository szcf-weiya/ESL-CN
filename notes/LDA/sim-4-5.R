## ##############################################################################################
## file LDA/sim-4-5.R
## copyright (C) 2018 Lijun Wang <szcfweiya@gamil.com>
##
## This program is to simulate figure 4.5 in the book called The Elements of Statistical Learning.
## You also can found the translated documents from https://esl.hohoweiya.xyz
##
## The simulated data is from three gaussian distributions which have
## different means but same covariance.
## #############################################################################################

library(MASS)
library(mvtnorm)
#sigma = diag(1, 2, 2)
sigma = matrix(c(2,1,1,1), nrow = 2)
mu1 = c(-1, 0)
mu2 = c(1, 0)
mu3 = c(0, 1.7)

N = 1000
set.seed(123)
dm1 = mvrnorm(N, mu1, sigma)
dm2 = mvrnorm(N, mu2, sigma)
dm3 = mvrnorm(N, mu3, sigma)
z1 = dmvnorm(dm1, mu1, sigma)
z2 = dmvnorm(dm2, mu2, sigma)
z3 = dmvnorm(dm3, mu3, sigma)
lev1 = quantile(as.numeric(z1), 0.05)
lev2 = quantile(as.numeric(z2), 0.05)
lev3 = quantile(as.numeric(z3), 0.05)
# contour(dm1[,1],dm1[,2],z1,levels = lev1)
# 
# Error in contour.default(dm1[, 1], dm1[, 2], z1, levels = lev1) :
#   需要递增的'x'和'y'值
# myContour <- function(mu, sigma, level, col, n=100){
#   x.points <- seq(-5,5,length.out=n)
#   y.points <- x.points
#   z <- matrix(0,nrow=n,ncol=n)
#   for (i in 1:n) {
#     for (j in 1:n) {
#       z[i,j] <- dmvnorm(c(x.points[i],y.points[j]),
#                         mean=mu,sigma=sigma)
#     }
#   }
#   contour(x.points,y.points,z, levels = level, col = col, xlim = c(-10, 10), ylim = c(-10, 10), labels = "")
# }
# myContour(mu1, sigma, lev1, "orange")
# myContour(mu2, sigma, lev2, "blue")
# myContour(mu3, sigma, lev3, "green")
# 
# CANNOT put multi contour in one single figure



## ##############################################
## right panel
## ##############################################

N = 30

set.seed(123)
dm1 = mvrnorm(N, mu1, sigma)
dm2 = mvrnorm(N, mu2, sigma)
dm3 = mvrnorm(N, mu3, sigma)

m12 = lda(rbind(dm1, dm2), rep(c("c1","c2"), each=N))
m13 = lda(rbind(dm1, dm3), rep(c("c1","c3"), each=N))
m23 = lda(rbind(dm2, dm3), rep(c("c2","c3"), each=N))

calcY <- function(c, x) { return(-1*c[1]*x/c[2]) }

calcLD <- function(object) {
  mu = object$means
  mu.pool = colSums(mu)/2 ## (mu1+mu2)/2
  scaling = object$scaling
  intercept = sum(scaling * mu.pool)/scaling[2]
  slope = -1* scaling[1]/scaling[2]
  return(c(intercept, slope))
}

#plot
png("sim-fig-4-5-r-2.png")
plot(dm1[, 1], dm1[, 2], col = "orange", pch="1", 
     xlim = c(-5, 5), ylim = c(-5, 5), 
     xaxt="n", yaxt="n", xlab = "", ylab = "")
points(dm2[, 1], dm2[, 2], col = "blue", pch="2")
points(dm3[, 1], dm3[, 2], col = "green", pch="3")
points(rbind(mu1, mu2, mu3), pch="+", col="black")
clip(-5,5,-5,0) # refer to https://stackoverflow.com/questions/26472563/how-to-define-graphical-bounds-of-abline-linear-regression-in-r
#abline(0, -1*m12$scaling[1]/m12$scaling[2])
abline(calcLD(m12))
clip(-5,0,-5,5)
#abline(0, -1*m13$scaling[1]/m13$scaling[2])
abline(calcLD(m13))
clip(0,5,-5,5)
#abline(0, -1*m23$scaling[1]/m23$scaling[2])
abline(calcLD(m23))
dev.off()

## #######################################
## directly compute
## ######################################

## sample mean
zmu1 = colMeans(dm1)
zmu2 = colMeans(dm2)
zmu3 = colMeans(dm3)

## sample variance
zs1 = var(dm1)
zs2 = var(dm2)
zs3 = var(dm3)
zs12 = (zs1+zs2)/2 ## ((n1-1)S1+(n2-1)S2)/(n1+n2-2)
zs13 = (zs1+zs3)/2
zs23 = (zs2+zs3)/2

## #############################
## coef:
##   a = S^{-1}(mu1-mu2)
## #############################
za12 = solve(zs12) %*% (zmu1-zmu2)
za12
za13 = solve(zs13) %*% (zmu1-zmu3)
za13
za23 = solve(zs23) %*% (zmu2-zmu3)
za23

## ############################
## constant
##    0.5*a'(mu1+mu2)
## ############################
c12 = sum(za12 * (zmu1+zmu2)/2)
c13 = sum(za13 * (zmu1+zmu3)/2)
c23 = sum(za23 * (zmu2+zmu3)/2)

calcLD2 <- function(za, c) {return(c(c/za[2], -za[1]/za[2]))}
calcLD2(za12, c12)
calcLD2(za13, c13)
calcLD2(za23, c23)
cat("for class 1 and class 2",
    "\nuse lda results: ", calcLD(m12), "\ncompute directly: ", calcLD2(za12, c12),
    "\n",
    "\nfor class 1 and class 3", 
    "\nuse lda results: ", calcLD(m13), "\ncompute directly: ", calcLD2(za13, c13), 
    "\n",
    "\nfor class 2 and class 3",
    "\nuse lda results: ", calcLD(m23), "\ncompute directly: ", calcLD2(za23, c23))
