## ###########################################################################################
## Learn and reproduce the program about classification trees in Appried Predicitive Modeling
## 
## refer to http://www.appliedpredictivemodeling.com for more details
## 
## reorganized by szcf-weiya <szcfweiya@gmail.com>
## ###########################################################################################
load('grantData.RData')

library(caret)
library(pROC)

ctrl <- trainControl(method = "LGOCV",
                     summaryFunction = twoClassSummary,
                     classProbs = TRUE,
                     index = list(TrainSet = pre2008),
                     savePredictions = TRUE)

## ######################################################
## rpartFit
## ######################################################
set.seed(476)
rpartFit <- train(x = training[,fullSet], 
                  y = training$Class,
                  method = "rpart",
                  tuneLength = 30,
                  metric = "ROC",
                  trControl = ctrl)
rpartFit

## visualization of trees
library(partykit)
plot(as.party(rpartFit$finalModel)) # output: rpart_party.svg
library(maptree)
draw.tree(rpartFit$finalModel) # output: rpart_maptree.svg
library(rpart.plot)
rpart.plot(rpartFit$finalModel, fallen.leaves = FALSE) # output: rpart_plot.svg
# or
prp(rpartFit$finalModel) # output: rpart_prp.svg

## confusion matrix
rpartCM <- confusionMatrix(rpartFit, norm = "none")
rpartCM
# Repeated Train/Test Splits Estimated (1 reps, 75%) Confusion Matrix 
# 
# (entries are un-normalized aggregated counts)
# 
# Confusion Matrix and Statistics
# 
# Reference
# Prediction     successful unsuccessful
# successful          486          162
# unsuccessful         84          825
# 
# Accuracy : 0.842           
# 95% CI : (0.8229, 0.8598)
# No Information Rate : 0.6339          
# P-Value [Acc > NIR] : < 2.2e-16       
# 
# Kappa : 0.6692          
# Mcnemar's Test P-Value : 9.138e-07       
#                                           
#             Sensitivity : 0.8526          
#             Specificity : 0.8359          
#          Pos Pred Value : 0.7500          
#          Neg Pred Value : 0.9076          
#              Prevalence : 0.3661          
#          Detection Rate : 0.3121          
#    Detection Prevalence : 0.4162          
#       Balanced Accuracy : 0.8442          
#                                           
#        'Positive' Class : successful      

## calculate roc
rpartRoc <- roc(response = rpartFit$pred$obs,
                predictor = rpartFit$pred$successful,
                levels = rev(levels(rpartFit$pred$obs)))

## ######################################################
## rpartFactorFit
## ######################################################
set.seed(476)
rpartFactorFit <- train(x = training[,factorPredictors], 
                        y = training$Class,
                        method = "rpart",
                        tuneLength = 30,
                        metric = "ROC",
                        trControl = ctrl)
## visiualization
#plot(as.party(rpartFactorFit$finalModel))
## confusion matrix
rpartFactorCM <- confusionMatrix(rpartFactorFit, norm = "none")
## roc
rpartFactorRoc <- roc(response = rpartFactorFit$pred$obs,
                      predictor = rpartFactorFit$pred$successful,
                      levels = rev(levels(rpartFactorFit$pred$obs)))


## ######################################################
## combine roc plot of rpartFit & rpartFactorFit
## ######################################################
png('ROC-plot-of-rpartFit-and-rpartFactorFit.png')
plot(rpartRoc, type = "s", print.thres = c(.5),
     print.thres.pch = 3,
     print.thres.pattern = "",
     print.thres.cex = 1.2,
     col = "red", legacy.axes = TRUE,
     print.thres.col = "red")
plot(rpartFactorRoc,
     type = "s",
     add = TRUE,
     print.thres = c(.5),
     print.thres.pch = 16, legacy.axes = TRUE,
     print.thres.pattern = "",
     print.thres.cex = 1.2)
legend(.75, .2,
       c("Grouped Categories", "Independent Categories"),
       lwd = c(1, 1),
       col = c("black", "red"),
       pch = c(16, 3))
dev.off()

## alternative method for rocplot
## ROC curves
library(ROCR)
## firstly custom your own rocplot function
## the argument `obj` can be rpartFactorFit or rpartFit
## it plays the similar role as `roc()` above.
rocplot = function(obj, ...) {
  predob = prediction(obj$pred$successful,
                      obj$pred$obs,
                      label.ordering = rev(levels(obj$pred$obs)))
  perf = performance(predob , "tpr" , "fpr")
  plot(perf, ...) 
}
png('ROC-plot-of-rpartFit-and-rpartFactorFit-via-ROCR.png')
rocplot(rpartFit, col="red")
rocplot(rpartFactorFit, add=T)
legend(.15, .2,
       c("Grouped Categories", "Independent Categories"),
       lwd = c(1, 1),
       col = c("black", "red"),
       pch = c(16, 3))
dev.off()


## ######################################################
## J48 Factor Fit
## ######################################################
set.seed(476)
j48FactorFit <- train(x = training[,factorPredictors], 
                      y = training$Class,
                      method = "J48",
                      metric = "ROC",
                      trControl = ctrl)

j48FactorCM <- confusionMatrix(j48FactorFit, norm = "none")

j48FactorRoc <- roc(response = j48FactorFit$pred$obs,
                    predictor = j48FactorFit$pred$successful,
                    levels = rev(levels(j48FactorFit$pred$obs)))
## ######################################################
## J48 Fit
## ######################################################
j48Fit <- train(x = training[,fullSet], 
                y = training$Class,
                method = "J48",
                metric = "ROC",
                trControl = ctrl)

j48CM <- confusionMatrix(j48Fit, norm = "none")
j48Roc <- roc(response = j48Fit$pred$obs,
              predictor = j48Fit$pred$successful,
              levels = rev(levels(j48Fit$pred$obs)))

png('ROC-plot-of-j48Roc-and-j48FactorRoc.png')
plot(j48FactorRoc, type = "s", print.thres = c(.5), 
     print.thres.pch = 16, print.thres.pattern = "", 
     print.thres.cex = 1.2, legacy.axes = TRUE)
plot(j48Roc, type = "s", print.thres = c(.5), 
     print.thres.pch = 3, print.thres.pattern = "", 
     print.thres.cex = 1.2, legacy.axes = TRUE,
     add = TRUE, col = "red", print.thres.col = "red")
legend(.75, .2,
       c("Grouped Categories", "Independent Categories"),
       lwd = c(1, 1),
       col = c("black", "red"),
       pch = c(16, 3))
dev.off()
## plot via ROCR
png('ROC-plot-of-j48Roc-and-j48FactorRoc-via-ROCR.png')
rocplot(C5Fit, col="red")
rocplot(C5FactorFit, add=T)
legend(.15, .2,
       c("Grouped Categories", "Independent Categories"),
       lwd = c(1, 1),
       col = c("black", "red"),
       pch = c(16, 3))
dev.off()

## ######################################################
## C5.0
## ######################################################
set.seed(123)
C5Fit <- train(x = training[,fullSet], 
                y = training$Class,
                method = "C5.0",
                metric = "ROC",
                trControl = ctrl)

C5CM <- confusionMatrix(C5Fit, norm = "none")
C5Roc <- roc(response = C5Fit$pred$obs,
              predictor = C5Fit$pred$successful,
              levels = rev(levels(C5Fit$pred$obs)))

## for factor
set.seed(123)
C5FactorFit <- train(x = training[,factorPredictors], 
                      y = training$Class,
                      method = "C5.0",
                      metric = "ROC",
                      trControl = ctrl)

C5FactorCM <- confusionMatrix(C5FactorFit, norm = "none")

C5FactorRoc <- roc(response = C5FactorFit$pred$obs,
                    predictor = C5FactorFit$pred$successful,
                    levels = rev(levels(C5FactorFit$pred$obs)))


png('ROC-plot-of-C5Roc-and-C5FactorRoc.png')
plot(C5FactorRoc, type = "s", print.thres = c(.5), 
     print.thres.pch = 16, print.thres.pattern = "", 
     print.thres.cex = 1.2, legacy.axes = TRUE)
plot(C5Roc, type = "s", print.thres = c(.5), 
     print.thres.pch = 3, print.thres.pattern = "", 
     print.thres.cex = 1.2, legacy.axes = TRUE,
     add = TRUE, col = "red", print.thres.col = "red")
legend(.75, .2,
       c("Grouped Categories", "Independent Categories"),
       lwd = c(1, 1),
       col = c("black", "red"),
       pch = c(16, 3))
dev.off()
## plot via ROCR
png('ROC-plot-of-C5Roc-and-C5FactorRoc-via-ROCR.png')
rocplot(C5Fit, col="red")
rocplot(C5FactorFit, add=T)
legend(.15, .2,
       c("Grouped Categories", "Independent Categories"),
       lwd = c(1, 1),
       col = c("black", "red"),
       pch = c(16, 3))
dev.off()

## ######################################################
## Rule-based Models
## 
## refer to:
##  1. http://topepo.github.io/caret/train-models-by-tag.html#Rule_Based_Model
## ######################################################

set.seed(476)
partFit <- train(x = training[,fullSet], 
                 y = training$Class,
                 method = "PART",
                 metric = "ROC",
                 trControl = ctrl)
partCM <- confusionMatrix(partFit, norm = "none")

partRoc <- roc(response = partFit$pred$obs,
               predictor = partFit$pred$successful,
               levels = rev(levels(partFit$pred$obs)))