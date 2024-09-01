---
share: true
created: 2024-08-20T12:55
updated: 2024-08-20T12:55
---
```dataview
LIST rows.file.link
WHERE contains(khái-niệm, [[]])
GROUP BY split(file.folder, "/")[3]
```