---
share: true
created: 2026-04-16T11:21
updated: 2026-05-29T13:34
---
# Làm sao để biết rằng việc nghiên cứu không kéo dài mãi mãi?
Bảng viết tắt:

| Viết tắt | Viết đầy đủ                   | Tiếng Anh        |
| -------- | ----------------------------- | ---------------- |
| uk       | Điều đã biết mà không biết    | unknown knowns   |
| kk       | Điều đã biết là đã biết       | known knowns     |
| ku       | Điều không biết mà đã biết    | known unknowns   |
| uu       | Điều không biết là không biết | unknown unknowns |

[[Mọi thứ luôn nằm ở chỗ cuối cùng bạn tìm thấy nó]]
[[Mọi thứ sẽ luôn tốn thời gian hơn bạn nghĩ|Định luật Hofstadter: Mọi thứ sẽ luôn tốn thời gian hơn bạn nghĩ, kể cả khi bạn đã tính đến định luật Hofstadter]]
[[Chỉ có thể ước lượng được thời gian cần có để hoàn thành khi công việc của ta gần như chỉ gồm công việc khai thác]]
[[Điều đã biết là đã biết được dùng để lên kế hoạch chính. Điều không biết là đã biết được dùng để lên kế hoạch dự phòng. Điều đã biết là không biết thì cần nghiên cứu thêm]]
Chắc sẽ cần có nghiên cứu là người nghiên cứu nghĩ gì về giá trị của nghiên cứu trong một giới hạn thời gian. 
Và giá trị đó tồn tại bao lâu thì đáng để bỏ công nghiên cứu.

Nếu thêm điều kiện là hệ ko thay đổi trong quá trình nghiên cứu, hoặc chỉ nghiên cứu những thứ ko thay đổi thì sao?
Việc nghiên cứu không kéo dài mãi mãi chỉ được quyết định bởi việc người nghiên cứu dừng lại, với bất kì lý do nào mà họ có thể nghĩ ra, hoặc không cần lý do nào cả.
Ở đây cũng đang giả định là sẽ nghiên cứu đến khi nào thấy thỏa mãn thì thôi
Hmm, sự thỏa mãn nằm ở bản thân câu hỏi, chứ ko ở số lượng câu hỏi còn lại. Nên việc giả sử là ko còn câu hỏi nào sẽ đảm bảo việc nghiên cứu sẽ dừng lại

Ban đầu ta có:
- $a_0$ điều mình không biết là mình không biết 
- $b_0$ điều mình biết là mình không biết 
- $c_0$ điều mình biết là mình biết

Sau một thời gian nghiên cứu, ta có:
- $a_1$ điều mình không biết là mình không biết 
- $b_1$ điều mình biết là mình không biết 
- $c_1$ điều mình biết là mình biết

Tất nhiên ta chỉ xét tới những thứ liên quan tới câu hỏi nghiên cứu.

Đặc điểm của việc nghiên cứu:
- Có thể có những điều mình không biết là mình không biết và mình biết là mình không biết mới mà không đến từ những điều cũ
- Có thể cho là xác suất xổ ra những điều mình không biết là mình không biết là như nhau, hoặc thậm chí là giảm đi, nhưng chắc là không thể tăng lên
- Một số điều mình không biết là mình không biết sẽ được chuyển thành:
	- Điều mình biết là mình không biết. Tức là một lượng $b_1$ là đến từ $a_0$
	- Điều mình biết là mình biết. Tức là một lượng $c_1$ là đến từ $a_0$
- Một số điều mình biết là mình không biết sẽ được chuyển thành điều mình biết là mình biết. Tức là một lượng $c_1$ là đến từ $b_0$
- Những điều mình biết là mình biết thì vẫn sẽ là điều mình biết là mình biết
- Nghiên cứu sẽ kết thúc trong sự thỏa mãn nếu không còn điều gì mình biết là mình không biết. Tức là khi $b_1$ = 0
- Các đơn vị của sự hiểu biết là số tự nhiên

[![](https://mermaid.ink/img/pako:eNo9js1uhDAMhF8F-dJLQLBJ-Mm1fYYeqlwMmB8tJKtA1G4R715IaU_fjDW2Z4PGtgQK4jjWprGmG3ulTRQtaO70DPIwg_18x8nToqIOp4W0CfnfkDZHiuELu2mDJ7OTdWB0EVkTWF--vnxzERj0bmxBrc4Tg5ncjKeF7WygYR1oJg3qkC116KdVgzb7sfZA82Ht_LfprO8HUKElA_9ocaW3EXuH8__UkWnJvVpvVlBChBugNvgCdRNVkhayKGQmclEKXjJ4gso4T3JZ5WlecS4rXsidwXd4myZ5XpVHWGZFJksu9h83iWaW?type=png)](https://mermaid.live/edit#pako:eNo9js1uhDAMhF8F-dJLQLBJ-Mm1fYYeqlwMmB8tJKtA1G4R715IaU_fjDW2Z4PGtgQK4jjWprGmG3ulTRQtaO70DPIwg_18x8nToqIOp4W0CfnfkDZHiuELu2mDJ7OTdWB0EVkTWF--vnxzERj0bmxBrc4Tg5ncjKeF7WygYR1oJg3qkC116KdVgzb7sfZA82Ht_LfprO8HUKElA_9ocaW3EXuH8__UkWnJvVpvVlBChBugNvgCdRNVkhayKGQmclEKXjJ4gso4T3JZ5WlecS4rXsidwXd4myZ5XpVHWGZFJksu9h83iWaW)
Tức là: 
- $a_0 = a_{a_1} + a_{b_1} + a_{c_1}$
- $b_0 = b_{b_1} + b_{c_1}$
- $a_1 = a_{a_1} + x ≤ a_0$
- $b_1 = a_{b_1} + b_{b_1} + y$
- $c_1 = a_{c_1} + b_{c_1} + c_0 ≥ c_0$ 
- $a_i, b_i, c_i \in\mathbb{N}$

Liệu rằng sau nhiều lần lặp thì $b_i$ sẽ tiến tới $0$?
$$
b_1 = a_{b_1} + b_{b_1} + y
$$
$$= (a_0 - a_{a_1} - a_{c_1}) + (b_0 - b_{c_1}) + y $$
$$= a_0 - a_{a_1} - (c_1 - b_{c_1}) + b_0 - b_{c_1} + y$$
$$= a_0 - a_{a_1} + b_0 - c_1 + y $$

Nếu $a_i$, $a_{a_i}$ và $y$ không đổi thì ta có $b_{i+1} = b_i - c_{i+1} + const$. Nếu $c_i$ luôn tăng thì chắc là $b_i$ sẽ tiến tới $0$.

Nguồn:: [[Tự ngẫm nghĩ, trải nghiệm]]
Khái niệm:: [[Sự không biết]], [[Thời gian, lịch]], [[Dự đoán]], [[Kiến thức]]