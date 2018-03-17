## ############################################################
## Example code for PRIM
## 
## author: szcf-weiya <szcfweiya@gmail.com>
## please refer to 
##   https://esl.hohoweiya.xyz/09-Additive-Models-Trees-and-Related-Methods/9.3-PRIM/index.html 
## for more details
## ############################################################

## example from help documents

library(supervisedPRIM)
data(iris)
yData <- factor(ifelse(iris$Species == "setosa", "setosa", "other"), 
                levels = c("setosa", "other"))
xData <- iris
xData$Species <- NULL
primModel <- supervisedPRIM(x = xData, y = yData)
