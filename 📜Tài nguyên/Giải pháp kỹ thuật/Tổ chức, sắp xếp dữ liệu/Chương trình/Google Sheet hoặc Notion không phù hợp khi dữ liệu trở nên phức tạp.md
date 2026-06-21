---
share: true
created: 2025-12-31T11:01
updated: 2026-06-21T20:13
---
# Khi nào thì Google Sheet hoặc Notion không phù hợp để dùng?
Theo dõi protocol quan trọng

Giao cho nhân sự
Bản chất của việc xây dựng danh bạ là gì? Là [[Phân loại|phân loại, dán nhãn]] và truy vấn dữ liệu. Nên 

[[Lý do ra đời và hệ quả]]
- Giảm gánh nặng nhận thức trong việc quản lý và chia sẻ dữ liệu dự án, 
- Xây dựng hệ sinh thái nơi các thành viên có thể đóng góp dữ liệu một cách thụ động và tự động vào các cơ sở dữ liệu chung
- Tăng khả năng hợp tác và phát triển ý tưởng mới của đối tượng thụ hưởng với ít nỗ lực hơn
[[Thời gian để ta thấy không bị ngắt mạch là 100 ms]]

[[Việc lưu dữ liệu ở các công cụ khác nhau tạo thành các silo thông tin]]
Khi nói tới việc xây dựng một [[hệ thống thông tin]] cho một tổ chức, chẳng hạn như việc xây dựng danh bạ để [[Quản lý các mối quan hệ]] , thường 
[[Excel là loài gián trong ngành phần mềm]]
[[Sản phẩm no code đem đến sự phản hồi tức thời]]
[[Ưu tiên giao thức hơn nền tảng]]
Notion
fb vẫn muốn mọi người lệ thuộc
[[Dùng low code để xây dựng hệ thống là đang mang nợ kỹ thuật vào người]]

[[Việc lập trình ít trực giác hơn nhưng lại có nhiều đánh đổi hơn các ngành khác|thường các giải pháp đều thuộc dạng được này thiếu kia]]. Vì vậy, người quản trị nên biết trước các đánh đổi mình sẽ phải đối diện. Đây là một số tiêu chí thường gặp ở các tổ chức nhỏ:

| Tiêu chí cho người quản trị                                                                                                               | Notion (hoặc các SaaS khác)                                     | Obsidian (hoặc các chương trình soạn thảo văn bản thuần khác)      |
| ----------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------- | ------------------------------------------------------------------ |
| Cách thức [[Phân loại, dán nhãn, khai báo metadata là những cái tên khác nhau cho cùng một thứ\|phân loại, dán nhãn]] và truy vấn dữ liệu | <span style="color:green">Đơn giản</span> (nhưng kém linh hoạt) | <span style="color:green">Linh hoạt</span> (nhưng không trực quan) |
| Thời gian chờ cho từng thao tác                                                                                                           | Có                                                              | <span style="color:green">Tức thời</span>                          |
| Thiết bị dùng để thao tác                                                                                                                 | Chủ yếu là chuột                                                | <span style="color:green">Cả chuột và bàn phím</span>              |
| Sử dụng chương trình khác để đọc dữ liệu                                                                                                  | Không                                                           | <span style="color:green">Có</span>                                |
| Nắm được bản chất của dữ liệu và tự động hóa                                                                                              | Kém                                                             | <span style="color:green">Rất tốt</span>                           |
| Có [[đồ thị mạng lưới giúp thấy được bức tranh tổng thể]]                                                                                 | Không                                                           | <span style="color:green">Có</span>                                |

Thông thường với mục tiêu quản lý thì tới đây là ổn rồi. Nhưng nếu bạn muốn [[Phát triển cộng đồng]], [[xây dựng mạng lưới, hệ sinh thái]] thì bạn có thể còn muốn những cá nhân, tổ chức được liệt kê trong danh sách này cũng phải thấy được nó để có thể kết nối được với nhau. Tức là về bản chất, nó không chỉ dừng lại ở chuyện [[Xây dựng kho tri thức, hệ thống quản lý kiến thức hoặc quản lý dự án|xây dựng hệ thống quản lý]], mà còn là [[xây dựng kho tài nguyên cộng]]. Tức là phải chia sẻ dữ liệu lên web. Đây là các tiêu chí thường gặp để so sánh các giải pháp đáp ứng nhu cầu này:

| Tiêu chí cho việc chia sẻ lên web                                                | Notion (hoặc các SaaS khác)                                                                        | Web tĩnh                                              |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | ----------------------------------------------------- |
| Cài đặt dễ dàng                                                                  | <span style="color:green">Không phải cài đặt gì</span>                                             | Không                                                 |
| Tự động chuyển trang đường dẫn thay đổi                                          | <span style="color:green">Người dùng truy cập vào URL cũ sẽ tự động chuyển sang URL mới</span>     | Phải tự thiết lập chuyển URL, nếu không sẽ bị lỗi 404 |
| Bình luận ngay trong trang                                                       | <span style="color:green">Có hướng dẫn ngay tại nơi thiết lập, chỉ cần bấm nút hoặc kéo thả</span> | Phải cài đặt thêm                                     |
| Người dùng có thể lọc                                                            | <span style="color:green">Có</span>                                                                | Phải cài đặt thêm                                     |
| Chi phí                                                                          | Phải mua tên miền và host                                                                          | <span style="color:green">Chỉ cần mua tên miền</span> |
| Tốc độ tải                                                                       | Trang hơi phức tạp là dễ bị chậm                                                                   | <span style="color:green">Luôn nhanh</span>           |
| Đáp ứng [[thiết kế bao trùm]]                                                    | Không                                                                                              | <span style="color:green">Tốt</span>                  |
| Sử dụng thiết kế riêng                                                           | Không                                                                                              | <span style="color:green">Có</span>                   |
| Người dùng có thể tự triển khai trên máy của họ với ít rào cản về kiến thức nhất | Không                                                                                              | <span style="color:green">Có</span>                   |

Các SaaS làm được một việc chí mạng mà web tĩnh không làm được: trực quan với người dùng phổ thông:

| Tiêu chí                                                                                                                                  | Notion (hoặc các SaaS khác)                            | Web tĩnh        |
| ----------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ | --------------- |
| Cài đặt dễ dàng                                                                                                                           | <span style="color:green">Không phải cài đặt gì</span> | Không           |
| Cách thức [[Phân loại, dán nhãn, khai báo metadata là những cái tên khác nhau cho cùng một thứ\|phân loại, dán nhãn]] và truy vấn dữ liệu | <span style="color:green">Đơn giản</span>              | Không trực quan |

Tuy nhiên, khi dữ liệu càng ngày càng nhiều, bạn sẽ thấy mình càng ngày càng cần những điều sau:

| Tiêu chí                                                                                                                                  | Notion (hoặc các SaaS khác) | Obsidian (hoặc các chương trình soạn thảo văn bản thuần khác) và web tĩnh |
| ----------------------------------------------------------------------------------------------------------------------------------------- | --------------------------- | ------------------------------------------------------------------------- |
| Thời gian chờ tải cho từng thao tác                                                                                                       | Tốn thời gian chờ           | <span style="color:green">Tức thời</span>                                 |
| Cách thức [[Phân loại, dán nhãn, khai báo metadata là những cái tên khác nhau cho cùng một thứ\|phân loại, dán nhãn]] và truy vấn dữ liệu | Kém linh hoạt               | <span style="color:green">Linh hoạt</span>                                |
| Thiết bị dùng để thao tác                                                                                                                 | Chủ yếu là chuột            | <span style="color:green">Chủ yếu là bàn phím</span>                      |
| Sử dụng chương trình khác để đọc dữ liệu                                                                                             | Không                       | <span style="color:green">Có</span>                                       |
| Người dùng có thể tự triển khai trên máy của họ với ít rào cản về kiến thức nhất                                                          | Không                       | <span style="color:green">Có</span>                                       |

Đây là những điểm chí mạng mà các SaaS không giải quyết được. Nói cách khác, sử dụng SaaS khi bạn mới bắt đầu ý tưởng và cần [[Cần nghĩ về công việc như là một cách để kiểm định giả thiết, chứ không phải chỉ để hoàn thành|nhanh chóng kiểm định các giả thiết của mình]]. Còn dùng chương trình soạn thảo văn bản thuần kết hợp với web tĩnh khi bạn càng ngày càng thấy nó giựt lag và [[Các ERP được dựng sẵn không đủ khả năng đáp ứng những luồng làm việc và suy nghĩ đặc thù|kém linh hoạt]].

Nhưng vấn đề là bạn khó mà chuyển đổi từ SaaS sang giải pháp tốt hơn do dữ liệu của bạn bị giam ở đó (không sử dụng được chương trình khác để đọc dữ liệu). Nên tốt nhất là không dùng SaaS ngay từ đầu. Một người hướng dẫn sẽ giúp họ vượt qua điểm chí mạng về sự trực quan.


## Đọc thêm
- [[Mô tả dự án|Từ việc phá vỡ silo thông tin và sử dụng hiệu quả các nguồn lực cộng đồng, đến hệ thống quản lý niềm tin và nền kinh tế không dùng tiền: vai trò của các phần mềm ghi chú động lưu dữ liệu tại máy người dùng và ở định dạng đơn giản]] 
- [[WordPress giúp việc tạo web dễ dàng nhất, chứ không phải là thứ quản lý web hiệu quả nhất]]
- [[Văn bản thuần là dạng tổ chức dữ liệu đơn giản nhất]]
- [[Các buổi đáp ứng nhu cầu học cách sử dụng công cụ và tư duy lập trình cho nhu cầu công việc]]
[[Notion]]
