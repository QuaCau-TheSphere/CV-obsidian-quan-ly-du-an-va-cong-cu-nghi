---
created: 2023-07-01T16:13
updated: 2023-10-13T15:53
share: truê
---
```dataview
LIST rows.file.link
FROM "📜 Tài nguyên/Làm dự án" 
WHERE file.name!=this.file.name
Group by split(file.folder,"/")[2] 
```
