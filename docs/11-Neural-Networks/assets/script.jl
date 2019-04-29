function sigmoid(z::Array{Float64})
    return 1 ./ (1 .+ exp.(-z))
end

# function tanh(z::Array{Float64})
#     x = exp.(z)
#     y = exp.(-z)
#     return (x .- y) ./ (x .+ y)
# end

function ReLU(z::Array{Float64})
    return map(x -> max(0, x), z)
end

function ReLUα(z::Array{Float64}, α = 0.1)
    return map(x -> max(0, x) - α * max(0, -x), z)
end

using Plots
z = collect(-2:0.2:2)
plot(z, sigmoid(z), label = "sigmoid")
plot!(z, tanh.(z), label = "tanh")
plot!(z, ReLU(z), label = "ReLU")
plot!(z, ReLUα(z), label = "leaky ReLU")


plot(z, hcat(sigmoid(z), tanh.(z), ReLU(z), ReLUα(z)), 
        label = ["sigmoid", "tanh", "ReLU", "leaky ReLU"], 
        lw = 2,
        ylims = (-1, 1), 
        legend = :topleft, 
        xlabel = "z", ylabel = "g(z)", 
        title = "Activation functions")