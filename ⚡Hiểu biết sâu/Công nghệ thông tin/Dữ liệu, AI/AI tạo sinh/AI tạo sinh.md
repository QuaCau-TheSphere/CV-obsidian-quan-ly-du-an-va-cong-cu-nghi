---
share: true
created: 2024-11-26T17:35
title: Các câu hỏi và đối thoại về AI tạo sinh
aliases:
  - LLM
updated: 2026-05-27T13:30
---
## LLM có năng lực cao?

| Lập luận đánh giá cao năng lực của LLM                                  | Phản hồi                                                                                                                                                                                                                                   |
| ----------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Giúp đối thoại với tác giả                                              | [[LLM không được xem là tác giả tri thức mới, vì nó không có khả năng chịu trách nhiệm đối với các tuyên bố tri thức]], [[LLM không tất định mà tạo sinh kết quả mỗi lần mỗi khác dù với cùng một câu nhập]], [[LLM không đọc được hàm ý]] |
| Giúp tập trung vào sự sáng tạo hơn, bỏ qua các công việc lặp đi lặp lại | [[LLM không tất định mà tạo sinh kết quả mỗi lần mỗi khác dù với cùng một câu nhập]]. [[Nếu phải điều chỉnh lại kết quả của LLM thì tự làm luôn còn nhanh hơn]]                                                                           |
| Giúp code nhanh                                                         | [[Để LLM có thể tham gia vào việc lập trình được, nó cần phải làm được cả việc kiểm định và sửa lỗi code, chứ không phải chỉ mỗi sinh code]]                                                                                               |

Một số phản hồi chung khác:
- Muốn nói gì thì cứ lấy benchmark ra nói chuyện. [[Chatbot LLM nào cũng dẫn sai thông tin khoảng 60%. Riêng Grok là tới 96%]]
- [[Đằng sau vẻ ngoài tự trị của LLM là những người làm công việc dán nhãn và kiểm duyệt, vô hình và bếp bênh]]
- [[Khi một AI thực sự hữu ích, ta không còn gọi nó là AI]]
- [[Tiềm năng để kiếm tiền từ AI đến từ mảng học có giám sát nhiều hơn ở mảng tạo sinh]]
- [[Sự không phân biệt giữa AI học có giám sát và AI tạo sinh mà chỉ gộp chung vào AI làm nhiều người nhầm lẫn giữa điểm mạnh và điểm yếu của AI]]. [[Nên dùng khái niệm LLM cho loại AI đa số người dùng biết đến]]
- [[Nếu LLM thay thế được nhân viên, thì nó cũng thay thế được quản lý]]

- [INTRODUCTION](https://thebullshitmachines.com/)
- [Cartography of generative AI](https://cartography-of-generative-ai.net/)

### LLM giúp tóm tắt nhanh chóng?
- Tại sao không đi kiếm những bài tóm tắt do người viết?
- Giả sử như không có ai viết tóm tắt thì có bằng chứng nào cho thấy là nó tóm tắt ở mức chấp nhận được không? Liệu nó chỉ tóm tắt tốt với các bài đơn giản? Các bài kiểm tra năng lực tóm tắt của nó cho kết quả như thế nào? 

Xem thêm các ghi chú về chủ đề [[Tóm tắt, mục lục]]:
```dataview
LIST 
FROM [[Tóm tắt, mục lục]]
WHERE file.name != this.file.name
```
![AIs Predict Research Results Without Doing Research - YouTube](https://youtu.be/Qgrl3JSWWDE)
## LLM có năng lực thấp?
Khi một người đưa ra nhận định rằng LLM có năng lực thấp thì họ thường nhận những phản hồi gì?

| Phản hồi mà người đánh giá thấp năng lực LLM nhận được                                                                              | Phản hồi về phản hồi                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ----------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Thấy nó dở là vì không chịu bỏ tiền để dùng cái xịn                                                                                 | Những lập luận ở mục [[#LLM có năng lực cao?]] không loại trừ những mô hình tốn tiền. Ngoài ra, lập luận rằng do chưa trải nghiệm nên không có tư cách nhận xét cũng không khác gì lập luận của những người tin vào thuyết trái đất phẳng                                                                                                                                                                                                                                                   |
| Thấy nó dở là vì không biết cách làm chủ                                                                                            | Bản chất việc làm chủ là viết prompt. Những lập luận ở mục [[#LLM có năng lực cao?]] không loại trừ việc viết prompt tốt. Cơ bản, dù dùng prompt gì đi nữa thì [[Nếu phải điều chỉnh lại kết quả của LLM thì tự làm luôn còn nhanh hơn]]                                                                                                                                                                                                                                                    |
| Công nghệ hôm nay là thứ tệ nhất trong tương lai. Nó sẽ phát triển theo hàm lũy thừa. Mà [[Chúng ta không quen thuộc với luỹ thừa]] | [[Có bằng chứng cho thấy việc có thêm dữ liệu và phần cứng để tính toán cũng không làm tăng khả năng nhận diện]]                                                                                                                                                                                                                                                                                                                                                                            |
| LLM không thay thế được con người, nhưng người biết xài LLM sẽ thay thế họ                                                          | Quay về lại [[#LLM có năng lực cao?\|năng lực của LLM]]. Ngoài ra có những loại máy tốt hơn nhưng cái dở hơn vẫn chưa bị thay thế                                                                                                                                                                                                                                                                                                                                                           |
| Đừng kỳ vọng LLM cao quá rồi dẫn tới thái cực cực đoan khác là coi thường nó                                                        | Vậy có thể tôi đã sai khi cho rằng việc dùng nó là kém hiệu quả trong tất cả các công việc. Nhưng với loại công việc tôi đang làm thì tôi vẫn chưa thấy nó hiệu quả, vì nó đòi hỏi độ chính xác *trong tất cả các khâu*. [[Nếu phải điều chỉnh lại kết quả của LLM thì tự làm luôn còn nhanh hơn]]. Thứ làm tôi khó chịu với LLM là vì nó được tiếp thị như là một giải pháp hoàn hảo có thể giải quyết được mọi nhu cầu thực tế. [[Khi một AI thực sự hữu ích, ta không còn gọi nó là AI]] |
| Giá trị của nó nằm ở sự gợi ra những suy nghĩ của riêng mình                                                                        |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |

## Quan sát về đa số các bài trình bày giới thiệu về LLM 
- Chỉ tóm tắt cuốn sách nổi tiếng và đã nhiều người đã tóm tắt rồi
- Xem việc tạo ra được câu trả lời với số lượng từ lớn là chất lượng
- Không nói đến giọng văn, cá tính cá nhân của tác giả
- Chỉ giới thiệu các dịch vụ LLM mà không nói về bản chất của LLM
- Khi giới thiệu các dịch vụ LLM thì không đánh giá chất lượng sản phẩm mà chỉ nói tính năng
- Chỉ đưa ra ví dụ chung chung, không đưa ra ví dụ mà chính họ làm mà đạt được 

Cần:
- Đánh giá chất lượng, so sánh với khi không dùng LLM
- Trả lời vào các lập luận ở trên
- Trả lời trực tiếp vào các framework cho prompt, các mô hình sử dụng con người trong quy trình vận hành

## Động lực của các công ty
```dataview
LIST
FROM "⚡Hiểu biết sâu/Công nghệ thông tin/Dữ liệu, AI/AI tạo sinh/Động cơ của công ty"
WHERE file.name != this.file.name
```

[[Ở thời điểm hiện tại không có bất cứ ai có thể đủ tiềm lực và khối lượng dữ liệu vừa có bản quyền vừa đủ khổng lồ để tự huấn luyện]]
https://www.createdontscrape.com
## Nơi thảo luận
![[Pasted image 20250604230721.png]]

## Mục lục
```dataview
LIST rows.file.link
FROM "⚡Hiểu biết sâu/Công nghệ thông tin/Dữ liệu, AI/Mô hình ngôn ngữ lớn"
group by split(file.folder, "/" )[4]
WHERE ile.name != this.file.name
```
---

|              | Mô tả vấn đề                                                                        | Giải pháp                                    |
| ------------ | ----------------------------------------------------------------------------------- | -------------------------------------------- |
| Chuẩn hoá    | Dữ liệu không được phân loại                                                        | Dán nhãn thủ công                            |
| Hệ thống hoá | [[Silo thông tin khiến cho những thao tác tự động hoá đơn giản không thể làm được]] |                                              |
| Số hoá       | Phần mềm                                                                            |                                              |
| Tự động hoá  |                                                                                     | [[Tự động hoá các công việc lặp đi lặp lại]] |


Chưa nói gì về chuẩn hoá, hệ thống hoá, số hoá, tự động hoá

## Những thứ chưa trả lời được
### Học lập trình
tut thì dài và ko trả lời câu hỏi của mình đc :v, và tìm content chất lượng cũng khó, hỏi AI thì nó trả lời đúng cái b đang cần, kiến thức nó cũng có nhiều do nó cũng học dữ liệu từ tut trên mạng chứ đâu

Bẻ nhỏ công việc 
Dùng LLM để tạo ra multiple soltion path và tổng hợp lại cái tốt nhất
Cái văn phong. Mà hành văn theo đúng văn phong của mình thì nó có vẻ chấn động với mình hơn. Cài cắm các tình tiết

B1: hiểu hồn thơ

Các bài test về quy trình này
có đáng để 
những cái đó vẫn là cái người ta đã làm rồi

sop 
mục tiêu của việc viết bài là gì
nó break down ra rồi thì làm gì tiếp với nó

giúp phân tích pattern của mình
tìm được các blindspot của mình
capture sự nhảy cóc giống topic modelling -> nhân văn số
[[❓Nếu như tất cả LLM đều là nhận dạng pattern, thì dùng topic modelling sẽ nhanh hơn]]

LLM chỉ phát huy tác dụng khi có một bối cảnh đủ lớn

có một ngàn kiểu tóm tắt khác nhau
- Tóm tắt lược đi thông tin
- Tms tắt giữ tính nguyên bản. dài hơn thành súc tích hơn
- khái quát hoá khái niệm
- visualize 


(1) thực hiện từng bước rồi mới chuyển sang bước tiếp theo
(2) input , process (task đang làm), ouput chất lượng - review đánh giá xem đạt chất lương chưa và sửa lại nếu cần thiết
toàn bộ cuộc nói chuyện chỉ theo một framework thôi
[Is artificial general intelligence here? \| University of California](https://www.universityofcalifornia.edu/news/artificial-general-intelligence-here?utm_source=fiat-lux&utm_medium=internal-email&utm_campaign=article-general&utm_content=text)

Trong trường hợp kiểm tra thông tin, mình nghĩ có thể xem AI như Wiki vậy: tiện dụng khi tham khảo, nhưng ko dùng làm trích dẫn được. Nếu AI bảo là có trang A gì đó nói thông tin X, thì điều bạn cần là dẫn ra trang A chứ ko phải là kết quả AI. Nếu AI bảo là đã xem qua các trang A, B, C và không thấy có thông tin X, thì điều bạn cần là dẫn ra các trang A, B, C và nói là bạn không thấy có thông tin X trong đó

[AI Safety Vietnam](https://www.antoan.ai)
![Sự vô đạo đức của AI (aka những kẻ đứng sau nó) trong Truyền Thông Marketing - YouTube](https://www.youtube.com/watch?v=MFO6ev83Uy4)
