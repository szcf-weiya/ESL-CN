## ##########################################################################################
## Example code for apriori algorithm
## 
## refer to https://www.r-bloggers.com/implementing-apriori-algorithm-in-r/ for more details
##
## also see https://www.r-bloggers.com/association-rule-learning-and-the-apriori-algorithm/
## 
## reorganized by szcf-weiya <szcfweiya@gmail.com>
## 
## ##########################################################################################

## ##########################################################################################
## read data
##
## 3 columns:
##   Member_number
##   Date
##   ItemDescription
## ##########################################################################################
Sys.setenv(http_proxy="socks5://127.0.0.1:1080")
df = read.csv(url("https://raw.githubusercontent.com/nupur1492/RProjects/master/MarketBasketAnalysis/groceries.csv"))
Sys.getenv(http_proxy="")

# str(df)

## ##########################################################################################
## data cleaning and manipulations
## ##########################################################################################

df.sorted = df[order(df$Member_number), ]

## convert the dataframe into transactions format such that all the items bought 
## at the same time in one row
library(plyr)
df.item = ddply(df, .("Member_number", "Date"),
                function(df1) paste(df1$itemDescription, collapse = ","))

## no longer need the date and member numbers
df.item$Member_number = NULL
df.item$Date = NULL
colnames(df.item) = c("item")
write.csv(df.item, "items.csv", row.names = TRUE)

## ##########################################################################################
## association rules
## ##########################################################################################

library(arules)
txn = read.transactions(file = "items.csv", # transaction file
                        rm.duplicates = TRUE, # make sure that no duplicate
                        format = "basket", # row 1: transaction ids; row 2: list of items
                        sep = ",", # separator between items
                        cols = 1) # column number of transaction ids

## rm quotes in labels
txn@itemInfo$labels = gsub("\"", "", txn@itemInfo$labels)

## main apriori algorithm
rules = apriori(txn,
                parameter = list(sup = 0.01, # minimum values for support
                                 conf = 0.5, # minimum values for confidence
                                 target = "rules")
                )

## inspect with tm
if (sessionInfo()['basePkgs']=="tm" | sessionInfo()['otherPkgs']=="tm"){
  detach(package:tm, unload = TRUE)
}
inspect(rules)

## alternative to inspect()
df.rules = as(rules, "data.frame")
#View(df.rules)

## ##########################################################################################
## visualization
## ##########################################################################################
library(arulesViz)
plot(rules)
plot(rules, method = "grouped", control = list(k=5))
plot(rules, method = "graph", control = list(type="items"))
plot(rules, method = "paracoord", control = list(alpha=0.5,
                                                 reorder=TRUE))
plot(rules, measure = c("support", "lift"),
     shading = "confidence",
     interactive = TRUE)
itemFrequencyPlot(txn, topN = 5)