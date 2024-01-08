---
share: true
created: 2023-10-28T22:41
updated: 2023-12-25T20:30
---

```dataview
LIST rows.file.link
FROM "📐 Dự án/C Obsidian, quản lý dự án và công cụ nghĩ" 
WHERE file.name!=this.file.name
GROUP BY split(file.folder, "/")[2]
```