---
share: True
---
```dataview
LIST rows.file.link
FROM "⚡Hiểu biết sâu" 
WHERE file.name!=this.file.name
Group by substring(file.folder,15)
```
