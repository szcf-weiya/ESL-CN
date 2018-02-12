library(e1071)

## generate data
set.seed(123)
x = matrix(rnorm(20*2), ncol = 2)
y = c(rep(-1, 10), rep(1, 10))
x[y==1, ] = x[y==1, ] + 1
png("ex1.png")
plot(x, col = (3-y))
dev.off()
## fit the support vector classification
dat = data.frame(x = x, y = as.factor(y))
svmfit = svm(y~., data = dat, kernel = "linear", cost = 10, scale = FALSE)
png("ex1_svm.png")
plot(svmfit, dat)
dev.off()

## determine the identities
svmfit$index
summary(svmfit)

## a smaller cost
svmfit = svm(y~., data = dat, kernel = "linear", cost = 0.1, scale = FALSE)
png("ex1_svm_smaller.png")
plot(svmfit, dat)
dev.off()
svmfit$index

## cross-validation
set.seed(123)
tune.out = tune(svm, y~., data = dat, kernel="linear", ranges = list(cost=c(0.001, 0.01, 0.1, 1, 5, 10, 100)))
summary(tune.out)

## pick up the best model
bestmod = tune.out$best.model
summary(bestmod)

# Call:
#   best.tune(method = svm, train.x = y ~ ., data = dat, ranges = list(cost = c(0.001, 
#                                                                               0.01, 0.1, 1, 5, 10, 100)), kernel = "linear")
# 
# 
# Parameters:
#   SVM-Type:  C-classification 
# SVM-Kernel:  linear 
# cost:  1 
# gamma:  0.5 
# 
# Number of Support Vectors:  8
# 
# ( 4 4 )
# 
# 
# Number of Classes:  2 
# 
# Levels: 
#   -1 1

## prediction
xtest = matrix(rnorm(20*2), ncol = 2)
ytest = sample(c(-1, 1), 20, rep = TRUE)
xtest[ytest == 1, ] = xtest[ytest == 1, ] + 1
testdat = data.frame(x = xtest, y = as.factor(ytest))
ypred = predict(bestmod, testdat)
table(predict = ypred, truth = testdat$y)

#        truth
# predict -1 1
#      -1  8 2
#      1   1 9

## ######################
## support vector machine
## ######################

## generate some data with a non-linar class boundary
set.seed(123)
x = matrix(rnorm(200*2), ncol = 2)
x[1:100, ] = x[1:100, ] + 2
x[101:150, ] = x[101:150, ] - 2
y = c(rep(1, 150), rep(2, 50))
dat = data.frame(x = x, y = as.factor(y))
png("ex2.png")
plot(x, col = y)
dev.off()
## randomly split into training and testing groups
train = sample(200, 100)

## training data using radial kernel
svmfit = svm(y~., data = dat[train, ], kernel = "radial", cost = 1)
png("ex2_svm.png")
plot(svmfit, dat[train, ])
dev.off()
## cross-validation 
set.seed(123)
tune.out = tune(svm, y~., data = dat[train, ], kernel = "radial",
                ranges = list(cost = c(0.1, 1, 10, 100, 1000),
                              gamma = c(0.5, 1, 2, 3, 4)))
summary(tune.out)

# Parameter tuning of ‘svm’:
#   
#   - sampling method: 10-fold cross validation 
# 
# - best parameters:
#   cost gamma
# 10     3
# 
# - best performance: 0.08 
# 
# - Detailed performance results:
#   cost gamma error dispersion
# 1  1e-01   0.5  0.22 0.10327956
# 2  1e+00   0.5  0.11 0.08755950
# 3  1e+01   0.5  0.09 0.05676462
# 4  1e+02   0.5  0.11 0.08755950
# 5  1e+03   0.5  0.10 0.08164966
# 6  1e-01   1.0  0.22 0.10327956
# 7  1e+00   1.0  0.11 0.08755950
# 8  1e+01   1.0  0.10 0.08164966
# 9  1e+02   1.0  0.09 0.07378648
# 10 1e+03   1.0  0.13 0.08232726
# 11 1e-01   2.0  0.22 0.10327956
# 12 1e+00   2.0  0.12 0.09189366
# 13 1e+01   2.0  0.11 0.07378648
# 14 1e+02   2.0  0.12 0.06324555
# 15 1e+03   2.0  0.16 0.08432740
# 16 1e-01   3.0  0.22 0.10327956
# 17 1e+00   3.0  0.13 0.09486833
# 18 1e+01   3.0  0.08 0.07888106
# 19 1e+02   3.0  0.14 0.06992059
# 20 1e+03   3.0  0.16 0.08432740
# 21 1e-01   4.0  0.22 0.10327956
# 22 1e+00   4.0  0.12 0.09189366
# 23 1e+01   4.0  0.09 0.07378648
# 24 1e+02   4.0  0.13 0.06749486
# 25 1e+03   4.0  0.17 0.11595018

## prediction
table(true = dat[-train, "y"], pred = predict(tune.out$best.model, newdata = dat[-train, ]))

#       pred
# true  1  2
#    1 72  0
#    2  6 22

## ROC curves
library(ROCR)
rocplot = function(pred, truth, ...) {
  if (mean(pred[truth==1]) > mean(pred[truth==2]))
    predob = prediction(pred, truth, label.ordering = c("2", "1"))
  else
    predob = prediction(pred, truth, label.ordering = c("1", "2"))
  perf = performance(predob , "tpr" , "fpr")
  plot(perf, ...) 
}
svmfit.opt = svm(y~., data = dat[train, ], kernel = "radial",
                 gamma = 3, cost = 10, decision.values = T)
fitted = attributes(predict(svmfit.opt, dat[train, ], decision.values = T))$decision.values
par(mfrow = c(1, 2))
rocplot ( fitted , dat [ train ,"y"] , main ="Training Data")

## increasing gamma to produce a more flexible fit
svmfit.flex = svm(y~. , data = dat [ train ,] , kernel = "radial", gamma =50 , cost =1 , decision.values = T )
fitted = attributes(predict(svmfit.flex, dat[train ,], decision.values = T ) ) $decision.values
rocplot(fitted, dat[train, "y"], add = T, col ="red")

## on test data
fitted = attributes(predict(svmfit.opt, dat[-train, ], decision.values = T ) ) $decision.values
rocplot(fitted, dat[-train, "y"] , main = "Test Data")
fitted = attributes(predict(svmfit.flex, dat[-train, ], decision.values = T ) ) $decision.values
rocplot(fitted, dat[-train, "y"] , add =T, col ="red")