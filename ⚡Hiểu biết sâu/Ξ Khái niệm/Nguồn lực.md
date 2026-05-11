---
share: true
created: 2026-02-23T21:51
updated: 2026-02-23T21:51
---
```dataview
LIST rows.file.link
WHERE contains(khái-niệm, [[]])
GROUP BY split(file.folder, "/")[3]
```
