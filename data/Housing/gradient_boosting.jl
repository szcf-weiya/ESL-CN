# avoid to unzip manually and save the storage
# refer to https://stackoverflow.com/questions/44876852/julia-extract-zip-files-within-a-zip-file
using ZipFile
using DelimitedFiles

using GradientBoost
using GradientBoost.Util
using GradientBoost.ML
using Statistics

r = ZipFile.Reader("houses.zip")
# the first 27 lines are description
data = readdlm(f, skipstart=27)
# extract the 15-th line manually
line15 = "The file cadata.txt contains all the the variables. Specifically, it contains median house value, median income, housing median age, total rooms, total bedrooms, population, households, latitude, and longitude in that order. "
colnames = split(line15, ", ")[2:end]
colnames[1] = split(colnames[1], "contains ")[2]
colnames[end] = split(colnames[end])[2]
colnames = Array{String, 1}(colnames)

# notice the unit is $100,000
Y = data[:, 1] / 100_000
X = data[:, 2:end]

function Housing_GB(X::Matrix{Float64}, Y::Vector{Float64}; maxdepth = 6, nsubfeatures = 0, sampling_rate = 0.8, ν = 0.1)
    # divide into training and test set
    train_ind, test_ind = holdout(size(X, 1), 0.2)
    train_X = X[train_ind, :]
    train_Y = Y[train_ind]
    test_X = X[test_ind, :]
    test_Y = Y[test_ind]

    err_train = Float64[]
    err_test = Float64[]
    # train under number of iterations
    for niter in 100:100:800
        println("current niter = $niter")
        # train
        gbdt = GBDT(; loss_function=LeastSquares(),
                      sampling_rate=sampling_rate,
                      learning_rate=ν,
                      num_iterations=niter,
                      tree_options = Dict(
                        :maxdepth => maxdepth,
                        :nsubfeatures => nsubfeatures
                      ))
        gbl = GBLearner(gbdt, :regression)
        fit!(gbl, train_X, train_Y)

        train_Y_hat = predict!(gbl, train_X)
        test_Y_hat = predict!(gbl, test_X)
        push!(err_train, mean(abs.(train_Y - train_Y_hat)))
        push!(err_test, mean(abs.(test_Y - test_Y_hat)))
    end
    return err_train, err_test
end

err_train, err_test = Housing_GB(X, Y)

using Plots
niters = 100:100:800
plot(niters, err_train, label="Train Error", xlab = "Iterations M", ylab = "Absolute Error", title = "Training and Test Absolute Error (with square loss)")
plot!(niters, err_test, label="Test Error")
savefig("fig10.13_square_loss.png")
