---
share: true
created: 2023-10-28T22:41
updated: 2023-10-31T16:09
---

```dataview
LIST rows.file.link
FROM "📐 Dự án/Trấn Kỳ" 
WHERE file.name!=this.file.name
GROUP BY split(file.folder, "/")[2]
```
