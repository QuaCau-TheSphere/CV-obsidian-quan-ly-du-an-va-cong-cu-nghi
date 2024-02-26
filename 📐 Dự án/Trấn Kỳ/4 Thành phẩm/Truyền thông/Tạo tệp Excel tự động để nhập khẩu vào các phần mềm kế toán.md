---
share: true
created: 2023-09-05T16:17
updated: 2024-02-25T14:44
---
# Tạo tệp Excel tự động để nhập khẩu vào các phần mềm kế toán 
Chia sẻ với mọi người một chương trình phân loại câu nhập mình mới viết. Ví dụ, với câu nhập đầu vào là:
```
thăn bò 30k lườn gà 20k (giảm giá) cho Parid ở coopmart vợ trả 
```

Chương trình sẽ **tự động** phân loại kết quả vào các cột cho bạn:

```
| Cột                         | Giá trị          |
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

Trên đây là một mẫu cho chi tiêu cá nhân. Với doanh nghiệp bạn có thể thay món đồ bằng hàng hoá, nguyên vật liệu, người thụ hưởng bằng khách hàng, v.v. Việc thêm, bớt các trường hoặc dùng cấu trúc phân loại riêng của doanh nghiệp bạn là hoàn toàn khả thi.

Với việc này, bạn có thể nhanh chóng tạo các tệp Excel để nhập khẩu vào các chương trình kế toán mà không phải tạo thủ công từng cái một. **Người dùng không cần lo lắng về cấu trúc câu lệnh, chỉ cần khai báo từ khoá là được.**

Tìm **`Trấn Kỳ`** trên Google để xem demo của chương trình.

[[Excel, AppScript]]