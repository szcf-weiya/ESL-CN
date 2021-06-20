# ESL-CN 

[![gh-pages](https://github.com/szcf-weiya/ESL-CN/actions/workflows/gh-pages.yml/badge.svg)](https://github.com/szcf-weiya/ESL-CN/actions/workflows/gh-pages.yml)
[![Gitter](https://badges.gitter.im/ESL-CN/community.svg)](https://gitter.im/ESL-CN/community?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

The Elements of Statistical Learning (ESL) 的中文翻译、代码实现及其习题解答。

## 习题解答

- [![](https://img.shields.io/badge/solution-chapter%202-blue.svg)](https://github.com/szcf-weiya/ESL-CN/milestone/7) 
- [![](https://img.shields.io/badge/solution-chapter%203-blue.svg)](https://github.com/szcf-weiya/ESL-CN/milestone/2)
- [![](https://img.shields.io/badge/solution-chapter%204-blue.svg)](https://github.com/szcf-weiya/ESL-CN/milestone/12)
- [![](https://img.shields.io/badge/solution-chapter%205-blue.svg)](https://github.com/szcf-weiya/ESL-CN/milestone/6)
- [![](https://img.shields.io/badge/solution-chapter%206-blue.svg)](https://github.com/szcf-weiya/ESL-CN/milestone/14)
- [![](https://img.shields.io/badge/solution-chapter%207-blue.svg)](https://github.com/szcf-weiya/ESL-CN/milestone/4)
- [![](https://img.shields.io/badge/solution-chapter%208-blue.svg)](https://github.com/szcf-weiya/ESL-CN/milestone/17)
- [![](https://img.shields.io/badge/solution-chapter%209-blue.svg)](https://github.com/szcf-weiya/ESL-CN/milestone/15)
- [![](https://img.shields.io/badge/solution-chapter%2010-blue.svg)](https://github.com/szcf-weiya/ESL-CN/milestone/1)
- [![](https://img.shields.io/badge/solution-chapter%2011-blue.svg)](https://github.com/szcf-weiya/ESL-CN/milestone/18)
- [![](https://img.shields.io/badge/solution-chapter%2012-blue.svg)](https://github.com/szcf-weiya/ESL-CN/milestone/3)
- [![](https://img.shields.io/badge/solution-chapter%2013-blue.svg)](https://github.com/szcf-weiya/ESL-CN/milestone/19)
- [![](https://img.shields.io/badge/solution-chapter%2014-blue.svg)](https://github.com/szcf-weiya/ESL-CN/milestone/5)
- [![](https://img.shields.io/badge/solution-chapter%2015-blue.svg)](https://github.com/szcf-weiya/ESL-CN/milestone/16)
- [![](https://img.shields.io/badge/solution-chapter%2016-blue.svg)](https://github.com/szcf-weiya/ESL-CN/milestone/21)
- [![](https://img.shields.io/badge/solution-chapter%2017-blue.svg)](https://github.com/szcf-weiya/ESL-CN/milestone/20)
- [![](https://img.shields.io/badge/solution-chapter%2018-blue.svg)](https://github.com/szcf-weiya/ESL-CN/milestone/13)


## 代码实现

1. [EM 算法模拟](code/EM/em.R)
2. [朴素贝叶斯进行文本挖掘](code/NaiveBayes)
3. [CART实现](code/CART)
4. [AdaBoost实现R&Julia](code/boosting)
5. [MARS实现](code/MARS)
6. [RBM](code/rbm)，或者可以查看 [Jupyter Notebook](http://nbviewer.jupyter.org/github/szcf-weiya/ESL-CN/blob/master/code/rbm/RBM.ipynb)
7. [Gibbs](code/Gibbs)
8. [Self-organized Map](code/SOM)
9. [kernel estimation](code/nonParametrics)
10. [Resampling Method](code/Resampling): 包括交叉验证(cv)和自助法(bootstrap)
11. [Neural Network](code/nn): [Simple Classification](http://nbviewer.jupyter.org/github/szcf-weiya/TFnotes/blob/master/nn/nn.ipynb)，[Implementation for Section 11.6](http://nbviewer.jupyter.org/github/szcf-weiya/ESL-CN/blob/master/code/nn/Implementation-for-Section-6.ipynb)
12. [高维问题例子](code/HighDim): [例18.1的模拟](http://rmd.hohoweiya.xyz/ex18_1.nb.html)
## 文献统计
| Chap | AOS  | JASA | JRSS | BKA  | percentage |
| ---- | ---- | ---- | ---- | ---- | ---------- |
| 3| 1|0|3|0|4/14|
| 4| 0|0|0|0|0/7|
|5| 0|0|0|1|1/11|
| 7|    4|  6| 2  |0| 12/23|
|8|1|4|1|0|6/17|
|9|0|1|0|0|1/11|
|10|9|0|0|0|9/25|
|12|2|1|1|0|4/14|
|14|1|1|0|0|2/14|
|15|1|0|0|0|1/8|
| 17   | 0    | 0    | 0    | 0    | 0/12       |
| 18   | 1    | 3    | 4    | 0    | 8/21       |
| ---- | ---- | ---- | ---- | ---- | ----       |

<!--
## 进度
更新于2017.03.13

### 未完成章节
- chap03: 3.7-3.9;
- chap05: 5.6-5.9;
- chap06: 6.7-6.9;
- chap08: 8.8-8.9;
- chap10: 10.7-10.14;
- chap11: 11.7-11.10;
- chap12: 12.3-12.7;
- chap13: 13.2-13.5;
- chap14: 14.4-14.10;
- chap15: 15.2-15.4;
- chap16: 16.1-16.3;
- chap18: 18.1-18.8;


### 详细情况
- [x] 1    2016.07.26
- [x] 2.1  2016.08.01
- [x] 2.2  2016.08.01
- [x] 2.3  2016.08.01
- [x] 2.4  2016.08.01
- [x] 2.5  2016.08.01
- [x] 2.6  2016.08.01
- [x] 2.7  2016.08.01
- [x] 2.8  2016.08.01
- [x] 2.9  2016.08.01
- [x] 3.1  2016.08.02
- [x] 3.2  2016.08.03
- [x] 3.3  2016.08.05
- [x] 3.4  2016.09.30:2016.10.14
- [x] 3.5  2016.10.14:2016.10.21
- [x] 3.6  2016.10.21
- [ ] 3.7
- [ ] 3.8
- [ ] 3.9
- [x] 4.1  2016.12.06
- [x] 4.2  2016.12.06
- [x] 4.3  2016.12.09:2016.12.10
- [x] 4.4  2016.12.09:2016.12.15
- [x] 4.5  2016.12.15
- [x] 5.1  2017.01.28
- [x] 5.2  2017.02.08:2017:02:16
- [x] 5.3  2017.02.16
- [x] 5.4  2017.02.16
- [ ] 5.5
- [ ] 5.6
- [ ] 5.7
- [ ] 5.8
- [ ] 5.9
- [x] 6.1  2017.02.27:2017.02.28
- [x] 6.2  2017.03.01
- [x] 6.3  2017.03.01:2017.03.02
- [x] 6.4  2017.03.03
- [x] 6.5  2017.03.04
- [x] 6.6  2017.03.04
- [ ] 6.7
- [ ] 6.8
- [ ] 6.9
- [x] 7.1  2017.01.28
- [x] 7.2  2017.02.18
- [x] 7.3  2017.02.18
- [x] 7.4  2017.02.18
- [x] 7.5  2017.02.18
- [x] 7.6  2017.02.18
- [x] 7.7  2017.02.18:2017.02.19
- [x] 7.8  2017.02.19
- [x] 7.9  2017.02.19
- [x] 7.10 2017.02.17:2017.02.18
- [x] 7.11 2017.02.19
- [x] 7.12 2017.02.20
- [x] 8.1  2017.01.28
- [x] 8.2  2017.01.31
- [x] 8.3  2017.02.01
- [x] 8.4  2017.02.01
- [x] 8.5  2016.12.20 & 2017.02.01:2017.02.03
- [x] 8.6  2016.02.03
- [x] 8.7  2016.02.03
- [ ] 8.8
- [ ] 8.9
- [x] 9.1  2017.02.04
- [x] 9.2  2017.02.05
- [x] 9.3  2017.03.12
- [x] 9.4  2017.03.13
- [x] 9.5  2017.03.13
- [x] 9.6  2017.03.13
- [x] 9.7  2017.03.13
- [x] 10.1 2017.02.06
- [x] 10.2 2017.02.06
- [x] 10.3 2017.02.06
- [x] 10.4 2017.02.06
- [x] 10.5 2017.02.06
- [x] 10.6 2017.02.06
- [ ] 10.7
- [ ] 10.8
- [ ] 10.9
- [ ] 10.10
- [ ] 10.11
- [ ] 10.12
- [ ] 10.13
- [ ] 10.14
- [x] 11.1 2017.01.28
- [x] 11.2 2017.02.07
- [x] 11.3 2017.02.07
- [x] 11.4 2017.02.07
- [x] 11.5 2017.02.07
- [x] 11.6 2017.02.07
- [ ] 11.7
- [ ] 11.8
- [ ] 11.9
- [ ] 11.10
- [x] 12.1 2016.12.09
- [x] 12.2 2016.12.19:2016.12.20
- [ ] 12.3
- [ ] 12.4
- [ ] 12.5
- [ ] 12.6
- [ ] 12.7
- [x] 13.1 2017.01.28
- [ ] 13.2
- [ ] 13.3
- [ ] 13.4
- [ ] 13.5
- [x] 14.1 2017.02.20
- [x] 14.2 2017.02.20:2017.02.22
- [x] 14.3 2017.02.22:2017.02.23 &
- [ ] 14.4
- [ ] 14.5
- [ ] 14.6
- [ ] 14.7
- [ ] 14.8
- [ ] 14.9
- [ ] 14.10
- [x] 15.1 2017.01.28
- [ ] 15.2
- [ ] 15.3
- [ ] 15.4
- [ ] 16.1
- [ ] 16.2
- [ ] 16.3
- [x] 17.1 2017.02.24
- [x] 17.2 2017.02.24
- [x] 17.3 2017.02.24:2017.02.25
- [x] 17.4 2017.02.25:2017.02.26
- [ ] 18.1
- [ ] 18.2
- [ ] 18.3
- [ ] 18.4
- [ ] 18.5
- [ ] 18.6
- [ ] 18.7
- [ ] 18.8
-->
