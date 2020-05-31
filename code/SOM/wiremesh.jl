# symmtry line: y=kx
function symtran(x0, y0, k)
    # solve
    # (y - y0) = -1/k (x - x0)
    # y + y0 = k(x + x0)
    A = [-1/k -1;
         k -1];
    b = [-y0 - x0 / k , y0 - k * x0]
    return A \ b
end

# fold along the line y=kx
function fold(k = 0.99)
    coors = Matrix{Vector{Float64}}(undef, 5, 5)
    for x = 1:5
        for y = 1:5
            if y < k * x
                coors[x, y] = symtran(x, y, k)
            else
                coors[x, y] = [x, y]
            end
        end
    end
    return coors
end

function wiremesh0(k = 0.9)
    coors = fold(k)
    p = plot(xlim = (0, 5.5), ylim = (0, 5.5), legend = false, aspect_ratio = 1)
    for i = 1:5
        for j = 1:5
            scatter!(p, tuple(coors[i, j]...), color = :purple)
        end
    end
    return p
end

# half_ball = zeros(100, 3)

function plot_half_ball(; nxy = 100, nz = 20, center = [0 0 0], kw...)
    # https://docs.juliaplots.org/latest/generated/colorschemes/
    colors = cgrad(:summer, nz, categorical = true)
    p = plot([0], [0], [1]; legend = false, kw...)
    data = zeros(nxy * nz, 3)
    θs = range(0, 2π, length = nxy)
#    for (i, z) in enumerate(range(0, 1, length = nz))
    for (i, z) in enumerate(range(-1, 1, length = nz))
        r = sqrt(1-z^2)
        data[(i-1)*nxy+1:i*nxy, :] .= hcat(r*cos.(θs), r*sin.(θs), fill(z, nxy)) .+ center
        plot!(p, [data[(i-1)*nxy+1:i*nxy, k] for k = 1:3]..., lc = colors[i])
    end
    for j = 1:nxy
        plot!(p, [data[j:nxy:nxy*nz, k] for k = 1:3]..., lc = colors.colors.colors)
    end
    return p
end

function plot_points_on_ball()
    # source SOM_ex.R in the R session by typing `$` with the help of package RCall
    data = convert(Matrix, @rget data)
    p = plot_half_ball(center = [0 0 0], nz = 40, nxy = 50)
    scatter!(p, [data[:, k] for k=1:3]..., markercolor = repeat([:red, :lightgreen, :blue], inner = 30), markersize = 2)
end

function wiremesh()
    # get data from RCall
    coor = convert(Matrix, @rget coor)
    coor0 = convert(Matrix, @rget coor0)
    plot([coor[1:5,i] for i=1:3]...)
    plot!([coor[6:10,i] for i=1:3]...)
    plot!([coor[11:15,i] for i=1:3]...)
    plot!([coor[16:20,i] for i=1:3]...)
    plot!([coor[21:25,i] for i=1:3]...)
    plot!([coor[1:5:25,i] for i=1:3]...)
    plot!([coor[2:5:25,i] for i=1:3]...)
    plot!([coor[3:5:25,i] for i=1:3]...)
    plot!([coor[4:5:25,i] for i=1:3]...)
    plot!([coor[5:5:25,i] for i=1:3]...)
end

function one_case()
    wiremesh()
    scatter!([data[:, k] for k=1:3]...)
    scatter!([coor[vcat(1:2, 3, 11:13, 16:17, 21:22), i] for i=1:3]..., color = :blue, markersize = 8)
    scatter!([coor[vcat(3:5, 8:10), i] for i=1:3]..., color = :lightgreen, markersize = 8)
    scatter!([coor[vcat(19:20, 24:25), i] for i=1:3]..., color = :red, markersize = 8)
end
