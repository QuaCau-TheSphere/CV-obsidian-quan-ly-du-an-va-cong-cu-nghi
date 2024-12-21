---
share: true
created: 2024-12-02T19:55
updated: 2024-12-02T19:42
---
```dataview
LIST rows.file.link
WHERE contains(khái-niệm, [[]])
GROUP BY split(file.folder, "/")[3]
```
