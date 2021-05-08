# 3.10 文献笔记

| 原文   | [The Elements of Statistical Learning](https://web.stanford.edu/~hastie/ElemStatLearn/printings/ESLII_print12.pdf) |
| ---- | ---------------------------------------- |
| 翻译   | szcf-weiya                               |
| 发布 | 2017-06-09 |

线性回归在很多统计教材中都有讨论，比如，Seber (1984)[^1], Weisberg (1980)[^2] 以及 Mardia et al. (1979)[^3]．岭回归由 Hoerl and Kennard (1970)[^4]提出，而 lasso 由Tibshirani (1996)[^5]提出．几乎在同时，lasso形式的惩罚在信号处理中的 basis pursuit 方法中被提出（Chen et al., 1998）[^6]．最小角回归过程由 Efron et al. (2004)[^7]等人提出；与这有关的是早期 Osborne et al. (2000a)[^8]和 Osborne et al. (2000b)[^9]的homotopy过程．他们的算法也利用了在 LAR/lasso 算法中的分段线性，但是缺少透明度 (transparency)．向前逐步准则在 Hastie et al. (2007)[^10]中进行了讨论．Park and Hastie (2007)[^11] 发展了类似用于广义回归模型的最小角回归的路径算法．偏最小二乘由 Wold (1975)[^12]提出．收缩方法的比较或许可以在 Copas (1983)[^13] 和 Frank and Friedman (1993)[^14]中找到．

!!! note "weiya注"
    3.8节讲lasso及相关的路径算法一节中还有很多文献．

[^1]: Seber, G. (1984). Multivariate Observations, Wiley, New York.
[^2]: Weisberg, S. (1980). Applied Linear Regression, Wiley, New York.
[^3]: Mardia, K., Kent, J. and Bibby, J. (1979). Multivariate Analysis, Academic Press.
[^4]: Hoerl, A. E. and Kennard, R. (1970). Ridge regression: biased estimation for nonorthogonal problems, Technometrics 12: 55–67.
[^5]: Tibshirani, R. (1996). Regression shrinkage and selection via the lasso, Journal of the Royal Statistical Society, Series B 58: 267–288.
[^6]: Chen, S. S., Donoho, D. and Saunders, M. (1998). Atomic decomposition by basis pursuit, SIAM Journal on Scientific Computing 20(1): 33–61.
[^7]: Efron, B., Hastie, T., Johnstone, I. and Tibshirani, R. (2004). Least angle regression (with discussion), Annals of Statistics 32(2): 407–499.
[^8]: Osborne, M., Presnell, B. and Turlach, B. (2000a). A new approach to variable selection in least squares problems, IMA Journal of Numerical Analysis 20: 389–404.
[^9]: Osborne, M., Presnell, B. and Turlach, B. (2000b). On the lasso and its dual, Journal of Computational and Graphical Statistics 9: 319–337.
[^10]: Hastie, T., Taylor, J., Tibshirani, R. and Walther, G. (2007). Forward stagewise regression and the monotone lasso, Electronic Journal of Statistics 1: 1–29.
[^11]: Park, M. Y. and Hastie, T. (2007). l 1 -regularization path algorithm for generalized linear models, Journal of the Royal Statistical Society Series B 69: 659–677.
[^12]: Wold, H. (1975). Soft modelling by latent variables: the nonlinear iterative partial least squares (NIPALS) approach, Perspectives in Probability and Statistics, In Honor of M. S. Bartlett, pp. 117–144.
[^13]: Copas, J. B. (1983). Regression, prediction and shrinkage (with discussion), Journal of the Royal Statistical Society, Series B, Methodological 45: 311–354.
[^14]: Frank, I. and Friedman, J. (1993). A statistical view of some chemometrics regression tools (with discussion), Technometrics 35(2): 109–148.
