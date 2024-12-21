---
share: true
created: 2025-05-06T12:52
description: Nó khác gì với những dự án tương tự khác? Nó chấp nhận những đánh đổi nào?
aliases:
  - Động lực
updated: 2025-09-27T11:38
---
# Lý do ra đời kho địa điểm để chọn nơi gặp mặt, và hệ quả của những lý do đó
## Lý do ra đời
[[Nơi gặp mặt trực tiếp|Kho địa điểm để chọn nơi gặp mặt]] đến từ mong muốn kết nối người cần tìm địa điểm .
 Khó khăn của người cho là
- Sự khó khăn trong việc hợp tác và chia sẻ tài nguyên, nguồn lực giữa các dự án nhỏ do quá tải công việc
- Các giới hạn của các hệ thống quản lý thông tin, lưu trữ và truy xuất kiến thức mà các dự án thường sử dụng
- Sự thiếu vắng một nền kinh tế không dùng tiền vận hành hiệu quả

Dự án mong muốn:
- Giảm gánh nặng nhận thức trong việc quản lý và chia sẻ dữ liệu dự án, 
- Xây dựng hệ sinh thái nơi các thành viên có thể đóng góp dữ liệu một cách thụ động và tự động vào các cơ sở dữ liệu chung
- Tăng khả năng hợp tác và phát triển ý tưởng mới của đối tượng thụ hưởng với ít nỗ lực hơn
- [[Xây dựng hệ thống tri thức cộng đồng]], giúp mọi người [[Làm sao để tìm được thứ cần tìm khi không biết từ khoá 

Bài chi tiết: [[Mô tả dự án|Phá vỡ silo thông tin, nắm bắt nhu cầu các bên và sử dụng các nguồn tài nguyên cộng đồng hiệu quả]]

## Yêu cầu
Để làm được điều đó thì nó cần đáp ứng được các yêu cầu sau:
- Lấy người dùng làm trung tâm, chứ không phải xem họ như một loại tài nguyên
- Đáp ứng được các nhu cầu khác nhau một cách dễ dàng
- Người dùng có thể tự triển khai trên máy của họ với ít rào cản về kiến thức nhất

Trước đây đã có một số dự án tổng hợp địa điểm như Foody, Google Maps, D.Map, nhưng chúng đều không thoả mãn đồng thời cả 3 yêu cầu trên. 

Tại sao lại có những yêu cầu này, và tại sao chương trình này chấp nhận đánh đổi những tiện lợi khác để đáp ứng các yêu cầu này?

### Lấy người dùng làm trung tâm, chứ không phải xem họ như một loại tài nguyên để trích xuất
Các SaaS tổng hợp địa điểm gặp mặt như Foody, do phải tính đến vấn đề lợi nhuận, sẽ có xu hướng:
- Chèn quảng cáo, popup làm rối mắt
- Ưu tiên giới thiệu các cửa hàng trả tiền cho họ, chứ không giới thiệu thứ phù hợp nhất cho người dùng

Đây không phải là nơi để làm điều đó. Có người sẽ lập luận rằng việc kiếm tiền không xấu để ủng hộ cho hành vi này. Nhưng vẫn có những cách khác để kiếm tiền mà không phải làm những điều đó, như yêu cầu người dùng trả tiền để được sử dụng. (Nói cho chặt chẽ thì việc đó cũng không ngăn cản nhà phát hành cài cắm những kỹ thuật để khai thác người dùng. Chỉ có những [[phần mềm tự do và mã nguồn mở]] mới giải quyết triệt để vấn đề này.)

### Đáp ứng được các nhu cầu khác nhau một cách dễ dàng
Một người ở TPHCM sẽ có nhu cầu khác với một người ở Hà Nội: họ không quan tâm các địa điểm ở Hà Nội. Một người khuyết tật nhìn có nhu cầu khác với một người khuyết tật vận động: một người muốn đến nơi yên tĩnh, còn một người muốn đến nơi xe lăn đi lại dễ dàng được. Một người đi xe đạp có nhu cầu khác với một người đi xe buýt: người đi xe đạp muốn tìm quán gần nhà, còn người đi xe buýt muốn tìm quán gần các trạm xe.

Chưa kể, sự khác biệt đâu chỉ ở phía cầu, mà còn ở phía cung. Quán nước có những đặc điểm mà không gian làm việc chung, phòng họp riêng, địa điểm công cộng hay nhà riêng không có. Ngay cả trong quán nước cũng muôn hình vạn trạng: có quán cho dùng không gian miễn phí không cần gọi đồ uống, có quán thì cần gọi đồ uống. Có quán dùng ghế gây đau lưng, có quán dùng đèn gây đau mắt. Bất kể là tập trung vào đối tượng thụ hưởng nào thì những sự đa dạng này đã phải được tính đến.

Sẽ luôn luôn có những nhu cầu đặc biệt mà những người xây dựng nên nơi này cũng không tài nào đoán ra được. Sẽ có người hỏi rằng: tại sao không tập trung vào một nhu cầu cụ thể nào đó và giải quyết nó cho thật tốt? Nhưng nhu cầu cụ thể đó là nhu cầu nào? Chẳng lẽ lại là "nhu cầu tìm không gian thảo luận ở các quận nội thành TP.HCM cho 30 người có máy chiếu và micro, với người tham gia là nam dị tính hợp giới trung niên trung lưu không khuyết tật không quan tâm đến rác thải nhựa đi xe máy"? Nếu thế thì cứ kiếm những bài tổng hợp địa điểm là được rồi. Xác suất cao là dù tiêu đề bài chỉ chung chung là tổng hợp các nơi gặp mặt, thì cũng phục vụ nhu cầu của nhóm người cụ thể đó. Nếu vẫn muốn giải quyết nhu cầu "tìm nơi gặp mặt trực tiếp", thì cần đáp ứng được bất kì tổ hợp đặc điểm nào. 

tất cả các bài tổng hợp địa điểm trên mạng đều loanh quanh một vài tổ hợp như vậy, dù chỉ mang tiêu đề chung chung. Còn nếu nhu cầu chỉ là kiếm quán nước thôi thì lên Google Maps luôn cho rồi, cần gì tạo thêm nữa. Một nơi đáng bỏ công sức để làm phải vừa chung chung như kiếm nơi gặp mặt, nhưng cũng phải 

Việc đáp ứng thêm một nhu cầu nữa cũng đơn giản: chỉ cần thêm một *trường thông tin đầu vào* nữa thôi. Nên vấn đề không phải là lượng thông tin đầu vào, mà là cách ta phân loại chúng.
Động lực không phải là liệt kê tất cả các địa điểm đáp ứng một nhu cầu cụ thể, mà là không để việc thiếu thông tin xảy ra . Chứ 

Trung tâm hoá dữ liệu. Nếu chỉ cho mình thôi thì đơn giản

Để giảm khả năng chết yểu
Tại sao lại cần điều này? Vì có như vậy nó mới tránh sự chết yểu
Không bỏ ai lại phía sau cũng có nghĩa là ai cũng biết được tới điều này. 

Google Sheet, Google Maps vì nó không nằm trong các

ở ngay trong hệ thống ghi chép
[[Việc giúp đỡ người đã giúp mình không đủ khẩn cấp hoặc nhiều cảm hứng bằng việc giải quyết vấn đề tiếp theo, hoặc đủ cảm hứng bằng việc cải tiến giải pháp hiện có]]
Tự động hoá việc đẩy dữ liệu. Phải tính đến việc họ không có đầu óc để làm điều đó
[[❓Liệu quy luật 90-9-1 vẫn còn đúng cho nhóm nòng cốt]]
[[Việc phân loại không quan trọng bằng việc chuẩn bị cho sự thay đổi cách phân loại]]

Đây
- Nhu cầu tùy biến cách phân loại, cấu trúc dữ liệu người dùng
- Nhu cầu về mở rộng chức năng


Thường gặp nhất là nhu cầu tùy biến cách phân loại, cấu trúc dữ liệu người dùng, và nhu cầu mở rộng chức năng.
### Tùy biến cách phân loại, cấu trúc dữ liệu người dùng

[[Nhiệm vụ của kiến trúc sư không phải là liệt kê hết các tình huống sẽ xảy ra, mà là thiết kế để dù các tình huống không ngờ tới xảy ra thì vẫn hoạt động ổn định]]. Một ngày nào đó các tỉnh thành được sắp xếp lại
Đòi hỏi chế độ dinh dưỡng đặc biệt mà những người xây dựng nên nơi này cũng không đoán ra được trước được

Không chỉ là nhu cầu về sự phân loại khác nhau, mà còn là sự trình bày khác nhau
Không phải là nơi gặp nói chuyện mà thư viện chẳng hạn

### Mở rộng chức năng. 

- Tự động cập nhật thông tin mới lên các nền tảng khác nhau
- Có thể truy vấn dữ liệu ở các nền tảng khác (VD: Discord) 
- Tự động tạo lịch Google Calendar

- [[Tỉ lệ quay lại là thứ quan trọng nhất trong tăng trưởng]]

### Người dùng có thể tự triển khai trên máy của họ với ít rào cản về kiến thức nhất
Trong kinh nghiệm của tôi, những dự án không vì lợi nhuận sau một thời gian đều lạc hậu do không có người quản lý kế thừa. Lý do là vì dữ liệu không được lưu trữ ở định dạng đơn giản, không dễ thao tác, khiến cho việc nhập liệu và chia sẻ dữ liệu trở nên khó khăn. 
giảm thiểu gánh nặng nhận thức trong việc nhập liệu và chia sẻ dữ liệu 

Đó là lý do các SaaS như Notion không phù hợp để làm nơi lưu trữ dữ liệu.
Ngay cả
Phải ở dạng dữ liệu đơn giản nhất 
sao chép dễ dàng, không khác gì sao chép tài liệu
Quay về với thứ luôn sẵn có, ai cũng biết xài
dễ fork 
Ở ngay trong kho dữ liệu của họ
Khi cần trung tâm hóa thì mới 

Ở ngay trong hệ thống dữ liệu
[[Việc đổi mới sáng tạo bắt đầu bằng việc mỗi người có thể tự mình điều khiển được máy tính, chứ không phải có thêm một sản phẩm no code hay AI nữa]]
[[Những người tự thấy mình ngu công nghệ đơn giản là vì họ không được trao quyền tự trị dữ liệu]]

Trung tâm hoá. Giảm gánh nặng cho người kế thừa

## Phân tích ca
Kho địa điểm này khác gì với những dự án tương tự khác?

### Bản đồ tiếp cận D.Map
[D.Map](https://dmap.drdvietnam.org/#/mapx) là một bản đồ hướng đến việc giúp người khuyết tật tìm kiếm các công trình công cộng tiếp cận. Dự án được USAID và UNDP Việt Nam tài trợ, và có sự tham gia của báo chí, tổ chức sự kiện ở nhiều tỉnh thành. Vào thời điểm ra mắt, nó có cả app cho Android và iOS, nhưng bây giờ đã bị gỡ xuống.

Kiến thức để tự vận hành một cơ sở dữ liệu thế này phức tạp hơn cho người không biết gì

![[Pasted image 20250717114312.png]]
![[Pasted image 20250717114251.png]]
Dường như dự án đã ngừng hoạt động. Trong [trang giới thiệu dự án](https://www.drdvietnam.org/vi/du-an/ban-do-tiep-can-dmap/gioi-thieu/), lần cuối cùng cập nhật là 2021. Các app Andoird và iOS cũng đã bị gỡ xuống. Chức năng đăng ký không hoạt động được.

## Hệ quả của các lý do trên
Giải pháp đáp ứng được tất cả các nhu cầu này là một [[Xây dựng hệ thống tri thức cộng đồng|hệ thống tri thức cộng đồng]] dưới hình thức là một [[Tài liệu động]] được lưu ở định dạng đơn giản nhất là văn bản thuần. 
[[📐 Dự án]]
Local first 

Về mặt kỹ thuật, nó được viết bằng TypeScript với môi trường thực thi là Deno.

Nhược điểm 
Chuyển đổi sang Base có vẻ như là một xu hướng chung. 