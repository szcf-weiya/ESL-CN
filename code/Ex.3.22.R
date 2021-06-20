library(mvtnorm)
library(expm)
set.seed(123)
K = 3; p = 5; N = 100;
X = matrix(runif(p*N), nrow = N)
X = scale(X, scale = F)
B = matrix(runif(p*K), nrow = p)
Y = X %*% B + rmvnorm(N, sigma = diag(K))
Y = scale(Y, scale = F)
Bhat = solve(t(X) %*% X) %*% t(X) %*% Y
Yhat = X %*% Bhat
SigmaYY1 = t(Y) %*% Y / N
SigmaYY2 = t(Y - Yhat) %*% (Y - Yhat) / (N - p*K)
SigmaXX = t(X) %*% X / N
SigmaYX = t(Y) %*% X / N
Mright = SigmaYX %*% solve(sqrtm(SigmaXX))
M1 = solve(sqrtm(SigmaYY1)) %*% Mright
M2 = solve(sqrtm(SigmaYY2)) %*% Mright
svd(M1)$u
svd(M2)$u