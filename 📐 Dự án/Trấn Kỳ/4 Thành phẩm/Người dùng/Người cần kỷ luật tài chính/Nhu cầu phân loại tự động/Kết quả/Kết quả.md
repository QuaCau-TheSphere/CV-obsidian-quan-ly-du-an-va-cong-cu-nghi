---
share: true
created: 2023-11-12T13:29
updated: 2023-11-12T13:29
---

```dataview
LIST rows.file.link
FROM "Kết quả" 
WHERE file.name!=this.file.name
GROUP BY split(file.folder, "/")[2]
```