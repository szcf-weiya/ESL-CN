using Statistics

function calc_rss(yleft, yright)
    return sum((yleft .- mean(yleft)).^2) + sum((yright .- mean(yright)).^2)
end

function find_best_rule(x, y)
    bst_j, bst_s, bst_rss = nothing, nothing, Inf
    for j in 1:size(x, 2)
        thresh = sort(unique(x[:, j]))[2:end]
        for s in thresh
            left_idx = x[:, j] .< s
            rss = calc_rss(y[left_idx], y[.!left_idx])
            if rss < bst_rss
                bst_rss = rss
                bst_j = j
                bst_s = s
                # println("j = $j, s = $s, bst_rss = $rss")
            end
        end
    end
    return Dict{Any,Any}("j"=>bst_j,"s"=>bst_s)
end

function split(x, y, depth, max_depth)
    if depth == max_depth || size(x, 1) < 2
        return mean(y)
    end
    rule = find_best_rule(x, y)
    left_idx = x[:, rule["j"]] .< rule["s"]
    rule["left"] = split(x[left_idx, :], y[left_idx], depth+1, max_depth)
    rule["right"] = split(x[.!left_idx, :], y[.!left_idx], depth+1, max_depth)
    return rule
end

function predict(x, RULES)
    pred = zeros(size(x, 1))
    for i in 1:size(x, 1)
        rules = deepcopy(RULES)
        while typeof(rules) != Float64
            j, s = rules["j"], rules["s"]
            if x[i, j] < s
                rules = rules["left"]
            else
                rules = rules["right"]
            end
        end
        pred[i] = rules
    end
    return pred
end

function calc_df(;n = 100, p = 10, N = 100, maxdepth = 3)
    x = randn(n, p)
    y = randn(n, N)
    yhat = zeros(n, N)
    for i = 1:N
        rule = split(x, y[:, i], 0, maxdepth)
        yhat[:, i] = predict(x, rule)
    end
    return sum([cov(y[i, :], yhat[i, :]) for i=1:n])
end

function rep_calc_df(nrep = 10; kw...)
    dfs = zeros(nrep)
    for i = 1:nrep
        dfs[i] = calc_df(;kw...)
    end
    return mean(dfs), std(dfs)/sqrt(nrep)
end