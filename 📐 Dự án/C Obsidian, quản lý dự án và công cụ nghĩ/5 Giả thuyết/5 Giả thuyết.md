---
share: true
created: 2023-10-28T13:04
updated: 2023-10-28T13:04
---

```dataview
LIST rows.file.link
FROM "📐 Dự án/C Obsidian, quản lý dự án và công cụ nghĩ/5 Giả thuyết" 
WHERE file.name!=this.file.name
GROUP BY split(file.folder, "/")[2]
```