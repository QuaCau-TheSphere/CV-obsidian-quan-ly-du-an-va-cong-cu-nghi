---
share: true
created: 2026-04-02T15:28
updated: 2026-04-02T15:28
---
```dataview
LIST rows.file.link
WHERE contains(khái-niệm, [[]])
GROUP BY split(file.folder, "/")[3]
```
