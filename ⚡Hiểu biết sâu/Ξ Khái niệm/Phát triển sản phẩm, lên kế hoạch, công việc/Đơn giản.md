---
share: true
created: 2023-09-05T16:17
updated: 2026-01-24T15:30
---
```dataview
LIST rows.file.link
WHERE contains(khái-niệm, [[]])
GROUP BY split(file.folder, "/")[1]
```