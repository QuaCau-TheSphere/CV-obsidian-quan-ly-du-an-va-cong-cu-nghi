---
share: true
created: 2023-09-05T16:17
updated: 2026-07-03T21:42
---
```dataview
LIST rows.file.link
FROM [[]]
GROUP BY split(file.folder, "/")[1]
WHERE file.name != this.file.name
```
