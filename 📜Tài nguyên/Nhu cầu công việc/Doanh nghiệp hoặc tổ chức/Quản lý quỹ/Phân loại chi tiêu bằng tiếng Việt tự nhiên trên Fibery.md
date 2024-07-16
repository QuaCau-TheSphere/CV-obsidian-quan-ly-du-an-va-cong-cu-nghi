---
share: true
created: 2023-07-22T20:20
updated: 2024-07-16T22:56
---
Nếu bạn là người cần:
- [ ] Phân loại tất cả các chi tiêu của mình một cách rõ ràng. Nhắm hờ mỗi tháng chừng bao nhiêu từ là không đủ với bạn
- [ ] Cảm thấy rất nhức đầu khi phải phân loại chi tiêu của mình vào thời điểm chia tiêu, chỉ muốn ghi thật nhanh mình đã chi cái gì vào một danh sách đơn giản,
- [ ] Có thể dùng trên điện thoại khi không có mạng
- [ ] Có thể tuỳ biến cấu trúc dữ liệu
- [ ] Có lúc mình ghi chung chung là trái cây. Có lúc mình ghi là cam
- [ ] Tự do sử dụng linh hoạt trên các web app như Fibery hay Google Sheet
- [ ] Không có bất cứ quảng cáo mời mọc nào

Thì script này dành cho bạn.

# Tính năng
## Mass import
## Không cần điền đủ thông tin
Hữu ích nếu bạn muốn ghi tạm thông tin trước, rồi điền những thứ còn thiếu sau
## Tự động điền thông tin mặc định 
## Chấp nhận viết tắt
## Gộp chung nhiều món hàng được
## Linh hoạt trong việc dán nhãn
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
# Các tính năng hỗ trợ khác (aka yêu cầu phi chức năng) 
- Mã nguồn mở
- Không muốn bị ràng buộc vào một nền tảng nào
- Chỉ sử dụng plain JS, không có framework nào
- Chỉ có duy nhất một file
- Tên biến hoàn toàn bằng tiếng Việt
- Rất nhiều ghi chú để bạn hiểu code
- (Gần như) tuân thủ [Fetching Title#zmwr](https://www.conventionalcommits.org/en/v1.0.0/)
- [Conventional Logs](https://www.conventionallogs.org/en/v0.0.1/)
# FAQ
**Q: Tại sao lại viết script này là gì?**
Đây là nhu cầu của Kendy, và bọn mình giúp được gì thì giúp. Xem thêm bài [[Từ việc hỗ trợ Kendy đến Patreon và tâm lý của con người về tiền]]. 

Sẽ có rất nhiều người đến với script này không phải là lập trình viên. Tuy nhiên sẽ có thể họ cần phải tự biết cách chỉnh sửa
Nhưng sau đó, nó còn phục vụ một mong muốn khác của bọn mình là Dạy học JavaScript. Cố gắng hướng dẫn các bạn mới nhiều nhất có thể.  [[Người mới lập trình thường hỏi nên dùng cú pháp, thư viện, hay ngôn ngữ nào. Lập trình viên nhiều kinh nghiệm thường tập trung vào các khái niệm trừu tượng]]. Để thấy rằng việc lập trình không chỉ là code sao cho máy chạy đúng ý mình, mà còn là cách ta kiến trúc lên thế giới này.

cũng không thể nói là có kinh nghiệm. Cái này là vừa học vừa làm thôi

**Q: Tại sao không sử dụng các phần mềm chuyên cho quản lý tài chính cá nhân?**
Phải phân loại ngay tại chỗ, trong khi điều này lấy thời gian của bạn. 

Hubspot không tuỳ chỉnh tốt, không kết nối tới các công việc khác

Độ phức tạp phải như các phần mềm cho doanh nghiệp. Tuỳ chỉnh quá nâng cao so với nhu cầu của một người bình thường. Sự phức tạp của nó phải tầm như phần mềm cho doanh nghiệp
**Q: Nếu cần kết nối số tiền tới các công việc khác, tại sao không sử dụng các phần mềm quản lý doanh nghiệp (ERP)?**
Vì các phần mềm ERP, dù là mã nguồn mở như Odoo, thì đã xác định là khách hàng doanh nghiệp rồi. Môi trường đóng, không đáp ứng được nhu cầu tuỳ chỉnh cao. Có thể tuỳ chỉnh cao, nhưng hoặc sẽ phải tốn rất nhiều thời gian để học lập trình, hoặc phải lệ thuộc vào . Mỗi lần cần điều chỉnh là lại phải nhờ. Sẽ không đủ tiền để nhờ hoài như vậy.

Mà kể cả muốn học thì cũng không biết phải thế nào, khi mà hỏi ra thì người ta chỉ báo giá chứ không thực sự muốn chỉ. 
Phải tự build, chi phí học code quá cao. Nếu không ai code giùm cho thì thà chịu đau khổ chứ không thể nào tự học được

**Q: Nếu đã cần một ứng dụng linh hoạt và giá rẻ, tại sao không tự tạo bảng Excel, Access, SQL? Tại sao không kiếm phần mềm quản lý tài chính mã nguồn mở?** 
Do Kendy đã sắp xếp mọi thứ trên Fibery, nên sẽ bị chi phối bởi những gì Fibery cho. Và Fibery cho viết JS.

Google Keep cũng khá lợi:
- has iOS and Android clients
- open fast
- synchronizes to one central source
- [ ] doesn't require internet to work (the operations can be sent later)****

Ban đầu chỉ nghĩ chỉ cần một vài dòng regex đơn giản là được, nhưng càng ngày càng thấy đòi hỏi phức tạp. Tuy nhiên vẫn cảm giác sự phức tạp này mình có thể gánh được, nên cũng muốn nhân dịp này có một dự án để học thêm về lập trình cũng như có một sản phẩm để làm một giáo trình nhập môn cho các bạn khác.

Hơn nữa các phần mềm này viết trên Nodejs.

**Q: Tại sao lại tự viết hết chứ không dùng mô đun NLP tiếng Việt nào?**
Lúc đó không nghĩ ra, đến lúc nghĩ ra thì code cũng gần xong rồi.
**Q: Nếu cần kết quả trên Fibery, tại sao không dùng API để cập nhật Fibery?** 

**Q: Nếu đằng nào cũng cần phải code rồi**
Lúc đó không nghĩ ra, đến lúc nghĩ ra thì code cũng gần xong rồi. Cái này vừa học vừa làm thôi
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

- Literature Database: Kĩ thuật viết văn %topic_Writing @tác_giả_a
- interaction: Gặp @ông_A bàn về việc gì đó X , có đi ăn ở !nhà_hàng_Y 200k ck vcb
- task database: Công việc A cần giao cho @bạn_A liên hệ với @@đối_tác_c tại !cafe_ttt với cost dự kiến 300k ck vcb và nhận output &&item_X
[Comprehensive review of text-mining applications in finance | Financial Innovation | Full Text](https://jfin-swufe.springeropen.com/articles/10.1186/s40854-020-00205-1#citeas)
Gupta, A., Dengre, V., Kheruwala, H.A. _et al._ Comprehensive review of text-mining applications in finance. _Financ Innov_ **6**, 39 (2020). https://doi.org/10.1186/s40854-020-00205-1
[icoxfog417/awesome-financial-nlp: Researches for Natural Language Processing for Financial Domain](https://github.com/icoxfog417/awesome-financial-nlp "icoxfog417/awesome-financial-nlp: Researches for Natural Language Processing for Financial Domain")
