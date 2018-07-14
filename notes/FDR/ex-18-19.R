# read data
data.x = read.table("data/gene_expression_data.txt")
data.y = readLines("data/outcome.txt")
## convert char to numeric
y = c(as.numeric(strsplit(data.y[1], " ")[[1]]),
      as.numeric(strsplit(data.y[2], " ")[[1]]))
## remove NA
y = y[!is.na(y)]
## calculate t statistic
calc.t <- function(data.x, y, N1 = sum(y==1), N2 = sum(y==2)){
  mu1 = rowMeans(data.x[, y==1])
  mu2 = rowMeans(data.x[, y==2])
  s1 = rowSums((data.x[, y==1] - mu1)^2)
  s2 = rowSums((data.x[, y==2] - mu2)^2)
  s = (s1 + s2)/(N1 + N2 - 2)
  se = sqrt((1/N1+1/N2)*s)
  t = (mu2 - mu1)/se
  return(t)
}
## permutation distribution
M = nrow(data.x)
K = 1000
tk = matrix(nrow = M, ncol = K)
set.seed(123)
for (i in 1:K){
  y1 = sample(y)
  tk[, i] = calc.t(data.x, y1)
}
## calculate t
t.stat = calc.t(data.x, y)
## estimate FDR via plug-in method
pluginFDR <- function(C, data.x, y, tk, t.stat){
  Robs = sum(abs(t.stat) > C)
  ## estimate EV
  EV = sum(abs(tk) > C)/K
  ## estimate pvalue
#  pvalue = numeric(M)
#  for (i in 1:M)
#  {
#    pvalue[i] = sum(abs(tk) > abs(t.stat[i]))/(M*K)
#  }
  cl<-makeCluster(4)
  clusterExport(cl, "M")
  clusterExport(cl, "K")
  pvalue = parSapply(cl, t.stat, function(ti) sum(abs(tk) > abs(ti))/(M*K))
  stopCluster(cl)
  return(list(FDR=EV/Robs, pvalue=pvalue))
}
## various cut-point
C = c(3.9, 4.0, 4.1, 4.2, 4.3)
FDR = numeric(5)
all.pvalue = matrix(nrow = nrow(data.x), ncol = 5)
for (i in 1:5){
  res = pluginFDR(C[i], data.x, y, tk, t.stat)
  FDR[i] = res$FDR
  all.pvalue[, i] = res$pvalue
  cat(paste0("C = ", C[i], ", FDR = ", FDR[i], "\n"))
}
## fix alpha level
for (i in 1:5){
  alpha = round(FDR[i], digits = 2)
  pvalue.sort = sort(all.pvalue[, i])
  rightval = alpha/M * c(1:M)
  L = max(which(pvalue.sort < rightval))
  cat("i = ", i, "L = ", L, "\n")
}