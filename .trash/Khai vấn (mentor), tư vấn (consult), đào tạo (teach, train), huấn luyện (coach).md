---
share: true
created: 2026-07-01T12:03
updated: 2026-07-08T15:54
---
```dataview
LIST rows.file.link
WHERE contains(khái-niệm, [[]])
GROUP BY split(file.folder, "/")[3]
```
