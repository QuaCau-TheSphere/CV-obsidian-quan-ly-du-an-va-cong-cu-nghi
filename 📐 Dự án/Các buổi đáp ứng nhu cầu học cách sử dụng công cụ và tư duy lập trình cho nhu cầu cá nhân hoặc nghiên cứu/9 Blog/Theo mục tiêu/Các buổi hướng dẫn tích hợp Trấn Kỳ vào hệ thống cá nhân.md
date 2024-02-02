---
share: true
created: 2023-09-05T16:17
updated: 2024-02-02T16:04
title: Tích hợp Trấn Kỳ vào hệ thống của bạn
alias: Tích hợp Trấn Kỳ vào hệ thống cá nhân
description: Các buổi hướng dẫn tích hợp Trấn Kỳ vào hệ thống cá nhân
---
Nếu bạn đang tìm một chương trình:
- [x] Tự động phân loại, gắn nhãn thông tin chứ không bắt bạn phải tự xử lý
- [x] Cho phép bạn khai báo dữ liệu theo thói quen và cách phân loại của chính mình
- [x] Tích hợp được vào hệ thống vận hành hiện tại của bạn:
  - Đầu vào: báo cáo ngân hàng, Google Keep, Discord, Telegram, Zalo, Messenger, v.v.
  - Đầu ra: Google Sheet, Notion, Obsidian, Fibery, Odoo, SQL, v.v. 
- [x] Không giam dữ liệu của bạn tại chương trình 
- [x] Không có bất cứ quảng cáo mời mọc hoặc theo dõi dữ liệu nào
- [x] Dùng được trên điện thoại khi không có mạng
- [x] Là phần mềm tự do và mã nguồn mở

Thì Trấn Kỳ CLI là dành cho bạn.

## Nhập dữ liệu và tạo bảng phân loại ngay trên hệ thống bạn đang dùng
Ví dụ, Google Keep là một phần mềm ghi chú rất phổ biến với mọi người. Nó:
- Có trên iOS, Android và web
- Mở rất nhanh và có thể mở trong tình trạng không có mạng
- Đồng bộ nhanh chóng trên tất cả các thiết bị
- Hoàn toàn miễn phí
- Cho phép nhiều người cùng chỉnh sửa một ghi chú
- Sử dụng giọng nói
- Nhập số lượng lớn

Việc có thể nhập liệu từ Google Keep sẽ giúp cho bạn có thể nhập nhanh những khoảng chi tiêu chung với khối lượng lớn vào lúc bạn không có đầu óc để phân loại, phù hợp cho gia đình, nhóm bạn, công ty những lúc chợ búa, du lịch, tổ chức sự kiện, v.v.

Hiện tại đã có sẵn phần bổ trợ (add-on) để nhập dữ liệu từ Google Keep và tạo bảng phân loại trên Fibery. Bạn có thể tự viết những phần bổ trợ khác cho phù hợp với bạn.
![[Keep to Fibery.png]]

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
	- Có rất nhiều ghi chú, hướng dẫn để cung cấp các khái niệm thiết yếu trong việc giúp bạn xây dựng mental model cho code, để bạn hiểu được cái cách một lập trình viên kiến trúc nên một chương trình thế nào. Những thứ sẽ hay được sử dụng:
		- Các phép so sánh, ẩn dụ, 
		- Các sắp đặt để tạo sự tương phản (juxtaposition) giữa các định nghĩa, ý tưởng 
		- Ý đồ thiết kế (design choice) chương trình 
	- Tên commit cố gắng tuân thủ [conventional commit](https://www.conventionalcommits.org/en/v1.0.0/)
	- Có script kiểm thử

![Giao diện khởi động](https://i.imgur.com/rBe2iQ9.png)

## Các buổi hướng dẫn sử dụng Trấn Kỳ CLI
Vậy, nếu bạn có mong muốn hiện thực hoá điều này, Quả Cầu sẽ cung cấp cho bạn cơ hội để hợp tác thực hiện thông qua việc đăng ký nhu cầu và tự định giá nhu cầu trong phiếu đăng ký dưới đây. 

Về vấn đề đăng ký nhu cầu, Quả Cầu khuyến khích bạn nêu rõ lý do bạn muốn tham gia và đồng thời **thiết kế lộ trình làm việc và kết quả đầu ra** phù hợp với nhu cầu phát triển dự án cá nhân của bạn (nếu có) dựa trên gợi ý như sau:
- Thời gian: 1 buổi (3-4 tiếng online/offline) để bạn cài đặt và hiểu công cụ + 2 tuần sau buổi đào tạo đầu tiên (hỗ trợ qua chat mỗi ngày và 2 buổi gặp mặt online/offline) để Quả Cầu trao đổi, tư vấn với bạn trong việc ứng dụng công cụ cho dự án cá nhân. 
- Nội dung:
    - Cài đặt và sử dụng các công cụ, ngôn ngữ lập trình (VS Code, Git, PowerShell, TypeScript) 
    - Chạy Trấn Kỳ trên terminal
    - Hiểu về vật thể và API
    - Viết API để tích hợp vào hệ thống của bạn. Hiểu điều IDE đang cố gắng nói cho mình

Về vấn đề tự định giá, Quả Cầu cho rằng **bạn nên được quyền quyết định giá trị của buổi hướng dẫn** vì đây là dự án phục vụ nhu cầu và dựa trên thiết kế lộ trình làm việc của bạn. Với nhu cầu và thiết kế đó, Quả Cầu khuyến khích bạn đề xuất giá trị của buổi hướng dẫn này với đa dạng hình thức chi trả/trao đổi nhu cầu (ví dụ: tiền hoặc các tác vụ hỗ trợ Quả Cầu theo thoả thuận).

Sau khi xem xét các đăng ký, Quả Cầu sẽ lựa chọn để trao đổi và hợp tác với những nhu cầu phù hợp.

Đọc thêm các bài sau đây để hiểu hơn về ý tưởng này:
- [[Mô hình kinh doanh của các buổi đáp ứng nhu cầu học cách sử dụng công cụ và tư duy lập trình|Khi nào thì chiến lược định giá "trả tuỳ tâm" đạt được sự bền vững?]]
- [[Các buổi đáp ứng nhu cầu học cách sử dụng công cụ và tư duy lập trình cho nhu cầu cá nhân hoặc nghiên cứu]]
- [[Lý do viết Trấn Kỳ]]

Thông tin liên hệ:

- **Facebook:** [https://www.facebook.com/qua.cau.the.sphere](https://www.facebook.com/qua.cau.the.sphere)
- **Email:** quacau.thesphere@gmail.com

Rất mong được đồng hành cùng bạn.

[[Giả thiết về tiếp nhận của người đọc bài giới thiệu buổi hướng dẫn cụ thể]]
