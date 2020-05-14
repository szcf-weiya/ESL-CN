#include <iostream>
#include <fstream>
#include <cstdlib>
#include <gsl/gsl_bspline.h>
using namespace std;

int main(int argc, char *argv[])
{   
    size_t order = atoi(argv[1]);
    size_t nbreaks = 11;
    // number of data points
    size_t n = 1000;
    size_t ncoeffs = nbreaks + order - 2;
    gsl_bspline_workspace *bw;
    gsl_matrix *X;
    gsl_vector *B;
    size_t i, j;
    // alloc a order-k bspline workspace
    bw = gsl_bspline_alloc(order, nbreaks);
    X = gsl_matrix_alloc(n, ncoeffs);
    B = gsl_vector_alloc(ncoeffs);
    // use uniform breakpoints
    gsl_bspline_knots_uniform(0.0, 1.0, bw);
    // ofstream fout("res.txt");
    for (i = 0; i < n; i++)
    {
        double xi = 1.0 * (i + 1) / n;
        // compute B_j(x_i) for all j
        gsl_bspline_eval(xi, B, bw);
        // fill in row i of X
        for (j = 0; j < ncoeffs; j++)
        {
            double Bj = gsl_vector_get(B, j);
            if (j != ncoeffs - 1)
                // fout << Bj << "\t";
                cout << Bj << "\t";
            else
                // fout << Bj << endl;
                cout << Bj << endl;
            gsl_matrix_set(X, i, j, Bj);
        }
    }
    // fout.close();
    gsl_vector_free(B);
    gsl_matrix_free(X);
    gsl_bspline_free(bw);
    return 0;
}