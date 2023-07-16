---
share: True
---
```js
let colors = ['red', 'green', 'blue'];

for (let i in colors) {
   console.log(i); // "0", "1", "2"
}

for (let i of colors) {
   console.log(i); // "red", "green", "blue"
}
```
# `for-in`
- Lặp qua các `key` của _enumerable properties_ trong một object
- Dùng được cho **String**, **Array**, or những object đơn giản, nhưng không phải với các object như **Map()** hoặc **Set()**
# `for-of`
- Lặp qua các phần tử của một _iterable object_
- Dùng được cho  **Array**, **String**, **Map** hoặc **Set** object, nhưng nó không sử dụng trên những object đơn giản

Nguồn:: [Sự khác biệt giữa for-.in, for-.of and forEach trong javascript](https://anonystick.com/blog-developer/su-khac-biet-giua-forin-forof-and-foreach-trong-javascript-2020041337746860)
# Trường hợp dùng for-in
Nếu chạy qua từng phần tử trong mảng mà sau đó cần dùng lại indexOf, thì không nên dùng for-of, vì `indexOf()` chỉ trả về giá trị đầu tiên.
```js
for (const i of vậtThểTừCâuNhập) {
        for (const k in i[0]) {
            const vịTríTrongCâuNhập = i[2][k]
            if (i[0][k].split(' ').length === 1) {
                danhSáchTừĐơnTrongCâuNhập.push([i[0][k], vịTríTrongCâuNhập])
            } else {
                danhSáchTừGhépTrongCâuNhập.push([i[0][k], vịTríTrongCâuNhập])
            }
            console.log(i[0][k], vịTríTrongCâuNhập, k, danhSáchTừĐơnTrongCâuNhập)
        }
    }

```