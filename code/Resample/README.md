# Resampling Method

## Cross-Validation

采用ISLR包中的Auto数据集，目的是拟合mpg和horsepower之间的关系，它们之间的函数图像如下所示

![](mpg.png)

选择多项式拟合，计算每个阶数下的交叉验证误差，如下图所示

![](cv.png)

图中采用分别采用了LOOCV和10折交叉验证，具体代码见[cv.R](cv.R).

## Bootstrap

采用ISLR包中的Portfolio数据集，有100个两种资产收益的观测值，现需要构造投资组合，使得风险最小，所以目标是确定资产的比例。

采用bootstrap方法对该比例进行了估计，及其标准差。下图是R=1000次bootstrap样本的结果

![](bootstrap.png)

具体代码见[bootstrap.R](bootstrap.R)
