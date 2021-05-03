library(tree)
calc_df = function(n = 100, p = 10, N = 100, m = 5) {
    y = matrix(rnorm(n*N), nrow = n)
    x = matrix(rnorm(n*p), nrow = n)
    yhat = matrix(0, nrow=n, ncol = N)
    xy = as.data.frame(cbind(y[,1], x))
    colnames(xy) = c("y", paste0("x", 1:p))
    for (i in 1:N) {
        if (m == 1)
            yhat[, i] = mean(y[, i])
        else {
            xy$y = y[,i]
            treefit = prune.tree(tree(y ~ ., data = xy), best = m)
            yhat[, i] = predict(treefit, newdata = xy)
        }
    }
    df = 0
    for (i in 1:n)
        df = df + cov(y[i,], yhat[i,])
    df
}
