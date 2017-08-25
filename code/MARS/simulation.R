N = 100
## scenario 1
set.seed(123)
x1 = rnorm(N, 0, 0.12)
x2 = rnorm(N, 0, 0.12)
x1.plus = sapply(x1, function(x) ifelse(x>1, x-1, 1-x))
x2.plus = sapply(x2, function(x) ifelse(x>0.8, x-0.8, 0.8-x))
epsilon = rnorm(N, 0, 1)
y = x1.plus + x1.plus*x2.plus + 0.12*epsilon 
library(earth)
scenario1.fit <- earth(data.frame(x1, x2), y, degree = 2)
summary(scenario1.fit)
# Call: earth(x=data.frame(x1,x2), y=y, degree=2)
# 
# coefficients
# (Intercept)                            1.8256947
# h(0.00636051-x1)                       2.2825715
# h(x1-0.00636051)                      -2.1530421
# h(-0.0283535-x2)                       0.8431857
# h(x2- -0.0283535)                     -1.2742486
# h(x1-0.00636051) * h(x2- -0.101965)    5.1893800
# 
# Selected 6 of 13 terms, and 2 of 2 predictors
# Termination condition: Reached nk 21
# Importance: x1, x2
# Number of terms at each degree of interaction: 1 4 1
# GCV 0.01571274    RSS 1.175667    GRSq 0.7782925    RSq 0.8307447

## scenario 2
set.seed(123)
x = matrix(rnorm(N*18,0,0.12), nrow = N)
x = cbind(x1, x2, x)
colnames(x) = paste0("x", 1:20)
scenario2.fit <- earth(x, y, degree = 2)
summary(scenario2.fit)
# Call: earth(x=x, y=y, degree=2)
# 
# coefficients
# (Intercept)                             1.7433666
# h(0.00636051-x1)                        1.8276661
# h(x1-0.00636051)                       -1.9661411
# h(-0.0283535-x2)                        0.9965096
# h(x2- -0.0283535)                      -1.0975043
# h(-0.0797723-x5)                       -1.0412666
# h(x5- -0.0797723)                       0.9912644
# h(x1-0.00636051) * h(x2- -0.0550038)    2.3063250
# 
# Selected 8 of 8 terms, and 3 of 20 predictors
# Termination condition: Reached maximum RSq 0.9990 at 8 terms
# Importance: x1, x5, x2, x3-unused, x4-unused, x6-unused, ...
# Number of terms at each degree of interaction: 1 6 1
# GCV 5.189438e-05    RSS 0.003446955    GRSq 0.9992678    RSq 0.9995038

## scenario 3
l1 = x[,1] + x[, 2] + x[, 3] + x[, 4] + x[, 5]
l2 = x[,6] - x[, 7] + x[, 8] - x[, 9] + x[, 10]
sigma <- function(x)
{
  return(1/(1+exp(-x)))
}
y = sigma(l1) + sigma(l2) + 0.12*epsilon
scenario3.fit = earth(x[, 1:10], y, degree = 2)
summary(scenario3.fit)
# Call: earth(x=x, y=y, degree=2)
# 
# coefficients
# (Intercept)          1.0485575
# h(0.00636051-x1)    -0.4908266
# h(x1-0.00636051)     0.4843409
# h(-0.0941885-x2)    -0.4841149
# h(x2- -0.0941885)    0.4896451
# h(0.126502-x5)      -1.2437430
# h(x5-0.126502)       1.2284332
# h(0.0173371-x6)     -0.2454411
# h(x6-0.0173371)      0.2450607
# h(0.135-x7)          0.2460605
# h(x7-0.135)         -0.2524644
# h(0.105896-x8)      -0.2462804
# h(x8-0.105896)       0.2335884
# h(0.117854-x9)       0.2459949
# h(x9-0.117854)      -0.2460124
# h(-0.141203-x10)    -0.2391420
# h(x10- -0.141203)    0.2436214
# 
# Selected 17 of 17 terms, and 8 of 20 predictors
# Termination condition: Reached maximum RSq 0.9990 at 17 terms
# Importance: x5, x2, x1, x10, x9, x7, x6, x8, x3-unused, x4-unused, ...
# Number of terms at each degree of interaction: 1 16 (additive model)
# GCV 7.65032e-06    RSS 0.0002663077    GRSq 0.9997437    RSq 0.999909

## test
set.seed(3452)
m = 1000
x1.test = rnorm(m, 0, 0.12)
x2.test = rnorm(m, 0, 0.12)
x1.test.plus = sapply(x1.test, function(x) ifelse(x>1, x-1, 1-x))
x2.test.plus = sapply(x2.test, function(x) ifelse(x>0.8, x-0.8, 0.8-x))
epsilon = rnorm(m, 0, 1)
mu1 = x1.test.plus + x1.test.plus*x2.test.plus
y.test = mu1 + 0.12*epsilon
scenario1.mse0 = mean((mean(y.test)-mu1)^2) 
scenario1.mse = mean((predict(scenario1.fit, data.frame(x1.test, x2.test))-mu1)^2)
scenario1.r2 = (scenario1.mse0 - scenario1.mse)/scenario1.mse0
scenario1.r2

## scenario 2
x.test = matrix(rnorm(m*18,0,0.12), nrow = m)
x.test = cbind(x1.test, x2.test, x.test)
colnames(x) = paste0("x", 1:20)
mu2 = mu1
scenario2.mse0 = mean((mean(y.test)-mu2)^2) 
scenario2.mse = mean((predict(scenario2.fit, x.test)-mu2)^2)
scenario2.r2 = (scenario2.mse0 - scenario1.mse)/scenario2.mse0
scenario2.r2

## scenario 3
l1.test = x.test[,1] + x.test[, 2] + x.test[, 3] + x.test[, 4] + x.test[, 5]
l2.test = x.test[,6] - x.test[, 7] + x.test[, 8] - x.test[, 9] + x.test[, 10]
mu3 = sigma(l1.test) + sigma(l2.test)
y.test = mu3 + 0.12*epsilon
scenario3.mse0 = mean((mean(y.test)-mu3)^2) 
scenario3.mse = mean((predict(scenario3.fit, x.test[, 1:10])-mu3)^2)
scenario3.r2 = (scenario3.mse0 - scenario3.mse)/scenario3.mse0
scenario3.r2
