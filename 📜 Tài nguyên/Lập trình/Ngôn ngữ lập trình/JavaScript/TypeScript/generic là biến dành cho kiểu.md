---
share: True
---
[[generic là cách để giữ được tính chung chung mà vẫn không bị mất thông tin]]
Biến (variable) thì để trong `( )`, còn biến kiểu (type variable) thì để trong `< >`

Ví dụ, đây là cách viết hàm như bình thường:
```js
function f(x)
```
Trước giờ nếu muốn khai báo kiểu cho cả hàm và biến thì phải viết thế này:
```ts
interface t { u }
function f(x: t): t
```
Nhưng cách viết này thì `u` bị giữ cố định trong code. Nó là hằng rồi chứ không phải là biến. Nếu muốn nó cũng là biến thì ngay trong hàm cũng phải khai báo `t` như thể nó là một biến.

Nếu có thể viết chỉ số dưới chân cả hai như vậy thì tiện:
```ts
fₜ(xₜ)
```

Nhưng vì không dùng unicode được nên viết như thế này:
```js
f(t)(x) 
```
Nhưng nếu vậy thì không phân biệt được cái nào thực sự là biến dành cho hàm, cái nào là biến dành cho kiểu. Để phân biệt thì ta dùng ngoặc nhọn:
```ts
f<t>(x) 
```
Rồi sau đó khai báo kiểu cho biến và hàm như bình thường:
```ts
f<t>(x: t): t
```
Đây chính là cú pháp của generic. Ví dụ:
```ts
function identity<Type>(arg: Type): Type { return arg;}
```

Cũng giống như ta có thể có nhiều biến trong hàm, ta cũng có thể có nhiều biến kiểu trong hàm:
```ts
f<t, u>(x, y) 
```