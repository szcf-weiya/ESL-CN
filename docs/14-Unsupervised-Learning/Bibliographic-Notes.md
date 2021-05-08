# 14.11 文献笔记

| 原文   | [The Elements of Statistical Learning](https://web.stanford.edu/~hastie/ElemStatLearn/printings/ESLII_print12.pdf) |
| ---- | ---------------------------------------- |
| 翻译   | szcf-weiya                               |
| 发布 | 2017-09-04 |
|状态|Done|

1. 关于聚类的有很多书，包括Hartigan (1975)[^1]， Gordon (1999)[^2] 和 Kaufman and Rousseeuw (1990)[^3]．
2. $K$均值聚类至少可以追溯至Lloyd (1957)[^4], Forgy (1965)[^5], Jancey (1966)[^6] 和 MacQueen (1967)[^7]．
3. 在工程上的应用，特别是利用向量量化的图象压缩，可以在Gersho and Gray (1992)[^8]中找到．
4. $k$中心过程在Kaufman and Rousseeuw (1990)[^3]中有讨论．
5. 关联规则在Agrawal et al. (1995)[^9]有总结．
6. 自组织图由Kohonen (1989)[^10] 和 Kohonen (1990)[^11]提出，Kohonen et al. (2000)[^12]给出更新的结果．
7. 主成分分析和多维缩放在多元分析的标准课本中有讨论，如Mardia et al. (1979)[^13]．
8. Buja et al. (2008)[^14]实现了一个强大的用于多维缩放的称为Ggvis的环境，并且用户手册包含该主题的清晰描述．图14.17,14.21(左)以及14.28(左)是用Xgobi产生的，这事由这些作者写的多维数据可视化的包．GGobi是更新的实现(Cook and Swayne, 2007[^15])．
9. Goodall (1991)给出了统计上Procrustes方法的概述，并且Ramsay and Silverman
(1997)[^16]讨论了shape registration问题．
10. 主曲线和主表面由Hastie (1984)[^17] 和 Hastie and Stuetzle (1989)[^18]提出．
11. 主点的想法由Flury (1990)[^19]完成，Tarpey and Flury (1996)[^20]给出了自洽的一般概念．
12. 关于谱聚类的一个超级棒的教程可以在von Luxburg (2007)[^21]中找到；这也是14.5.3节的主要来源．
13. Luxborg归功于Donath and Hoffman(1973)[^22]，以及Fiedler (1973)[^23]在该主题上更早的工作．
14. 独立分量分析由Comon (1994)[^24]提出，Bell and Sejnowski (1995)[^25]继续后面的发展；14.7节是基于Hyvärinen and Oja (2000)[^26]．
15. 投影寻踪由Friedman and Tukey (1974)[^27]提出，并在Huber (1985)[^28]有详细讨论．动态投影寻踪算法在GGobi中有实现．

[^1]: Hartigan, J. A. (1975). Clustering Algorithms, Wiley, New York.
[^2]: Gordon, A. (1999). Classification (2nd edition), Chapman and Hall/CRC Press, London.
[^3]: Kaufman, L. and Rousseeuw, P. (1990). Finding Groups in Data: An Introduction to Cluster Analysis, Wiley, New York.
[^4]: Lloyd, S. (1957). Least squares quantization in PCM., Technical report, Bell Laboratories. Published in 1982 in IEEE Transactions on Information Theory 28 128-137.
[^5]: Forgy, E. (1965). Cluster analysis of multivariate data: efficiency vs. interpretability of classifications, Biometrics 21: 768–769.
[^6]: Jancey, R. (1966). Multidimensional group analysis, Australian Journal of Botany 14: 127–130.
[^7]: MacQueen, J. (1967). Some methods for classification and analysis of multivariate observations, Proceedings of the Fifth Berkeley Symposium on Mathematical Statistics and Probability, eds. L.M. LeCam and J. Neyman, University of California Press, pp. 281–297.
[^8]: Gersho, A. and Gray, R. (1992). Vector Quantization and Signal Compression, Kluwer Academic Publishers, Boston, MA.
[^9]: Agrawal, R., Mannila, H., Srikant, R., Toivonen, H. and Verkamo, A. I. (1995). Fast discovery of association rules, Advances in Knowledge Discovery and Data Mining, AAAI/MIT Press, Cambridge, MA.
[^10]: Kohonen, T. (1989). Self-Organization and Associative Memory (3rd edition), Springer, Berlin.
[^11]: Kohonen, T. (1990). The self-organizing map, Proceedings of the IEEE 78: 1464–1479.
[^12]: Kohonen, T., Kaski, S., Lagus, K., Salojärvi, J., Paatero, A. and Saarela, A. (2000). Self-organization of a massive document collection, IEEE Transactions on Neural Networks 11(3): 574–585. Special Issue on Neural Networks for Data Mining and Knowledge Discovery.
[^13]: Mardia, K., Kent, J. and Bibby, J. (1979). Multivariate Analysis, Academic Press.
[^14]: Buja, A., Swayne, D., Littman, M., Hofmann, H. and Chen, L. (2008). Data vizualization with multidimensional scaling, Journal of Computational and Graphical Statistics. to appear.
[^15]: Cook, D. and Swayne, D. (2007). Interactive and Dynamic Graphics for Data Analysis; with R and GGobi, Springer, New York. With contributions from A. Buja, D. Temple Lang, H. Hofmann, H. Wickham and M. Lawrence.
[^16]: Ramsay, J. and Silverman, B. (1997). Functional Data Analysis, Springer, New York.
[^17]: Hastie, T. (1984). Principal Curves and Surfaces, PhD thesis, Stanford University.
[^18]: Hastie, T. and Stuetzle, W. (1989). Principal curves, Journal of the American Statistical Association 84(406): 502–516.
[^19]: Flury, B. (1990). Principal points, Biometrika 77: 33–41.
[^20]: Tarpey, T. and Flury, B. (1996). Self-consistency: A fundamental concept in statistics, Statistical Science 11: 229–243.
[^21]: von Luxburg, U. (2007). A tutorial on spectral clustering, Statistics and Computing 17(4): 395–416.
[^22]: Donath, W. E. and Hoffman, A. J. (1973). Lower bounds for the partitioning of graphs, IBM Journal of Research and Development pp. 420–425.
[^23]: Fiedler, M. (1973). Algebraic connectivity of graphs, Czechoslovak Mathematics Journal 23(98): 298–305.
[^24]: Comon, P. (1994). Independent component analysis—a new concept?, Signal Processing 36: 287–314.
[^25]: Bell, A. and Sejnowski, T. (1995). An information-maximization approach to blind separation and blind deconvolution, Neural Computation 7: 1129–1159.
[^26]: Hyvärinen, A. and Oja, E. (2000). Independent component analysis: algorithms and applications, Neural Networks 13: 411–430.
[^27]: Friedman, J. and Tukey, J. (1974). A projection pursuit algorithm for exploratory data analysis, IEEE Transactions on Computers, Series C 23: 881–889.
[^28]: Huber, P. (1985). Projection pursuit, Annals of Statistics 13: 435–475.
