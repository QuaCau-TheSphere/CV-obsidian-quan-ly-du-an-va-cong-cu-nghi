---
share: true
created: 2023-07-01T14:03
Alias: làm sao
updated: 2024-11-24T12:32
---
Khái niệm:: [[Công cụ]]

Trong mỗi ghi chú trong các danh sách về [[📜Tài nguyên/Nhu cầu công việc/Nhu cầu công việc|nhu cầu công việc]] và [[nhu cầu công nghệ]] sẽ có các hướng dẫn, thảo luận, nơi hỏi chuyên sâu về nó. Các danh sách này được tạo ra với mục đích giúp bạn [[Làm sao để tìm được thứ cần tìm khi không biết từ khoá chính xác của nó|tìm được thứ cần tìm khi không biết từ khoá chính xác của vấn đề]].

Nếu không có ghi chú nào, và việc kiếm trên Google không hiệu quả thì bạn có thể kiếm trên GitHub, Reddit, hoặc vào các trang chuyên về tìm công cụ: [ProductHunt](https://www.producthunt.com/), [Tool Finder](https://toolfinder.co/), [G2](https://www.g2.com/). Đặc biệt có dự án [Hub Review](https://www.facebook.com/minh5e/posts/pfbid02yFJTBaEBwn2oCtLfemG4a5jmXHG8uiFbcBkAsxU9MYHvnr3k99v851sq9wivUJD2l "Hoàng Đức Minh - HUB REVIEW VÀ GIỚI THIỆU GIẢI PHÁP CHO SME Sau... | Facebook") tập hợp các giải pháp/phần mềm cho SME tại Việt Nam (bao gồm cả agency lẫn SaaS).

Xem thêm:: [[Làm sao để tìm được thứ cần tìm khi không biết từ khoá chính xác của nó|Làm sao để tìm được thứ cần tìm khi không biết từ khoá chính xác của nó?]]
Xem thêm:: [[Cách để tìm plugin đúng nhu cầu của mình]]


- lock-in
- performance
- missing features
- pricing



> [!attention] Lưu ý
> [[Sản phẩm no code không thể nào đáp ứng được nhu cầu tuỳ biến cao]]. [[Các tiếp thị về low code hàm ý rằng việc code là việc khó nhất trong việc tạo sản phẩm, nhưng thực ra việc thảo luận và lên kế hoạch mới là thứ quan trọng nhất]].

## Hiểu biết sâu
```dataview
LIST rows.file.link 
WHERE contains(khái-niệm, [[Công cụ]])
GROUP BY split(file.folder, "/")[3]
WHERE file.name != this.file.name
```