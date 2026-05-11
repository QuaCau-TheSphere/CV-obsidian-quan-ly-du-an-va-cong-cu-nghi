---
share: true
created: 2026-02-10T12:05
updated: 2026-02-10T12:05
---
```dataview
LIST rows.file.link
WHERE contains(khái-niệm, [[]])
GROUP BY split(file.folder, "/")[3]
```
