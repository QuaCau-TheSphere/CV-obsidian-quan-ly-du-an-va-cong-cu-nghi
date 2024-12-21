---
share: true
created: 2024-12-18T10:01
updated: 2024-12-18T10:01
---
```dataview
LIST rows.file.link
WHERE contains(khái-niệm, [[]])
GROUP BY split(file.folder, "/")[3]
```