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

def ISLE(X, y, eta = 0.5, nu = 0.1, M = 10, model = "GB", n_est = 500):
    N = len(X)
    # step 1
    f_hat = np.repeat(np.mean(y), N)
    bs = [None] * M
    for m in range(M):
        Sm_idx = np.random.choice(N, int(eta*N), replace = False)
        if model == "GB":
            bs[m] = GradientBoostingRegressor(n_estimators=n_est, learning_rate=0.01)
        else:
            bs[m] = RandomForestRegressor(n_estimators=n_est)
        bs[m].fit(X[Sm_idx], y[Sm_idx] - f_hat[Sm_idx])
        f_hat = f_hat + nu * bs[m].predict(X)
    # step 2
    lasso = Lasso(alpha = 0.1)
    Tx = np.empty([N, M])
    for i in range(M):
        Tx[:,i] = bs[i].predict(X)
    lasso.fit(Tx, y)
    return bs, lasso

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
    res = np.empty([4, 5])
    for i in range(5):
        gbm1 = GradientBoostingRegressor(n_estimators=500*(1+i), learning_rate=0.01, subsample=1)
        gbm1.fit(X, y)
        gbm2 = GradientBoostingRegressor(n_estimators=500*(1+i), learning_rate=0.01, subsample=0.1)
        gbm2.fit(X, y)
        bs1, lasso1 = ISLE(X, y, model = "GB", n_est = 500*(1+i))
        bs2, lasso2 = ISLE(X, y, model = "RF", n_est = 500*(1+i))
        res[0, i] = mse(gbm1)
        res[1, i] = mse(gbm2)
        res[2, i] = mse_isle(bs1, lasso1)
        res[3, i] = mse_isle(bs2, lasso2)
    np.savetxt("res.txt", res)
    labels = ['GBM (1, 0.01)', 'GBM (0.1, 0.01)', 'ISLE GB', 'ISLE RF']
    for y, label in zip(res, labels):
        plt.plot(500*(np.arange(5) + 1), y, label = label)
    plt.axhline(y=rf_mse, linestyle = '--', label = "Random Forest")
    plt.xlabel("Number of Trees")
    plt.ylabel("Mean Squared Error")
    plt.legend()
    plt.show()