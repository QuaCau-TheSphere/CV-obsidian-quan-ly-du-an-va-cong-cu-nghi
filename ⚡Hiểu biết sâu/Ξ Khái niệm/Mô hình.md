---
share: true
created: 2026-01-17T15:47
updated: 2026-01-17T15:47
---
```dataview
LIST rows.file.link
WHERE contains(khái-niệm, [[]])
GROUP BY split(file.folder, "/")[3]
```
