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
mv $1 .
echo "moving ... OK"
sed -i "10i <base target=\"_parent\">" $filename
echo "sed ... OK"
exit 0
