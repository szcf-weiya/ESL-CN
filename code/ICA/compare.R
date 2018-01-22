library(ProDenICA)
library(fastICA)

N = 1024

genData <- function(dist, N = 1024, p = 2){
  # original sources
  s = scale(cbind(rjordan(dist, N), rjordan(dist, N)))
  # mixing matrix 
  mix.mat = mixmat(2)
  # original observation
  x = s %*% mix.mat
  
  # central x
  x = scale(x, TRUE, FALSE)
  # whiten x
  xs = svd(x)
  x = sqrt(N) * xs$u # new observations
  mix.mat2 = diag(xs$d) %*% t(xs$v) %*% solve(mix.mat) / sqrt(N) # new mixing matrix
  return(list(x = x, A = mix.mat2))
}

res = array(NA, c(2, 18, 30))
for (i in c(1:18)){
  for (j in c(1:30)){
    data = genData(letters[i])
    x = data$x
    A = data$A
    W0 <- matrix(rnorm(2*2), 2, 2)
    W0 <- ICAorthW(W0)
    # ProDenICA
    W1 <- ProDenICA(x, W0=W0,trace=FALSE,Gfunc=GPois, restarts = 5)$W
    # FastICA
    W2 <- ProDenICA(x, W0=W0,trace=FALSE,Gfunc=G1, restarts = 5)$W
    res[1, i, j] = amari(W1, A)
    res[2, i, j] = amari(W2, A)  
  }
}

res.mean = log(1+apply(res, c(1,2), mean))
offset = apply(res, c(1,2), sd)
res.max = res.mean + offset/4
res.min = res.mean - offset/4
#res.max = apply(res, c(1,2), max)
#res.min = apply(res, c(1,2), min)

# plot
plot(1:18, res.mean[1, ], xlab = "Distribution", ylab = "Amari Distance from True A", xaxt = 'n', type = "o", col = "orange", pch = 19, lwd = 2, ylim = c(0, 0.5))
axis(1, at = 1:18, labels = letters[1:18])
lines(1:18, res.mean[2, ], type = "o", col = 'blue', pch = 19, lwd=2)
legend("topright", c("ProDenICA", "FastICA"), lwd = 2, pch = 19, col = c("orange", "blue"))
for(i in 1:18)
{
  for (j in 1:2)
  {
    color = c("orange", "blue")
    lines(c(i, i), c(res.min[j, i], res.max[j, i]), col = color[j], pch = 3)
    lines(c(i-0.2, i+0.2), c(res.min[j, i], res.min[j, i]), col = color[j], pch = 3)
    lines(c(i-0.2, i+0.2), c(res.max[j, i], res.max[j, i]), col = color[j], pch = 3)
  }
}
