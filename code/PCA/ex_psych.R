## PCA examples by psych package
## author: weiya <szcfweiya@gmail.com>
## date: 2018-01-20
##
## reference: R in Action


library(psych)
fa.parallel(USJudgeRatings[, -1], fa = "pc", n.iter = 100,
            show.legend = FALSE, main = "Screen plot with parallel analysis")