---
share: true
created: 2026-04-10T12:39
updated: 2026-04-10T12:39
---
```dataview
LIST rows.file.link
WHERE contains(khái-niệm, [[]])
GROUP BY split(file.folder, "/")[3]
```
