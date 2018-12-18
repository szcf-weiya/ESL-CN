set.seed(1234)
N = 100
p = 3
X = rnorm(N)
beta = c(1, 0.4, 0.5, 0.2)
Y = beta[4] * X^3 + beta[3] * X^2 + beta[2] * X + beta[1] + rnorm(N)
model = lm(Y ~ X + I(X^2) + I(X^3))
sigma2 = sum(model$residuals^2) / (N - p - 1)

Xfull = cbind(1, X, X^2, X^3)
# method 1
XX = t(Xfull) %*% Xfull
invXX = solve(XX)
s2 = apply(Xfull, 1, function(x) t(x) %*% invXX %*% x) * sigma2
yhat = model$fitted.values
idx = order(X)
plot(X[idx], yhat[idx], type = "o", xlab = "x", ylab = "y")
lines(X[idx], yhat[idx] + qnorm(.975) * sqrt(s2[idx]), col = "red", lwd = 3)
lines(X[idx], yhat[idx] - qnorm(.975) * sqrt(s2[idx]), col = "red", lwd = 3)

# method 2
# svd decomposition
s = svd(Xfull)
delta = solve(t(s$v), diag(sqrt(sigma2 * qchisq(.95, p+1))/s$d))

lines(X[idx], Xfull[idx,] %*% (model$coefficients + delta[,1]), col = "blue")
lines(X[idx], Xfull[idx,] %*% (model$coefficients + delta[,2]), col = "blue")
lines(X[idx], Xfull[idx,] %*% (model$coefficients + delta[,3]), col = "blue")
lines(X[idx], Xfull[idx,] %*% (model$coefficients + delta[,4]), col = "blue")
lines(X[idx], Xfull[idx,] %*% (model$coefficients - delta[,1]), col = "blue")
lines(X[idx], Xfull[idx,] %*% (model$coefficients - delta[,2]), col = "blue")
lines(X[idx], Xfull[idx,] %*% (model$coefficients - delta[,3]), col = "blue")
lines(X[idx], Xfull[idx,] %*% (model$coefficients - delta[,4]), col = "blue")

legend("topleft", c("Method 1", "Method 2"), col= c("red", "blue"), lwd = c(3, 1))