---
share: true
created: 2026-04-18T20:21
updated: 2026-04-18T20:21
---
```dataview
LIST rows.file.link
WHERE contains(khái-niệm, [[]])
GROUP BY split(file.folder, "/")[3]
```
