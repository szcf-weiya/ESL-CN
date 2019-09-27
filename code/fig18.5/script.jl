using DelimitedFiles
using GLMNet

# import data
folder = "data/Leukemia/"
raw_X = readdlm(folder*"data_set_ALL_AML_train.txt", '\t')
# remove the first columns and the call columns
train_X = raw_X[:, 3:2:end]
# remove the last empty column
train_X = train_X[:, 1:end-1]
# separate the id and the data
id = Int.(train_X[1, :])
train_X = Array{Float64, 2}(train_X[2:end, :]')
# get from `table_ALL_AML_samples.rtf`
train_y = hcat(vcat(fill(1, 27, 1), fill(0, 38-27, 1)),
               vcat(fill(0, 27, 1), fill(1, 38-27, 1)))

grid = collect(range(exp(-8), exp(-1), length=100))
lasso_path = glmnet(train_X, train_y, Binomial(), lambda=grid)
elnet_path = glmnet(train_X, train_y, Binomial(), lambda=grid, alpha=0.8)
