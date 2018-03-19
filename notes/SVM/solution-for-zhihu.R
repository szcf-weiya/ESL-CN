## ##########################################################################
## R code for the zhihu question 
##        https://www.zhihu.com/question/269082342/answer/345343234 
##
## author: szcf-weiya <szcfweiya@gmail.com>
## 
## ##########################################################################

## generate data
x = matrix(c(1, 0,
             0, 1,
             0, -1,
             -1, 0,
             0, 2,
             0, -2,
             -2, 0), byrow = T, ncol = 2)
y = c(-1, -1, -1, 1, 1, 1, 1)
phi <- function(x){
  return(c(x[2]^2 - 2*x[1] + 3, x[1]^2 - 2*x[2] - 3))
}
z = t(apply(x, 1, phi))
df = data.frame(z, factor(y))
colnames(df) <- c("z1", "z2", "y")
## cost = 1
svmfit = svm(y~., data = df, kernel="linear", scale = F,cost=1)
w = t(svmfit$coefs) %*% svmfit$SV
b = -svmfit$rho
w
b
## cost = 10000
svmfit = svm(y~., data = df, kernel="linear", scale = F,cost=1000000)
w = t(svmfit$coefs) %*% svmfit$SV
b = -svmfit$rho
w
b
