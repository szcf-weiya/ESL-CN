using DelimitedFiles
using StatsBase
using Plots
data, header = readdlm("../../data/Phoneme/phoneme.txt", ',', header = true)
X = Float64.(data[:, 2:257])
y = String.(data[:, 258])

function plot_all_curves()
    # https://github.com/JuliaGraphics/Colors.jl/blob/master/src/names_data.jl
    # colors = ["blue", "red", "orange", "violet", "torquoise"]
    ycolors = fill("blue", (1, size(y, 1))) # use row vector!!
    for i = 1:size(y, 1)
        if y[i] == "aa"
            continue
        elseif y[i] == "ao"
            ycolors[i] = "red"
        elseif y[i] == "dcl"
            ycolors[i] = "orange"
        elseif y[i] == "iy"
            ycolors[i] = "violet"
        elseif y[i] == "sh"
            ycolors[i] = "turquoise"
        end
    end
    p0 = plot(X', linecolors = ycolors, legend = false, title = "mix")
    p1 = plot(X[y .== "aa", :]', lc = "blue", legend = false, title ="aa")
    p2 = plot(X[y .== "ao", :]', lc = "red", legend = false, title = "ao")
    p3 = plot(X[y .== "dcl", :]', lc = "orange", legend = false, title = "dcl")
    p4 = plot(X[y .== "iy", :]', lc = "violet", legend = false, title = "iy")
    p5 = plot(X[y .== "sh", :]', lc = "turquoise", legend = false, title = "sh")
    return savefig(plot(p0, p1, p2, p3, p4, p5), "all_curves.png")
end

function kmeans(X::Matrix{Float64}, B::Matrix{Float64}, K::Int; maxiter = 200)
    J = size(B, 2)
    θ = zeros(J, K)
    N, p = size(X)
    # init the assignment
    C = ones(Int, N)
    nrep = floor(Int, N / K)
    C[1:nrep*K] .= repeat(1:K, nrep)
    iter = 0
    while true
        iter += 1
        # update centers
        for k = 1:K
            # init C seems to be more proper, otherwise need to make sure there are no empty set
            # !! in case some class might have 0 elements
            if sum(C .== k) == 0
                continue
            end
            θ[:, k] = B' * mean(X[C .== k, :], dims = 1)'
        end
        # update the assignment
        centers = B * θ
        Cold = copy(C)
        for i = 1:N
            C[i] = argmin([sum( (X[i,:] .- centers[:, j]).^2 ) for j = 1:K])
        end
        # check tol
        Δ = sum( C .!= Cold )
#        println("Iter $iter: ", Δ)
        if (Δ == 0) || (iter > maxiter)
            break
        end
    end
    return C, θ
end

function construct_B(p::Int, J::Int)
    B = ones(p, J)
    # knots
    ξ = range(0, p-1, length = J)
    # https://esl.hohoweiya.xyz/05-Basis-Expansions-and-Regularization/5.2-Piecewise-Polynomials-and-Splines/index.html
    # eq (5.4) & (5.5)
    d = zeros(p, J-1)
    pos(x) = ifelse(x > 0, x, 0)
    for j = 1:J-1
        for i = 1:p
            d[i, j] = (pos(i - ξ[j])^3 - pos(i - ξ[J])^3) / (ξ[J] - ξ[j])
        end
    end
    for j = 1:J
        if j == 1
            continue # has set to be 1
        elseif j == 2
            B[:, j] .= 1:p
        else
            B[:, j] .= d[:, j - 2] - d[:, end]
        end
    end
    # orthogonalize by gram-schmit
    # https://en.wikipedia.org/wiki/Gram-Schmidt_process
    R = copy(B)
    R[:, 1] = R[:, 1] ./ sqrt(sum(R[:,1].^2))
    for j = 2:J
        for i = 1:j-1
            # here no sqrt
            R[:, j] .-= sum(R[:, j] .* R[:, i]) / sum(R[:,i].^2) * R[:, i]
        end
        R[:, j] ./= sqrt(sum(R[:,j].^2))
    end
    return R
end

function kmeans(X::Matrix{Float64}, y::Vector{String}, B::Matrix{Float64}, K::Int; classes = ["aa", "ao", "dcl", "iy", "sh"])
    J = size(B, 2)
    # for each class
    Cs = Array{Vector{Int}, 1}(undef, 5)
    θs = Array{Matrix{Float64}, 1}(undef, 5)
    for i = 1:5
        Cs[i], θs[i] = kmeans(X[y .== classes[i], :], B, K)
    end
    return Cs, θs
end

function classify(θs::Array{Matrix{Float64}, 1}, X::Matrix{Float64}, B::Matrix{Float64}; classes = ["aa", "ao", "dcl", "iy", "sh"])
    N = size(X, 1)
    y = fill("", N)
    nθ = length(θs)
    minvals = zeros(nθ)
    for i = 1:N
        for (j, θ) in enumerate(θs)
            minvals[j] = minimum([sum((X[i,:] - B * θ[:, j]).^2) for j = 1:size(θ, 2)])
        end
        y[i] = classes[argmin(minvals)]
    end
    return y
end

function evaluate()
    # divide into train and test set
    idx_train = Bool[ifelse(occursin("train", x), 1, 0) for x in data[:,end]]
    Xtrain, ytrain = X[idx_train,:], y[idx_train]
    Xtest, ytest = X[.~idx_train, :], y[.~idx_train]
    accs = zeros(3, 4)
    bestacc = 0.0
    bestB = nothing
    bestθ = nothing
    for (i, J) in enumerate([5, 10, 15])
        B = construct_B(256, J)
        for (j, K) in enumerate([1, 3, 5, 7])
            println("J = $J, K = $K")
            Cs, θs = kmeans(Xtrain, ytrain, B, K)
            ypred = classify(θs, Xtest, B)
            accs[i, j] = sum(ytest .== ypred) / length(ytest)
            println(freqtable(ytest, ypred))
            if bestacc < accs[i, j]
                bestacc = accs[i, j]
                bestB = B
                bestθ = θs
            end
        end
    end
    return accs, bestB, bestθ
end

function plot_best(bestB, bestθ)
    p0 = plot(bestB * hcat(bestθ...), linecolors = repeat(["blue" "red" "orange" "violet" "turquoise"],
                                                            inner = (1, size(bestθ[1], 2))),
                                    legend = false, title = "mix")
    p1 = plot(bestB * bestθ[1], lc = "blue", legend = false, title ="aa")
    p2 = plot(bestB * bestθ[2], lc = "red", legend = false, title = "ao")
    p3 = plot(bestB * bestθ[3], lc = "orange", legend = false, title = "dcl")
    p4 = plot(bestB * bestθ[4], lc = "violet", legend = false, title = "iy")
    p5 = plot(bestB * bestθ[5], lc = "turquoise", legend = false, title = "sh")
    return savefig(plot(p0, p1, p2, p3, p4, p5), "all_B_curves.png")
end
