# Julia program for diagonal LDA
# refer to https://esl.hohoweiya.xyz/18-High-Dimensional-Problems/18.2-Diagonal-Linear-Discriminant-Analysis-and-Nearest-Shrunken-Centroids/index.html
#
# date: Aug 18, 2019
# author: weiya

using DelimitedFiles
using Statistics
using StatsBase
using FreqTables


function DiagLDA(X::Array{Float64, 2}, y::Array{Int})
    # number of genes & number of observations
    p, N = size(X)
    # number of class
    K = length(unique(y))
    # discriminant functions
    δ = Function[]
    # pooled standard deviation
    s = std(X, dims = 2)
    # for each class
    for k = 1:K
        # obs in class k
        idx = convert(Array{Bool, 2}, y'.==k)[:] # first convert from BitArray to Bool Array, then reduce to a vector
        Xk = X[:, idx]
        # mean
        xk_bar = mean(Xk, dims = 2)
        # discriminant function
        push!(δ, x-> -sum( ( (x-xk_bar)./s ).^2 )  ) # equal π_k
    end
    return δ
end

# regularized version of the diagonal-covariance form of LDA
function RegDiagLDA(X::Array{Float64, 2}, y::Array{Int, 1}, Δ::Float64)
    # number of cells & number of observations
    p, N = size(X)
    # number of class
    K = length(unique(y))
    # array of discriminant functions
    δ = Function[]
    # pooled standard deviation
    s = std(X, dims = 2)[:] # convert Nx1 matrix to N vector
    s0 = median(s) # typically choice
    # overall mean
    x_bar = mean(X, dims = 2)[:]
    # count the number of genes
    flag_genes = zeros(Bool, p, K)
    # for each class
    for k = 1:K
        # obs in class k
        Xk = X[:, convert(Array{Bool, 2}, y'.==k)[:]]
        # mean
        xk_bar = mean(Xk, dims = 2)[:]
        # shrinkage
        mk = sqrt( 1 / sum(y.==k) - 1 / N )
        dk = ( xk_bar - x_bar ) ./ (mk * (s .+ s0))
        dk_prime = soft_threshold(dk, Δ)
        flag_genes[:, k] .= dk_prime .!= 0
        xk_bar_prime = x_bar + mk*(s .+ s0) .* dk_prime
        # discriminant function
        push!(δ, x-> -sum( ( (x-xk_bar_prime)./s ).^2 )  ) # equal π_k
    end
    # number of genes
    num_genes = sum(any(flag_genes, dims = 2))
    return δ, num_genes
end

function soft_threshold(x::Float64, Δ::Float64)
    return sign(x) * max(0, abs(x) - Δ)
end

function soft_threshold(x::Array{Float64, 1}, Δ::Float64)
    return [soft_threshold(xi, Δ) for xi in x]
end

# classify a single observation
function classify(x::Array{Float64, 1}, δ::Array{Function, 1})
    scores = [δ[k](x) for k in 1:length(δ)]
    return findmax(scores)[2]
end

# classify arrays of observations
function  classify(x::Array{Float64, 2}, δ::Array{Function, 1})
    N = size(x, 2)
    res = zeros(Int, N)
    for i = 1:N
        res[i] = classify(x[:, i], δ)
    end
    return res
end

# misclassification error
function calc_err(pred::Array{Int, 1}, truth::Array{Int, 1})
    return sum(pred .!= truth) / length(pred)
end

# cross validation
function cv_err(X::Array{Float64, 2}, y::Array{Int, 1}, Δ; nfold = 10)
    N = size(X, 2)
    folds = div_into_folds(N, K = nfold)
    err = zeros(nfold)
    for k = 1:nfold
        test_idx = folds[k]
        train_idx = setdiff(1:N, test_idx)
        δ, ng = RegDiagLDA(X[:, train_idx], y[train_idx], Δ)
        err[k] = calc_err(classify(X[:, test_idx], δ), y[test_idx]) * length(test_idx)
    end
    return sum(err) / N
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

# read data
path = "data\\SRBCT\\" # windows style
xtrain = readdlm(path*"khan.xtrain.txt")
ytrain = vec(readdlm(path*"khan.ytrain.txt", Int))
xtest = readdlm(path*"khan.xtest.txt")
ytest = readdlm(path*"khan.ytest.txt")

# remove NA obs
idx_nonNA = ytest .!= "NA"
ytest = convert(Array{Int, 1}, ytest[idx_nonNA])
xtest = xtest[:, vec(idx_nonNA)]

# run
δ = DiagLDA(xtrain, ytrain)
cl = classify(xtrain, δ)
cltest = classify(xtest, δ)

# train results
freqtable(cl, ytrain[1, :])
# test results
freqtable(cltest, ytest[1,:])





# RegDiagLDA
δ2, ng = RegDiagLDA(xtrain, ytrain[:], 2.0)
cl2 = classify(xtrain, δ2)
cltest2 = classify(xtest, δ2)
freqtable(cl2, ytrain[:])






freqtable(cltest2, ytest[:])
# misclassification error
calc_err(cltest2, ytest[:])

# Error curves (fig 18.4 top)
Δs = 0:0.2:8
errs = zeros(length(Δs), 3) # traing, 10-fold, test
ngs = zeros(Int, length(Δs))
for i = 1:length(Δs)
    δ, ngs[i] = RegDiagLDA(xtrain, ytrain, Δs[i])
    # train error
    errs[i, 1] = calc_err(classify(xtrain, δ), ytrain)
    # cv10
    errs[i, 2] = cv_err(xtrain, ytrain, Δs[i])
    # test errror
    errs[i, 3] = calc_err(classify(xtest, δ), ytest)
end

using Plots
plot(Δs, errs[:, 1], label="Training", color = "green", legend=:topleft)
scatter!(Δs, errs[:, 1], color = "green", label="")
plot!(Δs, errs[:, 2], label="10-fold CV", color = "orange")
scatter!(Δs, errs[:, 2], color = "orange", label="")
plot!(Δs, errs[:, 3], label="Test", color = "blue")
scatter!(Δs, errs[:, 3], color = "blue", label="")

using PyPlot
fig, ax1 = plt.subplots(figsize=(12, 8))
ax1.plot(Δs, errs[:,1], label="Training", color="green", marker="o")
ax1.plot(Δs, errs[:,2], label="10-fold CV", color = "orange", marker = "o")
ax1.plot(Δs, errs[:,3], label="Test", color = "blue", marker = "o")
ax1.legend(loc = "upper left")
ax1.set_xlabel("Amount of Shrinkage Δ")
ax1.set_ylabel("Misclassification Error")
ax2 = ax1.twiny()
ax2.set_xticks(Δs[1:5:end])
ax2.set_xticklabels(ngs[1:5:end])
ax2.set_xlabel("Number of Genes")
plt.savefig("error_curves.png")
plt.show()
