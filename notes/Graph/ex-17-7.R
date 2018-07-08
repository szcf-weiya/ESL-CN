## ######################################################################################
##
## Solution for Ex. 17.7
##
## refer to https://github.com/szcf-weiya/ESL-CN/issues/138
## for more details
##
## author: weiya <szcfweiya@gmail.com>
##
## ###################################################################################### 
rm(list = ls(all=TRUE))
## read data
data = read.table("data/data.txt")
covariance = read.table("data/covariance-mat.txt")
S = as.matrix(covariance)
colnames(data) = c("praf",
                   "pmek",
                   "plcg",
                   "PIP2",
                   "PIP3",
                   "p44/42",
                   "pakts473",
                   "PKA",
                   "PKC",
                   "P38",
                   "pjnk")

adj = matrix(c(0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
               1, 0, 0, 1, 0, 0, 1, 1, 0, 1, 0,
               0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0,
               0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1,
               0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
               0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
               0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0,
               0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0,
               0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0,
               0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 1,
               0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0), nrow = 11)

## estimation of an undirected gaussian graphical model with known structure
## refer to alg-17-1.R
estUGGM <- function(S, adj)
{
  ## initialize
  W = S
  p = nrow(S)
  ## repeat until convergence
  i = 0
  converge = FALSE
  finalcycle = FALSE
  Omega = matrix(0, ncol=p,nrow=p)
  while(TRUE)
  {
    for (j in 1:p)
    {
      if (j == 1 && converge)
        finalcycle = TRUE
      beta.hat = matrix(rep(0,p-1),ncol=1)
      beta.hat.add.j = matrix(rep(0,p),ncol=1)
      idx = c(1:p, j)[-j]
      W.reorder = W[idx, idx]
      S.reorder = S[idx, idx]
      W.11 = W[-j, -j]
      ## W11.star, s12.star based on the known graph structure
      edge.idx = which(adj[j,] != 0)
      if(length(edge.idx) == 0)
        next
      W.11.star = W[edge.idx, edge.idx]
      s.12.star = S[j, edge.idx]
      ## solve reduced system of equations
      beta.star = solve(W.11.star, s.12.star)
      ## update
      beta.hat.add.j[edge.idx] = beta.star
      beta.hat = beta.hat.add.j[-j]
      W.reorder[p, -p] = W.11 %*% beta.hat
      W.reorder[-p, p] = W.11 %*% beta.hat
      W.backup = W
      W = W.reorder[order(idx), order(idx)]
      err = norm(W.backup-W)
      cat("j = ", j," err = ", err, "\n")
      if (err < 1e-11)
        converge = 1
      ## final cycle
      if (finalcycle)
      {
        theta22 = 1/(S[j, j] - sum(W.reorder[p,-p]*beta.hat))
        theta12 = -1.0 * beta.hat * theta22
        Omega[j, j] = theta22
        Omega[j, -j] = theta12
        Omega[-j, j] = theta12
      }
      if (finalcycle && j == p)
      {
        break
      }
    }
    if (finalcycle && j == p)
      break
  }
  ## matrix sigma
  print(W)
  print(Omega)
}

## run 
estUGGM(S, adj)