---
share: true
created: 2024-11-25T14:18
updated: 2024-11-25T14:18
---
```dataview
LIST rows.file.link
WHERE contains(khái-niệm, [[]])
GROUP BY split(file.folder, "/")[3]
```