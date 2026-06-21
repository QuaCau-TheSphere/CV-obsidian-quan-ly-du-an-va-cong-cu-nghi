---
share: true
created: 2024-12-02T19:55
updated: 2026-05-18T21:51
---
```dataview
LIST rows.file.link
WHERE contains(khái-niệm, [[]])
GROUP BY split(file.folder, "/")[1]
```

