## ##################################################################################################################################
## R code for reproducing Fig. 5.9
## 
## author: szcf-weiya <szcfweiya@gmail.com>
## 
## refer to
##  https://esl.hohoweiya.xyz/05-Basis-Expansions-and-Regularization/5.5-Automatic-Selection-of-the-Smoothing-Parameters/index.html
## for more details
##
## ##################################################################################################################################

## generate dataset
func <- function(x)
{
  return(sin(12*(x+0.2))/(x+0.2))
}
genXY <- function(N = 100)
{
  x = runif(N)
  noise = rnorm(N)
  y = func(x) + noise
  return(list(X = x,
              Y = y))
}

mysmooth.spline <- function(X, Y, df){
  nY = length(Y)
  nX = length(X)
  cv.i = as.numeric(nX)
  if (nX != nY)
    return(0)
  # calculate LOOCV
  for (i in 1:nX){
    x = X[-i]
    y = Y[-i]
    model = smooth.spline(x, y, df = df, all.knots = TRUE)
    cv.i[i] = (Y[i] - predict(model, X[i])$y)^2
  }
  cv = mean(cv.i)
  # calculate EPE
  model.full = smooth.spline(X, Y, df = df, all.knots = TRUE)
  #Y.pred = model.full$y
  #Y.true = model.full$yin # DO NOT use Y directly, because they have reordered.
  #epe = mean(( Y.true - Y.pred)^2)
  #data.test = genXY(N = 500)
  #x.test = data.test$X
  #y.test = data.test$Y
  #y.pred = predict(model.full, x.test)$y
  #epe = mean((y.test - y.pred)^2)
  n2 = 100
  yhat = array(dim = c(n2, nY))
  epe.i = numeric(n2)
  for (i in 1:n2){
    ind = sample(N, 50)
    model = smooth.spline(X[ind], Y[ind], df = df)
    y.pred = predict(model, X[-ind])$y
    epe.i[i] = mean((y.pred - Y[-ind])^2)
    # predict the whole dataset
    yhat[i, ] = predict(model, sort(X))$y
  }
  epe = mean(epe.i)
  ## calculate the mean and sd of fitted value
  yhat.mean = apply(yhat, 2, mean)
  yhat.sd = apply(yhat, 2, sd)
  return(list(CV = cv, EPE = epe,
              fitted = yhat.mean, sd = yhat.sd))
}

## simulation
set.seed(1234)
N = 100
data = genXY(N)
X = data$X
Y = data$Y
nrep = 15
df.seq = (1:nrep)+1
models = vector("list", nrep)
cvs = numeric(nrep)
epes = numeric(nrep)
#crits = numeric(nrep)
# for (i in 1:nrep){
#   models[[i]] = smooth.spline(X, Y, df = df.seq[i], cv=TRUE, all.knots = TRUE)
#   cvs[i] = models[[i]]$cv.crit
#   pens[i] = models[[i]]$pen.crit/N
#   #crits[i] = models[[i]]$crit
# }

 
for (i in 1:nrep)
{
  res = mysmooth.spline(X, Y, df=df.seq[i])
  cvs[i] = res$CV
  epes[i] = res$EPE
}
## fig. 5.19 (a)
png("res-5-19a.png")
plot(df.seq, cvs, col = "blue", pch = 16, ylim = c(0.8, 3.0),
     main = "Cross-Validation",
     xlab = expression(df[lambda]),
     ylab = expression(paste(EPE[lambda], " and ", CV[lambda])))
points(df.seq, epes, col = "orange", pch = 16)
legend("topright", 
       col = c("blue", "orange"), 
       pch = c(16, 16), legend = c("CV", "EPE"))
abline(v=9)
dev.off()

## plot function for (b)-(d)
plot.lambda <- function(X, Y, lambda)
{
  res = mysmooth.spline(X, Y, lambda)
  fitted = res$fitted
  sd = res$sd
  plot(X, Y, xlab = expression(X), ylab = "y",
       main = substitute(paste(df[lambda]," = ", l), list(l=lambda)))#expression(paste(df[lambda]," = ", lambda)))
  lines(0.01*0:100, func(0.01*0:100), col = "blue", type = "l", lwd=3)
  lines(sort(X), fitted, lwd = 3)
  polygon(c(rev(sort(X)), sort(X)), c(rev(fitted-2*sd), fitted+2*sd), 
          col=rgb(1, 1, 0, 0.5), border = NA)
}

## fig. 5.19 (b)
png("res-5-19b.png")
plot.lambda(X, Y, 5)
dev.off()
## fig. 5.19 (c)
png("res-5-19c.png")
plot.lambda(X, Y, 9)
dev.off()
## fig. 5.19 (d)
png("res-5-19d.png")
plot.lambda(X, Y, 15)
dev.off()