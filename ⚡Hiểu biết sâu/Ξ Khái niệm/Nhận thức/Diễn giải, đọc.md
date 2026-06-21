---
share: true
created: 2023-10-22T21:45
updated: 2026-05-12T23:39
---
```dataview
LIST rows.file.link
WHERE contains(khái-niệm, [[]])
GROUP BY split(file.folder, "/")[3]
```
