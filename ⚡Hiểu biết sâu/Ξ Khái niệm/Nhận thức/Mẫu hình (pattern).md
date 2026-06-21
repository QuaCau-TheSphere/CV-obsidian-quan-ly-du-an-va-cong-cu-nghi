---
share: true
created: 2023-06-10T21:57
updated: 2026-05-31T17:03
---
```dataview
LIST rows.file.link
FROM [[]]
GROUP BY split(file.folder, "/")[1]
WHERE file.name != this.file.name
```