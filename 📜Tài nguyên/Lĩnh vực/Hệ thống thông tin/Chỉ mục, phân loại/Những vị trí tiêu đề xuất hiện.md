---
share: true
created: 2023-10-27T18:59
updated: 2024-09-01T17:27
alias: heading
---
| Nơi xuất hiện                                                  | Lúc dùng                                                                                                                                                                                                                                                                                    | Cách điều chỉnh | Mặc định nếu không có      |
| -------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- | -------------------------- |
| OS path                                                        | Lúc xuất file, Git, `Get-ChildItem`, Windows Explorer                                                                                                                                                                                                                                       | filename        | Luôn có                    |
| <h2>Obsidian</h2>                                              |                                                                                                                                                                                                                                                                                             |                 |                            |
| Tiêu đề ghi chú                                                |                                                                                                                                                                                                                                                                                             | `obsidianTitle` | `title`, filename          |
| File explorer, breadcrumb                                      | Quản lý theo cây thư mục hoặc cấu trúc (VD: trong thư mục "Nhu cầu công việc" thì có ghi chú về [[Tạo website]])                                                                                                                                                                            | `obsidianNav`   | `nav`, `title`, filename   |
| Link autocomplete (`[[]]`)                                     |                                                                                                                                                                                                                                                                                             | `alias`         | `alias`, `title`, filename |
| Search autocomplete                                            |                                                                                                                                                                                                                                                                                             |                 | `alias`, `title`, filename |
| Lúc export dùng Enveloppe                                      | Tạo trang chủ cho web (cần đổi tên file thành `index.html`)                                                                                                                                                                                                                                 | `filename`      | `title`, filename          |
| SSG                                                            | Đường dẫn quá dài                                                                                                                                                                                                                                                                           | `title`         | `title`, filename          |
| <h2>Web</h2>                                                   |                                                                                                                                                                                                                                                                                             |                 |                            |
| Tab trang web (`<title>`)                                      |                                                                                                                                                                                                                                                                                             |                 | `title`, filename          |
| Tiêu đề bài viết (`<h1>`)                                      | Muốn dùng làm tiêu đề cho khách trên web, nhưng không làm thay đổi cái đinh ninh của mình về tiêu đề khi vừa mới truy cập nó từ cây thư mục, nhưng ngay sau đó phải chuẩn bị ngay cho mình rằng nội dung mới có tiêu đề khác chứ không phải là tiêu đề từ cây thư mục (VD: [[Tạo website]]) | Markdown `#`    | `title`, filename          |
| Menu/navigation pane                                           |                                                                                                                                                                                                                                                                                             |                 | `nav`, `title`, filename   |
| Tiêu đề lúc chia sẻ trên Facebook (`meta property="og:title"`) |                                                                                                                                                                                                                                                                                             | `ogTitle`       | `title`, filename          |
| URL                                                            | Redirect, slug                                                                                                                                                                                                                                                                              | `url`           | `title`, filename          |

## Các kiểu tiêu đề, alias
- Kế hoạch phát triển Trấn Kỳ
- Phát triển Trấn Kỳ
- Chiến lược phát triển Trấn Kỳ
- Lên kế hoạch phát triển Trấn Kỳ
- Xác định cơ hội và giải pháp

### Ưu và nhược của việc dùng alias cho các ý khác nhau cho một đoạn lập luận thống nhất
VD:
  - Ham muốn là việc đáp ứng nhu cầu khi chưa quan sát được nhu cầu của bản thân
  - Chấp là trạng thái của tư duy khi đang có ham muốn
  - Các tài liệu khoa học không bàn về chấp, mà luôn quy vấn đề thành ham muốn

Ưu: làm gọn số lượng ghi chú proxy,
Nhược: Query bằng dataview, xem trên breadcrumb hoặc lập đồ thị thì không đọc được các ý độc lập

## Ghi trong Obsidian
| Nơi ghi              | Nơi xuất hiện                 |
| -------------------- | ----------------------------- |
| filename             | Explorer, path, nơi xuất file |
|  `title`         | Ký tự đặc biệt khi link       |
| `<h1>`, Markdown `##` | Tiêu đề web                   |

## Path
Giữ nguyên path?
Phản đối:
- Không đáng kể
- Người muốn tìm đến thì sẽ tìm được thôi. Search cũng không khó
