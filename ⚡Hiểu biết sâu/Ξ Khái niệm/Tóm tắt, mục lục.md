---
share: true
created: 2024-11-26T21:59
updated: 2026-05-31T21:20
---
```dataview
LIST rows.file.link
WHERE contains(khái-niệm, [[]])
GROUP BY split(file.folder, "/")[4]
```
