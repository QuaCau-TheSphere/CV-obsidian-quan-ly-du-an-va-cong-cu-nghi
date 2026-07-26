---
share: true
created: 2026-07-16T13:30
updated: 2026-07-16T13:30
---
Khái niệm:: [[⚡Hiểu biết sâu/Ξ Khái niệm/Định lượng|Định lượng]]
```dataview
LIST rows.file.link
FROM "⚡Hiểu biết sâu/Bản thể luận, nhận thức luận, phương pháp luận/Phương pháp luận/Định lượng"
GROUP BY split(file.folder, "/")[4]
WHERE file.name != this.file.name
```