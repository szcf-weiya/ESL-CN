data = read.csv("../data/Ozone/ozone.csv", sep = "\t")
# calculate the overlap 4*0.4-3x=1 => x = 0.2
# the overlap in w.r.t. each interval instead of the whole interval
# prop = 0.2 / 0.4 = 0.5
Wind = equal.count(data$wind, number = 4, overlap = 0.5) 
Temp = equal.count(data$temp, number = 4, overlap = 0.5)
mypanel = function(x, y) {
  panel.xyplot(x, y)
  panel.grid()
  panel.loess(x, y)
}
xyplot(I(ozone^(1/3)) ~ radiation | Temp * Wind, data = data,
       panel = mypanel,
       xlab = "Solar Radiation (langleys)",
       ylab = "Cube Root Ozone (cube root ppb)")

coplot(I(ozone^(1/3)) ~ radiation | temperature * wind, data = data, 
       number = 4, overlap = 0.5)