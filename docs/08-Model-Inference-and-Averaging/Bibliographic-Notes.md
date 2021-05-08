# 8.10 文献笔记

| 原文   | [The Elements of Statistical Learning](https://web.stanford.edu/~hastie/ElemStatLearn/printings/ESLII_print12.pdf) |
| ---- | ---------------------------------------- |
| 翻译   | szcf-weiya                               |
| 发布 | 2017-09-06 |
| 更新| 2019-08-01 19:39:45|
| 状态|Done|

关于经典的统计推断有很多书：Cox and Hinkley (1974)[^1] 和 Silvey (1975)[^2] 给出了通俗的解释．自助法归功于 Efron (1979)[^3]，并且在 Efron and Tibshirani (1993)[^4] 和 Hall (1992)[^5] 中作了完整的描述．贝叶斯推断的一本很好的现代书是 Gelman et al. (1995)[^6]．清晰描述贝叶斯方法在神经网络的应用由 Neal (1996)[^18] 给出．Gibbs 采样的统计应用归功于 Geman and Geman (1984)[^7]，以及Gelfand and Smith (1990)[^8]，还有 Tanner and Wong (1987)[^9] 相关的工作．马尔科夫蒙特卡洛方法，包括吉布斯采样以及 MH 算法，在Spiegelhalter et al. (1996)[^10] 有讨论．EM 算法归功于 Dempster et al. (1977)[^11]；虽然之前有很多相关的工作，但因为这篇文章的讨论者将其清晰地描述出来．EM 看成完整数据对数似然惩罚的联合最大化由 Neal and Hinton (1998)[^12]给出；他们将其归功于 Csiszar and Tusnády (1984)[^19] 和 Hathaway (1986)[^20]，因为这两篇文章已经注意到了这个联系．Bagging 由 Breiman (1996a)[^13] 提出．Stacking 归功于 Wolpert (1992)[^14]； Breiman (1996b)[^21] 包含统计学家们的讨论．Leblanc and Tibshirani (1996)[^15] 描述了基于自助法的 stacking 的变形．在贝叶斯网络中平均模型最近由 Madigan and Raftery (1994)[^16] 提出．Bumping 由 Tibshirani and Knight (1999)[^17] 提出．

[^1]: Cox, D. and Hinkley, D. (1974). Theoretical Statistics, Chapman and Hall, London.
[^2]: Silvey, S. (1975). Statistical Inference, Chapman and Hall, London.
[^3]: Efron, B. (1979). Bootstrap methods: another look at the jackknife, Annals of Statistics 7: 1–26.
[^4]: Efron, B. and Tibshirani, R. (1993). An Introduction to the Bootstrap, Chapman and Hall, London.
[^5]: Hall, P. (1992). The Bootstrap and Edgeworth Expansion, Springer, New York.
[^6]: Gelman, A., Carlin, J., Stern, H. and Rubin, D. (1995). Bayesian Data Analysis, CRC Press, Boca Raton, FL.
[^7]: Geman, S. and Geman, D. (1984). Stochastic relaxation, Gibbs distributions and the Bayesian restoration of images, IEEE Transactions on Pattern Analysis and Machine Intelligence 6: 721–741.
[^8]: Gelfand, A. and Smith, A. (1990). Sampling based approaches to calculating marginal densities, Journal of the American Statistical Association 85: 398–409.
[^9]: Tanner, M. and Wong, W. (1987). The calculation of posterior distributions by data augmentation (with discussion), Journal of the American Statistical Association 82: 528–550.
[^10]: Spiegelhalter, D., Best, N., Gilks, W. and Inskip, H. (1996). Hepatitis B: a case study in MCMC methods, in W. Gilks, S. Richardson and D. Spegelhalter (eds), Markov Chain Monte Carlo in Practice, Inter- disciplinary Statistics, Chapman and Hall, London, pp. 21–43.
[^11]: Dempster, A., Laird, N. and Rubin, D. (1977). Maximum likelihood from incomplete data via the EM algorithm (with discussion), Journal of the Royal Statistical Society Series B 39: 1–38.
[^12]: Neal, R. and Hinton, G. (1998). A view of the EM algorithm that justifies incremental, sparse, and other variants; in Learning in Graphical Models, M. Jordan (ed.), Dordrecht: Kluwer Academic Publishers, Boston, MA., pp. 355–368.
[^13]: Breiman, L. (1996a). Bagging predictors, Machine Learning 26: 123–140.
[^14]: Wolpert, D. (1992). Stacked generalization, Neural Networks 5: 241–259.
[^15]: Leblanc, M. and Tibshirani, R. (1996). Combining estimates in regression and classification, Journal of the American Statistical Association 91: 1641–1650.
[^16]: Madigan, D. and Raftery, A. (1994). Model selection and accounting for model uncertainty using Occam’s window, Journal of the American Statistical Association 89: 1535–46.
[^17]: Tibshirani, R. and Knight, K. (1999). Model search and inference by bootstrap “bumping, Journal of Computational and Graphical Statistics 8: 671–686.
[^18]: Neal, R. (1996). Bayesian Learning for Neural Networks, Springer, New York.
[^19]: Csiszar, I. and Tusn´ady, G. (1984). Information geometry and alternating minimization procedures, Statistics & Decisions Supplement Issue 1: 205–237.
[^20]: Hathaway, R. J. (1986). Another interpretation of the EM algorithm for mixture distributions, Statistics & Probability Letters 4: 53–56.
[^21]: Breiman, L. (1996b). Stacked regressions, Machine Learning 24: 51–64.