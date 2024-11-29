---
share: true
created: 2024-02-29T23:53
updated: 2024-11-01T22:20
description: Mỗi ghi chú cụ thể về nhu cầu công việc trong đây sẽ giúp bạn tìm được thứ cần tìm khi không biết từ khoá chính xác của nó
alias:
  - Đâu là từ khoá cần phải tìm hiểu để giải quyết nhu cầu công việc của mình?
  - Danh sách các nhu cầu công việc thường gặp
  - Kho tài nguyên cho việc đáp ứng các nhu cầu thường gặp trong công việc
---
# Kho tài nguyên cho việc đáp ứng các nhu cầu thường gặp trong công việc
Mỗi ghi chú cụ thể về nhu cầu công việc trong danh sách dưới đây sẽ giúp bạn [[Làm sao để tìm được thứ cần tìm khi không biết từ khoá chính xác của nó|tìm được thứ cần tìm khi không biết từ khoá chính xác của nó]]. Lưu ý rằng [[cần nghĩ về công việc như là một cách để kiểm định giả thiết, chứ không phải chỉ để hoàn thành]].

Bài chi tiết:: [[📜Tài nguyên|Ý đồ thiết kế thư mục]]

```dataview
LIST rows.file.link
FROM "📜Tài nguyên/Nhu cầu công việc" 
WHERE file.name!=this.file.name
WHERE none([file.name, "Nơi gặp mặt trực tiếp"], (i) => contains(file.folder, i))
GROUP BY split(file.folder, "/")[2]
```