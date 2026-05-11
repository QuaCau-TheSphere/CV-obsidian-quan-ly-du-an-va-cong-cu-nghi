---
share: true
created: 2026-02-15T16:09
updated: 2026-02-15T16:09
---
```dataview
LIST rows.file.link
WHERE contains(khái-niệm, [[]])
GROUP BY split(file.folder, "/")[3]
```
