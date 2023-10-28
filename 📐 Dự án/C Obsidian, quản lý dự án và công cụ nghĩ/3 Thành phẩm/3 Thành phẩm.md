---
share: true
created: 2023-10-28T17:48
updated: 2023-10-28T17:48
---

```dataview
LIST rows.file.link
FROM "📐 Dự án/C Obsidian, quản lý dự án và công cụ nghĩ/3 Thành phẩm" 
WHERE file.name!=this.file.name
GROUP BY split(file.folder, "/")[3]
```