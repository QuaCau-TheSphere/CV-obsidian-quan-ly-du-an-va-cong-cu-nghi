---
share: true
created: 2023-11-14T14:25
updated: 2026-05-12T23:39
---

```dataview
LIST rows.file.link
FROM "⚡Hiểu biết sâu/Nghĩ về việc nghĩ" 
WHERE file.name!=this.file.name
GROUP BY split(file.folder, "/")[2]
```
