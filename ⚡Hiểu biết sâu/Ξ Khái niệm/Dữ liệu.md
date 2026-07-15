---
share: true
created: 2025-12-31T10:36
updated: 2026-07-12T17:08
---
```dataview
LIST rows.file.link
WHERE contains(khái-niệm, [[]])
GROUP BY split(file.folder, "/")[1]
```
