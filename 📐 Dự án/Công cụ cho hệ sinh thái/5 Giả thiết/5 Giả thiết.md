---
share: true
created: 2023-10-28T13:04
updated: 2026-01-14T13:11
---

```dataview
LIST rows.file.link
FROM "📐 Dự án/Công cụ cho hệ sinh thái/5 Giả thiết" 
WHERE file.name!=this.file.name
group by split(file.folder, "/" )[3]
```
