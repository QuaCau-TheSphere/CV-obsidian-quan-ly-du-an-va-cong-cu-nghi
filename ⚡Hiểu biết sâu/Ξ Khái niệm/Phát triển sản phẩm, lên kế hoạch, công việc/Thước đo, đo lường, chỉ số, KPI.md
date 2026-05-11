---
share: true
created: 2023-06-12T00:57
updated: 2026-01-20T13:54
---
```dataview
LIST rows.file.link
where contains(khái-niệm,[[]]) 
GROUP BY split(file.folder, "/")[1]
WHERE file.name != this.file.name
```