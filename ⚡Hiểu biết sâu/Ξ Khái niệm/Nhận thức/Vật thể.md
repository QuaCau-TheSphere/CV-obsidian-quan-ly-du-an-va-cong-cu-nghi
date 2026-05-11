---
share: true
created: 2023-09-05T16:17
updated: 2026-03-29T22:17
---
```dataview
LIST rows.file.link
WHERE contains(khái-niệm, [[]])
GROUP BY split(file.folder, "/")[1]
WHERE file.name != this.file.name
```
