## ######################################################################################
## Learn and reproduce the program about regression trees in Appried Predicitive Modeling
## 
## refer to http://www.appliedpredictivemodeling.com for more details
## 
## reorganized by szcf-weiya <szcfweiya@gmail.com>
## ######################################################################################

## load data
library(AppliedPredictiveModeling)
data(solubility)

## control function
library(caret)
set.seed(123)
indx <- createFolds(solTrainY, returnTrain = TRUE)
ctrl <- trainControl(method = "cv", index = indx)

## #############################################################
## basic regression trees
## #############################################################

trainData <- solTrainXtrans
trainData$y <- solTrainY

## trees with different depth
library(rpart)
rpStump <- rpart(y ~ ., data = trainData, 
                 control = rpart.control(maxdepth = 1))
rpSmall <- rpart(y ~ ., data = trainData, 
                 control = rpart.control(maxdepth = 2))

## tune the model
set.seed(123)
cartTune <- train(x = solTrainXtrans, y = solTrainY,
                  method = "rpart",
                  tuneLength = 25,
                  trControl = ctrl)

## plot the tuning results
plot(cartTune, scales = list(x = list(log = 10)))

## variable importances
## NOTE: `competes` is an argument that controls whether splits not used in the tree should be included
## in the importance calculations
cartImp <- varImp(cartTune, scale = FALSE, competes = FALSE)

## save results
testResults <- data.frame(obs = solTestY,
                          CART = predict(cartTune, solTestXtrans))


## tune the conditional inference tree
## difference: tuneGrid
cGrid <- data.frame(mincriterion = sort(c(.95, seq(.75, .99, length = 2))))

set.seed(123)
ctreeTune <- train(x = solTrainXtrans, y = solTrainY,
                   method = "ctree",
                   tuneGrid = cGrid,
                   trControl = ctrl)

## plot
plot(ctreeTune)

## #######################################################
## Regression Model Trees
## 
## use M5
## #######################################################
set.seed(100)
m5Tune <- train(x = solTrainXtrans, y = solTrainY,
                method = "M5",
                trControl = ctrl,
                control = Weka_control(M = 10))
m5Tune
plot(m5Tune)

## WARNING!! The above code cannot work.

## #######################################################
## bagged trees
## #######################################################

library(doMC)
registerDoMC(4)

set.seed(1)

treebagTune <- train(x = solTrainXtrans, y = solTrainY,
                     method = "treebag",
                     nbagg = 50,
                     trControl = ctrl)

treebagTune

## #######################################################
## random forests
## #######################################################
mtryGrid <- data.frame(mtry = floor(seq(10, ncol(solTrainXtrans), length = 10)))
set.seed(100)
rfTune <- train(x = solTrainXtrans, y = solTrainY,
                method = "rf",
                tuneGrid = mtryGrid,
                ntree = 1000,
                importance = TRUE,
                trControl = ctrl)
rfTune

plot(rfTune)

rfImp <- varImp(rfTune, scale = FALSE)
rfImp

## #######################################################
## boosting
## #######################################################
gbmGrid <- expand.grid(interaction.depth = seq(1, 7, by = 2),
                       n.trees = seq(100, 1000, by = 50),
                       shrinkage = c(0.01, 0.1))
set.seed(100)
gbmTune <- train(x = solTrainXtrans, y = solTrainY,
                 method = "gbm",
                 tuneGrid = gbmGrid,
                 trControl = ctrl,
                 verbose = FALSE)
gbmTune

plot(gbmTune, auto.key = list(columns = 4, lines = TRUE))

gbmImp <- varImp(gbmTune, scale = FALSE)
gbmImp

## #######################################################
## cubist
## #######################################################
cbGrid <- expand.grid(committees = c(1:10, 20, 50, 75, 100), 
                      neighbors = c(0, 1, 5, 9))

set.seed(100)
cubistTune <- train(solTrainXtrans, solTrainY,
                    "cubist",
                    tuneGrid = cbGrid,
                    trControl = ctrl)
cubistTune

plot(cubistTune, auto.key = list(columns = 4, lines = TRUE))

cbImp <- varImp(cubistTune, scale = FALSE)
cbImp