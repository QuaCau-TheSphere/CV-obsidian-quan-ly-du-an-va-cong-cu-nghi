---
share: true
created: 2023-07-22T11:47
updated: 2023-10-06T16:09
---
## Mô hình MVC

Đây là một mẫu kiến trúc (architechtural pattern) ra đời sớm nhất. MVC không được quá “trọng dụng” cho đến thời kỳ ứng dụng web “lên ngôi”. Hiện nay, MVC là mẫu kiến trúc phổ biến nhất (nếu không muốn nói là độc tôn) trong phát triển ứng dụng web.

Mô hình này dựa trên việc phân chia code của ứng dụng (nói chung, về thành phần giao diện) thành ba phần: Model, View, Controller. Model là nơi lưu trữ dữ liệu; View là nơi hiển thị dữ liệu của Model; Controller tiếp nhận yêu cầu từ client, ghép nối Model với View, thực hiện các xử lý cần thiết.

Điểm đặc thù của MVC ở chỗ, Model là thành phần độc lập nhất, luôn được xây dựng đầu tiên trong ứng dụng và chi phối hầu hết các thành phần khác. View được xây dựng tiếp theo nhằm hiển thị thông tin của Model cho người dùng. Controller xây dựng sau cùng để xử lý yêu cầu của người dùng và ghép nối View với Model. Trong hệ thống đó, Model không biết đến View, View không biết đến Controller.

![Tương tác giữa các thành phần trong mô hình MVC](https://tuhocict.com/wp-content/uploads/2019/04/mvc-model.png)

_Tương tác giữa các thành phần trong mô hình MVC_

Để đảm bảo hoạt động theo mô hình như vậy, trong mô hình MVC thường phải xây dựng thêm một thành phần gọi là Router để đảm bảo trao đổi thông tin từ View đến Controller, cũng như đảm bảo việc tiếp nhận truy vấn từ người dùng của Controller.

Trong mô hình này hoàn toàn có thể áp dụng đầy đủ các nguyên lý SOLID, mẫu Repository (cho quản lý dữ liệu), các mẫu thiết kế (ví dụ, singleton hoặc mediator cho Router), sử dụng kỹ thuật tạo loosely-coupling cho Repository (để dễ dàng thay đổi thành phần truy xuất dữ liệu).

Nguồn:: [[tuhocict]], [Console MVC Library cho .NET (1): giới thiệu chung | Tự học ICT](https://tuhocict.com/net-console-mvc-library-1/)
