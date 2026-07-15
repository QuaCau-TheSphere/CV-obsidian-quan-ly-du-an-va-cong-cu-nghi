---
share: true
created: 2023-09-05T16:17
updated: 2026-06-02T19:53
---
```dataview
LIST rows.file.link
FROM [[]]
GROUP BY split(file.folder, "/")[1]
WHERE file.name != this.file.name
```
