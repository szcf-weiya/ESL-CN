#!/bin/bash
#
# import html from directory ../../code

# check the number of arguments

if [[ "$#" == 0 ]]; then
    echo 'Please enter the html file'
    exit 1
fi

if [[ "$#" > 1 ]]; then
    echo 'Too many arguments'
    exit 1
fi

# check the existence of entered file
if [[ ! -f $1 ]]; then
    echo 'WARNING! The file does not exist'
    exit
fi

filename=$(basename "$1")
cp $1 .
echo "copy ... OK"
sed -i "10i <base target=\"_parent\">" $filename
sed -i 's/mathjax.rstudio.com\/latest/cdn.bootcss.com\/mathjax\/2.7.2-beta.0/g' $filename
echo "sed ... OK"
exit 0
