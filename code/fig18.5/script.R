library(glmnet)

# import data (set quote = "" is important, otherwise the data cannot be imported correctly)
raw_X = read.delim("../../data/Leukemia/data_set_ALL_AML_train.txt", header = FALSE, quote = "")
# remove the first columns and the `call` columns
train_X = raw_X[, seq(3, ncol(raw_X), 2)]
# remove the last empty column
train_X = train_X[, 1:(ncol(train_X)-1)]
# separate the id and the data
id = train_X[1,]
train_X = train_X[2:nrow(train_X),]
colnames(train_X) = id
# get from `table_ALL_AML_samples.rtf`
train_y = rep(c(1, 2), c(27, 38-27))

# fit regularized logistic regression paths (with raw train X)
## create grid to fit lasso/ridge path
grid = seq(exp(-8), exp(-1), length.out = 100)
lasso.path = glmnet(t(train_X), train_y, family = "binomial", lambda = grid)
elnet.path = glmnet(t(train_X), train_y, family = "binomial", alpha = 0.8, lambda = grid)
par(mfrow=c(1, 2))
plot(lasso.path, xvar = "lambda", main = "Lasso (raw data)")
plot(elnet.path, xvar = "lambda", main = "Elastic Net (raw data)")

# scale train_X
scale_train_X = scale(t(train_X))
lasso.path2 = glmnet(scale_train_X, train_y, family = "binomial", lambda = grid)
elnet.path2 = glmnet(scale_train_X, train_y, family = "binomial", alpha = 0.8, lambda = grid)
par(mfrow=c(1, 2))
plot(lasso.path2, xvar = "lambda", main = "Lasso (scaled data)")
plot(elnet.path2, xvar = "lambda", main = "Elastic Net (scaled data)")
