---
share: true
created: 2023-05-31T13:32
updated: 2023-10-06T16:09
---
Trong một bộ văn bản có rất nhiều văn bản. Làm sao để xác định được độ đặc trưng của một văn bản trong đó? Thường thì ta sẽ xem những từ đặc trưng mà chỉ văn bản đó có. Những từ hiếm khi được tìm thấy trong bộ văn bản nhưng có mặt trong một văn bản cụ thể có thể quan trọng hơn.

Vậy làm sao để xác định được độ đặc trưng của một từ đối với một văn bản?
- Từ đó xuất hiện nhiều lần trong văn bản đó
- Không có nhiều văn bản chứa từ đó

Tức là, để có $tf\textendash idf$ lớn thì:
- Số lần từ đó trong văn bản đó xuất hiện lớn 
- Số văn bản chứa từ đó trong bộ văn bản nhỏ 

Tức là:
- *Tần số từ* (term frequency) lớn
- Tần số văn bản nhỏ ⇔*nghịch đảo tần số văn bản* (inverse document frequency) lớn

Gộp cả 2 cái lại, người ta đưa ra khái niệm **term frequency–inverse document frequency** (tần số từ-nghịch đảo tần số văn bản), viết tắt là **$tf\textendash idf$**, để xác định độ quan trọng của một từ trong một văn bản trong bộ văn bản. Công thức tính $tf\textendash idf$ cho từ $t$ của văn bản $d$ trong bộ văn bản như sau:
$$\begin{aligned}

\\ tf\textendash idf(t, d) &= tf(t, d) \times idf(t) 
\\ &= tf(t, d) \times \log\frac{N}{df(d)}
\end{aligned}$$

- Nếu $df(d)=N$, từ $t$ xuất hiện trong tất cả các văn bản. Nó trở nên quá đại trà, chung chung. $tf\textendash idf = 0$

%%
Do đó cần tăng trọng số của các nhóm từ ngữ để tách chúng ra khỏi các từ phổ biến.
Ngoài ra, nếu văn bản nào cũng chứa từ đó nghĩa là từ đó là một từ đại trà, không có ý nghĩa gì. Vậy thì *$tf\textendash idf$ của nó nên bằng $0$ khi tần số văn bản bằng tổng số văn bản trong bộ văn bản*.
%%
