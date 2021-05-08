# 18.8 文献笔记

| 原文   | [The Elements of Statistical Learning](https://web.stanford.edu/~hastie/ElemStatLearn/printings/ESLII_print12.pdf) |
| ---- | ---------------------------------------- |
| 翻译   | szcf-weiya                               |
| 发布 | 2017-06-09 |

许多文献已经在本章的特定地方给出来了；这里我们在列出另外的一些文献．Dudoit et al. (2002a)[^1]给出了对基因表达数据的判别分析方法的概述及比较．Levina (2002)[^2] 做了一些数学分析在$p, N\rightarrow \infty, p>N$的情况下比较对角LDA和全LDA．她证明了在合理的假设下，对角LDA比全LDA有更低的极限误差率．Tibshirani et al. (2001a)[^3]和 Tibshirani et al. (2003)[^4] 提出了最近收缩中心分类器．Zhu and Hastie (2004)[^5]研究了正则化逻辑斯蒂回归．高维回归和lasso是非常活跃的研究领域，许多的文献在3.8.5节给出．Tibshirani et al. (2005)[^6]提出fused lasso，而Zou and Hastie (2005)[^7]提出弹性网．Bair and Tibshirani (2004)[^8]和 Bair et al. (2006)[^9] 中讨论了有监督的主成分．关于censored survival data分析的介绍，参见Kalbfleisch and Prentice (1980)[^10]．

微阵列技术导致了一系列的统计研究：参见Speed (2003)[^11]、Parmigiani et al. (2003)[^12]、Simon et al. (2004)[^13]以及Lee (2004)[^14]等书中的例子．

错误发现率由Benjamini and Hochberg (1995)[^15]提出，并且被这些作者以及其他作者进行研究和推广．FDR部分的文章或许可以在Yoav Benjamini的主页中找到．一些最近的文章包括Efron and Tibshirani (2002)[^16], Storey (2002)[^17], Genovese and Wasserman (2004)[^18], Storey and Tibshirani (2003)[^19] 以及 Benjamini and Yekutieli (2005)[^20]．Dudoit et al. (2002b)[^21]对微阵列研究中的差异表达基因的识别的方法进行了综述．

[^1]: Dudoit, S., Fridlyand, J. and Speed, T. (2002a). Comparison of discrimination methods for the classification of tumors using gene expression data, Journal of the American Statistical Association 97(457): 77–87.
[^2]: Levina, E. (2002). Statistical issues in texture analysis, PhD thesis, Department. of Statistics, University of California, Berkeley.
[^3]: Tibshirani, R., Hastie, T., Narasimhan, B. and Chu, G. (2001a). Diagnosis of multiple cancer types by shrunken centroids of gene expression, Proceedings of the National Academy of Sciences 99: 6567–6572.
[^4]: Tibshirani, R., Hastie, T., Narasimhan, B. and Chu, G. (2003). Class prediction by nearest shrunken centroids, with applications to DNA microarrays, Statistical Science 18(1): 104–117.
[^5]: Zhu, J. and Hastie, T. (2004). Classification of gene microarrays by penalized logistic regression, Biostatistics 5(2): 427–443.
[^6]: Tibshirani, R., Saunders, M., Rosset, S., Zhu, J. and Knight, K. (2005). Sparsity and smoothness via the fused lasso, Journal of the Royal Statistical Society, Series B 67: 91–108.
[^7]: Zou, H. and Hastie, T. (2005). Regularization and variable selection via the elastic net, Journal of the Royal Statistical Society Series B. 67(2): 301–320.
[^8]: Bair, E. and Tibshirani, R. (2004). Semi-supervised methods to predict patient survival from gene expression data, PLOS Biology 2: 511–522.
[^9]: Bair, E., Hastie, T., Paul, D. and Tibshirani, R. (2006). Prediction by supervised principal components, Journal of the American Statistical Association 101: 119–137.
[^10]: Kalbfleisch, J. and Prentice, R. (1980). The Statistical Analysis of Failure Time Data, Wiley, New York.
[^11]: Speed, T. (ed.) (2003). Statistical Analysis of Gene Expression Microarray Data, Chapman and Hall, London.
[^12]: Parmigiani, G., Garett, E. S., Irizarry, R. A. and Zeger, S. L. (eds) (2003). The Analysis of Gene Expression Data, Springer, New York.
[^13]: Simon, R. M., Korn, E. L., McShane, L. M., Radmacher, M. D., Wright, G. and Zhao, Y. (2004). Design and Analysis of DNA Microarray Investigations, Springer, New York.
[^14]: Lee, M.-L. (2004). Analysis of Microarray Gene Expression Data, Kluwer Academic Publishers.
[^15]: Benjamini, Y. and Hochberg, Y. (1995). Controlling the false discovery rate: a practical and powerful approach to multiple testing, Journal of the Royal Statistical Society Series B. 85: 289–300.
[^16]: Efron, B. and Tibshirani, R. (2002). Microarrays, empirical Bayes methods, and false discovery rates, Genetic Epidemiology 1: 70–86.
[^17]: Storey, J. (2002). A direct approach to false discovery rates, Journal of the Royal Statistical Society B. 64(3): 479–498.
[^18]: Genovese, C. and Wasserman, L. (2004). A stochastic process approach to false discovery rates, Annals of Statistics 32(3): 1035–1061.
[^19]: Storey, J. and Tibshirani, R. (2003). Statistical significance for genomewide studies, Proceedings of the National Academy of Sciences 100-: 9440– 9445.
[^20]: Benjamini, Y. and Yekutieli, Y. (2005). False discovery rate controlling confidence intervals for selected parameters, Journal of the American Statistical Association 100: 71–80.
[^21]: Dudoit, S., Yang, Y., Callow, M. and Speed, T. (2002b). Statistical methods for identifying differentially expressed genes in replicated cDNA microarray experiments, Statistica Sinica pp. 111–139.
