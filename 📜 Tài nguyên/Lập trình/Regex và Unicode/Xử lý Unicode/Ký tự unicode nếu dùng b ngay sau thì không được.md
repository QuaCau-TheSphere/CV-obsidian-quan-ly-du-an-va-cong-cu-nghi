---
share: True
---
[Why does /đ\b/ not match đ? (duplicate)](https://stackoverflow.com/q/76627655/3416774)
Nếu dùng `(?=$|\P{L})` thì lại chạy lâu. Dễ nhất là thêm khoảng trắng ở ngay sau input và 
```js
input = input + ' '
var regex = new RegExp(word + ' ', 'gi');
const test = regex.test(input)
```
Nguồn:: [[⚡Hiểu biết sâu/Ξ Nguồn/Stack Overflow]], [How can I use Unicode-aware regular expressions in JavaScript?](https://stackoverflow.com/a/52205643/3416774)