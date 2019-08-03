using DelimitedFiles
using Plots
using LinearAlgebra
using StatsBase

#X, header = readdlm("data/Signatures/signatureData.csv", ',', header=true)
X, header = readdlm("Documents\\GitHub\\ESL-CN\\data\\Signatures\\signatureData.csv", ',', header=true)
p1 = plot(X[:,2], X[:,3], label="sig1", legend=:topleft, title="Original Signatures ($(norm(X[:,2:3]-X[:,4:5])))")
plot!(p1, X[:,4], X[:, 5], label="sig2")
plot!(X[:,6], X[:, 7], label="sig3")

function procrustes(X1::Array{Float64, 2}, X2::Array{Float64, 2}; centered = false, scaled = false)
    if centered
        x1_bar = mean(X1, dims=1)
        x2_bar = mean(X2, dims=1)
        Σ = (X1 .- x1_bar)' * (X2 .- x2_bar)
    else
        Σ = X1' * X2
    end
    U, D, V = svd(Σ)
    R = U * V'
    if scaled
        β = sum(D) / norm(X1, 2)^2
    else
        β = 1
    end
    if centered
        μ = x2_bar' - R' * x1_bar' *β
    else
        μ = zeros(2)
    end
    return R, μ, β
end

function procrustes_distance(X1::Array{Float64, 2}, X2::Array{Float64, 2}; centered=false, scaled=false)
    R, μ, β = procrustes(X1, X2; centered = centered, scaled = scaled)
    X2_hat = β*X1*R+ones(size(X1,1))*μ'
    return norm(X2_hat - X2, 2), X2_hat
end

function cmpr_pairs(X1::Array{Float64, 2},X2::Array{Float64,2}, lbl::Array{Int,1})
    err, X2_hat = procrustes_distance(X1, X2)
    p1 = plot(X1[:,1], X1[:,2], label="sig$(lbl[1])", legend=:topleft, title="Original Signatures ($(round(norm(X1-X2))))")
    plot!(p1, X2[:,1], X2[:,2], label="sig$(lbl[2])")
    p2 = plot(X2_hat[:,1],X2_hat[:,2], label="procrusted sig$(lbl[1])", title="procrusted Signatures ($(round(norm(X2_hat-X2))))", legend=:topleft)
    plot!(p2, X2[:,1], X2[:,2], label="sig$(lbl[2])")
    p = plot(p1, p2, size=(640, 480))
    return p
end

savefig(cmpr_pairs(X[:,2:3],X[:,4:5], [1, 2]), "code/PCA/sig1_vs_sig2.png")
savefig(cmpr_pairs(X[:,2:3],X[:,6:7], [1, 3]), "code/PCA/sig1_vs_sig3.png")
savefig(cmpr_pairs(X[:,4:5],X[:,6:7], [2, 3]), "code/PCA/sig2_vs_sig3.png")

# X (the data file) has been centered
function procrustes(X::Array{Float64, 2}; scaled=false, centered=false)
    L = Int(size(X, 2) / 2)
    # initialize
    M = X[:, 1:2]
    best_cost = 1e5
    p = plot(M[:,1],M[:,2], legend=false)
#    while true
    anim = @animate for k = 1:100
        costs = zeros(L)
        X_prime = Array{Array{Float64, 2},1}(undef, L)
        for i = 1:L
            costs[i], X_prime[i] = procrustes_distance(X[:, 2i-1:2i], M; scaled=scaled, centered=centered)
        end
        curr_cost = mean(costs)
        #if abs(curr_cost - best_cost) < 1e-10
        if curr_cost < best_cost
            M = mean(X_prime)
            best_cost = curr_cost
            print("current cost: $curr_cost ...\n")
            plot!(p, M[:,1],M[:,2], legend=false)
        else
            print("current cost: $curr_cost stop!!\n")
            break
        end
    end
    return M, best_cost, anim
end

M, best_cost, anim = procrustes(X[:,2:end]; scaled = true, centered = true)
gif(anim, "code/PCA/M_with_scale.gif")

function cmpr_all(X::Array{Float64, 2}, M::Array{Float64, 2})
    L = Int(size(X, 2) / 2)
    p = plot(M[:,1], M[:,2], label="procrusted sig", legend=:topleft)
    for i = 1:L
        plot!(p, X[:,2i-1], X[:,2i], label="sig$i")
    end
    return p
end

savefig(cmpr_all(X[:,2:end], M), "code/PCA/M_without_scale.png")

# Ex. 14.10
function affine_invariant(X::Array{Float64, 2})
    # number of shapes
    L = Int(size(X, 2) / 2)
    H = Array{Array{Float64, 2}, 1}(undef, L)
    for i = 1:L
        H[i] = X[:,2i-1:2i] * inv(X[:,2i-1:2i]' * X[:,2i-1:2i]) * X[:,2i-1:2i]'
    end
    H_bar = mean(H)
    eval, evec = eigen(Symmetric(H_bar))
    idx = sortperm(eval, rev=true)
    print(eval[idx])
    return evec[:, idx[1:2]]
end

M = affine_invariant(X[:,2:end])
p = plot(M[:,1], M[:,2], legend=false)
savefig(p, "Documents\\GitHub\\ESL-CN\\code\\PCA\\M_affine-variant.png")
