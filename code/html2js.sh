#!/bin/bash
#
# Covert html file to js file in order to load in another html
#
# References
# 1. https://gist.github.com/Tafkadasoh/334881e18cbb7fc2a5c033bfa03f6ee6
# 2. https://stackoverflow.com/questions/8988855/include-another-html-file-in-a-html-file
#

# check the number of arguments
if [[ "$#" == 0 ]]; then
    echo 'Please enter the html file name'
    exit 1
fi
if [[ "$#" > 1 ]]; then
    echo 'Too many arguments'
    exit 1
fi

# check the existence of entered file
if [[ ! -f $1 ]]; then
    echo "WARNING! The file does not exist"
    exit 1
fi

filename=$(basename "$1")
dirname=$(dirname "$1")
extension="${filename##*.}"
filename="${filename%.*}"
targetFile="../docs/notes/${dirname}/${filename}.js"
echo $targetFile

echo "document.write('\\" > $targetFile
sed 's/\\/\\\\/g;s/^.*$/&\\/g;s/'\''/\\'\'\''/g' $1 >> $targetFile
echo "');" >> $targetFile
