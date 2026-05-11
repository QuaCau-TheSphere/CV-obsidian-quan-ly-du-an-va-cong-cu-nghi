---
share: true
created: 2026-03-30T12:40
updated: 2026-03-30T12:40
---
```dataview
LIST rows.file.link
WHERE contains(khái-niệm, [[]])
GROUP BY split(file.folder, "/")[3]
```
