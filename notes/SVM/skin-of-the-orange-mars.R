genXY <- function(n = 100, num_noise = 0)
{
  ## class 1
  m1 = matrix(rnorm(n*(4+num_noise)), ncol = 4 + num_noise)
  ## class 2
  m2 = matrix(nrow = n, ncol = 4 + num_noise)
  for (i in 1:n) {
    while (TRUE) {
      m2[i, ] = rnorm(4 + num_noise)
      tmp = sum(m2[i, 1:4]^2)
      if(tmp >= 9 & tmp <= 16)
        break
    }
  }
  X = rbind(m1, m2)
  Y = rep(c(1, 2), each = n)
  return(data.frame(X = X, Y = as.factor(Y)))
}

set.seed(1)
dat = genXY()
## MARS
library(mda)
# mars = earth(Y~., data = dat, degree = 10) 
# mars = earth(dat[, 1:4], as.numeric(dat[, 5]), degree = 10) 
#marsfit = mars(dat[, 1:4], as.numeric(dat[, 5]), degree = 1)
marsfit = mars(dat[, 1:4], as.numeric(dat[, 5]), degree = 10)
#class(marsfit) = c("mars2", class(marsfit))
predict.mars2 <- function(model, newdata)
{
  pred = predict(model, newdata)
  return(ifelse(pred < 1.5, 1, 2))
}

pred = predict.mars2(marsfit, dat[, 1:4])
sum(pred != dat[, 5])/200