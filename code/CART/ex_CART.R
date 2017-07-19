library(rpart)
library(rpart.plot)
fit <- rpart(Kyphosis ~ Age + Number + Start, data = kyphosis)
rpart.plot(fit)