---
share: true
created: 2024-02-29T23:53
updated: 2024-09-01T17:27
---

```dataview
LIST rows.file.link
FROM "📜Tài nguyên/Giải pháp kỹ thuật" 
WHERE file.name!=this.file.name
GROUP BY split(file.folder, "/")[2]
```
Giải pháp kỹ thuật:: [[Giải pháp kỹ thuật]]