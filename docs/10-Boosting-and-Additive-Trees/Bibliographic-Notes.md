# 10.15 文献笔记

| 原文   | [The Elements of Statistical Learning](https://web.stanford.edu/~hastie/ElemStatLearn/printings/ESLII_print12.pdf) |
| ---- | ---------------------------------------- |
| 翻译   | szcf-weiya                               |
| 发布 | 2017-09-05 |

Schapire (1990)[^1]在PAC学习框架（Valiant, 1984[^2]; Kearns and Vazirani, 1994[^3]）发展了第一个简单的boosting过程．Schapire证明了弱学习器(weak learner)总是可以通过在输入数据流的过滤版本训练两个额外的分类器来提高效果．弱学习器是是产生两类别分类器的算法，该分类器保证了效果回避抛硬币猜测要显著地好．当在前$N$个训练点上学习出初始的分类器$G_1$，

- $G_2$在$N$个点的新样本中学习，其中有一半是被$G_1$误分类的；
- $G_3$在$G_1$和$G_2$都误分类的样本点上学习；
- boosted分类器则为$G_B=majority\; vote(G_1,G_2,G_3)$.

Schapire的“Strength of Weak Learnability”定理证明了$G_B$提高了$G_1$的效果．

Freund (1995)[^4]提出了“boost by majority”的变体，它同时结合了许多弱分类器并且提高了Schapire简单的boosting算法的效果．<!--这个定理对要求弱分类器以固定误差率产生的分类器的算法都支持．-->这个定理假设弱分类器以固定误差率产生分类器．这导出了更自适应且更实际的AdaBoost（Freund and Schapire, 1996a[^5]）以及其衍生算法，在AdaBoost及其衍生算法中去掉了那条假设．Freund and Schapire (1996a)[^6]和Schapire and Singer (1999)[^7]提供了一些理论来支持他们的算法，其中是以泛化误差上界的形式．这个理论在计算机学习邻域进化了，起初基于PAC学习的概念．其它一些理论试图从博弈论解释boosting（Freund and Schapire, 1996b[^6]; Breiman, 1999[^9]; Breiman, 1998[^10]），以及从VC理论来解释（Schapire et al., 1998[^11]）．与AdaBoost算法有关的理论和界都很有趣，但是往往界太松了，实际的重要性不是很大．实际上，boosting达到了比这些界更深刻的结果．Schapire (2002)[^12]和Meir and Rätsch (2003)[^13]给出了比本书第一版更新的结果的概述．

Friedman et al. (2000)[^16]和Friedman (2001)[^15]是本章的基础．Friedman et al. (2000)[^16]在统计上分析了AdaBoost，导出了指数准则，并且证明了它估计了类别概率的对数几率．他们提出了可加树模型，right-sized树以及10.11节的ANOVA表示，以及多类别logit的公司．Friedman (2001)[^17]发展了梯度boosting，以及分类和回归的收缩，而Friedman (1999)[^18]探索了boosting的随机变体．Mason et al. (2000)[^19]也包括boosting的梯度形式．正如Friedman et al. (2000)[^20]中发表的讨论中显示，关于boosting怎样以及为什么有效存在争议．

因为在本书的第一版发表时，辩论仍然在进行，并且扩散到了统计邻域，有一系列的论文讨论boosting的一致性（Jiang, 2004[^21]; Lugosi and Vayatis, 2004[^22]; Zhang and Yu, 2005[^23]; Bartlett and Traskin, 2007[^24]）．Mease and Wyner (2008)[^25]通过一系列的仿真例子来质疑作者们关于boosting的解释；作者们的回应(Friedman et al., 2008a[^26])解决了大部分的反对意见．最近Bühlmann and Hothorn (2007)[^27]的概述支持作者们boosting的方法．

[^1]: Schapire, R. (1990). The strength of weak learnability, Machine Learning 5(2): 197–227.
[^2]: Valiant, L. G. (1984). A theory of the learnable, Communications of the ACM 27: 1134–1142.
[^3]: Kearns, M. and Vazirani, U. (1994). An Introduction to Computational Learning Theory, MIT Press, Cambridge, MA.
[^4]: Freund, Y. (1995). Boosting a weak learning algorithm by majority, Information and Computation 121(2): 256–285.
[^5]: Freund, Y. and Schapire, R. (1996a). Experiments with a new boosting algorithm, Machine Learning: Proceedings of the Thirteenth International Conference, Morgan Kauffman, San Francisco, pp. 148–156.
[^6]: Freund, Y. and Schapire, R. (1996b). Game theory, on-line prediction and boosting, Proceedings of the Ninth Annual Conference on Computational Learning Theory, Desenzano del Garda, Italy, pp. 325–332.
[^7]: Schapire, R. and Singer, Y. (1999). Improved boosting algorithms using confidence-rated predictions, Machine Learning 37(3): 297–336.
[^9]: Breiman, L. (1999). Prediction games and arcing algorithms, Neural Computation 11(7): 1493–1517.
[^10]: Breiman, L. (1998). Arcing classifiers (with discussion), Annals of Statistics 26: 801–849.
[^11]: Schapire, R., Freund, Y., Bartlett, P. and Lee, W. (1998). Boosting the margin: a new explanation for the effectiveness of voting methods, Annals of Statistics 26(5): 1651–1686.
[^12]: Schapire, R. (2002). The boosting approach to machine learning: an overview, in D. Denison, M. Hansen, C. Holmes, B. Mallick and B. Yu (eds), MSRI workshop on Nonlinear Estimation and Classification, Springer, New York.
[^13]: Meir, R. and Rätsch, G. (2003). An introduction to boosting and leveraging, in S. Mendelson and A. Smola (eds), Lecture notes in Computer Science, Advanced Lectures in Machine Learning, Springer, New York.
[^15]: Friedman, J. (2001). Greedy function approximation: A gradient boosting machine, Annals of Statistics 29(5): 1189–1232.
[^16]: Friedman, J., Hastie, T. and Tibshirani, R. (2000). Additive logistic regression: a statistical view of boosting (with discussion), Annals of Statistics 28: 337–307.
[^17]: Friedman, J. (2001). Greedy function approximation: A gradient boosting machine, Annals of Statistics 29(5): 1189–1232.
[^18]: Friedman, J. (1999). Stochastic gradient boosting, Technical report, Stanford University.
[^19]: Mason, L., Baxter, J., Bartlett, P. and Frean, M. (2000). Boosting algorithms as gradient descent, 12: 512–518.
[^20]: Friedman, J., Hastie, T. and Tibshirani, R. (2000). Additive logistic regression: a statistical view of boosting (with discussion), Annals of Statistics 28: 337–307.
[^21]: Jiang, W. (2004). Process consistency for Adaboost, Annals of Statistics 32(1): 13–29.
[^22]: Lugosi, G. and Vayatis, N. (2004). On the bayes-risk consistency of regularized boosting methods, Annals of Statistics 32(1): 30–55.
[^23]: Zhang, T. and Yu, B. (2005). Boosting with early stopping: convergence and consistency, Annals of Statistics 33: 1538–1579.
[^24]: Bartlett, P. and Traskin, M. (2007). Adaboost is consistent, in
B. Schölkopf, J. Platt and T. Hoffman (eds), Advances in Neural Infor-
mation Processing Systems 19, MIT Press, Cambridge, MA, pp. 105–
112.
[^25]: Mease, D. and Wyner, A. (2008). Evidence contrary to the statistical view of boosting (with discussion), Journal of Machine Learning Research 9: 131–156.
[^26]: Friedman, J., Hastie, T. and Tibshirani, R. (2008a). Response to “Mease and Wyner: Evidence contrary to the statistical view of boosting”, Journal of Machine Learning Research 9: 175–180.
[^27]: Bühlmann, P. and Hothorn, T. (2007). Boosting algorithms: regularization, prediction and model fitting (with discussion), Statistical Science 22(4): 477–505.
