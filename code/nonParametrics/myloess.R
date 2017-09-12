myloess <- function(xt, yt, h, ngrid)
{
  x.grid = seq(0, 2, length.out = ngrid)
  kernel.gaussian <- function(x)
  {
      return(exp(-x^2/2)/sqrt(2*pi))
  }
  kernel.uniform <- function(x)
  {
      x[abs(x) < 1] = 1
      x[abs(x) > 1] = 0
      return(0.5*x)
  }
  weight <- function(x)
  {
    return(sapply(xt, function(xx) kernel.gaussian((xx-x)/h)))
  }
  w.grid = sapply(x.grid, weight)
  alpha.grid = numeric(ngrid)
  beta.grid = numeric(ngrid)
  y.grid = numeric(ngrid)
  for(i in 1:ngrid)
  {
    lm.x = xt - x.grid[i]
    lm.fit = lm(yt ~ lm.x, w = w.grid[,i])
    lm.coef = coef(lm.fit)
    alpha.grid[i] = lm.coef[[1]]
    beta.grid[i] = lm.coef[[2]]
    y.grid[i] = alpha.grid[i]
    #y.grid[i] = alpha.grid[i] + beta.grid[i]*(x.grid[i]-x.grid[i])
    #y.grid[i] = predict(lm.fit, data.frame(lm.x = x.grid[i]))
  }
  res = list(alpha = alpha.grid,
             beta = beta.grid,
             x = x.grid,
             y = y.grid)
  return(res)
}
