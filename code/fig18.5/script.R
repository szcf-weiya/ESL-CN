library(glmnet)

# import data
raw_X = read.delim("../../data/Leukemia/data_set_ALL_AML_train.txt", header = FALSE)
# remove the first columns and the `call` columns
train_X = raw_X[, seq(3, ncol(raw_X), 2)]
# remove the last empty column
train_X = train_X[, 1:(ncol(train_X)-1)]
# separate the id and the data
id = train_X[1,]
train_X = train_X[2:nrow(train_X),]
colnames(train_X) = id

