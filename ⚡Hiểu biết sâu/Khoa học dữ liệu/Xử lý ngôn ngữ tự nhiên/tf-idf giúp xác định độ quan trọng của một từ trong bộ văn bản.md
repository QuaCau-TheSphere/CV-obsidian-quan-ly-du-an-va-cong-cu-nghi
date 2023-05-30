---
share: True
---
Những từ hiếm khi được tìm thấy trong bộ văn bản (corpus) nhưng có mặt trong một văn bản cụ thể có thể quan trọng hơn. Do đó cần tăng trọng số của các nhóm từ ngữ để tách chúng ra khỏi các từ phổ biến.
 
**$tf\textendash idf$** là viết tắt của **term frequency–inverse document frequency** (tần số từ-nghịch đảo tần số văn bản). Nó giúp xác định độ quan trọng của một từ đối với một văn bản. Nó giả định rằng một từ càng quan trọng trong một văn bản thì:

- Từ đó xuất hiện nhiều lần trong văn bản đó
- Không có nhiều văn bản chứa từ đó

Tức là, để có $tf\textendash idf$ lớn thì:
- Số lần từ đó trong văn bản đó xuất hiện lớn 
- Số văn bản chứa từ đó trong bộ văn bản nhỏ 

Tức là:
- *Tần số từ* (term frequency) lớn
- Tần số văn bản nhỏ ⇔*nghịch đảo tần số văn bản* (inverse document frequency) lớn

Ngoài ra, nếu văn bản nào cũng chứa từ đó nghĩa là từ đó là một từ đại trà, không có ý nghĩa gì. Vậy thì *$tf\textendash idf$ của nó nên bằng $0$ khi tần số văn bản bằng tổng số văn bản trong bộ văn bản*.

Từ những phân tích đó, người ta đưa ra công thức tính $tf\textendash idf$ cho từ $t$ của văn bản $d$ trong bộ văn bản như sau:
$$\begin{aligned}

\\ tf\textendash idf(t, d) &= tf(t, d) \times idf(t) 
\\ &= tf(t, d) \times \log\frac{N}{df(d)}
\end{aligned}$$

- Nếu $df(d)=N$, từ $t$ xuất hiện trong tất cả các văn bản. Nó trở nên quá đại trà, chung chung. $tf\textendash idf = 0$