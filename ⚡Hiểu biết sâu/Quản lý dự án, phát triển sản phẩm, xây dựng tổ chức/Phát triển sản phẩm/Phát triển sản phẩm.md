---
share: true
created: 2023-10-16T22:57
updated: 2023-11-01T14:26
---

```dataview
LIST rows.file.link
FROM "⚡Hiểu biết sâu/Quản lý dự án, phát triển sản phẩm, xây dựng tổ chức/Phát triển sản phẩm" 
WHERE file.name!=this.file.name
group by split(file.folder, "/")[3] 
```
