---
created: 2024-07-07T14:46
updated: 2024-07-09T21:31
theme: simple
revealOptions:
  transition: slide
  slideNumber: false
  hash: false
  history: false
---
<style>
.fragment.red {
  color: red;
}
/* 
* {
  margin: 0;
  padding: 0;
  min-width: 0;
  min-height: 0;
  box-sizing: border-box;
} */
::before,
::after {
  box-sizing: inherit;
}

.wrap {
  display: flex;
  gap: .75em;
  margin: 1em;
  text-align: end
}

.col1 {
  display: flex;
  flex-direction: column;
}

.col1 .author {
  align-self: end;
  font-size: .5em
}

div img {
  max-width: 100%;
  height: auto;
  display: block;
}

span {
  align-self: end;
}
</style>

Đề bài:
> Ngành hàng nào dùng loa sẽ ra được 500 giao dịch/tháng?
---

Câu hỏi đó nằm trong một câu hỏi lớn hơn:
> Làm sao để đưa VNPAY vào luồng hoạt động của cửa hàng?

---
VNPAY cung cấp giải pháp về trung gian thanh toán. Nhưng một cửa hàng không mở ra chỉ để thanh toán. <span class="fragment red">Thanh toán chỉ là một khâu trong vận hành.</span>

---

Cho nên, câu hỏi cần được trả lời là:
> Làm sao để VNPAY đem lại giá trị cho chủ cửa hàng, không chỉ lúc ở khâu giao dịch mà còn ở những khâu khác? Không chỉ ở cửa hàng mà còn là lúc không ở cửa hàng?
---

Điều đó dẫn đến câu hỏi:
> Trước và sau giao dịch, chủ cửa hàng cần gì?
---

# Trước và sau giao dịch, chủ cửa hàng cần gì?
----
## Trước giao dịch 
(Làm gì để có tiền?)  <!-- .element: class="fragment" -->
- Lên kế hoạch, tạo sản phẩm:<!-- .element: class="fragment" -->
    - Thu thập dữ liệu, tự động hoá việc xử lý dữ liệu, xây dựng kho dữ liệu<!-- .element: class="fragment" -->
    - Hệ thống quản lý tài nguyên, kiến thức, dự án<!-- .element: class="fragment" -->
- Thu hút khách hàng: tạo web, theo dõi lưu lượng người truy cập<!-- .element: class="fragment" -->

----
## Sau giao dịch
(Có tiền rồi thì làm gì?) <!-- .element: class="fragment" -->
- Tạo hạch toán kế toán, quản lý công nợ <!-- .element: class="fragment" -->
- Lên kế hoạch, tạo sản phẩm: <!-- .element: class="fragment" -->
    - Thu thập dữ liệu, tự động hoá việc xử lý dữ liệu, xây dựng kho dữ liệu <!-- .element: class="fragment" -->
    - Hệ thống quản lý tài nguyên, kiến thức, dự án <!-- .element: class="fragment" -->
- Quản lý chi tiêu của bản thân, gia đình. Lên kế hoạch tài chính <!-- .element: class="fragment" -->

---
# Nhu cầu của các SME về hạch toán kế toán
----
<div class="wrap">
  <div class="col1">
    <div>❝ Đa phần chủ doanh nghiệp chỉ nghĩ là họ cần bán hàng, chứ không nghĩ là mình cần quản lý tiền. Kế toán chỉ giải quyết vấn đề thuế, hoá đơn, chứ không cho biết dòng tiền hiện nay thế nào.</div>
  </div>
  <div class="col2">
  <img src="Trần Nam.jpg">
    <div class='author'><div><strong>Trần Nam</strong></div>
    <div>Trưởng phòng Thông tin và Phụ huynh</div>
    <div>Trường Maya</div></div>
  </div>
</div>
----
<div class="wrap">
  <div class="col1">
    <div>❝ Khi nhập hàng, phát sinh chi phí thì chủ cửa hàng chỉ ghi chú trong tin nhắn. Chi phí họ không ghi nhận lại luôn. Họ chỉ canh số tiền họ thu được, kiểu nhìn lướt được khoảng khoảng 5tr là đủ. Đối với họ việc quản lý dòng tiền không còn là điểm đau nữa. Nhưng sau một thời gian nhìn lại thì không có lời.</div>
    <div class='author'><div><strong>Mai Đức Quang</strong></div>
    <div>Giám đốc Tài chính</div>
    <div>Thương hiệu Trà sữa A Lỳ</div></div>
  </div>
  <div class="col2"><img src="Mai Quang.jpg"></div>
</div>
----
<div class="wrap">
  <div class="col1">
    <div>❝ Ngành kế toán của chị trước giờ làm thủ công. Doanh nghiệp hiện tại của chị dùng Misa đưa cho kế toán cũng mất khá nhiều thời gian. Các giao dịch thường lặp đi lặp lại hàng tháng, cần tới 3, 4 bạn kế toán để ghi chép lại. Bộ máy cồng kềnh mà mức độ chính xác không cao.</div>
    <div class='author'><div><strong>Trần Thuý Hoà</strong></div>
    <div>Giám đốc Tài chính</div>
    <div>Chuỗi cửa hàng Révi Coffee & Tea</div></div>
  </div>
  <div class="col2"><img src="Trần Thuý Hoà.jpg"></div>
</div>

---
Tại sao VNPAY không giải quyết những vấn đề này?

(Momo đang triển khai chương trình cho khách hàng làm nhiệm vụ [phân loại các giao dịch chưa phân loại](https://www.momo.vn/tin-tuc/khuyen-mai/lam-nhiem-vu-phan-loai-giao-dich-100-co-qua-0d-6156))

---
Hiện tại trên thị trường, có vẻ như chỉ có duy nhất Trấn Kỳ là có công nghệ lõi có thể làm được điều đó bằng tiếng Việt. 
![[Keep to Fibery.png]]

---
<span class="fragment">Nếu tích hợp được Trấn Kỳ vào Merchant View, thì chủ cửa hàng mỗi khi đi mua nguyên vật liệu (tức là khi họ là khách hàng của một cửa hàng khác) sẽ có thêm động lực để chỉ quẹt mã VNPAY. Đây chính là phương thức hữu hiệu nhất để các chủ cửa hàng này tiếp nhận VNPAY và trở thành phương thức thanh toán chính của chủ cửa hàng.
</span>
---
# Các hình thức chăm sóc, thu hút sự quan tâm
----
## Với cửa hàng chưa có nhiều quan tâm tới việc kiểm soát dòng tiền
- Giới thiệu công cụ giúp quản lý dòng tiền (sử dụng cấu hình có sẵn) <!-- .element: class="fragment" -->
- Tổ chức các buổi thảo luận để kết nối, giới thiệu giải pháp cho các nhu cầu khác <!-- .element: class="fragment" -->
----
## Với doanh nghiệp có nhu cầu tuỳ chỉnh theo đặc thù cửa hàng
- Cử người đến hướng dẫn thiết lập cấu hình  <!-- .element: class="fragment" -->

---
> Để có thể thiết kế một giải pháp một cách nhanh chóng và tự tin, ta cần được thử nghiệm ý tưởng mới và kiểm tra giả thiết ngay khi chúng vừa được nghĩ ra

Bret Victor, nhà nghiên cứu về công cụ nghĩ

---
Liên kết tham khảo:
- Trang chủ Trấn Kỳ
- Lý do viết Trấn Kỳ
- Bản đề xuất cho app ghi chép chi tiêu sử dụng Trấn Kỳ
---
Liên hệ
Lý Minh Nhật: 0912214006

