---
share: true
created: 2023-10-31T19:09
alias:
  - Kế hoạch nghiên cứu người dùng Trấn Kỳ
  - Nghiên cứu người dùng Trấn Kỳ
updated: 2023-11-12T13:43
---
[[Một số ví dụ về mục tiêu nghiên cứu]]
[[Khảo sát, phỏng vấn người dùng]]

| Thành quả mong muốn                   | Giả thiết | Công việc |
| ------------------------------------- | --------- | --------- |
| Mỗi loại người dùng phỏng vấn 5 người |           |           |
|                                       |           |           |

```dataview
LIST rows.file.link
FROM "📐 Dự án/Trấn Kỳ/4 Thành phẩm/Nghiên cứu người dùng" 
WHERE file.name!=this.file.name
GROUP BY split(file.folder, "/")[4]
```