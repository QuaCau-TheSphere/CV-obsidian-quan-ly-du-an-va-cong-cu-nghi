---
share: true
created: 2026-07-16T13:24
updated: 2026-07-16T13:24
---
```dataview
LIST rows.file.link
FROM "⚡Hiểu biết sâu/Bản thể luận, nhận thức luận, phương pháp luận/Bản thể luận"
GROUP BY split(file.folder, "/")[3]
WHERE file.name != this.file.name
```