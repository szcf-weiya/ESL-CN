# number of blocks
nblocks = 50
# correlation
rho = 0.95
# number of variables
p = 1000
# number of variables in each blocks
p0 = p/nblocks
# noise-to-signal
NSR = 0.72
# number of samples
nsamples = 60
# construct the covariance matrix
Sigma = matrix(rep(rho, nblocks*nblocks), nblocks)
Sigma = Sigma + diag(1-rho, nblocks)
mu = rep(0, nblocks)
library(MASS)
X = matrix(nrow = nsamples, ncol = nblocks)
for (i in 1:nsamples)
{
  x.raw = mvrnorm(p0, mu, Sigma)
  # drawn from each block
  idxmat = cbind(sample(p0, nblocks, replace = TRUE), 1:nblocks)
  x = x.raw[idxmat]
  X[i, ] = x
}
# coefficients
beta = rnorm(nblocks)
# response
y.raw = X %*% beta
# noise
sd.noise = sqrt(NSR*var(y.raw))
epsilon = rnorm(nsamples, sd = sd.noise)
# add noise
y = y.raw + epsilon

## return (X, y)