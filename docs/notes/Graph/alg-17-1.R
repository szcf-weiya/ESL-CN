## ######################################################################################
##
## Implementation for algorithm 17.1
##
## refer to https://esl.hohoweiya.xyz/17-Undirected-Graphical-Models/17.3-Undirected-Graphical-Models-for-Continuous-Variables/index.html
## for more details
##
## author: weiya <szcfweiya@gmail.com>
##
## ###################################################################################### 

## estimation of an undirected gaussian graphical model with known structure
estUGGM <- function(S)
{
    ## initialize
    W = S
    p = nrow(S)
    ## repeat until convergence
    i = 0
    converge = FALSE
    finalcycle = FALSE
    Omega = matrix(ncol=p,nrow=p)
    while(TRUE)
    {
        for (j in 1:p)
        {
            if (j == 1 && converge)
                finalcycle = TRUE
            beta.hat = matrix(rep(0,p-1),ncol=1)
            idx = c(1:p, j)[-j]
            W.reorder = W[idx, idx]
            S.reorder = S[idx, idx]
            W.11 = W[-j, -j]
            ## W11.star, s12.star based on the known graph structure
            if (j == 1)
            {
                W.11.star = W[-c(1,3), -c(1,3)]
                s.12.star = S[1, -c(1,3)] # edge 1-3
            }
            else if (j == 2)
            {
                W.11.star = W[-c(2,4), -c(2,4)]
                s.12.star = S[2, -c(2,4)] # edge 2-4
            }
            else if (j == 3)
            {
                W.11.star = W[-c(3,1), -c(3,1)]
                s.12.star = S[3, -c(1,3)] # edge 3-1
            }
            else if (j == 4)
            {
                W.11.star = W[-c(2,4), -c(2,4)]
                s.12.star = S[4, -c(2,4)] # edge 2-4
            }
            ## solve reduced system of equations
            beta.star = solve(W.11.star, s.12.star)
            ## update
            if (j == 1 || j == 4)
            {
                beta.hat[-2] = beta.star
            }
            else if (j == 2)
            {
                beta.hat[-3] = beta.star
            }
            else if (j == 3)
            {
                beta.hat[-1] = beta.star
            }
            W.reorder[p, -p] = W.11 %*% beta.hat
            W.reorder[-p, p] = W.11 %*% beta.hat
            W.backup = W
            W = W.reorder[order(idx), order(idx)]
            err = norm(W.backup-W)
            cat("j = ", j," err = ", err, "\n")
            if (err < 1e-12)
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
## use adjacency matrix as graph structure
estUGGM2 <- function(S, adj)
{
  ## initialize
  W = S
  p = nrow(S)
  ## repeat until convergence
  i = 0
  converge = FALSE
  finalcycle = FALSE
  Omega = matrix(ncol=p,nrow=p)
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
      ## W11.star, s12.star base on the known graph structure
      ## use adjacency matrix
      edge.idx = which(adj[j,] != 0)
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
      if (err < 1e-12)
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
## example
S = matrix(c(10, 1, 5, 4,
             1, 10, 2, 6,
             5, 2, 10, 3,
             4, 6, 3, 10), ncol = 4)
adj = matrix(c(0, 1, 0, 1,
               1, 0, 1, 0,
               0, 1, 0, 1,
               1, 0, 1, 0), ncol = 4)
estUGGM(S)
estUGGM2(S, adj)
