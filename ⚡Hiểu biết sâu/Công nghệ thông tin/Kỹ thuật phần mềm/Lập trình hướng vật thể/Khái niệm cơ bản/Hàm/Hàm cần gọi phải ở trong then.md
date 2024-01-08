---
share: true
created: 2023-08-21T15:21
updated: 2023-12-17T12:16
---
Tại sao khi gọi async function thì lại để console.log() trong then chứ không để ở ngoài được nhỉ? Phải là:
```js
asyncFunction(arg).then((result) => { console.log(result) })
```

Chứ không thể là:

```js
const a = asyncFunction(arg).then((result) => { result }) console.log(a)
```

duydang

ở ngoài thì log ra Promise, ở trong then thì log ra kết quả của Promise

tại async function lúc tạo ra nó là nó đẩy vào 1 cái asyncqueue thôi
`asyncFunction(arg)` là đẩy `asyncFunction(arg)` vào cái asyncQ, xong chạy tiếp các code bên dưới, vd ở đây là `console.log(a)`


`a` lúc này là null vì `asyncFunction(arg)` chưa chạy xong


sau khi `asyncFunction(arg)` thì `a` mới được gán = result, lúc này console.log(a) đã chạy rồi
- asyncFunction(arg) -> đẩy vào asyncQ
- chạy tiếp console.log(a) // in ra object rỗng hay null gì đấy
- asyncFunction(arg) chạy xong, gán a = 1 object mới là result, object a cũ được log trong console vẫn là null

Nếu để console.log() ở trong then thì

- asyncFunction(arg) đẩy vào asyncQ
- chờ asyncFunction(arg) chạy xong, chạy .then: gọi console.log(result)

code của main loop js thì có thể là như thế này:

```js
while (1) {   chạy 1 vài lệnh trong main loop   nếu asyncQ có việc, pop 1 việc ra chạy việc đó }
```

thì cái code kia nó chạy là

```js
while (1) {   const a = asyncFunction(arg).then((result) => { result   });   console.log(a); }
```

thì nó chạy theo kiểu

`- vòng lặp thứ 1:   - đẩy asyncFunction(arg) vào asyncQ   - console.log(a) - vòng lặp thứ 2:   - asyncQ có việc, pop ra là asyncFunction(arg)   - chạy asyncFunction(arg)   - chạy xong gọi tiếp .then: - gán a = result`

nếu 1 hàm có liên quan tới internet download gì đó thì nó sẽ đẩy lệnh download/upload đó vào 1 cái queue khác là networkQ gì đấy, cái networkQ này là 1 threadpool thật. Còn asyncQ chỉ là 1 cái queue thuần túy thôi thì phải

JS có đa luồng ở networkQ, nhưng ko có đa luồng ở asyncQ 

JS khác với các ngôn ngữ khác chỉ chạy 1 lần rồi tắt thì JS nó chạy suốt thời gian tồn tại của 1 tab trong browser nên nó xài 1 cái loop vô tận (tới khi tắt tab) gọi là event loop :V


[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Event_loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Event_loop "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Event_loop")


`a` lúc này là null vì `asyncFunction(arg)` chưa chạy xong


nếu code vậy thì giá trị của `a` là `Promise` mà chứ đâu null nhỉ anh



toy cũng ko chắc :V biết sơ sơ à :V console log nó in ra gì


in ra promise thì a là promise thôi 


chắc là null chớ 

Nguồn:: [Discord](https://discord.com/channels/420246254254030856/420547926146678785/1143149285387550822)
