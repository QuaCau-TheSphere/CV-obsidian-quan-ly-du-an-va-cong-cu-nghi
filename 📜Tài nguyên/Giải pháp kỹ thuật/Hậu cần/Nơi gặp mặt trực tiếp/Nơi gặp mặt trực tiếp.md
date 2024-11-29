---
share: true
created: 2024-08-23T15:06
updated: 2024-10-09T13:35
alias:
  - Kho địa điểm để chọn nơi gặp mặt
  - Hướng dẫn sử dụng kho địa điểm để chọn nơi gặp mặt
description: Làm sao để tìm được nơi phù hợp để gặp mặt trực tiếp?
---
![](https://i.imgur.com/CXHXI7y.png)
# Kho địa điểm để chọn nơi gặp mặt 
Đây là một danh sách tổng hợp các địa điểm gặp mặt trực tiếp, bao gồm:
- Địa điểm công cộng
- Không gian làm việc chung
- Phòng họp riêng
- Quán có phòng riêng
- Quán không có phòng riêng
- Nhà riêng

Chọn [[TP.HCM|TP.HCM]] hoặc [[Hà Nội|Hà Nội]] để bắt đầu. 

## Tiêu chí thêm địa điểm
- Có chính sách hỗ trợ các dự án phi lợi nhuận, hoặc có lợi ích cho người làm phi lợi nhuận hoặc đối tượng hưởng lợi của họ (VD: gần nhà nhau, có người quen, tiếp cận được cho người khuyết tật)
- Được đề xuất trong nơi thảo luận, hoặc được yêu cầu kéo dữ liệu mới (pull request) trên GitHub
- Có điểm cộng khác lạ

Bạn có thể fork repo này để làm bộ tài nguyên cho riêng bạn.

## Ý đồ thiết kế
### Phân loại các thuộc tính của địa điểm
- Những thuộc tính được xem là **điểm cộng** khi ta không mặc định là nó luôn có ở đó. Có thì tốt, không có thì thường là không sao. Nên với những thuộc tính này, nếu địa điểm đó có thì sẽ liệt kê ra, còn nếu không thì sẽ không nói gì
- Những thuộc tính được xem là **điểm trừ** khi ta mặc định là nó luôn có ở đó. Nếu không có thì thường là có sao. Nên với những thuộc tính này, nếu địa điểm đó không có thì sẽ có cảnh báo, còn nếu có thì sẽ không nói gì

#### Những thuộc tính mặc định là luôn có
Các thuộc tính này nếu không có thì là điểm trừ:
- [x] Nhà vệ sinh
- [x] Xe lăn tiếp cận được
- [x] Không có loa làm ồn
- [x] Không cần đặt chỗ trước
- [x] Không có đèn nhấp nháy hoặc quảng cáo động
- [x] Giá đã bao gồm thuế

#### Những thuộc tính mặc định là không có
Các thuộc tính này nếu có thì là điểm cộng:
- [x] Nằm la liệt được
- [x] Không gian ngoài trời
- [x] Có đàn hoặc sân khấu nhỏ
- [x] Nuôi chó mèo
- [x] Webcam

#### Những thuộc tính mà sự mặc định tuỳ vào loại địa điểm
Với **không gian ngoài trời** thì những thuộc tính này mặc định là không có, nếu có thì là điểm cộng. Với các loại hình khác thì mặc định là luôn có, nếu không có thì là điểm trừ:
- [x] Wifi 
- [x] Ổ điện
- [x] Bàn đúng kích thước làm việc
- [x] Không có khói thuốc lá

Với **phòng họp riêng** hoặc **quán có phòng riêng** thì những thuộc tính này mặc định là luôn có, nếu không có thì là điểm trừ. Với những loại hình khác thì mặc định là không có, nếu có thì là điểm cộng:
- [x] Nói to được
- [x] Vận động cơ thể được
- [x] Máy chiếu
- [x] Loa 
- [x] Mic (không phải là điểm trừ với phòng 20 người trở xuống)
- [x] Bảng và bút lông
- [x] Không bị ồn từ bên ngoài

### Cách thông tin được ghi chú
Với các **quán nước**, giá nước sẽ là giá món đắt nhất trong 5 món rẻ nhất. Lý do là vì một người muốn tiết kiệm vẫn có thể sẵn sàng mua một thứ đắt hơn thứ rẻ nhất một chút. Trong các bảng so sánh thì giá sẽ bằng tổng của giá nước và giá giữ xe.

Các **quán có phòng riêng**  thu tiền bằng việc bán nước cho khách, nên cơ bản là họ cũng không có giá phòng, mà chỉ có giá nước. Điều này khiến cho quán ràng buộc số lượng người đi tối thiểu để được mượn phòng. Cộng với việc người tổ chức quan tâm xem có phòng nào đủ cho sự kiện hay không, trường `Số lượng` sẽ được ghi dưới dạng sau:
```
Số lượng:: sốLượngTốiThiểuCủaPhòngNhỏNhất - sốLượngTốiĐaCủaPhòngLớnNhất
```

Tất nhiên, bạn đi ít hơn nhưng mua thêm ly thì cũng không sao. Nếu chỉ có một số thì mặc định sẽ là số lượng tối đa của phòng lớn nhất.

Các **dịch vụ cho thuê phòng họp**, khác với các quán nước, thu tiền từ người tổ chức. Bạn thuê phòng lớn nhất nhưng chỉ đến một mình họ cũng không quan tâm. Nên chỉ cần tạo một bảng giá theo số lượng tối đa của phòng là đủ.

Khi một địa điểm có điểm cộng thì ghi đơn giản là *Điểm cộng*, nhưng khi nó có điểm trừ thì lại không ghi là *Điểm trừ*, mà ghi là *Lưu ý*. Bởi vì từ "điểm trừ" tạo cảm giác không thay đổi được, chắc chắn sẽ tạo ra vấn đề, còn từ "lưu ý" thì tạo cảm giác tuỳ nhu cầu của mỗi người, có người quan tâm nhiều có người quan tâm ít. Nó cũng tạo cảm giác có thể có cách xử lý (dù tất nhiên không phải xử lý gì thì cũng vui hơn).

## Xem thêm
- [[Động lực xây dựng]]
- [[Hướng dẫn đóng góp]]

## Nơi thảo luận
<button onclick="location.href='https://doi-thoai.deno.dev/Discord.4s.1'" type="button">Mở Discord</button>
[![](https://i.imgur.com/ds6m65A.png)](https://doi-thoai.deno.dev/Discord.4s.1)