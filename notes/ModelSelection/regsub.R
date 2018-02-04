## use leaps package to do subset regression
data(swiss)
a<-regsubsets(as.matrix(swiss[,-1]),swiss[,1])
summary(a)
b<-regsubsets(Fertility~.,data=swiss,nvmax = 3)
summary(b)

coef(a, 1:3)
vcov(a, 3)
