---
share: true
created: 2024-08-23T15:06
updated: 2024-09-03T01:21
alias: Hướng dẫn sử dụng
---
## Các loại địa điểm gặp mặt
- Địa điểm công cộng
- Không gian làm việc chung
- Phòng họp riêng
- Quán có phòng riêng
- Quán không có phòng riêng
- Nhà riêng

## Sự mặc định về các thuộc tính
Vì đây là cho việc gặp mặt để thảo luận, nên sẽ xét về những thứ mà một cuộc thảo luận đòi hỏi, cùng với mặc định về không gian mà cuộc thảo luận sẽ diễn ra ở đó.

- Những thuộc tính được xem là **điểm cộng** khi ta không mặc định là nó luôn có ở đó. Có thì tốt, không có thì thường là không sao. Nên với những thuộc tính này, nếu địa điểm đó có thì sẽ liệt kê ra, còn nếu không thì sẽ không nói gì
- Những thuộc tính được xem là **điểm trừ** khi ta mặc định là nó luôn có ở đó. Nếu không có thì thường là có sao. Nên với những thuộc tính này, nếu địa điểm đó không có thì sẽ có cảnh báo, còn nếu có thì sẽ không nói gì

### Những thuộc tính mặc định là luôn có
Các thuộc tính này nếu không có thì là điểm trừ:
- [x] Nhà vệ sinh
- [x] Xe lăn tiếp cận được
- [x] Không có loa làm ồn
- [x] Không cần đặt chỗ trước
- [x] Không có đèn nhấp nháy hoặc quảng cáo động
- [x] Giá đã bao gồm thuế

### Những thuộc tính mặc định là không có
Các thuộc tính này nếu có thì là điểm cộng:
- [x] Nằm la liệt được
- [x] Không gian ngoài trời
- [x] Có đàn hoặc sân khấu nhỏ
- [x] Nuôi chó mèo
- [x] Webcam

### Những thuộc tính mà sự mặc định tuỳ vào loại địa điểm
Với **không gian ngoài trời** thì mặc định là không có, nếu có thì là điểm cộng. Với các loại hình khác thì mặc định là luôn có, nếu không có thì là điểm trừ:
- [x] Wifi 
- [x] Ổ điện
- [x] Bàn đúng kích thước làm việc
- [x] Không có khói thuốc lá

Với **phòng họp riêng** hoặc **quán có phòng riêng** thì mặc định là luôn có, nếu không có thì là điểm trừ. Với những loại hình khác thì mặc định là không có, nếu có thì là điểm cộng:
- [x] Nói to được
- [x] Vận động cơ thể được
- [x] Máy chiếu
- [x] Loa 
- [x] Mic (không phải là điểm trừ với phòng 20 người trở xuống)
- [x] Bảng và bút lông
- [x] Không bị ồn từ bên ngoài

## Tiêu chí thêm vào danh sách
- Có chính sách hỗ trợ các dự án phi lợi nhuận, hoặc có lợi ích cho người làm phi lợi nhuận (VD: gần nhà nhau, có người quen)
- Được đề xuất trong nơi thảo luận, hoặc tạo PR trên GitHub
- Có điểm cộng khác lạ

## Cách thông tin được ghi chú
Với các **quán nước**, giá nước sẽ là giá món đắt nhất trong 5 món rẻ nhất. Lý do là vì một người muốn tiết kiệm vẫn có thể sẵn sàng mua một thứ đắt hơn thứ rẻ nhất một chút. Trong các bảng so sánh thì giá sẽ bằng tổng của giá nước và giá giữ xe.

Các **quán có phòng riêng**  thu tiền bằng việc bán nước cho khách, nên cơ bản là họ cũng không có giá phòng, mà chỉ có giá nước. Điều này khiến cho quán ràng buộc số lượng người đi tối thiểu để được mượn phòng. Cộng với việc người tổ chức quan tâm xem có phòng nào đủ cho sự kiện hay không, trường `Số lượng` sẽ được ghi dưới dạng sau:
```
Số lượng:: sốLượngTốiThiểuCủaPhòngNhỏNhất - sốLượngTốiĐaCủaPhòngLớnNhất
```

Tất nhiên, bạn đi ít hơn nhưng mua thêm ly thì cũng không sao. Nếu chỉ có một số thì mặc định sẽ là số lượng tối đa của phòng lớn nhất.

Các **dịch vụ cho thuê phòng họp**, khác với các quán nước, thu tiền từ người tổ chức. Bạn thuê phòng lớn nhất nhưng chỉ đến một mình họ cũng không quan tâm. Nên chỉ cần tạo một bảng giá theo số lượng tối đa của phòng là đủ.

Khi một địa điểm có điểm cộng thì ghi đơn giản là *Điểm cộng*, nhưng khi nó có điểm trừ thì lại không ghi là *Điểm trừ*, mà ghi là *Lưu ý*. Bởi vì từ "điểm trừ" tạo cảm giác không thay đổi được, chắc chắn sẽ tạo ra vấn đề, còn từ "lưu ý" thì tạo cảm giác tuỳ nhu cầu của mỗi người, có người quan tâm nhiều có người quan tâm ít. Nó cũng tạo cảm giác có thể có cách xử lý (dù tất nhiên không phải xử lý gì thì cũng tốt hơn).

## Các xử lý kỹ thuật
Các điểm cộng sẽ được ghi ở thể khẳng định và ở định dạng ô chọn (checkbox). Các điểm trừ sẽ được ghi ở thể phủ định và ở định dạng chấm đầu dòng (bullet). Việc này không những để phù hợp với việc ô chọn thường dùng cho những điều cần có, còn chấm đầu dòng thì thường dùng cho những điểm cần lưu ý, mà còn dễ để xử lý trong Dataview hơn. 

Mẫu tạo mới (template) sẽ liệt kê hết tất cả điểm cộng và điểm trừ, khi áp dụng bạn thấy cái nào sai thì xoá đi. Việc thấy sai thì dễ hơn là nhớ xem mình còn thiếu cái nào, và việc xoá đi thì dễ hơn là viết vào (chỉ cần bấm <kbd>Ctrl+Shift+K</kbd>). Các mẫu tạo mới cho những loại hình khác nhau sẽ khác nhau, vì ở đó có những điểm không bao giờ xảy ra, nên có thể bỏ luôn. Ví dụ, ta có thể yên tâm là vào quán thì luôn có nhà vệ sinh, wifi và ổ điện, hoặc vào phòng họp riêng thì luôn có bàn đúng kích thước làm việc và không có không gian ngoài trời.

Cũng chính vì như vậy, nên sẽ có những điểm cộng, điểm trừ không chính xác, khi người tạo không có thời gian để tìm hiểu kỹ. Nhược điểm của hướng tiếp cận thà giết nhầm còn hơn bỏ sót, tất nhiên, là sẽ có lúc giết nhầm. Trong tương lai khi viết được language server cho việc này thì sẽ không cần phải làm vậy nữa.

Để có thể điều chỉnh bảng so sánh, bạn cần [[Hướng dẫn tải kho|tải kho về máy]].

## Nơi thảo luận
![](https://i.imgur.com/ds6m65A.png)