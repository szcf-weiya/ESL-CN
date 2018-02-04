library(ProDenICA)
p=2
### Can use letters a-r below for dist
dist="a" 
N=1024
A0<-mixmat(p)
s<-scale(cbind(rjordan(dist,N),rjordan(dist,N)))
x <- s %*% A0
###Whiten the data
x <- scale(x, TRUE, FALSE)
sx <- svd(x)	### orthogonalization function
x <- sqrt(N) * sx$u
target <- solve(A0)
target <- diag(sx$d) %*% t(sx$v) %*% target/sqrt(N)
W0 <- matrix(rnorm(2*2), 2, 2)
W0 <- ICAorthW(W0)
W1 <- ProDenICA(x, W0=W0,trace=TRUE,Gfunc=G1)$W
fit=ProDenICA(x, W0=W0,Gfunc=GPois,trace=TRUE, density=TRUE)
W2 <- fit$W
#distance of FastICA from target
amari(W1,target)
#distance of ProDenICA from target
amari(W2,target)
par(mfrow=c(2,1))
plot(fit)
