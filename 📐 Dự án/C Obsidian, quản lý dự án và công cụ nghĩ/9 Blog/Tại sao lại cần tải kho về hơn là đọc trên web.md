---
share: true
created: 2023-05-26T14:51
updated: 2026-03-06T16:14
title: Tại sao lại cần tải kho về hơn là đọc trên web?
---
Trong ngành khoa học máy tính, [[Việc hợp tác làm việc thời gian thực với dữ liệu được lưu ở máy cá nhân là một bài toán khó]]. Điều đó khiến cho [[Có sự đánh đổi giữa sự tự do sử dụng dữ liệu và sự tiện lợi trong việc hợp tác|chúng ta phải đánh đổi giữa sự tự do sử dụng dữ liệu và sự tiện lợi trong việc hợp tác]]. Hay nói cách khác, [[Việc trung tâm hóa việc lưu trữ dữ liệu trên máy chủ sẽ lấy đi autonomy và agency của người dùng cuối]]. Xu thế hiện nay là [[Các nhóm làm việc qua mạng ngày càng nhiều]], đến nỗi khi được hỏi về app đa số mọi người sẽ chỉ nhắc đến những cloud app như Google Drive hay Notion. Nghĩa là chúng ta đã hy sinh quá nhiều sự tự chủ dữ liệu cho sự tiện lợi đến nỗi chúng ta không còn biết gì về một loạt các phần mềm khác mạnh mẽ hơn. Việc đánh mất sự tự chủ đó là lý do khiến cho chúng ta luôn cảm thấy mình mù công nghệ, và chấp nhận rằng mình sẽ chẳng hiểu gì về công nghệ cả. Đây chính là một sự bất lực học được. [[Người không học về lập trình thấy việc lập trình như làm phép thuật]], trong khi [[Lập trình viên biết lập trình chủ yếu là nhờ biết google]]. Bạn cũng biết google vậy, vậy tại sao vẫn thấy nó giống như làm phép thuật? Chúng tôi nghĩ một phần lớn là vì đã từ lâu bạn không còn cảm giác mình có sự tự chủ với dữ liệu của mình rồi. Khi bạn đã có lại được cảm giác đó, bạn sẽ thấy mình tự tin hơn về công nghệ.

Bạn có thể bắt đầu có lại cảm giác đó bằng cách tải dữ liệu của web này về.

[[Hướng dẫn tải kho]]{ .md-button .md-button--primary }

## Những thứ mà chỉ phiên bản trên Obsidian mới có mà bản web không có
Về cơ bản, những thứ này có được là do [[Obsidian lưu dữ liệu trên máy của người dùng]]. Đây là một số hệ quả của việc đó:

### Tất cả các phím tắt, chức năng và plugin của Obsidian, bao gồm cả những thứ bạn thiết lập riêng cho mình
Ví dụ:
#### Đồ thị mối liên hệ giữa các ghi chú trong phần [[⚡Hiểu biết sâu]]
![](https://i.imgur.com/gwdeLlL.png)

Đồ thị này cho thấy được có những ghi chú nào nổi trội trong đây, cũng như mức độ liên kết của chúng. Bạn có thể thấy chúng rời rạc khá nhiều.

#### Những trang nào liên kết tới trang đang đọc
![](https://i.imgur.com/UbXZspz.png)

#### Lịch sử phát triển 
![](https://i.imgur.com/UyIxTHF.png)
Xem thêm:: [[Theo tính năng của plugin|Obsidian có những tính năng nào hay?]]

### Thời gian chuyển trang gần như là tức thời
Điều này giúp bạn nhanh chóng kiểm tra giả thiết các câu hỏi của bạn. 

Xem thêm:: [[Để có thể thiết kế một giải pháp một cách nhanh chóng và tự tin, ta cần được thử nghiệm ý tưởng mới và kiểm tra giả thiết ngay khi chúng vừa được nghĩ ra]]

### Các tập tin không thể hoặc không cần phải để lên web
Ví dụ:
- Các tập tin không được dùng trong ghi chú nào cả
- Các tập tin trong thư mục `Ξ Thiết lập` 
- Các tập tin có dung lượng lớn hơn 100 MB

## Vậy bản web được sinh ra để làm gì?
- Dễ giới thiệu cho người mới, 
- Dễ quảng bá dự án,
- ~~Tăng SEO~~  Thêm nguồn tài nguyên chất lượng cho các máy tìm kiếm như Google, Bing. Xem thêm:: [[Chia sẻ kho tri thức, tài nguyên của mình cho mọi người]]
- Thêm nguồn ngữ liệu chất lượng để huấn luyện cho máy

### Những lỗi trên bản web 
- Thanh tìm kiếm không hoạt động
- Không tự chuyển trang mỗi lần sửa tên ghi chú nên hay bị 404
- Dataview không được tự động cập nhật
- Cache 🤡

Ví dụ, những trang có Dataview sẽ không chắc được cập nhật, do plugin tạo web không thấy trang đó có sự thay đổi gì.

Về cơ bản, **những lỗi này không được ưu tiên sửa**. Do nhiệm vụ của nó là để dễ giới thiệu cho người mới, nên khi nó đã làm xong nhiệm vụ của mình thì có lẽ nên tập trung sức lực cho những thứ khác. Để biết những thứ cần được ưu tiên hơn, bạn có thể đọc trong [[📐 Dự án]].

[[Hướng dẫn tải kho]]{ .md-button .md-button--primary }
