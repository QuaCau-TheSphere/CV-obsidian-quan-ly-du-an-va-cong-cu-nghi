---
share: true
created: 2023-09-05T16:17
updated: 2024-02-24T22:19
---
# Khi nào thì công việc kế toán cần tới việc nhập liệu và gắn nhãn dữ liệu?
Em hiện đang nghiên cứu về **nhu cầu tự động hoá việc nhập liệu và phân loại, gắn nhãn, để biến dữ liệu phi cấu trúc thành dữ liệu có cấu trúc ở công việc kế toán**. Ví dụ, khi đi chợ thì ta có một dữ liệu thô (phi cấu trúc) như sau:
```**
thăn bò 30k lườn gà 20k (giảm giá) cho Parid ở coopmart vợ trả
```
Kết quả của việc phân loại, gắn nhãn nó để dữ liệu này trở thành dữ liệu có cấu trúc sẽ là:
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

Không biết trong cuộc sống hoặc công việc của các anh chị có khi nào các anh chị phải làm như vậy không? Và công cụ anh chị dùng để phân loại là công cụ nào? Và mức độ thường xuyên làm vậy của anh chị là gì?

Lưu ý là không nhất thiết là phân loại chi tiêu nhé. Em lấy ví dụ như vậy là vì em không biết công việc kế toán thường phải phân loại cái gì. Em cảm ơn các anh chị.

# Làm sao để tự động phân loại dữ liệu trên Excel, AppScript?
Không biết trên Excel có cách nào để tự động phân loại, gắn nhãn, để biến dữ liệu phi cấu trúc thành dữ liệu có cấu trúc không nhỉ?

Ví dụ, khi đi chợ thì ta có một dữ liệu thô (phi cấu trúc) như sau:
```
thăn bò 30k lườn gà 20k (giảm giá) cho Parid ở coopmart vợ trả
```

Kết quả của việc phân loại, gắn nhãn nó để dữ liệu này trở thành dữ liệu có cấu trúc sẽ là:
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
Em muốn nó tự động phân loại chứ không phải nhập tay. Em có biết về regex nhưng cái này có lẽ phức tạp hơn chỉ dùng regex đơn thuần. Em nghĩ là cần phải có plugin chuyên biệt cho nó.

# Mức độ thường xuyên phải phân loại, gắn nhãn thông tin (chuyển từ dữ liệu phi cấu trúc sang dữ liệu có cấu trúc) của bạn khi làm tiếp thị là như thế nào?
Ví dụ về việc phân loại, gắn nhãn thông tin: giả sử bạn đi mua bánh ở coopmart mất 50k, và bạn cần nhập giao dịch này vào trong cơ sở dữ liệu của mình như sau:

- Món đồ: bánh
- Loại món đồ: ăn vặt
- Số tiền: 50000 VNĐ
- Nơi mua: CoopMart
- Loại nơi mua: siêu thị
- Phương thức thanh toán: tiền mặt

Bạn có phải thường xuyên làm việc này không? Không nhất thiết phải là chi tiêu nhé.

Mỗi ngày một lần hoặc hơn
Mỗi tuần một lần

# Khi nào thì mới cần tự động phân loại?
