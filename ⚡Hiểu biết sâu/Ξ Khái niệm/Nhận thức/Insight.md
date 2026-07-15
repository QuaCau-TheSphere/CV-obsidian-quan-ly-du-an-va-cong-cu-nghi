---
share: true
created: 2023-09-05T16:17
updated: 2026-06-01T19:27
aliases:
  - Điểm mấu chốt
---
Các cách dịch:
- Điểm mấu chốt
- Hiểu biết sâu
- Nội thị

```dataview
LIST rows.file.link
FROM [[]]
GROUP BY split(file.folder, "/")[1]
WHERE file.name != this.file.name
```
