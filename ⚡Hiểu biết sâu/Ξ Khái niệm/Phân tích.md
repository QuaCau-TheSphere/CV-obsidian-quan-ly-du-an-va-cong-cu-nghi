---
share: true
created: 2026-04-03T01:11
updated: 2026-04-03T01:11
---
```dataview
LIST rows.file.link
WHERE contains(khái-niệm, [[]])
GROUP BY split(file.folder, "/")[3]
```
