---
share: true
created: 2023-07-21T22:43
updated: 2024-09-02T15:16
---
Một cách đại khái, [interface](https://tuhocict.com/lesson/cai-tien-data-acceess-su-dung-interface/) là một giao kèo giữa bên sử dụng và bên thực thi class. Cụ thể hơn, [interface](https://tuhocict.com/giai-phap-winforms-3-interface-loose-coupling/) chứa các mô tả về phương thức và thuộc tính mà bên thực thi class phải xây dựng. Bên sử dụng thì không cần quan tâm đến cách thức xây dựng này.

Lấy một ví dụ khác. Giả sử đèn điện nhà bạn lắp toàn loại đui xoáy. Nếu bạn cần mua bóng đèn, có vô số loại khác nhau, từ đèn sợi đốt đến đèn huỳnh quang, từ hình vuông đến hình tròn. Nhưng chỉ cần nó là đui xoáy thì bạn đều có thể sử dụng được.

Khi so ra, đui xoáy ở đây chính là một dạng interface, là “giao kèo” giữa người sử dụng bóng đèn và người sản xuất bóng đèn. Người sản xuất chỉ cần đảm bảo “đui xoáy” cho bóng mình làm ra. Người sử dụng thì không cần quan tâm đến cách thức làm ra bóng đèn, miễn sao có đui xoáy là được.

Interface khi đó được bên sử dụng xem như một kiểu dữ liệu. Biến của kiểu dữ liệu này có thể tương thích với bất kỳ object nào tạo ra từ class thực thi giao diện tương ứng.

Nguồn:: [[tuhocict]], [Bộ nguyên lý SOLID - lập trình viên tương lai cần biết | Tự học ICT](https://tuhocict.com/bo-nguyen-ly-solid-lap-trinh-vien-tuong-lai-can-biet/)
