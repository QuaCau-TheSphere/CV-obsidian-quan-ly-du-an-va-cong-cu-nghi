---
share: true
created: 2024-08-28T13:49
updated: 2026-02-02T14:38
---
```dataview
LIST rows.file.link
WHERE contains(khái-niệm, [[]])
GROUP BY split(file.folder, "/")[3]
```
