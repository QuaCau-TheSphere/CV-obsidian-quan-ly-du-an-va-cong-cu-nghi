---
share: true
created: 2023-06-03T11:28
updated: 2024-08-10T16:12
---
1. Mỗi văn bản có càng ít màu càng tốt
2. Mỗi từ có càng ít màu càng tốt

Với mỗi từ chưa được tô màu, thuật toán Gibbs sẽ thống kê các màu đã được tô trước, sau đó chọi phi tiêu vào để lấy màu theo xác suất. Như vậy màu nào thoả điều kiện thì sẽ có xác suất to hơn, nhưng vẫn không loại trừ những cái nhỏ hơn

![1](https://i.stack.imgur.com/BfTJjm.png)

Nguồn:: ![Training Latent Dirichlet Allocation: Gibbs Sampling](https://www.youtube.com/watch?v=BaM1uiCpj_E&t=452s)
