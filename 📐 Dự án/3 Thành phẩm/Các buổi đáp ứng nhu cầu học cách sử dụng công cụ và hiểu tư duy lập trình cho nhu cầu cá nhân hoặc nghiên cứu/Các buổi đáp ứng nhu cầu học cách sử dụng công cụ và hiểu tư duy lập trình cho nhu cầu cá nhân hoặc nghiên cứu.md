---
share: True
---
%%
#file/thành-phẩm/bài-viết 
%%

Phục vụ cho thành quả:
```dataview
LIST
FROM #file/thành-quả 
WHERE contains(thành-phẩm,[[]])
```
Người chơi:: 

Thành quả cần có::
Thành quả hỗ trợ::

Thành phẩm nhỏ hơn:
```dataview
List 
From #file/thành-phẩm 
Where contains(file.folder,this.file.folder) and file.name!=this.file.name
```

Tiêu đề của bài là *`=[[]].file.name`*. Nó gồm có 3 phần:
- Các buổi đáp ứng nhu cầu học
- cách sử dụng công cụ và hiểu tư duy lập trình
- cho nhu cầu cá nhân hoặc nghiên cứu

Chúng ta hãy nói thêm về những ý này.

## Đáp ứng nhu cầu học không đồng nhất với giảng bài
Không phải là giảng viên giảng bài, mà là tất cả cùng thảo luận mở. Những nhu cầu của mọi người
Mọi người có câu hỏi và ai biết câu trả lời thì sẽ trả lời. Có thể sẽ có một ai đó biết nhiều câu trả lời hơn những người còn lại, nhưng điều đó là không quan trọng.
Nếu bạn có một dự án và muốn tìm hiểu kiến thức để chạy dự án thì cứ lấy ra
Những tài nguyên bạn biết được bạn sẽ có không gian để chia sẻ và mọi người sẽ cùng bàn luận
Việc được hỏi cũng sẽ đảm bảo rằng ai cũng hiểu được vấn đề. Đủ thời gian để tiếp thu và nghiền ngẫm trước khi nội dung khác. Những người khác cũng có thể giải thích 
Nó sẽ không có mục tiêu được định trước, mà mục tiêu sẽ được nảy nở trong quá trình thảo luận
Có thể nói hai ý sau (sử dụng công cụ và hiểu tư duy lập trình cho nhu cầu cá nhân hoặc nghiên cứu) chỉ là cái cớ để đến gặp nhau. 

|                                                   | Nhóm tự học | Lớp học trả tiền                | Chuỗi video | Cộng đồng thảo luận             |
| ------------------------------------------------- | ----------- | ------------------------------- | ----------- | ------------------------------- |
| Ví dụ                                             |             | Các lớp học chính quy, workshop | CS50        | Stack Overflow, Discord         |
| Được trả lời ngay lập tức                         | ✔           | ✔                               | ❌          | ❌ (nhưng thường là cũng nhanh) |
| Không đòi hỏi phải tìm hiểu trước khi đặt câu hỏi | ✔           | ✔                               | ❌          | ✔                               |
| Có thể xem lại sau                                | ✔           | ✔                               | ✔           | ✔                               |
| Đáp ứng nhu cầu của người tham gia                | ✔           | ✔                               | ✔           | ✔                                |
|                                                   |             |                                 |             |                                 |

## Cách sử dụng công cụ và hiểu tư duy lập trình không đồng nhất với kiến thức lập trình
Sẽ cần phải nói về kiến thức lập trình, nhưng đó không phải trọng tâm chính
Các lớp học lập trình có rất nhiều. [[❓ Học code bằng việc debug product code sẽ nhanh hơn]]. Họ cũng rất tâm huyết và nhiều kiến thức hơn mình. Mình còn phải đi học họ thì mình không nghĩ bạn cần phải tìm đến mình vì điều đó

[[Người mới lập trình thường hỏi nên dùng cú pháp, thư viện, hay ngôn ngữ nào. Lập trình viên nhiều kinh nghiệm thường tập trung vào các khái niệm trừu tượng]]
[[Người mới lập trình thường chỉ biết muốn biết làm sao để code chạy được. Người có kinh nghiệm còn quan tâm đến tính dễ bảo trì, mở rộng và bắt lỗi của code]]. Nhưng muốn có kinh nghiệm thì phải code nhiều, mà bạn thì không thấy mình phải code nhiều 
Cân bằng giữa hệ sinh thái và những công cụ mới .

Có nền tảng thì tốt, nhưng nếu bạn muốn bắt đầu từ nền tảng trước thì 
## Giải quyết nhu cầu cá nhân hoặc nghiên cứu không đồng nhất với kiếm tiền bằng lập trình
nếu bạn cảm thấy nhu cầu của mình không đến mức phức tạp, thì cái này dư sức
Nếu bạn không có nhu cầu làm công ty, mà chỉ muốn có thể tự chủ về công nghệ và chỉ muốn giải quyết bài toán của mình mà thôi, không có ý định lập trình chuyên nghiệp
[[Bỏ công đi học lập trình thì không đáng, nhưng không biết thì sẽ rất lệ thuộc vào người khác]]
Nó đúng kiểu bạn không muốn nước đến chân mới nhảy, nhưng bạn cũng biết rằng nước mà không đến chân thì bạn sẽ không thể nhảy. Bạn có thể nhảy, nhưng bạn còn rất nhiều cái khác để làm. Những thứ khẩn cấp hơn đó sẽ chiếm đoạt tâm trí bạn.

Bạn có thể kiếm tiền từ đây, có thể đủ sức để nộp đơn vào vị trí lập trình viên trong các công ty. Bọn mình mừng cho bạn, nhưng với bọn mình điều đó là không quan trọng.
[[Có những câu hỏi ta rất muốn có câu trả lời nhưng mãi mà vẫn chưa đi google]]

# Mục tiêu
- Hiểu được một số khái niệm của ngôn ngữ hướng vật thể: object, method, array, for, if, import, function, type, interface
- Nắm được cách làm việc với:
	- Git
	- Terminal
	- IDE:
		- Hiểu được IDE đang cố gắng nói cho mình cái gì
- Nắm được các kỹ năng đọc code product:
	- Hiểu được cấu trúc một dự án
	- Hiểu một số nguyên tắc viết code để dễ bảo trì, mở rộng tính năng
	- Biết một số kỹ thuật debug: console.log, debugger, unit test
# Những sản phẩm có thể nói

| Nhu cầu                                                  | Sản phẩm                                                       | Ngôn ngữ               | Khái niệm                                  | Công cụ                     | Khuyến khích biết trước |
| -------------------------------------------------------- | -------------------------------------------------------------- | ---------------------- | ------------------------------------------ | --------------------------- | ----------------------- |
| Tự động hoá các công việc lặp đi lặp lại                 |                                                                | AutoHotKey, PowerShell | Path, shell, biến môi trường               | Terminal                    |                         |
| Truy vấn và khai thác dữ liệu                            |                                                                | SQL                    | Cơ sở dữ liệu                              |                             |                         |
| Tạo đồ thị                                               |                                                                |                        |                                            | Graphviz, Mermaid           |                         |
| Lập web cá nhân, quản lý phiên bản                       | Tạo web tĩnh                                                   | HTML                   | Web, version control, conventional commit  | Git, GitKraken, GitHub Page |                         |
| Quản lý và chia sẻ kiến thức                             | Obsidian và web trên netlify                                   | Python                 | Web                                        | Obsidian, Mkdocs, Netlify   | Git, terminal           |
| Tạo web dự án                                            | Tạo web động                                                   | PHP                    | Host, nameserver, CDN                      | WordPress, Cloudflare       |                         |
| Quản lý tài chính cá nhân, hiểu dân dev nói gì           | Script phân loại chi tiêu bằng tiếng Việt tự nhiên trên Fibery | Javascript/TypeScript  | OOP, SOLID, debug, unicode, design pattern | VS Code, Deno, Fibery       | Git, terminal           |
| Nghiên cứu cộng đồng mạng, nắm bắt xu hướng, nhân văn số | WE1S                                                           | Python                 | NLP, khối dữ liệu, API                     |                             | Git, terminal           |
# Kết quả đầu ra
- Biết được người ta nói cái gì khi google 
- Biết cách dùng github

[[Hướng dẫn đọc code cho người thấy việc biết lập trình là quan trọng nhưng không thể biến nó trở thành ưu tiên cao nhất]]
[[Khảo sát người có nhu cầu học lập trình]] 