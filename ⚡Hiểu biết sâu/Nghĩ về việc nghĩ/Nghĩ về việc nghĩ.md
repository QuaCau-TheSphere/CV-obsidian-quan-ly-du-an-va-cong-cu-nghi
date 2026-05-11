---
share: true
created: 2023-11-14T14:25
updated: 2026-01-14T13:10
---

```dataview
LIST rows.file.link
FROM "⚡Hiểu biết sâu/Nghĩ về việc nghĩ" 
WHERE file.name!=this.file.name
GROUP BY split(file.folder, "/")[2]
```
