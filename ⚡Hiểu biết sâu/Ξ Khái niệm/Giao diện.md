---
share: true
created: 2026-01-Tu'T'13:23
updated: 2026-01-Tu'T'13:23
---
```dataview
LIST rows.file.link
WHERE contains(khái-niệm, [[]])
GROUP BY split(file.folder, "/")[3]
```
