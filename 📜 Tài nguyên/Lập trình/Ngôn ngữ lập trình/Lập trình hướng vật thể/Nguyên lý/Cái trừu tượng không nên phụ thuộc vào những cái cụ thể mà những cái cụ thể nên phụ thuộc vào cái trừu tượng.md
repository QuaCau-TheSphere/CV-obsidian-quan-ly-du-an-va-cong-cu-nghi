---
share: true
created: 2023-07-21T22:52
updated: 2023-10-06T16:09
---
## Nguyên lý DIP – Dependency Inversion Principle

Đây là nguyên lý khó nhằn nhất của SOLID vì nó đi ngược lại cách hiểu thông thường các bạn được học trong lập trình hướng đối tượng.

### Sự phụ thuộc giữa các class

Trước hết cần hiểu thế nào là sự phụ thuộc (dependency) giữa các class.

Hiểu một cách đơn giản nhất, class B được gọi là phụ thuộc vào class A nếu trong code của B xuất hiện A (như khởi tạo, gọi phương thức, v.v.). Khi này, class A phải được xây dựng trước class B. B được xem là class _cấp cao_ hơn, A là class _cấp thấp_ hơn.

Như vậy, sự phụ thuộc tạo ra thứ tự xây dựng các class có liên quan. Các class phụ thuộc nhau như vậy không thể được xây dựng song song. Class cấp thấp phải xây dựng trước. Đây là cách thức làm việc rất quen thuộc khi học lập trình hướng đối tượng.

Sự phụ thuộc này cũng có hệ quả xấu. Khi class cấp thấp thay đổi có thể dẫn đến thay đổi class cấp cao. Khi thay thế class cấp thấp sẽ phải sửa code của class cấp cao.

### Nguyên lý DIP

Nguyên lý Dependency Inversion có hai ý:

1. các class cấp cao không nên phụ thuộc vào các class cấp thấp. Thay vào đó, nên cho cả hai cùng phụ thuộc vào “cái trừu tượng” (abstraction) thứ ba.
2. “cái trừu tượng” không nên phụ thuộc vào những cái cụ thể mà nên theo chiều ngược lại, nghĩa là những cái cụ thể phải phụ thuộc vào “cái trừu tượng”.

Nghe rất lằng nhằng khó tiêu phải không ạ! Cả hai anh này đều đảo ngược cách suy nghĩ quen thuộc của chúng ta khi học lập trình hướng đối tượng. Chúng ta sẽ giải thích kỹ hơn qua ví dụ vận dụng dưới đây.

#### * các class cấp cao không nên phụ thuộc vào các class cấp thấp

Vẫn tiếp tục với ví dụ class B phụ thuộc class A ở trên. Giờ chúng ta định nghĩa một interface mới, tạm đặt tên là IA, và cho A thực thi IA. Trong code của B giờ chỉ gọi đến IA mà không gọi đến A nữa. Như vậy B không còn phụ thuộc vào A mà quay sang phụ thuộc IA. B và A đã độc lập với nhau. Interface IA chính là “cái trừu tượng”, là kẻ thứ ba giúp B tránh phụ thuộc vào A; B và A là những “cái cụ thể”. Thay vì sử dụng interface, chúng ta cũng có thể sử dụng lớp trừu tượng (abstraction class) theo cách tương tự.

Bản chất của giải pháp này nằm ở chỗ, B và A bây giờ đưa ra một bản hợp đồng về những phương thức hay thuộc tính mà A cần phải thực hiện. B thì chỉ cần nhắm mắt sử dụng hợp đồng này (qua biến thuộc kiểu IA) mà không cần quan tâm A làm như thế nào. Cái này cũng giống như khi bạn đi mua bóng đèn trong ví dụ ở phần nguyên lý Interface Segregation ở trên. Người ta gọi quan hệ giữa B và A theo kiểu này là quan hệ qua giao diện, là một loại quan hệ gián tiếp, để phân biệt với kiểu quan hệ trực tiếp thông thường.

Yêu cầu thứ nhất này đảo ngược cách chúng ta cho các class tương tác so với khi học OOP.

#### * “cái trừu tượng” không nên phụ thuộc vào những “cái cụ thể”

Vẫn ví dụ A, B và IA ở trên. Theo nguyên lý này, khi thiết kế (ví dụ, sơ đồ class) chúng ta phải định nghĩa IA (cái trừu tượng) trước hết. IA xác định tương tác giữa A và B trong tương lai. B và A (cái cụ thể) được xây dựng sau.

Điều này có nghĩa là bản thân tương tác giữa các class phải được xem xét là một phần độc lập. Các class cụ thể sau đó mới xây dựng dựa trên tương tác này. Tương tác này được xây dựng dưới dạng interface hoặc abstract class.

Yêu cầu thứ hai này đảo ngược cách thức xây dựng class quen thuộc khi học OOP.

### Vận dụng

Ở đây phát sinh một vấn đề. Do IA chỉ là một interface (hoặc lớp abstract), vậy object của A sẽ được tạo ở đâu? Vì nếu không tạo ra object của A thì ở giai đoạn runtime chắc chắn sẽ bị lỗi (dĩ nhiên rồi, làm gì có object thực sự mà chạy!). Có vài giải pháp khác nhau.

Cách thứ nhất là tạo ra thêm một class C chịu trách nhiệm khởi tạo cả B và A, đồng thời gán A cho IA (nằm trong B). Cách thứ hai là sử dụng kỹ thuật Dependency Injection với một IoC container (như Unity hay Ninject). Cách thứ ba là sử dụng một số kỹ thuật lập trình đặc biệt của ngôn ngữ, ví dụ trong .NET framework có thể sử dụng kỹ thuật lập trình Reflection. Cách thứ tư là sử dụng một vài mẫu thiết kế (design pattern) đặc biệt cho mục đích này như mẫu factory.

Nguyên lý này đòi hỏi bạn phải phân tích rất kỹ bài toán để xác định rõ tất cả các class sẽ xây dựng, vai trò và sự tương tác giữa chúng (có những anh nào, làm gì, và anh nào sử dụng anh nào). Từ đó áp dụng nguyên lý DI này để giúp phát triển đồng thời các class.

Nguồn:: [[tuhocict]], [Bộ nguyên lý SOLID - lập trình viên tương lai cần biết | Tự học ICT](https://tuhocict.com/bo-nguyen-ly-solid-lap-trinh-vien-tuong-lai-can-biet/)
