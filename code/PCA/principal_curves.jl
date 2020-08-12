#
# solution of Ex. 14.13
#
# author: weiya
# date: Aug 04, 2019

using Plots
using StatsBase
using LinearAlgebra
using SmoothingSplines
# generate data
function gen_data(;N=200, noise = true)
    s = range(0, 2π, length = N)
    if noise
        X1 = cos.(s) + 0.1 * randn(N)
        X2 = sin.(s) + 0.1 * randn(N)
        X3 = s + 0.1 * randn(N)
    else
        X1 = cos.(s)
        X2 = sin.(s)
        X3 = s
    end
    return X1, X2, X3
end

function scatterplot_smoother(x::Array{Float64, 1}, Y::Array{Float64, 2}; λ = 25.0)
    spls = Array{SmoothingSpline{Float64}, 1}(undef, size(Y, 2))
    for i = 1:size(Y, 2)
        spls[i] = fit(SmoothingSpline, x, Y[:,i], λ)
    end
    return spls
end

function project_to_curve(spls::Array{SmoothingSpline{Float64}, 1}, data::Array{Float64, 2}, λ_min::Float64, λ_max::Float64; λstep = 1e-2, ρ = 0.5)
    λ_len = λ_max - λ_min
    λ_grid = range(λ_min - ρ*λ_len, λ_max+ρ*λ_len, step = λstep)
    print(λ_grid)
    fλ = zeros(length(λ_grid), length(spls))
    for i = 1:length(spls)
        fλ[:, i] .= SmoothingSplines.predict(spls[i], λ_grid)
    end
    # for each data point, find the nearest one in the grid
    λf = zeros(size(data, 1))
    for i = 1:size(data, 1)
        dist = sum((fλ .- data[i, :]').^2, dims=2)
        val, idx = findmin(dist[:])
        λf[i] = λ_grid[idx]
    end
    return λf
end

import Plots.plot
function plot(spls::Array{SmoothingSpline{Float64}, 1}; origin = [0.0, 0.0, 0.0], truth::Bool = true)
    x1pred = SmoothingSplines.predict(spls[1])
    x2pred = SmoothingSplines.predict(spls[2])
    x3pred = SmoothingSplines.predict(spls[3])
    p = plot(x1pred.+origin[1], x2pred.+origin[2], x3pred.+origin[3], legend=false, xlim=(-1, 1), ylim=(-1,1))
    return p
end

function calc_err(spls1::Array{SmoothingSpline{Float64}, 1}, spls2::Array{SmoothingSpline{Float64}, 1})
    x1pred1 = SmoothingSplines.predict(spls1[1])
    x2pred1 = SmoothingSplines.predict(spls1[2])
    x3pred1 = SmoothingSplines.predict(spls1[3])
    x1pred2 = SmoothingSplines.predict(spls2[1])
    x2pred2 = SmoothingSplines.predict(spls2[2])
    x3pred2 = SmoothingSplines.predict(spls2[3])
    return sum( (x1pred1 - x1pred2).^2 + (x2pred1 - x2pred2).^2 + (x3pred1 - x3pred2).^2 )
end

#=
mutable struct PrincipalCurve
    o::Array{Float64, 1}
    β::Array{Float64, 1}
end

function plot(pc::PrincipalCurve, data::Array{Float64, 2})
    f = Array{Float64, 2}(undef, 100, 3)
    λs = range(0, 10, length = 100)
    for i = 1:100
        f[i,:] = pc.o + pc.β * λs[i]
    end
    p = plot(f[:,1], f[:,2], f[:,3])
    scatter!(p, data[:,1], data[:,2], data[:,3])
    return p
end
=#

function principal_curve(X0::Array{Float64,2}; tol=1e-4, kw...)
    # start with the linear principal component
    μ = mean(X0, dims=1)
    # centered
    X = X0 .- μ
    # svd decomposition
    u, d, v = svd(X)
    # pick the first component
    # note that v_1 is normalized, so λ is exactly the arc-length
    β = v[:, 1] # slope
    λf = u[:,1] * d[1]
    spls = scatterplot_smoother(λf, X)
    #while true
    y1, y2, y3 = gen_data(noise=false)
    anim = @animate for iter = 1:1000
        #plot(PrincipalCurve(reshape(μ, 3), β), hcat(X1, X2, X3))
        λf = project_to_curve(spls, X, minimum(λf), maximum(λf); kw...)
        spls_new = scatterplot_smoother(λf, X)
        err = calc_err(spls, spls_new)
        print("curret error: $err\n")
        if err < tol
            break
        else
            spls = spls_new
        end
        plot(spls, origin = μ)
        scatter!(X0[:, 1], X0[:, 2], X0[:, 3], markersize=1)
        plot!(y1, y2, y3, xlim = (-1, 1), ylim = (-1, 1), legend = false, color = "red")
    end
    return spls, λf, anim
end

X1, X2, X3 = gen_data()
plot(X1, X2, X3, legend=false)
plot!(Y[:,1], Y[:,2], Y[:,3])

ss, lam, anim = principal_curve(hcat(X1, X2, X3), ρ=2.5, λstep=0.01, tol=1e-3)
gif(anim)
