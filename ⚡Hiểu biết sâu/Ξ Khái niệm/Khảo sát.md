---
share: true
created: 2026-02-18T22:12
updated: 2026-02-18T22:12
---
```dataview
LIST rows.file.link
WHERE contains(khái-niệm, [[]])
GROUP BY split(file.folder, "/")[3]
```
