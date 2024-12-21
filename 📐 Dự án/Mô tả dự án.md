---
share: true
created: 2025-05-23T19:46
updated: 2025-09-27T11:38
title: "Từ việc phá vỡ silo thông tin và sử dụng hiệu quả các nguồn lực cộng đồng, đến hệ thống quản lý niềm tin và nền kinh tế không dùng tiền: vai trò của các phần mềm ghi chú động lưu dữ liệu tại máy người dùng và ở định dạng đơn giản"
description: Chỉ khi nào nhu cầu của các bên liên quan hiện ra ngay trong kho dữ liệu của nhóm mà không cần phải hỏi họ hay thậm chí là nhập liệu, thì lúc đó chúng ta mới có thể bắt đầu nói về một hệ sinh thái mà những thành viên mới – vốn rất thiếu nhân lực – vẫn có thể hưởng lợi.
aliases:
  - Mô tả dự án
  - Phá vỡ silo thông tin, nắm bắt nhu cầu các bên và sử dụng các nguồn tài nguyên cộng đồng hiệu quả
  - Vai trò của các phần mềm ghi chú động lưu dữ liệu tại máy người dùng và ở định dạng đơn giản
  - Từ việc phá vỡ silo thông tin và sử dụng hiệu quả các nguồn lực cộng đồng, đến hệ thống quản lý niềm tin và nền kinh tế không dùng tiền: vai trò của các phần mềm ghi chú động lưu dữ liệu tại máy người dùng và ở định dạng đơn giản
---
## Vấn đề: Sự hợp tác giữa các nhóm dự án nhỏ chưa đạt được hiệu quả tối ưu do thiếu nhân lực và công cụ phù hợp
Năm 2015, để giải quyết những thách thức phát triển lớn mà thế giới phải đối mặt, Liên Hợp Quốc đã đề ra **17 Mục tiêu Phát triển Bền vững (SDG)**. Đó là những mục tiêu mà các quốc gia cần hướng tới:

<iframe width="560" height="315" src="https://www.youtube.com/embed/M-iJM02m_Hg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

Mục tiêu cuối cùng trong 17 mục tiêu đó chính là về thúc đẩy sự hợp tác. Ở Việt Nam, mục tiêu số 17 này được chia thành [17 mục tiêu nhỏ hơn](https://data.vietnam.opendevelopmentmekong.net/vi/dataset/bao-cao-t-ng-h-p). Ta hãy xem một mục tiêu trong số chúng:

> **Mục tiêu 17.4:** Tăng cường quan hệ đối tác toàn cầu cho phát triển bền vững, kết hợp với quan hệ đối tác nhiều bên nhằm huy động và chia sẻ kiến thức, kinh nghiệm, công nghệ và tài chính để hỗ trợ đạt được các mục tiêu phát triển bền vững ở Việt Nam
>
> ![|200](https://vietnam.un.org/profiles/undg_country/themes/custom/undg/images/SDGs/vi/SDG-17.svg)

<sub>Xem thêm:: [Các nguồn tiền của LHQ cho những mục tiêu này đã được rót về Việt Nam như thế nào?](https://vietnam.un.org/vi/sdgs/17 "")</sub>

Mặc dù đã có nhiều nỗ lực thúc đẩy hệ sinh thái giữa các dự án (mà nỗ lực của LHQ là một ví dụ), theo quan sát và kinh nghiệm của tôi trong gần 10 năm tham gia vào các mạng lưới và cộng đồng phi lợi nhuận, hiệu quả của những nỗ lực này là chưa tối ưu. Không dễ để những kết nối mới chuyển thành lợi ích thiết thực. Một lý do cho chuyện này là việc mỗi người có những sở thích khác nhau, nhưng điều đó không giải thích đầy đủ tại sao những hợp tác nhỏ, có thể hành động không thể tiến hành. Tôi nghĩ lý do duy nhất khác là những người tham gia **quá bận** và không thể có cuộc trò chuyện sâu sắc và có ý nghĩa để tìm hiểu về nhau. Mặc dù thật lãng mạn khi nghĩ về một hệ sinh thái của con người hoạt động giống như cách loài sáo di cư, nhưng sự khác biệt là những con chim này biết ngay lập tức những gì người khác làm và những gì họ nên phản ứng. Chúng không phải dành nhiều năng lượng để biết và nói cho những con chim kế bên về điều chúng đang làm. Công việc của chúng cũng rất đơn giản.

Trở thành người sáng lập không phải là lựa chọn tốt để cân bằng giữa công việc và cuộc sống.[@altmanHowSucceedStartup2018] Có rất nhiều vấn đề cần học và nhiệm vụ cần thực hiện: nghiên cứu, lập kế hoạch chiến lược, tuyển dụng thành viên, tiếp thị, viết nội dung, gây quỹ, phát triển cộng đồng, đánh giá, tổ chức sự kiện, kết nối mạng lưới, v.v.[@TableContentsCommunity] Mặc dù bối cảnh của bài luận này là về việc phải vật lộn với những nhiệm vụ này nói chung, nhưng nó sẽ tập trung một chút vào kết nối mạng và hợp tác.
Nếu không ta thì ai
[[Mở ra một công ty giống như nhảy xuống vực và lắp được máy bay trong lúc rơi xuống]]
[[Hiểu biết không chỉ để mình làm một cái gì đó, mà còn để mình không làm một cái gì đó]]
[[Việc lập kế hoạch là để giảm những hệ quả không lường trước được và tạo ra được sự bền vững dài hạn]]. [[Nên ưu tiên làm những việc có thể sẽ khiến ta phải viết lại kế hoạch]]
Tuy nhiên, [[Ai cũng có một kế hoạch cho tới khi bị đấm vào mồm]]


Nhiệm vụ của con người, đặc biệt là khi họ muốn để lại tác động đến hệ thống, không đơn giản như vậy. Chúng ta phải ghi chú để giúp chúng ta lưu trữ và truy xuất thông tin. Do đó, hệ thống ghi chú đóng vai trò quan trọng đối với sự thành công của một dự án. Về cơ bản, nó phản ánh những gì họ tin tưởng, biết, lên kế hoạch, làm, có. Nếu chi phí nhận thức để biết những thông tin này giảm xuống mức không còn là yếu tố hạn chế để hợp tác, thì chúng ta có thể bắt đầu nói về *hoids*, *đối tượng giống người*. Khi nhu cầu của các bên liên quan được tiết lộ cho bạn trong quá trình lập kế hoạch chiến lược mà không cần bạn phải hỏi họ, thì chúng ta có thể bắt đầu nói về một hệ sinh thái có lợi cho các thành viên mới thiếu nguồn lực.

[[Để một hệ sinh thái hoạt động thực sự hiệu quả thì lượng năng lượng dành ra để nắm bắt tín hiệu của môi trường phải giảm tới mức gần như bằng 0]]. Bạn không cần phải hỏi mà vẫn biết nhu cầu của những thành viên xung quanh, và họ không cần phải hỏi cũng biết bạn đang cần gì. Mặc dù chúng ta luôn khuyến khích đặt câu hỏi, nhưng [[Một hệ sinh thái không hoạt động bằng cách đặt câu hỏi, mà bằng cách không cần hỏi cũng biết câu trả lời là gì]]. Và các công cụ quản lý dự án hiện nay không có chức năng cung cấp thông tin của bạn cho những bên khác và ngược lại. Chỉ khi nào nhu cầu của các bên liên quan hiện ra ngay trong lúc bạn hoạch định chiến lược mà không cần phải hỏi họ, thì lúc đó chúng ta mới có thể bắt đầu nói về một hệ sinh thái mà những thành viên mới – vốn rất thiếu nguồn lực – vẫn có thể hưởng lợi.
nói chung cũng thấy dự án này hấp dẫn. Nhưng nhìn lại thì anh thấy cũng đã có rất nhiều dự án hấp dẫn tương tự khác rồi. Mà nó cũng ngoặt ngoẹo ko phát triển được, kể cả khi nó được đầu tư lớn. 
chắc anh bắt đầu cảm thấy hoài nghi về những tham vọng như vậy. Anh nghĩ mấu chốt vẫn là phải cho người dùng khả năng tự thao tác dữ liệu theo ý họ muốn. Anh nhìn vào cái sứ mệnh thì ko thấy đề cập như vậy, còn nhìn vào lộ trình thì thấy coơ bản vẫn là đi code outsource
Nhưng anh biết cái này chỉ có gặp nhau thì mới có đầu óc để xử lý. Chứ tự làm thì ai cũng đều có công việc riêng nên ko có đầu óc để làm cái này


Being a founder is notoriously challenging for maintaining work-life balance [@altmanHowSucceedStartup2018]. Founders face a barrage of tasks: research, strategy planning, recruiting, marketing, fundraising, community development, event organization, and networking, among others [@TableContentsCommunity]. While this essay broadly addresses the overwhelming workload, it slightly focuses on networking and collaboration.

While there are many organizations with the mission of promoting ecosystems between projects (e.g. United Nations with the 17th goal of Sustainable Development Goals), my decade-long experience in non-profit networks reveals suboptimal effectiveness. New connections rarely translate into actionable outcomes. While differing interests play a role, the primary barrier is that participants are **too busy** to engage in deep, meaningful conversations. While it is romantic to imagine the human ecosystems behave like starling murmuration, the boids just instantly know what others do and what they should react. They don't spend that much energy on perception[@rizzmaster9999WhatYouMean2025] and depicting their behaviors. Their tasks are also very simple.

The tasks of a human, especially when they want to leave an impact to a system, aren't that simple. We have to take notes to help us storing and retrieving the information. Thus, note-taking systems are critical to a project’s success. They reflect what individuals believe, know, plan, do and have. If the cognitive cost to know these information reduces to a level where it no longer be a limiting factor to cooperate, then we can start talking about the *hoids*, the *human-oid objects*. Imagine a system where stakeholders’ needs are revealed during strategy planning without explicit inquiry—this is the foundation of an ecosystem that empowers under-resourced members.


Trong gần 10 năm mình tham gia vào các mạng lưới, cộng đồng phi lợi nhuận, mình cảm thấy mặc dù đã có rất rất nhiều tổ chức muốn thúc đẩy một hệ sinh thái giữa các dự án, nhưng lại chưa cảm thấy sự hiệu quả đạt đến mức tối ưu, mặc dù họ có nhiều nỗ lực và kiến thức. Mình phải thẳng thắn nói rằng mình thất vọng rất nhiều sau các sự kiện kết nối. Mọi người có biết đến nhau, nhưng sau buổi hôm đó cũng chỉ dừng lại ở đó, không đi xa hơn được. Mình nghĩ rằng nguyên nhân quan trọng nhất là các bên **quá nhiều việc**. Mọi người không thể đi đủ sâu để tìm hiểu về nhau. Vì để có thể đi sâu thì phải tốn rất rất nhiều thời gian, mà thường tổ chức phải phát triển đủ lớn để có một người chuyên về việc kết nối, chứ công việc thì rất rất nhiều. Nếu như các tổ chức kết nối cộng đồng chủ động phân loại và tổ chức các buổi gặp gỡ cho các dự án quy mô nhỏ tương tự nhau thì rất tốt, nhưng mình không thấy được điều đó.

[[Để một hệ sinh thái hoạt động thực sự hiệu quả thì lượng năng lượng dành ra để nắm bắt tín hiệu của môi trường phải giảm tới mức gần như bằng 0]]. Bạn không cần phải hỏi mà vẫn biết nhu cầu của những thành viên xung quanh, và họ không cần phải hỏi cũng biết bạn đang cần gì. Mặc dù chúng ta luôn khuyến khích đặt câu hỏi, nhưng [[Một hệ sinh thái không hoạt động bằng cách đặt câu hỏi, mà bằng cách không cần hỏi cũng biết câu trả lời là gì]]. Và các công cụ quản lý dự án hiện nay không có chức năng cung cấp thông tin của bạn cho những bên khác và ngược lại. Chỉ khi nào nhu cầu của các bên liên quan hiện ra ngay trong lúc bạn hoạch định chiến lược mà không cần phải hỏi họ, thì lúc đó chúng ta mới có thể bắt đầu nói về một hệ sinh thái mà những thành viên mới – vốn rất thiếu nguồn lực – vẫn có thể hưởng lợi.
nói chung cũng thấy dự án này hấp dẫn. Nhưng nhìn lại thì anh thấy cũng đã có rất nhiều dự án hấp dẫn tương tự khác rồi. Mà nó cũng ngoặt ngoẹo ko phát triển được, kể cả khi nó được đầu tư lớn. 
chắc anh bắt đầu cảm thấy hoài nghi về những tham vọng như vậy. Anh nghĩ mấu chốt vẫn là phải cho người dùng khả năng tự thao tác dữ liệu theo ý họ muốn. Anh nhìn vào cái sứ mệnh thì ko thấy đề cập như vậy, còn nhìn vào lộ trình thì thấy coơ bản vẫn là đi code outsource
Nhưng anh biết cái này chỉ có gặp nhau thì mới có đầu óc để xử lý. Chứ tự làm thì ai cũng đều có công việc riêng nên ko có đầu óc để làm cái này
## Hướng giải quyết: Phổ cập việc sử dụng các chương trình ghi chú động để xây dựng phần mềm cá nhân
Để tạo nên được một hệ sinh thái hiệu quả hơn, mỗi cá nhân và tổ chức tham gia vào nó cần có thể làm được những điều sau:
- [[Xây dựng hệ thống tri thức cộng đồng|Tìm đến tài nguyên tốt nhất cho nhu cầu của mình một cách nhanh nhất]]
- Đóng góp những hiểu biết sâu sắc, nhu cầu và các dữ liệu khác một cách **thụ động** vào kho tài nguyên chung. Sự đóng góp của họ chỉ là sản phẩm phụ của việc họ tập trung vào việc giải quyết nhu cầu của mình, hoặc ít nhất chỉ cần làm một lần là những lần sau có thể làm tự động
- [[Để có thể thiết kế một giải pháp một cách nhanh chóng và tự tin, ta cần được thử nghiệm ý tưởng mới và kiểm tra giả thiết ngay khi chúng vừa được nghĩ ra|Thử nghiệm ý tưởng mới và kiểm tra giả thiết ngay khi chúng vừa được nghĩ ra ]]

Điều này đòi hỏi các chương trình quản lý dự án có những khả năng sau:
- Trở thành một [[Giàn giáo nhận thức cần phải tuỳ biến với quá trình hiểu biết của người dùng|giàn giáo nhận thức tùy biến với hiểu biết của người dùng]], [[Công cụ nghĩ giúp ta có thể nghĩ tới những suy nghĩ khó nghĩ và bất khả nghĩ|giúp bạn nghĩ ra được những điều bình thường khó để ý tới, hoặc thậm chí là bất khả nghĩ]]. Ví dụ như:
	- [[Đồ thị mạng lưới giúp thấy được bức tranh tổng thể|cho bạn thấy được mạng lưới tổng thể trông như thế nào]],
	- Hiện được dữ liệu của các tổ chức khác ngay trong lúc lên kế hoạch mà không làm ngắt dòng suy nghĩ tới việc đang làm
	- [[Một văn bản không nên chỉ là thứ để truyền đạt thông tin hay hiểu biết một chiều và thụ động, mà còn nên trở thành một sân chơi cho người đọc khám phá|tạo một sân chơi cho người đọc khám phá thay vì chỉ là các văn bản truyền đạt thông tin một chiều và thụ động]]
- Cung cấp dữ liệu hoạt động cho các tổ chức khác một cách tức thời và an toàn
- Tận dụng được các chương trình chuyên môn sẵn có khác, nhưng không xảy ra tình trạng [[Việc lưu dữ liệu ở các công cụ khác nhau tạo thành các silo thông tin|dữ liệu bị giam ở nhiều công cụ khác nhau (silo thông tin)]]
- Nằm trong khả năng chi trả của các tổ chức nhỏ, không có nhiều tiền
    - Hiện được dữ liệu của các tổ chức khác ngay trong lúc lên kế hoạch mà không làm ngắt mạch suy nghĩ về việc đang làm
    - 
Tất cả những điều này có thể đạt được nếu dữ liệu nằm trên máy của người dùng và ở định dạng đơn giản. Vì như thế thì nó sẽ cực kì dễ mở rộng tính năng và không tạo thành các silo thông tin. Đây vốn là những thứ đã được sử dụng từ lâu trong ngành công nghệ thông tin, nhưng đã không được chú trọng giới thiệu.

Việc huấn luyện về dữ liệu xem ra không phổ biến ở các dự án phát triển cộng đồng. [SDG Digital Acceleration Agenda](https://www.sdg-digital.org/) không có lấy một bài nói về dữ liệu. Các chính phủ tuy có nhiều nỗ lực trong việc chuyển đổi số, đổi mới sáng tạo và cung cấp các API, như [SDG Digital Acceleration Agenda](https://www.sdg-digital.org/) hoặc Open SDG, nhưng để sử dụng được chúng vẫn cần tới lập trình viên chuyên môn, và chỉ phù hợp cho các tổ chức lớn, có nguồn tiền mạnh. Wikipedia thì không phải ai cũng tự tạo ra được một trang wiki như vậy.
Các mô hình như vậy có thể được khởi tạo

[[Việc đổi mới sáng tạo bắt đầu bằng việc mỗi người có thể tự mình điều khiển được máy tính, chứ không phải có thêm một sản phẩm no code hay AI nữa]]
[[Ta được hứa hẹn sẽ có những chiếc xe đạp cho tâm trí. Thay vào đó ta lại có máy bay|Khi ngành này mới ra đời, nhiều người đã mơ mộng về những chiếc xe đạp cho tâm trí. Nhưng vì nhiều lý do mà giờ đây xe đạp thì ít mà máy bay thì nhiều]]. Ta vẫn cần phải chế tạo thêm máy bay, nhưng nó dành cho những hệ thống dữ liệu đồ sộ và phức tạp. Còn với mục tiêu xây dựng một hệ sinh thái mà những thành viên mới – vốn rất thiếu nhân lực – vẫn có thể hưởng lợi, thì [[Việc đổi mới sáng tạo bắt đầu bằng việc mỗi người có thể tự mình điều khiển được máy tính, chứ không phải có thêm một sản phẩm no code hay AI nữa|nó cần bắt đầu bằng việc mỗi người có thể tự mình điều khiển được máy tính, chứ không phải có thêm một sản phẩm no code hay AI nữa]]. Việc lưu trữ dữ liệu tại máy người dùng và ở định dạng đơn giản sẽ giúp họ tạo ra được những chiếc xe đạp cho riêng tâm trí mình. 

Local traditionally means something close to your home, something familiar, intimate, and trusted by you, something unique to its location, and something community-oriented, as in supporting local businesses.

![](https://maggieappleton.com/_astro/hcs_11.BOJMPdw__1AdRwN.png)
[Home-Cooked Software and Barefoot Developers](https://maggieappleton.com/home-cooked-software)

- [[Xây dựng hệ thống tri thức cộng đồng]], giúp mọi người [[Làm sao để tìm được thứ cần tìm khi không biết từ khoá chính xác của nó|tìm được thứ cần tìm khi không biết từ khoá chính xác của nó]]

## Tầm nhìn: Xây dựng nền kinh tế không dùng tiền
Nếu sự hợp tác giữa các nhóm dự án nhỏ đạt được hiệu quả cao, thì ta sẽ xây dựng một mạng kết nối nhu cầu, nơi mà mọi người đáp ứng nhu cầu lẫn nhau. Họ có thể làm được như vậy vì tất cả mọi thành viên đều biết nhu cầu nào đang có nhiều người có nhất, ai đang có cùng nhu cầu với ai, v.v. Các nhu cầu của họ sẽ được thoả mãn bằng việc trao đổi nhu cầu cho nhau, hoặc cùng hợp tác để tạo giải pháp chung. Khi mạng lưới này lớn hơn nữa, thì nó sẽ hoạt động như một nền kinh tế. Bởi vì các nhu cầu trong đây được đáp ứng mà không cần dùng đến tiền làm trung gian, nên nó là một nền kinh tế không dùng tiền. Nó sẽ là sự kết hợp giữa nền kinh tế nền tảng (platform economy) và nền kinh tế quà tặng (gift economy). Nó cũng có liên hệ rất mật thiết tới [[Nền kinh tế chăm sóc]] (care economy).

Ý tưởng [nền kinh tế không dùng tiền](https://en.wikipedia.org/wiki/Non-monetary_economy "Non-monetary economy - Wikipedia") không phải là một khái niệm mới. Một ví dụ điển hình là [Hệ thống Trao đổi Cộng đồng (Community Exchange System)](https://www.community-exchange.org/home/ "Community Exchange System | Your Talents are Your Wealth") với hơn 1200 nhóm trao đổi ở 107 nước. Tuy nhiên chưa có ở Việt Nam. 

> [!info] Bài chi tiết: [Một đám mây chim sáo](https://quảcầu.cc/mot-dam-may-chim-sao/?utm_source=CV+%C2%BB+T%E1%BB%AB+vi%E1%BB%87c+l%C6%B0u+d%E1%BB%AF+li%E1%BB%87u+t%E1%BA%A1i+ch%E1%BB%97+%C4%91%E1%BA%BFn+s%E1%BB%B1+h%E1%BB%A3p+t%C3%A1c+%C4%91a+ph%C6%B0%C6%A1ng+v%C3%A0+li%C3%AAn+ng%C3%A0nh+v%C3%A0+n%E1%BB%81n+kinh+t%E1%BA%BF+kh%C3%B4ng+d%C3%B9ng+ti%E1%BB%81n&utm_medium=M%E1%BB%99t+%C4%91%C3%A1m+m%C3%A2y+chim+s%C3%A1o&utm_campaign=Giai+%C4%91o%E1%BA%A1n+2)

Xem thêm:: [[Xây dựng hệ thống tri thức cộng đồng|Hệ thống tri thức cộng đồng]]

## Kế hoạch
Chương trình này sẽ có 3 giai đoạn:

| Giai đoạn | Mục tiêu                                                                                                                                                                                                                  | Sản phẩm                                                                                        |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| 1         | Phổ cập việc xây dựng các [[Việc đổi mới sáng tạo bắt đầu bằng việc mỗi người có thể tự mình điều khiển được máy tính, chứ không phải có thêm một sản phẩm no code hay AI nữa\|phần mềm cá nhân]], [[Tài liệu động]] và [[khu vườn số]] | [[Các buổi đáp ứng nhu cầu học cách sử dụng công cụ và tư duy lập trình cho nhu cầu công việc]] |
| 2         | Liên thông dữ liệu giữa các nhóm dự án                                                                                                                                                                                    | [[Xây dựng hệ thống tri thức cộng đồng\|Hệ thống tri thức cộng đồng]]                           |
| 3         | Xây dựng nền kinh tế không dùng tiền                                                                                                                                                                                      | Mạng kết nối nhu cầu                                                                            |


# From breaking down information silos and utilizing community resources efficiently, to local-first dynamic note-taking software and belief manager

## Problem: Collaboration Between Small Projects is Hindered by Work Overload
Being a founder is notoriously challenging for maintaining work-life balance [@altmanHowSucceedStartup2018]. Founders face a barrage of tasks: research, strategy planning, recruiting, marketing, fundraising, community development, event organization, and networking, among others [@TableContentsCommunity]. While this essay broadly addresses the overwhelming workload, it slightly focuses on networking and collaboration.

While there are many organizations with the mission of promoting ecosystems between projects (e.g. United Nations with the 17th goal of Sustainable Development Goals), my decade-long experience in non-profit networks reveals suboptimal effectiveness. New connections rarely translate into actionable outcomes. While differing interests play a role, the primary barrier is that participants are **too busy** to engage in deep, meaningful conversations. While it is romantic to imagine the human ecosystems behave like starling murmuration, the boids just instantly know what others do and what they should react. They don't spend that much energy on perception[@rizzmaster9999WhatYouMean2025] and depicting their behaviors. Their tasks are also very simple.

The tasks of a human, especially when they want to leave an impact to a system, aren't that simple. We have to take notes to help us storing and retrieving the information. Thus, note-taking systems are critical to a project’s success. They reflect what individuals believe, know, plan, do and have. If the cognitive cost to know these information reduces to a level where it no longer be a limiting factor to cooperate, then we can start talking about the *hoids*, the *human-oid objects*. Imagine a system where stakeholders’ needs are revealed during strategy planning without explicit inquiry—this is the foundation of an ecosystem that empowers under-resourced members.

## Solution: Promoting Data Autonomy and Local-First, Dynamic Note-Taking Tools
To foster an effective ecosystem, individuals should be able to **passively** contribute insights and needs to communal databases and knowledge bases. Their contributions are a byproduct of their focus on solving their own needs, or at least doing it once and then doing it automatically the next time. To attract users and gain benefit from the Metcalfe's law, the platform should help allow users to test their new ideas and hypotheses as they arise with low effort[@victorLadderAbstraction2011]. That is essentially providing them a cognitive scaffolding adapting to the their understanding [@matuschakCognitiveScaffolding] and helping them think unthinkable thoughts [@HowCanWe].

This means that the note-taking system they use should have these capabilities:

- Construct, modify and share the data structures of their project with low cognitive cost
- Get to the best resources for their needs . E.g.: 
    - Query and display insights, needs, and other data from communal databases and knowledge bases during strategy planning without losing user's train of thought on the current task
- Construct a playground to explore information or enhance understanding instead of just one-way conveying texts[@victorExplorableExplanations] with low cognitive cost. E.g.: 
    - Portraiting the relationships of the stakeholders and the resources as network graph (statistic analysis) (see Fig. 1)
    - Portraiting the interactions of the stakeholders, their goals and constrains as vectors/particles in vector fields/landscapes (dynamic analysis). This one is likely to have similar characteristics with Deleuze and Guattari' concepts of *territory* and *cartography*, and thus probably inviting interesting discussions with humanities scholars
- Affordable price for personal or small organizations

![[Pasted image 20250306093520.png]]  
_Fig. 1: Example of a network graph._

![[Pasted image 20250315220749.png]]  
_Fig. 2: Example of dynamic stakeholder analysis [@ismailPersonalIntelligenceCollective2011]._


All of this can be achieved if the author of the software embraces the data autonomy of their users.[@LocalfirstSoftwareYou2019] It should allow the users to use any tool of their will to modify the data directly (i.e. need not to export the data), in order to prevent information silos. In essence the data is on the user's machine and usually in simple formats.

When computers were first born, many people dreamed of bicycles for the mind. But for various reasons now there are fewer bicycles and more airplanes.[@littDynamicDocumentsPersonal2024] We still need to build more airplanes for massive and complex data systems. But for the goal of building an ecosystem where new members – who are very short on human resources – can still benefit, supporting barefoot developers to build homecooked software should be the way[@appletonHomecookedSoftwareBarefoot].

## Vision: A belief manager to better attend and reduce belief dissonances and facilitate perspective-taking
The success of a project should be defined in terms of what behavior of its customers, users or beneficiaries have been changed, not what the it delivers [@seidenOutcomesOutputWhy2019]. As beliefs are commonly believed to be the cause of actions [@schwitzgebelBelief2024], saying that the project wants to change its beneficiaries' behaviors implies that the belief systems of its members and its beneficiaries are conflicting/in dissonance. As human has a tendency to reduce dissonance, and as doing so will increase the successful chance of the project, they will need a system to help them manage their and others' beliefs, to help store and query supportive or challenging arguments. Essentially, a belief manager. This belief manager should be a module of the aforementioned system, side by side with other well-known modules like task manager or file manager.

As knowledge is commonly treated as justified true beliefs[@schwitzgebelBelief2024], a belief manager should be similar to a knowledge manager, especially on the technical aspect, and one can be used as a substitution for the other. They should be intertwined and can be regarded as submodules of an argument manager as well. However, there are differences between them that one may want to keep in mind to optimize the usage:

| Characteristics     | Knowledge manager                                                                                              | Belief manager                                                                                                   |
| ------------------- | -------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| Main goals          | • Aid users to understand the world and choose optimized actions\n• Uncover new ideas and insights\n | • Aid users to challenge their beliefs and choose least-harmful actions\n• Uncover biases and errors\n |
| Main schema         | Academic disciplines                                                                                           | Belief holder, Argument components (Toulmin model), Universal needs (NVC)                                        |
| Helpful disciplines | Ontology, augmented cognition                                                                                  | Epistemology, axiology, ethics, anthropology, sociology, belief dynamics                                         |

Let's talk about the dynamics of beliefs. The NB model, a recent model on belief dynamics, premises that people only seek to reduce dissonances when they are *felt* [@dalegeNetworksBeliefsIntegrative2024]. I assume that a belief manager will act as a catalyst to increase attention in all types of dissonance. The model doesn't account for the conflict strategies (or modes) people can use when facing a conflict.[@thomasThomaskilmannConflictMode2008] It makes sense to say that each strategy will dictate a set of parameters of the social beliefs and the topology of the external belief network. As the belief manager provides an alternative medium to expressing and perceive social beliefs, it will also provide a new set of parameter sets.

I assume the collaboration strategy involves perspective-taking of all sides. As Daniel Dennett recommends his readers that before they are permitted to say so much as a word of rebuttal or criticism, they should:
> attempt to re-express your target's position so clearly, vividly, and fairly that your target says, "Thanks, I wish I’d thought of putting it that way." [@dennettIntuitionPumpsOther2013] 

The belief manager should help the users to reduce the cost to do so.

## References 



# Từ việc phá vỡ silo thông tin và sử dụng hiệu quả các nguồn lực cộng đồng, đến phần mềm ghi chú động ưu tiên địa phương và quản lý niềm tin
## Vấn đề: Sự hợp tác giữa các dự án nhỏ bị cản trở bởi quá tải công việc
Trở thành người sáng lập không phải là lựa chọn tốt để cân bằng giữa công việc và cuộc sống.[@altmanHowSucceedStartup2018] Có rất nhiều vấn đề cần học và nhiệm vụ cần thực hiện: nghiên cứu, lập kế hoạch chiến lược, tuyển dụng thành viên, tiếp thị, viết nội dung, gây quỹ, phát triển cộng đồng, đánh giá, tổ chức sự kiện, kết nối mạng lưới, v.v.[@TableContentsCommunity] Mặc dù bối cảnh của bài luận này là về việc phải vật lộn với những nhiệm vụ này nói chung, nhưng nó sẽ tập trung một chút vào kết nối mạng và hợp tác.

Mặc dù có nhiều tổ chức có sứ mệnh thúc đẩy hệ sinh thái giữa các dự án (ví dụ: Liên hợp quốc với mục tiêu thứ 17 là Mục tiêu phát triển bền vững), theo quan sát và kinh nghiệm của tôi trong gần 10 năm tham gia vào các mạng lưới và cộng đồng phi lợi nhuận, hiệu quả không phải là tối ưu. Những kết nối mới mà chúng ta có khó có thể chuyển thành lợi ích thiết thực. Có những sở thích khác nhau chắc chắn là một lý do, nhưng điều đó không giải thích đầy đủ tại sao những hợp tác nhỏ, có thể hành động không thể tiến hành. Tôi nghĩ lý do duy nhất khác là những người tham gia **quá bận** và không thể có cuộc trò chuyện sâu sắc và có ý nghĩa để tìm hiểu về nhau. Mặc dù thật lãng mạn khi tưởng tượng hệ sinh thái của con người hoạt động giống như tiếng thì thầm của loài sáo, nhưng những chú chim chỉ biết ngay lập tức những gì người khác làm và những gì họ nên phản ứng. Chúng không dành nhiều năng lượng cho nhận thức[@rizzmaster9999WhatYouMean2025] và mô tả hành vi của chúng. Nhiệm vụ của chúng cũng rất đơn giản.

Nhiệm vụ của con người, đặc biệt là khi họ muốn để lại tác động đến hệ thống, không đơn giản như vậy. Chúng ta phải ghi chú để giúp chúng ta lưu trữ và truy xuất thông tin. Do đó, hệ thống ghi chú đóng vai trò quan trọng đối với sự thành công của một dự án. Về cơ bản, nó phản ánh những gì họ tin tưởng, biết, lên kế hoạch, làm, có. Nếu chi phí nhận thức để biết những thông tin này giảm xuống mức không còn là yếu tố hạn chế để hợp tác, thì chúng ta có thể bắt đầu nói về *hoids*, *đối tượng giống người*. Khi nhu cầu của các bên liên quan được tiết lộ cho bạn trong quá trình lập kế hoạch chiến lược mà không cần bạn phải hỏi họ, thì chúng ta có thể bắt đầu nói về một hệ sinh thái có lợi cho các thành viên mới thiếu nguồn lực.

## Giải pháp: Thúc đẩy tính tự chủ của dữ liệu và các chương trình ghi chú động, ưu tiên cục bộ
Để tạo ra một hệ sinh thái hiệu quả hơn, mỗi tác nhân cần có khả năng **thụ động** đóng góp thông tin chi tiết, nhu cầu và dữ liệu khác vào cơ sở dữ liệu cộng đồng và cơ sở tri thức. Những đóng góp của họ là sản phẩm phụ của việc tập trung vào việc giải quyết nhu cầu của riêng họ, hoặc ít nhất là thực hiện một lần và sau đó tự động thực hiện vào lần tiếp theo. Để thu hút người dùng và hưởng lợi từ luật Metcalfe, nền tảng này sẽ giúp người dùng kiểm tra các ý tưởng và giả thuyết mới của họ khi chúng nảy sinh với ít nỗ lực[@victorLadderAbstraction2011]. Về cơ bản, điều đó cung cấp cho họ một giàn giáo nhận thức thích ứng với sự hiểu biết của họ [@matuschakCognitiveScaffolding] và giúp họ nghĩ ra những suy nghĩ không thể nghĩ tới [@HowCanWe].

Điều này có nghĩa là hệ thống ghi chú mà họ sử dụng phải có các khả năng sau:

- Xây dựng, sửa đổi và chia sẻ cấu trúc dữ liệu của dự án của họ với chi phí nhận thức thấp
- Tiếp cận các nguồn lực tốt nhất cho nhu cầu của họ. Ví dụ:
- Truy vấn và hiển thị thông tin chi tiết, nhu cầu và dữ liệu khác từ cơ sở dữ liệu cộng đồng và cơ sở kiến ​​thức trong quá trình lập kế hoạch chiến lược mà không làm mất dòng suy nghĩ của người dùng về nhiệm vụ hiện tại
- Xây dựng một sân chơi để khám phá thông tin hoặc tăng cường sự hiểu biết thay vì chỉ truyền đạt văn bản một chiều[@victorExplorableExplanations] với chi phí nhận thức thấp. Ví dụ:
- Mô tả mối quan hệ của các bên liên quan và các nguồn lực dưới dạng biểu đồ mạng (phân tích thống kê) (xem Hình 1)
- Mô tả tương tác của các bên liên quan, mục tiêu và ràng buộc của họ dưới dạng vectơ/hạt trong trường vectơ/cảnh quan (phân tích động). Phần mềm này có thể có những đặc điểm tương tự với các khái niệm về *lãnh thổ* và *bản đồ* của Deleuze và Guattari, và do đó có thể sẽ thu hút những cuộc thảo luận thú vị với các học giả nhân văn
- Giá cả phải chăng cho các tổ chức cá nhân hoặc nhỏ

![[Đã dán hình ảnh 20250306093520.png]]
Hình 1:

![[Đã dán hình ảnh 20250315220749.png]]
Hình 2: [@ismailPersonalIntelligenceCollective2011]

Tất cả những điều này có thể đạt được nếu tác giả của phần mềm chấp nhận quyền tự chủ dữ liệu của người dùng.[@LocalfirstSoftwareYou2019] Phần mềm này sẽ cho phép người dùng sử dụng bất kỳ công cụ nào theo ý muốn của họ để sửa đổi dữ liệu trực tiếp (tức là không cần xuất dữ liệu), nhằm ngăn chặn tình trạng thông tin bị cô lập. Về bản chất, dữ liệu nằm trên máy của người dùng và thường ở định dạng đơn giản.

Khi máy tính lần đầu tiên ra đời, nhiều người đã mơ về những chiếc xe đạp cho trí óc. Nhưng vì nhiều lý do, giờ đây xe đạp ít đi và máy bay nhiều hơn.[@littDynamicDocumentsPersonal2024] Chúng ta vẫn cần chế tạo nhiều máy bay hơn cho các hệ thống dữ liệu lớn và phức tạp. Nhưng để đạt được mục tiêu xây dựng một hệ sinh thái nơi các thành viên mới - những người rất thiếu nguồn nhân lực - vẫn có thể hưởng lợi, thì việc hỗ trợ các nhà phát triển chân đất xây dựng phần mềm tự chế nên là cách[@appletonHomecookedSoftwareBarefoot].

## Tầm nhìn: Một nhà quản lý niềm tin để tham dự tốt hơn và giảm sự bất hòa niềm tin và tạo điều kiện cho việc tiếp thu quan điểm
Thành công của một dự án nên được xác định theo hành vi nào của khách hàng, người dùng hoặc người thụ hưởng đã thay đổi, chứ không phải những gì nó mang lại [@seidenOutcomesOutputWhy2019]. Vì niềm tin thường được cho là nguyên nhân của hành động [@schwitzgebelBelief2024], nên nói rằng dự án muốn thay đổi hành vi của người thụ hưởng ngụ ý rằng hệ thống niềm tin của các thành viên và người thụ hưởng đang xung đột/bất hòa. Vì con người có xu hướng giảm sự bất hòa và làm như vậy sẽ tăng cơ hội thành công của dự án, nên họ sẽ cần một hệ thống giúp họ quản lý niềm tin của mình và của người khác, giúp lưu trữ và truy vấn các lập luận ủng hộ hoặc thách thức. Về cơ bản, đó là một trình quản lý niềm tin. Trình quản lý niềm tin này phải là một mô-đun của hệ thống đã đề cập ở trên, song song với các mô-đun nổi tiếng khác như trình quản lý tác vụ hoặc trình quản lý tệp.

Vì kiến ​​thức thường được coi là niềm tin đúng đắn hợp lý[@schwitzgebelBelief2024], nên trình quản lý niềm tin phải tương tự như trình quản lý kiến ​​thức, đặc biệt là về mặt kỹ thuật và có thể sử dụng để thay thế cho trình quản lý kia. Chúng cũng có thể được coi là các mô-đun phụ của trình quản lý lập luận. Tuy nhiên, có những điểm khác biệt giữa chúng mà người ta có thể muốn ghi nhớ để tối ưu hóa việc sử dụng:

| Đặc điểm              | Người quản lý kiến ​​thức                                                                                   | Người quản lý niềm tin                                                                                                       |
| --------------------- | ----------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| Mục tiêu chính        | • Hỗ trợ người dùng hiểu thế giới và lựa chọn hành động tối ưu\n• Khám phá những ý tưởng và hiểu biết mới\n | • Hỗ trợ người dùng thách thức niềm tin của họ và lựa chọn hành động ít gây hại nhất\n• Khám phá những thành kiến ​​và lỗi\n |
| Sơ đồ chính           | Các ngành học thuật                                                                                         | Người nắm giữ niềm tin, Các thành phần lập luận (mô hình Toulmin), Nhu cầu phổ quát (NVC)                                    |
| Các ngành học hữu ích | Bản thể học, nhận thức tăng cường                                                                           | Nhận thức luận, giá trị luận, đạo đức, nhân chủng học, xã hội học, động lực niềm tin                                         |

Hãy nói về động lực của niềm tin. Mô hình NB, một mô hình gần đây về động lực niềm tin, tiền đề cho rằng mọi người chỉ tìm cách giảm bớt sự bất hòa khi chúng được *cảm nhận* [@dalegeNetworksBeliefsIntegrative2024]. Tôi cho rằng một người quản lý niềm tin sẽ đóng vai trò là chất xúc tác để tăng sự chú ý trong mọi loại bất hòa. Mô hình không tính đến các chiến lược xung đột (hoặc chế độ) mà mọi người có thể sử dụng khi đối mặt với xung đột.[@thomasThomassilmannConflictMode2008] Có lý khi nói rằng mỗi chiến lược sẽ quyết định một tập hợp các tham số của niềm tin xã hội và cấu trúc của mạng lưới niềm tin bên ngoài. Vì người quản lý niềm tin cung cấp một phương tiện thay thế để thể hiện và nhận thức các niềm tin xã hội, nên nó cũng sẽ cung cấp một tập hợp các tham số mới.

Tôi cho rằng chiến lược hợp tác liên quan đến việc xem xét quan điểm của mọi phía. Như Daniel Dennett khuyên độc giả của mình rằng trước khi được phép nói bất kỳ lời phản bác hoặc chỉ trích nào, họ nên:
> cố gắng diễn đạt lại vị trí của mục tiêu một cách rõ ràng, sống động và công bằng để mục tiêu của bạn nói rằng, "Cảm ơn, tôi ước mình đã nghĩ đến việc diễn đạt theo cách đó." [@dennettIntuitionPumpsOther2013]

Người quản lý niềm tin nên giúp người dùng giảm chi phí để làm như vậy.

## Tài liệu tham khảo

Khái niệm:: 

Nguồn:: 