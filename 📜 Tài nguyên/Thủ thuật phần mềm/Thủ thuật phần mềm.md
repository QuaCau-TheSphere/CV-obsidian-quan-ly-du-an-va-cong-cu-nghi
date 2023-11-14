---
share: true
created: 2023-11-14T14:15
updated: 2023-11-14T14:15
---

```dataview
LIST rows.file.link
FROM "📜 Tài nguyên/Thủ thuật phần mềm" 
WHERE file.name!=this.file.name
GROUP BY split(file.folder, "/")[2]
```