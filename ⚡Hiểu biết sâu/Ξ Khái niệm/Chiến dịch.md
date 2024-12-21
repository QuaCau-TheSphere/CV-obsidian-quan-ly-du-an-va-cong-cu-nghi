---
share: true
created: 2025-05-27T20:44
updated: 2025-05-27T21:42
---
```dataview
LIST rows.file.link
WHERE contains(khái-niệm, [[]])
GROUP BY split(file.folder, "/")[3]
```