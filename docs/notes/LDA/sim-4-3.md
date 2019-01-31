# 模拟：Fig. 4.3

| 正文 | [4.3 线性判别分析](../../04-Linear-Methods-for-Classification/4.2-Linear-Regression-of-an-Indicator-Matrix/index.html) |
| ---- | ---------------------------------------- |
| 作者   | szcf-weiya                               |
| 时间   | 2018-07-11                               |

## 生成数据

根据 Fig. 4.2 知，我们需要生成三个类别的数据，于是采用下面代码生成了均值不同，协方差相同的多元正态随机变量，

```r
mu = c(0.25, 0.5, 0.75)
sigma = 0.005*matrix(c(1, 0,
                 0, 1), 2, 2)
library(MASS)
set.seed(1650)
N = 100
X1 = mvrnorm(n = N, c(mu[1], mu[1]), Sigma = sigma)
X2 = mvrnorm(n = N, c(mu[2], mu[2]), Sigma = sigma)
X3 = mvrnorm(n = N, c(mu[3], mu[3]), Sigma = sigma)
X = rbind(X1, X2, X3)
```

分布图为

![](reproduce-fig-4-2.png)

## 拟合

首先将生成的数据投射到三类数据点形心连线上，并且构造响应变量 $y$，然后分别拟合左右图，并以此进行分类，计算误差率，具体结果如下：

## 左图

![](reproduce-fig-4-3l.png)

## 右图

![](reproduce-fig-4-3r.png)

完整代码参见 [Github](https://github.com/szcf-weiya/ESL-CN/tree/master/docs/notes/LDA/sim-fig-4-2.R)

