---
created: 2023-06-12T00:57
updated: 2026-05-12T23:39
share: true
---
```dataview
LIST rows.file.link
where contains(khái-niệm,[[]]) 
WHERE file.name != this.file.name
GROUP BY split(file.folder, "/")[1]
```
