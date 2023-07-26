---
share: True
---
### Không phân biệt giữa giao diện – logic – dữ liệu

Ở trên có nói tới việc bạn thường xuyên nhồi nhét đủ mọi loại code vào file code-behind của form. Nếu bạn phân biệt được rạch ròi các thành phần chính của ứng dụng thì có thể mọi thứ sẽ khác.

Nhìn một cách chung nhất, mỗi ứng dụng thường phân biệt rõ 3 thành phần cơ bản: giao diện người dùng, logic, dữ liệu. Mỗi thành phần này có mục tiêu khác nhau, kỹ thuật xử lý khác nhau. Do đó, không thể trộn lẫn lộn với nhau được.

Giao diện người dùng được tạo ra bởi Form và các điều khiển bạn đặt trên nó. Nhiệm vụ của nó là giúp người dùng nhập dữ liệu, và hiển thị dữ liệu (đã xử lý) trở lại cho người dùng.

Logic là các quy tắc chi phối việc xử lý dữ liệu. Anh này thường âm thầm đứng sau chứ ít khi lộ diện và do đó ít khi được để ý tới. Ví dụ, khi người dùng cần một danh sách email sắp xếp theo thứ tự abc. Anh logic phải làm việc này. Còn anh giao diện chỉ làm nhiệm vụ hiển thị nó ra.

Dữ liệu là thứ trung tâm, cả anh giao diện và logic đều phải làm việc với anh dữ liệu. Tuy nhiên, anh dữ liệu cũng đòi hỏi có nhà riêng cho nó ở. Đó là file dữ liệu, hoặc một cơ sở dữ liệu. Khi cần, dữ liệu sẽ rời nhà đến làm việc với logic và giao diện. Xong việc, dữ liệu sẽ quay về nhà ở.

Như vậy, nếu phân biệt rõ ba anh này, bạn chắc chắn sẽ thấy chúng nó không thể ở chung với nhau được. Mỗi anh cần không gian riêng cho mình.


Nguồn:: [[tuhocict]], [Bộ giải pháp dễ học cho lập trình winform giúp bạn làm đề tài | Tự học ICT](https://tuhocict.com/giai-phap-winforms-1-phan-tich-van-de-bai-toan-minh-hoa/)