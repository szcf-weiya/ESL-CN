# Julia program for diagonal LDA
# refer to https://esl.hohoweiya.xyz/18-High-Dimensional-Problems/18.2-Diagonal-Linear-Discriminant-Analysis-and-Nearest-Shrunken-Centroids/index.html
#
# date: Aug 18, 2019
# author: weiya

using DelimitedFiles
using Statistics
using StatsBase
# read data
path = "data\\SRBCT\\" # windows style
xtrain = readdlm(path*"khan.xtrain.txt")
ytrain = readdlm(path*"khan.ytrain.txt", Int)
xtest = readdlm(path*"khan.xtest.txt")
ytest = readdlm(path*"khan.ytest.txt")

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
        idx = convert(Array{Bool, 2}, ytrain'.==k)[:] # first convert from BitArray to Bool Array, then reduce to a vector
        Xk = X[:, idx]
        # mean
        xk_bar = mean(Xk, dims = 2)
        # discriminant function
        push!(δ, x-> -sum( ( (x-xk_bar)./s ).^2 )  ) # equal π_k
    end
    return δ
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

# run
δ = DiagLDA(xtrain, ytrain)
cl = classify(xtrain, δ)
cltest = classify(xtest, δ)

using FreqTables
# train results
freqtable(cl, ytrain[1, :])






# test results
freqtable(cltest, ytest[1,:])
