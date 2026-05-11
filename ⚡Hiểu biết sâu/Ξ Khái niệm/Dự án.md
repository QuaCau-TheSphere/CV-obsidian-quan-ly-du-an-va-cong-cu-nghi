---
share: true
created: 2025-05-27T20:44
updated: 2026-01-14T13:11
---
```dataview
LIST rows.file.link
WHERE contains(khái-niệm, [[]])
GROUP BY split(file.folder, "/")[3]
```
