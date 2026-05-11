---
share: true
created: 2023-05-26T14:51
updated: 2026-01-14T13:11
---
## Tách, nhập trang
```PowerShell
cpdf -split '.\Tổng hợp scan.pdf' -o page%%%.pdf
cpdf -split-bookmarks 0 a.pdf -o file%%%.pdf
cpdf -merge a.pdf 1 b.pdf 2-end -o out.pdf
```

[2 Merging and Splitting](https://www.coherentpdf.com/cpdfmanual/cpdfmanualch2.html)

## Xoá trang
```PowerShell
cpdf -merge '.\Báo cáo công việc.pdf' 1 '.\Báo cáo công việc.pdf' 3-end -o '.\Báo cáo công việc.pdf'
```

## 
```PowerShell
$i=1; while ($i -lt 152) {$j=$i+1; cpdf origin.pdf "$i,$j" -o "$i-$j.pdf"; $i=$i+2} 
```

## Tạo bookmark
The -list-bookmarks operation prints (to standard output) the bookmarks in a file. The first column gives the level of the tree at which a particular bookmark is. Then the text of the bookmark in quotes. Then the page number which the bookmark points to. Then (optionally) the word ”open” if the bookmark should have its children (at the level immediately below) visible when the file is loaded. Then the destination (see below). For example, upon executing
```
cpdf -list-bookmarks -utf8 doc.pdf
0 "Part 1" 1 open
1 "Part 1A" 2 "[2 /XYZ 200 400 null]"
1 "Part 1B" 3
0 "Part 2" 4
1 "Part 2a" 5
```
