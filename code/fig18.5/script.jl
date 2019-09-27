using DelimitedFiles
using GLMNet
using StatsBase
using Plots
using LaTeXStrings
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

# calculate training error
lasso_train_val = predict(lasso_path, train_X)
elnet_train_val = predict(elnet_path, train_X)
lasso_train_yhat = predict(lasso_path, train_X) .> 0
elnet_train_yhat = predict(elnet_path, train_X) .> 0
lasso_train_err = [sum(lasso_train_yhat[:, i] .!= train_y[:, 2]) for i=1:size(lasso_train_yhat, 2)] / length(train_y[:, 2])
elnet_train_err = [sum(elnet_train_yhat[:, i] .!= train_y[:, 2]) for i=1:size(elnet_train_yhat, 2)] / length(train_y[:, 2])

# calculate deviance
function calc_dev(pred_val, grid)
    dev = zeros(length(grid))
    for i = 1:length(grid)
        phat = 1 ./ (1 .+ exp.(pred_val[:, i]))
        dev[i] = -sum( phat .* log.(phat) + (1 .- phat) .* log.(1 .- phat) )
    end
    return dev
end
lasso_train_dev = calc_dev(lasso_train_val, grid)

# #############################
# test
# #############################

# import test data
raw_test_X = readdlm(folder*"data_set_ALL_AML_independent.txt", '\t')
test_X = raw_test_X[:, 3:2:end]
test_id = Int.(test_X[1, :])
test_X = Array{Float64, 2}(test_X[2:end, :]')
lasso_test_val = predict(lasso_path, test_X)
elnet_test_val = predict(elnet_path, test_X)
lasso_yhat = predict(lasso_path, test_X) .> 0
elnet_yhat = predict(elnet_path, test_X) .> 0
# get from `Leuk_ALL_AML.test.cls` !!! strange thing!! it has 35 test samples, but actually it is only 34 in any other places.
# raw_test_y = readdlm(folder*"Leuk_ALL_AML.test.cls")
# test_y = raw_test_y[2,:]

# get from `table_ALL_AML_samples.txt`
test_y = vcat(fill(0, 49-39+1, 1), fill(1, 54-50+1, 1), fill(0, 56-55+1), fill(1, 58-57+1, 1), 0, fill(1, 66-60+1, 1), fill(0, 72-67+1, 1))
# sort according to the test_id
# test_y = test_y[sortperm(test_id)] !!
test_y = test_y[Int.(tiedrank(test_id))]
lasso_test_err = [sum(lasso_yhat[:, i] .!= test_y) for i=1:size(lasso_yhat, 2)] / length(test_y)
elnet_test_err = [sum(elnet_yhat[:, i] .!= test_y) for i=1:size(elnet_yhat, 2)] / length(test_y)

lasso_test_dev = calc_dev(lasso_test_val, grid)
# 10-fold on the train set
# cross validation (c.f. to https://github.com/szcf-weiya/ESL-CN/blob/99f1e9fd4b8c8c80fa0ff281f0e082cb810a54e0/code/LDA/diagonalLDA.jl#L99-L128)
# X is Nxp
function cv_err(X::Array{Float64, 2}, y::Array{Int, 2}, lambda::Array{Float64, 1}; nfold = 10)
    N = size(X, 1)
    folds = div_into_folds(N, K = nfold)
    err = zeros(nfold, length(lambda))
    dev = zeros(nfold, length(lambda))
    for k = 1:nfold
        test_idx = folds[k]
        train_idx = setdiff(1:N, test_idx)
        cvlasso = glmnet(X[train_idx, :], y[train_idx, :], Binomial(), lambda = lambda)
        # calculate err
        pred_val = predict(cvlasso, X[test_idx, :])
        yhat = pred_val .> 0
        err[k, :] = [sum(yhat[:, i] .!= y[test_idx, 2]) for i=1:length(lambda)]
        dev[k, :] = calc_dev(pred_val, grid)
    end
    return [sum(err, dims=1) / N, sum(dev, dims=1)]
end

# 1:N divide into K-fold
function div_into_folds(N::Int; K::Int = 10)
    # maximum quota per fold
    n = Int(ceil(N/K))
    # number folds for the maximum quota
    k = N - (n-1)*K
    # number fols for n-1 quota: K-k
    folds = Array{Array{Int, 1}, 1}(undef, K)
    for i = 1:k
        folds[i] = collect(n*(i-1)+1:n*i)
    end
    for i = 1:K-k
        folds[k+i] = collect((n-1)*(i-1)+1:(n-1)*i) .+ n*k
    end
    return folds
end

# 10-fold cv error
lasso_cv10_err, lasso_cv10_dev = cv_err(train_X, train_y, grid)
p1 = plot(log.(grid), lasso_cv10_err[:], color = "purple", label="10-fold CV", linewidth=3, legend=:topleft)
plot!(p1, log.(grid), lasso_train_err, color = "orange", label="Training", linewidth=3)
plot!(p1, log.(grid), lasso_test_err, color = "skyblue", label="Test", linewidth=3)
xlabel!(p1, L"\log \lambda")
ylabel!(p1, "Misclassification Error")
# savefig("err_vs_log_lambda.png")

p2 = plot(log.(grid), lasso_cv10_dev[:], color = "purple",linewidth=3, legend = :false, xlab = L"\log\lambda", ylab = "Deviance", fontsize=20)
plot!(p2, log.(grid), lasso_train_dev, color = "orange", linewidth=3)
plot!(p2, log.(grid), lasso_test_dev, color = "skyblue", linewidth=3)

plot(p1, p2, dpi=300)
# savefig("err_and_dev_vs_log_lambda.pdf")
savefig("err_and_dev_vs_log_lambda.png")
