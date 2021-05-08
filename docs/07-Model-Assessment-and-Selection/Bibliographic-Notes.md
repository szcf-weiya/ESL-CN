# 7.13 文献笔记

| 原文   | [The Elements of Statistical Learning](https://web.stanford.edu/~hastie/ElemStatLearn/printings/ESLII_print12.pdf) |
| ---- | ---------------------------------------- |
| 翻译   | szcf-weiya                               |
| 发布 | 2017-02-20 |

交叉验证的主要参考文献为Stone(1974)[^1]，Stone(1977)[^2]和Allen(1974)[^3]．AIC由Akaike(1973)[^4]提出，而BIC由Schwarz（1978）[^5]提出．Madigan and Raftery（1994）[^6]概述了贝叶斯模型选择．MDL准则归功于Rissanen(1983)[^7]．Cover and Thomas（1991）[^8]包含编码理论和复杂性的很好的描述．VC维在Vapnik（1996）[^8]中有描述．Stone（1977）[^2]证明了AIC和舍一交叉验证渐进相等．一般的交叉验证由Golub et. al（1979）[^10]和Wahba（1980）[^11]描述．也可以参见Hastie and Tibshirani（1990）[^12]的第三章．自助法归功于Efron（1979）[^13]；它的概述可以参见Efron and Tibshirani（1993）[^14]．Efron（1983）[^15]提出一系列预测误差的自助法估计，包括乐观估计和.632估计．Efron（1986）[^16]比较CV和GCV以及误差率的自助法估计．Breiman and Spector（1992)[^17]，Breiman（1992）[^18]，Shao（1996）[^19]，Zhang（1993）[^20]和Kohavi（1995）[^21]等人研究了模型选择的交叉验证和自助法．.632+估计由Efron and Tibshirani（1997）[^22]提出．

Cherkassky and Ma(2003)[^23]发表了回归中SRM用于模型选择的表现的研究，这对应本书的7.9.1节．他们抱怨我们对待SRM不公平，因为没有正确地应用它．我们的回复可以在期刊的同一个问题中找到（Hastie et. al（2003）[^24]）．

[^1]: Stone, M. (1974). Cross-validatory choice and assessment of statistical predictions, Journal of the Royal Statistical Society Series B 36: 111–147.
[^2]: Stone, M. (1977). An asymptotic equivalence of choice of model by cross-validation and Akaike’s criterion, Journal of the Royal Statistical Society Series B. 39: 44–7.
[^3]: Allen, D. (1974). The relationship between variable selection and data augmentation and a method of prediction, Technometrics 16: 125–7.
[^4]: Akaike, H. (1973). Information theory and an extension of the maximum likelihood principle, Second International Symposium on Information Theory, pp. 267–281.
[^5]: Schwarz, G. (1978). Estimating the dimension of a model, Annals of Statistics 6(2): 461–464.
[^6]: Madigan, D. and Raftery, A. (1994). Model selection and accounting for model uncertainty using Occam’s window, Journal of the American Statistical Association 89: 1535–46.
[^7]: Rissanen, J. (1983). A universal prior for integers and estimation by minimum description length, Annals of Statistics 11: 416–431.
[^8]: Vapnik, V. (1996). The Nature of Statistical Learning Theory, Springer, New York.
[^10]: Golub, G., Heath, M. and Wahba, G. (1979). Generalized cross-validation as a method for choosing a good ridge parameter, Technometrics 21: 215–224.
[^11]: Wahba, G. (1980). Spline bases, regularization, and generalized cross-validation for solving approximation problems with large quantities of noisy data, Proceedings of the International Conference on Approximation theory in Honour of George Lorenz, Academic Press, Austin, Texas, pp. 905–912.
[^12]: Hastie, T. and Tibshirani, R. (1990). Generalized Additive Models, Chapman and Hall, London.
[^13]: Efron, B. (1979). Bootstrap methods: another look at the jackknife, Annals of Statistics 7: 1–26.
[^14]: Efron, B. and Tibshirani, R. (1993). An Introduction to the Bootstrap, Chapman and Hall, London.
[^15]: Efron, B. (1983). Estimating the error rate of a prediction rule: some improvements on cross-validation, Journal of the American Statistical Association 78: 316–331.
[^16]: Efron, B. (1986). How biased is the apparent error rate of a prediction rule?, Journal of the American Statistical Association 81: 461–70.
[^17]: Breiman, L. and Spector, P. (1992). Submodel selection and evaluation in regression: the X-random case, International Statistical Review 60: 291–319.
[^18]: Breiman, L. (1992). The little bootstrap and other methods for dimensionality selection in regression: X-fixed prediction error, Journal of the American Statistical Association 87: 738–754.
[^19]: Shao, J. (1996). Bootstrap model selection, Journal of the American Statistical Association 91: 655–665.
[^20]: Zhang, P. (1993). Model selection via multifold cross-validation, Annals of Statistics 21: 299–311.
[^21]: Kohavi, R. (1995). A study of cross-validation and bootstrap for accuracy estimation and model selection, International Joint Conference
on Artificial Intelligence (IJCAI), Morgan Kaufmann, pp. 1137–1143.
[^22]: Efron, B. and Tibshirani, R. (1997). Improvements on cross-validation: the 632+ bootstrap: method, Journal of the American Statistical Association 92: 548–560.
[^23]: Cherkassky, V. and Ma, Y. (2003). Comparison of model selection for regression, Neural computation 15(7): 1691–1714.
[^24]: Hastie, T., Tibshirani, R. and Friedman, J. (2003). A note on “Comparison of model selection for regression” by Cherkassky and Ma, Neural computation 15(7): 1477–1480.
