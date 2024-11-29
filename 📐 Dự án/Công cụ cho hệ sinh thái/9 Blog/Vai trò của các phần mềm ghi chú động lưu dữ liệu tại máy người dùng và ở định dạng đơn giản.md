---
share: true
created: 2023-07-26T10:33
updated: 2024-11-10T22:30
title: "Phá vỡ silo thông tin, nắm bắt nhu cầu các bên và sử dụng các nguồn tài nguyên cộng đồng hiệu quả: vai trò của các phần mềm ghi chú động lưu dữ liệu tại máy người dùng và ở định dạng đơn giản"
slug: phần-mềm-ghi-chú-động
description: Chỉ khi nào nhu cầu của các bên liên quan hiện ra ngay trong kho dữ liệu của nhóm mà không cần phải hỏi họ hay thậm chí là nhập liệu, thì lúc đó chúng ta mới có thể bắt đầu nói về một hệ sinh thái mà những thành viên mới – vốn rất thiếu nhân lực – vẫn có thể hưởng lợi.
alias:
  - Từ việc lưu dữ liệu tại máy người dùng đến sự hợp tác đa phương và liên ngành và nền kinh tế không dùng tiền
  - Phá vỡ silo thông tin, nắm bắt nhu cầu các bên và sử dụng các nguồn tài nguyên cộng đồng hiệu quả
  - Vai trò của các phần mềm ghi chú động lưu dữ liệu tại máy người dùng và ở định dạng đơn giản"
---
# Phá vỡ silo thông tin, nắm bắt nhu cầu các bên và sử dụng các nguồn tài nguyên cộng đồng hiệu quả: vai trò của các phần mềm ghi chú động lưu dữ liệu tại máy người dùng và ở định dạng đơn giản
## Vấn đề: Sự hợp tác giữa các nhóm dự án nhỏ chưa đạt được hiệu quả tối ưu do thiếu nhân lực và công cụ phù hợp
Năm 2015, để giải quyết những thách thức phát triển lớn mà thế giới phải đối mặt, Liên Hợp Quốc đã đề ra **17 Mục tiêu Phát triển Bền vững (SDG)**. Đó là những mục tiêu mà các quốc gia cần hướng tới:

<iframe width="560" height="315" src="https://www.youtube.com/embed/M-iJM02m_Hg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

Mục tiêu cuối cùng trong 17 mục tiêu đó chính là về thúc đẩy sự hợp tác. Ở Việt Nam, mục tiêu số 17 này được chia thành [17 mục tiêu nhỏ hơn](https://data.vietnam.opendevelopmentmekong.net/vi/dataset/bao-cao-t-ng-h-p). Ta hãy xem một mục tiêu trong số chúng:

> **Mục tiêu 17.4:** Tăng cường quan hệ đối tác toàn cầu cho phát triển bền vững, kết hợp với quan hệ đối tác nhiều bên nhằm huy động và chia sẻ kiến thức, kinh nghiệm, công nghệ và tài chính để hỗ trợ đạt được các mục tiêu phát triển bền vững ở Việt Nam
>
> ![|200](https://vietnam.un.org/profiles/undg_country/themes/custom/undg/images/SDGs/vi/SDG-17.svg)

<sub>Xem thêm:: [Các nguồn tiền của LHQ cho những mục tiêu này đã được rót về Việt Nam như thế nào?](https://vietnam.un.org/vi/sdgs/17 "")</sub>

Trong gần 10 năm mình tham gia vào các mạng lưới, cộng đồng phi lợi nhuận, mình cảm thấy mặc dù đã có rất rất nhiều tổ chức muốn thúc đẩy một hệ sinh thái giữa các dự án, nhưng lại chưa cảm thấy sự hiệu quả đạt đến mức tối ưu, mặc dù họ có nhiều nỗ lực và kiến thức. Mình phải thẳng thắn nói rằng mình thất vọng rất nhiều sau các sự kiện kết nối. Mọi người có biết đến nhau, nhưng sau buổi hôm đó cũng chỉ dừng lại ở đó, không đi xa hơn được. Mình nghĩ rằng nguyên nhân quan trọng nhất là các bên **quá nhiều việc**. Mọi người không thể đi đủ sâu để tìm hiểu về nhau. Vì để có thể đi sâu thì phải tốn rất rất nhiều thời gian, mà thường tổ chức phải phát triển đủ lớn để có một người chuyên về việc kết nối, chứ công việc thì rất rất nhiều. Nếu như các tổ chức kết nối cộng đồng chủ động phân loại và tổ chức các buổi gặp gỡ cho các dự án quy mô nhỏ tương tự nhau thì rất tốt, nhưng mình không thấy được điều đó.

[[Để một hệ sinh thái hoạt động thực sự hiệu quả thì lượng năng lượng dành ra để nắm bắt tín hiệu của môi trường phải giảm tới mức gần như bằng 0]]. Bạn không cần phải hỏi mà vẫn biết nhu cầu của những thành viên xung quanh, và họ không cần phải hỏi cũng biết bạn đang cần gì. Mặc dù chúng ta luôn khuyến khích đặt câu hỏi, nhưng [[Một hệ sinh thái không hoạt động bằng cách đặt câu hỏi, mà bằng cách không cần hỏi cũng biết câu trả lời là gì]]. Và các công cụ quản lý dự án hiện nay không có chức năng cung cấp thông tin của bạn cho những bên khác và ngược lại. Chỉ khi nào nhu cầu của các bên liên quan hiện ra ngay trong lúc bạn hoạch định chiến lược mà không cần phải hỏi họ, thì lúc đó chúng ta mới có thể bắt đầu nói về một hệ sinh thái mà những thành viên mới – vốn rất thiếu nguồn lực – vẫn có thể hưởng lợi.

## Hướng giải quyết: Phổ cập việc sử dụng các chương trình ghi chú động để xây dựng phần mềm cá nhân
Để tạo nên được một hệ sinh thái hiệu quả hơn, mỗi cá nhân và tổ chức tham gia vào nó cần có thể làm được những điều sau:
- [[Xây dựng hệ thống tri thức cộng đồng|Tìm đến tài nguyên tốt nhất cho nhu cầu của mình một cách nhanh nhất]]
- Đóng góp những hiểu biết sâu sắc, nhu cầu và các dữ liệu khác một cách **thụ động** vào kho tài nguyên chung. Sự đóng góp của họ chỉ là sản phẩm phụ của việc họ tập trung vào việc giải quyết nhu cầu của mình, hoặc ít nhất chỉ cần làm một lần là những lần sau có thể làm tự động
- [[Để có thể thiết kế một giải pháp một cách nhanh chóng và tự tin, ta cần được thử nghiệm ý tưởng mới và kiểm tra giả thiết ngay khi chúng vừa được nghĩ ra|Thử nghiệm ý tưởng mới và kiểm tra giả thiết ngay khi chúng vừa được nghĩ ra ]]

Điều này đòi hỏi các chương trình quản lý dự án có những khả năng sau:
- Trở thành một [[Giàn giáo nhận thức cần phải tuỳ biến với quá trình hiểu biết của người dùng|giàn giáo nhận thức tùy biến với hiểu biết của người dùng]], là những việc xe đạp cho tâm trí, giúp bạn nghĩ ra được những điều bình thường khó để ý tới, hoặc thậm chí là bất khả nghĩ. Ví dụ như [[Đồ thị mạng lưới giúp thấy được bức tranh tổng thể|cho bạn thấy được bức tranh tổng thể bằng đồ thị mạng lưới]], hoặc [[Một văn bản không nên chỉ là thứ để truyền đạt thông tin hay hiểu biết một chiều và thụ động, mà còn nên trở thành một sân chơi cho người đọc khám phá|tạo một sân chơi cho người đọc khám phá, chứ không chỉ là một văn bản truyền đạt thông tin một chiều và thụ động]]
- Tận dụng được các chương trình chuyên môn cho từng mục đích, nhưng không xảy ra tình trạng [[Việc lưu dữ liệu ở các công cụ khác nhau tạo thành các silo thông tin|dữ liệu bị giam ở nhiều công cụ khác nhau (silo thông tin)]]
- Nằm trong khả năng chi trả của các tổ chức nhỏ, không có nhiều tiền

Tất cả những điều này có thể đạt được nếu dữ liệu nằm trên máy của người dùng và ở định dạng đơn giản. Vì như thế thì nó sẽ cực kì dễ mở rộng tính năng và không tạo thành các silo thông tin. Đây vốn là những thứ cơ bản trong ngành công nghệ thông tin, nhưng đã không được chú trọng giảng dạy. [[Ta được hứa hẹn sẽ có những chiếc xe đạp cho tâm trí. Thay vào đó ta lại có máy bay|Khi ngành này mới ra đời, nhiều người đã mơ mộng về những chiếc xe đạp cho tâm trí. Nhưng vì nhiều lý do mà giờ đây xe đạp thì ít mà máy bay thì nhiều]]. Ta vẫn cần phải chế tạo thêm máy bay, nhưng nó dành cho những hệ thống dữ liệu đồ sộ và phức tạp. Còn với mục tiêu xây dựng một hệ sinh thái mà những thành viên mới – vốn rất thiếu nhân lực – vẫn có thể hưởng lợi, thì [[Việc đổi mới sáng tạo bắt đầu bằng việc mỗi người tạo được phần mềm cá nhân, chứ không phải có thêm một sản phẩm no code hay AI nữa|nó cần bắt đầu bằng việc mỗi người có thể tạo được phần mềm cá nhân, chứ không phải có thêm một sản phẩm no code hay AI nữa]]. Việc lưu trữ dữ liệu tại máy người dùng và ở định dạng đơn giản sẽ giúp họ tạo ra được những chiếc xe đạp cho riêng tâm trí mình. 

## Tầm nhìn: Xây dựng nền kinh tế không dùng tiền
Nếu sự hợp tác giữa các nhóm dự án nhỏ đạt được hiệu quả cao, thì ta sẽ xây dựng một mạng kết nối nhu cầu, nơi mà mọi người đáp ứng nhu cầu lẫn nhau. Họ có thể làm được như vậy vì tất cả mọi thành viên đều biết nhu cầu nào đang có nhiều người có nhất, ai đang có cùng nhu cầu với ai, v.v. Các nhu cầu của họ sẽ được thoả mãn bằng việc trao đổi nhu cầu cho nhau, hoặc cùng hợp tác để tạo giải pháp chung. Khi mạng lưới này lớn hơn nữa, thì nó sẽ hoạt động như một nền kinh tế. Bởi vì các nhu cầu trong đây được đáp ứng mà không cần dùng đến tiền làm trung gian, nên nó là một nền kinh tế không dùng tiền. Nó sẽ là sự kết hợp giữa nền kinh tế nền tảng (platform economy) và nền kinh tế quà tặng (gift economy). Nó cũng có liên hệ rất mật thiết tới [[Nền kinh tế chăm sóc]] (care economy).

Ý tưởng [nền kinh tế không dùng tiền](https://en.wikipedia.org/wiki/Non-monetary_economy "Non-monetary economy - Wikipedia") không phải là một khái niệm mới. Một ví dụ điển hình là [Hệ thống Trao đổi Cộng đồng (Community Exchange System)](https://www.community-exchange.org/home/ "Community Exchange System | Your Talents are Your Wealth") với hơn 1200 nhóm trao đổi ở 107 nước. Tuy nhiên chưa có ở Việt Nam. 

> [!info] Bài chi tiết: [Một đám mây chim sáo](https://quảcầu.cc/mot-dam-may-chim-sao/?utm_source=CV+%C2%BB+T%E1%BB%AB+vi%E1%BB%87c+l%C6%B0u+d%E1%BB%AF+li%E1%BB%87u+t%E1%BA%A1i+ch%E1%BB%97+%C4%91%E1%BA%BFn+s%E1%BB%B1+h%E1%BB%A3p+t%C3%A1c+%C4%91a+ph%C6%B0%C6%A1ng+v%C3%A0+li%C3%AAn+ng%C3%A0nh+v%C3%A0+n%E1%BB%81n+kinh+t%E1%BA%BF+kh%C3%B4ng+d%C3%B9ng+ti%E1%BB%81n&utm_medium=M%E1%BB%99t+%C4%91%C3%A1m+m%C3%A2y+chim+s%C3%A1o&utm_campaign=Giai+%C4%91o%E1%BA%A1n+2)

Xem thêm:: [[Xây dựng hệ thống tri thức cộng đồng|Hệ thống tri thức cộng đồng]]
## Tóm lại
| Giai đoạn | Sản phẩm             | Mục tiêu                               |
| --------- | -------------------- | -------------------------------------- |
| 1         | Kho này              | Tạo thói quen sử dụng dữ liệu ở máy    |
| 2         | Knowledge graph      | Liên thông dữ liệu giữa các nhóm dự án |
| 3         | Mạng kết nối nhu cầu | Xây dựng nền kinh tế không dùng tiền   |

## Phụ lục: Thách thức: [[Có sự đánh đổi giữa sự tự do sử dụng dữ liệu và sự tiện lợi trong việc hợp tác]]
Trong ngành khoa học máy tính, [[Việc hợp tác làm việc thời gian thực với dữ liệu được lưu ở máy cá nhân là một bài toán khó]]. Điều đó khiến cho [[Có sự đánh đổi giữa sự tự do sử dụng dữ liệu và sự tiện lợi trong việc hợp tác|chúng ta phải đánh đổi giữa sự tự do sử dụng dữ liệu và sự tiện lợi trong việc hợp tác]]. [[Việc trung tâm hoá việc lưu trữ dữ liệu trên máy chủ sẽ lấy đi autonomy và agency của người dùng cuối]]. Xu thế hiện nay là [[Các nhóm làm việc qua mạng ngày càng nhiều]], đến nỗi khi được hỏi về app đa số mọi người sẽ chỉ nhắc đến những cloud app như Google Drive hay Notion. Nghĩa là chúng ta đã hy sinh quá nhiều sự tự chủ dữ liệu cho sự tiện lợi đến nỗi chúng ta không còn biết gì về một loạt các phần mềm khác mạnh mẽ hơn. Việc đánh mất sự tự chủ đó là lý do khiến cho chúng ta luôn cảm thấy mình mù công nghệ, và chấp nhận rằng mình sẽ chẳng hiểu gì về công nghệ cả. Đây chính là một sự bất lực học được. [[Người không học về lập trình thấy việc lập trình như làm phép thuật]], trong khi [[Lập trình viên biết lập trình chủ yếu là nhờ biết google]]. Bạn cũng biết google vậy, vậy tại sao vẫn thấy nó giống như làm phép thuật? Chúng tôi nghĩ một phần lớn là vì đã từ lâu bạn không còn cảm giác mình có sự tự chủ với dữ liệu của mình rồi. Khi bạn đã có lại được cảm giác đó, bạn sẽ thấy mình tự tin hơn về công nghệ.
[[Excel là người bạn tuổi thơ tuyệt vời, nhưng là kẻ thù của tuổi dậy thì]], [[WordPress giúp việc tạo web dễ dàng nhất, chứ không phải là thứ tạo web hiệu quả nhất]]

[Browse Companies](https://www.partnerbase.com/app/search/?utmCampaign=Partnerbase+Welcome+Email&utmMedium=email&hsmi=214590202&utmContent=214590202&utmSource=hs_automation&country=Vietnam&sort=partnerbase_score|desc&limit=200)