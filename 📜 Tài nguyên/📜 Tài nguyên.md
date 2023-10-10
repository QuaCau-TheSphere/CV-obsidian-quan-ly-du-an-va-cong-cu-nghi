---
share: true
created: 2023-05-26T14:51
updated: 2023-10-09T19:44
---
```dataview
LIST
FROM "📜 Tài nguyên" 
WHERE file.name!=this.file.name
Where file.name=split(file.folder, "/")[1]
```
