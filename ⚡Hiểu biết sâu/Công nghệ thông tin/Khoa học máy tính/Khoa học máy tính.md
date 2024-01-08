---
share: true
created: 2023-10-31T01:39
updated: 2023-12-17T12:14
---

```dataview
LIST rows.file.link
FROM "⚡Hiểu biết sâu/Khoa học máy tính" 
WHERE file.name!=this.file.name
GROUP BY split(file.folder, "/")[2]
```