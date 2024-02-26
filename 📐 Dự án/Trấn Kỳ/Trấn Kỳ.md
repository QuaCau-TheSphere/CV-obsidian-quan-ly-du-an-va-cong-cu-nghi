---
share: true
created: 2023-10-28T22:41
updated: 2024-02-14T00:06
---

```dataview
LIST rows.file.link
FROM "📐 Dự án/Trấn Kỳ" 
WHERE file.name!=this.file.name
GROUP BY split(file.folder, "/")[2]
```
Tạo metadata, tự động hoá việc nhập liệu và phân loại, gắn nhãn, để biến dữ liệu phi cấu trúc thành dữ liệu có cấu trúc