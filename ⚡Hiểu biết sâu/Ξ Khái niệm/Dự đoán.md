---
share: true
created: 2026-04-16T12:25
updated: 2026-04-16T12:25
---
```dataview
LIST rows.file.link
WHERE contains(khái-niệm, [[]])
GROUP BY split(file.folder, "/")[3]
```
