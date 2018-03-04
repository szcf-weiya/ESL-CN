struct Adaboost
    n_clf::Int64
    clf::Matrix
end

function Adaboost(;n_clf::Int64 = 10)
    clf = zeros(n_clf, 4)
    return Adaboost(n_clf, clf)
end

function train!(model::Adaboost, X::Matrix, y::Vector)
    n_sample, n_feature = size(X)
    ## initialize weight
    w = ones(n_sample) / n_sample
    threshold = 0
    ## indicate the classification direction
    ## consider observation obs which is larger than cutpoint.val
    ## if flag = 1, then classify obs as 1
    ## else if flag = -1, classify obs as -1
    flag = 0
    feature_index = 0
    alpha = 0
    for i = 1:model.n_clf
        ## step 2(a): stump
        err_max = 1e10
        for feature_ind = 1:n_feature
            for threshold_ind = 1:n_sample
                flag_ = 1
                err = 0
                threshold_ = X[threshold_ind, feature_ind]

                for sample_ind = 1:n_sample
                    pred = 1
                    x = X[sample_ind, feature_ind]
                    if x < threshold_
                        pred = -1
                    end
                    err += w[sample_ind] * (y[sample_ind] != pred)
                end
                err = err / sum(w)
                if err > 0.5
                    err = 1 - err
                    flag_ = -1
                end

                if err < err_max
                    err_max = err
                    threshold = threshold_
                    flag = flag_
                    feature_index = feature_ind
                end
            end
        end
        ## step 2(c)
        #alpha = 1/2 * log((1-err_max)/(err_max))
        alpha = 1/2 * log((1.000001-err_max)/(err_max+0.000001))
        ## step 2(d)
        for j = 1:n_sample
            pred = 1
            x = X[j, feature_index]
            if flag * x < flag * threshold
                pred = -1
            end
            w[j] = w[j] * exp(-alpha * y[j] * pred)
        end
        model.clf[i, :] = [feature_index, threshold, flag, alpha]
    end
end

function predict(model::Adaboost,
                 x::Matrix)
    n = size(x,1)
    res = zeros(n)
    for i = 1:n
        res[i] = predict(model, x[i,:])
    end
    return res
end

function predict(model::Adaboost,
                 x::Vector)
    s = 0
    for i = 1:model.n_clf
        pred = 1
        feature_index = trunc(Int64,model.clf[i, 1])
        threshold = model.clf[i, 2]
        flag = model.clf[i, 3]
        alpha = model.clf[i, 4]
        x_temp = x[feature_index]
        if flag * x_temp < flag * threshold
            pred = -1
        end
        s += alpha * pred
    end

    return sign(s)

end

function classification_error(x::Vector, y::Vector)
    num = 0
    n = size(x, 1)
    for i = 1:n
        if x[i] != y[i]
            num = num + 1
        end
    end
    return num/n
end

function generate_data(N)
    p = 10
    x = randn(N, p)
    x2 = x.*x
    c = 9.341818 #qchisq(0.5, 10)
    y = zeros(Int64,N)
    for i=1:N
        tmp = sum(x2[i,:])
        if tmp > c
            y[i] = 1
        else
            y[i] = -1
        end
    end
    return x,y
end

function test_Adaboost()
    x_train, y_train = generate_data(2000)
    x_test, y_test = generate_data(10000)
    m = 1:20:400
    res = zeros(size(m, 1))
    for i=1:size(m, 1)
        model = Adaboost(n_clf=m[i])
        train!(model, x_train, y_train)
        predictions = predict(model, x_test)
        println("The number of weak classifiers ", m[i])
        res[i] = classification_error(y_test, predictions)
        println("classification error: ", res[i])
    end
    return hcat(m, res)
end

res = test_Adaboost()
f = open("res.txt", "w")
for i = 1:size(res, 1)
    @printf(f, "%f,%f\n", res[i,1], res[i, 2])
end
close(f)
