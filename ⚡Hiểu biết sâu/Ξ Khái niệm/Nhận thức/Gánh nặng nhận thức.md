---
share: true
created: 2024-07-28T21:54
updated: 2026-05-27T13:49
aliases:
  - Nhức đầu
---
```dataview
LIST rows.file.link
WHERE contains(khái-niệm, [[]])
GROUP BY split(file.folder, "/")[1]
WHERE file.name != this.file.name
```
