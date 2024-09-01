---
share: true
created: 2023-05-26T14:51
updated: 2024-09-01T17:10
---
Lĩnh vực:: [[Hệ thống thông tin]]
Nhu cầu công nghệ:: [[Hệ thống quản lý kiến thức]]
Nhu cầu công nghệ:: [[Viết plugin]]

## Liệu các phần mềm hoạch định tài nguyên doanh nghiệp (ERP) có giải quyết được vấn đề đảo thông tin này không?
Các phần mềm hoạch định tài nguyên doanh nghiệp ([enterprise resource planning](https://en.wikipedia.org/wiki/Enterprise_resource_planning "Enterprise resource planning - Wikipedia"), ERP) sẽ có những mô đun chuyên về quản lý tài chính. Tuy nhiên, với Kendy điều đó là không đủ. Đây là những yêu cầu cho một phần mềm quản trị mà Kendy cần. Thiếu một trong 3 đều không được:
- [ ] Có khả năng tuỳ chỉnh theo đúng luồng làm việc, suy nghĩ của mình
- [ ] Không phải dành quá nhiều thời gian để xây dựng hệ thống đó
- [ ] Chi phí thấp

### Các ERP được dựng sẵn không đủ khả năng đáp ứng những luồng làm việc và suy nghĩ đặc thù
![[Dùng ERP dựng sẵn.png]]

Có hai loại công việc: [[Công việc khai phá và công việc khai thác]]. Công việc khai phá (exploration) là những công việc mà nếu ta chưa làm xong thì cũng không chắc lắm kết quả trông như thế nào, còn công việc khai thác (exploitation) là những công việc chưa làm cũng biết chính xác kết quả trông như thế nào. Công việc khai phá sử dụng dạng tư duy phi tuyến, và hợp với kiểu dữ liệu phi cấu trúc. Còn công việc khai thác sử dụng dạng tư duy tuyến tính, và hợp với kiểu dữ liệu có cấu trúc.

Bởi vì [[Công việc khai phá chính là quản lý kiến thức]], cho nên [[Quản lý công việc và quản lý kiến thức không thể tách rời nhau]]. Đây là thứ mà các ERP dựng sẵn này không đáp ứng được. Những người viết ra chúng tất nhiên cũng đã có những nghiên cứu khách hàng và cũng thiết kế nhiều lựa chọn để người dùng có thể tuỳ chỉnh ở một mức độ nào đó. Nếu không đáp ứng được nhu cầu đa số thì không thể nào giảm được chi phí sản phẩm cả. Tuy nhiên, sự dự đoán của các tác giả ấy về quy trình nghiệp vụ của một số khách hàng doanh nghiệp điển hình mà họ có thể nghĩ ra được cũng không thể nào bắt kịp được luồng làm việc và suy nghĩ thực tế của các cá nhân cụ thể. Mỗi người có một cách phân loại thông tin, yêu cầu về sự ngăn nắp thông tin, khối lượng thông tin và loại thông tin phải thường xuyên xử lý cũng khác nhau. Mỗi một luồng tư duy khác nhau có thể sẽ đòi hỏi những cách quản lý thông tin rất khác nhau. Và với một số người, cái mô đun quản lý kiến thức của chúng không gì chỉ làm cho có. Thà không dùng nó chứ dùng thì càng bực hơn. Các ERP này không đáp ứng nổi vai trò trở thành một [[Giàn giáo nhận thức cần phải tuỳ biến với quá trình hiểu biết của người dùng|một giàn giáo nhận thức]] của họ. 

Hơn nữa, ngay cả khi chỉ xét đến mô đun về quản lý giao dịch của các ERP dựng sẵn, thì cũng giống như các phần mềm quản lý tài chính cá nhân được nói ở trên, dữ liệu được lưu trong đây vẫn bị cô lập trong ERP đó. 

Chưa kể, cái gọi là chi phí thấp ở đây chỉ là miễn phí trong một số ngày, một số tính năng hoặc đầu người. Nhưng thường thì có trả tiền để dùng thì những tính năng đó cũng không hướng đến việc trở thành một nơi để quản lý tất cả mọi thứ.

### Tự xây dựng ERP tốn rất nhiều thời gian
![[Tự xây dựng ERP.png]]
Có các phần mềm ERP mã nguồn mở như Odoo, và bạn có thể tự mình bổ sung thêm các tính năng để đảm bảo là nó sẽ theo đúng luồng làm việc, suy nghĩ của bạn, nhưng điều đó đòi hỏi bạn phải có kiến thức cũng như thời gian để lập trình. Điều này sẽ rất khó với người chưa từng lập trình bao giờ mà còn rất nhiều thứ khác phải làm. Nếu không ai code giùm cho thì Kendy thà chịu đau khổ chứ không thể nào tự học được, bởi vì [[Chi phí chuyển đổi giữa lập trình và nghiên cứu là lớn]]. Chưa kể, theo định luật Hofstadter: [[Mọi thứ sẽ luôn tốn thời gian hơn bạn nghĩ|Mọi thứ sẽ luôn tốn thời gian hơn bạn nghĩ, kể cả khi bạn đã tính đến định luật Hofstadter]].

Cũng không phải là Kendy không muốn học để tự xây dựng hệ thống cho mình, mà là kiếm lòi mắt cũng không thấy được người thực sự muốn chia sẻ. Theo trải nghiệm của Kendy khi hỏi trên các diễn đàn của Odoo, thì người trả lời thực ra chỉ muốn báo giá chứ không thực sự muốn chỉ. Vì dù là mã nguồn mở thì họ cũng xác định tập khách hàng của mình là doanh nghiệp.

### Chi phí thuê lập trình viên để tự xây dựng ERP là quá cao
![[Thuê lập trình viên.png]]
Nếu thuê lập trình viên thì thực sự không có tiền để thuê, và nếu có tiền thì cũng rất lệ thuộc vào họ. Việc xây dựng hệ thống là việc sửa mỗi lần một chút. Kendy không có đủ tiền cho quá nhiều lần điều chỉnh lắt nhắt như vậy.

## Hiện nay đã có nhiều phần mềm ERP low code. Liệu có giải quyết được vấn đề này?
Khái niệm low code được sinh ra dành cho những phần mềm không phải code nhiều nhưng người dùng vẫn có thể tạo ra được sản phẩm của mình. Airtable, Google Sheet, Excel là những ví dụ của low code.

Fibery cũng là một sản phẩm low code. Nó *hứa hẹn* giải quyết được 2 vấn đề sau:
- Một nơi vừa để quản lý công việc vừa quản lý kiến thức
- Có thể xây dựng hệ thống quản lý cho mình ngay mà không cần dùng tới code trong thời gian đầu

Đây là lý do Kendy đã chọn Fibery, vì những cái rất cần trước mắt thì nó có thể đáp ứng. 

Đối với những người làm lập trình, cái gọi là low code chỉ là bình mới rượu cũ mà thôi. Nó từng có những cái tên như WYSIWYG, UI, rồi giờ thì nó được gọi là low code. Nó không được lòng người làm kỹ thuật cho lắm.

[Một người bình luận](https://discord.com/channels/686053708261228577/700466324840775831/1072284305893638214):
> Chúng được sinh ra chỉ để cho mục đích tiếp thị và khiến những người quản lý không có hiểu biết về kỹ thuật ra những quyết định tồi. 

[Một người khác](https://softwareengineering.stackexchange.com/questions/320227/what-is-low-code/320228#comment679977_320228):
> Theo kinh nghiệm của tôi, những công cụ này được mấy người dùng doanh nghiệp dùng cho đến khi họ tự dồn mình vào chân tường. Rồi sau đó lập trình viên được gọi đến để gỡ một mớ rác lỗi hỗn độn khổng lồ đầy những phức tạp không cần thiết.

Thật ra, việc đánh đổi giữa sự đơn giản (simplicity) và khả năng xử lý những yêu cầu phức tạp (complexity) là một trong [[Việc lập trình ít trực giác hơn nhưng lại có nhiều đánh đổi hơn các ngành khác]]. Nhưng thứ [[Lập trình viên khó chịu với hệ thống low code vì nó được tiếp thị như là một giải pháp hoàn hảo có thể giải quyết được mọi nhu cầu thực tế|Lập trình viên khó chịu với hệ thống low code không phải vì nó ưu tiên sự tiện lợi và chi phí thấp cho người dùng, mà vì nó được tiếp thị như là một giải pháp hoàn hảo có thể giải quyết được mọi nhu cầu thực tế]]. Mà [[Chấp nhận giải pháp mì ăn liền là đang mang nợ vào người]].

Phải nói là điểm bán hàng độc nhất (unique selling point) của Fibery là sự đặt trọng tâm vào ý tưởng [[Quản lý công việc và quản lý kiến thức không thể tách rời nhau]] mà những ERP khác không làm được. Ngay tại trang chủ, Fibery đã tự giới thiệu bản thân là:
> If you've outgrown Jira, Notion, Airtable, and ClickUp — and are ready to replace them

Tức là nó hiểu rất rõ nhược điểm của đối thủ. Nhưng rốt cuộc thì **nó vẫn là một sản phẩm dựng sẵn** không khác gì các đối thủ của nó. Việc Kendy sử dụng nó là vì từ đầu Kendy đã ở trong tình trạng phải xây dựng hệ thống quản lý càng sớm càng tốt, và không có ai có thể hỗ trợ giải đáp các vấn đề về lập trình. Không thể nói nó là giải pháp tạm đủ, mà nó là sự thoả hiệp đỡ tệ hại nhất trong hoàn cảnh hiện tại. Con đường này là con đường bất đắc dĩ lắm mới phải đi. 

Xem thêm:: [[Nhược điểm của Obsidian và Fibery]]
