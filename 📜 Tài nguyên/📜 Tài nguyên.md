---
share: true
---
```dataview
LIST
FROM "📜 Tài nguyên" 
WHERE file.name!=this.file.name
Where file.name=split(file.folder, "/")[1]
```
