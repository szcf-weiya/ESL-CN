## ############################################################################
## Lift Charts
## ############################################################################

## ############################################################################
## change the default color
## 
## The default colors are not very friendly.
## It seems that the same color at the first glance.
##
## refer to 
##     https://stat.ethz.ch/pipermail/r-help//2009-February/381379.html
## for more details
## 
## ############################################################################

trellis.par.set(superpose.line = list(col=c("blue","red"), lwd = 2),
                superpose.symbol = list(cex = 1.3, pch = 20),
                reference.line = list(col = "gray", lty ="dotted"))
simulated <- data.frame(obs = factor(rep(letters[1:2], each = 100)),
                        perfect = sort(runif(200), decreasing = TRUE),
                        random = runif(200))
lift2 <- lift(obs ~ random + perfect, data = simulated)
lift2
xyplot(lift2, auto.key = list(columns = 2,
                              lines = TRUE,
                              points = FALSE))