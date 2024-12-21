---
share: true
created: 2025-04-22T13:43
updated: 2025-04-22T13:43
---
```dataview
LIST rows.file.link
WHERE contains(khái-niệm, [[]])
GROUP BY split(file.folder, "/")[3]
```