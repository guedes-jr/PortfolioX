## create a new repository on the command line
```bash
echo "# PortfolioX" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/guedes-jr/PortfolioX.git
git push -u origin main
```

---

## Or push an existing repository from the command line
```bash
git remote add origin https://github.com/guedes-jr/PortfolioX.git
git branch -M main
git push -u origin main
```