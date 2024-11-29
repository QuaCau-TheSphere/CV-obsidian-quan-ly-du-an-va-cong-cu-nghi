---
share: true
created: 2024-09-07T21:40
updated: 2024-11-12T21:25
---
```dataview
LIST rows.file.link
WHERE contains(khái-niệm, [[]])
GROUP BY split(file.folder, "/")[3]
```