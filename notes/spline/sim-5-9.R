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
  epe.i = numeric(n2)
  for (i in 1:n2){
    ind = sample(N, 50)
    model = smooth.spline(X[ind], Y[ind], df = df)
    y.pred = predict(model, X[-ind])$y
    epe.i[i] = mean((y.pred - Y[-ind])^2)
  }
  epe = mean(epe.i)
  return(list(CV = cv, EPE = epe))
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
plot(df.seq, cvs, col = "blue", pch = 16, ylim = c(0.8, 3.0))
points(df.seq, epes, col = "orange", pch = 16)