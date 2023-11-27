---
share: true
created: 2023-10-31T19:09
alias:
  - Kế hoạch nghiên cứu người dùng Trấn Kỳ
  - Nghiên cứu người dùng Trấn Kỳ
updated: 2023-11-17T22:27
---
[[Một số ví dụ về mục tiêu nghiên cứu]]
[[Phỏng vấn]]
[[Giả thiết về điều người dùng nhận được]]

| Thành quả mong muốn                                                | Giả thiết | Công việc |
| ------------------------------------------------------------------ | --------- | --------- |
| 3 người làm phát triển sản phẩm, khởi nghiệp, dự án nhận phỏng vấn |           |           |
| 3 người làm tài chính nhận phỏng vấn                               |           |           |

```dataview
LIST rows.file.link
FROM "📐 Dự án/Trấn Kỳ/4 Thành phẩm/Nghiên cứu người dùng" 
WHERE file.name!=this.file.name
GROUP BY split(file.folder, "/")[4]
```