## ################################################
## Example code in Chapter 15 of R in Action
## 
## reorganized by szcf-weiya <szcfweiya@gmail.com>
## ################################################

## ################################################
## section 15.2 Identifying missing values
## ################################################

# load the dataset
data(sleep, package="VIM")
# list the rows that do not have missing values
sleep[complete.cases(sleep),]
# list the rows that have one or more missing values
sleep[!complete.cases(sleep),]

## ################################################
## section 15.3 Exploring missing values patterns
## ################################################

## Tabulating missing values

library(mice)
data(sleep, package="VIM")
md.pattern(sleep)

## Exploring missing data visually
library("VIM")
aggr(sleep, prop=FALSE, numbers=TRUE)
matrixplot(sleep)
marginplot(sleep[c("Gest","Dream")], pch=c(20),
           col=c("darkgray", "red", "blue"))

## Using correlations to explore missing values

x <- as.data.frame(abs(is.na(sleep)))
y <- x[which(sd(x) > 0)]
cor(y)
cor(sleep, y, use="pairwise.complete.obs")

## ########################################################
## section 15.6 Complete-case analysis (listwise deletion)
## ########################################################
newdata <- mydata[complete.cases(mydata),]
newdata <- na.omit(mydata)
fit <- lm(Dream ~ Span + Gest, data=na.omit(sleep))
summary(fit)

## ########################################################
## section 15.7 Multiple imputation
## ########################################################
library(mice)
data(sleep, package="VIM")
imp <- mice(sleep, seed=1234)
fit <- with(imp, lm(Dream ~ Span + Gest))
pooled <- pool(fit)
summary(pooled)
