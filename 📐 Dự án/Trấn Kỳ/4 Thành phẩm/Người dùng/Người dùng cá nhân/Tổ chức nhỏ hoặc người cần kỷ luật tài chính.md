---
share: true
created: 2023-10-31T19:09
alias:
  - Kế hoạch nghiên cứu người cần kỷ luật tài chính
  - Nghiên cứu người cần kỷ luật tài chính
  - Các nghiên cứu người cần kỷ luật tài chính
updated: 2024-02-17T22:36
---
[[Một số ví dụ về mục tiêu nghiên cứu]]
[[Phỏng vấn]]
[[Giả thiết về giá trị của Trấn Kỳ]]

| Thành phẩm cần có | Hành vi cần đạt được | Giả thiết | Công việc |
| ----------------- | -------------------- | --------- | --------- |
| Làm demo          |                      |           |           |

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