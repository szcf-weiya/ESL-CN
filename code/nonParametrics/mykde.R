mykde <- function(y, kernel = "gaussian", h = 0.1, reflect = FALSE, y.range=NULL )
{
  n = 1000
  x = seq(-3, 3, length.out = 1000)
  x.left = x[1:250]
  x.middle = x[251:750]
  x.right = x[751:1000]
  if (kernel == "gaussian")
  {
    kernel.gaussian <- function(x)
    {
      return(exp(-x^2/2)/sqrt(2*pi))
    }
    if (reflect)
    {
      fhat.left = sapply(x.left,
        function(x) sum(kernel.gaussian((y-x)/h) +
                          kernel.gaussian((2*y.range[1]-y-x)/h))/(n*h))
      fhat.middle = sapply(x.middle,
        function(x) sum(kernel.gaussian((y-x)/h))/(n*h))
      fhat.right = sapply(x.right,
        function(x) sum(kernel.gaussian((y-x)/h) +
                          kernel.gaussian((2*y.range[2]-y-x)/h))/(n*h))
      fhat = c(fhat.left, fhat.middle, fhat.right)
    }
    else
      fhat = sapply(x, function(x) sum(kernel.gaussian((y-x)/h))/(n*h))
  }
  else if (kernel == "uniform")
  {
    kernel.uniform <- function(x)
    {
      x[abs(x) < 1] = 1
      x[abs(x) > 1] = 0
      return(0.5*x)
    }
    if (reflect)
    {
      fhat.left = sapply(x.left,
        function(x) sum(kernel.uniform((y-x)/h) +
                          kernel.uniform((2*y.range[1]-y-x)/h))/(n*h))
      fhat.middle = sapply(x.middle,
        function(x) sum(kernel.uniform((y-x)/h))/(n*h))
      fhat.right = sapply(x.right,
        function(x) sum(kernel.uniform((y-x)/h) +
                          kernel.uniform((2*y.range[2]-y-x)/h))/(n*h))
      fhat = c(fhat.left, fhat.middle, fhat.right)
    }
    else
      fhat = sapply(x, function(x) sum(kernel.uniform((y-x)/h))/(n*h))
  }
  else
    cast(paste0("Can not support ", kernel,
                "kernel, please change to gaussian kernel or uniform kernel.."))
  res = list(x = x,
             fhat = fhat)
  return(res)
}
