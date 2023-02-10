include("../fig.14.29/spectral_clustering.jl")

function scatter_with_color(xs, cols; xlab = "1st Largest Eigenvector", ylab = "2nd Largest Eigenvector", title = "")
    p = scatter(xs[1][:, 1], xs[1][:, 2], color = cols[1], legend = false, xlab = xlab, ylab = ylab, title = title)
    for i = 2:length(xs)
        scatter!(p, xs[i][:, 1], xs[i][:, 2], color = cols[i])
    end
    return p
end

function fig14_30()
    cols = palette(:default)
    n = 150
    Random.seed!(1234)
    x = gen_data()
    S1 = similarity(x, c = 2.0)
    S2 = similarity(x, c = 10.0)
    S3 = kNNG(S1)
    S4 = lapacian(S1)
    e1 = eigen(S1)
    e2 = eigen(S2)
    e3 = eigen(S3)
    e4 = eigen(S4)
    p1 = scatter_with_color([e1.vectors[1:n, end:-1:end-1], e1.vectors[n+1:2n, end:-1:end-1], e1.vectors[2n+1:3n, end:-1:end-1]], cols, title = "Radial Kernel (c = 2)")
    p2 = scatter_with_color([e2.vectors[1:n, end:-1:end-1], e2.vectors[n+1:2n, end:-1:end-1], e2.vectors[2n+1:3n, end:-1:end-1]], cols, title = "Radial Kernel (c = 10)")
    p3 = scatter_with_color([e3.vectors[1:n, end:-1:end-1], e3.vectors[n+1:2n, end:-1:end-1], e3.vectors[2n+1:3n, end:-1:end-1]], cols, title = "NN Radial Kernel (c = 2)")
    p4 = scatter_with_color([e4.vectors[1:n, 2:3], e4.vectors[n+1:2n, 2:3], e4.vectors[2n+1:3n, 2:3]], cols, xlab = "2nd Smallest Eigenvector", ylab = "3rd Smallest Eigenvector", title = "Radial Kernel Laplacian (c = 2)")
    plot(p1, p2, p3, p4, size = (800, 800))
end