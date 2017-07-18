## EM Algorithm for Two-component Gaussian Mixture
## 
## author: weiya
## date: 2017-07-19

## construct the data in figure 8.5
y = c(-0.39, 0.12, 0.94, 1.67, 1.76, 2.44, 3.72, 4.28, 4.92, 5.53,
      0.06, 0.48, 1.01, 1.68, 1.80, 3.25, 4.12, 4.60, 5.28, 6.22)

## left panel of figure 8.5
hist(y, breaks = 12, freq = FALSE, col = "red", ylim = c(0, 1))

## right panel of figure 8.5
plot(density(y), ylim = c(0, 1), col = "red")
rug(y)


fnorm <- function(x, mu, sigma)
{
  return(1/(sqrt(2*pi)*sigma)*exp(-0.5*(x-mu)^2/sigma))
}

IterEM <- function(mu1, mu2, sigma1, sigma2, pi0, eps)
{
  cat('Start EM...\n')
  cat(paste0('pi = ', pi0, '\n'))
  iters = 0
  ll = c()
  while(TRUE)
  {
    ## Expectation step: compute the responsibilities
    ## calculate the delta's expectation
    gamma = sapply(y, function(x) pi0*fnorm(x, mu2, sigma2)/((1-pi0)*fnorm(x, mu1, sigma1) + pi0*fnorm(x, mu2, sigma2)))
    ll = c(ll, sum((1-gamma)*log(fnorm(y,mu1,sigma1))+gamma*log(fnorm(y, mu2, sigma2))+(1-gamma)*log(1-pi0)+gamma*log(pi0)))
    ## Maximization Step: compute the weighted means and variances
    mu1.new = sum((1-gamma)*y)/sum(1-gamma)
    mu2.new = sum(gamma*y)/sum(gamma)
    sigma1.new = sqrt(sum((1-gamma)*(y-mu1.new)^2)/sum(1-gamma))
    sigma2.new = sqrt(sum((gamma)*(y-mu2.new)^2)/sum(gamma))
    pi0.new = sum(gamma)/length(y)
    cat(paste0('pi = ', pi0.new, '\n'))
    if (abs(pi0.new-pi)< eps || iters > 50)
    {
      cat('Finish!\n')
      cat(paste0('mu1 = ', mu1.new, '\n',
                 'mu2 = ', mu2.new, '\n',
                 'sigma1^2 = ', sigma1.new^2, '\n',
                 'sigma2^2 = ', sigma2.new^2))
      break
    }
    mu1 = mu1.new
    mu2 = mu2.new
    sigma1 = sigma1.new
    sigma2 = sigma2.new
    pi0 = pi0.new
    iters = iters + 1
  }
  return(ll)
}
## take initial guesses for the parameters
mu1 = 4.5; sigma1 = 1
mu2 = 1; sigma2 = 1
pi0 = 0.1
eps = 0.01
ll = IterEM(mu1, mu2, sigma1, sigma2, pi0, eps)

## Figure 8.6
plot(1:length(ll), ll, xlab = 'iterations', ylab = 'Log-likelihood', 'o')