---
share: true
created: 2025-03-09T12:17
updated: 2025-03-09T12:17
---
```dataview
LIST rows.file.link
WHERE contains(khái-niệm, [[]])
GROUP BY split(file.folder, "/")[3]
```