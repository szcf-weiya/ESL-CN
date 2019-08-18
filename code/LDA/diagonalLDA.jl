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
        xk_bar_prime = x_bar + mk*(s .+ s0) .* dk_prime
        # discriminant function
        push!(δ, x-> -sum( ( (x-xk_bar_prime)./s ).^2 )  ) # equal π_k
    end
    return δ
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


# read data
path = "data\\SRBCT\\" # windows style
xtrain = readdlm(path*"khan.xtrain.txt")
ytrain = readdlm(path*"khan.ytrain.txt", Int)
xtest = readdlm(path*"khan.xtest.txt")
ytest = readdlm(path*"khan.ytest.txt")

# remove NA obs
idx_nonNA = ytest .!= "NA"
ytest = ytest[idx_nonNA]
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
δ2 = RegDiagLDA(xtrain, ytrain[:], 2.0)
cl2 = classify(xtrain, δ2)
cltest2 = classify(xtest, δ2)
freqtable(cl2, ytrain[:])







freqtable(cltest2, ytest[:])
