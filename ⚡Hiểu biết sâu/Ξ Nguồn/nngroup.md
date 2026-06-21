---
share: true
created: 2023-09-05T16:17
updated: 2026-05-28T00:11
---
```dataview
LIST rows.file.link
FROM [[]]
GROUP BY split(file.folder, "/")[3]
WHERE file.name != this.file.name
```