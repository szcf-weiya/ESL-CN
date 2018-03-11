## ######################################
## this code is from 
##    http://www2.stat.duke.edu/~rcs46/lectures_2015/02-multivar2/02-multivar2.pdf
## ######################################

library(mvtnorm)
x.points <- seq(-3,3,length.out=100)
y.points <- x.points
z <- matrix(0,nrow=100,ncol=100)
mu <- c(1,1)
sigma <- matrix(c(2,1,1,1),nrow=2)
for (i in 1:100) {
  for (j in 1:100) {
    z[i,j] <- dmvnorm(c(x.points[i],y.points[j]),
                      mean=mu,sigma=sigma)
  }
}
df = data.frame(x, y, z)
ggplot(data = df, aes(x=x, y=y)) + 
  geom_contour(data = df, aes(z=z))
contour(x.points,y.points,z)

## #################################
## the following code is adopted from 
##    https://stat.ethz.ch/pipermail/r-help/2008-June/166079.html
## #################################

# Example 95%
x <- rnorm(1000, mean = 0, sd = 1)
y <- rnorm(1000, mean = 1, sd = 1.3)
kerneld <- kde2d(x, y, n = 100, lims = c(-5.0, 5.0, -5.0, 5.0))

pp <- array()
for (i in 1:1000){
  z.x <- max(which(kerneld$x < x[i]))
  z.y <- max(which(kerneld$y < y[i]))
  pp[i] <- kerneld$z[z.x, z.y]
}

confidencebound <- quantile(pp, 0.05, na.rm = TRUE)

plot(x, y, pch = 19, cex = 0.5)
contour(kerneld, levels = confidencebound, col = "red", add = TRUE)