---
share: true
created: 2026-05-29T01:50
updated: 2026-05-29T01:50
---
```dataview
LIST rows.file.link
WHERE contains(khái-niệm, [[]])
GROUP BY split(file.folder, "/")[3]
```
