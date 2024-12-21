---
share: true
created: 2024-12-20T20:27
updated: 2024-12-20T20:27
---
```dataview
LIST rows.file.link
WHERE contains(khái-niệm, [[]])
GROUP BY split(file.folder, "/")[3]
```