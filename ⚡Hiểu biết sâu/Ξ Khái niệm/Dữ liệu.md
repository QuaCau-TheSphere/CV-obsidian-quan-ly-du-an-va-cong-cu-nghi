---
share: true
created: 2025-12-31T10:36
updated: 2026-01-16T13:53
---
```dataview
LIST rows.file.link
WHERE contains(khái-niệm, [[]])
GROUP BY split(file.folder, "/")[1]
```
