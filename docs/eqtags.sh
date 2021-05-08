echo "\qquad \qquad (17.11)" | sed "s/qquad[ ]*(\([0-9]\{1,2\}\.[0-9]\{1,2\}\))/tag{\1}/g"
sed -i "s/qquad[ ]*(\([0-9]\{1,2\}\.[0-9]\{1,2\}\))/tag{\1}/g"

# why three backslash: https://stackoverflow.com/questions/2369314/why-does-sed-require-3-backslashes-for-a-regular-backslash
sed -i "s/tag{\([0-9]\{1,2\}\.[0-9]\{1,2\}\)}/tag{\1}\\\label{\1}/g"

sed -i "s/。/．/g"

find . -regextype sed -regex "./[0-9]\{2\}-.*.md"

find . -regextype sed -regex "./[0-9]\{2\}-.*.md" | xargs sed -i "s/。/．/g"

# or
# https://unix.stackexchange.com/questions/67192/find-command-with-regex-quantifier-e-g-1-2
find . -regextype egrep -regex "./[0-9]{2}-.*.md"
find . -regextype egrep -regex "./[0-9]{2}-.*.md" | xargs sed -i "s\../book/The Elements of Statistical Learning.pdf\https://web.stanford.edu/~hastie/ElemStatLearn/printings/ESLII_print12.pdf\g"

for file in $(find . -regex "./.*\.md"); do
    first=$(git log --date=short --format=%ad --follow $file | tail -1)
    echo $file $first
    sed -i "s/^\(|*\)[ ]*时间[ ]*|[^|]*\(|*\)[ ]*$/\1 发布 | $first \2/g" $file
done