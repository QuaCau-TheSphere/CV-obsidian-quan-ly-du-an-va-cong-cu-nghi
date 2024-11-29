---
share: true
created: 2024-09-03T01:18
updated: 2024-11-12T21:25
---
```dataview
LIST rows.file.link
WHERE contains(khái-niệm, [[]])
GROUP BY split(file.folder, "/")[3]
```