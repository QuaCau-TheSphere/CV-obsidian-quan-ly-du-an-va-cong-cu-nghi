---
share: true
created: 2026-02-03T13:34
updated: 2026-02-03T13:34
---
```dataview
LIST rows.file.link
WHERE contains(khái-niệm, [[]])
GROUP BY split(file.folder, "/")[3]
```
