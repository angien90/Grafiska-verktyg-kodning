#!/usr/bin/env sh
# Stoppa om något går fel
set -e

# Bygg projektet
npm run build

# Gå till byggmappen
cd dist

# Om du använder en egen domän, lägg till den i en CNAME-fil
# echo 'www.example.com' > CNAME

# Initiera ett nytt Git-repo i dist-mappen
git init
git add -A
git commit -m 'deploy'

# ÄNDRA DESSA RADER:
# Om du deployar till https://Medieinstitutet.github.io/
# git push -f git@github.com:Medieinstitutet/Medieinstitutet.github.io.git main

# Om du deployar till https://Medieinstitutet.github.io/<REPO>/
git push -f git@github.com:Medieinstitutet/fed24d-grafiska-verktyg-panterkameleonterna.git main:gh-pages

# Gå tillbaka till root-mappen
cd -
