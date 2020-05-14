bspline <- function (order = 4, tmpfile = tempfile(), exec = file.path(".", "bspline")){
    command = paste(exec, order, ">", tmpfile)
    system(command)
    read.table(tmpfile)
}

par(mfrow = c(4, 1), mar=c(2.1, 4.1, 2.1, 2.1))
for (order in 1:4) {
    data = bspline(order)
    matplot(1:1000*0.001, data, xlab = "", ylab = "", type = "l", lwd = 2)
    title(paste("B-splies of Order", order))
}