using Distributions
using LinearAlgebra
using StatsBase
using StatsPlots

lmridge(X, Y, λ) = inv(X' * X + λ * 1.0I) * X' * Y

function run(;p = 20, N = 100, nrep = 100, λs = [0.001, 100, 1000], snr = 2)
    rel_errs = zeros(nrep, 3)
    dfs = zeros(nrep, 3)
    Σ = ones(p, p) * 0.2 + 0.8I
    dist = MvNormal(Σ)
    for i = 1:nrep
        X = rand(dist, N)'
        β = randn(p)

        # σ2 = β' * Σ * β / snr
        σ2 = var(X * β) / snr
        # σ2 = p / 2
        y = X * β + randn(N) * sqrt(σ2)

        dfs[i,:] = [tr(X * inv(X' * X + λ * 1.0I) * X') for λ in λs]
        βhat = [lmridge(X, y, λ) for λ in λs]

        # calc test error
        Xtest = rand(dist, N)'
        ytest = Xtest * β + randn(N) * sqrt(σ2)
        test_err = [norm(ytest - Xtest * βhat[i], 2)^2 / N for i = 1:3]
        rel_errs[i, :] = test_err / σ2
    end
    return boxplot(rel_errs, title = "p = $p", xticks = (1:3, string.(mean(dfs, dims=1))))
end
