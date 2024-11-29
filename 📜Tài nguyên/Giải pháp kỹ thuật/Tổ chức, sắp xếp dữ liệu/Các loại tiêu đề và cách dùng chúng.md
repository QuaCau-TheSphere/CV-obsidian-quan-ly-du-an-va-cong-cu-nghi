---
share: true
created: 2023-10-27T18:59
updated: 2024-11-12T21:18
cssClass: wide-table
alias: heading
---
Một tiêu đề có rất nhiều chức năng:
- Tạo kích thích cho người đọc, khiến họ thấy vì sao họ cần đọc bài đó, dù họ đang không tìm kiếm thông tin về nó
- Tóm tắt vấn đề
- Quản lý tập tin

Lý tưởng nhất thì chỉ cần dùng một thứ để đặt cho tất cả những cái này. Và đó là filename. Chính vì như vậy, nên filename nên là thứ mặc định. Nhưng có những lúc nó chứa ký tự đặc biệt hoặc đường dẫn quá dài thì Windows hoặc Git sẽ không chịu, nên ta nên có một trường khác có chức năng làm mặc định cho những thứ còn lại. Đó chính là `title` trong frontmatter hoặc `<h1>` trong body. 

Trên Obsidian có plugin [Front Matter Title](https://github.com/snezhig/obsidian-front-matter-title) giúp ta quản lý được những chuyện này.

## Khi nào dùng `title` trong frontmatter, còn khi nào dùng `<h1>` trong body? 
Khi bạn mở một ghi chú lên, bạn sẽ thấy ngay lập tức có một tiêu đề đập vào mắt bạn. Ví dụ, với ghi chú này thì nó sẽ trông thế này: 
![](https://i.imgur.com/1HydSvK.png)

Đặc điểm của `title` là sẽ làm thay đổi tiêu đề trên cao này, còn `<h1>` thì không. Như vậy, việc lựa chọn cái nào tuỳ thuộc vào việc tiêu đề mới có đúng ngay câu chữ ta đang đinh ninh khi truy cập từ cây thư mục hay không.

### Dùng `<h1>` khi tiêu đề đọc từ cây thư mục khác với tiêu đề nội dung về mặt ngữ nghĩa

Ví dụ, trong thư mục `📜Tài nguyên/Giải pháp kỹ thuật/Web` có [[WordPress giúp việc tạo web dễ dàng nhất, chứ không phải là thứ tạo web hiệu quả nhất|ghi chú này]]. Tên của nó trong cây thư mục là:
```
WordPress giúp việc tạo web dễ dàng nhất, chứ không phải là thứ tạo web hiệu quả nhất
```
Nhưng nếu bạn mở ra, thì bạn sẽ thấy nó là một bài viết dài. Nếu đọc bài đó thì sẽ thấy đặt tên nó thế này sẽ là hợp nhất.
```
Người dùng cá nhân hoặc dự án nhỏ có nên dùng WordPress hay không?
```
![](https://i.imgur.com/koC5yyi.png)


Giờ, nếu bạn không có tiêu : thì đang đinh ninh tiêu đề phải giống, nếu khác thì sẽ bị khựng. Nhưng nếu để nguyên tiêu đề của cây thư mục thì sẽ bị lệch so với nội dung, nên cần phải có thể một tiêu đề khác để chuẩn bị cho mình rằng nội dung mới có tiêu đề khác với tiêu đề từ cây thư mục.

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

| Vai trò                                                                                                            | Vị trí xuất hiện                                                    | Cách điều chỉnh | Nếu không điều chỉnh thì mặc định sẽ lấy giá trị từ | Lý do cần điều chỉnh mà không dùng mặc định được                                   |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------- | --------------- | --------------------------------------------------- | ---------------------------------------------------------------------------------- |
| Quản lý tập tin từ hệ điều hành. Tạo slug                                                                          | filename: lúc xuất file, terminal, Windows Explorer                 | filename        | Luôn có                                             | Không có                                                                           |
| Cho phép filename không phải slugify quá nhiều ký tự đặc biệt                                                      | Enveloppe tạo git                                                   | `filename`      | filename                                            | Tìm filename có ký tự đặc biệt bằng đúng với ký tự được nhập ở bàn phím            |
| Nhận diện bài viết, tóm tắt nội dung, quản lý theo cấu trúc của tác giả hoặc người đang tìm kiếm theo một cấu trúc | Tiêu đề: trên cao, file explorer, breadcrumb, menu, navigation pane | `title`         | filename                                            | filename không được chứa ký tự đặc biệt hoặc quá dài, nhưng tiêu đề lại có         |
| Tạo dự đoán cho người đọc về nội dung bên trong, làm cho họ thấy vì sao họ cần đọc bài đó, đáp ứng câu hỏi của họ  | Headline (`<title>`, `<h1>`)                                        | Markdown `#`    | `title`, filename                                   | Mental model của người đã hiểu nó rồi khác với mental model của người chưa hiểu nó |
| Nối tiếp dòng suy nghĩ                                                                                             | Liên kết (`[[]]`, `<a>`)                                            | `alias`         | `title`, filename                                   |                                                                                    |
|                                                                                                                    | Search autocomplete, kết quả Google                                 | Không cần chỉnh | `alias`, `title`, filename                          |                                                                                    |
| Tiêu đề lúc chia sẻ trên Facebook                                                                                  | Tiêu đề trong Open Graph (`meta property="og:title"`)               | `ogTitle`       | `title`, filename                                   |                                                                                    |


Xem thêm:: [[Các loại alias]]
## Path
Giữ nguyên path?
Phản đối:
- Không đáng kể
- Người muốn tìm đến thì sẽ tìm được thôi. Search cũng không khó


Có lúc chỉ muốn đặt tiêu đề là câu hỏi, dù có thể đặt theo chủ đề: [[Làm sao để tìm được thứ cần tìm khi không biết từ khoá chính xác của nó|Làm sao để tìm được thứ cần tìm khi không biết từ khoá chính xác của nó?]]. Có lúc thì chỉ muốn đặt theo chủ đề, dù có thể đặt theo câu hỏi: [[Các loại tiêu đề và cách dùng chúng]]

