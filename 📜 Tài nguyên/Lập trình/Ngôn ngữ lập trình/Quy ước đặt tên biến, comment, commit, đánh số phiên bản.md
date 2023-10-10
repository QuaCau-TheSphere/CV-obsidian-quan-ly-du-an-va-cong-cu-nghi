---
share: true
created: 2023-07-06T18:20
updated: 2023-10-06T16:09
---
# Đặt tên biến

| Quy ước    | Loại thường dùng                              |
| ---------- | --------------------------------------------- |
| ALL_CAP    | Hằng                                          |
| snake_case | Tên file. Riêng với Python thì là cả tên biến |
| kebab-case | URL                                           |
| camelCase  | Biến, hàm, phương thức                        |
| PascalCase | Lớp, giao diện                                |

Một số tiền tố định dạng thường gặp:

| Tiền tố định dạng | Ý nghĩa                    | Ví dụ              |
| ----------------- | -------------------------- | ------------------ |
| động từ           | Hàm                        | `runFunction()`    |
| động từ to be     | Biến boolean               | `isTrue`           |
| `_`               | Biến riêng (private/local) | `_privateMethod()` |
| `$`               | Dùng trong jQuery          | `$_`               |
| `I`               | interface                  | `IString`          |
| `T`               | Type                       | `TData`            |

Trong trường hợp `I` và `T` thì chúng được gọi là ký hiệu Hungary (Hungarian notation). Ngày xưa thì nó hữu ích, nhưng với những IDE mới hơn thì nó không còn cần thiết nữa. Dù vậy vẫn nên biết để có thể đọc code của người khác. Tuy nhiên đó là Systems Hungarian. Nếu là Apps Hungarian thì vẫn hữu ích. Để phân biệt được chúng và hiểu được tại sao có thể xem bài [Making Wrong Code Look Wrong – Joel on Software](https://www.joelonsoftware.com/2005/05/11/making-wrong-code-look-wrong/)

[[freeCodeCamp]], [Snake Case VS Camel Case VS Pascal Case VS Kebab Case – What's the Difference Between Casings?](https://www.freecodecamp.org/news/snake-case-vs-camel-case-vs-pascal-case-vs-kebab-case-whats-the-difference/)
[[Viblo]], [Bàn về quy cách đặt tên (Naming Convention)](https://viblo.asia/p/ban-ve-quy-cach-dat-ten-naming-convention-3P0lPyem5ox)
# Comment
- Block comment dành cho việc giải thích ý tưởng của code
- Line comment để debug hoặc editor đọc
