# 16.4 文献笔记

| 原文   | [The Elements of Statistical Learning](https://web.stanford.edu/~hastie/ElemStatLearn/printings/ESLII_print12.pdf) |
| ---- | ---------------------------------------- |
| 翻译   | szcf-weiya                               |
| 发布 | 2017-06-09 |
|更新|2018-08-18|
|状态|Done|

如在导言中说到的那样，机器学习中的许多新方法都被称为“ensemble”方法．这其中包括 neural networks boosting, bagging 和 随机森林； Dietterich (2000a)[^1] 调查了基于树的**集成 (ensemble)** 方法．神经网络（[第 11 章](../11-Neural-Networks/11.1-Introduction/index.html)）或许更值得这个名字，因为他们同事学习隐藏单元（基函数）的参数，并且考虑怎样结合他们．Bishop (2006)[^2] 在某些细节上讨论了神经网络，以及贝叶斯观点 (MacKay, 1992[^3]; Neal, 1996[^4])．支持向量机（[第 12 章](../12-Support-Vector-Machines-and-Flexible-Discriminants/12.1-Introduction/index.html)）也可以看成是集成方法；它们在高维特征空间中拟合 $L_2$ 正则化模型．Boosting 和 Lasso 通过 $L_1$ 正则化利用稀疏性来解决高维问题，而 SVMs 依赖 $L_2$ 惩罚的“核技巧”的性质．

C5.0 (Quinlan, 2004[^5]) 是一个 committee 树和规则生成包，与 `Rulefit` 有相同的目标．

有大量且不同的文献经常被称作“组合分类器”，它在用于混合不同类型的方法的 ad-hoc 模式中大量存在，能够达到更好的性能．有关原则的方法，参见 Kittler et al. (1998)[^6].

[^1]: Dietterich, T. (2000a). Ensemble methods in machine learning, Lecture Notes in Computer Science 1857: 1–15.
[^2]: Bishop, C. (2006). Pattern Recognition and Machine Learning, Springer, New York.
[^3]: MacKay, D. (1992). A practical Bayesian framework for backpropagation neural networks, Neural Computation 4: 448–472.
[^4]: Neal, R. (1996). Bayesian Learning for Neural Networks, Springer, New York.
[^5]: Quinlan, R. (2004). C5.0, www.rulequest.com
[^6]: Kittler, J., Hatef, M., Duin, R. and Matas, J. (1998). On combining classifiers, IEEE Transaction on Pattern Analysis and Machine Intelligence 20(3): 226–239.