#!/bin/bash
#
# escapeHTML.sh by Martin Wermers[1], 2018
# Written for my answer on the StackOverflow question 'Include another HTML file in a HTML file':
# https://stackoverflow.com/questions/8988855/include-another-html-file-in-a-html-file/15250208#15250208
#
# This work is licensed under a Creative Commons Attribution-ShareAlike 4.0
# International License. See https://creativecommons.org/licenses/by-sa/4.0 .
#
# Credits to Greg Minshall[2] for the improved sed command that also escapes
# back slashes and single quotes, which my original sed command did not
# consider.
# 
# [1] https://stackoverflow.com/users/841103/tafkadasoh
# [2] https://stackoverflow.com/users/1527747/greg-minshall


# Checking correct number of arguments
if [[ "$#" == 0 ]]; then 
    echo 'Please enter the filename of the HTML file that should be escaped for insertion via JavaScript.'
    exit 1
fi
if [[ "$#" > 1 ]]; then 
    echo 'Too many arguments. Please pass only one filename at a time.'
    exit 1
fi

# Checking for existance of entered file
if [[ ! -f $1 ]]; then
	echo "WARNING! The file you have entered does not exist!"
	exit 1
fi

filename=$(basename "$1")
extension="${filename##*.}"
filename="${filename%.*}"
targetFile="${filename}.js"

echo "document.write('\\" > $targetFile
sed 's/\\/\\\\/g;s/^.*$/&\\/g;s/'\''/\\'\''/g' $1 >> $targetFile
echo "');" >> $targetFile

echo "The file '$1' was converted into '$targetFile'."
echo "To include it in another HTML file, just enter the following line at the desired position for insertion:"
echo ""
echo "    <script src=\"$targetFile\"></script>"
echo ""
exit 0
