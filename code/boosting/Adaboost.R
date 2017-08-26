## generate dataset
genData <- function(N, p = 10)
{
  p = 10
  x = matrix(rnorm(N*p),nrow = N)
  x2 = x^2
  y = rowSums(x2)
  y = sapply(y, function(x) ifelse(x > qchisq(0.5, 10), 1, -1))
  return(list(x = x, y = y))
}
set.seed(123)
train.data = genData(2000)
table(train.data$y)
# y
# -1    1 
# 980 1020

AdaBoost <- function(x, y, m = 10)
{
  p = ncol(x)
  N = nrow(x)
  res = matrix(nrow = m, ncol = 4)
  ## initialize weight
  w = rep(1, N)/N
  ## indicate the classification direction
  ## consider observation obs which is larger than cutpoint.val 
  ## if flag = 1, then classify obs as 1
  ## else if flag = -1, classify obs as -1
  flag = 1
  cutpoint.val = 0
  cutpoint.idx = 0
  for (i in 1:m)
  {
    ## step 2(a): stump
    tol = 1e10
    for (j in 1:p)
    {
      for (k in 1:N)
      {
        err = 0
        flag.tmp = 1
        cutpoint.val.tmp = x[k, j]
        for (kk in 1:N)
        {
          pred = 1
          xx = x[kk, j]
          if (xx < cutpoint.val.tmp)
            pred = -1
          err = err + w[kk] * as.numeric(y[kk] != pred) 
        }
      }
      if (err > 0.5)
      {
        err = 1 - 0.5
        flag.tmp = -1
      }
      if (err < tol)
      {
        tol = err
        cutpoint.val = cutpoint.val.tmp
        cutpoint.idx = j
        flag = flag.tmp
      }
    }
    ## step 2(c)
    #alpha = 0.5 * log((1-tol)/tol)
    alpha = 0.5 * log((1+1e-6-tol)/(tol+1e-6))
    ## step 2(d)
    for (k in 1:N)
    {
      pred = 1
      xx = x[k, cutpoint.idx]
      if (flag * xx < flag * cutpoint.val)
        pred = -1
      w[k] = w[k] * exp(-alpha*y[k]*pred)
    }
    res[i, ] = c(cutpoint.idx, cutpoint.val, flag, alpha)
  }
  colnames(res) = c("idx", "val", "flag", "alpha")
  model = list(M = m, G = res)
  class(model) = "AdaBoost"
  return(model)
}

print.AdaBoost <- function(model)
{
  cat(model$M, " weak classifers are as follows: \n\n")
  cat(sprintf("%4s%12s%8s%12s\n", colnames(model$G)[1], colnames(model$G)[2], colnames(model$G)[3], colnames(model$G)[4]))
  for (i in 1:model$M)
  {
    cat(sprintf("%4d%12f%8d%12f\n", model$G[i, 1], model$G[i, 2], model$G[i, 3], model$G[i, 4]))
  }
}

predict.AdaBoost <- function(model, x)
{
  n = nrow(x)
  res = integer(n)
  for (i in 1:n)
  {
    s = 0
    xx = x[i, ]
    for (j in 1:model$M)
    {
      pred = 1
      idx = model$G[j, 1]
      val = model$G[j, 2]
      flag = model$G[j, 3]
      alpha = model$G[j, 4]
      cutpoint = xx[idx]
      if (flag * cutpoint < flag*val)
        pred = -1
      s = s + alpha*pred
    }
    res[i] = sign(s)
  }
  return(res)
}

testAdaBoost <- function()
{
  ## train datasets
  train.data = genData(2000)
  x = train.data$x
  y = train.data$y
  ## test datasets
  test.data = genData(10000)
  test.x = test.data$x
  test.y = test.data$y
  
  m = seq(0, 400, by = 20)
  err = numeric(length(m))
  for (i in 1:length(m))
  {
    model = AdaBoost(x, y, m = m[i])
    res = table(test.y, predict(model, test.x))
    err[i] = (res[1, 2] + res[2, 1])/length(test.y)
  }
  return(err)
}