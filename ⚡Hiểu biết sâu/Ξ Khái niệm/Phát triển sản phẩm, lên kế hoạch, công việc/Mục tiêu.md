---
created: 2023-06-12T00:57
updated: 2026-04-18T20:20
share: true
---
```dataview
LIST rows.file.link
WHERE contains(khái-niệm, [[]])
GROUP BY split(file.folder, "/")[3]
```
