CALL npm run build
CALL cd dist
CALL git init
CALL git add -A
CALL git commit -m 'deploy'
CALL git remote add origin https://github.com/jerzyszyjut/maszota.git
CALL git push -f origin master:gh-pages
CALL cd ..