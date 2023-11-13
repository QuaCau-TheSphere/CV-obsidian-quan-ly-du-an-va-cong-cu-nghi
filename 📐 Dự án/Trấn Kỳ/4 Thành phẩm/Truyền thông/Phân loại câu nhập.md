---
share: true
created: 2023-09-05T16:17
updated: 2023-11-13T15:27
---
F+G+%C2%BB+C%E1%BB%99ng%20%C4%91%E1%BB%93ng%20FOSS%20Vi%E1%BB%87t%20Nam
# [Phân loại câu nhập bằng tiếng Việt tự nhiên](https://lậptrình.quảcầu.cc/%F0%9F%91%8Ftr%E1%BA%A5n%20k%E1%BB%B3/?utm_source=F+G+%C2%BB+Launch&utm_medium=social&utm_campaign=Tr%E1%BA%A5n+K%E1%BB%B3&utm_content=ti%C3%AAu+%C4%91%E1%BB%81) 
Bạn có cảm thấy chán nản, mất năng lượng vì phải tốn quá nhiều thời gian để phân loại chi tiêu cũng như các loại dữ liệu khác không? Nay đã có Trấn Kỳ. Nếu bạn là người cần phân loại tất cả các chi tiêu của mình một cách rõ ràng (việc nhắm hờ mỗi tháng chi chừng bao nhiêu tiền là không đủ với bạn), và bạn cần một chương trình:

* Là phần mềm tự do và mã nguồn mở
* Tích hợp được vào hệ thống vận hành hiện tại của bạn: báo cáo ngân hàng, Google Keep, Google Sheet, Notion, Obsidian, Fibery, Odoo, v.v.
* Cho phép bạn khai báo dữ liệu theo thói quen và cách phân loại của chính mình
* Tự động phân loại, gắn nhãn thông tin chứ không bắt bạn phải tự xử lý
* Không giam dữ liệu của bạn tại chương trình
* Không có bất cứ quảng cáo mời mọc hoặc theo dõi dữ liệu nào
* Dùng được trên điện thoại khi không có mạng

Thì chương trình này dành cho bạn.
# Tính năng

## Phân loại thông tin

Ví dụ, với câu nhập đầu vào là:

```
thăn bò 30k lườn gà 20k (giảm giá) cho Parid ở coopmart vợ trả 
```

Kết quả đầu ra sẽ là:
```
| Tên                         | Giá trị          |
| --------------------------- | ---------------- |
| Món đồ                      | thăn bò, lườn gà |
| Loại món đồ                 | Lương thực       |
| Phương thức thanh toán      | vợ trả           |
| Loại phương thức thanh toán | Tiền mặt         |
| Nơi mua                     | CoopMart         |
| Loại nơi mua                | Siêu thị         |
| Người thụ hưởng             | Parid            |
| Loại người thụ hưởng        | Gia đình         |
| Số tiền                     | 50000            |
| Ghi chú                     | giảm giá         |
```
Chương trình có thể tự động bắt được các giá trị trên nhờ vào cấu hình bạn đã thiết lập từ trước. Ở ví dụ này, bạn đã thiết lập như sau:
```
|Từ khoá từ câu nhập...|...thuộc nhãn phân loại...|...thuộc chiều dữ liệu|
| --- | --- | --- |
|`thăn bò`, `lườn gà`|`Lương thực`|`Món đồ`|
|`vợ trả`|`Tiền mặt`|`Phương thức thanh toán`|
|`coopmart`|`Siêu thị`|`Nơi mua`|
|`Parid`|`Gia đình`|`Người thụ hưởng`|
|`20k`, `30k`|Không thiết lập|`Số tiền`|
|`giảm giá`|Không thiết lập|`Ghi chú`|
```
## Giá trị mặc định

Ví dụ, bạn có thể thiết lập để chương trình tự hiểu là nếu bạn không điền từ khoá gì trong chiều `Phương thức thanh toán` thì mặc định đó là `tiền mặt`.

## Tiếp nhận từ khoá chưa được khai báo một cách trực tiếp

Sẽ có những lúc bạn muốn một từ khoá nào đó chưa kịp khai báo trong cấu hình xuất ra ở kết quả. Bạn có thể thiết lập các ký tự để chương trình hiểu là dữ liệu đó nên được cho vào mục nào.

Ví dụ, bạn mới gặp `Iris` và muốn tặng `dưa hấu` cho bạn ấy. Bạn chưa kịp khai báo tên của `Iris` vào cấu hình. Bạn có thể thiết lập ký tự `@` dành cho chiều `Người thụ hưởng`. Khi đó, bạn có thể dùng câu nhập:

```
tặng dưa hấu cho @Iris 50k
```

Lúc này chương trình sẽ tự hiểu `Iris` là `Người thụ hưởng`.

Nếu sau đó không xuất hiện dấu `@` lần nữa thì từ khoá sẽ dừng khi gặp dấu cách đầu tiên. Nếu từ khoá chứa nhiều dấu cách thì bạn thêm một dấu `@` nữa ở ngay cuối. Ví dụ:

```
tặng dưa hấu cho @chị Iris@ 50k
```

Bạn có thể khai báo ký tự đứng trước khác với ký tự đứng sau. Thường gặp nhất là khi bạn cần có một ghi chú nào đó. Ví dụ:

```
tặng dưa hấu cho @chị Iris@ 50k (sau đó mới biết chị Iris dị ứng dưa hấu)
```

## Viết tắt

Ví dụ, bạn muốn viết tắt `as`, `st` cho nhanh, nhưng vẫn muốn kết quả hiện ra đầy đủ là `ăn sáng`, `siêu thị`. Bạn còn có thể dùng viết tắt cho những câu nhập phức tạp.

Ví dụ:

* `as` → `ăn sáng`
* `st` → `siêu thị`
* `xăng` → `xăng 50k`
* `trọ` → `tiền trọ 3tr chuyển khoản (vay qua nhóm Tình Thân)`

## Hiểu từ ghép

Ví dụ, nếu lúc thiết lập cấu hình bạn có khai báo ba từ khoá `bún`, `bò`, và `bún bò`, và trong câu nhập có chữ `bún bò` thì chương trình sẽ hiểu đây là một từ chứ không nhận diện nhầm là có hai từ `bún` và `bò`.

## Một từ khoá có thể thuộc về nhiều nhãn phân loại

Ví dụ, từ khoá `ăn trưa với` vừa có thể thuộc nhãn `Mối quan hệ`, vừa có thể thuộc nhãn `Thực phẩm`

## Xuất, nhập dữ liệu với các chương trình khác
Hiện tại đã có sẵn phần bổ trợ (add-on) để nhập dữ liệu từ Google Keep và xuất dữ liệu sang Fibery. Bạn có thể tự viết những phần bổ trợ khác cho phù hợp với bạn.

Google Keep là một phần mềm ghi chú rất phổ biến với mọi người. Nó:

* Có trên iOS, Android và web
* Mở rất nhanh và có thể mở trong tình trạng không có mạng
* Đồng bộ nhanh chóng trên tất cả các thiết bị
* Hoàn toàn miễn phí
* Cho phép nhiều người cùng chỉnh sửa một ghi chú

Việc có thể nhập liệu từ Google Keep sẽ giúp cho bạn có thể nhập những khoảng chi tiêu chung, phù hợp cho gia đình, nhóm bạn, tổ chức.

# Các tính năng hỗ trợ khác (a.k.a. yêu cầu phi chức năng)

* **Viết cho người Việt** nên:
  • Xử lý được từ ghép và [các cách đặt dấu thanh khác nhau](https://lậptrình.quảcầu.cc/%F0%9F%93%9C%20L%E1%BA%ADp%20tr%C3%ACnh/Regex%2C%20Unicode%2C%20ti%E1%BA%BFng%20Vi%E1%BB%87t%2C%20emoji/Regex/Ti%E1%BA%BFng%20Vi%E1%BB%87t%20c%C3%B3%202%20c%C3%A1ch%20%C4%91%E1%BA%B7t%20d%E1%BA%A5u/?utm_source=F+G+%C2%BB+C%E1%BB%99ng%20%C4%91%E1%BB%93ng%20FOSS%20Vi%E1%BB%87t%20Nam+%C2%BB+Gi%E1%BB%9Bi+thi%E1%BB%87u+Tr%E1%BA%A5n+K%E1%BB%B3&utm_medium=social&utm_campaign=Tr%E1%BA%A5n+K%E1%BB%B3)
  • Tên biến, tên hàm hoàn toàn bằng tiếng Việt
* **Viết cho người cần sử dụng trên các webapp khác** như Fibery, Google Sheet nên:
  • Chỉ sử dụng JavaScript thuần
  • Đảm bảo regex không chạy lâu
  • Có sẵn build script để chuyển từ TypeScript sang JavaScript
* **Viết cho người không muốn bị ràng buộc vào một nền tảng nào** nên sẽ là một chương trình mã nguồn mở và tự do
* **Viết cho người phải tự học lập trình** nên:
  • Có rất nhiều ghi chú, hướng dẫn để cung cấp các khái niệm thiết yếu trong việc giúp bạn xây dựng mental model cho code, để bạn hiểu được cái cách một lập trình viên kiến trúc nên một chương trình thế nào. Những thứ sẽ hay được sử dụng:
    • Các phép so sánh, ẩn dụ,
    • Các sắp đặt để tạo sự tương phản (juxtaposition) giữa các định nghĩa, ý tưởng
    • Ý đồ thiết kế (design choice) chương trình
  • Tên commit cố gắng tuân thủ [conventional commit](https://www.conventionalcommits.org/en/v1.0.0/)
  • Có script kiểm thử


# Không chỉ mỗi phân loại thu chi

Thật ra, chương trình này không hẳn nên được đặt tên là "Phân loại thu chi", vì bạn còn có thể dùng nó để phân loại nhiều thứ khác. Ví dụ:

* **Ý tưởng** : `Kĩ thuật viết văn %topic_Writing @tác_giả_a`
* **Mối quan hệ** : `Gặp @ông_A bàn về việc X, có đi ăn ở !nhà_hàng_Y 200k ck vcb`
* **Công việc** : `Công việc A cần giao cho @bạn_B liên hệ với @@đối_tác_C tại !quán_D với chi phí dự kiến 300k ck vcb và nhận output &&item_X`
* **Cảm xúc** : `xem phim:Inception thấy chấn động`
* **Sức khoẻ:**  `chạy bộ 100m, hít đất 30 cái`

Bạn muốn đọc gì tiếp theo?

[Tải Trấn Kỳ](https://lậptrình.quảcầu.cc/%F0%9F%91%8FTr%E1%BA%A5n%20K%E1%BB%B3/H%C6%B0%E1%BB%9Bng%20d%E1%BA%ABn%20s%E1%BB%AD%20d%E1%BB%A5ng%20Tr%E1%BA%A5n%20K%E1%BB%B3/1.%20C%C3%A0i%20%C4%91%E1%BA%B7t%20v%C3%A0%20s%E1%BB%AD%20d%E1%BB%A5ng%20nhanh/1.2%20L%E1%BA%A5y%20code/?utm_source=F+G+%C2%BB+C%E1%BB%99ng%20%C4%91%E1%BB%93ng%20FOSS%20Vi%E1%BB%87t%20Nam+%C2%BB+Gi%E1%BB%9Bi+thi%E1%BB%87u+Tr%E1%BA%A5n+K%E1%BB%B3&utm_medium=social&utm_campaign=Tr%E1%BA%A5n+K%E1%BB%B3) | [Lý do viết Trấn Kỳ](https://obsidian.quảcầu.cc/%F0%9F%93%90%20d%E1%BB%B1%20%C3%A1n/tr%E1%BA%A5n%20k%E1%BB%B3/9%20blog/l%C3%BD%20do%20vi%E1%BA%BFt%20tr%E1%BA%A5n%20k%E1%BB%B3/?utm_source=F+G+%C2%BB+C%E1%BB%99ng%20%C4%91%E1%BB%93ng%20FOSS%20Vi%E1%BB%87t%20Nam+%C2%BB+Gi%E1%BB%9Bi+thi%E1%BB%87u+Tr%E1%BA%A5n+K%E1%BB%B3&utm_medium=social&utm_campaign=Tr%E1%BA%A5n+K%E1%BB%B3) | [Hướng dẫn sử dụng Trấn Kỳ](https://lậptrình.quảcầu.cc/%F0%9F%91%8Ftr%E1%BA%A5n%20k%E1%BB%B3%2Fh%C6%B0%E1%BB%9Bng%20d%E1%BA%ABn%20s%E1%BB%AD%20d%E1%BB%A5ng%20tr%E1%BA%A5n%20k%E1%BB%B3%2F?utm_source=F+G+%C2%BB+C%E1%BB%99ng%20%C4%91%E1%BB%93ng%20FOSS%20Vi%E1%BB%87t%20Nam+%C2%BB+Gi%E1%BB%9Bi+thi%E1%BB%87u+Tr%E1%BA%A5n+K%E1%BB%B3&utm_medium=social&utm_campaign=Tr%E1%BA%A5n+K%E1%BB%B3)

https://www.facebook.com/quacau.sphere/posts/pfbid072iAT8Y3zdAP5L7VGiHkmxjxQfPapaozK8fpr64nQ4uVyaKerhv2j4uqd8KMWipvl

![image|690x460, 100%](https://daynhauhoc.s3.dualstack.ap-southeast-1.amazonaws.com/optimized/3X/3/0/3051a1b98cab382e9bcd3e5bccf81d2e973f3f17_2_1035x690.jpeg) 
![image|690x343](https://daynhauhoc.s3.dualstack.ap-southeast-1.amazonaws.com/optimized/3X/9/9/99e14fce9d0bcda573db5aae334ad4e71bd2035f_2_1035x514.jpeg) 
![Giao diện khởi động](https://i.imgur.com/rBe2iQ9.png)

---
[[10-11]] Đăng trên [[Dạy Nhau Học]] 
[[10-11]] Đăng trên [[Tự học Data]] 