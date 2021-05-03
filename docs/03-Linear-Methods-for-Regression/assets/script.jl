using Plots
t = collect(-4:0.2:4)
function huber(t; λ = 1)
    flag = (abs.(t) .< λ)
    y1 = t.^2 / 2 .* flag .+ (λ * abs.(t) .- λ^2 / 2) .* (1 .- flag)
    y2 = λ * abs.(t) .- λ^2 / 2
    return y1, y2
end
y1, y2 = huber(t, λ = 2)
plot(t, y1, label = "Huber", legend = :bottomright)
plot!(t, y2, label = "Linear")
