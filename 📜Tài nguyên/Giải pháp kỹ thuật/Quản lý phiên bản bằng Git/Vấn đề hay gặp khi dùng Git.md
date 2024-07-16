---
share: true
created: 2023-05-26T14:51
updated: 2024-07-16T22:43
---
# Quên add

# [[Git không biết gì về folder]]

# Thêm file vào  .gitignore rồi mà vẫn không thấy file bị ignore

# Lỡ commit file nặng
```
git filter-branch --force --index-filter 'git rm -r --cached --ignore-unmatch bigfile.txt' --prune-empty --tag-name-filter cat -- --all
```
