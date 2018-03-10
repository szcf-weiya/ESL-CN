## three classes
## different means but same covariance

sigma = diag(1, 2, 2)
mu1 = c(-1, 0)
mu2 = c(1, 0)
mu3 = c(0, 1.7)
N = 30
library(MASS)
set.seed(123)
dm1 = mvrnorm(N, mu1, sigma)
dm2 = mvrnorm(N, mu2, sigma)
dm3 = mvrnorm(N, mu3, sigma)

m12 = lda(rbind(dm1, dm2), rep(c(1,2), each=N))
m13 = lda(rbind(dm1, dm3), rep(c(1,3), each=N))
m23 = lda(rbind(dm2, dm3), rep(c(2,3), each=N))

calcY <- function(c, x) { return(-1*c[1]*x/c[2]) }

#plot
plot(dm1[, 1], dm1[, 2], col = "orange", pch="1", xlim = c(-5, 5), ylim = c(-5, 5), xaxt="n", yaxt="n", xlab = "", ylab = "")
points(dm2[, 1], dm2[, 2], col = "blue", pch="2")
points(dm3[, 1], dm3[, 2], col = "green", pch="3")
points(rbind(mu1, mu2, mu3), pch="+", col="black")
clip(-5,5,-5,0) # refer to https://stackoverflow.com/questions/26472563/how-to-define-graphical-bounds-of-abline-linear-regression-in-r
abline(0, -1*m12$scaling[1]/m12$scaling[2])
clip(-5,0,-5,5)
abline(0, -1*m13$scaling[1]/m13$scaling[2])
clip(0,5,-5,5)
abline(0, -1*m23$scaling[1]/m23$scaling[2])


