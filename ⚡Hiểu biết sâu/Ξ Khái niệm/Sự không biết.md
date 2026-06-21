---
share: true
created: 2025-05-26T12:19
updated: 2026-05-29T01:16
---
```dataview
LIST rows.file.link
WHERE contains(khái-niệm, [[]])
GROUP BY split(file.folder, "/")[3]
```
