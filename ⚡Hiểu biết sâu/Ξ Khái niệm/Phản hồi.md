---
share: true
created: 2024-08-19T22:03
updated: 2026-07-16T13:08
---
```dataview
LIST rows.file.link
WHERE contains(khái-niệm, [[]])
GROUP BY split(file.folder, "/")[3]
```
