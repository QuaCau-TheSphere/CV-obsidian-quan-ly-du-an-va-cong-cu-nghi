---
share: true
created: 2025-10-20T14:22
updated: 2026-01-25T11:42
---
```dataview
LIST rows.file.link
WHERE contains(khái-niệm, [[]])
GROUP BY split(file.folder, "/")[3]
```
