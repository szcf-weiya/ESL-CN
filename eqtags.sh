echo "\qquad \qquad (17.11)" | sed "s/qquad[ ]*(\([0-9]\{1,2\}\.[0-9]\{1,2\}\))/tag{\1}/g"
sed -i "s/qquad[ ]*(\([0-9]\{1,2\}\.[0-9]\{1,2\}\))/tag{\1}/g"

# why three backslash: https://stackoverflow.com/questions/2369314/why-does-sed-require-3-backslashes-for-a-regular-backslash
sed -i "s/tag{\([0-9]\{1,2\}\.[0-9]\{1,2\}\)}/tag{\1}\\\label{\1}/g"