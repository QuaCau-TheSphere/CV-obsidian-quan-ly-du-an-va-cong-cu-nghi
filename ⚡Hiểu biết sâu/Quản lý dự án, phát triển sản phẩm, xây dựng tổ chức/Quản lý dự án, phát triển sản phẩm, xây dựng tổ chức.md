---
share: true
created: 2023-11-07T14:28
updated: 2023-11-07T14:28
---

```dataview
LIST rows.file.link
FROM "⚡Hiểu biết sâu/Quản lý dự án, phát triển sản phẩm, xây dựng tổ chức" 
WHERE file.name!=this.file.name
GROUP BY split(file.folder, "/")[2]
```