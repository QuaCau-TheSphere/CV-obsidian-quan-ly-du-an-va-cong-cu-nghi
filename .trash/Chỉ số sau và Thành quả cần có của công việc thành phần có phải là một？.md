---
share: true
created: 2026-01-23T11:35
updated: 2026-01-23T11:35
---
```dataview
LIST rows.file.link
WHERE contains(khái-niệm, [[]])
GROUP BY split(file.folder, "/")[3]
```
