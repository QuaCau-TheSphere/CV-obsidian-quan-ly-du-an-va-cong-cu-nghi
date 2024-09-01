---
share: true
created: 2024-08-16T13:20
updated: 2024-09-02T13:21
---
Khái niệm:: 
umm, mình nghĩ nó là công cụ được thiết kế tốt, mature, elegant, phù hợp để tổ chức các ghi chú văn bản thuần (bao gồm cả các công thức toán học với latex, các dạng biểu diễn dựa trên văn bản, yml, xml, excaldraw files,...) 

nhược điểm là chèn ảnh, dặc biệt là local files khá vất vả với nó (trừ khi upload lên host nào đó rồi dán link vào; ngược lại thì chèn trực tiếp Data URI vào sẽ làm tăng chóng mặt kích thước tệp html.
mình nghĩ nó trung gian giữa singlenote/google keep, workflowy với mấy cái như Obisidan, Notion, etc..

Nó không quá đơn giản đến mức gây overloaded nếu xài singlenote, keeps tầm 100 notes trở lên; nhưng cũng không tích hợp hay ôm đồm quá nhiều thứ như Obsidian, Notion... 

Nó đơn giản là hyper notes với internal hyperlink, transclusion,... nhẹ nhưng mạnh mẽ, backup đơn giản, nhúng vào đâu cũng được (Drive, Dropbox,.. webapp,...) xài được ở mọi nơi. 
xuanvinh — 08/14/2024 12:45 AM
nhưng nhưu mình đề cập, nó hướng vào transclusion cho văn bản thuần, ... nên nếu dòng làm việc của bạn nặng về hình ảnh, biểu diễn trực quan,etc  các thứ tương tự thì sẽ không hợp. 

nếu cố gắng điều chỉnh để "hợp" được sẽ vất vả hoặc phải kết hợp thêm các công cụ quản lý nôi dung khác.. nên hiệu năng sẽ bị giảm sút khi ghi chú đủ nhiều.

https://atlas-disciplines.unige.ch/
https://manuals.annafreud.org/
https://twpub-tools.org/
https://evidentlycube.github.io/TW5-PluginShowcase/index.htmlhttps://evidentlycube.github.io/TW5-PluginShowcase/index.htmlhttps://evidentlycube.github.io/TW5-PluginShowcase/index.html 
Interactive Historical Atlas of the Disciplines

— University of Ge...
The Interactive Historical Atlas of the Disciplines is a project aimed at mapping the evolution of the disciplinary borders of science over time.
xuanvinh — 08/14/2024 12:54 AM
một điểm mà những người dùng tw hay tự hào là nó có thể chỉnh sửa chính lõi của nó, thay đổi trực tiếp cách nó hoạt động bằng mã js nhúng vào các core modules.

nhưng xài đơn giản thì ổn, chèn quá nhiều vào thì nó phình lên và làm chậm đáng kể.

nhược điểm quan trọng khác, nếu chỉnh sửa core module thì cập nhật lên các bản mới khá vất vả, vì giữa các bản cập nhật của nó có thể có break changes, và mình tự sửa nó theo ý mình gióng như fork một nhánh riêng, sẽ phải tự maintain và tích hợp code nếu có các thay đổi từ upstream, hay để dễ tích hợp với các plugins khác phụ thuộc vào Core API.

nên nó phù hợp với ghi chú cá nhân/dự án cá nhân hơn là đẻ cộng tác với người khác..

có các forks/ plugins, thậm chí từ mainstream gần đây của Jeremy đang có định biến nó thành multi-wiki, inter-wiki,... nhưng đồng nghĩa với việc phá vỡ triết lý one-thing-contains-all của chính nó.

vì tồn tại đủ lâu nên nó có cộng đồng rất tốt, nhưng lại khá phân mảnh.
learning curve mà nhiều người hay nhắc về nó ko hẳn là vì hơi hướng gần với tự viết mã js/css để tùy chỉnh theo ý họ, mà theo mình là bởi sự khó hiểu của các triển khai khác nhau giữa những người khác nhau. 
mặc định là lưu dữ liệu dạng markup/script plaintext (json, xml), dù ở dạng tất-cả-trong-một với 1 tệp html đơn; hoặc lưu nhiều tệp .tid hệt như markdown với Obsidian (nodejs version)

bên cạnh có thể xài như là NoSQL database với CouchDB/Cloudant, Firebase, AWS Lambda,... tuy nhánh này hỗ trợ chưa được tốt lắm và phải tự cấu hình nhiều. 

Nguồn:: [Discord](https://discord.com/channels/686053708261228577/944662832585277511/1272972267281711227)