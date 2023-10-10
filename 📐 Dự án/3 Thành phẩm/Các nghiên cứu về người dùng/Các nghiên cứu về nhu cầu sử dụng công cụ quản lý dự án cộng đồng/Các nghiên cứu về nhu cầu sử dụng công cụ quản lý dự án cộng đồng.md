---
share: true
created: 2023-05-26T14:51
updated: 2023-10-06T16:09
---
%%
#file/thành-phẩm
%%

Phục vụ cho thành quả:
```dataview
LIST
FROM #file/thành-quả 
WHERE contains(thành-phẩm,[[]])
```
Các giả thuyết cần kiểm tra:
```dataview
LIST giả-thuyết
FROM #file/thành-quả 
WHERE contains(thành-phẩm,[[]])
```
Người chơi:: 
Đối tượng thụ hưởng: `=this.file.inlinks.đối-tượng-thụ-hưởng`
Thành quả cần có:: [[1 người tham gia phỏng vấn mỗi tuần]]
Thành quả hỗ trợ:: [[3 người có 10 năm kinh nghiệm trong lĩnh vực phi lợi nhuận nhận phỏng vấn]]
Thành quả hỗ trợ:: [[3 người có 1 năm kinh nghiệm trong lĩnh vực phi lợi nhuận nhận phỏng vấn]]

- [x] [[Bài đăng kêu gọi phỏng vấn]] ✅ 2023-03-15
- [ ] Hoàn thành [[Hướng dẫn phỏng vấn người muốn xây dựng cộng đồng hoặc mạng lưới]]
- [ ] [[Email mời phỏng vấn]]
	- [ ] SNPO
	- [ ] VOGE
	- [ ] 
- [x] Phỏng vấn anh Minh ✅ 2023-03-14
- [ ] Khảo sát

Thành phẩm nhỏ hơn:
```dataview
List 
Where contains(file.folder,this.file.folder) and file.name!=this.file.name
```


# Câu hỏi nghiên cứu
- Các tổ chức lúc mới hình thành có mong có ai kết nối giùm không?
- Việc phải nói chuyện nhu cầu của nhau có khiến họ thấy mệt mỏi không?
- Họ có nghĩ việc có sẵn dữ liệu của các bên khác trong csdl của mình sẽ giúp mình hoạch định tốt hơn không?

- Họ đã thử sử dụng những cách quản lý nào rồi?
- Nếu có một công cụ giúp họ thì họ sẵn sàng bỏ ra bao nhiêu thời gian để thử nghiệm?


- Obsidian hữu ích để quản lý công việc
- Chỉ Obsidian mới có thể giúp liên thông dữ liệu một cách dễ dàng nhất

- Người dùng sử dụng dễ dàng Obsidian
