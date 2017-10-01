## based on the code in online  StatLearning(https://lagunita.stanford.edu/courses/HumanitiesSciences/StatLearning/Winter2016/info) course
library(ISLR)

## use `Auto` dataset

## show informations about `Auto` dataset
str(Auto)
#
# 'data.frame':	392 obs. of  9 variables:
#   $ mpg         : num  18 15 18 16 17 15 14 14 14 15 ...
# $ cylinders   : num  8 8 8 8 8 8 8 8 8 8 ...
# $ displacement: num  307 350 318 304 302 429 454 440 455 390 ...
# $ horsepower  : num  130 165 150 150 140 198 220 215 225 190 ...
# $ weight      : num  3504 3693 3436 3433 3449 ...
# $ acceleration: num  12 11.5 11 12 10.5 10 9 8.5 10 8.5 ...
# $ year        : num  70 70 70 70 70 70 70 70 70 70 ...
# $ origin      : num  1 1 1 1 1 1 1 1 1 1 ...
# $ name        : Factor w/ 304 levels "amc ambassador brougham",..: 49 36 231 14 161 141 54 223 241 2 ...

## plot the graph of mpg vs horsepower
plot(mpg~horsepower, data = Auto)

## loocv
glm.fit = glm(mpg~horsepower, data = Auto)
cv.glm(Auto, glm.fit)$delta
# [1] 24.23151 24.23114 ## The first component is the raw cross-validation estimate of prediction error.

## simpler function to realize loocv
loocv <- function(fit)
{
  h = lm.influence(fit)$h
  mean((residuals(fit)/(1-h))^2)
}

loocv(glm.fit)
# [1] 24.23151 ## the same results


## choose best degree by cv
cv.error = numeric(5)
degree = 1:5
for (d in degree)
{
  glm.fit = glm(mpg~poly(horsepower, d), data = Auto)
  cv.error[d] = loocv(glm.fit)
}
plot(degree, cv.error, type = "b")

## 10-fold CV

cv.error10 = numeric(5)
for (d in degree)
{
  glm.fit = glm(mpg~poly(horsepower, d), data = Auto)
  cv.error10[d] = cv.glm(Auto, glm.fit, K = 10)$delta[1]
}
lines(degree, cv.error10, type = "b", col="red")
