git config --global core.quotePath false
git config --global core.longpaths true
git config --global core.autocrlf true
git config --global core.safecrlf false
//`autocrlf` is to control whether transform line endings when `add`/`checkout`, while `safecrlf` is to control whether warn users when doing such transformations.
git pull origin branchname --allow-unrelated-histories
git config --global alias.add-commit '!git add -A && git commit'
