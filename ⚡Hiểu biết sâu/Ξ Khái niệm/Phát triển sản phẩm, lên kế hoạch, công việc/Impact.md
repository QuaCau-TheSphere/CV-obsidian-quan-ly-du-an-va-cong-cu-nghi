---
created: 2023-06-12T00:57
updated: 2026-07-11T23:30
share: true
---
```dataview
LIST rows.file.link
FROM [[]]
GROUP BY split(file.folder, "/")[1]
WHERE file.name != this.file.name
```
impact—high-level aspirational goals
