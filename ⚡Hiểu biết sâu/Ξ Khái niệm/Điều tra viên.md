---
share: true
created: 2026-03-31T16:56
updated: 2026-03-31T16:56
---
```dataview
LIST rows.file.link
WHERE contains(khái-niệm, [[]])
GROUP BY split(file.folder, "/")[3]
```
