---
share: true
created: 2023-09-05T16:17
updated: 2026-07-24T17:45
---
```dataview
LIST rows.file.link
WHERE contains(khái-niệm, [[]])
GROUP BY split(file.folder, "/")[1]
```
