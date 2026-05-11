---
share: true
created: 2026-02-10T11:50
updated: 2026-02-10T11:50
---
```dataview
LIST rows.file.link
WHERE contains(khái-niệm, [[]])
GROUP BY split(file.folder, "/")[3]
```
