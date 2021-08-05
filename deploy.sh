#!/usr/bin/env sh
# abort on errors
set -e

# build
npm run build

cd dist

git init
git add -A
git commit -m 'deploy'
git remote add origin https://github.com/jerzyszyjut/maszota.git
git push -f origin master:gh-pages
cd -