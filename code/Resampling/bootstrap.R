## based on the code in online  StatLearning(https://lagunita.stanford.edu/courses/HumanitiesSciences/StatLearning/Winter2016/info) course

library(ISLR)
library(boot)

alpha <- function(x, y)
{
  vx = var(x)
  vy = var(y)
  cxy = cov(x, y)
  (vy-cxy)/(vx+vy-2*cxy)
}

alpha(Portfolio$X, Portfolio$Y)
# [1] 0.5758321

## estimate std error
alpha.fn <- function(data, index)
{
  with(data[index, ], alpha(X, Y))
}
alpha.fn(Portfolio, 1:100)
# [1] 0.5758321

set.seed(123)
alpha.fn(Portfolio, sample(1:100, 100, replace = TRUE))
# [1] 0.4896806

## use boot package
boot.out = boot(Portfolio, alpha.fn, R = 1000)
boot.out
plot(boot.out)
