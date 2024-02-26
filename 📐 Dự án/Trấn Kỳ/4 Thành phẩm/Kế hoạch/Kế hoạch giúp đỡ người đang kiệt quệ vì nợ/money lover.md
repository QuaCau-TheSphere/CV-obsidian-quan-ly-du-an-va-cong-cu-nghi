---
share: true
created: 2023-09-05T16:17
updated: 2024-02-22T12:55
---
chưa kể với các giao dịch đặc biệt như bản thân e, 1 debt multi transaction, 1 debt tạo multi debt tạo multi payment,.... nó ko thể dùng app đơn giản để làm đc.
odoo ko link project với task management đc?

em có nói anh rồi đó, e fai research + rất cân nhắc mới nói anh option tự build thế này. đến khi vài bữa sử dụng xong anh sử dụng lại các apps trên thị trường là a thấy sự bất cập ngay
Ooker — 07/23/2023 2:27 PM
thì anh muốn biết là những cái này nó bất cập thế nào
Kendy — 07/23/2023 2:29 PM
hôm nay là ngày thứ 15th của tháng, tiền khám của con còn bao nhiêu? apps nào sẽ trả lời cho a câu hỏi thế này
ngày mai mở mắt dậy, a cần scheduled bao nhiêu tiền cho các task gì và các transaction gì? app nào có thể làm đc như vậy anh
key point là gì: các apps rất tuyệt trong việc collect datas ⇄ Capture Input
nhưng cái em cần, rất rất thực tế là Use datas ⇄ Dùng được Output
việc ghi chép hay hoạch định sẽ vô nghĩa nếu nó ko được query và lay on monitor
Kendy — 07/23/2023 2:34 PM
đây là điều mà e cố giải thích cho anh đấy, thị trường cho anh 1 loạt các apps rất tuyệt về input, nhưng ko có 1 solution nào cho 1 output đúng nghĩa có thể custom được
Ooker — 07/23/2023 2:34 PM
excel hay access ko đc à?
Kendy — 07/23/2023 2:34 PM
được chứ
Ooker — 07/23/2023 2:35 PM
vậy sao ko dùng?
Kendy — 07/23/2023 2:35 PM
vì nhu cầu của em quá advanced
e ko thể cứ dùng filter mỗi prompt query được
như google hay excel a sẽ chỉ dùng đc filter để query từ 1 loạt condition để ra kq. và nó rất bất tiện khi e có nhiều cái cần query
Ooker — 07/23/2023 2:36 PM
vậy thì access?
Kendy — 07/23/2023 2:36 PM
bỏ ngay, UI UX xấu
Ooker — 07/23/2023 2:37 PM
nhưng nó cho em kết quả?
Kendy — 07/23/2023 2:37 PM
vẫn có các alternative khác, e ko muốn dành thời gian cho 1 thứ có thể bị out date
Ooker — 07/23/2023 2:37 PM
ví dụ?
Kendy — 07/23/2023 2:38 PM
airtable
notion
taskade
clickup
Ooker — 07/23/2023 2:38 PM
tại sao mấy cái đó thay thế được access?
Kendy — 07/23/2023 2:39 PM
access ko có API a
hồi đó integrate cũng là 1 cái gì đó rất cân nhắc vì nó liên quan đến automation (Zapier, make)
nên e sẽ ưu tiên các thằng trên hơn là 1 ông lớn ko chịu update theo thời cuộc
Ooker — 07/23/2023 2:42 PM
sao em biết nó ko có api?
Kendy — 07/23/2023 2:43 PM
hồi đó ko có
API chỉ rộ lên gần đây thôi, chứ đợt trước đó e cân nhắc lắm, vì ông nào cũng giữ mình
Ooker — 07/23/2023 2:45 PM
lúc có airtable là đã có api lâu rồi mà?
Kendy — 07/23/2023 2:45 PM
e nhớ cách đây 4 năm nó mới bắt đầu rộ api trong airtable
cơ  bản hồi đó hạn chế lắm, có nhưng ít có apps nào triển khai nhiều
mà cái hồi đó em nhắm tới là automation, chính xác là no code automation
mà thằng access thì ko match vs cái nhu cầu trên của e
Kendy — 07/23/2023 2:48 PM
nghĩa là em ko muốn đóng vai trò nhập liệu, e chỉ muốn nó tự nhập và em chỉ xem số liệu → evaluate thôi
Ooker — 07/23/2023 2:52 PM
access ko làm đc à?
ko có cái nào là no code đâu. Nếu no code thì ko có tuỳ chỉnh nâng cao được rồi 
Kendy — 07/23/2023 2:53 PM
obsidian tát thẳng mặt đấy
bắt học 1 đống, query, js, metadata, yaml,css...
Ooker — 07/23/2023 2:54 PM
cái đó chưa có gọi là code đâu
anh vẫn tính nó là cấp độ no code
Kendy — 07/23/2023 2:55 PM
uh, rồi fibery tát em tiếp đây
nhưng cơ bản nó lại là 1 dịp để học, dù thú thực là giờ học trong áp lực ntn ko hoàn toàn là thứ em muốn cho lắm
Ooker — 07/23/2023 3:02 PM
nhưng mà quay lại access ko tự động phân loại được à?
Kendy — 07/23/2023 3:04 PM
e ko chuyên access, nhưng cái thiếu của nó hình như đợt đó nó ko tạo ra được nhiều output giống excel, nghĩa là nó chỉ filter, chứ ko create nhiều commit filter
nói nôm na nó giống như các view trong airtable/fibery, hay dataview query trong obsidian
Ooker — 07/23/2023 3:11 PM
commit filter là gì?
Kendy — 07/23/2023 3:13 PM
nnhưng dạng các MOC hay Homepage chứa nhiều quêry ấy
Ooker — 07/23/2023 3:14 PM
tức là như các MOC thì em ok hả?
Kendy — 07/23/2023 3:16 PM
như trên sau khi filter em muốn save thì ntn ?
Ooker — 07/23/2023 3:17 PM
nó tự save mà hả?
Kendy — 07/23/2023 3:17 PM
ý là nhiều filter khác nhau ấy