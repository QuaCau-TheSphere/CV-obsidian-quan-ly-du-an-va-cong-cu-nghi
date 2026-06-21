---
share: true
created: 2025-05-06T12:52
updated: 2026-06-16T20:54
description: Nó khác gì với những dự án tương tự khác? Nó chấp nhận những đánh đổi nào?
aliases:
  - Động lực
title: Lý do ra đời kho địa điểm để chọn nơi gặp mặt, và hệ quả của những lý do đó
---
## Lý do ra đời
[[Nơi gặp mặt trực tiếp|Kho địa điểm để chọn nơi gặp mặt]] đến từ mong muốn kết nối người cần tìm địa điểm với người có địa điểm. Dự án mong muốn một điều *duy nhất*: **Làm cho người cần tìm địa điểm gặp mặt có thể tìm được địa điểm phù hợp với nhu cầu riêng biệt của mình một cách nhanh nhất**.

Để làm được điều đó thì nó cần đáp ứng được các yêu cầu sau:
- Lấy người dùng làm trung tâm, chứ không phải xem họ như một loại tài nguyên để khai thác
- Giảm gánh nặng nhận thức trong việc cung cấp, quản lý, sử dụng và chia sẻ dữ liệu theo những nhu cầu đặc thù của họ. Điều này bao gồm:
	- Người dùng có thể tạo dữ liệu mới bằng ít lần bấm nhất có thể
	- Hệ thống phân loại địa điểm phải có khả năng chuẩn bị cho sự thay đổi cách phân loại một cách dễ dàng
	- Dữ liệu có sẵn trong kho thông tin của người dùng có thể được tải lên kho chung một cách thụ động và hàng loạt 
	- Người dùng có thể tự triển khai hệ thống của riêng họ cho nhóm người dùng của riêng họ
	- Chức năng mới có thể bổ sung dễ dàng 
- Đạt quy mô đủ để xác suất gặp thông tin lạc hậu thấp ở mức chấp nhận được

Do không tìm được chương trình nào thỏa mãn được những điều đó nên tôi bắt tay vào làm. Đây là một phần của dự án [[Mô tả dự án|Phá vỡ silo thông tin, nắm bắt nhu cầu các bên và sử dụng các nguồn tài nguyên cộng đồng hiệu quả]]

## Yêu cầu
### Lấy người dùng làm trung tâm, chứ không phải xem họ như một loại tài nguyên để trích xuất
Các SaaS tổng hợp địa điểm gặp mặt như Foody, do phải tính đến vấn đề lợi nhuận, sẽ có xu hướng:
- Chèn quảng cáo, popup làm rối mắt
- Ưu tiên giới thiệu các cửa hàng trả tiền cho họ, chứ không giới thiệu thứ phù hợp nhất cho người dùng

Đây không phải là nơi để làm điều đó. Có người sẽ lập luận rằng việc kiếm tiền không xấu. Nhưng vẫn có những cách khác để kiếm tiền mà không phải làm những điều đó, như yêu cầu người dùng trả tiền để được sử dụng. (Nói cho chặt chẽ thì việc đó cũng không ngăn cản nhà phát hành cài cắm những kỹ thuật để khai thác người dùng. Chỉ có những [[phần mềm tự do và mã nguồn mở]] mới giải quyết triệt để vấn đề này.) Việc yêu cầu người dùng trả tiền không đi ngược lại yêu cầu này.

### Giảm gánh nặng nhận thức trong việc cung cấp, quản lý, sử dụng và chia sẻ dữ liệu theo những nhu cầu đặc thù của họ
Trong quan sát của tôi, những dự án không vì lợi nhuận sau một thời gian đều lạc hậu do không có người quản lý kế thừa. Lý do là vì dữ liệu không được lưu trữ ở định dạng đơn giản, không dễ thao tác, khiến cho việc nhập liệu và chia sẻ dữ liệu trở nên khó khăn. 
giảm thiểu gánh nặng nhận thức trong việc nhập liệu và chia sẻ dữ liệu 

Để tránh điều này, hệ thống cần phải:
- Người dùng có thể tạo dữ liệu mới bằng ít lần bấm nhất có thể
- Hệ thống phân loại địa điểm phải có khả năng chuẩn bị cho sự thay đổi cách phân loại một cách dễ dàng
- Dữ liệu có sẵn trong kho thông tin của người dùng có thể được tải lên kho chung một cách thụ động và hàng loạt 
- Người dùng có thể tự triển khai hệ thống của riêng họ cho nhóm người dùng của riêng họ
- Chức năng mới có thể bổ sung dễ dàng 

#### Hệ thống phân loại địa điểm phải có khả năng chuẩn bị cho sự thay đổi cách phân loại một cách dễ dàng
Một người ở TPHCM sẽ có nhu cầu khác với một người ở Hà Nội: họ không quan tâm các địa điểm ở Hà Nội. Một người khuyết tật nhìn có nhu cầu khác với một người khuyết tật vận động: một người muốn đến nơi yên tĩnh, còn một người muốn đến nơi xe lăn đi lại dễ dàng được. Một người đi xe đạp có nhu cầu khác với một người đi xe buýt: người đi xe đạp muốn tìm quán gần nhà, còn người đi xe buýt muốn tìm quán gần các trạm xe.

Chưa kể, sự khác biệt đâu chỉ ở phía cầu, mà còn ở phía cung. Quán nước có những đặc điểm mà không gian làm việc chung, phòng họp riêng, địa điểm công cộng hay nhà riêng không có. Ngay cả trong quán nước cũng muôn hình vạn trạng: có quán cho dùng không gian miễn phí không cần gọi đồ uống, có quán thì cần gọi đồ uống. Có quán dùng ghế gây đau lưng, có quán dùng đèn gây đau mắt. Bất kể là tập trung vào đối tượng thụ hưởng nào thì những sự đa dạng này đã phải được tính đến.

Sẽ luôn luôn có những nhu cầu đặc biệt mà những người xây dựng nên hệ thống này cũng không tài nào đoán ra được. Một ngày nào đó các tỉnh thành được sắp xếp lại. Các bộ chỉ số như esg, sử dụng mã nguồn mở, cho mượn làm chỗ ngủ qua đêm. Cho nên, [[Việc phân loại không quan trọng bằng việc chuẩn bị cho sự thay đổi cách phân loại]]. [[Nhiệm vụ của kiến trúc sư không phải là liệt kê hết các tình huống sẽ xảy ra, mà là thiết kế để dù các tình huống không ngờ tới xảy ra thì vẫn hoạt động ổn định]]. 
Đòi hỏi chế độ dinh dưỡng đặc biệt 
Không phải là nơi gặp nói chuyện mà thư viện chẳng hạn
Thúc đẩy các phong trào xã hội. Gặp nhau là sự đối thoại. Nơi này thì cũng thế

Sẽ có người hỏi rằng: tại sao không tập trung vào một nhu cầu cụ thể nào đó và giải quyết nó cho thật tốt? Nhưng nhu cầu cụ thể đó là nhu cầu nào? Chẳng lẽ lại là "nhu cầu tìm không gian thảo luận ở các quận nội thành TP.HCM cho 30 người có máy chiếu và micro, với người tham gia là nam dị tính hợp giới trung niên trung lưu không khuyết tật không quan tâm đến rác thải nhựa đi xe máy"? Bạn thấy, ẩn dưới cái tên "nơi gặp mặt" là vô số các giả định của mình.Không bao hàm. Xác suất cao là dù tiêu đề bài chỉ phù hợp cho nhóm đa số chung chung là tổng hợp các nơi gặp mặt, thì cũng chỉ phục vụ nhu cầu của nhóm người cụ thể đó. Nếu bạn nằm trong nhóm đa số và nhu cầu của bạn là đơn giản thì cứ kiếm những bài tổng hợp địa điểm, hoặc lên Google Maps luôn cho rồi, không cần nơi này nữa. Còn nếu muốn sử dụng một tiêu đề chung, thì phải đảm bảo rằng nó đáp ứng được bất kì tổ hợp nhu cầu, đặc điểm nào.

Ngoài ra, việc đáp ứng thêm một nhu cầu nữa cũng đơn giản: chỉ cần thêm một *trường thông tin đầu vào* nữa thôi. 

Việc này là để đạt quy mô. Cụ thể thế nào đợi tới phần dưới sẽ giải thích.

Nên một khi đã bỏ công sức để làm một cái khác, thì sứ mạnh nó phải đáng. Nếu vẫn muốn giải quyết nhu cầu "tìm nơi gặp mặt trực tiếp", thì 

#### Người dùng có thể tạo dữ liệu mới bằng ít lần bấm nhất có thể
[[Để một hệ sinh thái hoạt động thực sự hiệu quả thì lượng năng lượng dành ra để nắm bắt tín hiệu của môi trường phải giảm tới mức gần như bằng 0]]

[[Việc giúp đỡ người đã giúp mình không đủ khẩn cấp hoặc nhiều cảm hứng bằng việc giải quyết vấn đề tiếp theo, hoặc đủ cảm hứng bằng việc cải tiến giải pháp hiện có]]
Không chỉ là biết những đồ vậtowr trong đó, mà còn là môi trường và các thiết chế xung quanh


Nếu dữ liệu đã có sẵn ở ngay trong hệ thống ghi chép của người dùng, họ có thể được tải lên kho chung một cách thụ động và hàng loạt.

Tự động hoá việc đẩy dữ liệu. Phải tính đến việc họ không có đầu óc để làm điều đó

Việc này là để đạt quy mô. Cụ thể thế nào đợi tới phần dưới sẽ giải thích.

#### Người dùng có thể tự triển khai hệ thống của riêng họ cho nhóm người dùng của riêng họ
Nó phải scale về mặt ý tưởng, nhưng phải phân tán về mặt dữ liệu
Đó là lý do các SaaS như Notion không phù hợp để làm nơi lưu trữ dữ liệu.
Ngay cả
Phải ở dạng dữ liệu đơn giản nhất 
sao chép dễ dàng, không khác gì sao chép tài liệu
Quay về với thứ luôn sẵn có, ai cũng biết xài
dễ fork 
Ở ngay trong kho dữ liệu của họ
Khi cần trung tâm hóa thì mới 

Ở ngay trong hệ thống dữ liệu
[[Việc đổi mới sáng tạo bắt đầu bằng việc mỗi người có thể tự mình điều khiển được máy tính, chứ không phải có thêm một sản phẩm no code hay AI nữa]]
[[Những người tự thấy mình ngu công nghệ đơn giản là vì họ không được trao quyền tự trị dữ liệu]]

Trung tâm hoá. Giảm gánh nặng cho người kế thừa
Trung tâm hoá dữ liệu. Nếu chỉ cho mình thôi thì đơn giản
Google Sheet, Google Maps vì nó không nằm trong các

Việc này là để đạt quy mô. Cụ thể thế nào đợi tới phần dưới sẽ giải thích.

#### Chức năng mới có thể bổ sung dễ dàng 
- Tự động cập nhật thông tin mới lên các nền tảng khác nhau
- Có thể truy vấn dữ liệu ở các nền tảng khác (VD: Discord) 
- Tự động tạo lịch Google Calendar
- Có cách trình bày khác

[[Đừng chạy theo tính năng, mà hãy xác định vấn đề cần ưu tiên giải quyết và nhanh chóng kiểm tra các giả thuyết]]
Phải đợi đến khi nhiều người chia sẻ thì mới bắt tay vào làm

Việc này là để đạt quy mô. Cụ thể thế nào đợi tới phần dưới sẽ giải thích.

## Phân tích ca
Đã hứa hẹn là sẽ giải thích tại sao cần đạt quy mô. 
 Để hiểu được vì sao cần những lý do này, có thể xem qua những dự án tương tự trước đây. Trước đây đã có một số dự án tổng hợp địa điểm như Foody, Google Maps, D.Map, nhưng chúng đều không thoả mãn đồng thời các yêu cầu trên. Tại sao lại có những yêu cầu này, và tại sao chương trình này chấp nhận đánh đổi những tiện lợi khác để đáp ứng các yêu cầu này?
Kho địa điểm này khác gì với những dự án tương tự khác?

### Foody
Chỉ tập trung vào ăn uống

### Google Maps
### Notion
[[Google Sheet hoặc Notion không phù hợp khi dữ liệu trở nên phức tạp]]

### Bản đồ tiếp cận D.Map
[D.Map](https://dmap.drdvietnam.org/#/mapx) là một bản đồ hướng đến việc giúp người khuyết tật tìm kiếm các công trình công cộng tiếp cận. Dự án được USAID và UNDP Việt Nam tài trợ, và có sự tham gia của báo chí, tổ chức sự kiện ở nhiều tỉnh thành. Vào thời điểm ra mắt, nó có cả app cho Android và iOS.

Kiến thức để tự vận hành một cơ sở dữ liệu thế này phức tạp hơn cho người không biết 

![[Pasted image 20250717114312.png]]
![[Pasted image 20250717114251.png]]
Dường như dự án đã ngừng hoạt động. Trong [trang giới thiệu dự án](https://www.drdvietnam.org/vi/du-an/ban-do-tiep-can-dmap/gioi-thieu/), lần cuối cùng cập nhật là 2021. Các app Andoird và iOS cũng đã bị gỡ xuống. Chức năng đăng ký không hoạt động được.


## Đạt quy mô
Hoặc không phải nơi chủ lưu. Đã có những dự án phục vụ cho một đối tượng cụ thể, nhưng vẫn chết yểu. Lấy ví dụ như D.Maps. Có tiền và có cả đội thu thập dữ liệu. Tức là dữ liệu không đủ để đối tượng thụ hưởng tiềm năng thấy là nó hữu ích. người nó đã giúp được không quay lại, còn người nó  giúp không quay lại giúp nó. [[Tỉ lệ quay lại là thứ quan trọng nhất trong tăng trưởng]]

[[Trong đa số mạng xã hội, 90% người dùng chỉ theo dõi ngầm, 9% đóng góp chút ít, chỉ 1% tạo ra đa số hành động]]. Google Maps đã làm cái nhu cầu có thể tăng trưởng được rồi, những cái khác bị bỏ đó

Động lực không phải là liệt kê tất cả các địa điểm đáp ứng một nhu cầu cụ thể, mà là không để việc thiếu thông tin xảy ra. Người cần nó không nhất thiết là người đóng góp. Người muốn đi xe đạp giải quyết dùm nhu cầu đóng góp thông tin cho người muốn có ghế tốt cho lưng. Sống bằng sự tiện
Để giảm khả năng chết yểu, để nó có thể ở bất kỳ nơi đâu
Kinh tế quy mô 
Không bỏ ai lại phía sau cũng có nghĩa là ai cũng biết được tới điều này. 
Kể cả không quan tâm đến việc lợi nhuận, nó cũng không phải như những quyển sách có thể nằm im chờ đợi người cần nó được. Vì các địa điểm cũng thường thay đổi, cần cập nhật


Nếu chỉ phục vụ cho một nhóm, thì ý tưởng không scale được, do 
Ý tưởng phải market fit. Vì có những nhà riêng chỉ mở ra cho một số lượng giới hạn

Như Google Maps vẫn cần người dùng phân loại dùm.

Động lực đóng góp:
- Người đã sử dụng địa điểm và muốn giới thiệu hoặc đánh giá nó, thường là cho người có chung nhu cầu. Những nhu cầu này thường phải đủ cứng nhắc, không thể linh hoạt bỏ qua được (là điểm trừ nếu không có)
- Người có địa điểm và muốn mọi người sử dụng nó (có thể là kinh doanh hoặc phi lợi nhuận)

Những người khgvông cần nơi này là, chấp nhận sự không hoàn hảo về thông tin, cảm thấy mình có thể linh hoạt

Với những nơi như này thì có lẽ động lực 1 là quan trọng nhất. (So sánh với Google Maps thì nó có xu hướng hỗ trợ tốt hơn cho người kinh doanh địa điểm.)
## Hệ quả của các yêu cầu trên
Giải pháp đáp ứng được tất cả các nhu cầu này là một [[Chia sẻ kho tri thức, tài nguyên của mình cho mọi người|hệ thống tri thức cộng đồng]] dưới hình thức là một [[Tài liệu động]] được lưu ở định dạng đơn giản nhất là văn bản thuần. 

| Yêu cầu                                                                                                        | Hệ quả                         |
| -------------------------------------------------------------------------------------------------------------- | ------------------------------ |
| Người dùng có thể tạo dữ liệu mới bằng ít lần bấm nhất có thể                                                  | Có bản web                     |
| Hệ thống phân loại địa điểm phải có khả năng chuẩn bị cho sự thay đổi cách phân loại một cách dễ dàng          | Dùng tệp trơn                  |
| Dữ liệu có sẵn trong kho thông tin của người dùng có thể được tải lên kho chung một cách thụ động và hàng loạt | Cung cấp API                   |
| Người dùng có thể tự triển khai hệ thống của riêng họ cho nhóm người dùng của riêng họ                         | Local first, Deno, Murmuration |
| Chức năng mới có thể bổ sung dễ dàng                                                                           | Cung cấp API, Deno             |

Về mặt kỹ thuật, nó được viết bằng TypeScript với môi trường thực thi là Deno.

- Đa số mọi người sẽ dùng Base? 
Gold view nâng cao là cần thiết không? Và nếu để vô thì ntn?

[One Venue - Địa điểm tổ chức sự kiện cho cộng đồng và hơn thế nữa](https://venue.evnx.community/)
