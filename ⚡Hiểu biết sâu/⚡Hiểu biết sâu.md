---
share: true
created: 2023-05-26T14:51
updated: 2026-01-14T13:11
---

```dataview
LIST rows.file.link
FROM "⚡Hiểu biết sâu" 
WHERE file.name!=this.file.name
Group by substring(file.folder,15)
```
