## Gibbs sampling for mixtures
## based on the algorithm 8.4 of ESL
##
## Author: weiya
## Date: 2017.09.12

## data in figure 8.5
y = c(-0.39, 0.12, 0.94, 1.67, 1.76, 2.44, 3.72, 4.28, 4.92, 5.53,
      0.06, 0.48, 1.01, 1.68, 1.80, 3.25, 4.12, 4.60, 5.28, 6.22)

## initial values
mu1 = 4
mu2 = 1
sigma1 = 0.93
sigma2 = 0.88
N = length(y)
t = 0
mu1.h = mu1
mu2.h = mu2
Delta = rep(c(0, 1), each = N/2)
pi0 = sum(Delta)/N
pi0.h = pi0
while(TRUE)
{
  t = t + 1
  gamma = sapply(1:N, function(i) pi0*dnorm(y[i], mu2, sigma2)/((1-pi0)*dnorm(y[i], mu1, sigma1)+pi0*dnorm(y[i], mu2, sigma2)))
  ## sample Delta
  r = runif(N)
  Delta[gamma < r] = 0
  Delta[gamma >= r] = 1
  pi0 = sum(Delta)/N
  ## re-calculate mu1 and mu2
  mu1 = sum((1-Delta)*y)/(sum(1-Delta)+1e-10)
  mu2 = sum(Delta*y)/(sum(Delta)+1e-10)
  ## print info
  cat("t = ", t, "\n")
  for (i in 1:N)
    cat(Delta[i], " ")
  cat("\n")
  cat("mu1 = ", mu1, " mu2 = ", mu2, "pi0 = ",pi0, "\n")
  
  ## generate mu1 and mu2
  mu1 = rnorm(1, mu1, sigma1)
  mu2 = rnorm(1, mu2, sigma2)
  mu1.h = c(mu1.h, mu1)
  mu2.h = c(mu2.h, mu2)
  pi0.h = c(pi0.h, pi0)
  if (t > 200)
    break
}

## res
## sometimes good, while sometimes bad.
## In addition, sometimes mu1 and mu2 are inverted.