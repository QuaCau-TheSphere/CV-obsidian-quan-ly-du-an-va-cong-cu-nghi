---
share: true
created: 2024-02-29T23:53
updated: 2024-10-03T22:30
description: Đâu là từ khoá cần phải tìm hiểu để giải quyết nhu cầu công việc của mình? Nhất là với những nhu cầu liên quan đến máy tính
alias: Đâu là từ khoá cần phải tìm hiểu để giải quyết nhu cầu công việc của mình?
---
# Danh sách các nhu cầu công việc thường gặp
Với mỗi nhu cầu công việc cụ thể trong danh sách dưới đây, những gì ghi trong ghi chú sẽ giúp giải đáp câu hỏi: 
```
Đâu là những từ khoá cần phải tìm hiểu để giải quyết nhu cầu đó?
```

[[Thành phẩm (output) là các kết quả trực tiếp của các công việc|Việc đáp ứng các nhu cầu này tạo ra thành phẩm]].

Bài chi tiết:: [[📜Tài nguyên|Ý đồ thiết kế thư mục]]
```dataview
LIST rows.file.link
FROM "📜Tài nguyên/Nhu cầu công việc" 
WHERE file.name!=this.file.name
WHERE none([file.name, "Nơi gặp mặt trực tiếp"], (i) => contains(file.folder, i))
GROUP BY split(file.folder, "/")[2]
```

[[📐 Dự án/Các buổi đáp ứng nhu cầu công việc/4 Thành phẩm/Nghiên cứu người dùng/Nhu cầu công việc/Nhu cầu công việc|Mục tiêu và câu hỏi nghiên cứu về nhu cầu công việc]]