---
share: true
created: 2023-10-22T21:45
updated: 2024-08-10T16:35
---
```dataview
LIST rows.file.link
WHERE contains(khái-niệm, [[]])
GROUP BY split(file.folder, "/")[3]
```