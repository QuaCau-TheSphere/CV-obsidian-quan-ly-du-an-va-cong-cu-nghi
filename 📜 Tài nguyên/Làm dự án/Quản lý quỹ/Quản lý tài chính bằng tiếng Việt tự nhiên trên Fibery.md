---
share: True
---
Nếu bạn là người:
- Cảm thấy rất nhức đầu khi phải phân loại chi tiêu của mình vào thời điểm chia tiêu, 
- Chỉ muốn ghi thật nhanh mình đã chi cái gì vào một danh sách đơn giản,
- Không bị ràng buộc vào một nền tảng nào
- Có thể tuỳ biến cấu trúc dữ liệu
- Có thể dùng offline
- Cần liên kết được với các hierarchy 
Thì script này dành cho bạn

# Tính năng
## Mass import
## Không cần điền đủ thông tin
Hữu ích nếu bạn muốn ghi tạm thông tin trước, rồi điền những thứ còn thiếu sau
## Tự động điền thông tin mặc định 
## Chấp nhận viết tắt
## Gộp chung nhiều món hàng được
## Linh hoạt trong việc dán nhãn
- Có lúc mình ghi chung chung là trái cây. Có lúc mình ghi là cam
- Nếu trong câu nhập có nhiều món đồ cùng nhãn thì chỉ lấy một nhãn
- Nếu trong câu nhập vào có nhiều PTTT thì chỉ lấy cái cuối cùng, còn tất cả những cái phía trước chỉ là thông tin
 - Hiểu từ ghép: `Bún bò` thì phải là một món hàng chứ không phải là 2 món hàng `bún` và `bò`
## Cùng một nội dung có thể có nhiều nhãn phân loại khác nhau
Ví dụ với nội dung `cà phê với` vừa có thể thuộc nhãn Mối quan hệ'
# Các thông số
## Món đồ
- Nếu trong câu nhập có nhiều món đồ cùng nhãn thì chỉ lấy một nhãn
## PTTT
- Chỉ lấy PTTT cuối cùng, còn tất cả những cái phía trước chỉ là thông tin
## Giá tiền 
- Số tiền sẽ là các số có đuôi là tr, k, đ, d
- Nếu có nhiều giá trị thì sẽ chọn giá trị đứng đằng sau dấu bằng (`=`)
- Dấu thập phân là dấu chấm (`.`). Bạn có thể dùng dấu phẩy (`,`) để cách các con số để dễ đọc. Nó sẽ được bỏ đi. Ví dụ: 1.2tr, 3,400k, 123,456,700đ, 123,456,700d.

# Các đặc điểm khác của script
- Mã nguồn mở
- Chỉ sử dụng plain JS, không có framework nào
- Chỉ có duy nhất một file
- Tên biến hoàn toàn bằng tiếng Việt
- Rất nhiều ghi chú để bạn hiểu code
# Động lực viết script
Đầu tiên và quan trọng nhất là [[Từ việc hỗ trợ Kendy đến Patreon và tâm lý của con người về tiền|giúp Kendy]]. Đây là nhu cầu của Kendy, và bọn mình giúp được gì thì giúp.

## Tại sao các phần mềm quản lý tài chính không phù hợp với Kendy?
## Tại sao các phần mềm quản lý doanh nghiệp (ERP)  không phù hợp với Kendy?
Môi trường đóng
## Tại sao các phần mềm quản lý doanh nghiệp (ERP)  không phù hợp với Kendy?

Sẽ có rất nhiều người đến với script này không phải là lập trình viên. Tuy nhiên sẽ có thể họ cần phải tự biết cách chỉnh sửa
Nhưng sau đó, nó còn phục vụ một mong muốn khác của bọn mình là Dạy học JavaScript. Cố gắng hướng dẫn các bạn mới nhiều nhất có thể.  [[Người mới lập trình thường hỏi về cú pháp, thư viện, hay ngôn ngữ. Lập trình viên nhiều kinh nghiệm thường tập trung vào các khái niệm trừu tượng]]. Để thấy rằng việc lập trình không chỉ là code sao cho máy chạy đúng ý mình, mà còn là cách ta kiến trúc lên thế giới này.

# Cài đặt
Ở thẻ Actions chọn Created và Updated, với field là Name như hình: 
![](https://i.imgur.com/8iVGxfO.png) 
- Để kiểm tra kết quả tính toán, vào thẻ Activity

# Cách chỉnh sửa
- Khuyến khích bạn dùng [[VS Code]] để sửa. [[Phím tắt cho VS Code]]
- Chỉnh sửa danhSáchLoạiChiTiêu và danhSáchPhươngThức theo nhu cầu của bạn

```js
/**
 * Phần code dưới này dùng để chạy trên Fibery. Nếu chạy trên Fibery thì uncomment nó. Nếu chạy trên VS Code thì comment nó (bôi toàn bộ rồi bấm Ctrl + / để bật/tắt dấu // ở đầu từng dòng) 
👇*/
// const fibery = context.getService('fibery');
// for (const entity of args.currentEntities) {
//     const câuNhập = entity['Name'].toLowerCase();
//     const [sốTiền, mónĐồ, loạiChiTiêu, phươngThứcThanhToán, loạiPhươngThứcThanhToán, nơiMua, loạiNơiMua] = tạoKếtQuả(câuNhập)
//     console.log(`Số tiền:  ${sốTiền}`);
//     console.log(`Món đồ: ${mónĐồ}`)
//     console.log(`Loại chi tiêu: ${loạiChiTiêu}`)
//     console.log(`Phương thức thanh toán: ${phươngThứcThanhToán}`)
//     console.log(`Loại phương thức thanh toán: ${loạiPhươngThứcThanhToán}`)
//     console.log(`Nơi mua: ${nơiMua}`)
//     console.log(`Loại nơi mua: ${loạiNơiMua}`)
//     await fibery.updateEntity(entity.type, entity.id, {
//         'Số tiền': sốTiền,
//         'Món đồ': mónĐồ,
//         'Loại chi tiêu': loạiChiTiêu,
//         'Phương thức thanh toán': phươngThứcThanhToán,
//         'Loại phương thức thanh toán': loạiPhươngThứcThanhToán,
//         'Nơi mua': nơiMua,
//         'Loại nơi mua': loạiNơiMua,
//     });
// }
```
# Mô hình 
[[Hướng dẫn đọc code cho người thấy việc biết lập trình là quan trọng nhưng không thể biến nó trở thành ưu tiên cao nhất]]
[[Mô hình trích chọn từ]]