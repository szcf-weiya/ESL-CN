# 15.5 文献笔记

| 原文   | [The Elements of Statistical Learning](https://web.stanford.edu/~hastie/ElemStatLearn/printings/ESLII_print12.pdf) |
| ---- | ---------------------------------------- |
| 翻译   | szcf-weiya                               |
| 发布 | 2017-09-04 |

这里讨论的随机森林是Breiman(2001)[^1]提出来的，经很多想法很早一前就以不同的形式出现了．值得一提的是，Ho(1995)[^2]提出“random forest”的概念，并且用了在随机的特征子空间中增长树．采用随机排列和平均来避免过拟合是由Kleinberg (1990)[^3]提出来的，最后出现在Kleinberg (1996)[^4]中．Amit and Geman (1997)[^5]采用在图象特征中增长随机树来处理图象分类问题．Breiman (1996a)[^6]引出了bagging，这是他的随机森林的先驱．Dietterich (2000b)[^7]也提出采用额外的随机化来提高bagging的性能．他的方法是在每个结点出对前20个候选分离排序，接着随机从中选择．他通过仿真和实际例子展示了额外的随机化能够提高bagging的性能．Friedman and Hall (2007)[^8]证明了子采样（不放回）是bagging的一个有效的替代方案．他们证明在大小为$N/2$的样本上生长和平均树是近似等于bagging（考虑偏差及方差），而采用更少的样本则会降低更大的方差（通过去相关处理）．

有许多免费的软件实现随机森林．这章中，书中采用R中的randomForest包，由Andy Liaw维护，可以在`CRAN`网站上得到．这同时允许分割变量选择，以及子采样．Adele Cutler维护一个随机森林的网站`http://www.math.usu.edu/∼adele/forests/`，其中由Leo Breiman和Adele Cutler编写的软件是免费的．他们的代码，以及名字“random forests”，是专门授权Salford Systems进行商业发行的．新西兰的Waikato大学的`Weka`机器学习文件`http://www.cs.waikato.ac.nz/ml/weka/`提供了随机森林JAVA实现的免费版本．

[^1]: Breiman, L. (2001). Random forests, Machine Learning 45: 5–32.
[^2]: Ho, T. K. (1995). Random decision forests, in M. Kavavaugh and P. Storms (eds), Proc. Third International Conference on Document Analysis and Recognition, Vol. 1, IEEE Computer Society Press, New York, pp. 278–282.
[^3]: Kleinberg, E. M. (1990). Stochastic discrimination, Annals of Mathematical Artificial Intelligence 1: 207–239.
[^4]: Kleinberg, E. M. (1996). An overtraining-resistant stochastic modeling method for pattern recognition, Annals of Statistics 24: 2319–2349.
[^5]: Amit, Y. and Geman, D. (1997). Shape quantization and recognition with randomized trees, Neural Computation 9: 1545–1588.
[^6]: Breiman, L. (1996a). Bagging predictors, Machine Learning 26: 123–140.
[^7]: Dietterich, T. (2000b). An experimental comparison of three methods for constructing ensembles of decision trees: bagging, boosting, and randomization, Machine Learning 40(2): 139–157.
[^8]: Friedman, J. and Hall, P. (2007). On bagging and nonlinear estimation, Journal of Statistical Planning and Inference 137: 669–683.
