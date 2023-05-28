---
share: True
---
tf-idf là viết tắt của term frequency–inverse document frequency. Nó giúp xác định độ quan trọng của một từ đối với một văn bản. Một từ càng quan trọng  trong một văn bản thì:

- Từ đó xuất hiện nhiều lần trong văn bản đó
- Không có nhiều văn bản chứa từ đó

Tức là, để có tf-idf lớn thì:
- Số lần từ đó trong văn bản đó xuất hiện lớn 
- Số văn bản chứa từ đó trong tập văn bản nhỏ

Công thức tính tf-idf cho từ $t$ của văn bản $d$ trong tập văn bản:
$$\begin{aligned}

\\ tf\textendash idf(t, d) &= tf(t, d) \times idf(t) 
\\ &= tf(t, d) \times \log\frac{N}{df(d)}
\end{aligned}$$

- Nếu $df(d)=N$, từ $t$ xuất hiện trong tất cả các văn bản. Nó trở nên quá đại trà, chung chung. $tf-idf = 0$