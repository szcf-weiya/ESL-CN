---
layout:            post
title:             "Chapter 2 Overview of Supervised Learning"
date:              2016-08-01 10:00:00 +0300
tags:              Statistical Learning
categories:        Translation
author:            weiya
---

> # 2. Overview of Supervised Learning

# 2. 监督学习概要

[TOC]

> ## 2.1 Introduction

## 2.1 导言

> The first three examples described in Chapter 1 have several components in common. For each there is a set of variables that might be denoted as *inputs*, which are measured or preset. These have some influence on one or more *outputs*. For each example the goal is to use the inputs to predict the values of the outputs. This exercise is called *supervised learning*.

第一章中描述的三个例子有一些共同的组成部分．每个例子中都有一些变量，这些变量可以记作输入（*inputs*），可以是测量得到或者预设．这些变量对一个或多个输出（*outputs*）有影响．每个例子的目标便是利用输入去预测输出的值．这样的过程称之为监督学习（*supervised learning*）．

> We have used the more modern language of machine learning. In the statistical literature the inputs are often called the *predictors*, a term we will use interchangeably with inputs, and more classically the *independent variables*. In the pattern recognition literature the term *features* is preferred, which we use as well. The outputs are called the *responses*, or classically the *dependent variables*.

我们已经使用了更现代的机器学习的语言．在统计学中，输入变量（*inputs*）通常称作预测变量（*predictors*），是一个与输入变量等价的说法，更经典的说法是独立变量（*independent variables*）．在模式识别中，更倾向于采用特征（*features*）的说法，我们也会采用这一说法．输出变量（*outputs*）被称作响应变量（*responses*），或者更经典的说法是因变量（*dependent variables*）．

> ## 2.2 Variable Types and Terminology

## 2.2 变量类型和术语

> The outputs vary in nature among the examples. In the glucose prediction example, the output is a *quantitative* measurement, where some measurements are bigger than others, and measurements close in value are close in nature. In the famous Iris discrimination example due to R. A. Fisher, the output is *qualitative* (species of Iris) and assumes values in a finite set ${\cal{G}} = \\{\text{Virginica, Setosa and Versicolor}\\}$. In the handwritten digit example the output is one of 10 different digit classes: ${\cal{G}} = \\{0,1,... ,9\\}$. In both of these there is no explicit ordering in the classes, and in fact often descriptive labels rather than numbers are used to denote the classes. Qualitative variables are also referred to as *categorical* or *discrete* variables as well as *factors*.

这些例子中的输出变量本质都不相同．在预测葡萄糖的例子中，输出变量是定量（*quantitative*）的测量结果，有些测量结果大于其他的，而且测量结果在数值上相近也意味着结果本质上相近．著名的R.A.Fisher分辨鸢尾花种类例子中，输出变量是定性的(*qualitative*)（鸢尾花的种类）而且假设取值为有限集合 ${\cal G}=\\{Virginica,Setosa,Versicolor\\}$ ．在手写数字的例子中，输出变量的取值是10个不同数字之一：${\cal G}=\\{0,1,...,9\\}$ ．在这些例子中分类没有明显的顺序，而且事实上经常用描述性标签而不是数字来代替这些分类．定性变量也被称为类别型（*categories*）或者离散（*discrete*）型变量，也被称作因子（*factors*）．

> For both types of outputs it makes sense to think of using the inputs to predict the output. Given some specific atmospheric measurements today and yesterday, we want to predict the ozone level tomorrow. Given the grayscale values for the pixels of the digitized image of the handwritten digit, we want to predict its class label.

对于两种类型的输出变量，考虑使用输入变量去预测输出变量是有意义的．给定今天和昨天特定的大气测量结果，我们想要预测明天的臭氧层．给定手写数字的数字化图片中像素的灰度值，我们想要预测该图片是属于哪一个类．

> This distinction in output type has led to a naming convention for the prediction tasks: *regression* when we predict quantitative outputs, and *classification* when we predict qualitative outputs. We will see that these two tasks have a lot in common, and in particular both can be viewed as a task in function approximation.

输出类型的差别导致对预测的命名规定：当我们预测定量的输出时被称为回归（*regression*），当我们预测定性的输出时被称为分类（*classification*）．我们将会看到这两个任务有很多的共同点，特别地，两者都可以看成是函数逼近．

> Inputs also vary in measurement type; we can have some of each of qualitative and quantitative input variables. These have also led to distinctions in the types of methods that are used for prediction: some methods are defined most naturally for quantitative inputs, some most naturally for qualitative and some for both.

输入变量也有各种各样的测量类型；我们可以有定性的输入变量和定量的输入变量两者中的一些变量．这些也导致了预测中方法类型的不同：一些方法更自然地定义为定量的输入变量，一些方法更自然地定义为定性的输入变量，还有一些是两者都可以的．

> A third variable type is *ordered categorical*, such as *small*, *medium* and *large*, where there is an ordering between the values, but no metric notion is appropriate (the difference between medium and small need not be the same as that between large and medium). These are discussed further in Chapter 4.

第三种变量类型是有序分类（*ordered categorical*），如小（*small*）、中（*medium*）和大（*large*），在这些值之间存在顺序，但是没有合适的度量的概念（中与小之间的差异不必和大于中间的差异相等）．这将在第四章中讨论．

> Qualitative variables are typically represented numerically by codes. The easiest case is when there are only two classes or categories, such as “success” or “failure,” “survived” or “died.” These are often represented by a single binary digit or bit as 0 or 1, or else by −1 and 1. For reasons that will become apparent, such numeric codes are sometimes referred to as *targets*.When there are more than two categories, several alternatives are available. The most useful and commonly used coding is via *dummy variables*. Here a $K$-level qualitative variable is represented by a vector of $K$ binary variables or bits, only one of which is “on” at a time. Although more compact coding schemes are possible, dummy variables are symmetric in the levels of the factor.

定性的变量常用数字编码来表示．最简单的情形是只有两个分类，比如说“成功”与“失败”，“生存”与“死亡”．这些经常用一位二进制数来表示，比如0或1，或者用-1和1来表示．因为一些显然的原因，这些数字编码有时被称作指标（*targets*）．当存在超过两个的类别，一些其他的选择是可行的．最有用并且最普遍使用的编码是虚拟变量（*dummy variables*）．这里有$K$个水平的定性变量被一个$K$位的二进制变量表示，每次只有一个在开启状态．尽管更简洁的编码模式也是可能的，虚拟变量在因子的层次中是对称的．

> We will typically denote an input variable by the symbol $X$. If $X$ is a vector, its components can be accessed by subscripts $X_j$. Quantitative outputs will be denoted by $Y$ , and qualitative outputs by $G$ (for group). We use uppercase letters such as  $X$,$Y$ or $G$ when referring to the generic aspects of a variable. Observed values are written in lowercase; hence the $i$-th observed value of $X$ is written as $x_i$ (where $x_i$ is again a scalar or vector). Matrices are represented by bold uppercase letters; for example, a set of $N$ input $p$-vectors $x_i,i=1,...,N$ would be represented by the $N\times p$ matrix $\mathbf{X}$ In general, vectors will not be bold, except when they have $N$ components; this convention distinguishes a $p$-vector of inputs $x_i$ for the $i$-th observation from the $N$-vector $\mathbf{x}_j$ consisting of all the observations on variable $X_j$. Since all vectors are assumed to be column vectors, the $i$-th row of $\mathbf{X}$ is $x_i^T$ , the vector transpose of $x_i$.

我们将经常把输入变量用符号 $X$ 来表示．如果$X$是一个向量，则它的组成部分可以用下标$X_j$来取出．定量的输出变量用$Y$来表示，对于定性的输出变量采用$G$来表示(group的意思)．当指一般的变量，我们使用大写字母$X,Y,G$来表示，对于观测值我们用小写字母来表示；因此$X$的第$i$个观测值记作 $x_i$ （其中，$x_i$要么是标量要么是向量）矩阵经常用粗体的大写字母来表示；举个例子，$N$个$p$维输入向量$x_i,i=1,\cdots,N$可以表示成$N\times p$的矩阵 $\mathbf{X}$ ．一般地，向量不是粗体，除非它们有 $N$ 个组成成分；这个约定区分了包含变量$X_j$的所有观测值的$N$维向量 $\mathbf{x}_j$ 和第 $i$ 个观测值的 $p$ 维向量 $x_i$ ．因为所有的向量都假定为列向量， $\mathbf{X}$ 的第 $i$ 行是 $x_i$ 的转置 $x_i^T$ ．

> For the moment we can loosely state the learning task as follows: given the value of an input vector $X$, make a good prediction of the output $Y$, denoted by $\hat{Y}$ (pronounced “y-hat”). If $Y$ takes values in $\mathbf{R}$ then so should $\hat{Y}$; likewise for categorical outputs, $\hat{G}$ should take values in the same set $\cal{G}$ associated with $G$.

现在我们可以不严谨地把学习叙述成如下：给定输入向量$X$，对输出$Y$做出一个很好的估计，记为 $\hat{Y}$ ．如果$Y$取值为$\mathbf{R}$，则 $\hat{Y}$ 取值也是 $\mathbf{R}$ ；同样地，对于类别型输出，$\hat{G}$ 取值为对应 $G$ 取值的集合 $\cal{G}$．

> For a two-class $G$, one approach is to denote the binary coded target as $Y$ , and then treat it as a quantitative output. The predictions $\hat{Y}$ will typically lie in $[0,1]$, and we can assign to $\hat{G}$ the class label according to whether $\hat{y} > 0.5$. This approach generalizes to $K$-level qualitative outputs as well.

对于只有两种类别的$G$，一种方式是把二进制编码记为$Y$，然后把它看成是定量的输出变量．预测值 $\hat{Y}$ 一般落在 $[0,1]$ 之间，而且我们可以根据 $\hat{y} > 0.5$ 来赋值给 $\hat{G}$ ．这种方式可以一般化为有 $K$ 个水平的定性的输出变量．

> We need data to construct prediction rules, often a lot of it. We thus suppose we have available a set of measurements $(x_i,y_i)$ or $(x_i,g_i)$, $i = 1, . . . , N$, known as the *training data*, with which to construct our prediction rule.

我们需要数据去构建预测规则，经常是大部分的数据．因此我们假设有一系列可用的测量值 $(x_i,y_i)$ 或 $(x_i,g_i),i=1,\cdots,N$ ，这也称之为训练数据(*training data*)，将利用这些训练数据去构建我们的预测规则．

> ## 2.3 Two Simple Approaches to Prediction: Least Squares and Nearest Neighbors

## 2.3 两种简单的预测方式：最小二乘和最近邻

> In this section we develop two simple but powerful prediction methods: the linear model fit by least squares and the $k$-nearest-neighbor prediction rule. The linear model makes huge assumptions about structure and yields stable but possibly inaccurate predictions. The method of $k$-nearest neighbors makes very mild structural assumptions: its predictions are often accurate but can be unstable.

在这一部分中我们讨论两种简单但很有力的预测方法：最小二乘法的线性模型拟合和k-最近邻预测规则．线性模型对结构做出很大的假设而且得出稳定但可能不正确的预测．$k$-最近邻方法对结构的假设很温和：它的预测通常是准确的但不稳定．

> ### 2.3.1 Linear Models and Least Squares

### 2.3.1 线性模型和最小二乘

> The linear model has been a mainstay of statistics for the past 30 years and remains one of our most important tools. Given a vector of inputs $X^T = (X_1,X_2, \ldots , X_p)$, we predict the output $Y$ via the model

线性模型已经成为过去30年统计学的支柱，而且仍然是我们最重要的工具．给定输入向量$X^T=(X_1,X_2,\cdots,X_p)$，我们通过模型

$$
\begin{equation}
\hat{Y} = \hat{\beta}_0+\sum\limits_{j=1}^{p}X_j\hat{\beta}_j
\label{2.1}
\end{equation}
$$


来预测输出$Y$

> The term $\hat{\beta}_0​$ is the intercept, also known as the *bias* in machine learning. Often it is convenient to include the constant variable 1 in $X​$, include $\hat{\beta}_0​$ in the vector of coefficients $\hat{\beta}​$, and then write the linear model in vector form as an inner product

$\hat{\beta}_0$是截距，也是机器学习中的偏差(*bias*)．经常为了方便起见把常数变量1放进$X$，把$\hat{\beta}_0$放进系数变量$\hat{\beta}$中，然后把用向量内积形式写出线性模型

$$
\hat{Y} = X^T\hat{\beta}
$$

> where $X^T$ denotes vector or matrix transpose ($X$ being a column vector). Here we are modeling a single output, so $\hat{Y}$ is a scalar; in general $\hat{Y}$ can be a $K$–vector, in which case $\beta$ would be a $p\times K$ matrix of coefficients. In the $(p + 1)$-dimensional input–output space, $(X,\hat{Y})$ represents a hyperplane. If the constant is included in $X$, then the hyperplane includes the origin and is a subspace; if not, it is an affine set cutting the $Y$ -axis at the point $(0,\hat{\beta}_0)$. From now on we assume that the intercept is included in $\beta$.

其中$X^T$为向量或者矩阵的转置（$X$为列向量）．这里我们对单个输出的建立模型，所以$\hat{Y}$为标量；一般地，$\hat{Y}$可以是一个$K$维向量，这种情形下，$\beta$ 是一个$p\times K$的稀疏矩阵．在$(p+1)$维输入输出空间中，$(X,\hat{Y})$表示一个超平面．如果常数项包含在$X$中，则超平面过原点，而且是一个子空间；如果不是，则是一个过点$(0,\hat{\beta}_0)$切$Y$轴的仿射集．从现在起，我们假设截距项包含在$\hat{\beta}$中．

> Viewed as a function over the p-dimensional input space, $f(X) = X^T\beta$ is linear, and the gradient $f'(X) = \beta$ is a vector in input space that points in the steepest uphill direction.

在$p$维输入空间从函数观点来看，$f(X)=X^T\beta$是线性的，其梯度$f'(X)=\beta$是输入空间里的最速上升方向的向量．

> How do we fit the linear model to a set of training data? There are many different methods, but by far the most popular is the method of least squares. In this approach, we pick the coefficients $\beta$ to minimize the residual sum of squares

根据训练数据我们怎样拟合线性模型？有许多不同的方法，但目前为止最受欢迎的是最小二乘法．在这个方法里面，我们选取系数$\beta$使得残差平方和最小．

$$
RSS(\beta)=\sum\limits_{i=1}^N(y_i-x_i^T\beta)^2
$$

> $RSS(\beta)$ is a quadratic function of the parameters, and hence its minimum always exists, but may not be unique. The solution is easiest to characterize in matrix notation. We can write

$RSS(\beta)$是系数的二次函数，因此其最小值总是存在，但是可能不唯一．矩阵表示的解决方案的特色是最简单的．我们可以写成

$$
RSS(\beta) = (y-\mathbf{X}\beta)^T(y-\mathbf{X}\beta)
$$

> where $\mathbf{X}$ is an $N \times p$ matrix with each row an input vector, and $\bf{y}$ is an $N$-vector of the outputs in the training set. Diﬀerentiating w.r.t. $β$ we get the normal equations

其中，$\mathbf{X}$是$N\times p$矩阵，每一行是一个输入向量，$\mathbf{y}$是训练集里面的$N$为输出向量．对$\beta$微分我们有标准等式

$$
\mathbf{X}^T(\mathbf{y}-\mathbf{X}\beta)=0
$$

> If $\mathbf{X}^T\mathbf{X}$ is nonsingular, then the unique solution is given by

如果$\mathbf{X}^T\mathbf{X}$非奇异，则唯一解为

$$
\hat{\beta}=(\mathbf{X}^T\mathbf{X})^{-1}\mathbf{X}^T\mathbf{y}
$$

> and the ﬁtted value at the $i$th input $x_i$ is $\hat{y}_i$ = \hat{y}(x_i) = x_i^T\hat{\beta}$. At an arbitrary input $x_0$ the prediction is $\hat{y}(x_0) = x_0^T\hat{\beta}$. The entire ﬁtted surface is characterized by the $p$ parameters $\hat{\beta}$. Intuitively, it seems that we do not
> need a very large data set to ﬁt such a model.

而且在第$i$个输入$x_i$的拟合值为$\hat{y}_i=\hat{y}(x_i)=x_i^T\hat{\beta}$．在任意输入$x_0$处，预测值为$\hat{y}(x_0)=x_0^T\hat{\beta}$．整个拟合曲面由$\hat{\beta}$的$p$个系数所决定．直观地，我们不需要非常多的数据集去拟合这样一个模型．

> Let’s look at an example of the linear model in a classification context. Figure 2.1 shows a scatterplot of training data on a pair of inputs $X_1$ and $X_2$. The data are simulated, and for the present the simulation model is not important. The output class variable $G$ has the values **BLUE** or **ORANGE**, and is represented as such in the scatterplot. There are 100 points in each of the two classes. The linear regression model was fit to these data, with the response $Y$ coded as 0 for **BLUE** and 1 for **ORANGE**. The fitted values $\hat{Y}$ are converted to a fitted class variable $\hat{G}$ according to the rule

让我们来看一个文本分类数据的线性模型的例子．图2.1显示了训练数据在一对输入$X_1$和$X_2$的散点图．数据是仿造的，而且现在模拟模型不是很重要．输出的类变量$G$取值为蓝色或橘黄色，而且正如散点图表示的那样．每个类里面都有100个点．线性回归模型是去拟合这些数据，蓝色时响应变量$Y$编码为0，橘黄色时编码为1．拟合值$\hat{Y}$根据下面规则转化为拟合的类变量$\hat{G}$

$$
\hat{G}=
\left\\{
\begin{array}{cc}
\text{$\color{yellow}{ORANGE}$}\quad&\text{if }\hat{Y} > 0.5\\\
\text{$\color{blue}{BLUE}$}\quad & \text{if }\hat{Y}\le 0.5
\end{array}
\right.
$$

![]({{ site.github.url }}/media/learningImg/fig2.1.png)

图2.1：两维分类的例子．类别被编码为二进制变量（蓝色为0，橘黄色为1），然后通过线性回归进行拟合．图中直线是判别边界，直线方程为$x^T\hat{\beta}=0.5$．橘黄色阴影区域表示这一部分输入区域被分成橘黄色，而蓝色阴影区域分成蓝色．

> The set of points in $\mathbf{R}^2$ classified as **ORANGE** corresponds to $\\{x : x^T\hat{\beta} > 0.5\\}$, indicated in Figure 2.1, and the two predicted classes are separated by the *decision boundary* $\\{x : x^T\hat{\beta} = 0.5\\}$, which is linear in this case. We see that for these data there are several misclassifications on both sides of the decision boundary. Perhaps our linear model is too rigid— or are such errors unavoidable? Remember that these are errors on the training data itself, and we have not said where the constructed data came from. Consider the two possible scenarios:
> **Scenario 1:** The training data in each class were generated from bivariate Gaussian distributions with uncorrelated components and different means.
> **Scenario 2:** The training data in each class came from a mixture of 10 lowvariance Gaussian distributions, with individual means themselves distributed as Gaussian.

在$\mathbf{R}^2$中被分成橘黄色类的点对应$\\{x:x^T\hat{\beta}>0.5\\}$,在图2.1中显示的那样，而且两个预测的类被判别边界$\\{x:x^T\hat{\beta}=0.5\\}$分隔开，在这种情形下是线性的．我们可以看到在判别边界的两边都有被分错的点．或许我们的线性模型太严格了，又或者是这些错误无法避免？记住这些事在训练数据本身上的错误，而且我们没有说这些构造的数据从哪里来的．考虑下面两种可能的情境：

**情境1：**每一类的训练数据是从两个独立变量，不同均值的高斯分布．

**情境2：**每一类的训练数据是来自10个低方差的高斯分布的混合，每一个高斯分布都有各自的均值

> A mixture of Gaussians is best described in terms of the generative model. One first generates a discrete variable that determines which of the component Gaussians to use, and then generates an observation from the chosen density. In the case of one Gaussian per class, we will see in Chapter 4 that a linear decision boundary is the best one can do, and that our estimate is almost optimal. The region of overlap is inevitable, and future data to be predicted will be plagued by this overlap as well.

就生成模型而言，混合的高斯分布是描述得最好的．首先产生一个离散随机变量，该变量决定使用哪个部分的高斯分布，然后根据选择的密度产生观测值．在每一类是一个高斯分布的情形下，我们将在第四章看到一个线性的判别边界是最好的，而且我们的估计也几乎是最优的．区域的重叠是不可避免的，而且将要被预测的数据因为数据重叠也会变得很麻烦．

> In the case of mixtures of tightly clustered Gaussians the story is different. A linear decision boundary is unlikely to be optimal, and in fact is not. The optimal decision boundary is nonlinear and disjoint, and as such will be much more difficult to obtain.

在混合紧密聚集的高斯分布中情形不一样了．一个线性的判别边界不大可能是最优的，而且事实上也不是．最优的判别边界是非线性不相交的，而且作为这种判别边界，将会更难确定．

> We now look at another classification and regression procedure that is in some sense at the opposite end of the spectrum to the linear model, and far better suited to the second scenario.

我们现在来看一下另一种分类和回归的过程，在某种程度上是与线性模型相反的一种做法，但却更好地能够适用第二种情形．

> ### 2.3.2 Nearest-Neighbor Methods

### 2.3.2 最邻近方法

> Nearest-neighbor methods use those observations in the training set $\mathcal{T}$ closest in input space to $x$ to form $\hat{Y}$. Specifically, the $k$-nearest neighbor fit for $\hat{Y}$ is defined as follows:

最邻近方法用训练集$\mathcal{T}$中在输入空间中离$x$最近的观测组成$\hat{Y}$．特别地，对$\hat{Y}$的$k$-最近邻拟合定义如下：

$$
\hat{Y}(x)=\frac{1}{k}\sum\limits_{x_i\in N_k(x)}y_i\tag{2.8}
$$

> where $N_k(x)$ is the neighborhood of $x$ defined by the $k$ closest points $x_i$ in the training sample. Closeness implies a metric, which for the moment we assume is Euclidean distance. So, in words, we find the $k$ observations with $x_i$ closest to $x$ in input space, and average their responses.

$N_k(x)$是在训练样本中$k$个离$x$最近的点$x_i$组成的邻域．远近意味着度量，目前我们假设是欧氏距离．因此，用文字来叙述就是，我们在输入空间中找到离x最近的k个观测$x_i$,然后取这些值的平均．

> In Figure 2.2 we use the same training data as in Figure 2.1, and use 15-nearest-neighbor averaging of the binary coded response as the method of fitting. Thus $\hat{Y}$ is the proportion of **ORANGE**’s in the neighborhood, and so assigning class ORANGE to $\hat{G}$ if $\hat{Y} >  0.5$ amounts to a majority vote in the neighborhood. The colored regions indicate all those points in input space classified as **BLUE** or **ORANGE** by such a rule, in this case found by evaluating the procedure on a fine grid in input space. We see that the decision boundaries that separate the **BLUE** from the **ORANGE** regions are far more irregular, and respond to local clusters where one class dominates.

在图2.2中我们采用图2.1中同样的训练数据，然后采用15-最近邻平均二进制编码作为拟合的方法．因此$\hat{Y}$是橘黄色在邻域中的比例，然后如果$\hat{Y} > 0.5$在邻域中的数量占了主要部分则将橘黄色的类赋值给$\hat{G}$．有颜色的区域表明该区域里面的点根据这一条规则分成了橘黄色和蓝色，这种情形下是靠对网格上的点进行赋值找到的．我们可以看到分开蓝色和橘黄色的判别边界更加地不规则，而且对应于某一类所主导的局部聚集．

![]({{ site.github.url }}/media/learningImg/fig2.2.png)

图2.2 图2.1中一样的二维分类的例子．类别被二进制变量编码（蓝色为0，橘黄色为1），通过15-最近邻平均拟合．因此预测的类别是选择15-最近邻中占大部分的类别．

> Figure 2.3 shows the results for 1-nearest-neighbor classification: $\hat{Y}$ is assigned the value $y_{\ell}$ of the closest point $x_{\ell}$ to $x$ in the training data. In this case the regions of classification can be computed relatively easily, and correspond to a *Voronoi tessellation* of the training data. Each point $x_i$ has an associated tile bounding the region for which it is the closest input point. For all points $x$ in the tile, $\hat{G}(x) = g_i$. The decision boundary is even more irregular than before.

图2.3显示了1-最近邻的分类结果：$\hat{Y}$被赋了距离$x$的最近点$x_{\ell}$的值$y_{\ell}$．这种情形下，区域的分类可以相对简单的计算出来，这对应训练数据的泰森多边形图．每个点$x_i$都有一个对应的区域，这些小区域形成了离某点最近的区域．对于小区域里面的每一个点，$\hat{G}(x)=g_i$．判别边界比之前更加不规则了．

![]({{ site.github.url }}/media/learningImg/fig2.3.png)

图2.1中一样的二维分类的例子．类别被二进制变量编码（蓝色为0，橘黄色为1），通过1-最近邻分类预测．

> The method of $k$-nearest-neighbor averaging is defined in exactly the same way for regression of a quantitative output $Y$ , although $k = 1$ would be an unlikely choice.

$k$-最近邻平均的方法实际上是对定量的输出变量$Y$的回归，尽管$k=1$是不太可能的选择．

> In Figure 2.2 we see that far fewer training observations are misclassified than in Figure 2.1. This should not give us too much comfort, though, since in Figure 2.3 $none$ of the training data are misclassified. A little thought suggests that for $k$-nearest-neighbor fits, the error on the training data should be approximately an increasing function of $k$, and will always be 0 for $k = 1$. An independent test set would give us a more satisfactory means for comparing the different methods.

相比较图2.1，在图2.2中更少的训练观测值被错误地分类．尽管如此，这个不应该给我们太大的安慰，因为图2.3中没有一个训练数据被错误地分类．一个小小的想法表明在$k$-最近邻拟合中，训练数据的误差应该近似是关于$k$的增函数，而且当$k=1$时误差总是为0．一个独立的测试集比较这些不同的方法会给我们一个满意的方法．

> It appears that $k$-nearest-neighbor fits have a single parameter, the number of neighbors $k$, compared to the $p$ parameters in least-squares fits. Although this is the case, we will see that the effective number of parameters of $k$-nearest neighbors is $N/k$ and is generally bigger than $p$, and decreases with increasing $k$. To get an idea of why, note that if the neighborhoods were nonoverlapping, there would be $N/k$ neighborhoods and we would fit one parameter (a mean) in each neighborhood.

看起来$k$-最近邻拟合只有一个参数，$k$值的大小，而在最小二乘有$p$个参数．尽管情况就是这样，我们将会看到$k$-最近邻的有效(*effective*)参数个数是$\frac{N}{k}$，而且一般地会比$p$大，另外随着$k$的增长有效参数个数减少．为了弄清楚为什么，注意到如果邻域没有重叠，则会有$\frac{N}{k}$个邻域，而且我们在每个区域内拟合一个参数．

> It is also clear that we cannot use sum-of-squared errors on the training set as a criterion for picking $k$, since we would always pick $k = 1$! It would seem that $k$-nearest-neighbor methods would be more appropriate for the mixture Scenario 2 described above, while for Gaussian data the decision boundaries of $k$-nearest neighbors would be unnecessarily noisy.

我们不能在训练集上将误差平方和作为选择$k$的标准，因为我们总会选择$k=1$．$k$-最近邻方法对于上文中描述的情境2更适合，尽管对于高斯分布的数据$k$-最近邻判别边界会有不必要的噪声．

> ### 2.3.3 From Least Squares to Nearest Neighbors

### 2.3.3 从最小二乘到最近邻

> The linear decision boundary from least squares is very smooth, and apparently stable to fit. It does appear to rely heavily on the assumption that a linear decision boundary is appropriate. In language we will develop shortly, it has low variance and potentially high bias.

最小二乘法的线性判别边界非常光滑，而且显然拟合得很稳定．它似乎严重依赖线性判别边界是合理的假设．我们马上用文字讨论，它有低方差和潜在的高偏差．

> On the other hand, the $k$-nearest-neighbor procedures do not appear to rely on any stringent assumptions about the underlying data, and can adapt to any situation. However, any particular subregion of the decision boundary depends on a handful of input points and their particular positions, and is thus wiggly and unstable—high variance and low bias.

另一方面，$k$-最近邻过程似乎不非常依赖任何关于数据的假设，而且可以适用于任何情形．然而，判别边界的任何特定的分区都依赖几个输入点和它们的特定位置，而且因此左右摇摆不稳定——高方差和低偏差．

> Each method has its own situations for which it works best; in particular linear regression is more appropriate for Scenario 1 above, while nearest neighbors are more suitable for Scenario 2. The time has come to expose the oracle! The data in fact were simulated from a model somewhere between the two, but closer to Scenario 2. First we generated 10 means $m_k$ from a bivariate Gaussian distribution $N((1,0)^T, \bf{I})$ and labeled this class **BLUE**. Similarly, 10 more were drawn from $N((0,1)^T, \bf{I})$ and labeled class **ORANGE**. Then for each class we generated 100 observations as follows: for each observation, we picked an $m_k$ at random with probability 1/10, and then generated a $N(m_k, \mathbf{I}/5)$, thus leading to a mixture of Gaussian clusters for each class. Figure 2.4 shows the results of classifying 10,000 new observations generated from the model. We compare the results for least squares and those for $k$-nearest neighbors for a range of values of $k$.

每种方法都有各自处理得最好的情形；特别地，线性回归更适合上面介绍的情形1，而最邻近方法最适合情形2．是来揭露困难的时候了．事实上数据是从介于两种情形的模型中模拟出来的，但是更接近于情形2．首先，我们从双变量高斯分布$(N(1,0)^T,\bf{I})$中产生10个均值$m_k$，标记此类为蓝色．类似地，从双变量高斯分布$(N(0,1)^T,\bf{I})$中产生10个均值并标记此类为橘黄色．然后对每一类按照下面方式产生100个观测：对于每个观测，我们以1/10的概率随机选择一个$m_k$，然后产生$N(m_k,\bf{I}/5)$，因此对于每一类引出了一个高斯分布簇的混合．图2.4显示了从该模型产生10000个新观测的的分类结果，我们比较最小二乘法和一系列$k$值对应的$k$-最近邻的结果．

![]({{ site.github.url }}/media/learningImg/fig2.4.png)

图四：在图2.1，图2.2，图2.3中运用的模拟例子的错误分类曲线．我们用的是200个样本作为训练数据，检测数据规模为10000个．橘黄色的曲线对应$k$-最近邻分类的测试数据，蓝色的曲线对应$k$-最近邻分类的训练数据．线性回归的结果是在自由度为3上的大橘黄色和蓝色的方块．紫色的直线是最优的贝叶斯错误率．

> A large subset of the most popular techniques in use today are variants of these two simple procedures. In fact 1-nearest-neighbor, the simplest of all, captures a large percentage of the market for low-dimensional problems. The following list describes some ways in which these simple procedures have been enhanced:
> - Kernel methods use weights that decrease smoothly to zero with distance from the target point, rather than the effective 0/1 weights used by k-nearest neighbors.
> - In high-dimensional spaces the distance kernels are modified to emphasize some variable more than others.
> - Local regression fits linear models by locally weighted least squares, rather than fitting constants locally.
> - Linear models fit to a basis expansion of the original inputs allow arbitrarily complex models.
> - Projection pursuit and neural network models consist of sums of nonlinearly transformed linear models.

今天最受欢迎的技巧的一大部分是这两种方法的变形．事实上，1-最近邻，所有方法中最简单的，夺取了低维问题的大部分市场．下面列举描述了这些简单的过程增强的方式

- 核方法用光滑递减至0的权重及距离目标点的距离，而不是像在$k$-最近邻中用的有效的0/1权重系数
- 高维空间中，距离核修改成比其它的变量更多地强调某些变量
- 通过局部权重的最小二乘的局部线性回归，而不是局部用常数值来拟合
- 线性模型适应基本的允许任意复杂模型的原始输入的拓展
- 投影寻踪和神经网络模型包括非线性模型转换为线性模型之和

> ## 2.4 Statistical Decision Theory

## 2.4 统计判别理论

> In this section we develop a small amount of theory that provides a framework for developing models such as those discussed informally so far. We first consider the case of a quantitative output, and place ourselves in the world of random variables and probability spaces. Let $X \in {\bf{R}}^p$ denote a real valued random input vector, and $Y \in \bf{R}$ a real valued random output variable, with joint distribution $Pr(X,Y )$. We seek a function $f(X)$ for predicting $Y$ given values of the input $X$. This theory requires a loss function $L(Y,f(X))$ for penalizing errors in prediction, and by far the most common and convenient is squared error loss: $L(Y,f(X)) = (Y − f(X))^2$.This leads us to a criterion for choosing f,

在这一部分我们讨论一小部分理论，这些理论提供构建模型的一个框架，比如我们目前为止所有非正式讨论的模型．我们首先考虑定量输出时的情形，而且从随机变量和概率空间的角度来考虑．记$X\in {\mathbf{R}}^p$为实值随机输入向量，$Y\in \bf{R}$为实值随机输出变量，联合概率分布为$Pr(X,Y)$．给定输入$X$,我们寻找一个函数$f(X)$来预测$Y$．这个理论需要一个损失函数(*loss function*)$L(Y,f(X))$用来惩罚预测中的错误，到目前为止最常用并且最方便的是平方误差损失(*squared error loss*):$L(Y,f(X))=(Y-f(X))^2$．这导致了我们寻找$f$的一个标准——预测（平方）误差的期望

$$
\begin{align*}
EPE(f)&=E(Y-f(X))^2\qquad\qquad\tag{2.9}\\
&=\int[y-f(x)]^2Pr(dx,dy)\tag{2.10}
\end{align*}
$$

> the expected (squared) prediction error . By **conditioning** on X, we can write EPE as

在$X$的**条件**下，我们可以把EPE写成

$$
EPE(f) = E_XE_{Y\mid X}([Y-f(X)]^2\mid X)\tag{2.11}
$$

> and we see that it suffices to minimize EPE pointwise:

而且满足使EPE逐点最小：

$$
f(x) = argmin_cE_{Y\mid X}([Y-c]^2\mid X=x)\tag{2.12}
$$
> The solution is

解为

$$
f(x) = E(Y\mid X=x)\tag{2.13}
$$

> the conditional expectation, also known as the regression function. Thus the best prediction of $Y$ at any point $X = x$ is the conditional mean, when best is measured by average squared error.
> **Note:** Conditioning here amounts to factoring the joint density $Pr(X, Y ) = Pr(Y \mid X)Pr(X)$ where $Pr(Y \mid X) = Pr(Y, X)/Pr(X)$, and splitting up the bivariate integral accordingly.

是条件期望，也被称作回归（*regression*）函数．因此，$Y$的最优预测是在任意点$X=x$是条件均值，此处的最优是用平均平方误差来衡量的．
**注：**此处条件是指对联合概率密度分解$Pr(X, Y ) = Pr(Y \mid X)Pr(X)$，其中$Pr(Y \mid X) = Pr(Y, X)/Pr(X)$，因此分解成了双变量的积分

> The nearest-neighbor methods attempt to directly implement this recipe using the training data. At each point x, we might ask for the average of all those $y_i$s with input $x_i = x$. Since there is typically at most one observation at any point $x$, we settle for

最近邻方法试图直接利用训练数据完成任务．在每一点处，我们可能需要在输入$x_i=x$附近的所有$y_i$的均值．因为在任一点$x$,一般至多有一个观测值，我们决定有

$$
\hat{f}(x)=Ave(y_i\mid x_i\in N_k(x))
$$

> where “Ave” denotes average, and $N_k(x)$ is the neighborhood containing the $k$ points in $\cal{T}$ closest to $x$. Two approximations are happening here:
> - expectation is approximated by averaging over sample data;
> - conditioning at a point is relaxed to conditioning on some region “close” to the target point.

其中“Ave”表示平均，$N_k(x)$是集$\cal{T}$中离$x$最近的$k$个点的邻域．这里有两个近似
- 期望近似为样本数据的平均
- 在每一点的条件是在对于某个目标点的“闭”区域的松弛．

$$
\hat{f}(x)=Ave(y_i\mid x_i\in N_k(x))\tag{2.14}
$$

> For large training sample size $N$, the points in the neighborhood are likely to be close to $x$, and as $k$ gets large the average will get more stable. In fact, under mild regularity conditions on the joint probability distribution $Pr(X,Y)$, one can show that as $N,k \longrightarrow \infty$ such that $k/N \longrightarrow 0$, $\hat{f}(x) \longrightarrow E(Y\mid  X = x)$. In light of this, why look further, since it seems we have a universal approximator? We often do not have very large samples. If the linear or some more structured model is appropriate, then we can usually get a more stable estimate than k-nearest neighbors, although such knowledge has to be learned from the data as well. There are other problems though, sometimes disastrous. In Section 2.5 we see that as the dimension $p$ gets large, so does the metric size of the $k$-nearest neighborhood. So settling for nearest neighborhood as a surrogate for conditioning will fail us miserably. The convergence above still holds, but the rate of convergence decreases as the dimension increases.

对于规模为$N$的大规模训练数据，邻域中的点更可能接近$x$，而且当$k$越大，平均值会更加稳定．事实上，在联合概率分布$Pr(X,Y)$温和的正则条件下，可以证明当$N,k \longrightarrow \infty$使得$k/N \longrightarrow 0$，$\hat{f}(x) \longrightarrow E(Y \mid X = x)$．根据这个，为什么看得更远，因为似乎我们有个一般的近似量吗？我们经常没有非常大的样本．如果线性或者其它更多结构化的模型是合适的，那么我们经常可以得到比$k$-最近邻更稳定的估计，尽管这些知识必须也要从数据中学习．然而还有其它的问题，有时是致命的．在下一个部分我们看到当维数$p$变大，$k$-最近邻的度量大小也随之变大．所以最近邻代替条件会让我们非常失望．收敛仍然保持，但是当维数增长后收敛阶(*rate*)变小．

> How does linear regression fit into this framework? The simplest explanation is that one assumes that the regression function f(x) is approximately linear in its arguments:

线性回归怎样适应这个框架？最简单的解释是假设回归函数$f(x)$近似线性

$$
f(x)\approx x^T\beta\tag{2.15}
$$

> This is a model-based approach—we specify a model for the regression function. Plugging this linear model for f(x) into EPE (2.9) and differentiating

这是个基本模型的方式——对于明确回归函数的模型．将$f(x)$的线性模型插入EPE(2.9)然后微分可以理论上解出$\beta$
$$
\beta = [E(XX^T)]^{-1}E(XY)\tag{2.16}
$$

> Note we have not conditioned on $X$; rather we have used our knowledge of the functional relationship to pool over values of $X$. The least squares solution (2.6) amounts to replacing the expectation in (2.16) by averages over the training data.

注意到我们在$X$上没有条件；而是已经用了我们对函数关系的理解汇合$X$的值（*pool over values of X*）．最小二乘的解(2.16)相当于对训练数据平均替换式(2.16)中的期望．

> So both $k$-nearest neighbors and least squares end up approximating conditional expectations by averages. But they differ dramatically in terms of model assumptions:
> - Least squares assumes $f(x)$ is well approximated by a globally linear function.
> - k-nearest neighbors assumes $f(x)$ is well approximated by a locally constant function.
>   Although the latter seems more palatable, we have already seen that we may pay a price for this flexibility

所以$k$-最邻近和最小二乘都是以对由平均得到的条件期望近似而结束．但是它们在模型上显著不同．
- 最小二乘假设$f(x)$是某个整体线性函数的良好近似．
- $k$-最近邻假设$f(x)$是局部常值函数的良好近似．

尽管后者似乎更容易被接受，但我们已经看到我们需要为这种灵活性付出代价．

> Many of the more modern techniques described in this book are model based, although far more flexible than the rigid linear model. For example, additive models assume that

很多这本书中描述的技巧都是基于基本模型的，尽管比严格的线性模型更加的灵活．举个例子，可加性模型假设

$$
f(X) = \sum\limits_{j=1}^{p}f_j(X_j)\tag{2.17}
$$

> This retains the additivity of the linear model, but each coordinate function $f_j$ is arbitrary. It turns out that the optimal estimate for the additive model uses techniques such as $k$-nearest neighbors to approximate univariate conditional expectations simultaneously for each of the coordinate functions. Thus the problems of estimating a conditional expectation in high dimensions are swept away in this case by imposing some (often unrealistic) model assumptions, in this case additivity.

这保留着线性模型的可加性，但是每个并列的函数$f_j$是任意的．结果是可加模型的最优估计是对于每个并列的函数同时（*simultaneously*）用$k$-最邻近去近似单变量(*univariate*)的条件期望．因此在可加性的情况下，通过加上某些（通常不现实）的模型假设在高维中估计条件期望的问题被扫除了．

> Are we happy with the criterion (2.11)? What happens if we replace the $L_2$ loss function with the $L_1: E\mid Y −f(X)\mid $? The solution in this case is the conditional median,

是否为(2.11)的标准而高兴？如果我们用$L_1$损失函数$E\mid Y-f(X)\mid $来替换$L_2$损失函数会怎么样．这种情况下解是条件中位数，
$$
\hat{f}(x) = median(Y \mid X = x)\tag{2.18}
$$

> which is a different measure of location, and its estimates are more robust than those for the conditional mean. $L_1$ criteria have discontinuities in their derivatives, which have hindered their widespread use. Other more resistant loss functions will be mentioned in later chapters, but squared error is analytically convenient and the most popular.

条件中位数是另一种定位的方式，而且它的估计比条件均值更加鲁棒．$L_1$标准的导数不连续，阻碍了它们的广泛应用．其它更多抵抗的损失函数会在后面章节中介绍，但是平方误差是分析方便而且是最受欢迎的．

> What do we do when the output is a categorical variable $G$? The same paradigm works here, except we need a different loss function for penalizing prediction errors. An estimate $\hat{G}$ will assume values in $\cal{G}$, the set of possible classes. Our loss function can be represented by a $K \times K$ matrix $\mathbf{L}$, where $K = card(\cal{G})$. $\mathbf{L}$ will be zero on the diagonal and nonnegative elsewhere, where $L(k,\ell)$ is the price paid for classifying an observation belonging to class $\cal{G}_k$ as $G_{\ell}$. Most often we use the zero–one loss function, where all misclassifications are charged a single unit. The expected prediction error is

当输出为类变量$G$时，我们应该怎样处理？同样的范例在这里也是可行的，除了我们需要一个不同的损失函数来惩罚预测错误．预测值$\hat{G}$在$\cal G$中取值，$\cal G$是可能的类别的集合．我们的损失函数可以用$K\times K$的矩阵$\mathbf{L}$来表示，其中$K=card({\cal G})$．矩阵$\mathbf{L}$对角元为0且其它地方值非负，其中$L(k,\ell)$为把属于${\cal G}_k$的类分到${\cal G}_{\ell}$的代价．大多数情况下我们用0-1(*zero-one*)损失函数，其中所有的错误分类都被要求一个单位的惩罚．预测错误的期望为

$$
EPE = E[L(G,\hat{G}(X))]\tag{2.19}
$$
> where again the expectation is taken with respect to the joint distribution $Pr(G,X)$. Again we condition, and can write EPE as

关于联合分布$Pr(G,X)$，期望再一次起作用．再一次考虑条件分布，我们可以写出如下的EPE

$$
EPE = E_X\sum\limits_{k=1}^KL[{\cal{G}}_k,\hat{G}(X)]Pr({\cal{G}}_k\mid X)\tag{2.20}
$$
> and again it suffices to minimize EPE pointwise:

再一次满足逐点最小化:

$$
\hat{G}(x) = argmin_{g\in \cal{G}}\sum\limits_{k=1}^KL({\cal{G}}_k,g)Pr({\cal G}_k\mid X = x)\tag{2.21}
$$
> With the 0–1 loss function this simplifies to

结合0-1损失函数上式简化为

$$
\hat{G}(x) = argmin_{g\in \cal{G}}[1 − Pr(g\mid X = x)]\tag{2.22}
$$

> or simply

或者简单地

$$
\hat{G}(X) = {\cal{G}}_k \text{ if } Pr({\cal{G}}_k\mid X = x) = \underset{g\in{\cal{G}}}{max } Pr(g\mid X = x)\tag{2.23}
$$

> This reasonable solution is known as the *Bayes classifier*, and says that we classify to the most probable class, using the conditional (discrete) distribution $Pr(G\mid X)$. Figure 2.5 shows the Bayes-optimal decision boundary for our simulation example. The error rate of the Bayes classifier is called the $Bayes rate$.

合理的解决方法被称作贝叶斯分类（*Bayes classifier*)，利用条件（离散）分布$Pr(G\mid X)$分到最合适的类别．对于我们模拟的例子图2.5显示了最优的贝叶斯判别边界．贝叶斯分类的误差阶被称作贝叶斯阶(*Bayes rate*)．

![]({{ site.github.url }}/media/learningImg/fig2.5.png)

图2.5：在图2.1，2.2，和2.3中模拟的例子的最优贝叶斯判别边界．因为每个类别的产生密度已知，则判别边界可以准确地计算出来．

> Again we see that the k-nearest neighbor classifier directly approximates this solution—a majority vote in a nearest neighborhood amounts to exactly this, except that conditional probability at a point is relaxed to conditional probability within a neighborhood of a point, and probabilities are estimated by training-sample proportions.

再一次我们看到$k$-最近邻分类直接近似这个解决方法——在最近邻内占绝大多数恰好意味着这个，除了某一点的条件概率松弛为该点的邻域内的条件概率，而且概率是通过训练样本的比例来估计的．

> Suppose for a two-class problem we had taken the dummy-variable approach and coded $G$ via a binary $Y$ , followed by squared error loss estimation. Then $\hat{f}(X) = E(Y \mid X) = Pr(G = {\cal{G}}_1\mid X)$ if ${\cal{G}}_1$ corresponded to $Y = 1$. Likewise for a $K$-class problem, $E(Y_k\mid X) = Pr(G = G_k\mid X)$. This shows that our dummy-variable regression procedure, followed by classification to the largest fitted value, is another way of representing the Bayes classifier. Although this theory is exact, in practice problems can occur, depending on the regression model used. For example, when linear regression is used, $\hat{f}(X)$ need not be positive, and we might be suspicious about using it as an estimate of a probability. We will discuss a variety of approaches to modeling $Pr(G\mid X)$ in Chapter 4.

假设两个类别的问题，我们采用虚拟变量的方法而且通过二进制变量$Y$编码得到$G$，然后进行平方误差损失估计．当${\cal{G}}_1$对应$Y=1$,有$\hat{f}(X)=E(Y\mid X)=Pr(G={\cal{G}}_1\mid X)$．同样对于$K$ 个类别的问题$E(Y_k\mid X)=Pr(G={\cal{G}}_k\mid X)$．这显示了我们虚拟变量回归的过程，然后根据最大的拟合值来分类，这是表示贝叶斯分类的另一种方式．尽管这个理论是确定的，在实现中问题也会随着采用的回归模型不同而出现．举个例子，当采用线性回归模型，$\hat{f}(X)$不必要为正值，而且我们可能会怀疑用这个作为概率的一个估计．我们将在第四章中讨论构建模型$Pr(G\mid X)$的各种不同的方式．

> ## 2.5 Local Methods in High Dimensions

## 2.5 高维问题的局部方法

> We have examined two learning techniques for prediction so far: the stable but biased linear model and the less stable but apparently less biased class of $k$-nearest-neighbor estimates. It would seem that with a reasonably large set of training data, we could always approximate the theoretically optimal conditional expectation by $k$-nearest-neighbor averaging, since we should be able to find a fairly large neighborhood of observations close to any $x$ and average them. This approach and our intuition breaks down in high dimensions, and the phenomenon is commonly referred to as the curse of dimensionality (Bellman, 1961). There are many manifestations of this problem, and we will examine a few here.

至今为止我们已经仔细讨论了两个关于预测的学习方法：稳定但是有偏差的线性模型和不稳定但显然偏差较小的$k$-最近邻估计．当有充分大的训练数据，我们似乎总会选择$k$-最近邻平均来近似理论上的最优条件期望，因为我们能够找到一个相当大的离$x$近的观测构成的邻域并且平均里面的观测值．在高维情形下这种方法以及我们的直觉没有用，而且这种现象通常被称作维数的诅咒(Bellman,1961)．关于这个问题有很多的证明，我们将要仔细讨论一些．

> Consider the nearest-neighbor procedure for inputs uniformly distributed in a p-dimensional unit hypercube, as in Figure 2.6. Suppose we send out a hypercubical neighborhood about a target point to capture a fraction $r$ of the observations. Since this corresponds to a fraction $r$ of the unit volume, the expected edge length will be $e^p(r) = r^{1/p}$. In ten dimensions $e^{10}(0.01) = 0.63$ and $e^{10}(0.1) = 0.80$, while the entire range for each input is only 1.0. So to capture $1\%$ or $10\%$ of the data to form a local average, we must cover $63\%$ or $80\%$ of the range of each input variable. Such neighborhoods are no longer “local.” Reducing $r$ dramatically does not help much either, since the fewer observations we average, the higher is the variance of our fit.

正如图2.6显示的那样，我们考虑输入在$p$维单位超立方体均匀分布的最近邻过程．假设我们在某个目标点发出超立方体的邻域捕获观测值的一个小部分$r$．因为这个邻域对应单位体积的小部分$r$,边长的期望值为$e_p(r)=r^{1/p}$．在10维空间下$e_{10}(0.01)=0.63$,$e_{10}(0.1)=0.80$,而每个输入的全部范围为1.0．所以选取$1\%$或$10\%$的数据去形成局部均值，我们必须在每个输入变量上覆盖到$63\%$或者$80\%$．这样的邻域不再是局部的．显著地降低$r$并没有作用，因为我们选取去平均的观测值越少，我们拟合的方差也会越大．

![]({{ site.github.url }}/media/learningImg/fig2.6.png)

图2.6:一个输入为均匀分布数据的单位立方体的子立方体邻域很好地展现了维数的灾难．右边的图显示了不同维数$p$下，为了捕捉一小部分的数据$r$，子立方体的所需要的边长．在10维的情况下，为了捕捉$10\%$的数据，我们需要包括每个坐标取值范围的$80\%$．

> Another consequence of the sparse sampling in high dimensions is that all sample points are close to an edge of the sample. Consider $N$ data points uniformly distributed in a p-dimensional unit ball centered at the origin. Suppose we consider a nearest-neighbor estimate at the origin. The median distance from the origin to the closest data point is given by the expression

高维下的稀疏取样的另外一个后果是所有的样本点离样本的某一边很近．考虑在$p$维以原点为中心的单位球中均匀分布的$N$个数据点．假设我们考虑原点处的最近邻估计．距离原点最近的数据点距离的中位数由下式给出

$$
d(p,N)=(1-(\frac{1}{2})^{1/N})^{1/p}
$$

> (Exercise 2.3). A more complicated expression exists for the mean distance to the closest point. For $N = 500, p = 10 , d(p,N) \approx 0.52$, more than halfway to the boundary. Hence most data points are closer to the boundary of the sample space than to any other data point. The reason that this presents a problem is that prediction is much more difficult near the edges of the training sample. One must extrapolate from neighboring sample points rather than interpolate between them．

距离原点最近的数据点的距离的均值表达式更加复杂．当$N=500,p=10,d(p,N)\approx 0.52$,比到边界的距离的一半还要大．因此大部分的数据点离样本空间的边界比其他任何的数据点更近．这里产生问题的原因是对于训练样本中靠近的边的预测更加困难．一定要从样本点的邻域外推而不是在中间插入．

> Another manifestation of the curse is that the sampling density is proportional to $N^{ 1/p}$, where $p$ is the dimension of the input space and $N$ is the sample size. Thus, if $N_1 = 100$ represents a dense sample for a single input problem, then $N_{10} = 100^{10}$ is the sample size required for the same sampling density with 10 inputs. Thus in high dimensions all feasible training samples sparsely populate the input space.

另外一个证明这个灾难是取样密度是跟$N^{1/p}$成比例，其中$p$为输入空间的维数，$N$为样本的规模．因此，如果$N_1=100$表示对于单输入问题的大密度取样，然后$N_{10}=100^{10}$是10个输入时取样密度同上面相同时所需要的样本规模大小．因此在高维空间中所有可行的训练样本在输入空间中很稀少．

> Let us construct another uniform example. Suppose we have 1000 training examples $x_i$ generated uniformly on $[−1,1]^p$. Assume that the true relationship between $X$ and $Y$ is

让我们构造另一个均匀分布的例子．假设我们有从$[-1,1]^p$中均匀产生的1000个训练样本$x_i$．假设没有任何测量错误，$X$和$Y$之间真正的关系是

$$
Y = f(X) = e^{−8\mid \mid X\mid \mid ^2},
$$

> without any measurement error. We use the 1-nearest-neighbor rule to predict $y_0$ at the test-point $x_0 = 0$. Denote the training set by $\cal T$ . We can compute the expected prediction error at $x_0$ for our procedure, averaging over all such samples of size 1000. Since the problem is deterministic, this is the mean squared error (MSE) for estimating $f(0)$:

我们采用1-最近邻规则去预测测试点$x_0=0$的值$y_0$．记训练集为${\cal{T}}$．对于我们的过程，可以通过平均所有的大小为1000的样本来计算在$x_0$处的预测偏差的期望值．因为这个问题是确定性的，下面是估计$f(0)$的均方误差MSE

$$
\begin{align*}
MSE(x_0)&=E_{\cal{T}}[f(x_0)-\hat{y}_0]^2\notag\\
&=E_{\cal{T}}[\hat{y}_0-E_{\cal{T}}(\hat{y}_0)]^2\notag\\
&=Var_{\cal{T}}(\hat{y}_0)+Bias^2(\hat{y}_0)\tag{2.25}
\end{align*}
$$
> Figure 2.7 illustrates the setup. We have broken down the MSE into two components that will become familiar as we proceed: variance and squared bias. Such a decomposition is always possible and often useful, and is known as the *bias–variance decomposition*. Unless the nearest neighbor is at 0, $\hat{y}_0$ will be smaller than $f(0)$ in this example, and so the average estimate will be biased downward. The variance is due to the sampling variance of the 1-nearest neighbor. In low dimensions and with $N = 1000$, the nearest neighbor is very close to 0, and so both the bias and variance are small. As the dimension increases, the nearest neighbor tends to stray further from the target point, and both bias and variance are incurred. By $p = 10$, for more than $99\%$ of the samples the nearest neighbor is a distance greater than 0.5 from the origin. Thus as $p$ increases, the estimate tends to be 0 more often than not, and hence the MSE levels off at 1.0, as does the bias, and the variance starts dropping (an artifact of this example).

图2.7显示了这一安排．我们已经把MSE分解成两个部分，随着我们继续讨论，会越来越熟悉这两个部分，这两部分分别是方差和偏差平方．这一分解总是可行的的而且经常有用，并且这一分解被称为偏差-方差分解(*bias-variance decomposition*)．除非最近邻在0处，这一样本中$\hat{y}_0$会比$f(0)$小，而且平均估计会向下偏差．方差是因为1-最近邻取样的方差．在低维度以及$N=1000$情况下，最近邻非常接近0，于是偏差和方差都会非常小．当维数增大，最近邻有从目标点远离的趋势，而且都会带来偏差跟方差．$p=10$时，超过$99\%$的样本的最近邻距离原点大于0.5．因此，当$p$增长时，估计值多半有趋势趋于0，因此MSE保持在1.0附近，偏差也是如此，方差开始下降（这个例子的加工品）．

![]({{ site.github.url }}/media/learningImg/fig2.7.png)

图2.7：一个模拟的例子，证明维数的灾难以及其在MSE，偏差和方差的影响．输入的特征在$[-1,1]^p,p=1,\ldots,10$上均匀分布．左上角显示了在$\mathbf{R}$上的目标函数（无噪声）：$f(X)=e^{-8\mid \mid X\mid \mid ^2}$，而且展示了1-最近邻在估计$f(0)$时的误差．训练点用蓝色的记号表示．右上角显示了为什么1-最近邻的半径随着维数$p$的增加而增加．左下角显示了1-最近邻的平均半径．右下角显示了MSE,偏差平方和方差关于维数$p$的函数曲线．

![]({{ site.github.url }}/media/learningImg/fig2.8.png)

图2.8：同图2.7一样的配置的模拟例子．函数除了一个维数外都为常数，该维数下$F(X)=\frac{1}{2}(X_1+1)^3$．方差占主导地位．

> Although this is a highly contrived example, similar phenomena occur more generally. The complexity of functions of many variables can grow exponentially with the dimension, and if we wish to be able to estimate such functions with the same accuracy as function in low dimensions, then we need the size of our training set to grow exponentially as well. In this example, the function is a complex interaction of all $p$ variables involved.

尽管这是一个非常不自然的例子，类型的情形发生的更一般．多变量的函数复杂度随着维数呈指数增长，而且如果我们希望以在低维中以相同的精度来估计高维中的函数，我们将会需要呈指数增长规模的训练集．在这个例子中，函数是所有$p$个变量参与的复杂交互．

> Suppose, on the other hand, that we know that the relationship between $Y$ and $X$ is linear,

另一方面假设我们知道$Y$与$X$之间的关系为线性的

$$
Y = X^T\beta + \varepsilon\tag{2.26}
$$

> where $\varepsilon \sim N(0,\sigma^2)$ and we fit the model by least squares to the training data. For an arbitrary test point $x_0$, we have $\hat{y}_0=x_0^T\hat{\beta}$, which can be written as $\hat{y}_0=x_0^T\beta+\sum_{i=1}^N\ell_i(x_0)\epsilon_i$, where $\ell_i{x_0}$ is the $i$th element of ${\mathbf{X(X^TX)}}^{-1}x_0$. Since under this model the least squares estimates are unbiased, we find that

其中$\varepsilon \sim N(0,\sigma^2)$,而且我们用最小二乘对训练数据进行拟合模型．对于任意测试点$x_0$,我们有$\hat{y}_0=x_0^T\hat{\beta}$,可以写成$\hat{y}_0=x_0^T\beta+\sum_{i=1}^N\ell_i(x_0)\epsilon_i$,其中$\ell_i{x_0}$是${\mathbf{X(X^TX)}}^{-1}x_0$的第$i$个元素．因为在这个模型下，最小二乘估计是无偏的，我们发现

$$
\begin{align}
EPE(x_0) &= E_{y_0\mid x_0}E_{{\cal T}}(y_0-\hat{y}_0)^2\notag\\
&={\color{red} {E_{y_0\mid x_0}E_{\cal T}(x_0^T\beta+\varepsilon-\hat{y}_0)^2}}\notag\\
&={\color{red} {E_{y_0\mid x_0}E_{\cal T}[(x_0^T\beta-\hat{y}_0)^2+2\varepsilon (x_0^T\beta-\hat{y}_0)+\varepsilon ^2]}}\notag\\
&={\color{red} {E_{y_0\mid x_0}\varepsilon ^2+E_{\cal T}(x_0^T\beta-\hat{y}_0)^2\qquad\qquad \because E_{y_0\mid x_0}\varepsilon = 0}}\notag\\
&=Var(y_0\mid x_0)+E_{\cal T}[\hat{y}_0-E_{\cal T}\hat{y}_0]^2+[E_{\cal T}\hat{y}_0-x_0^T\beta]^2\notag\\
&=Var(y_0\mid x_0)+Var_{\cal T}(\hat{y}_0)+Bias^2(\hat{y}_0)\notag\\
&=\sigma^2+E_{\cal T}x_0^T(\mathbf{X^TX})^{-1}x_0\sigma^2+0^2\qquad\qquad\tag{2.27}
\end{align}
$$

> Here we have incurred an additional variance $\sigma^2$ in the prediction error, since our target is not deterministic. There is no bias, and the variance depends on $x_0$. If $N$ is large and $\cal T$ were selected at random, and assuming $E(X)=0$, then $\mathbf{X}^T\mathbf{X}\longrightarrow NCov(X)$ and

因为我们的目标不是确定的，所以在预测误差中带来了一个附加的方差$\sigma^2$．没有偏差，而且方差依赖于$x_0$．如果$N$较大且$\cal{T}$随机选取，并且假设$E(X)=0$,则$\mathbf{X}^T\mathbf{X}\longrightarrow NCov(X)$,并且

$$
\begin{align*}
E_{x_0}EPE(x_0)&\sim E_{x_0}x_0^TCov(X)^{-1}x_0\sigma^2/N+\sigma^2\notag\\
&=trace[Cov(X)^{-1}Cov(x_0)]\sigma^2/N+\sigma^2\notag\\
&=\sigma^2(p/N)+\sigma^2\qquad\qquad\tag{2.28}
\end{align*}
$$

> Here we see that the expected EPE increases linearly as a function of $p$, with slope $\sigma^2/N$. If $N$ is large and/or $\sigma^2$ is small, this growth in variance is negligible (0 in the deterministic case). By imposing some heavy restrictions on the class of models being fitted, we have avoided the curse of dimensionality. Some of the technical details in (2.27) and (2.28) are derived in Exercise 2.5.

我们可以看到EPE的期望作为$p$的函数线性增长，斜率为$\sigma^2/N$．如果$N$大且/或$\sigma^2$小，方差的增长可以忽略（在确定情形下为0）．通过在拟合的模型的类别上插入一些强的限制，我们避免了维数的灾难．一些技巧细节在式(2.27)和(2.28)中，这也是源自练习2.5．

> Figure 2.9 compares 1-nearest neighbor vs. least squares in two situations, both of which have the form $Y = f(X) + \epsilon$, $X$ uniform as before, and $\epsilon \sim N(0,1)$. The sample size is $N = 500$. For the red curve,$f(x)$ is linear in the first coordinate, for the green curve, cubic as in Figure 2.8. Shown is the relative EPE of 1-nearest neighbor to least squares, which appears to start at around 2 for the linear case. Least squares is unbiased in this case, and as discussed above the EPE is slightly above $\sigma^2=1$. The EPE for 1-nearest neighbor is always above 2, since the variance of $\hat{f}_0$ in this case is at least $\sigma^2$, and the ratio increases with dimension as the nearest neighbor strays from the target point. For the cubic case, least squares is biased, which moderates the ratio. Clearly we could manufacture examples where the bias of least squares would dominate the variance, and the 1-nearest neighbor would come out the winner.

图2.9在两种情形下比较1-最近邻和最小二乘法，两种情形下形式均为$Y=f(X)+\epsilon$,$X$和前面一样都是均匀分布的，而且$\epsilon\sim N(0,1)$．样本规模为$N=500$．对于红色的曲线，$f(X)$在第一个坐标下为线性的，对于绿色曲线，如图2.8中的立方．图中显示了相对于最小二乘而言，1-最近邻的相对$EPE$值．线性情况下大概是从2开始．在这个情况下最小二乘是无偏的，而且上述讨论的EPE略高于$\sigma^2=1$．1-最近邻的EPE总是大于2，因为这种情形下$\hat{f}_0$至少是$\sigma^2$，而且随着维数增长比率增加，因为随着维数增加最近邻会远离目标点．对于立方体的情形，最小二乘是有偏的，使比率变得缓和．显然我们可以构造最小二乘的偏差主导方差的例子，然后1-最近邻就会变成胜利者．

![]({{ site.github.url }}/media/learningImg/fig2.9.png)

> By relying on rigid assumptions, the linear model has no bias at all and negligible variance, while the error in 1-nearest neighbor is substantially
> larger. However, if the assumptions are wrong, all bets are off and the 1-nearest neighbor may dominate. We will see that there is a whole spectrum of models between the rigid linear models and the extremely flexible 1-nearest-neighbor models, each with their own assumptions and biases, which have been proposed specifically to avoid the exponential growth in complexity of functions in high dimensions by drawing heavily on these assumptions.

通过依赖严格的假设，线性模型没有偏差而且方差几乎可以忽略，然后1-最近邻的误差就会相当的大．然而，如果假设是错误的，所有的东西都不复存在，而1-最近邻将占主导地位．我们将会看到介于严格的线性模型和非常灵活的1-最近邻模型之间的模型谱，每个都有它们各自的假设和偏差，这些假设已经具体提到过，通过在很大程度上借鉴这些假设来避免高维下函数复杂度呈指数增长．

> Before we delve more deeply, let us elaborate a bit on the concept of statistical models and see how they fit into the prediction framework.

在我们更加细致地探究下去之前，我们在统计模型的概念上进行详细说明，并且看一下他们怎么适应预测的框架．

> ## 2.6 Statistical Models, Supervised Learning and Function Approximation

## 2.6 统计模型，监督学习和函数逼近

> Our goal is to find a useful approximation $\hat{f}(x)​$ to the function $f(x)​$ that underlies the predictive relationship between the inputs and outputs. In the theoretical setting of Section 2.4, we saw that squared error loss lead us to the regression function $f(x) = E(Y \mid X = x)​$ for a quantitative response. The class of nearest-neighbor methods can be viewed as direct estimates of this conditional expectation, but we have seen that they can fail in at least two ways:
	- if the dimension of the input space is high, the nearest neighbors need not be close to the target point, and can result in large errors;
	- if special structure is known to exist, this can be used to reduce both the bias and the variance of the estimates.
We anticipate using other classes of models for f(x), in many cases specifically designed to overcome the dimensionality problems, and here we discuss a framework for incorporating them into the prediction problem.

我们的目标是寻找函数$f(x)$的一个有用的近似$\hat{f}(x)$,函数$f(x)$蕴含着输入与输出之间的预测关系．在前面统计判别理论的章节的理论准备中，对于定量的响应，我们看到平方误差损失引导我们得到了回归函数$f(X)=E(Y\mid X=x)$．最近邻方法的类别可以看成是对条件期望的直接估计，但是我们可以看到至少在两个方面它们不起作用
- 如果输入空间的维数高，则最近邻不必离目标点近，而且可能导致大的误差
- 如果知道存在特殊的结构，可以用来降低估计的偏差与方差．

我们预先用了关于$f(X)$的其它类别的模型，在很多情形下是为了解决维数问题而特别设计的，现在我们讨论把它们合并进去一个预测问题的框架．

> ### 2.6.1 A Statistical Model for the Joint Distribution Pr(X,Y)

### 2.6.1 联合分布$Pr(X,Y)$的统计模型

> Suppose in fact that our data arose from a statistical model 

假设事实上我们的数据是从统计模型

$$
Y=f(X)+\epsilon\tag{2.29}
$$

> where the random error $\epsilon$ has $E(\epsilon) = 0$ and is independent of $X$. Note that for this model, $f(x) = E(Y \mid X = x)$, and in fact the conditional distribution $Pr(Y \mid X)$ depends on $X$ only through the conditional mean $f(x)$.

中产生的,其中随机误差$\epsilon$有$E(\epsilon)=0$且与$X$独立．注意到这个模型$f(x)=E(Y\mid X=x)$，而且事实上条件分布$Pr(Y\mid X)$只有通过条件均值$f(X)$才依赖于$X$

> The additive error model is a useful approximation to the truth. For most systems the input–output pairs $(X,Y )$ will not have a deterministic relationship $Y = f(X)$. Generally there will be other unmeasured variables that also contribute to $Y$ , including measurement error. The additive model assumes that we can capture all these departures from a deterministic relationship via the error $\epsilon$.

可加误差模型是一个对真实情况的有用近似．对于大多数系统输入输出对$(X,Y)$没有一个确定的关系$Y=f(X)$．一般地，存在不可测量的变量对$Y$起作用，包括测量误差．可加模型假设我们可以通过误差$\epsilon$从确定关系中捕捉所有的偏移量．

> For some problems a deterministic relationship does hold. Many of the classification problems studied in machine learning are of this form, where the response surface can be thought of as a colored map defined in $\mathbf{R}^p$. The training data consist of colored examples from the map $\\{x_i,g_i\\}$, and the goal is to be able to color any point. Here the function is deterministic, and the randomness enters through the x location of the training points. For the moment we will not pursue such problems, but will see that they can be handled by techniques appropriate for the error-based models.

对于这些问题一个确定的关系确实存在．许多在机器学习中学习的分类问题都是这个形式，其中，响应表面可以认为是定义在$\mathbf{R}^p$的彩色地图．这些训练数据包括从图$\\{x_i,g_i\\}$的彩色样本，目标是对每一点着色．这里函数是确定的，并且随机量进入到训练数据的$x$处．现在我们不去追究这个问题，但是会看到这个可以通过合适的基于误差的模型技巧解决．

> The assumption in (2.29) that the errors are independent and identically distributed is not strictly necessary, but seems to be at the back of our mind when we average squared errors uniformly in our EPE criterion. With such a model it becomes natural to use least squares as a data criterion for model estimation as in (2.1). Simple modifications can be made to avoid the independence assumption; for example, we can have $Var(Y \mid X = x) = \sigma(x)$, and now both the mean and variance depend on $X$. In general the conditional distribution $Pr(Y \mid X)$ can depend on $X$ in complicated ways, but the additive error model precludes these.

在式($\ref{2.29}$)的假设中误差是独立同分布不是严格必要的，但是当我们在EPE准则下对均匀分布的平方误差进行平均时似乎出现在我们脑海后面．对于这样的一个模型，用最小二乘作为模型估计的数据准则变得很自然正如在式($\ref{2.1}$)一样．一些简单的修改可以避免独立性的假设；举个例子，我们有$Var(Y\mid X=x)=\sigma(x)$,并且均值和方差都依赖于$X$．一般地，条件分布$Pr(Y\mid X)$可以以复杂的方式依赖$X$,但是可加误差模型排除了这些．

> So far we have concentrated on the quantitative response. Additive error models are typically not used for qualitative outputs $G$; in this case the target function $p(X)$ is the conditional density $Pr(G\mid X)$, and this is modeled directly. For example, for two-class data, it is often reasonable to assume that the data arise from independent binary trials, with the probability of one particular outcome being $p(X)$, and the other $1 − p(X)$. Thus if $Y$ is the 0–1 coded version of $G$, then $E(Y \mid X = x) = p(x)$, but the variance depends on $x$ as well: $Var(Y \mid X = x) = p(x)[1 − p(x)]$.

至今为止我们集中考虑定量的响应变量．可加误差模型一般不用于定性的输出$G$;这种情形下目标函数$p(X)$是条件密度$Pr(G\mid X)$,这是直接建模的．举个例子，对于两个类别的数据，假设数据来自独立的二元试验总是合理的，特定的一个输出的概率是$p(X)$,另一个为$1-p(X)$．因此，如果$Y$是0-1编码的$G$,然后$E(Y\mid X=x)=p(x)$,但是方差同样依赖$x$:$Var(Y\mid X=x)=p(x)[1-p(x)]$

> ### 2.6.2 Supervised Learning

### 2.6.2 监督学习

> Before we launch into more statistically oriented jargon, we present the function-fitting paradigm from a machine learning point of view. Suppose for simplicity that the errors are additive and that the model $Y = f(X)+\epsilon$ is a reasonable assumption. Supervised learning attempts to learn $f$ by example through a teacher. One observes the system under study, both the inputs and outputs, and assembles a training set of observations ${\cal T} = (x_i,y_i), i = 1, \ldots , N$. The observed input values to the system $x_i$ are also fed into an artificial system, known as a learning algorithm (usually a computer program), which also produces outputs $\hat{f}(x_i)$ in response to the inputs. The learning algorithm has the property that it can modify its input/output relationship $\hat{f}$ in response to differences $y_i-\hat{f}(x_i)$ between the original and generated outputs. This process is known as learning by example. Upon completion of the learning process the hope is that the artificial and real outputs will be close enough to be useful for all sets of inputs likely to be encountered in practice.

在我们推出更多的统计导向的术语之前，从机器学习的观点我们提出函数拟合的范例．为了简化假设误差可加，而且模型为$Y=f(X)+\epsilon$是合理的假设．监督学习试图通过老师(*teacher*)从样本中来学习$f$．在观测系统中，无论输入还是输出，装配观测值为${\cal T}=(x_i,y_i),i=1,\ldots,N$的训练集(*training*)．对系统$x_i$的观测输入馈送到人工系统，被称作学习算法（通常是计算机程序），同时针对输入变量产生输出$\hat{f}(x_i)$．学习算法有根据原始输出和产生的输出之间的差异$y_i-\hat{f}(x_i)$可以修改输入和输出的关系$\hat{f}$的特点．这一过程被称作样本学习（*learning by example*）．完成学习过程的希望是，人工输出与实际输出足够地接近，这样对所有实际可能会出现的输入是有帮助的．

> ### 2.6.3 Function Approximation

### 2.6.3 函数逼近

> The learning paradigm of the previous section has been the motivation for research into the supervised learning problem in the fields of machine learning (with analogies to human reasoning) and neural networks (with biological analogies to the brain). The approach taken in applied mathematics and statistics has been from the perspective of function approximation and estimation. Here the data pairs $\\{x_i,y_i\\}$ are viewed as points in a $(p + 1)$ dimensional Euclidean space. The function $f(x)$ has domain equal to the $p$-dimensional input subspace, and is related to the data via a model such as $y_i=f(x_i)+\epsilon_i$. For convenience in this chapter we will assume the domain is $\mathbf{R}^p$, a $p$-dimensional Euclidean space, although in general the inputs can be of mixed type. The goal is to obtain a useful approximation to $f(x)$ for all $x$ in some region of $\mathbf{R}^p$, given the representations in $\cal T$. Although somewhat less glamorous than the learning paradigm, treating supervised learning as a problem in function approximation encourages the geometrical concepts of Euclidean spaces and mathematical concepts of probabilistic inference to be applied to the problem. This is the approach taken in this book.

上一部分的学习范例已经成为了机器学习领域（类比人类思考）和神经网络（生物类比大脑）领域中监督学习研究的动力．应用数学和统计学的方法已从函数逼近和估计的角度．数据对$\\{x_i,y_i\\}$被看成是$(p+1)$维欧几里得空间的点．函数$f(X)$的定义域为$p$-维输入子空间，通过一个模型如$y_i=f(x_i)+\epsilon_i$关联这些数据．为了方便，本章中假设定义域为$p$维的欧几里得空间$\mathbf{R}^p$，尽管输入可能是混合类型．给定$\cal T$的表示，目标是对于$\mathbf{R}^p$的某些区域里面的所有$x$得到一个对$f(x)$有用的近似．尽管相比较学习的范例不是那么优美，但把监督学习看成函数逼近的问题可以将欧式空间里面的几何概念以及概率推断中的数学概念应用到问题中．这也是本书的方式．

> Many of the approximations we will encounter have associated a set of parameters $\theta$ that can be modified to suit the data at hand. For example, the linear model $f(x) = x^T\beta$ has $θ = \beta$. Another class of useful approximators can be expressed as linear basis expansions

我们将要遇到的许多近似都与一系列系数$\theta$有关，可以修改这些系数去适应手头上数据．举个例子，线性模型$f(x)=x^T\beta$有$\theta=\beta$．另外一种有用的近似可以表示为基本线性展开(*linear basis expansions*)

$$
f_{\theta}(x)=\sum\limits_{k=1}^{K}h_k(x)\theta_k\tag{2.30}
$$
> where the $h_k$ are a suitable set of functions or transformations of the input vector $x$. Traditional examples are polynomial and trigonometric expansions, where for example $h_k$ might be $x_1^2,x_1x_2^2,cos(x_1)$ and so on. We also encounter nonlinear expansions, such as the sigmoid transformation common to neural network models,

其中，$h_k$是适合输入向量$x$的一系列函数或转换关系．传统的例子都是多项式或者三角函数，其中$h_k$可能是$x_1^2,x_1x_2^2,cos(x_1)$以及其它．我们也会遇到非线性的情况，比如说普遍的转换为神经网络模型的S型转换关系

$$
h_k(x)=\dfrac{1}{1+exp(-x^T\beta_k)}\tag{2.31}
$$

> We can use least squares to estimate the parameters $\theta$ in $f_{\theta}$ as we did for the linear model, by minimizing the residual sum-of-squares
> \begin{equation\*}
> RSS(\theta)=\sum\limits_{i=1}^N(y_i-f_{\theta}(x_i))^2
> \end{equation\*}
> as a function of $\theta$. This seems a reasonable criterion for an additive error model. In terms of function approximation, we imagine our parameterized
> function as a surface in $p + 1$ space, and what we observe are noisy realizations from it. This is easy to visualize when $p = 2$ and the vertical coordinate is the output $y$, as in Figure 2.10. The noise is in the output coordinate, so we find the set of parameters such that the fitted surface gets as close to the observed points as possible, where close is measured by the sum of squared vertical errors in $RSS(\theta)$.

当我们处理线性模型，可以用最小二乘来估计$f_{\theta}$中的参数$\theta$，通过最小化下面关于$\theta$的残差平方和得到．
\begin{equation}
RSS(\theta)=\sum\limits_{i=1}^N(y_i-f_{\theta}(x_i))^2
\label{2.32}
\end{equation}
这似乎也是一个可加性误差模型的合理的准则．就函数逼近而言，我们想象我们的含参函数是$p+1$维空间里面的一个平面，而且我们的观测是它的噪声实现．当$p=2$时是很容易可视化的而且此时垂直坐标为输出$y$,正如在图2.10中显示的那样．噪声是在输出的坐标，所以我们徐照一组参数使得拟合后的曲面尽可能接近观测点，其中近是用$RSS(\theta)$中的垂直平方误差来衡量．

![]({{ site.github.url }}/media/learningImg/fig2.10.png)

两个输入的函数的最小二乘拟合．选择$f_{\theta}(x)$的系数使得垂直误差平方和最小．

> For the linear model we get a simple closed form solution to the minimization problem. This is also true for the basis function methods, if the basis functions themselves do not have any hidden parameters. Otherwise the solution requires either iterative methods or numerical optimization.

对于线性模型我们得到该最小化问题的一个简单的近似形式（*closed???*）的解决方法．如果基本函数本身没有任何隐藏的参数，这种方法也适用．否则这种解决方法不是需要迭代的方法就是需要数值优化．

> While least squares is generally very convenient, it is not the only criterion used and in some cases would not make much sense. A more generalprinciple for estimation is *maximum likelihood estimation*. Suppose we have a random sample $y_i,i=1,\ldots,N$ from a density $Pr_{\theta}(y)$ indexed by some
> parameters $\theta$. The log-probability of the observed sample is
> \begin{equation\*}
> L(\theta) = \sum\limits_{i=1}^NlogPr_{\theta}(y_i)
> \end{equation\*}
> The principle of maximum likelihood assumes that the most reasonable values for $\theta$ are those for which the probability of the observed sample is largest. Least squares for the additive error model $Y=f_{\theta}(X)+\epsilon$, with $\epsilon \sim N(0,\sigma^2)$, is equivalent to maximum likelihood using the conditional likelihood
> \begin{equation\*}
> Pr(Y\mid X,\theta) = N(f_{\theta}(X),\sigma^2)
> \end{equation\*}
> So although the additional assumption of normality seems more restrictive, the results are the same. The log-likelihood of the data is
> \begin{equation\*}
> L(\theta)=-\dfrac{N}{2}log(2\pi)-Nlog\sigma-\dfrac{1}{2\sigma^2}\sum\limits_{i=1}^{N}(y_i-f_{\theta}(x_i))^2
> \end{equation\*}
> and the only term involving $\theta$ is the last, which is $RSS(\theta)$ up to a scalar negative multiplier.

尽管最小二乘一般情况下非常方便，但并不是唯一的准则，而且在一些情形下没有意义．一个更一般的估计准则是极大似然估计(*maximum likelihood estimation*)．假设我们有一个指标为$\theta$的密度为$Pr_{\theta}(y)$的随机样本$y_i,i=1,\ldots,N$．观测样本的概率的对数值为
\begin{equation}
L(\theta) = \sum\limits_{i=1}^NlogPr_{\theta}(y_i)
\end{equation}
极大似然的原则是假设最合理的$\theta$值是使得观测样本的概率为最大．可加误差模型$Y=f_{\theta}(X)+\epsilon$的最小二乘，其中$\epsilon \sim N(0,\sigma^2)$,是等价于使用下面条件概率的极大似然
\begin{equation}
Pr(Y\mid X,\theta) = N(f_{\theta}(X),\sigma^2)
\end{equation}
所以尽管正态的附加假设似乎更加限制，但结果是一样的．数据的对数概率值是
\begin{equation}
L(\theta)=-\dfrac{N}{2}log(2\pi)-Nlog\sigma-\dfrac{1}{2\sigma^2}\sum\limits_{i=1}^{N}(y_i-f_{\theta}(x_i))^2
\end{equation}
涉及$\theta$的项是最后一项，是$RSS(\theta)$乘以一个非负标量乘子．

> A more interesting example is the multinomial likelihood for the regression function $Pr(G\mid X)$ for a qualitative output $G$. Suppose we have a model $Pr(G={\cal G}\mid X=x)=p_{k,\theta}(x),k=1,\ldots,K$ for the conditional probability of each class given $X$, indexed by the parameter vector $\theta$. Then the log-likelihood (also referred to as the cross-entropy) is
> \begin{equation\*}
> L(\theta)=\sum\limits_{i=1}^Nlogp_{g_i,\theta}(x_i)
> \end{equation\*}
> and when maximized it delivers values of $\theta$ that best conform with the data in this likelihood sense.

一个更有趣的例子是对于定性输出$G$的回归函数$Pr(G\mid X)$的多项式概率．假设我们有一个模型，给定$X$，每一类的条件概率为$Pr(G={\cal G}\mid X=x)=p_{k,\theta}(x),k=1,\ldots,K$，指标是参数向量$\theta$．然后对数概率（也被称作互熵）为
\begin{equation}
L(\theta)=\sum\limits_{i=1}^Nlogp_{g_i,\theta}(x_i)
\end{equation}
当最大化时对应的$\theta$与在可能性情境中的数据一致．

> ## 2.7 Structured Regression Models

## 2.7 结构化的回归模型

> We have seen that although nearest-neighbor and other local methods focus directly on estimating the function at a point, they face problems in high dimensions. They may also be inappropriate even in low dimensions in cases where more structured approaches can make more efficient use of the data. This section introduces classes of such structured approaches. Before we proceed, though, we discuss further the need for such classes.

尽管最近邻和其它局部的方法都是直接关注在某一点估计函数，在高维遇到困难．甚至在低维下有很多结构化的充分利用数据的方式的情形这些方法也不合适．这个部分介绍了结构化方式的类别．在我们讨论之前，我们更深入地讨论这些类别的需要．

> ### 2.7.1 Difficulty of the Problem

### 2.7.1 问题的困难度

> Consider the RSS criterion for an arbitrary function $f$,
> \begin{equation\*}
> RSS(f)=\sum\limits_{i=1}^{N}(y_i-f(x_i))^2
> \end{equation\*}
> Minimizing (2.37) leads to infinitely many solutions: any function $\hat{f}$ passing through the training points $(x_i,y_i)$ is a solution. Any particular solution chosen might be a poor predictor at test points different from the training points. If there are multiple observation pairs $x_i,y_{i\ell},\ell =1,\ldots,N_i$ at each value of $x_i$, the risk is limited. In this case, the solutions pass through the average values of the $y_{i\ell}$ at each $x_i$; see Exercise 2.6. The situation is similar to the one we have already visited in Section 2.4; indeed, (2.37) is the finite sample version of (2.11) on page 18. If the sample size $N$ were sufficiently large such that repeats were guaranteed and densely arranged, it would seem that these solutions might all tend to the limiting conditional expectation.

对任意函数$f$,考虑RSS准则
\begin{equation}
RSS(f)=\sum\limits_{i=1}^{N}(y_i-f(x_i))^2
\label{2.37}
\end{equation}
对式(\ref{2.37})最小化导致许多解决方法:任意过所有训练点$(x_i,y_i)$的函数$\hat{f}$是一个解．选择的任意特定的解可能是一个在与训练点不同的测试点不是良好的预测．如果在每个$x_i$值有多个观测对$x_i,y_{i\ell},\ell =1,\ldots,N_i$，风险会被限制．在这种情形下，解通过每个$x_i$对应的所有$y_{i\ell}$的平均值，见练习2.6．这种情形类似我们已经在统计判别理论章节中的已经访问的点；当然，(2.37)$是$p18中式(2.11)的有限样本的版本．如果样本规模$N$充分大使得重复是保证和密集排列的，这些解决方案可能都倾向于限制条件期望．

> In order to obtain useful results for finite $N$, we must restrict the eligible solutions to (2.37) to a smaller set of functions. How to decide on the nature of the restrictions is based on considerations outside of the data. These restrictions are sometimes encoded via the parametric representation of $f_{\theta}$, or may be built into the learning method itself, either implicitly or explicitly. These restricted classes of solutions are the major topic of this book. One thing should be clear, though. Any restrictions imposed on f that lead to a unique solution to (2.37) do not really remove the ambiguity caused by the multiplicity of solutions. There are infinitely many possible restrictions, each leading to a unique solution, so the ambiguity has simply been transferred to the choice of constraint.

为了得到有限$N$的有用结果，我们必须限制满足条件的式($\ref{2.37}$)的解到一个小的解的集合．怎样决定限制条件的本质是基于数据之外的一些考虑．这些限制条件经常通过$f_0$的参数表示，或者在学习方法本身里面构建，有隐式也有显式．这些限制的解决方案的类别是本书讨论的重点．一件事应该变得清晰．任何插入到$f$上的限制条件导致式($\ref{2.37}$)的唯一解并不能消除解的多样性带来的模棱两可．有无数种导致唯一解可能的限制条件，所以模棱两可简单地被转换为限制条件的选择．

> In general the constraints imposed by most learning methods can be described as complexity restrictions of one kind or another. This usually means some kind of regular behavior in small neighborhoods of the input space. That is, for all input points $x$ sufficiently close to each other in some metric, $\hat{f}$ exhibits some special structure such as nearly constant, linear or low-order polynomial behavior. The estimator is then obtained by averaging or polynomial fitting in that neighborhood.

一般地，大多数学习方法插入的限制条件可以用一种或其他的限制条件的复杂度来描述．这通常也意味着在输入空间的小邻域的一些规则的行为．这就是，对于在某种度量下充分互相接近的所有输入点$x$，$\hat{f}$展现了一些特殊的结构比如说接近常值，线性或者低次的多项式．然后估计是通过平均或者在邻域多项式拟合得到．

> The strength of the constraint is dictated by the neighborhood size. The larger the size of the neighborhood, the stronger the constraint, and the more sensitive the solution is to the particular choice of constraint. For example, local constant fits in infinitesimally small neighborhoods is no constraint at all; local linear fits in very large neighborhoods is almost a globally linear model, and is very restrictive.

限制的强度由邻域的大小所支配．邻域的规模越大，限制越强，而且解对特定限制的选择也很敏感．举个例子，在无限个邻域内局部常值拟合根本不是限制；在一个比较大的邻域内进行局部线性拟合几乎是全局线性模型，而且限制性是非常强的．

> The nature of the constraint depends on the metric used. Some methods, such as kernel and local regression and tree-based methods, directly specify the metric and size of the neighborhood. The nearest-neighbor methods discussed so far are based on the assumption that locally the function is constant; close to a target input $x_0$, the function does not change much, and so close outputs can be averaged to produce $\hat{f}(x_0)$. Other methods such as splines, neural networks and basis-function methods implicitly define neighborhoods of local behavior. In Section 5.4.1 we discuss the concept of an *equivalent kernel* (see Figure 5.8 on page 157), which describes this local dependence for any method linear in the outputs. These equivalent kernels in many cases look just like the explicitly defined weighting kernels discussed above—peaked at the target point and falling away smoothly away from it.

限制的本质取决于采用的度量．一些像核方法、局部回归和基于树的方法，直接明确了度量以及邻域的规模．至今为止讨论的最近邻方法是基于函数局部为常值的假设；距离目标输入$x_0$越近，函数值不会改变太多，而且可以平均输出得到的$\hat{f}(x_0)$也会很接近．其它像样条、神经网络以及基于函数的方法隐性定义了邻域的局部行为．在5.4.1我们将要讨论等价核(*equivalent kernel*)的概念（见书p157的图5.8），描述了任意输出的线性方法的局部依赖．这些在很多情形下的等价核恰恰像上面讨论过的显式定义的系数核——在目标点达到巅峰然后从该点光滑下降．

> One fact should be clear by now. Any method that attempts to produce locally varying functions in small isotropic neighborhoods will run into problems in high dimensions—again the curse of dimensionality. And conversely, all methods that overcome the dimensionality problems have an associated—and often implicit or adaptive—metric for measuring neighborhoods, which basically does not allow the neighborhood to be simultaneously small in all directions.

现在必须澄清一个事实．任何在等方性的邻域中试图产生局部不同的函数会在高维中遇到问题——再一次是维数的灾难．相反地，所有克服维数问题的方法在测量邻域时有一个对应的——经常是隐式的或者适应的——度量，该度量基本要求是不允许邻域在各个方向都同时小．

> ## 2.8 Classes of Restricted Estimators

## 2.8 限制性估计的类别

> The variety of nonparametric regression techniques or learning methods fall into a number of different classes depending on the nature of the restrictions imposed. These classes are not distinct, and indeed some methods fall in several classes. Here we give a brief summary, since detailed descriptions are given in later chapters. Each of the classes has associated with it one or more parameters, sometimes appropriately called smoothing parameters, that control the effective size of the local neighborhood. Here we describe three broad classes.

非参回归方法的多样性和学习方法的多种类别取决于插入的限制条件的本质．这些类别不是截然不同的，而且确实一些方法变成了几种不同的方法．这里我们进行一个简短的概要，因为详细的描述将在后面章节中给出．每个类都有与之对应的一个或多个参数，有时恰当地称之为光滑化参数，这些参数控制着局部邻域的有效规模．这里我们描述三个大的类别

> ### 2.8.1 Roughness Penalty and Bayesian Methods

### 2.8.1 粗糙惩罚和贝叶斯方法

> Here the class of functions is controlled by explicitly penalizing $RSS(f)$ with a roughness penalty
> \begin{equation\*}
> PRSS(f;\lambda)=RSS(f)+\lambda J(f)
> \end{equation\*}
> The user-selected functional $J(f)$ will be large for functions $f$ that vary too rapidly over small regions of input space. For example, the popular *cubic smoothing spline* for one-dimensional inputs is the solution to the penalized least-squares criterion
> \begin{equation\*}
> PRSS(f;\lambda)=\sum\limits_{i=1}^N(y_i-f(x_i))^2+\lambda \int [f''(x)]^2dx
> \end{equation\*}
> The roughness penalty here controls large values of the second derivative of $f$, and the amount of penalty is dictated by $\lambda \ge 0$. For $\lambda = 0$ no penalty is imposed, and any interpolating function will do, while for $\lambda = \infty$ only functions linear in x are permitted.

这是由显式的惩罚$RSS(f)$和粗糙惩罚控制的函数类
\begin{equation}
PRSS(f;\lambda)=RSS(f)+\lambda J(f)
\end{equation}
对于在输入空间的小邻域变换太快的函数$f$，用户选择的函数$J(f)$会变大．举个例子，著名的关于一维输入的三次光滑样条(*cubic smoothing spline*)的是惩罚最小二乘的准则的解．
\begin{equation}
PRSS(f;\lambda)=\sum\limits_{i=1}^N(y_i-f(x_i))^2+\lambda \int [f''(x)]^2dx
\label{2.39}
\end{equation}
这里的粗糙惩罚控制了$f$的二阶微分大的值，而且惩罚的数量由$\lambda \ge 0$来支配．$\lambda=0$表示没有惩罚，任意插值函数都可以实现，尽管$\lambda=\infty$仅仅当关于$x$的函数为线性才允许．

> Penalty functionals $J$ can be constructed for functions in any dimension, and special versions can be created to impose special structure. For example, additive penalties $J(f)=\sum_{j=1}^pJ(f_j)$ are used in conjunction with additive functions $f(X)=\sum_{j=1}^pf_j(X_j)$ to create additive models with smooth coordinate functions. Similarly, projection pursuit regression models have $f(X)=\sum_{m=1}^Mg_m(\alpha_m^TX)$ for adaptively chosen directions $\alpha_m$, and the functions $g_m$ can each have an associated roughness penalty.

预测函数$J$可以在任意维数下构造函数，而且一些特殊的版本可以用来插入特殊的结构．举个例子，可加性惩罚$J(f)=\sum_{j=1}^pJ(f_j)$与可加性函数$f(X)=\sum_{j=1}^pf_j(X_j)$联合使用去构造可加的光滑坐标函数的模型．类似地，投射追踪回归(*regression pursuit regression*)模型有$f(X)=\sum_{m=1}^Mg_m(\alpha_m^TX)$，其中$\alpha_m$为适应地选择的方向，函数$g_m$的每一个有对应的粗糙惩罚．

> Penalty function, or regularization methods, express our prior belief that the type of functions we seek exhibit a certain type of smooth behavior, and indeed can usually be cast in a Bayesian framework. The penalty $J$ corresponds to a log-prior, and $PRSS(f;\lambda)$ the log-posterior distribution, and minimizing $PRSS(f;\lambda)$ amounts to finding the posterior mode. We discuss roughness-penalty approaches in Chapter 5 and the Bayesian paradigm in Chapter 8.

惩罚函数，或者说正则(*regularization*)方法,表达了我们最初的信仰——我们寻找的函数类型展现了一个确定的光滑行为的类型，而且确实可以套进贝叶斯的模型中．惩罚$J$对应先验概率，$PRSS(f;\lambda)$为后验分布，最小化$PRSS(f;\lambda)$意味着寻找后验模式．我们将在第5章中讨论粗糙惩罚方法并在第8章中讨论贝叶斯范式．

> ### 2.8.2 Kernel Methods and Local Regression

### 2.8.2 核方法和局部回归

> These methods can be thought of as explicitly providing estimates of the regression function or conditional expectation by specifying the nature of the local neighborhood, and of the class of regular functions fitted locally. The local neighborhood is specified by a kernel function $K_{\lambda}(x_0,x)$ which assigns weights to points $x$ in a region around $x_0$ (see Figure 6.1 on page 192). For example, the Gaussian kernel has a weight function based on the Gaussian density function
> \begin{equation\*}
> K_{\lambda}(x_0,x)=\frac{1}{\lambda}exp[-\frac{\mid \mid x-x_0\mid \mid ^2}{2\lambda}]
> \end{equation\*}
> and assigns weights to points that die exponentially with their squared Euclidean distance from $x_0$. The parameter $\lambda$ corresponds to the variance
> of the Gaussian density, and controls the width of the neighborhood. The simplest form of kernel estimate is the Nadaraya–Watson weighted average
> \begin{equation\*}
> \hat{f}(x_0)=\dfrac{\sum_{i=1}{N}K_{\lambda}(x_0,x_i)y_i}{\sum_{i=1}^NK_{\lambda}(x_0,x_i)}
> \end{equation\*}
> In general we can define a local regression estimate of $f(x_0)$ as $f_{\hat{\theta}}(x_0)$, where $\hat{\theta}$ minimizes
> \begin{equation\*}
> RSS(f_{\theta},x_0)=\sum\limits_{i=1}^NK_{\lambda}(x_0,x_i)(y_i-f_{\theta}(x_i))^2
> \end{equation\*}
> and $f_{\theta}$ is some parameterized function, such as a low-order polynomial.
> Some examples are:
	- $f_{\theta}(x)=\theta_0$, the constant function; this results in the Nadaraya–Watson estimate in (2.41) above.
	- $f_{\theta}(x)=\theta_0+\theta_1x$ gives the popular local linear regression model.

这些方法被认为是通过确定局部邻域的本质来显式提供回归函数的估计或条件期望，并且属于局部拟合得很好的规则函数类．局部邻域由核函数(*kernel function*)$K_{\lambda}(x_0,x)$来确定，核函数对$x_0$附近的区域$x$赋予系数（见p192的图6.1），举个例子，高斯核有一个基于高斯密度函数的系数函数
\begin{equation}
K_{\lambda}(x_0,x)=\frac{1}{\lambda}exp[-\frac{\mid \mid x-x_0\mid \mid ^2}{2\lambda}]
\end{equation}
并且赋予那些到$x_0$的欧氏距离平方呈指数衰减的点系数．系数$\lambda$对应高斯密度的方差，并且控制着邻域的宽度．核估计的最简单形式是Nadaraya-Watson的系数平均
\begin{equation}
\hat{f}(x_0)=\dfrac{\sum_{i=1}{N}K_{\lambda}(x_0,x_i)y_i}{\sum_{i=1}^NK_{\lambda}(x_0,x_i)}
\label{2.41}
\end{equation}
一般地，我们可以定义$f(x_0)$的局部回归估计$f_{\hat{\theta}}(x_0)$，其中$\hat{\theta}$使下式最小化
\begin{equation}
RSS(f_{\theta},x_0)=\sum\limits_{i=1}^NK_{\lambda}(x_0,x_i)(y_i-f_{\theta}(x_i))^2
\label{2.42}
\end{equation}
并且$f_{\theta}$为含参函数，比如低阶的多项式．有如下例子：
- 常值函数$f_{\theta}(x)=\theta_0$，结果在上面式$\eqref{2.41}$中的Nadaraya-Watson估计．
- $f_{\theta}(x)=\theta_0+\theta_1x$给出最受欢迎的局部线性回归模型

最近邻方法可以看成是某个更加依赖数据的度量的核方法．确实，$k$-最近邻的度量为
\begin{equation}
K_k(x,x_0)=I(\mid \mid x-x_0\mid \mid \le \mid \mid x_{(k)}-x_0\mid \mid )
\end{equation}
其中$x_{(k)}$是训练观测值中离$x_0$的距离排名第$k$个的观测，而且$I(S)$是集合$S$的指标函数．

> These methods of course need to be modified in high dimensions, to avoid the curse of dimensionality. Various adaptations are discussed in Chapter 6.

为了避免维数的灾难，这些方法在高维情形下要做修正．将在第6章讨论不同的改编．

> ### 2.8.3 Basis Functions and Dictionary Methods

### 2.8.3 基函数和字典方法

This class of methods includes the familiar linear and polynomial expansions, but more importantly a wide variety of more flexible models. The model for $f$ is a linear expansion of basis functions
\begin{equation\*}
f_{\theta}(x)=\sum\limits_{m=1}^M\theta_mh_m(x)
\end{equation\*}
where each of the $h_m$ is a function of the input $x$, and the term linear here refers to the action of the parameters $\theta$. This class covers a wide variety of methods. In some cases the sequence of basis functions is prescribed, such as a basis for polynomials in $x$ of total degree $M$.

这个方法的类别包括熟悉的线性和多项式展开式，但是最重要的有多种多样的更灵活的模型．这些关于$f$的模型是基本函数的线性展开
\begin{equation}
f_{\theta}(x)  = \sum\limits_{m=1}^M\theta_mh_m(x)
\label{2.43}
\end{equation}
其中每个$h_m$是输入$x$的函数，并且其中的线性项与参数$\theta$的行为有关．这个类别包括很多不同的方法．一些情形下基函数的顺序是规定的，如关于$x$的阶为$M$的多项式基函数．

> For one-dimensional $x$, polynomial splines of degree $K$ can be represented by an appropriate sequence of $M$ spline basis functions, determined in turn by $M − K$ *knots*. These produce functions that are piecewise polynomials of degree $K$ between the knots, and joined up with continuity of degree $K − 1$ at the knots. As an example consider linear splines, or piecewise linear functions. One intuitively satisfying basis consists of the functions $b_1(x) = 1, b_2(x) = x$, and $b_{m+2}(x) = (x − t_m)_+, m = 1, . . . , M − 2$, where $t_m$ is the $m$th knot, and $z_+$ denotes positive part. Tensor products of spline bases can be used for inputs with dimensions larger than one (see Section 5.2, and the CART and MARS models in Chapter 9.) The parameter $\theta$ can be the total degree of the polynomial or the number of knots in the case of splines.

对于一维$x$,阶为$K$的多项式样条可以通过$M$个样条基函数的合理顺序来表示，反过来由$M-K$个结点（*knots*）来确定．在结点中间产生阶为$K$的分段多项式函数，并且在每个结点处由$K-1$阶连续函数来连接．考虑线性样条的例子，或者分段线性函数．一个直观满足条件的基包含函数$b_1(x)=1,b_2(x)=x,b_{m+2}(x)=(x-t_m)_{+},m=1,\ldots,M-2$,其中$t_m$为第$m$个结点，并且$z_{+}$表示正值部分．样条基的张量积可以用于维数大于一的输入（见5.2节，第9章的CRAT和MARS模型）．系数$\theta$可以是多项式的阶之和，或者是样条情形中的结点．

> Radial basis functions are symmetric p-dimensional kernels located at particular centroids,
> \begin{equation\*}
> f_{\theta}(x)=\sum\limits_{m=1}^MK_{\lambda_m}(\mu_m,x)\theta_m
> \end{equation\*}
> for example, the Gaussian kernel $K_{\lambda}(\mu,x)=e^{-\mid \mid x-\mu\mid \mid ^2/2\lambda}$ is popular

放射基函数(*Radial basis functions*)是在质心处对称的$p$维核，
\begin{equation}
f_{\theta}(x)=\sum\limits_{m=1}^MK_{\lambda_m}(\mu_m,x)\theta_m
\end{equation}
举个例子，高斯核$K_{\lambda}(\mu,x)=e^{-\mid \mid x-\mu\mid \mid ^2/2\lambda}$是受欢迎的．

> Radial basis functions have centroids $\mu_m$ and scales $\lambda_m$ that have to be determined. The spline basis functions have knots. In general we would like the data to dictate them as well. Including these as parameters changes the regression problem from a straightforward linear problem to a combinatorially hard nonlinear problem. In practice, shortcuts such as greedy algorithms or two stage processes are used. Section 6.7 describes some such approaches.

放射基函数有质心$\mu_m$和尺寸$\lambda_m$，必须要确定这两个值．样条基函数有结点．一般地，我们也想要这些数据去支配它们．把它们作为系数将回归问题从径直的线性问题转换为困难的组合非线性问题．在实际中，贪心算法或两步过程是经常使用的捷径．6.7节中描述了这些方式．

> A single-layer feed-forward neural network model with linear output weights can be thought of as an adaptive basis function method. The model has the form
> \begin{equation\*}
> f_{\theta}(x)=\sum\limits_{m=1}^M\beta_m\sigma(\alpha_m^Tx+b_m)
> \end{equation\*}
> where $\sigma(x)=1/(1+e^{-x})$ is known as the activation function. Here, as in the projection pursuit model, the directions $\alpha_m$ and the bias terms $b_m$ have to be determined, and their estimation is the meat of the computation. Details are give in Chapter 11.

单层的向前反馈的有线性输出系数的神经网络模型可以认为是一种改编的基函数方法．模型有如下形式
\begin{equation}
f_{\theta}(x)=\sum\limits_{m=1}^M\beta_m\sigma(\alpha_m^Tx+b_m)
\label{2.46}
\end{equation}
其中，$\sigma(x)=1/(1+e^{-x})$被称作活跃(*activation*)函数．作为投射追踪模型，方向$\alpha_m$以及偏差项$b_m$必须要确定，而且他们的估计是计算的食物．将在第11章给出细节．

> These adaptively chosen basis function methods are also known as dictionary methods, where one has available a possibly infinite set or dictionary $\cal D$ of candidate basis functions from which to choose, and models are built up by employing some kind of search mechanism.

这些选择的自适应基函数的方法也被称作字典方法，其中有可用的无限集合或者包含可选的基函数的字典$\cal D$，而且通过应用其它的搜索机构来建立模型．

> ## 2.9 Model Selection and the Bias-Variance Tradeoff

## 2.9 模型选择和偏差-方差的权衡

> All the models described above and many others discussed in later chapters have a smoothing or complexity parameter that has to be determined:
- the multiplier of the penalty term;
- the width of the kernel;
- or the number of basis functions.
  In the case of the smoothing spline, the parameter $\lambda$ indexes models ranging from a straight line fit to the interpolating model. Similarly a local degreem polynomial model ranges between a degree-m global polynomial when the window size is infinitely large, to an interpolating fit when the window size shrinks to zero. This means that we cannot use residual sum-of-squares on the training data to determine these parameters as well, since we would always pick those that gave interpolating fits and hence zero residuals. Such a model is unlikely to predict future data well at all.

上面讨论的所有模型以及其他将要在后面章节讨论的模型都有一个光滑或复杂性参数需要确定
- 惩罚项的乘子
- 核的宽度
- 基函数的个数

在光滑样条的情形下，参数$\lambda$为指标的模型从直线拟合到插值模型．类似地，局部阶为$m$的多项式模型从当观察的窗口无限大时阶为$m$的全局多项式到当观察的窗口收缩至零时的插值拟合．这意味着我们不能用训练数据的残差平方和来确定这些参数，因为我们总是选择插值拟合从而0残差．这样的一个模型不可能去预测未来的数据．

> The k-nearest-neighbor regression fit $\hat{f}_k(x_0)$ usefully illustrates the competing forces that effect the predictive ability of such approximations. Suppose the data arise from a model $Y = f(X) + \epsilon$, with $E(\epsilon) = 0$ and $Var(\epsilon) = \sigma^2$. For simplicity here we assume that the values of $x_i$ in the sample are fixed in advance (nonrandom). The expected prediction error at $x_0$, also known as test or generalization error, can be decomposed:
$$
\begin{align\*}
EPE_k(x_0)&=E[(Y-\hat{f}_k(x_0))^2\mid X=x_0]\notag\\
&=\sigma^2+[Bias^2(\hat{f}_k(x_0))+Var_{\cal T}(\hat{f}_k(x_0))]\\
&=\sigma^2+[f(x_0)-\frac{1}{k}\sum\limits_{\ell=1}^kf(x_{(\ell)})]^2+\frac{\sigma^2}{k}
\end{align\*}
$$
The subscripts in parentheses ($(\ell)$) indicate the sequence of nearest neighbors to $x_0$.

$k$-最近邻回归有效地拟合$\hat{f}_k(x_0)$说明了影响这些近似预测能力的竞争力．假设数据来自模型$Y=f(X)+\epsilon，E(\epsilon)=0,Var(\epsilon)=\sigma^2$．为了简化，我们假设样本中的值$x_i提前修正好（不是随机）$．在$x_0$处的预测误差期望，也被称为测试（*test*）或规范化(*generalization*)误差，可按如下方式分解：
$$
\begin{align}
EPE_k(x_0)&=E[(Y-\hat{f}_k(x_0))^2\mid X=x_0]\notag\\
&=\sigma^2+[Bias^2(\hat{f}_k(x_0))+Var_{\cal T}(\hat{f}_k(x_0))]\\
&=\sigma^2+[f(x_0)-\frac{1}{k}\sum\limits_{\ell=1}^kf(x_{(\ell)})]^2+\frac{\sigma^2}{k}
\end{align}
$$
带括号的下标$(\ell)$表示$x_0$的最近邻的顺序．

> There are three terms in this expression. The first term $\sigma^2$ is the irreducible error—the variance of the new test target—and is beyond our control, even if we know the true $f(x_0)$.

在展开式中有三项．第一项$\sigma^2$是不可约减的(*irreducible*)误差——是新测试目标点的方差——而且我们不能够控制，即使我们知道真值$f(x_0)$

> The second and third terms are under our control, and make up the mean squared error of $\hat{f}_k(x_0)$ in estimating $f(x_0)$, which is broken down into a bias component and a variance component. The bias term is the squared difference between the true mean $f(x_0)$ and the expected value of the estimate—$[E_{\cal T}(\hat{f}_k(x_0))-f(x_0)]^2$—where the expectation averages the randomness in the training data. This term will most likely increase with $k$, if the true function is reasonably smooth. For small $k$ the few closest neighbors will have values $f(x_{(\ell)})$ close to $f(x_0)$, so their average should be close to $f(x_0)$. As $k$ grows, the neighbors are further away, and then anything can happen.

第二项和第三项在我们的控制范围内，并且弥补了估计$f(x_0)$时$\hat{f}_k(x_0)$的均方误差(*mean squared error*)，均方误差经常被分解成偏差部分和方差部分．偏差项是真值均值$f(x_0)$与估计的期望值之间差异的平方——$[E_{\cal T}(\hat{f}_k(x_0))-f(x_0)]^2$——其中期望平均了训练数据中的随机量．如果真实的函数相当地光滑，这一项很可能随着$k$的增加而增加．对于较小的$k$值和较少的近邻点会导致值$f(x_{(\ell)})$与$f(x_0)$很接近，所以它们的平均应该距离$f(x_0)$很近．当$k$值增加，邻域远离，然后任何事情都可能发生．

> The variance term is simply the variance of an average here, and decreases as the inverse of k. So as k varies, there is a bias–variance tradeoff.

这里的方差项是方差的简单平均，随着$k$变大会变小因为$k$的倒数关系．所以当$k$变化，会有偏差——误差的权衡(*bias-variance tradeoff*)

> More generally, as the model complexity of our procedure is increased, the variance tends to increase and the squared bias tends to decreases. The opposite behavior occurs as the model complexity is decreased. For $k$-nearest neighbors, the model complexity is controlled by $k$.

更一般地，随着我们过程的模型复杂度(*model complexity*)增加，方差趋于上升，偏差区域下降．当模型复杂度下降时会发生相反的行为．对于$k$-最近邻，模型复杂度由$k$来控制．

> Typically we would like to choose our model complexity to trade bias off with variance in such a way as to minimize the test error. An obvious estimate of test error is the *training error* $\frac{1}{N}\sum_i(y_i-\hat{y}_i)^2$. Unfortunately training error is not a good estimate of test error, as it does not properly account for model complexity.

一般地，我们选择模型复杂度使偏差与方差达到均衡从而使测试误差最小．测试误差的显然的一个估计是训练误差(*training error*)$\frac{1}{N}\sum_i(y_i-\hat{y}_i)^2$．不幸的是，训练误差不是测试误差的良好估计，因为这个不是模型复杂度合适的说明．

![]({{ site.github.url }}/media/learningImg/fig2.11.png)

图2.11：测试和训练错误随模型复杂度变化

> Figure 2.11 shows the typical behavior of the test and training error, as model complexity is varied. The training error tends to decrease whenever we increase the model complexity, that is, whenever we fit the data harder. However with too much fitting, the model adapts itself too closely to the training data, and will not generalize well (i.e., have large test error). In that case the predictions $\hat{f}(x_0)$ will have large variance, as reflected in the last term of expression (2.46). In contrast, if the model is not complex enough, it will underfit and may have large bias, again resulting in poor generalization. In Chapter 7 we discuss methods for estimating the test error of a prediction method, and hence estimating the optimal amount of model complexity for a given prediction method and training set.

图2.11显示了不同模型复杂度下测试和训练误差的典型表现．无论何时增加模型复杂度训练误差都趋于下降，这也就是，无论何时当我们拟合数据得更加困难．然而过度的拟合，模型会自适应使得更加接近训练数据，但不能很好的推广（比如说，有大的测试误差）．在预测值$\hat{f}(x_0)$有大方差的情形下，正如在式$\eqref{2.46}$最后一项显示的那样．相反的，如果模型不是特别的复杂，会拟合不足（*underfit*）且有大的偏差，再一次导致不能很好地推广．在第7章中，我们考虑估计预测方法测试误差的方法，并因此对于给定的预测方法和训练集估计最优的模型复杂度．

> ## Bibliographic Notes

## 文献笔记

> Some good general books on the learning problem are Duda et al. (2000), Bishop (1995),(Bishop, 2006), Ripley (1996), Cherkassky and Mulier (2007) and Vapnik (1996). Parts of this chapter are based on Friedman (1994b).

学习问题上的一些好的综合书籍是Duda等人（2000），Bishop(1995),(Bishop(2006)),Ripley(1996),Cherkassky 和Mulier（2007）和Vapnik(1996)的工作．部分章节是根据 Friedman (1994b)．



