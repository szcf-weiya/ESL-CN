from sklearn.ensemble import RandomForestRegressor
from sklearn.ensemble import GradientBoostingRegressor
from sklearn.linear_model import Lasso
import numpy as np
from matplotlib import pyplot as plt


def genXY(N, p):
    X = np.random.rand(N*p).reshape(N, p)
    y = 10 * np.exp(-2*np.sum(X[:,0:5]**2, axis = 1)) + np.sum(X[:,5:35], axis = 1) + np.random.normal(0, 1.3, N)
    return X, y

def mse(regr):
    X_test, y_test = genXY(500, 100)
    y_pred = regr.predict(X_test)
    return np.mean((y_pred - y_test)**2)

def ISLE(X, y, eta = 0.5, nu = 0.1, M = 10, model = "GB", lam = 0.1):
    N = len(X)
    # induce basis functions via GB or RF
    if model == "GB":
        regr = GradientBoostingRegressor(n_estimators=M, learning_rate=0.01) #array shape (M, 1)
        regr.fit(X, y)
        bs = regr.estimators_[:,0]
    else:
        regr = RandomForestRegressor(n_estimators=M) # list
        regr.fit(X, y)
        bs = regr.estimators_
    
    # initialize f0
    f_hat = np.repeat(np.mean(y), N)
    for m in range(M):
        Sm_idx = np.random.choice(N, int(eta*N), replace = False)
        bs[m].fit(X[Sm_idx], y[Sm_idx] - f_hat[Sm_idx])
        f_hat = f_hat + nu * bs[m].predict(X)
        
    # fit lasso path
    lasso = Lasso(alpha = lam)
    Tx = np.empty([N, M])
    for i in range(M):
        Tx[:,i] = bs[i].predict(X)
    lasso.fit(Tx, y)
    nT = sum(lasso.coef_ != 0)
    return bs, lasso, nT

def mse_isle(bs, lasso):
    M = len(bs)
    X_test, y_test = genXY(500, 100)
    Tx = np.empty([len(X_test), M])
    for i in range(M):
        Tx[:, i] = bs[i].predict(X_test)
    y_pred = lasso.predict(Tx)
    return np.mean((y_pred - y_test)**2)

if __name__ == '__main__':
    N = 1000
    p = 100
    X, y = genXY(1000,100)
    # random forest
    rf = RandomForestRegressor(n_estimators=2500)
    rf.fit(X,y)
    rf_mse = mse(rf)
    res = np.empty([4, 10])
    nT = np.empty([4, 10])
    for i in range(10):
        gbm1 = GradientBoostingRegressor(n_estimators=250*(1+i), learning_rate=0.01, subsample=1)
        gbm1.fit(X, y)
        gbm2 = GradientBoostingRegressor(n_estimators=250*(1+i), learning_rate=0.01, subsample=0.1)
        gbm2.fit(X, y)
        res[0, i] = mse(gbm1)
        res[1, i] = mse(gbm2)
        nT[0, i] = 250 * (1 + i)
        nT[1, i] = 250 * (1 + i)
    lams = [1, 0.1, 0.01, 0.005, 0.001, 0.0005, 0.0001, 0.00005, 0.00001, 0.000001]
    for i in range(10):
        bs1, lasso1, nT1 = ISLE(X, y, model = "GB", M = 2500, lam = lams[i])
        bs2, lasso2, nT2 = ISLE(X, y, model = "RF", M = 2500, lam = lams[i])
        nT[2, i] = nT1
        nT[3, i] = nT2
        res[2, i] = mse_isle(bs1, lasso1)
        res[3, i] = mse_isle(bs2, lasso2)
    
    np.savetxt("res.txt", res)
    plt.figure(figsize=(16, 14))
    labels = ['GBM (1, 0.01)', 'GBM (0.1, 0.01)', 'ISLE GB', 'ISLE RF']
    for x_arr, y_arr, label in zip(nT, res, labels):
        plt.plot(x_arr, y_arr, label = label)
    plt.axhline(y=rf_mse, linestyle = '--', label = "Random Forest")
    plt.xlabel("Number of Trees")
    plt.ylabel("Mean Squared Error")
    plt.legend()
    plt.savefig('res.png')
    plt.show()