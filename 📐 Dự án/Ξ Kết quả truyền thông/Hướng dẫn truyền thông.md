---
share: true
created: 2023-05-26T14:51
updated: 2026-01-14T13:11
---
Nếu bạn có thời gian thì làm, còn không thì cũng không sao.

# Nội dung giới thiệu
Giới thiệu chung thì có thể dựa vào [[Mô tả dự án|Phá vỡ silo thông tin và nắm bắt nhu cầu các bên một cách hiệu quả: tầm quan trọng của các phần mềm ghi chú động và lưu dữ liệu tại máy người dùng]], đặc biệt là phần [[Mô tả dự án#Liên thông dữ liệu giữa các nhóm dự án|Liên thông dữ liệu giữa các nhóm dự án]], hoặc có thể điều chỉnh tuỳ vào [[4 Các bên liên quan]]

# Link
Trước tiên bạn cần hiểu mã UTM là gì. Bài chi tiết: [Hướng Dẫn Tạo Mã UTM Nhằm Đo Lường Chính Xác Mức Độ Hiệu Quả Các Chiến Dịch Quảng Cáo - A1 DigiHub](https://a1digihub.com/huong-dan-tao-ma-utm-nham-do-luong-chinh-xac-muc-do-hieu-qua-cac-chien-dich-quang-cao/)

## Hướng dẫn xây dựng UTM
Điền vào theo mẫu sau:
- **Website URL:** link bài viết bạn muốn chia sẻ
- **Campaign source:** Điền theo cú pháp `Nềntảng: Tênnhóm: Chủđềthảoluận`. Trong đó:
	- **Nền tảng** là F nếu là Facebook, R nếu là Reddit, Y nếu là YouTube, F nếu là forum, E nếu là email. Nếu là ở các web khác thì giữ nguyên tên (vd: Spiderum). Nếu bạn gửi trực tiếp tới một người (qua chat, email) thì để chữ I (viết tắt của individual). Nếu bạn không muốn tiết lộ thì để chữ S (secret)
	  Đặc biệt: Nếu là Facebook thì 
	- **Tên nhóm:** Nếu bạn đăng trên các nhóm Facebook thì là tên nhóm, trên YouTube thì là tên kênh, nếu là forum thì là tên forum. Nếu gửi cho trực tiếp một người thì là tên người đó. Nếu bạn không muốn tiết lộ thì để chữ S
	- **Chủ đề thảo luận**: Chủ đề cuộc thảo luận mà ở đó bài viết trở nên hữu ích. Nếu cuộc thảo luận chính là về bài viết thì bạn để chữ O (original). Nếu bạn không muốn tiết lộ thì để chữ S
- **Campaign medium:** chọn một trong những mục sau:
	- social
	- forum
	- blog
	- vault
	- chat
	- form
	- meeting
- **Campaing name:** chọn một trong những mục sau:
	- Giới thiệu vault
	- Trấn Kỳ
	- Nói về sự hợp tác
	- Bàn luận hiểu biết
	- Chia sẻ tài nguyên
	- Giới thiệu về Obsidian
	- Thảo luận về mạng kết nối nhu cầu
	- Khác

## Một số ví dụ
### Chia sẻ [[🌟 Mở đầu|trang chủ]] thành một bài trong nhóm ABC trên Facebook
- **Campaign source:** `F G » ABC » O`
- **Campaign medium:** `social`
- **Campaign name:** `Giới thiệu vault`

### Chia sẻ trang [[Mô tả dự án|Phá vỡ silo thông tin và nắm bắt nhu cầu các bên một cách hiệu quả: tầm quan trọng của các phần mềm ghi chú động và lưu dữ liệu tại máy người dùng]] khi bình luận về bài DEF trong nhóm ABC trên Facebook
- **Campaing source:** `F G » ABC » DEF`
- **Campaign medium:** `social`
- **Campaign name:** `Nói về sự hợp tác`

### Chia sẻ trang [[💎 Giới thiệu về Obsidian]] khi trả lời bình luận GHI của bài DEF trong nhóm ABC trên Facebook
- **Campaing source:** `F G » ABC » DEF » GHI`
- **Campaign medium:** `social`
- **Campaign name:** `Giới thiệu về Obsidian`

### Chia sẻ [[Nỗi ám ảnh với sự hiệu quả có thể đến từ nỗi sợ chết]] cho người tên là ABC qua chat
- **Campaing source:** `ABC`
- **Campaign medium:** `chat`
- **Campaign name:** `Bàn luận hiểu biết`

### Chia sẻ trang [[Mô tả dự án|Phá vỡ silo thông tin và nắm bắt nhu cầu các bên một cách hiệu quả: tầm quan trọng của các phần mềm ghi chú động và lưu dữ liệu tại máy người dùng]] trong phiếu đăng ký tham gia chương trình ABC
- **Campaing source:** `ABC`
- **Campaign medium:** `form`
- **Campaign name:** `Nói về sự hợp tác`

### Chia sẻ trang [[💎 Giới thiệu về Obsidian]] khi bình luận về  bài DEF trong blog ABC 
- **Campaing source:** `ABC » DEF`
- **Campaign medium:** `blog`
- **Campaign name:** `Giới thiệu về Obsidian`
 
<iframe width=100% height=500 src="https://ga-dev-tools.appspot.com/campaign-url-builder/" > </iframe>

# Kiểm tra ảnh xem trước của link chia sẻ
<iframe width=100% height=500 src="https://developers.facebook.com/tools/debug/" ></iframe>
