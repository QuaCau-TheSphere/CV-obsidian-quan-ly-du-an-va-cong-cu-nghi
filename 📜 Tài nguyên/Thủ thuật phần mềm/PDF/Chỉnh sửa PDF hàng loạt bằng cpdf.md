---
share: true
created: 2023-05-26T14:51
updated: 2023-10-06T16:09
---
# Tách, nhập trang
```PowerShell
cpdf -split '.\Tổng hợp scan.pdf' -o page%%%.pdf
cpdf -split-bookmarks 0 a.pdf -o file%%%.pdf
cpdf -merge a.pdf 1 b.pdf 2-end -o out.pdf
```

[2 Merging and Splitting](https://www.coherentpdf.com/cpdfmanual/cpdfmanualch2.html)

# Xoá trang
```PowerShell
cpdf -merge '.\Báo cáo công việc.pdf' 1 '.\Báo cáo công việc.pdf' 3-end -o '.\Báo cáo công việc.pdf'
```
