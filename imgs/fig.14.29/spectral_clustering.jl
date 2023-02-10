using Plots
using LinearAlgebra
using Random
function gen_data(n = 150, radius = [1, 2.8, 5], σ = 0.25)
    θ = [rand(n) * 2π for i = 1:3]
    x = vcat([radius[i] .* cos.(θ[i]) for i = 1:3]...)
    y = vcat([radius[i] .* sin.(θ[i]) for i = 1:3]...)
    return hcat(x + randn(3n) * σ, y + randn(3n) * σ)
end


function topleft(x; cols = [:orange, :blue, :green])
    n = 150
    scatter(x[1:n, 1], x[1:n, 2], color = cols[1], legend = false)
    scatter!(x[n+1:2n, 1], x[n+1:2n, 2], color = cols[2])
    scatter!(x[2n+1:3n, 1], x[2n+1:3n, 2], color = cols[3])
end

function similarity(x; c = 2.0)
    n = size(x, 1)
    S = zeros(n, n)
    for i = 1:n
        S[i, i] = 1
        for j = i+1:n
            S[i, j] = exp(-sum((x[i, :] - x[j, :]).^2) / c)
            S[j, i] = S[i, j]
        end
    end
    return S   
end

function kNNG(S; k = 10)
    n = size(S, 1)
    # mutual KNN graph
    N = zeros(Bool, n, n)
    for i = 1:n
        N[i, sortperm(S[i, :], rev=true)[1:1+k]] .= true
    end
    N2 = N .* N'
    W = copy(S)
    W[.!N2] .= 0
    return W    
end

function lapacian(W; normalized = false)
    G = diagm(sum(W, dims = 2)[:])
    if normalized
        L = 1.0I - inv(G) * W 
    else
        L = G - W
    end
    return L    
end


function calc_lapacian(x; c = 2.0, k = 10, normalized = true)
    S = similarity(x; c = c)
    W = kNNG(S; k = k)
    L = lapacian(W, normalized = normalized)
    return L
end

function bottomleft(v; cols = [:orange, :blue, :green], n = 150, alpha = 0.2)
    p1 = scatter(1:n, v[1:n, 1], color = cols[1], legend = false, ylab = "2nd Smallest", title = "Eigenvectors", alpha = alpha)
    scatter!(p1, n+1:2n, v[n+1:2n, 1], color = cols[2], alpha = alpha)
    scatter!(p1, 2n+1:3n, v[2n+1:3n, 1], color = cols[3], alpha = alpha)
    p2 = scatter(1:n, v[1:n, 2], color = cols[1], legend = false, ylab = "3rd Smallest", alpha = alpha)
    scatter!(p2, n+1:2n, v[n+1:2n, 2], color = cols[2], alpha = alpha)
    scatter!(p2, 2n+1:3n, v[2n+1:3n, 2], color = cols[3], alpha = alpha)
    plot(p1, p2, layout = @layout([a; b]))
end

function bottomright(v; cols = [:orange, :blue, :green], n = 150)
    scatter(v[1:n, 1], v[1:n, 2], color = cols[1], legend = false, xlab = "2nd Smallest Eigenvector", ylab = "3rd Smallest Eigenvector", title = "Spectral Clustering")
    scatter!(v[n+1:2n, 1], v[n+1:2n, 2], color = cols[2])
    scatter!(v[2n+1:3n, 1], v[2n+1:3n, 2], color = cols[3])
end

function fig14_29(normalized = false)
    Random.seed!(1234)
    x = gen_data()
    L = calc_lapacian(x, normalized = normalized)
    e = eigen(L)
    #cols = [:orange, :blue, :green]
    cols = palette(:default)
    p1 = topleft(x, cols = cols)
    # topright
    p2 = scatter(e.values[1:15], xlab = "Number", ylab = "Eigenvalue", legend = false)
    p3 = bottomleft(e.vectors[:, 2:3], cols = cols)
    p4 = bottomright(e.vectors[:, 2:3], cols = cols) 
    plot(p1, p2, p3, p4, size = (800, 800))
end