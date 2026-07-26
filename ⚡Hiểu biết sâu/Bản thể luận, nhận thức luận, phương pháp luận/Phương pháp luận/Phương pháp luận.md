---
share: true
created: 2026-07-16T13:27
updated: 2026-07-16T13:33
---
- [[Định tính]]
- [[⚡Hiểu biết sâu/Bản thể luận, nhận thức luận, phương pháp luận/Phương pháp luận/Định lượng/Định lượng|Định lượng]]
```dataview
LIST rows.file.link
FROM "⚡Hiểu biết sâu/Bản thể luận, nhận thức luận, phương pháp luận/Phương pháp luận"
GROUP BY split(file.folder, "/")[3]
WHERE file.name != this.file.name
```