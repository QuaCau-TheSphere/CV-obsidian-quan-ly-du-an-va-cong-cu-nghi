---
share: true
created: 2026-01-Mo'T'16:18
updated: 2026-01-Mo'T'16:18
---
```dataview
LIST rows.file.link
WHERE contains(khái-niệm, [[]])
GROUP BY split(file.folder, "/")[3]
```
