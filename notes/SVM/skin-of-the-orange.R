## ########################################################################################
## R code for the simulation of Tab. 12.2
## 
## author: szcf-weiya <szcfweiya@gmail.com>
## 
## more details refer to https://esl.hohoweiya.xyz/notes/SVM/skin-of-the-orange/index.html
##
## ########################################################################################

## #####################################
## generate dataset
## 
## `No Noise Features`: num_noise = 0
## `Six Noise Features`: num_noise = 6
## #####################################

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

## #############################################
## Calculate Test Error(SE)
## ############################################

predict.mars2 <- function(model, newdata)
{
  pred = predict(model, newdata)
  ifelse(pred < 1.5, 1, 2)
}

calcErr <- function(model, n = 1000, nrep = 50, num_noise = 0, method = "SVM")
{
  err = sapply(1:nrep, function(i){
    dat = genXY(n, num_noise = num_noise)
    datX = dat[, -ncol(dat)]
    datY = dat[, ncol(dat)]
    if (method == "SVM")
      pred = predict(model, newdata = datX)
    else if (method == "MARS")
      pred = predict.mars2(model, newdata = datX)
    else if (method == "BRUTO")
      pred = predict.mars2(model, newdata = as.matrix(datX))
    sum(pred != datY)/(2*n) # Attention!! The total number of observations is 2n, not n
  })
  return(list(TestErr = mean(err),
              SE = sd(err)))
}

## =================================================================================
##                            No Noise
## =================================================================================

set.seed(1)
dat = genXY()

## ############################################
## Model Training
##
## use cross-validation to choose the best cost
## ############################################
library(e1071)

## SV classifier
set.seed(123)
sv = tune.svm(Y~., data = dat, kernel = "linear", cost = 2^(-4:4))
summary(sv) # 0.5
#set.seed(1234)
#sv = tune.svm(Y~., data = dat, kernel = "linear", cost = seq(1, 4, by = 0.2))
#summary(sv) 

## SVM/poly2
set.seed(123)
poly2 = tune.svm(Y~., data = dat, kernel = "polynomial", degree = 2, cost = 2^(-4:8))
summary(poly2) # c = 16
set.seed(123)
poly2 = tune.svm(Y~., data = dat, kernel = "polynomial", degree = 2, cost = seq(8, 32, by = 1))
summary(poly2) # c = 12

## SVM/poly5
set.seed(123)
poly5 = tune.svm(Y~., data = dat, kernel = "polynomial", degree = 5, cost = 2^(-4:8))
summary(poly5) # c = 32
# set.seed(1234)
# poly5 = tune.svm(Y~., data = dat, kernel = "polynomial", degree = 5, cost = seq(16, 64, by = 2))
# summary(poly5) # c = 28

## SVM/poly10
set.seed(123)
poly10 = tune.svm(Y~., data = dat, kernel = "polynomial", degree = 10, cost = 2^(-4:8))
summary(poly10) # 1
# set.seed(1234)
# poly10 = tune.svm(Y~., data = dat, kernel = "polynomial", degree = 10, cost = seq(0.5, 2, by = 0.1))
# summary(poly10) # 0.5

library(mda)
## BRUTO
brutofit = bruto(dat[, 1:4], as.numeric(dat[, 5]))

## MARS
marsfit = mars(dat[, 1:4], as.numeric(dat[, 5]), degree = 10)

# No Noise
calcErr(sv$best.model) 
calcErr(poly2$best.model) 
calcErr(poly5$best.model) 
calcErr(poly10$best.model) 
calcErr(brutofit, method = "BRUTO")
calcErr(marsfit, method = "MARS")

## =================================================================================
##                            Six Noise
## =================================================================================
set.seed(1)
dat = genXY(num_noise = 6)
## SV classifier
set.seed(123)
sv = tune.svm(Y~., data = dat, kernel = "linear", cost = 2^(-8:4))
summary(sv) # 0.5
#set.seed(1234)
#sv = tune.svm(Y~., data = dat, kernel = "linear", cost = seq(0., 4, by = 0.2))
#summary(sv) # 2.6

## SVM/poly2
set.seed(123)
poly2 = tune.svm(Y~., data = dat, kernel = "polynomial", degree = 2, cost = 2^(-4:8))
summary(poly2) # c = 1
# set.seed(1234)
# poly2 = tune.svm(Y~., data = dat, kernel = "polynomial", degree = 2, cost = seq(8, 32, by=2))
# summary(poly2) # c = 8

## SVM/poly5
set.seed(123)
poly5 = tune.svm(Y~., data = dat, kernel = "polynomial", degree = 5, cost = 2^(-4:8))
summary(poly5) # c = 32
set.seed(1234)
poly5 = tune.svm(Y~., data = dat, kernel = "polynomial", degree = 5, cost = seq(12, 64, by = 2))
summary(poly5) # c = 14

## SVM/poly10
set.seed(123)
poly10 = tune.svm(Y~., data = dat, kernel = "polynomial", degree = 10, cost = 2^(-4:8))
summary(poly10) # 64
set.seed(1234)
poly10 = tune.svm(Y~., data = dat, kernel = "polynomial", degree = 10, cost = seq(32, 128, by = 4))
summary(poly10) # 48

## BRUTO
brutofit = bruto(dat[, 1:10], as.numeric(dat[, 11]))

## MARS
# mars = earth(Y~., data = dat, degree = 10) 
marsfit = mars(dat[, 1:10], as.numeric(dat[, 11]), degree = 10)

# Six Noise
calcErr(sv$best.model, num_noise = 6) 
calcErr(poly2$best.model, num_noise = 6) 
calcErr(poly5$best.model, num_noise = 6) 
calcErr(poly10$best.model, num_noise = 6) 
calcErr(brutofit, num_noise = 6, method = "BRUTO")
calcErr(marsfit, num_noise = 6, method = "MARS")


## Bayes Error
0.5*(pchisq(16, 4) - pchisq(9, 4))