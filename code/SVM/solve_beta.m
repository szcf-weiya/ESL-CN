eps = 0.2;
lambda = 1.0;
n = 10;
x = randn(n, 2);
beta = [1, 2]';
y = x * beta + 0.1*randn(n, 1);

% eq 12.36
cvx_begin
    variable beta(2);
    minimize( sum(V_eps(y-x*beta, eps)) + sum_square(beta)*lambda/2 );
cvx_end

% eq 12.39
cvx_begin
    variable alpha1(n);
    variable alpha2(n);
    minimize( eps*sum(alpha1+alpha2) - y' * (alpha1-alpha2) + sum_square(x' *(alpha1-alpha2))/2 );
    subject to
        0 <= alpha1 <= 1/lambda;
        0 <= alpha2 <= 1/lambda;
        sum(alpha1 - alpha2) == 0;
        % alpha1 .* alpha2 == 0; # CANNOT Work
cvx_end

is_equal = (sum(alpha1 .* alpha2 > 1e-6) == 0)
beta
beta_alpha = (alpha1 - alpha2)' * x
