---
share: true
created: 2025-05-26T12:19
updated: 2026-03-17T14:03
---
```dataview
LIST rows.file.link
WHERE contains(khái-niệm, [[]])
GROUP BY split(file.folder, "/")[3]
```
