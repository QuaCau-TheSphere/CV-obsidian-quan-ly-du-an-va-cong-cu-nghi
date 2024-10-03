---
share: true
created: 2023-09-05T16:17
updated: 2024-02-26T14:02
---
# Tự động tạo liên kết UTM hoàn chỉnh chỉ bằng những thông tin tối thiểu (tên bài, nơi đăng) 
## Liên kết UTM là gì?
Để có thể đo lường hiệu quả các chiến dịch truyền thông trực tuyến trên Google Analytics, các tham số UTM sẽ được thêm vào đằng sau liên kết. Ví dụ, nếu bạn đăng liên kết `tranky.deno. dev`  lên nhóm *Tools MMO* và ở cả ở ngoài nhóm, thì Google Analytics sẽ không biết được có bao nhiêu người trong nhóm bấm vào và bao nhiêu người ngoài nhóm bấm vào. Nhưng nếu bạn thêm tham số UTM vào sau liên kết, ví dụ `tranky.deno. dev/?source=Tools MMO`, và chỉ đăng lên nhóm mỗi liên kết này, thì bạn sẽ biết được đã có bao nhiêu người từ nhóm bấm vào.

Có nhiều loại tham số UTM, như `source`, `medium`, `campaign`, v.v. Mỗi tham số có những giá trị riêng phải điền, nhưng nhiều lúc chỉ cần biết một cái thì sẽ suy ra được cái còn lại. Ví dụ, đăng một bài trong chiến dịch A thì `campaign` chắc chắn là A, nơi đăng là một trang Facebook thì `source` chắc chắn chứa tên trang đó, và `medium` chắc chắn là `social`, v.v.

## Vấn đề
Có những công cụ để giúp xây những liên kết UTM như vậy (gọi là UTM builder), nhưng chúng không tự động điền những giá trị có thể tự suy đoán được. Nếu dự án của bạn có nhiều bài viết khác nhau dành cho nhiều loại đối tượng khác nhau, việc phải làm thủ công từng liên kết như vậy sẽ tốn nhiều thời gian, nhàm chán và có thể làm đau tay. Chưa kể nếu có nhiều người cùng đăng bài thì cũng có thể tạo ra sự không nhất quán. 

## Giải pháp
Nếu tất cả những gì bạn cần chỉ là tên bài viết và nơi đăng là đủ để tạo được liên kết đầy đủ thì Trấn Kỳ sẽ tự động hoá được vấn đề này. Nó là một chương trình tự động phân loại, gắn nhãn thông tin theo thói quen và cách sắp xếp của riêng bạn bằng tiếng Việt tự nhiên, và mình đã viết thêm chức năng để nó làm được công việc này. Ví dụ:
- `trấn kỳ Tools MMO` → Tạo `tranky.deno. dev/?source=Tools MMO&medium=social&campaign=Trấn Kỳ`
- `tk tmmo` → Tạo liên kết tương tự như trên, nhưng chỉ dùng mã sản phẩm và tên viết tắt

Các chức năng mở rộng khác:
- Tự động cập nhật các bài viết mới trên web của bạn với plugin trên trình duyệt 
- Tự động lấy trang web bạn đang mở để làm `source` 
- Tự động xử lý punycode (cho phần tên miền) và percent-encode (cho phần URI) 
- Tự động tạo liên kết rút gọn và tạo chuyển hướng trên máy chủ
- Tự động chép liên kết vào clipboard

Điều này sẽ giúp bạn lấy được liên kết có tham số UTM cần thiết ngay tại nơi bạn đang tương tác một cách tức thời mà không bị ngắt mạch suy nghĩ ("tại đây, bây giờ").

👉 Lấy mã nguồn: https://tranky.deno.dev/tichhop/tmmo

https://www.facebook.com/quacau.sphere/posts/pfbid028r4PfZ2SiamuaSVT5CMMzgfjQfkVLnjkTrNU7dfLNoWiNNW1o1ceBV8bv1DS5gH2l
![](https://i.imgur.com/Mj8gI5r.png)