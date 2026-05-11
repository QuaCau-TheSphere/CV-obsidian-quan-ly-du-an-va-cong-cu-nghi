---
share: true
created: 2024-07-28T21:54
updated: 2026-03-11T13:56
aliases:
  - ngắn hạn
  - khẩn cấp
  - dài hạn
  - quan trọng
  - bền vững
---
Xem thêm:: [[Kế hoạch (khái niệm)]]
```dataview
LIST rows.file.link
WHERE contains(khái-niệm, [[]])
GROUP BY split(file.folder, "/")[2]
WHERE file.name != this.file.name
```