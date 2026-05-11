---
share: true
created: 2025-09-27T16:17
updated: 2026-02-02T11:58
---
```dataview
LIST rows.file.link
WHERE contains(khái-niệm, [[]])
GROUP BY split(file.folder, "/")[3]
```
