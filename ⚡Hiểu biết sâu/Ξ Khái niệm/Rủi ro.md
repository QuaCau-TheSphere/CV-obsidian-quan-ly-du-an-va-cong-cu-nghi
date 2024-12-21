---
share: true
created: 2024-12-16T12:03
updated: 2024-12-16T12:03
---
```dataview
LIST rows.file.link
WHERE contains(khái-niệm, [[]])
GROUP BY split(file.folder, "/")[3]
```