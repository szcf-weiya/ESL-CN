library(wavethresh)

## Example 2.3
y = c(1, 1, 7, 9, 2, 8, 8, 6)
ywd = wd(y, filter.number = 1, family = "DaubExPhase")
# obtain the finest-level coefficients
accessD(ywd, level=2)

## 2.1.3 Matrix Representation
W1 = t(GenW(filter.number = 1, family = 'DaubExPhase'))
W1 %*% t(W1)

## #################################################
## 2.2.7 discrete Haar wavelet transform examples
## #################################################

## fig. 2.6
yy = DJ.EX()$blocks
yywd = wd(yy, filter.number = 1, family = "DaubExPhase")
x = 1:1024
oldpar <- par(mfrow=c(2,2))
plot(x, yy, type = "l", xlab = "x", ylab = "Doppler")
plot(x, yy, type = "l", xlab = "x", ylab = "Doppler")
plot(yywd, main = "")
plot(yywd, scaling = "by.level", main = "")
par(oldpar)

## fig. 2.7
yy = DJ.EX()$doppler
yywd = wd(yy, filter.number = 1, family = "DaubExPhase")
x = 1:1024
oldpar <- par(mfrow=c(2,2))
plot(x, yy, type = "l", xlab = "x", ylab = "Doppler")
plot(x, yy, type = "l", xlab = "x", ylab = "Doppler")
plot(yywd, main = "")
plot(yywd, scaling = "by.level", main = "")
par(oldpar)

## ##################################################
## 2.5.1 Daubechies' compactly supported wavelets
## ##################################################

filter.select(filter.number = 1, family = "DaubExPhase") # from 1(Haar) to 10
filter.select(filter.number = 4, family = "DaubLeAsymm") # from 4 to 10

## fig. 2.8
oldpar = par(mfrow = c(2, 1))
draw.default(filter.number = 4, family = "DaubExPhase", enhance = FALSE,  main = "a.")
draw.default(filter.number = 4, family = "DaubExPhase", enhance = FALSE,  scaling.function = TRUE, main = "a.")
par(oldpar)

## fig. 2.9
oldpar = par(mfrow = c(2, 1))
draw.default(filter.number = 10, family = "DaubExPhase", enhance = FALSE,  main = "a.")
draw.default(filter.number = 10, family = "DaubExPhase", enhance = FALSE,  scaling.function = TRUE, main = "a.")
par(oldpar)

W2 = t(GenW(n=8, filter.number = 3, family = "DaubExPhase"))
W2

## Example 2.4 (continue Example 2.3)
yinv = wr(ywd)

## fig. 3.3
res = example.1()
plot(res, type = "l")

## universal thresholding
v = DJ.EX()
x = (1:1024)/1024
plot(x, v$bumps, type = "l", ylab = "Bumps") #  fig. 3.4
ssig = sd(v$bumps) # Bumps sd
SNR = 2 # fix SNR
# work out what the variance of the noise is ...
sigma = ssig/SNR
# generate it
e = rnorm(1024, mean = 0, sd = sigma)
# add this noise to Bumps
y = v$bumps + e
plot(x, y, type = "l", ylab = "Noisy bumps")

## plot wd of bumps
xlv = seq(from = 0, to = 1.0, by = 0.2)
bumpswd = wd(v$bumps)
plot(bumpswd, main = "", sub = "",
     xlabvals = xlv*512, xlabchars = as.character(xlv),
     xlab = "x")

## plot wd of noisy bumps for comparison
ywd = wd(y)
plot(ywd, main = "", sub = "",
     xlabvals = xlv*512, xlabchars = as.character(xlv),
     xlab = "x")

## threshold
FineCoefs = accessD(ywd, level = nlevelsWT(ywd) - 1)
sigma = mad(FineCoefs)
utDJ = sigma*sqrt(2*log(1024))
ywdT = threshold(ywd, policy = "manual", value = utDJ)

## compare
ywr = wr(ywdT)
plot(x, ywr, type = "l")
lines(x, v$bumps, lty = 2)
