---
share: true
created: 2024-09-03T01:18
updated: 2026-01-14T13:11
---
```dataview
LIST rows.file.link
WHERE contains(khái-niệm, [[]])
GROUP BY split(file.folder, "/")[3]
```
