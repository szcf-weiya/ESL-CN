# 第一版序言

原文     | [The Elements of Statistical Learning](../book/The Elements of Statistical Learning.pdf)
      ---|---
翻译     | szcf-weiya
 发布 | 2016-09-30 
更新 | 2018-02-14
状态| Done

> We are drowning in information and starving for knowledge.
–Rutherford D. Roger


我们沉浸在信息中并且渴望知识。
—— 卢瑟福 D.罗杰

<!--
> The field of Statistics is constantly challenged by the problems that science and industry brings to its door. In the early days, these problems often came from agricultural and industrial experiments and were relatively small in scope. With the advent of computers and the information age, statistical problems have exploded both in size and complexity. Challenges in the areas of data storage, organization and searching have led to the new field of “data mining”; statistical and computational problems in biology and medicine have created “bioinformatics.” Vast amounts of data are being generated in many fields, and the statistician’s job is to make sense of it all: to extract important patterns and trends, and understand “what the data says.” We call this learning from data.
-->

统计学持续被科学和工业中问题所挑战。早些年，这些问题来自农业和工业实验，而且相对较小。随着计算机和信息的迅速发展，统计学问题在规模和复杂性上爆炸性增长。在数据存储、组织和搜索方面的挑战引入到了一个新的领域——数据挖掘；在生物方面的统计和计算问题形成了“生物信息学”。大量的数据正在各个领域产生，而统计学家们的工作便是搞清楚一切：提取重要特征和趋势，并且明白这些“数据在说什么”。我们称之为从数据中学习。

<!--
> The challenges in learning from data have led to a revolution in the statistical sciences. Since computation plays such a key role, it is not surprising that much of this new development has been done by researchers in other fields such as computer science and engineering.
-->

从数据中学习的挑战促使了统计学的革命。因为计算扮演着关键性的角色，所以很多新的发展是被像计算科学和工程这些领域的研究者完成并不奇怪。

<!--
> The learning problems that we consider can be roughly categorized as either supervised or unsupervised. In supervised learning, the goal is to predict the value of an outcome measure based on a number of input measures; in unsupervised learning, there is no outcome measure, and the goal is to describe the associations and patterns among a set of input measures.
-->

我们考虑的学习的问题可以大致分为两大类：监督和非监督。在监督学习中，目标是根据一系列输入度量来预测输出度量的值。而在非监督学习中，没有输出度量，它的目标是描述一系列输入度量之间的联系。

<!--
> This book is our attempt to bring together many of the important new
ideas in learning, and explain them in a statistical framework. While some mathematical details are needed, we emphasize the methods and their conceptual underpinnings rather than their theoretical properties. As a result, we hope that this book will appeal not just to statisticians but also to researchers and practitioners in a wide variety of fields.
-->

这本书是我们对把在“学习”中许多重要的想法聚集起来用统计学的框架来解释的一种尝试。尽管一些数学细节是必要的，但是我们更多地强调方法以及基础的概念，而不是理论性质。因此，我们希望这本书不仅吸引统计学家，同时能够吸引更多领域的研究者们。

<!--
> Just as we have learned a great deal from researchers outside of the field of statistics, our statistical viewpoint may help others to better understand different aspects of learning:
-->

正如我们从非统计学领域的研究者们那里学到了很多，我们统计学的观点或许帮助其他领域的研究者们更好地理解学习的不同方面。

<!--
> There is no true interpretation of anything; interpretation is a
vehicle in the service of human comprehension. The value of
interpretation is in enabling others to fruitfully think about an
idea.
——Andreas Buja
-->

任何事情没有绝对正确的解释，解释只是帮助人类更好理解的一项工具而已。解释的价值是在于确保他人能够富有成效地思考一个想法。
——Andreas Buja

<!--
> We would like to acknowledge the contribution of many people to the
conception and completion of this book. David Andrews, Leo Breiman, Andreas Buja, John Chambers, Bradley Efron, Geoffrey Hinton, Werner Stuetzle, and John Tukey have greatly influenced our careers. Balasubramanian Narasimhan gave us advice and help on many computational problems, and maintained an excellent computing environment. Shin-Ho Bang helped in the production of a number of the figures. Lee Wilkinson gave valuable tips on color production. Ilana Belitskaya, Eva Cantoni, Maya Gupta, Michael Jordan, Shanti Gopatam, Radford Neal, Jorge Picazo, Bogdan Popescu, Olivier Renaud, Saharon Rosset, John  Storey, Ji Zhu, Mu Zhu, two reviewers and many students read parts of the manuscript and offered helpful suggestions. John Kimmel was supportive, patient and helpful at every phase; MaryAnn Brickner and Frank Ganz headed a superb production team at Springer. Trevor Hastie would like to thank the statistics department at the University of Cape Town for their hospitality during the final stages of this book. We gratefully acknowledge NSF and NIH for their support of this work. Finally, we would like to thank our families and our parents for their love and support.

> Trevor Hastie
Robert Tibshirani
Jerome Friedman
Stanford, California
May 2001
-->
我想为对这本书的概念以及完成做出贡献的人表示感谢。David Andrews, Leo Breiman, Andreas Buja, John Chambers, Bradley Efron, Geoffrey Hinton, Werner Stuetzle, 和 John Tukey 很大程度上影响了我的职业。Balasubramanian Narasimhan 给了我建议以及在很多计算问题上给予帮助，而且维持了一个很好的计算环境。Shin-Ho Bang在一系列图片的绘制上帮了很大的忙。Lee Wilkinson在色彩方面给了很多有价值的建议。Ilana Belitskaya, Eva Cantoni, Maya Gupta, Michael Jordan, Shanti Gopatam, Radford Neal, Jorge Picazo, Bogdan Popescu, Olivier Renaud, Saharon Rosset, John Storey, Ji Zhu, Mu Zhu，两个校订者以及许多学生阅读了部分手稿并且提出很多帮助性的建议。 John Kimmel每时每刻都在支持我，很耐心地帮助我；MaryAnn Brickner 和 Frank Ganz带领了手下一流的团队在出版社完成工作。Trevor Hastie想要感谢开普敦大学的统计学院在书的最后阶段的款待。我们对NSF和NIH的支持非常感谢。最后，我们要感谢我们的家庭和父母的爱与支持。

_Trevor Hastie_

_Robert Tibshirani_

_Jerome Friedman_

_Stanford, California_

_May 2001_


<!--
> The quiet statisticians have changed our world; not by discovering new facts or technical developments, but by changing the ways that we reason, experiment and form our opinions ....
——Ian Hacking
-->

沉默的统计学家已经改变了我们的世界；不是靠着发现新的结果或者技术的发展，而是靠着改变我们思考、实验以及形成观点的方式。
——Ian Hacking
