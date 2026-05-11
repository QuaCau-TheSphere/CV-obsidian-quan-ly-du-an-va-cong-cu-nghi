---
share: true
created: 2024-12-02T19:55
updated: 2025-12-22T17:35
---
```dataview
LIST rows.file.link
WHERE contains(khái-niệm, [[]])
GROUP BY split(file.folder, "/")[3]
```
