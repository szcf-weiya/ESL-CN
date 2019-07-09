function y = V_eps(r, eps)
    y = max( abs(r) - eps, 0 );
end