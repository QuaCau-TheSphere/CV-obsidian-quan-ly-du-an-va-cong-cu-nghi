---
share: true
created: 2024-02-29T23:53
updated: 2024-07-16T23:27
---

```dataview
LIST rows.file.link
FROM "📜Tài nguyên/Nhu cầu công nghệ" 
WHERE file.name!=this.file.name
GROUP BY split(file.folder, "/")[3]
```
Lĩnh vực:: [[Lĩnh vực]]
Giải pháp kỹ thuật:: [[Giải pháp kỹ thuật]]
