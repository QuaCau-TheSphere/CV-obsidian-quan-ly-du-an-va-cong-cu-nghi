---
share: true
created: 2024-11-26T17:35
updated: 2024-11-28T01:40
---
- Thấy nó dở là vì không được tiếp cận với cái xịn, và vì không biết cách làm chủ
	- Không xài phiên bản 4 thì sao trải nghiệm được
- Dùng không được nản là phải
- Công nghệ hôm nay là thứ tệ nhất trong tương lai
	- Phát triển theo hàm lũy thừa 
- AI không thay thế được con người, nhưng người biết xài AI sẽ thay thế họ
- Giúp tập trung vào sự sáng tạo hơn, bỏ qua các công việc lặp đi lặp lại
- Đối thoại với tác giả

Thuyết trình:
- Tóm tắt cuốn sách nổi tiếng, nhiều người đã tóm tắt rồi
- Không đánh giá chất lượng sản phẩm mà chỉ nói tính năng. Xem số lượng từ như là chất lượng
- Không nói đến giọng văn, cá tính cá nhân của tác giả
- Này chủ yếu là giới thiệu AI thôi, chứ kiến thức sâu chỉ lớt phớt. Chưa nói gì về chuẩn hoá, hệ thống hoá, số hoá, tự động hoá

Chúng ta kỳ vọng AI cao quá?
## AI giúp tóm tắt
- Tại sao không đi kiếm những bài tóm tắt do người viết?
- Giả sử như không có ai viết thì có bằng chứng nào cho thấy là nó tóm tắt ở mức chấp nhận được không? Liệu nó chỉ tóm tắt tốt với các bài đơn giản? Các bài kiểm tra năng lực tóm tắt của nó cho kết quả như thế nào? 
[[Việc rút gọn cả bài thành câu tóm tắt chỉ có tác dụng khi mình hiểu dược những khái niệm quan trọng trong bài]]

Nếu phải viết prompt dài thì khác gì mình tự viết luôn cho rồi

```dataview
LIST
FROM outgoing([[Tóm tắt]])
WHERE file.name != this.file.name
```

Bản chất của việc làm slide là tạo ra md rồi dùng reveal.js

|              | Mô tả vấn đề                                                                        | Giải pháp                                    |
| ------------ | ----------------------------------------------------------------------------------- | -------------------------------------------- |
| Chuẩn hoá    | Dữ liệu không được phân loại                                                        | Dán nhãn thủ công                            |
| Hệ thống hoá | [[Silo thông tin khiến cho những thao tác tự động hoá đơn giản không thể làm được]] |                                              |
| Số hoá       | Phần mềm                                                                            |                                              |
| Tự động hoá  |                                                                                     | [[Tự động hoá các công việc lặp đi lặp lại]] |


```dataview
LIST rows.file.link
FROM "⚡Hiểu biết sâu/Công nghệ thông tin/Dữ liệu, AI/Mô hình ngôn ngữ lớn"
group by split(file.folder, "/" )[4]
WHERE ile.name != this.file.name
```

[[Nếu AI thay thế được nhân viên, thì nó cũng thay thế được quản lý]]
