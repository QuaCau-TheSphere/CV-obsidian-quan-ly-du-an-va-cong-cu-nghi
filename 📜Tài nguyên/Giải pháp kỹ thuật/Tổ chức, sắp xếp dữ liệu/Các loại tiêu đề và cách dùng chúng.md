---
share: true
created: 2023-10-27T18:59
updated: 2025-06-09T14:21
cssclasses:
  - wide-table
aliases:
  - heading
  - đặt tên
  - filename
  - title
description: Có nhiều vị trí tiêu đề với những chức năng khác nhau, và có nhiều cách khác nhau để thay đổi chúng. Nên dùng loại nào cho trường hợp nào?
---
Một tiêu đề có rất nhiều chức năng:
- Tạo kích thích cho người đọc, khiến họ thấy vì sao họ cần đọc bài đó, dù họ đang không tìm kiếm thông tin về nó
- Tóm tắt vấn đề
- Quản lý tập tin

Lý tưởng nhất thì chỉ cần dùng một thứ để đặt cho tất cả những cái này. Và đó là filename. Chính vì như vậy, nên filename nên là thứ mặc định. Nhưng có những lúc nó chứa ký tự đặc biệt hoặc đường dẫn quá dài thì Windows hoặc Git sẽ không chịu, nên ta nên có một trường khác có chức năng làm mặc định cho những thứ còn lại. Đó chính là `title` trong frontmatter hoặc `<h1>` trong body. 

Trên Obsidian có plugin [Front Matter Title](https://github.com/snezhig/obsidian-front-matter-title) giúp ta quản lý được những chuyện này.

## Khi nào dùng `title` trong frontmatter, còn khi nào dùng `<h1>` trong body? 
Khi bạn mở một ghi chú lên, bạn sẽ thấy ngay lập tức có một tiêu đề đập vào mắt bạn. Ví dụ, với ghi chú bạn đang đọc thì nó sẽ trông thế này: 
![](https://i.imgur.com/1HydSvK.png)

Khi sử dụng plugin Front Matter Title, ta có thể thiết lập sao cho `title` sẽ làm thay đổi tiêu đề trên cao này, còn `<h1>` thì không. Tuỳ thuộc vào câu chữ ta đang đinh ninh khi truy cập từ cây thư mục mà ta có những cách để thay đổi tiêu đề cho hiệu quả.

### Dùng `<h1>` khi tiêu đề đọc từ cây thư mục khác với tiêu đề nội dung về mặt ngữ nghĩa
Ví dụ, trong thư mục `📜Tài nguyên/Giải pháp kỹ thuật/Web` có [[WordPress giúp việc tạo web dễ dàng nhất, chứ không phải là thứ quản lý web hiệu quả nhất|ghi chú này]]. Tên của nó trong cây thư mục là:
```
WordPress giúp việc tạo web dễ dàng nhất, chứ không phải là thứ tạo web hiệu quả nhất
```
Nhưng nếu bạn mở ra, thì bạn sẽ thấy nó là một bài viết dài. Nếu đọc bài đó thì sẽ thấy đặt tên nó thế này sẽ là hợp nhất.
```
Người dùng cá nhân hoặc dự án nhỏ có nên dùng WordPress hay không?
```
![](https://i.imgur.com/koC5yyi.png)

Giờ, nếu bạn không có tiêu đề thì đang đinh ninh tiêu đề phải giống, nếu khác thì sẽ bị khựng. Nhưng nếu để nguyên tiêu đề của cây thư mục thì sẽ bị lệch so với nội dung, nên cần phải có thể một tiêu đề khác để chuẩn bị cho mình rằng nội dung mới có tiêu đề khác với tiêu đề từ cây thư mục.

Các ghi chú tương tự: [[📜Tài nguyên]], [[📜Tài nguyên/Nhu cầu công việc/Nhu cầu công việc]]

### Dùng `title` khi tiêu đề đọc từ cây thư mục giống với tiêu đề nội dung về mặt ngữ nghĩa
Ví dụ, trong thư mục `📜Tài nguyên/Giải pháp kỹ thuật/Hậu cần/Nơi gặp mặt trực tiếp/TP.HCM` có [[TP.HCM|ghi chú này]]. Bởi vì nó là ghi chú thư mục, nên nó cần có tên là:
```
TP.HCM
```
Nhưng lúc mở ra thì thấy hơi khó hiểu. Nếu tiêu đề trên cao là như này thì sẽ rõ nghĩa hơn:
```
Nơi gặp mặt trực tiếp tại TP.HCM
```

Ví dụ khác, [[Kế hoạch (khái niệm)|Kế hoạch (khái niệm)]] phải mở ngoặc vì nếu không nó sẽ trùng tên với [[kế hoạch|Kế hoạch tổ chức các buổi đáp ứng nhu cầu học cách sử dụng công cụ và tư duy lập trình]]. Dùng `title` để không phải thấy cái ngoặc.

Bổ sung những thông tin được hiểu ngầm trong lúc truy cập từ cây thư mục, nhưng không có khi liên kết từ nơi khác.

Nên trong trường hợp này là dùng `title` để thay đổi tiêu đề trên cao luôn.

| Vai trò                                                                                                            | Vị trí xuất hiện                                                    | Cách điều chỉnh | Nếu không điều chỉnh thì mặc định sẽ lấy giá trị từ | Sử dụng khi                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------- | --------------- | --------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| Quản lý tập tin từ hệ điều hành. Tạo slug                                                                          | filename: lúc xuất file, terminal, Windows Explorer, dữ liệu Dataview                | filename        | Luôn có                                             | Luôn sử dụng                                                                                                         |
| Cho phép filename không phải slugify quá nhiều ký tự đặc biệt                                                      | Enveloppe tạo git                                                   | `filename`      | filename                                            | Có thể dùng khi gặp tên dài, và thấy việc tránh alias dài quan trọng hơn việc URL trên web và trên vault giống nhau* |
| Nhận diện bài viết, tóm tắt nội dung, quản lý theo cấu trúc của tác giả hoặc người đang tìm kiếm theo một cấu trúc | Tiêu đề: trên cao, file explorer, breadcrumb, menu, navigation pane | `title`         | filename                                            | Tiêu đề chứa ký tự đặc biệt hoặc quá dài*. Tiêu đề đọc từ cây thư mục giống với tiêu đề nội dung về mặt ngữ nghĩa    |
| Tạo dự đoán cho người đọc về nội dung bên trong, làm cho họ thấy vì sao họ cần đọc bài đó, đáp ứng câu hỏi của họ  | Headline (`<title>`, `<h1>`)                                        | Markdown `#`    | `title`, filename                                   | Mental model của người đã hiểu nó rồi khác với mental model của người chưa hiểu nó                                   |
| Nối tiếp dòng suy nghĩ                                                                                             | Liên kết (`[[]]`, `<a>`)                                            | `alias`         | `title`, filename                                   |                                                                                                                      |
|                                                                                                                    | Search autocomplete, kết quả Google                                 | Không cần chỉnh | `alias`, `title`, filename                          |                                                                                                                      |
| Tiêu đề lúc chia sẻ trên Facebook                                                                                  | Tiêu đề trong Open Graph (`meta property="og:title"`)               | `ogTitle`       | `title`, filename                                   |                                                                                                                      |

Xem thêm:: [[Các loại alias]]

## \*Cách xử lý khi gặp tên dài và có ký tự đặc biệt
| Lựa chọn                                      | Ưu điểm                                                             | Nhược điểm                                                          |
| --------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| Không thay đổi tên, nhưng thay đổi `filename` |                                                                     | URL trên web và trên máy khác nhau. Không xử lý được ký tự đặc biệt |
| Thay đổi tên, và thay đổi `title`             | URL trên web và trên máy không khác nhau. Xử lý được ký tự đặc biệt |                                                                     |
| Không thay đổi tên và dùng `h1`               | URL trên web và trên máy không khác nhau. Xử lý được ký tự đặc biệt | Có 2 tiêu đề. Không tự động tạo alias cho tiêu đề thực sự           |

Điều đó khiến cho việc luôn dùng `title` luôn đảm bảo được các vấn đề kỹ thuật, và đỡ phải suy nghĩ phải lựa chọn cái nào.

h1 dùng khi chắc chắn chỉ dùng tên thật chứ không dùng h1 khi liên kết. VD: `Prudential` chứ không phải `Làm đại lý ảo Prudential`

---
- Có lúc chỉ muốn đặt tiêu đề là câu hỏi, dù có thể đặt theo chủ đề. VD: [[Làm sao để tìm được thứ cần tìm khi không biết từ khoá chính xác của nó|Làm sao để tìm được thứ cần tìm khi không biết từ khoá chính xác của nó?]]
- Có lúc thì chỉ muốn đặt theo chủ đề, dù có thể đặt theo câu hỏi. VD: [[Các loại tiêu đề và cách dùng chúng]]

## Path
Giữ nguyên path?
Phản đối:
- Không đáng kể
- Người muốn tìm đến thì sẽ tìm được thôi. Search cũng không khó
