## ############################################################################
## Compare Association Rules with Rule-based Methods
##
## author: szcf-weiya <szcfweiya@gmail.com>
##
## ############################################################################

## ############################################################################
## for regression
## ############################################################################
library(RWeka)
M5Rules(mpg ~ ., data = mtcars)

# M5 pruned model rules 
# (using smoothed linear models) :
# Number of Rules : 2

# Rule: 1
# IF
# 	cyl > 5
# THEN

# mpg = 
# 	-0.5389 * cyl 
# 	+ 0.0048 * disp 
# 	- 0.0206 * hp 
# 	- 3.0997 * wt 
# 	+ 34.4212 [21/26.733%]

# Rule: 2

# mpg = 
# 	-0.1351 * disp 
# 	+ 40.872 [11/59.295%]

## #############################################################################
## for classification
## ############################################################################

PART(Species ~ ., data = iris)

# PART decision list
# ------------------

# Petal.Width <= 0.6: setosa (50.0)

# Petal.Width <= 1.7 AND
# Petal.Length <= 4.9: versicolor (48.0/1.0)

# : virginica (52.0/3.0)

# Number of Rules  : 	3

library(C50)
summary(C5.0(Species ~ ., data = iris, rules=TRUE))

# Call:
# C5.0.formula(formula = Species ~ ., data = iris, rules = TRUE)


# C5.0 [Release 2.07 GPL Edition]  	Wed Mar 21 12:12:44 2018
# -------------------------------

# Class specified by attribute `outcome'

# Read 150 cases (5 attributes) from undefined.data

# Rules:

# Rule 1: (50, lift 2.9)
# 	Petal.Length <= 1.9
# 	->  class setosa  [0.981]

# Rule 2: (48/1, lift 2.9)
# 	Petal.Length > 1.9
# 	Petal.Length <= 4.9
# 	Petal.Width <= 1.7
# 	->  class versicolor  [0.960]

# Rule 3: (46/1, lift 2.9)
# 	Petal.Width > 1.7
# 	->  class virginica  [0.958]

# Rule 4: (46/2, lift 2.8)
# 	Petal.Length > 4.9
# 	->  class virginica  [0.938]

# Default class: setosa


# Evaluation on training data (150 cases):

# 	        Rules     
# 	  ----------------
# 	    No      Errors

# 	     4    4( 2.7%)   <<


# 	   (a)   (b)   (c)    <-classified as
# 	  ----  ----  ----
# 	    50                (a): class setosa
# 	          47     3    (b): class versicolor
# 	           1    49    (c): class virginica


# 	Attribute usage:

# 	 96.00%	Petal.Length
# 	 62.67%	Petal.Width


# Time: 0.0 secs

## !!!!!!!!!!!!!!!!!!
## !!!!!!!!!!!!!!! PAY ATTENTION TO THE LIFT IN THE ABOVE OUTPUT
## !!!!!!!!!!!!!!!!!!