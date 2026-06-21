---
share: true
created: 2023-06-03T11:28
updated: 2026-05-12T23:39
---
Khái niệm:: [[Văn bản]]
Cho rất nhiều văn bản, mỗi văn bản chứa rất nhiều từ. Mục tiêu là tô màu các từ sao cho:
1. Mỗi văn bản càng chứa ít màu càng tốt
2. Mỗi từ phải dùng càng ít màu để tô càng tốt

Thuật toán Gibbs sẽ chạy như sau: Với mỗi từ chưa được tô màu sẽ thống kê các màu đã được tô trước, sau đó chọn màu cho từ đó theo xác suất. Như vậy màu nào thoả điều kiện thì sẽ có xác suất to hơn, nhưng vẫn không loại trừ những cái nhỏ hơn

![1](https://i.stack.imgur.com/BfTJjm.png)

Nguồn:: ![Training Latent Dirichlet Allocation: Gibbs Sampling](https://www.youtube.com/watch?v=BaM1uiCpj_E&t=452s)
