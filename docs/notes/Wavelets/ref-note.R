library(wavethresh)
# create the vector that contains our input to the transform
y = c(1, 1, 7, 9, 2, 8, 8, 6)
# Haar wavelet
ywd = wd(y, filter.number = 1, family = "DaubExPhase")
# filter
ywd$filter
# extract the finest-level coefficients
accessD(ywd, level = 2)
# plot for wavelet decomposition coefficients
plot(ywd)

## produce the matrix
W1 = t(GenW(filter.number = 1, family = "DaubExPhase"))

## figure 2.7
yy = DJ.EX()$doppler
yywd = wd(yy, filter.number = 1, family = "DaubExPhase")
x = 1:1024
oldpar = par(mfrow = c(2,2))
plot(x, yy, type = "l", xlab = "x", ylab = "Doppler")
plot(x, yy, type = "l", xlab = "x", ylab = "Doppler")
plot(yywd, main = "")
plot(yywd, scaling = "by.level", main = "")
par(oldpar)

## looking at the first 15 coefficients at level eight
accessD(wd(DJ.EX()$blocks), level = 8)[1:15]

## ##################################
## universal thresholding
## ##################################
v = DJ.EX()
# define X coordinates too
x = (1:1024)/1024
plot(x, v$bumps, type = "l", ylab="Bumps")
# specify a SNR of 2
ssig = sd(v$bumps)
SNR = 2 # fix SNR
sigma = ssig/SNR
e = rnorm(1024, 0, sigma)
y = v$bumps + e
plot(x, y, type = "l", ylab = "Noisy bumps")
#
# plot wd of bumps
# 
xlv = seq(from = 0, to = 1.0, by = 0.2)
bumpswd = wd(v$bumps)
plot(bumpswd, main = "", sub = "",
     xlabvals = xlv*512, xlabchars=as.character(xlv),
     xlab="x")
#
# plot wd of noisy bumps for comparison
# 
ywd = wd(y)
plot(ywd, main = "", sub = "",
     xlabvals = xlv*512, xlabchars=as.character(xlv),
     xlab = "x")

## extract the finest-level coefficients
FineCoefs = accessD(ywd, level = nlevelsWT(ywd)-1)
sigma = mad(FineCoefs)
utDJ = sigma*sqrt(2*log(1024))
ywdT = threshold(ywd, policy = "manual", value = utDJ)
# wavelet reconstruction
ywr = wr(ywdT)
plot(x, ywr, type = "l")
lines(x, v$bumps, lty = 2)
