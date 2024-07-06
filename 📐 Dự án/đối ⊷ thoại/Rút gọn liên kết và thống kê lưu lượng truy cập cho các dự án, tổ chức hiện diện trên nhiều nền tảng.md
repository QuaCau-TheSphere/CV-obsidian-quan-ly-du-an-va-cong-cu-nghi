---
share: true
created: 2023-09-05T16:17
updated: 2024-07-05T23:56
---
# **đối ⊷ thoại**: Rút gọn liên kết và thống kê lưu lượng truy cập cho các dự án, tổ chức hiện diện trên nhiều nền tảng
Một tổ chức, mạng lưới có nhiều dự án, sản phẩm khác nhau giống như một vùng đất có nhiều lối vào và lối ra. Những người đến vùng đất đó có những lộ trình khác nhau. Việc cải thiện trải nghiệm của họ đòi hỏi những người đang xây dựng vùng đất đó biết được họ đã đến nơi này như thế nào.

Lấy ví dụ, đây là những cộng đồng do anh Bùi Quang Tinh Tú sáng lập ra và các hiện diện của chúng trên các nền tảng khác nhau:
```yaml
Diễn đàn:
  Facebook:
    Tài khoản:
      - Bui Quang Tinh Tu https://fb.com/buiquangtinhtu
    Nhóm:
      - UAN Marketing https://www.facebook.com/groups/uanvn/
      - DigiFin - Cộng Đồng Tài Chính Doanh Nghiệp https://www.facebook.com/groups/digifin
      - EDU★INFLUENCE - Cộng Đồng Cải Tiến Giáo Dục https://www.facebook.com/groups/eduinfluence
      - Người Hướng Nội Hiện Đại https://www.facebook.com/groups/huongnoihiendai
      - Mẹ Đơn Thân Vui Vẻ https://www.facebook.com/groups/medonthantainhat
    Trang:
      - Edu Influence https://www.facebook.com/eduinfluence.official
      - UAN Marketing https://www.facebook.com/uanvietnam
      - DigiFin https://www.facebook.com/digifin.official
      - The Modern Introvert - Người Hướng Nội Hiện Đại https://www.facebook.com/huongnoihiendai
  LinkedIn:
    Trang:
      - UAN Marketing https://www.linkedin.com/company/uan-vn/
  YouTube:
    Kênh:
      - UAN Marketing https://www.youtube.com/@UANMarketing
  Spotify:
    Kênh:
      - UAN Marketing https://open.spotify.com/show/5HcCuRlemSUQBSpE01jyLb?si=3b7c240a728743c4
Chat:
  Telegram:
    Nhóm:
      - UAN Marketing:
          - Tự giới thiệu dịch vụ https://t.me/uan_mkt/864
          - General https://t.me/uan_mkt/1
  Zalo:
    Nhóm:
      - Common Good Alliance https://zalo.me/g/rfthsv401
  Messenger:
    Nhóm:
      - Social Impact Member Group
Website:
  - Common Good Alliance https://good.uan.vn/
  - Conversion https://conversion.vn/
SaaS:
  Google:
    Form:
      - Community Registration Form https://docs.google.com/forms/d/e/1FAIpQLSeT6QlGtAtTknBInCT6nmxRJLEm1S_jU6Fb30ub9JsYAQZknw/viewform
```

Có rất nhiều điểm để chạm vào mạng lưới các cộng đồng này, tuỳ vào nhu cầu của mỗi người. (Hai triết gia Deleuze và Guattari hẳn sẽ gọi đây là *một vùng đất có nhiều lối vào*.)  Nếu bạn cũng đang muốn phát triển một vùng đất như vậy, có thể bạn sẽ cần **phân loại được các nguồn truy cập** đến vùng đất của bạn. Nếu điểm đến của người dùng là một website do bạn quản lý, thì bạn có thể sử dụng một dịch vụ phân tích web (VD: Google Analytics, Plausible) và gắn các tham số UTM vào liên kết của bạn. Tuy nhiên nó có những nhược điểm sau:
- **Liên kết bị dài và xấu hơn.** Ví dụ, các ký tự tiếng Việt như `tiếng Việt` (10 ký tự) sẽ bị mã hoá thành `ti%E1%BA%BFng%20Vi%E1%BB%87t` (28 ký tự). Điều này không chỉ làm liên kết dài thêm gấp 3 lần, mà còn khiến cho người dùng không biết nội dung nói về cái gì (mà cái gì ta không hiểu thì có thể thấy sợ) 
- **Chỉ áp dụng được đối với những website do bạn quản lý.** Trong khi đó sự hiện diện của bạn trên các nền tảng khác cũng quan trọng. Như bạn thấy trong danh sách trên thì các hiện diện đó mới là chính, chứ phần website quá nhỏ, và thường cũng không quan trọng (trừ khi nguồn truy cập chính của bạn là từ Google) 
- **Không có gợi ý để việc điền thông tin được thống nhất.** Mỗi nền tảng có một hệ thống thuật ngữ cho việc phân cấp khác nhau, và mỗi vị trí đăng thì lại có những vị trí đăng nhỏ hơn. Ví dụ như phần giới thiệu ở các nền tảng khác nhau có thể được gọi là description, about, bio. Hoặc việc đăng liên kết ở một bài đăng có thể là ở trong nội dung chính, dưới bình luận, trong ảnh dưới dạng QR, hoặc trong ảnh dưới dạng chữ. Nếu có nhiều người cùng làm công việc tạo liên kết UTM thì bạn phải viết hướng dẫn và họ phải chịu khó đọc hướng dẫn đó. Và kể cả khi đã làm vậy rồi thì sự lộn xộn vẫn luôn có cách để ám bạn
- **Phải điền thông tin thủ công.** Điều này làm phân tán sự tập trung của bạn cho công việc quan trọng hơn 

Với hai vấn đề đầu tiên, các dịch vụ như Bitly, Rebrandly sẽ giúp rút gọn liên kết của bạn. Tuy nhiên đến lượt nó cũng có những vấn đề khác:
- **Bị giới hạn chức năng.** Bạn không được dùng tên miền của riêng bạn, hoặc bị giới hạn số lượng liên kết nếu không trả tiền
- **Slug được tạo tự động chỉ là những ký tự ngẫu nhiên**. Nếu muốn dùng slug riêng thì cũng lại không có gợi ý để việc tạo slug được thống nhất
- **Phải tạo liên kết thủ công.** Điều này làm phân tán sự tập trung của bạn cho công việc quan trọng hơn 

Quá mệt mỏi với những vấn đề này, mình đã viết ra **đối ⊷ thoại**.

# Tính năng
- Là phần mềm tự do và mã nguồn mở
- Không cần đăng nhập
- Tìm nhanh những ghi chú được chia sẻ công khai trong kho dữ liệu của bạn, hoặc các bài đăng trên các website, diễn đàn
- Quản lý và tìm nhanh những cộng đồng bạn muốn mở cuộc đối thoại 
- Tự động tạo liên kết UTM
- Tự động rút gọn liên kết với đuôi có ý nghĩa chứ không phải là những ký tự ngẫu nhiên 
- Tự động tạo nội dung sẽ được dùng để đối thoại dựa trên ghi chú của bạn
- Thống kê số lượng truy cập tới liên kết được chia sẻ
- Mọi khai báo cấu hình đều trên tệp văn bản thuần

# Triết lý phát triển
- **Lấy nhu cầu của các tổ chức phi lợi nhuận làm trung tâm:** thúc đẩy các cuộc đối thoại trong cộng đồng theo các mục tiêu phát triển bền vững, thúc đẩy sự hợp tác đa bên, liên ngành
- **Dành cho người Việt:** không gặp vấn đề với các ký tự tiếng Việt và kết quả được viết theo cách người Việt dùng ngôn ngữ
- **Đảm bảo sự tự do và tự trị dữ liệu của người dùng:** dễ dàng tích hợp với các hệ thống bạn đang dùng (VD: Obsidian)
- **Hướng đến việc nâng đỡ người còn cảm thấy lập trình là một thứ đáng sợ**

# Cách dùng
Bạn có thể ghé thăm trang web của chương trình và dùng nó ngay lập tức như các dịch vụ như Bitly. Nếu bạn muốn nhập dữ liệu với số lượng lớn thì có thể gửi mình danh sách bài đăng và nơi đăng của bạn. Hoặc nếu muốn sử dụng bằng tên miền và hệ thống riêng của bạn thì làm theo hướng dẫn ở readme trong GitHub. Nếu bạn có thắc mắc gì thì cứ hỏi mình.

Ảnh: cách mình đã tạo ra liên kết ở dưới này 👇 

# 👉 Liên kết: https://doi-thoai.deno.dev/webđốithoại.1u.1
