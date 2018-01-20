N = 200
X1 = rnorm(N)
X2 = X1 + 0.001*rnorm(N)
X3 = 10*rnorm(N)
X = cbind(X1, X2, X3)
X.pca = princomp(X)
summary(X.pca)

# directly
Sigma = cov(X)
eigen(Sigma)

# loadings 
loadings(X.pca)

# factor analysis
library(psych)
X.fa = fa(X)
loadings(X.fa)