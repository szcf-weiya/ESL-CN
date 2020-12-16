library(MASS)
X = rbind(iris3[,,1], iris3[,,2], iris3[,,3])
Y = cbind(rep(c(1, 0, 0), rep(50, 3)),
          rep(c(0, 1, 0), rep(50, 3)),
          rep(c(0, 0, 1), rep(50, 3)))
labels = rep(c("s","c","v"), rep(50,3))

lda.xfit = lda(labels ~ X)
lm.fit = lm(Y ~ X)
Yhat = lm.fit$fitted.values
lda.yfit = lda(labels ~ Yhat)

coef(lm.fit) %*% coef(lda.yfit)
#                    LD1         LD2
# (Intercept) -3.9697359  5.74257900
# XSepal L.   -0.8293776 -0.02410215
# XSepal W.   -1.5344731 -2.16452123
# XPetal L.    2.2012117  0.93192121
# XPetal W.    2.8104603 -2.83918785

coef(lda.xfit)
#                  LD1         LD2
# XSepal L. -0.8293776  0.02410215
# XSepal W. -1.5344731  2.16452123
# XPetal L.  2.2012117 -0.93192121
# XPetal W.  2.8104603  2.83918785

# ##############################
# calculate from scratch
# ##############################

M = t(Y) %*% X
W = cov(X)
eW = eigen(W)
W2 = eW$vectors %*% diag(1/sqrt(eW$values)) %*% t(eW$vectors)
Mstar = M %*% W2
Bstar = cov(Mstar)
#Vstar = svd(Mstar)$v # only centered, the svd would correspond to the eigenvector
#Vstar = svd(scale(Mstar, scale = FALSE))$v
Vstar = eigen(Bstar)$vectors
V = W2 %*% Vstar

M.Yhat = t(Y) %*% Yhat
W.Yhat = cov(Yhat)
eW.Yhat = eigen(W.Yhat)
W2.Yhat = eW.Yhat$vectors %*% diag(1/sqrt(eW.Yhat$values)) %*% t(eW.Yhat$vectors)
Mstar.Yhat = M.Yhat %*% W2.Yhat
Bstar.Yhat = cov(Mstar.Yhat)
# or Vstar.Yhat = svd(scale(Mstar.Yhat, scale = FALSE))$v
Vstar.Yhat = eigen(Bstar.Yhat)$vectors
V.Yhat = W2.Yhat %*% Vstar.Yhat

coef(lm.fit) %*% V.Yhat
#                   [,1]       [,2]          [,3]
# (Intercept) 33.0576048 -8.7664831  5.845502e+08
# XSepal L.    0.1449341  0.0214029  6.631017e-07
# XSepal W.    0.2681498  1.9221120 -3.725290e-07
# XPetal L.   -0.3846627 -0.8275534 -1.010485e-07
# XPetal W.   -0.4911291  2.5212213 -5.960464e-08

V
#            [,1]       [,2]       [,3]      [,4]
# [1,] -0.1449341 -0.0214029  2.9164752  1.336939
# [2,] -0.2681498 -1.9221120 -1.2263996 -2.405814
# [3,]  0.3846627  0.8275534 -1.2073719 -2.782287
# [4,]  0.4911291 -2.5212213 -0.1306168  4.591166
