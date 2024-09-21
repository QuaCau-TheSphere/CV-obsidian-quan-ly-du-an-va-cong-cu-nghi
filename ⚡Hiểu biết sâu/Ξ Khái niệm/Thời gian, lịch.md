---
share: true
created: 2024-09-07T21:30
updated: 2024-09-07T21:30
---
```dataview
LIST rows.file.link
WHERE contains(khái-niệm, [[]])
GROUP BY split(file.folder, "/")[3]
```