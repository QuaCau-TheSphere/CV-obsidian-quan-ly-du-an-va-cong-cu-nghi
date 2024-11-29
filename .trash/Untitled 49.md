---
share: true
created: 2024-11-27T13:53
updated: 2024-11-27T13:53
---
```dataview
LIST rows.file.link
WHERE contains(khái-niệm, [[]])
GROUP BY split(file.folder, "/")[3]
```