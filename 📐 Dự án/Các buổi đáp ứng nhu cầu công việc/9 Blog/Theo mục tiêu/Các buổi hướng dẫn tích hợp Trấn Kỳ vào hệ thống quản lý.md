---
share: true
created: 2023-09-05T16:17
updated: 2024-08-20T21:26
description: Nhập dữ liệu và tạo bảng phân loại ngay trên hệ thống bạn đang dùng
alias:
  - Tích hợp Trấn Kỳ vào hệ thống của bạn
  - Tích hợp Trấn Kỳ vào hệ thống cá nhân
  - Nhập dữ liệu và tạo bảng phân loại ngay trên hệ thống bạn đang dùng
  - Các buổi hướng dẫn tích hợp Trấn Kỳ vào hệ thống cá nhân
---
Nếu bạn đang tìm một chương trình:
- [x] Tự động phân loại, gắn nhãn thông tin chứ không bắt bạn phải tự xử lý
- [x] Cho phép bạn khai báo dữ liệu theo thói quen và cách phân loại của chính mình
- [x] Tích hợp được vào hệ thống vận hành hiện tại của bạn:
  - Đầu vào: báo cáo ngân hàng, hoá đơn bán lẻ, Google Keep, Discord, Telegram, Zalo, Messenger, v.v.
  - Đầu ra: Google Sheet, Notion, Obsidian, Fibery, Odoo, WordPress, SQL, v.v. 
- [x] Không giam dữ liệu của bạn tại chương trình 
- [x] Không có bất cứ quảng cáo mời mọc hoặc theo dõi dữ liệu nào
- [x] Dùng được trên điện thoại khi không có mạng
- [x] Là phần mềm tự do và mã nguồn mở

Thì Trấn Kỳ CLI là dành cho bạn.

![Giao diện khởi động của Trấn Kỳ CLI](https://i.imgur.com/rBe2iQ9.png)

## Một số ví dụ về việc tích hợp Trấn Kỳ vào hệ thống
### Nhập liệu từ Google Keep
Google Keep là một phần mềm ghi chú rất phổ biến với mọi người. Nó:
- Có trên iOS, Android và web
- Mở rất nhanh và có thể mở trong tình trạng không có mạng
- Đồng bộ nhanh chóng trên tất cả các thiết bị
- Hoàn toàn miễn phí
- Cho phép nhiều người cùng chỉnh sửa một ghi chú
- Sử dụng giọng nói
- Nhập số lượng lớn

Việc có thể nhập liệu từ Google Keep sẽ giúp cho bạn có thể nhập nhanh những khoảng chi tiêu chung với khối lượng lớn vào lúc bạn không có đầu óc để phân loại, phù hợp cho gia đình, nhóm bạn, công ty những lúc chợ búa, du lịch, tổ chức sự kiện, v.v.

Hiện tại đã có sẵn plugin nhập dữ liệu từ Google Keep và tạo bảng phân loại trên Fibery. 
![[Ξ Thiết lập/Ảnh/Trấn Kỳ/Keep to Fibery.png]]

### Tổng hợp công việc hoặc quỹ ngay trên phòng chat (Discord, Slack)
Discord và Slack là những phần mềm nhắn tin phổ biến cho cộng đồng hoặc tổ chức. Một server sẽ có nhiều kênh (channel) để việc thảo luận được tập trung, không bị lạc chủ đề quá nhiều. Thông thường, các bộ phận trong tổ chức sẽ có một kênh riêng.

Trong quá trình thảo luận, thỉnh thoảng sẽ có những thông tin cần được phân loại và lưu vào hệ thống quản lý riêng, như quỹ hoặc công việc. Bạn có thể tạo bot để tự động gom các thông tin này ngay tại nơi thảo luận. Ví dụ:
- `$ họp 70k` → Ghi vào trong sổ quỹ rằng 70000 VND đã được chi cho việc họp
- `! sửa bug` → Ghi vào trong bảng tổng hợp công việc rằng cần sửa bug

Những thông tin như người nhập, kênh nhập cũng sẽ được ghi lại. Ví dụ, ghi `$ họp 70k` trong kênh Trấn Kỳ thì sẽ hiểu là lý do chi là để họp về Trấn Kỳ. Nhưng cũng với câu nhập đó trong kênh Cảo Thần thì sẽ hiểu là lý do chi là để họp về Cảo Thần.

### Tự động tạo liên kết UTM cho việc tiếp thị trực tuyến
#### Liên kết có tham số UTM là gì?
Để có thể đo lường hiệu quả các chiến dịch truyền thông trực tuyến trên Google Analytics, các tham số UTM sẽ được thêm vào đằng sau liên kết. Ví dụ, nếu bạn gửi liên kết `https://quảcầu.cc`  lên nhóm *Vùng đất Quả Cầu* và ở cả ở ngoài nhóm, thì Google Analytics sẽ không biết được có bao nhiêu người trong nhóm bấm vào và bao nhiêu người ngoài nhóm bấm vào. Nhưng nếu bạn thêm tham số UTM vào sau liên kết, ví dụ `https://quảcầu.cc/?source=Vùng đất Quả Cầu`, và chỉ gửi liên kết này vào nhóm, thì bạn sẽ biết được đã có bao nhiêu người từ nhóm bấm vào.

Có nhiều loại tham số UTM, như `source`, `medium`, `campaign`, v.v. Mỗi tham số có những giá trị riêng phải điền, nhưng nhiều lúc chỉ cần biết một cái thì sẽ suy ra được cái còn lại. Ví dụ, đăng một bài trong chiến dịch A thì `campaign` chắc chắn là A, nơi đăng là một nhóm Facebook thì `source` chắc chắn chứa tên nhóm đó, và `medium` chắc chắn là `social`, v.v.

#### Vấn đề
Có những công cụ để giúp xây những liên kết UTM như vậy (gọi là UTM builder), nhưng chúng không tự động điền những giá trị có thể tự suy đoán được. Nếu dự án của bạn có nhiều bài viết khác nhau dành cho nhiều loại đối tượng khác nhau, việc phải làm thủ công từng liên kết như vậy sẽ tốn nhiều thời gian, nhàm chán và có thể làm đau tay. Chưa kể nếu có nhiều người cùng đăng bài thì cũng có thể tạo ra sự không nhất quán. 

#### Giải pháp
Nếu tất cả những gì bạn cần chỉ là tên bài viết và nơi đăng là đủ để tạo được liên kết đầy đủ thì Trấn Kỳ sẽ tự động hoá được vấn đề này. Nó là một chương trình tự động phân loại, gắn nhãn thông tin theo thói quen và cách sắp xếp của riêng bạn bằng tiếng Việt tự nhiên, và mình đã viết thêm chức năng để nó làm được công việc này. Ví dụ:
- `obsidian vùng đất quả cầu` → Tạo `https://obsidian.quảcầu.cc/?source=Vùng đất Quả Cầu&medium=social&campaign=Công cụ nghĩ`
- `obs vdqc` → Tạo liên kết tương tự như trên, nhưng chỉ dùng mã sản phẩm và tên viết tắt

Các chức năng mở rộng khác:
- Tự động cập nhật các bài viết mới trên web của bạn
- Tự động lấy trang web bạn đang mở để làm `source` 
- Tự động xử lý punycode (cho phần tên miền) và percent-encode (cho phần URI) 
- Tự động tạo liên kết rút gọn và tạo chuyển hướng trên máy chủ
- Tự động chép liên kết vào clipboard

Điều này sẽ giúp bạn lấy được liên kết có tham số UTM cần thiết ngay tại nơi bạn đang tương tác một cách tức thời ("tại đây, bây giờ").

![](https://i.imgur.com/SIG0zj7.png)

### Lưu kết quả tiếp thị trên mạng xã hội
Chỉ dùng khi không cào được web
### Tạo thông tin chứng từ cho kế toán
### Hệ thống chấm điểm cảm xúc
Dành cho người hay quên rằng mình có nhiều 

## Các tính năng hỗ trợ khác (a.k.a. yêu cầu phi chức năng) 
- **Viết cho người Việt** nên:
	- Xử lý được từ ghép và [[Tiếng Việt có 2 cách đặt dấu thanh|các cách đặt dấu thanh khác nhau]]
	- Tên biến, tên hàm hoàn toàn bằng tiếng Việt
- **Viết cho người cần sử dụng trên các webapp khác** như Fibery, Google Sheet nên:
	- Chỉ sử dụng JavaScript thuần 
	- Đảm bảo regex không chạy lâu
	- Có sẵn build script để chuyển từ TypeScript sang JavaScript
- **Viết cho người không muốn bị ràng buộc vào một nền tảng nào** nên sẽ là một chương trình mã nguồn mở và tự do
- **Viết cho người phải tự học lập trình** nên:
	- Có rất nhiều ghi chú, hướng dẫn để cung cấp các khái niệm thiết yếu, giúp bạn xây dựng mental model cho code, để bạn hiểu được cái cách một lập trình viên kiến trúc nên một chương trình thế nào
	- Tên commit cố gắng tuân thủ [conventional commit](https://www.conventionalcommits.org/en/v1.0.0/)
	- Có script kiểm thử

> [!Important] Vault Obsidian *Tiếp thị số, xử lý dữ liệu và lập trình*
> Trong quá trình viết Trấn Kỳ, Đây là vault bổ sung cho [Obsidian, quản lý dự án và công cụ nghĩ](https://obsidian.xn--qucu-hr5aza.cc/?utm_source=CW+%C2%BB+X%E1%BB%AD+l%C3%BD+d%E1%BB%AF+li%E1%BB%87u+v%C3%A0+l%E1%BA%ADp+tr%C3%ACnh&utm_campaign=C+H%E1%BB%97+tr%E1%BB%A3+ng%C6%B0%E1%BB%9Di+t%E1%BB%B1+h%E1%BB%8Dc+qu%E1%BA%A3n+l%C3%BD+d%E1%BB%B1+%C3%A1n+ho%E1%BA%B7c+ki%E1%BA%BFn+th%E1%BB%A9c&utm_term=%C4%90%E1%BB%8Dc+b%C3%A0i+vi%E1%BA%BFt+tr%C3%AAn+web "Obsidian, quản lý dự án và công cụ nghĩ"), tập trung vào việc xử lý dữ liệu và lập trình. Nó được sinh ra trong quá trình bọn mình viết [Trấn Kỳ]([https://xn--lptrnh-zva6402d.xn--qucu-hr5aza.cc/👏Trấn](https://xn--lptrnh-zva6402d.xn--qucu-hr5aza.cc/%F0%9F%91%8FTr%E1%BA%A5n) Kỳ/ "Trấn Kỳ"), và cũng được sử dụng như tài liệu hướng dẫn cho nó. Nếu bạn muốn tìm một nguồn tài liệu để học một cách bài bản thì không nên vào đây. Nhưng nếu mục tiêu của bạn là làm xong những công việc khác, mà để làm được chúng trôi chảy bạn phải học lập trình, và bạn muốn tìm những bài viết thật ngắn nhưng đủ để hiểu khái niệm để còn làm việc được tiếp (như khi bọn mình cần phải học để còn viết xong Trấn Kỳ), thì có thể một số thứ trong đây sẽ hữu ích cho bạn.

## Lấy mã nguồn và tham gia các buổi hướng dẫn
Vậy, nếu bạn có mong muốn hiện thực hoá điều này, Quả Cầu sẽ cung cấp cho bạn cơ hội để hợp tác thực hiện thông qua việc đăng ký nhu cầu và tự định giá nhu cầu trong phiếu đăng ký dưới đây. 

Về vấn đề đăng ký nhu cầu, Quả Cầu khuyến khích bạn nêu rõ lý do bạn muốn tham gia và đồng thời **thiết kế lộ trình làm việc và kết quả đầu ra** phù hợp với nhu cầu phát triển dự án cá nhân của bạn (nếu có) dựa trên gợi ý như sau:
- Thời gian: 1 buổi (3-4 tiếng online/offline) để bạn cài đặt và hiểu công cụ + 2 tuần sau buổi đào tạo đầu tiên (hỗ trợ qua chat mỗi ngày và 2 buổi gặp mặt online/offline) để Quả Cầu trao đổi, tư vấn với bạn trong việc ứng dụng công cụ cho dự án cá nhân. 
- Nội dung:
    - Cài đặt và sử dụng các công cụ, ngôn ngữ lập trình (VS Code, Git, PowerShell, TypeScript) 
    - Lấy mã nguồn và chạy trên terminal
    - Hiểu về vật thể và API. Hiểu điều IDE đang cố gắng nói cho mình
    - Hiểu các vật thể và API của Trấn Kỳ
    - Viết API để tích hợp vào hệ thống của bạn

Về vấn đề tự định giá, Quả Cầu cho rằng **bạn nên được quyền quyết định giá trị của buổi hướng dẫn** vì đây là dự án phục vụ nhu cầu và dựa trên thiết kế lộ trình làm việc của bạn. Với nhu cầu và thiết kế đó, Quả Cầu khuyến khích bạn đề xuất giá trị của buổi hướng dẫn này với đa dạng hình thức chi trả/trao đổi nhu cầu (ví dụ: tiền hoặc các tác vụ hỗ trợ Quả Cầu theo thoả thuận).

Sau khi xem xét các đăng ký, Quả Cầu sẽ lựa chọn để trao đổi và hợp tác với những nhu cầu phù hợp.

Đọc thêm các bài sau đây để hiểu hơn về ý tưởng này:
- [[Mô hình kinh doanh của các buổi đáp ứng nhu cầu học cách sử dụng công cụ và tư duy lập trình|Khi nào thì chiến lược định giá "trả tuỳ tâm" đạt được sự bền vững?]]
- [[Các buổi đáp ứng nhu cầu học cách sử dụng công cụ và tư duy lập trình cho nhu cầu công việc]]
- [[Lý do viết Trấn Kỳ]]

Thông tin liên hệ:

- **Facebook:** [https://www.facebook.com/qua.cau.the.sphere](https://www.facebook.com/qua.cau.the.sphere)
- **Email:** quacau.thesphere@gmail.com

Rất mong được đồng hành cùng bạn.

[[Giả thiết về tiếp nhận của người đọc bài giới thiệu buổi hướng dẫn cụ thể]]