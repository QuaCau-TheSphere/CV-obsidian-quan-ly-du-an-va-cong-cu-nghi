---
share: True
---
# Quên add

# [[Git không biết gì về folder]]

# Thêm file vào  .gitignore rồi mà vẫn không thấy file bị ignore

# Lỡ commit file nặng
```
git filter-branch --force --index-filter 'git rm -r --cached --ignore-unmatch bigfile.txt' --prune-empty --tag-name-filter cat -- --all
```