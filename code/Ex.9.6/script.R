data = read.csv("../../data/Ozone/ozone.csv", sep = "\t")

# GAM
library(gam)
fit = gam(I(ozone^(1/3))~s(temperature) + s(wind) + s(radiation), data = data)
par(mfrow=c(1, 3))
plot(fit, se = T)

# tree
library(rpart)
library(rpart.plot)
fit.tree = rpart(I(ozone^(1/3))~ temperature + wind + radiation, data = data)
rpart.plot(fit.tree)

# MARS
library(earth)
fit.mars = earth(I(ozone^(1/3))~ temperature + wind + radiation, data = data)
summary(fit.mars)

# PRIM
library(prim)
fit.prim = prim.box(as.matrix(data[,-1]), as.numeric(data[, 1]))
summary(fit.prim, print.box = T)

plotprim = function(x, y, box = box, ...) {
  plot(x, y, ...)
  rect(box[1, 1], box[1, 2], box[2, 1], box[2, 2], border = "red")
}
colname = colnames(data)
par(mfrow = c(1, 3))
for (i in 2:3)
  for (j in (i+1):4)
    plotprim(data[,i], data[, j], fit.prim$box[[1]][,c(i-1, j-1)], 
             xlab = colname[i], ylab = colname[j])