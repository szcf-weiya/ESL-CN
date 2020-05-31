rm(list = ls(all=TRUE))
##
## solution to Ex. 14.5
##

## ###############
## generate data
## ###############
gen.data <- function(sigma = 0.6) {
  ## center at (0, 0, 1)
  theta1 = runif(30, -pi/8, pi/8)
  phi1 = runif(30, 0, 2*pi)
  x1 = sin(theta1)*cos(phi1) + rnorm(30, 0, sigma)
  y1 = sin(theta1)*sin(phi1) + rnorm(30, 0, sigma)
  z1 = cos(theta1) + rnorm(30, 0, sigma)

  ## center at (1, 0, 0)
  theta2 = runif(30, pi/2-pi/4, pi/2+pi/4)
  phi2 = runif(30, -pi/4, pi/4)
  x2 = sin(theta2)*cos(phi2) + rnorm(30, 0, sigma)
  y2 = sin(theta2)*sin(phi2) + rnorm(30, 0, sigma)
  z2 = cos(theta2) + rnorm(30, 0, sigma)

  ## center at (0, 1, 0)
  theta3 = runif(30, pi/2-pi/4, pi/2 + pi/4)
  phi3 = runif(30, pi/2-pi/4, pi/2+pi/4)
  x3 = sin(theta3)*cos(phi3) + rnorm(30, 0, sigma)
  y3 = sin(theta3)*sin(phi3) + rnorm(30, 0, sigma)
  z3 = cos(theta3) + rnorm(30, 0, sigma)
  ## ###############
  ## initialize
  ## ###############
  q1 = q2 = 5 # K = 25
  x = c(x1, x2, x3)
  y = c(y1, y2, y3)
  z = c(z1, z2, z3)
  data = data.frame(x, y, z)
  return(data)
}
coor.grid = expand.grid(1:5, 1:5)

## find the closest prototype to x in Euclidean distance in R^p
classify <- function(x, prototype, val = FALSE)
{
  d = apply(prototype, 1, function(y) sum((x-y)^2))
  if (val)
    return(c(as.numeric(which.min(d)), min(d)))
  else
    return(as.numeric(which.min(d)))
}
## can be optimized
fulldist <- function(x)
{
   n = nrow(x)
   res = matrix(nrow = n, ncol = n)
   for(i in 1:n)
   {
     for (j in 1:n)
     {
       res[i, j] = sqrt(sum((x[i, ]- x[j, ])^2))
     }
   }
   return(res)
}
## calculate the distance of vector to a matrix
distance <- function(x, m)
{
  res = apply(m, 1, function(y) sqrt(sum((x-y)^2)))
  return(as.numeric(res))
}

plot.som <- function(data, coor, iter) {
  #plot(expand.grid(1:5, 1:5), cex = 10, xlim=c(0.5, 5.5), ylim=c(0.5, 5.5), pty="s")
  res = apply(data, 1, function(x) classify(x, coor))
  res = res - 0.001 ## avoid divisible
  res.x = floor(res/5)
  res.y = res - res.x*5
  #res.y[res.y == 0] == 5
  res.x = res.x + 1 + runif(90, -0.3, 0.3) # avoid overlap
  res.y = res.y + runif(90, -0.3, 0.3)
  #points(res.x[1:30],  res.y[1:30], col = "red", pch = 16, cex = 0.8)
  plot(res.x[1:30],  res.y[1:30], col = "red", pch = 16, xlim = c(0.5, 5.5), ylim = c(0.5, 5.5), pty="s", xlab = NA, ylab = NA, main = paste0("iteration ", iter))
  points(res.x[31:60], res.y[31:60], col = "green", pch = 16)
  points(res.x[61:90], res.y[61:90], col = "blue", pch = 16)
  xy = expand.grid(1:5, 1:5)
  symbols(xy[,1], xy[,2], circles = rep(0.45, nrow(xy)), add = T, inches = F)
}

run.som <- function(data, coor, R = 2, niter = 40, total.niter = niter * 90, fig = F) {
  if (fig) {
    ## initial configuration
    png("iter_0.png")
    plot.som(data, coor, 0)
    dev.off()
  }
  err = numeric(niter)
  for (iter in 1:niter)
  {
    cat("iter = ", iter, '\n')
    err[iter] = 0
    # alpha = 1 / (1 - niter) * iter + 1 - 1 / (1 - niter)
    # r = (R - 1) / (1 - niter) * iter + R - (R - 1) / (1 - niter)
    for (i in 1:90)
    {
      iter.i = 90 * (iter - 1) + i
      alpha = -1/total.niter*iter.i + 1
      r = -R/total.niter*iter.i + R
      # alpha = 1 / (1 - total.niter) * iter.i + 1 - 1 / (1 - total.niter)
      # r = (R - 1) / (1 - total.niter) * iter.i + R - (R - 1) / (1 - total.niter)
      xi = data[i, ]
      mj.res = classify(xi, coor, val = TRUE)
      mj.idx = mj.res[1]
      err[iter] = err[iter] + mj.res[2]
  #    mj.idx = classify(xi, coor)
      mj = coor.grid[mj.idx, ]
      # distance in Q1xQ2
      mk.idx = which(distance(mj, coor.grid) <= r)
      mk = coor.grid[mk.idx, ]
      xi.m = matrix(rep(1, length(mk.idx)),nrow = length(mk.idx)) %*% as.matrix(xi)
      # distance in R^p
      coor[mk.idx, ]= coor[mk.idx, ] + alpha*(xi.m - coor[mk.idx, ])
    }
    if (fig && (iter - 10*floor(iter/10) == 0))
    {
      png(paste0("iter_", iter, ".png"))
      plot.som(data, coor, iter)
      dev.off()
    }
  }
  return(list(coor=coor, err=err))
}

# reconstruction error
calc_err <- function(data, coor, cl) {
#  cl = apply(data, 1, function(x) classify(x, coor))
  err = 0
  for (i in 1:length(cl))
  {
    err = err + sum((data[i,] - coor[cl[i], ])^2)
  }
  return(err)
}

cpr.kmeans <- function() {
  # kmeans
  kcl = kmeans(data, 25)
  kerr = calc_err(data, kcl$centers, kcl$cluster)
  # plot reconstruction error
  plot(err, xlab = "Iteration", ylab = "Reconstruction Error", col = "red", type="o", ylim = c(0,max(err)))
  abline(h=kerr, col = "orange")
}

# run
# data = gen.data(0.06)
data = gen.data(0.6)
idx = sample(90, 25)
coor0 = data[idx, ]
res = run.som(data, coor0, niter = 40)
coor = res$coor
err = res$err
