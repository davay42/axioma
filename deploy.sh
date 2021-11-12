cd .vitepress/dist

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:davay42/axioma.center.git head:gh-pages

cd -