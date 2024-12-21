---
share: true
created: 2023-10-28T22:40
updated: 2025-09-18T19:30
---

> [!info] Bài chi tiết
>[[Mô tả dự án|Phá vỡ silo thông tin, nắm bắt nhu cầu các bên và sử dụng các nguồn tài nguyên cộng đồng hiệu quả: vai trò của các phần mềm ghi chú động lưu dữ liệu tại máy người dùng và ở định dạng đơn giản]]

## Vấn đề mong muốn giải quyết
- Sự khó khăn trong việc hợp tác và chia sẻ tài nguyên, nguồn lực giữa các dự án nhỏ do quá tải công việc
- Các giới hạn của các hệ thống quản lý thông tin, lưu trữ và truy xuất kiến thức mà các dự án thường sử dụng
- Sự thiếu vắng một hệ thống quản lý niềm tin (belief manager) giúp giảm sự mâu thuẫn trong niềm tin, từ đó hỗ trợ thay đổi hành vi của người dùng và cộng đồng
- Sự thiếu vắng một nền kinh tế không dùng tiền vận hành hiệu quả
- [[Chưa thấy có dự án nào nói về việc làm giảm tải gánh nặng công việc cho người bên cạnh mình]]

Dự án mong muốn:
- Giảm gánh nặng nhận thức trong việc quản lý và chia sẻ dữ liệu dự án, 
- Xây dựng hệ sinh thái nơi các thành viên có thể đóng góp dữ liệu một cách thụ động và tự động vào các cơ sở dữ liệu chung
- Tăng khả năng hợp tác và phát triển ý tưởng mới của đối tượng thụ hưởng với ít nỗ lực hơn
- [[Xây dựng hệ thống tri thức cộng đồng]], giúp mọi người [[Làm sao để tìm được thứ cần tìm khi không biết từ khoá chính xác của nó|tìm được thứ cần tìm khi không biết từ khoá chính xác của nó]]

## Đối tượng thụ hưởng 
Đối tượng thụ hưởng là những người đang cảm thấy quá tải và thiếu công cụ hiệu quả để quản lý thông tin cho việc phát triển dự án, tổ chức, cộng đồng, mạng lưới, hệ sinh thái. Thường họ là nhà hoạt động xã hội hoặc khởi nghiệp, nhưng cũng có thể là nhà nghiên cứu. Các nhu cầu của họ bao gồm:

- Làm nghiên cứu, quản lý kiến thức
- [[Kế hoạch|Làm chủ máy tính, làm chủ dữ liệu]]
- Có được hiểu biết sâu về xu hướng tư duy của mình. Nhìn thấy được các giả định của mình. Thảo luận về các công cụ nghĩ
- [[Nhu cầu công việc|Vận hành dự án, tổ chức]]
- Đóng góp và chia sẻ tài nguyên, nguồn lực
- [[Nơi gặp mặt trực tiếp|Tìm nơi gặp mặt trực tiếp]]

Các nhu cầu liên quan đến nghiên cứu, vận hành được nói cụ thể trong [[Nhu cầu công việc]] và [[Nhu cầu công nghệ]].

### Đặc điểm nhân khẩu học
Dự đoán đa phần họ sẽ ở các đô thị lớn và không quá 35 tuổi. Với các tổ chức nhỏ thì họ thường là những bạn trẻ mới tốt nghiệp đại học, chưa có nhiều mối quan hệ. Trong tổ chức họ thường tất cả các thành viên đều là người phải làm công việc xử lý, quản lý, hệ thống hóa dữ liệu trong các tổ chức. Nếu giả định rằng tỉ lệ giới tính của nhóm này không có gì khác biệt thì tỉ lệ giới tính của đối tượng mục tiêu trong nhóm này cũng không có khác biệt gì. Với các tổ chức lớn thì thường sẽ có một người được giao làm nhiệm vụ này. Vì tỉ lệ nam giới làm trong lĩnh vực công nghệ cao hơn, nên có khả năng ở nhóm này đối tượng mục tiêu là nam giới cũng cao hơn. 
Nhà nghiên cứu 

## Giả định
## Các hoạt động chính
### Xây dựng các kho tài nguyên chung
- Làm khảo sát về kho địa điểm gặp mặt cho người làm phi lợi nhuận, các ý tưởng kiếm tiền
- Thảo luận với các đối tác về việc xây dựng mạng kết nối nhu cầu (của riêng họ hoặc tham gia vào hệ thống chung)

### Xây dựng hệ thống quản lý niềm tin giúp thúc đẩy sự đối thoại
- Làm nhà nhân học nghiệp dư bằng việc quản lý niềm tin các cá nhân trong nhóm
- Vẽ biểu đồ Venn các nét nghĩa

### Xây dựng mạng kết nối nhu cầu
- Tham gia với nhóm VCIL, Duy Phong

### Giúp người thụ hưởng truy vấn, liên kết thông tin từ kho khác và tự động hoá việc đóng góp dữ liệu vào chúng 
- Viết plugin Obsidian giúp đẩy dữ liệu trong kho lên các nền tảng khác nhau
- Viết plugin Obsidian tự động liên kết thông tin từ các kho
- Viết bot Discord có thể truy vấn dữ liệu từ kho

### Hỗ trợ người thụ hưởng thử nghiệm ý tưởng mới và kiểm tra giả thiết ngay khi chúng vừa được nghĩ ra
- Giải đáp thắc mắc qua Discord 
- Viết plugin Obsidian giúp truy vấn dữ liệu từ các kho thông tin khác, chuyển đổi định dạng và chèn tham số UTM cho các liên kết cho phù hợp với định dạng của nền tảng khi đăng bài
- Tạo minh hoạ boid thể hiện ai đang làm những công việc gì và đang có những gì

### Tăng số lượng các lập trình viên chân đất (barefoot developer) viết được phần mềm như nấu ăn ở nhà (homecooked software) 
- Chia sẻ, thảo luận, tập huấn về lợi ích của các phần mềm ghi chú động lưu dữ liệu trên máy người dùng trước (local-first) 
- Chia sẻ, thảo luận, tập huấn về lập trình hoặc các giải pháp đáp ứng nhu cầu công việc
- Xây dựng một hệ thống dữ liệu chuyên dụng cho người làm phi lợi nhuận và lưu dữ liệu trên máy người dùng trước chứ không lệ thuộc vào các SaaS
- Khuyến khích các cổng thông tin hỗ trợ lập trình viên 

## Cộng đồng sẽ tham gia vào những hoạt động nào?
- Đóng góp thông tin về các địa điểm gặp mặt cho người làm phi lợi nhuận, các ý tưởng kiếm tiền
- Xây dựng mạng kết nối nhu cầu (của riêng họ hoặc tham gia vào hệ thống chung)
- Tham gia hỏi đáp qua Discord 
- Chia sẻ nguồn tài nguyên chung

## Đối tác sẽ tham gia vào những hoạt động nào?
- Làm khảo sát về kho địa điểm gặp mặt cho người làm phi lợi nhuận, các ý tưởng kiếm tiền
- Thảo luận với các đối tác về việc xây dựng mạng kết nối nhu cầu (của riêng họ hoặc tham gia vào hệ thống chung)
- Giải đáp thắc mắc qua Discord 
- Tạo minh hoạ boid thể hiện ai đang làm những công việc gì và đang có những gì
- Làm nhà nhân học nghiệp dư bằng việc quản lý niềm tin các cá nhân trong nhóm

## Kế hoạch hoạt động 
[[Cần nghĩ về công việc như là một cách để kiểm định giả thiết, chứ không phải chỉ để hoàn thành]]
[[Nghiên cứu những điều đã biết mà không biết, lập kế hoạch A cho điều đã biết là đã biết, và lập kế hoạch B cho điều không biết mà đã biết]]
[[Chỉ số ta theo đuổi phải là chỉ số về giá trị của sản phẩm đối với người dùng]]
[[Thay vì lập ra danh sách công việc, hãy thử lập ra danh sách không phải công việc xem]]
[[Đo lường]]
Khác với wiki 