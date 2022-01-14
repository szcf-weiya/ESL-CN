using Distributions
using Plots
# included a special case if we assume σ2 = kσ1
function EM(x; maxiter = 1000, tol = sqrt(eps()), w = 0.5, k = nothing)
    # π * f1 + (1-π) * f2
    # init 
    μ1 = mean(x)
    σ1 = std(x)
    μ2 = μ1 + σ1
    μ1 = μ1 - σ1
    if isnothing(k)
        σ2 = σ1
        σ1 = σ2
    else
        σ2 = k*σ1
        μ2 = μ2 - σ1 + σ2
        μ1 = μ1 + σ1 - σ2
    end
    n = length(x)
    wlast = 0
    iter = 0
    LL = Float64[]
    ws = Float64[]
    while true
        p1 = pdf.(Normal(μ1, σ1), x)
        p2 = pdf.(Normal(μ2, σ2), x)
        ll = sum(log.(w * p1 + (1-w) * p2))
        append!(LL, ll)
        append!(ws, w)
        γ = w * p1 ./ (w * p1 + (1-w) * p2)
        μ1 = sum(γ .* x) / sum(γ)
        μ2 = sum( (1 .- γ) .* x ) / sum(1 .- γ)
        if isnothing(k)
            σ1 = sqrt(sum(γ .* (x .- μ1) .^ 2) / sum(γ))
            σ2 = sqrt(sum((1 .- γ) .* (x .- μ2) .^ 2) / sum(1 .- γ))
        else
            σ1 = sqrt((sum(γ .* (x .- μ1).^2) + sum((1 .-γ) .* (x .- μ2).^2/k^2)) / n)
            σ2 = k*σ1
        end
        w = sum(γ) / n
        if abs(w - wlast) < tol
            break
        end
        if iter > maxiter
            @warn "not converged in $maxiter steps"
        end
        wlast = w
        iter += 1
    end
    return w, ws, LL, μ1, μ2, σ1, σ2
end

function example()
    y = [-0.39, 0.12, 0.94, 1.67, 1.76, 2.44, 3.72, 4.28, 4.92, 5.53,
    0.06, 0.48, 1.01, 1.68, 1.80, 3.25, 4.12, 4.60, 5.28, 6.22]
    w, ws, LL, μ1, μ2, σ1, σ2 = EM(y)
    println("π = $w, μ1 = $μ1, μ2 = $μ2, σ1 = $σ1, σ2 = $σ2")
    plot(ws, legend = false, xlab = "iter", ylab = "π", markershape = :circle)
    plot(LL, legend = false, xlab = "iter", ylab = "observed data log-likelihood", markershape = :circle)
end