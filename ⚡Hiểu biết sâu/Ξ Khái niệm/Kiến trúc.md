---
share: true
created: 2026-02-16T12:20
updated: 2026-02-16T12:20
---
```dataview
LIST rows.file.link
WHERE contains(khái-niệm, [[]])
GROUP BY split(file.folder, "/")[3]
```
