---
share: True
---
Lý do: : Giá trị của một từ đến từ vị trí tương đối giữa các từ với nhau (ngữ cảnh) và ngữ nghĩa, chứ không phải theo thứ tự từ điển đầu vào

# Các hạn chế khác của one-hot vector
Sau khi biểu diễn từ dưới dạng one-hot véc tơ, mô hình đã có thể huấn luyện được từ dữ liệu được mã hóa. Tuy nhiên dữ liệu này chỉ đáp ứng được khả năng huấn luyện mà chưa phản ảnh được mối liên hệ về mặt ngữ nghĩa của các từ. Các hạn chế đó là:

1. Mối quan hệ tương quan giữa các cặp từ bất kì luôn là không tương quan (tức bằng 0). Do đó không có tác dụng trong việc tìm mối liên hệ về nghĩa.
2. Kích thước của véc tơ sẽ phụ thuộc vào số lượng từ vựng có trong bộ văn bản dẫn đến chi phí tính toán rất lớn khi tập dữ liệu lớn.
3. Khi bổ sung thêm các từ vựng mới số chiều của véc tơ có thể thay đổi theo dẫn đến sự không ổn định trong shape.

Do đó các thuật toán nhúng từ được tạo ra nhằm mục đích tìm ra các véc tơ đại diện cho mỗi từ sao cho:

1. Một từ được biểu diễn bởi một véc tơ có số chiều xác định trước.
2. Các từ thuộc cùng 1 nhóm thì có khoảng cách gần nhau trong không gian.

Có nhiều phương pháp nhúng từ khác nhau có thể kể đến. Trong đó có 3 nhóm chính:

1. Sử dụng thống kê tần xuất: tfidf
2. Các thuật toán giảm chiều dữ liệu: SVD, PCA, auto encoder, word2vec
3. Phương pháp sử dụng mạng nơ ron: word2vec, ELMo, BERT.

Nguồn:: [[Phạm Đình Khánh]], [Mô hình Word2Vec](https://phamdinhkhanh.github.io/2019/04/29/ModelWord2Vec.html)
