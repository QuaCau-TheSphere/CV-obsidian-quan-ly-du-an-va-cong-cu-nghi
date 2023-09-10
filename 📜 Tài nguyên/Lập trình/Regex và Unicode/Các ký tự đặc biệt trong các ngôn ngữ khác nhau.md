| Ngôn ngữ            | PowerShell                                  | CMD     | AutoHotKey   | JavaScript      | Python          | SQL | Bash | LaTeX |
| ------------------- | ------------------------------------------- | ------- | ------------ | --------------- | --------------- | --- | ---- | ----- |
| Dấu nháy kép `"`    | Expandable string                           |         |              | Verbatim string | Verbatim string |     |      |       |
| Dấu nháy đơn `'`    | Verbatim string                             |         |              | Verbatim string | Verbatim string |     |      |       |
| Dấu backtick ` `` ` | thoát khỏi ký tự đặc biệt, ngắt dòng        |         |              |                 |                 |     |      |       |
| Dấu đô la `$`       | `$biến`, `$env:path`                        |         |              |                 |                 |     |      |       |
| Dấu phần trăm `%`   |                                             | `%biến` | `%biến%`     |                 |                 |     |      |       |
| Dấu chéo `\`        |                                             |         |              |                 |                 |     |      |       |
| Dấu chéo ngược `/`  |                                             |         |              |                 |                 |     |      |       |
| Dấu sao `*`         |                                             |         |              |                 |                 |     |      |       |
| Dấu a còng `@`      |                                             |         |              |                 |                 |     |      |       |
| Dấu thăng `#`       | `# comment`. Mẹo: dùng `##` ở trên function |         | `#directive` |                 |                 |     |      |       |
| Dấu chấm phẩy `;`   |                                             |         | `; comment`  |                 |                 |     |      |       |
| Dấu gạch đứng `\|`   | Pipe                                        |         |              |                 |                 |     |      |       |

Ưu tiên dấu nháy đơn `'` hơn là nháy kép `"`. Tuy nhiên nhớ rằng trong JSON thì chỉ có thể dùng nháy kép chứ không được dùng nháy đơn/