---
share: true
created: 2023-09-05T16:17
updated: 2026-06-01T19:30
---
Khái niệm:: 
```dataview
LIST rows.file.link
FROM [[]]
GROUP BY split(file.folder, "/")[2]
WHERE file.name != this.file.name
```