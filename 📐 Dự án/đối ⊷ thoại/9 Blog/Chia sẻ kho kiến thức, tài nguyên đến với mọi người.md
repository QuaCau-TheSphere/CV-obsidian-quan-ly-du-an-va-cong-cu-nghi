---
share: true
created: 2023-09-05T16:17
updated: 2024-07-18T13:17
---
# **đối ⊷ thoại**: Chương trình tìm và chia sẻ kho kiến thức, tài nguyên đến với mọi người
Nếu bạn cần chia sẻ kho thông tin (vault) của mình tới người khác, đặc biệt là khi bạn đang dùng điện thoại còn người nhận thì không quen dùng Obsidian, thì giải pháp thường là sao chép nội dung ghi chú rồi gửi qua tin nhắn. Nhưng việc đó làm mất liên kết tới các ghi chú khác. Nếu bạn muốn họ có trải nghiệm tương tự như khi dùng Obsidian thì bạn cần tạo website từ kho của mình. Bạn có thể mua gói Publish của Obsidian, hoặc sử dụng các plugin tạo website khác. Nếu nhu cầu bạn dừng ở đó và bạn không thấy có vấn đề gì cả thì bạn cũng không cần đọc tiếp bài này.

Riêng với mình, thì mình gặp những vấn đề sau:
- **Đường dẫn khi chia sẻ quá dài.** Nếu ghi chú của bạn có tiêu đề là một câu dài và ở sâu trong nhiều cấp thư mục, thì khi chia sẻ trên điện thoại liên kết của nó có khi dài cả một màn hình
- **Các ký tự tiếng Việt sẽ bị mã hoá trong đường dẫn.** Ví dụ như `tiếng Việt` (10 ký tự) sẽ bị mã hoá thành `ti%E1%BA%BFng%20Vi%E1%BB%87t` (28 ký tự). Điều này không chỉ làm liên kết dài thêm gấp 3 lần, mà còn khiến cho người nhận không biết nội dung nói về cái gì (mà cái gì ta không hiểu thì có thể thấy sợ) 
- **Việc tìm liên kết cũng bất tiện.** Chẳng hiểu sao plugin mình dùng lại làm web tải khá chậm và thanh tìm kiếm không hoạt động được, nên mỗi lần chia sẻ liên kết là lại phải lục theo từng cấp thư mục. Mình có nhiều kho thông tin khác nhau, và mỗi lần tìm thì đều muốn được gợi ý ghi chú ở cả những kho khác (nếu có liên quan với từ khoá) 
- **Không có dữ liệu về người truy cập.** Điều này có thể khắc phục nếu website có cài một dịch vụ phân tích web (VD: Google Analytics, Plausible), nhưng dữ liệu nhận về vẫn còn chung chung chứ không phân biệt được các nguồn khách khác nhau. Như vậy thì chưa đủ để kiểm định một giả thiết cụ thể. Có thể giải quyết được việc này bằng việc thêm các tham số UTM, nhưng đến lượt nó cũng tạo ra những vấn đề mới:
    - Sự tập trung của bạn bị phân tán hơn nữa
    - Liên kết bị dài hơn nữa
    - Không có biểu mẫu để việc điền được thống nhất, không bị lộn xộn
- Sử dụng một dịch vụ rút gọn liên kết (VD: Bitly, Rebrandly) sẽ giải quyết được vấn đề liên kết quá dài và ký tự tiếng Việt bị mã hoá, nhưng nó cũng không giải quyết được những vấn đề sau:
    - Sự tập trung của bạn bị phân tán hơn nữa, đặc biệt trong lúc chờ web tải xong
    - Không có biểu mẫu để việc điền được thống nhất
    - Không được dùng tên miền của mình, hoặc bị giới hạn số lượng liên kết nếu không trả tiền

Quá mệt mỏi với những vấn đề này, mình đã viết ra **đối ⊷ thoại**.

## Tính năng
- Là phần mềm tự do và mã nguồn mở
- Không cần đăng nhập
- Tìm nhanh những ghi chú được chia sẻ công khai trong kho dữ liệu của bạn, hoặc các bài đăng trên các website, diễn đàn
- Quản lý và tìm nhanh những cộng đồng bạn muốn mở cuộc đối thoại
- Tự động tạo liên kết UTM để có thể sử dụng với các chương trình phân tích web khác
- Tự động rút gọn liên kết với đuôi có ý nghĩa chứ không phải là những ký tự ngẫu nhiên 
- Tự động tạo nội dung sẽ được dùng để đối thoại dựa trên ghi chú của bạn
- Thống kê số lượng truy cập tới liên kết được chia sẻ
- Mọi khai báo cấu hình đều trên tệp văn bản thuần

## Triết lý phát triển
- **Lấy nhu cầu của các tổ chức phi lợi nhuận làm trung tâm:** thúc đẩy các cuộc đối thoại trong cộng đồng theo các mục tiêu phát triển bền vững, thúc đẩy sự hợp tác đa bên, liên ngành
- **Dành cho người Việt:** không gặp vấn đề với các ký tự tiếng Việt và kết quả được viết theo cách người Việt dùng ngôn ngữ
- **Đảm bảo sự tự do và tự trị dữ liệu của người dùng:** dễ dàng tích hợp với các hệ thống bạn đang dùng (VD: Obsidian)
- **Hướng đến việc nâng đỡ người còn cảm thấy lập trình là một thứ đáng sợ**

## Cách dùng
Bạn có thể ghé thăm trang web của chương trình và dùng nó ngay lập tức như các dịch vụ như Bitly. Nếu bạn muốn nhập dữ liệu với số lượng lớn thì có thể gửi mình danh sách bài đăng và nơi đăng của bạn. Hoặc nếu muốn sử dụng bằng tên miền và hệ thống riêng của bạn thì làm theo hướng dẫn ở readme trong GitHub. Nếu bạn có thắc mắc gì thì cứ hỏi mình.

Ảnh: cách mình đã tạo ra liên kết ở dưới này 👇 

👉 Liên kết: