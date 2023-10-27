---
created: 2023-07-22T11:55
updated: 2023-10-13T15:38
share: true
---
## Một số lỗi thường gặp trong lập trình winform

### Viết mọi thứ vào code behind

Các bạn rất thường xuyên viết tất cả các loại code trong file code behind. Nó bao gồm đủ các code xử lý logic, tính toán, truy xuất cơ sở dữ liệu, tương tác với các điều khiển.

Kết quả là file code behind thường xuyên là một mớ hổ lốn với số lượng code rất lớn. Cá biệt, đôi khi gặp những project mà toàn bộ code của cả chương trình dồn vào trong vài form.

Mỗi lớp form thường được tách làm hai file: file design và file code behind. Code của file design được chương trình designer sinh tự động. Phần code behind là nơi lập trình viên viết code của mình để xử lý sự kiện hoặc thực hiện các tính toán.

Giờ đặt ra mấy vấn đề:

- Bạn sẽ làm thế nào nếu muốn thay đổi thiết kế giao diện? Hầu như sẽ phải code lại hết từ đầu rồi.
- Nếu bạn làm việc theo nhóm 2-3 người, làm sao phân chia công việc? Cái này chịu rồi.
- Làm sao để test được logic/tính toán của ứng dụng? Cái này cũng chịu rồi.
- Làm sao để bảo trì code về sau, đặc biệt khi có yêu cầu điều chỉnh từ người hướng dẫn?
- Người khác (giáo viên chẳng hạn) đọc code của bạn chắc chắn sẽ không chịu nổi đâu.

Tại sao lại có việc dồn code hết vào một cục như vậy?

Đây là do bạn không biết và vận dụng các nguyên lý của thiết kế hướng đối tượng (như [bộ nguyên lý SOLID](https://tuhocict.com/bo-nguyen-ly-solid-lap-trinh-vien-tuong-lai-can-biet/)) và các nguyên lý chung trong lập trình ứng dụng (vd, nguyên lý Separation of Concerns). Các nguyên lý này áp dụng không chỉ cho winform, mà còn cho bất kỳ công nghệ phát triển ứng dụng nào.

Bạn cũng không quan tâm đến các yêu cầu chung đặt ra cho việc code phần mềm (ví dụ, khả năng bảo trì, nâng cấp, test). Mục đích của các bạn chỉ là làm sao có được một chương trình chạy.

Tuy nhiên, nếu bạn quen với lối lập trình như vậy, dù là theo công nghệ nào đi nữa, code của các bạn cũng vẫn chỉ là các mớ hổ lốn. Sau sẽ rất khó sửa.

### Không phát huy được các tính năng của windows forms

Ví dụ, khi làm việc với các control như TextBox, các bạn thường truy xuất thông tin trực tiếp qua code và thuộc tính Text. Khi làm việc với DataGridView/ListView, các bạn thường đổ dữ liệu vào một cách thủ công.

Khi làm như vậy, tất cả đều phải thông qua code. Mà code này lại nằm ở chính file code behind đã nói ở trên. Nó càng làm phình file này ra.

Với kiểu làm “thủ công” trên, bạn đã vứt bỏ đi khả năng liên kết dữ liệu (data binding) và hỗ trợ thiết kế rất mạnh của winforms. Lối làm thủ công mất rất nhiều công sức, dễ bị lỗi, ứng dụng làm ra hay bị lỗi vặt và thiếu ổn định.

Hãy tưởng tượng khi một giao diện phức tạp với rất nhiều điều khiển trên đó trao đổi và đồng bộ dữ liệu với nhau. Việc lẫn lộn giữa chúng là rất thường xuyên. Kiểu làm thủ công này cũng rất rắc rối khi cần đồng bộ dữ liệu giữa các điều khiển.

### Không phân biệt giữa giao diện – logic – dữ liệu

Ở trên có nói tới việc bạn thường xuyên nhồi nhét đủ mọi loại code vào file code-behind của form. Nếu bạn phân biệt được rạch ròi các thành phần chính của ứng dụng thì có thể mọi thứ sẽ khác.

Nhìn một cách chung nhất, mỗi ứng dụng thường phân biệt rõ 3 thành phần cơ bản: giao diện người dùng, logic, dữ liệu. Mỗi thành phần này có mục tiêu khác nhau, kỹ thuật xử lý khác nhau. Do đó, không thể trộn lẫn lộn với nhau được.

Giao diện người dùng được tạo ra bởi Form và các điều khiển bạn đặt trên nó. Nhiệm vụ của nó là giúp người dùng nhập dữ liệu, và hiển thị dữ liệu (đã xử lý) trở lại cho người dùng.

Logic là các quy tắc chi phối việc xử lý dữ liệu. Anh này thường âm thầm đứng sau chứ ít khi lộ diện và do đó ít khi được để ý tới. Ví dụ, khi người dùng cần một danh sách email sắp xếp theo thứ tự abc. Anh logic phải làm việc này. Còn anh giao diện chỉ làm nhiệm vụ hiển thị nó ra.

Dữ liệu là thứ trung tâm, cả anh giao diện và logic đều phải làm việc với anh dữ liệu. Tuy nhiên, anh dữ liệu cũng đòi hỏi có nhà riêng cho nó ở. Đó là file dữ liệu, hoặc một cơ sở dữ liệu. Khi cần, dữ liệu sẽ rời nhà đến làm việc với logic và giao diện. Xong việc, dữ liệu sẽ quay về nhà ở.

Như vậy, nếu phân biệt rõ ba anh này, bạn chắc chắn sẽ thấy chúng nó không thể ở chung với nhau được. Mỗi anh cần không gian riêng cho mình.

Nguồn:: [[tuhocict]], [Bộ giải pháp dễ học cho lập trình winform giúp bạn làm đề tài | Tự học ICT](https://tuhocict.com/giai-phap-winforms-1-phan-tich-van-de-bai-toan-minh-hoa/)
