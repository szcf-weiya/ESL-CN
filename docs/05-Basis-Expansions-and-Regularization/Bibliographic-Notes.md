# 5.10 文献笔记

| 原文   | [The Elements of Statistical Learning](https://web.stanford.edu/~hastie/ElemStatLearn/printings/ESLII_print12.pdf) |
| ---- | ---------------------------------------- |
| 翻译   | szcf-weiya                               |
| 发布 | 2017-06-09 |

样条和B样条在de Boor (1978)[^1]中有详细讨论．Green and Silverman (1994)[^2]和Wahba (1990)给出了光滑样条以及thin-plate样条的；后者也产生核Hilbert空间．关于采用RKHS方法的非参回归技巧的联系可以参见Girosi et al. (1995)[^3] 和Evgeniou et al. (2000)[^4]．如5.2.3节所示，对函数数据建模，在Ramsay and Silverman (1997)[^5]中有详细介绍．

Daubechies (1992)[^6]是一个经典的、小波的数学处理．其它有用的资源有Chui (1992)[^7]和Wickerhauser (1994)[^8]．Donoho and Johnstone (1994)[^9]从统计估计的框架下发展了SURE收缩和选择的技巧；也可以参见Vidakovic (1999)[^10]．Bruce and Gao (1996)[^11]是很有用的应用介绍，它也描述了S-PLUS中的小波软件．


[^1]: de Boor, C. (1978). A Practical Guide to Splines, Springer, New York.
[^2]: Green, P. and Silverman, B. (1994). Nonparametric Regression and Generalized Linear Models: A Roughness Penalty Approach, Chapman and Hall, London.
[^3]: Girosi, F., Jones, M. and Poggio, T. (1995). Regularization theory and neural network architectures, Neural Computation 7: 219–269.
[^4]: Evgeniou, T., Pontil, M. and Poggio, T. (2000). Regularization networks and support vector machines, Advances in Computational Mathematics 13(1): 1–50.
[^5]: Ramsay, J. and Silverman, B. (1997). Functional Data Analysis, Springer, New York.
[^6]: Daubechies, I. (1992). Ten Lectures on Wavelets, Society for Industrial and Applied Mathematics, Philadelphia, PA.
[^7]: Chui, C. (1992). An Introduction to Wavelets, Academic Press, London.
[^8]: Wickerhauser, M. (1994). Adapted Wavelet Analysis from Theory to Software, A.K. Peters Ltd, Natick, MA.
[^9]: Donoho, D. and Johnstone, I. (1994). Ideal spatial adaptation by wavelet shrinkage, Biometrika 81: 425–455.
[^10]: Vidakovic, B. (1999). Statistical Modeling by Wavelets, Wiley, New York.
[^11]: Bruce, A. and Gao, H. (1996). Applied Wavelet Analysis with S-PLUS, Springer, New York.
