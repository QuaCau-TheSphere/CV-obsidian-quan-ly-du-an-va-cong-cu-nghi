---
share: True
---
Ví dụ, chữ `à` có 2 code point:
- `U+0061` cho chữ `a`
- `U+0300` cho dấu huyền

Có thể kiểm tra điều này bằng lệnh 
```
"à".length //kết quả là 2 😲
```
Tuy nhiên, `a` cũng có thể có 1 code point là `U+00E0`.
Nguồn:: [Regex Tutorial - Unicode Characters and Properties](https://www.regular-expressions.info/unicode.html)