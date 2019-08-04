function classify(x::Array{Float64,1}, prototype::Array{Float64, 2})
    dist = sum((prototype .- x').^2, dims = 2)
    return findmin(dist[:])
end

function calc_dist(x::Array{Int, 1}, m::Array{Array{Int, 1}, 1})
    res = zeros(length(m))
    for i = 1:length(m)
        res[i] = sum((m[i] - x).^2)
    end
    return res
end

function SOM(data; q1::Int = 5, q2::Int = 5, R = 2, niter = 40)
    K = q1 * q2
    # numbe of observations
    N = size(data, 1)
    idx = sample(1:N, K, replace=false)
    coor = data[idx, :]
    coor_grid = [ [i...] for i in Iterators.product(1:q1, 1:q2)][:]

    total_niter = niter * N
    for iter = 1:niter
        for i = 1:N
            iter_i = N * (iter - 1) + i
            α = -1 / total_niter * iter_i + 1
            r = -R / total_niter * iter_i + R

            xi = data[i, :]
            mj_val, mj_idx = classify(xi, coor)
            mj = coor_grid[mj_idx]
            # distance in Q1xQ2
            mk_idx = findall( calc_dist(mj, coor_grid) .<= r )
            mk = coor_grid[mk_idx]
            # distance in R^p
            coor[mk_idx, :] += α * (xi .- coor[mk_idx, :]')'
        end
    end
    return coor
end

# data from ../PCA/principal_curve.jl
coor = SOM(hcat(X1, X2, X3))
p1 = scatter(coor[:,1], coor[:, 2], coor[:,3], legend=false, title = "q1 = q2 = 5")

coor = SOM(hcat(X1, X2, X3), q1 = 10, q2 = 10)
p2 = scatter(coor[:,1], coor[:, 2], coor[:,3], legend=false, title = "q1 = q2 = 10")

plot(p1, p2)
savefig("som_helix.png")
