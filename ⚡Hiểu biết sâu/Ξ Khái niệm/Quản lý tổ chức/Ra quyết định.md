---
share: true
created: 2023-09-05T16:17
updated: 2026-07-14T11:59
---
Khái niệm:: 
```dataview
LIST rows.file.link
FROM [[]]
GROUP BY split(file.folder, "/")[2]
WHERE file.name != this.file.name
```
