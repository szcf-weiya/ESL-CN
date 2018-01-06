# use class package
# knn for classification
library(class)
train <- rbind(iris3[1:25,,1], iris3[1:25,,2], iris3[1:25,,3])
test <- rbind(iris3[26:50,,1], iris3[26:50,,2], iris3[26:50,,3])
cl <- factor(c(rep("s",25), rep("c",25), rep("v",25)))
res = knn(train, test, cl, k = 3, prob=TRUE)
attributes(.Last.value)

# compare the res and original data 
# the true class label is also cl based on the construction of test dataset
table(res, cl)

# knn for regression
# use caret package
library(caret)
data(BloodBrain)
inTrain <- createDataPartition(logBBB, p = .8)[[1]]

trainX <- bbbDescr[inTrain,]
trainY <- logBBB[inTrain]

testX <- bbbDescr[-inTrain,]
testY <- logBBB[-inTrain]

fit <- knnreg(trainX, trainY, k = 3)

plot(testY, predict(fit, testX))   
