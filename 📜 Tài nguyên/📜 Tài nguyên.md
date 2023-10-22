---
share: true
created: 2023-05-26T14:51
updated: 2023-10-22T12:25
---
```dataview
LIST rows.file.link
FROM "📜 Tài nguyên" 
WHERE file.name!=this.file.name
group by split(file.folder, "/")[1]
```
