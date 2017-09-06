# Bagging

| 原文   | [The Elements of Statistical Learning](../book/The Elements of Statistical Learning.pdf) |
| ---- | ---------------------------------------- |
| 翻译   | szcf-weiya                               |
| 时间   | 2017-09-05                               |

关于经典的统计推断有很多书：Cox and Hinkley (1974)[^1] 和Silvey (1975)[^2]给出了通俗的解释。自助法归功于Efron (1979)[^3]，并且在Efron and Tibshirani (1993)[^4] 和 Hall (1992)[^5]中作了完整的描述。贝叶斯推断的一本很好的现代书是Gelman et al. (1995)[^6]。清晰描述贝叶斯方法在神经网络的应用由Neal (1996)给出。Gibbs采样的统计应用归功于Geman and Geman (1984)[^7]，以及Gelfand and Smith (1990)[^8]，还有Tanner and Wong (1987)[^9]相关的工作。马尔科夫蒙特卡洛方法，包括吉布斯采样以及MH算法，在Spiegelhalter et al. (1996)[^10]有讨论。EM算法归功于Dempster et al. (1977)[^11]；虽然之前有很多相关的工作，但因为这篇文章的讨论者将其清晰地描述出来。EM看成完整数据对数似然惩罚的联合最大化由Neal and Hinton (1998)[^12]给出；他们将其归功于Csiszar and Tusnády (1984) 和Hathaway (1986)，因为这两篇文章已经注意到了这个联系。Bagging由Breiman (1996a)[^13]提出。Stacking归功于Wolpert (1992)[^14]； Breiman (1996b)包含统计学家们的讨论。Leblanc and Tibshirani (1996)[^15]描述了基于自助法的stacking的波动。在贝叶斯网络中平均模型最近由Madigan and Raftery (1994)[^16]提出。Bumping由Tibshirani and Knight (1999)[^17] 提出。

[^1]: Cox, D. and Hinkley, D. (1974). Theoretical Statistics, Chapman and Hall, London.
[^2]: Silvey, S. (1975). Statistical Inference, Chapman and Hall, London.
