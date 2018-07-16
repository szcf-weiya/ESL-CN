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