using LinearAlgebra
using Plots
using StatsBase

function reduced_rank_lda(M0, σ₂ = 1, p = 20, n = 100)
    σ = ones(p)
    σ[2] = σ₂
    M = hcat(M0, randn(3, p - 2)*0.01)

    # generate observations
    X = vcat([hcat([M[i, :] + 0.1σ .* randn(p) for _ in 1:n]...)' for i=1:3]...)
    fig = scatter(X[1:n, 1], X[1:n, 2], title = "σ₂ = $σ₂")
    scatter!(fig, X[n+1:2n, 1], X[n+1:2n, 2])
    scatter!(fig, X[2n+1:3n, 1], X[2n+1:3n, 2])
    W = cov(X)
    display(W[1:2, 1:2])
    Mstar = M * W^(-1/2)
    e = eigen(cov(Mstar))
    println("top 3 eigenvalues: ", e.values[end:-1:end-2])
    display(e.vectors[:,end:-1:end-2])
    return fig
end

M = [1 0; 0 1; 0 0]

reduced_rank_lda(M, 1)
reduced_rank_lda(M, 100)