---
share: true
created: 2023-05-27T22:58
updated: 2023-10-06T16:09
---
Từ mối liên hệ này khái niệm về ma trận trực giao đã hình thành để tạo ra các phép xoay đặc biệt.

Phương pháp SVD sẽ tìm ra một lớp các ma trận xấp xỉ tốt nhất với một ma trận cho trước dựa trên khoảng cách norm Frobenios giữa 2 ma trận. Người ta đã chứng minh được rằng ma trận xấp xỉ tốt nhất được biểu diễn dưới dạng tích của 3 ma trận rất đặc biệt bao gồm 2 _ma trận trực giao_ (orthogonal matrix) và 1 _ma trận đường chéo_ (diagonal matrix). Quá trình nhân ma trận thực chất là quá trình biến đổi các điểm dữ liệu của ma trận gốc thông qua những phép xoay trục (rotation) và phép thay đổi độ lớn (scaling) và từ đó tạo ra những điểm dữ liệu mới trong không gian mới. Điều đặc biệt của ma trận đường chéo đó là các phần tử của nó chính là những giá trị riêng của ma trận gốc. Những điểm dữ liệu trong không gian mới có thể giữ được 100% thông tin ban đầu hoặc chỉ giữ một phần lớn thông tin của dữ liệu ban đầu thông qua các phép truncate SVD. Bằng cách sắp xếp các trị riêng theo thứ tự giảm dần trên đường chéo chính thuật toán SVD có thể thu được ma trận xấp xỉ tốt nhất mà vẫn đảm bảo giảm được hạng của ma trận sau biến đổi và kích thước các ma trận nhân tử nằm trong giới hạn cho phép. Do đó nó tiết kiệm được thời gian và chi phí tính toán và đồng thời cũng tìm ra được một giá trị dự báo cho ma trận gốc với mức độ chính xác cao.

Nguồn:: [[Phạm Đình Khánh]], [Singular Value Decomposition | Kaggle](https://www.kaggle.com/code/phamdinhkhanh/singular-value-decomposition/notebook)

Bới vì [[Độ tương đồng của hai vector chính là tích vô hướng vừa nó]], nên SVD không làm biến dạng độ tương đồng của chúng
