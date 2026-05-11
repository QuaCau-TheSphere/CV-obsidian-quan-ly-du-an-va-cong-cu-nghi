---
share: true
created: 2026-01-25T14:41
updated: 2026-02-18T22:13
---
```dataview
LIST rows.file.link
WHERE contains(khái-niệm, [[]])
GROUP BY split(file.folder, "/")[3]
```
