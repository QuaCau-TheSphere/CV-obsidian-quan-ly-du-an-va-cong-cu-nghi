---
share: true
created: 2026-07-16T13:25
updated: 2026-07-16T13:25
---
```dataview
LIST rows.file.link
FROM "⚡Hiểu biết sâu/Bản thể luận, nhận thức luận, phương pháp luận/Nhận thức luận"
GROUP BY split(file.folder, "/")[4]
WHERE file.name != this.file.name
```