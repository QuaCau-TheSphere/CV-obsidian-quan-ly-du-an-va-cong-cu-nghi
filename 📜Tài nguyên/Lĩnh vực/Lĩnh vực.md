---
share: true
created: 2024-02-29T23:53
updated: 2026-01-14T13:11
---

```dataview
LIST rows.file.link
FROM "📜Tài nguyên/Lĩnh vực" 
WHERE file.name!=this.file.name
GROUP BY split(file.folder, "/")[2]
```
Giải pháp kỹ thuật:: [[Giải pháp kỹ thuật]]
