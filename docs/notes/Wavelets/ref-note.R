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