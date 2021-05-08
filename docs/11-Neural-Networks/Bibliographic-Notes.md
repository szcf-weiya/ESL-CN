# 11.8 文献笔记

| 原文   | [The Elements of Statistical Learning](https://web.stanford.edu/~hastie/ElemStatLearn/printings/ESLII_print12.pdf) |
| ---- | ---------------------------------------- |
| 翻译   | szcf-weiya                               |
| 发布 | 2017-09-06 |

投影寻踪由Friedman and Tukey (1974)[^1]提出，并且由Friedman and Stuetzle (1981)[^2]具体化为回归．Huber (1985)[^3]给出了一个概述，并且Roosen and Hastie (1994)[^4]采用光滑样条提出了一个关系式．神经网络的动机追溯到McCulloch and Pitts (1943)[^5]，Widrow and Hoff (1960)[^6]（在Anderson and Rosenfeld (1988)[^7]中转载）以及Rosenblatt (1962)[^8]．Hebb (1949)[^9]严重受到学习算法发展的影响．神经网络的再起是在1980s中期，归功于Werbos (1974)[^10]，Parker (1985)[^11]和Rumelhart et al. (1986)[^12]，后者提出了向后传播算法．今天这方面有很多书，Hertz et al. (1991)[^13]，Bishop (1995)[^14]以及Ripley (1996)[^15]或许是信息量最大的．神经网络的贝叶斯学习在Neal (1996)[^16]中有描述．ZIP例子取自Le Cun (1989)[^17]，同时参见Le Cun et al. (1990)[^18]以及Le Cun et al. (1998)[^19]．

我们不去讨论神经网络的近似性质等理论问题，这些工作有Barron (1993)[^20], Girosi et al. (1995)[^21] 和 Jones (1992)[^22]．其中一些结果在Ripley (1996)[^15]中进行了总结．

[^1]: Friedman, J. and Tukey, J. (1974). A projection pursuit algorithm for exploratory data analysis, IEEE Transactions on Computers, Series C 23: 881–889.
[^2]: Friedman, J. and Stuetzle, W. (1981). Projection pursuit regression, Journal of the American Statistical Association 76: 817–823.
[^3]: Huber, P. (1985). Projection pursuit, Annals of Statistics 13: 435–475.
[^4]: Roosen, C. and Hastie, T. (1994). Automatic smoothing spline projection pursuit, Journal of Computational and Graphical Statistics 3: 235–248.
[^5]: McCulloch, W. and Pitts, W. (1943). A logical calculus of the ideas imminent in nervous activity, Bulletin of Mathematical Biophysics 5: 115–133. Reprinted in Anderson and Rosenfeld (1988), pp 96-104.
[^6]: Widrow, B. and Hoff, M. (1960). Adaptive switching circuits, IREWESCON Convention record, Vol. 4. pp 96-104; Reprinted in Andersen and Rosenfeld (1988).
[^7]: Anderson, J. and Rosenfeld, E. (eds) (1988). Neurocomputing: Foundations of Research, MIT Press, Cambridge, MA.
[^8]: Rosenblatt, F. (1962). Principles of Neurodynamics: Perceptrons and the Theory of Brain Mechanisms, Spartan, Washington, D.C.
[^9]: Hebb, D. (1949). The Organization of Behavior, Wiley, New York.
[^10]: Werbos, P. (1974). Beyond Regression, PhD thesis, Harvard University.
[^11]: Park, M. Y. and Hastie, T. (2007). l 1 -regularization path algorithm for generalized linear models, Journal of the Royal Statistical Society Series B 69: 659–677.
[^12]: Rumelhart, D., Hinton, G. and Williams, R. (1986). Learning internal representations by error propagation, in D. Rumelhart and J. McClelland (eds), Parallel Distributed Processing: Explorations in the Microstructure of Cognition, The MIT Press, Cambridge, MA., pp. 318–362.
[^13]: Hertz, J., Krogh, A. and Palmer, R. (1991). Introduction to the Theory of Neural Computation, Addison Wesley, Redwood City, CA.
[^14]: Bishop, C. (1995). Neural Networks for Pattern Recognition, Clarendon Press, Oxford.
[^15]: Ripley, B. D. (1996). Pattern Recognition and Neural Networks, Cambridge University Press.
[^16]: Neal, R. (1996). Bayesian Learning for Neural Networks, Springer, New York.
[^17]: Le Cun, Y. (1989). Generalization and network design strategies, Technical Report CRG-TR-89-4, Department of Computer Science, Univ. of Toronto.
[^18]: Le Cun, Y., Boser, B., Denker, J., Henderson, D., Howard, R., Hubbard,W. and Jackel, L. (1990). Handwritten digit recognition with a back-propogation network, in D. Touretzky (ed.), Advances in Neural Information Processing Systems, Vol. 2, Morgan Kaufman, Denver, CO, pp. 386–404.
[^19]: Le Cun, Y., Bottou, L., Bengio, Y. and Haffner, P. (1998). Gradient-based learning applied to document recognition, Proceedings of the IEEE 86(11): 2278–2324.
[^20]: Barron, A. (1993). Universal approximation bounds for superpositions of a sigmoid function, IEEE Transactions on Information Theory 39: 930–945.
[^21]: Girosi, F., Jones, M. and Poggio, T. (1995). Regularization theory and neural network architectures, Neural Computation 7: 219–269.
[^22]: Jones, L. (1992). A simple lemma on greedy approximation in Hilbert space and convergence rates for projection pursuit regression and neural network training, Annals of Statistics 20: 608–613.
