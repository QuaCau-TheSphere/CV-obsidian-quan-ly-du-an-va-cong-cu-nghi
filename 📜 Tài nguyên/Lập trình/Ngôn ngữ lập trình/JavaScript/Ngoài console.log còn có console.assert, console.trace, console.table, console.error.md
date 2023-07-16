---
share: True
---
Một trong những cách đơn giản nhất để debug Javascript code đó chính là hiện ra kết quả qua câu lệnh `console.log`. Mặc dù nó vẫn hoạt động, tuy nhiên đó không phải là cách tối ưu cho mọi việc. Trong bài viết này mình sẽ giới thiệu với các bạn những chức năng khác mà console javascript có thể làm được

# `console.log()`

Đây là hàm mà ai cũng đã biết. Tuy nhiên ít người để ý đến tham số dùng trong nó. Đoạn text trong `console.log` có thể được thay thế theo form sau:

|Cú pháp|Ý nghĩa|
|---|---|
|%o / %O|Thay thế object|
|%d / %i|Thay thế số nguyên|
|%s|Thay thế chuỗi|
|%f|Thay thế số thực|
|%c|Thay đổi style|

Một số ví dụ:

```js
console.log('Hello %o',{name:'Nguyen Tuan Quang', department:'blockchain'},'!' );
```

Kết quả:

![](https://images.viblo.asia/5f738857-c941-44ad-b54e-fb76f396b5fa.png)

Tương tự với `%d`,`%s`,`%f`. Với `%c` thì hơi đặc biệt hơn khi ta có thể chèn thêm css vào đây:

```js
let css = "text-shadow: -1px -1px hsl(0,100%,50%),1px 1px hsl(27, 100%, 50%),3px 2px hsl(54, 100%, 50%),5px 3px hsl(81, 100%, 50%),7px 4px hsl(135, 100%, 50%),9px 5px hsl(162, 100%, 50%),11px 6px hsl(189, 100%, 50%),13px 7px hsl(243, 100%, 50%),14px 8px hsl(270, 100%, 50%),16px 9px hsl(297, 100%, 50%); font-size: 40px;";
console.log("%c Style: Sun*", css)
```

![](https://images.viblo.asia/64232eba-b07d-4bcf-b602-c73a136a9d44.png)

# `console.count`

Hàm `console.count( [label] );` trả về số lần được gọi với label. Nếu không có tham số sẽ mặc định trả về số lần được gọi với label default. Điều này giúp ta đếm số lần gọi function. Ví dụ:

```js
let user = "";

function greet() {
  console.count();
  return "hi " + user;
}

user = "bob";
greet();
user = "alice";
greet();
greet();
console.count();
```

![](https://images.viblo.asia/cd6677a7-3ff2-441a-8a45-b521d66dff93.png)

Nếu truyền tham số vào hàm `count()` sẽ trả về số lần gọi function với label đã truyền vào. Ví dụ:

```js
function sayHello(name) {
  console.count(name)
}

sayHello("Nguyen")
sayHello("Tuan")
sayHello("Quang")
sayHello("Quang")
```

Kết quả trả về như sau:

![](https://images.viblo.asia/8d808873-8cc6-4d38-a34c-4b3bb414863f.png)

# `console.table()`

Hàm này cực kì hữu ích khi làm việc với array, object hoặc dữ liệu Json. Mỗi một phần tử tương ứng với 1 hàng trong table. Cùng xem qua ví dụ sau:

```js
const fruits = ["kiwi", "banana", "strawberry"]

console.table(fruits)
```

Kết quả trả về dưới dạng table rất dễ nhìn, không còn trông ác mộng giống như dùng `console.log` nữa:

![](https://images.viblo.asia/31a8867a-377d-4b0b-b956-e9199bb19139.png)

Tương tự với object. Nhưng index trong bảng sẽ là `key` trong object

![](https://images.viblo.asia/20ce9bad-9146-480b-9f8b-b05bfe2345b5.png) Nếu muốn gộp 2 hoặc nhiều object trong cùng 1 bảng thì đưa chúng vào trong array. Kết quả trả về như sau:

```js
const pets = {
  name: "Simon",
  type: "cat"
};

const person = {
  firstName: "Indrek",
  lastName: "Lasn"
}

console.table([pets, person]);
```

![](https://images.viblo.asia/a099dac9-25ca-49f2-b801-28b66e406cfe.png)

# `console.group()`

Hàm này đơn giản chỉ để nhóm các câu lệnh console với nhau. Dùng khi làm việc với `sets` hoặc `linked-data` giúp dữ liệu hiện ra dễ nhìn hơn.

```js
console.log("This is the first level");
console.group();
console.log("Level 2");
console.group();
console.log("Level 3");
console.warn("More of level 3");
console.groupEnd();
console.log("Back to level 2");
console.groupEnd();
console.log("Back to the first level");
```

![](https://images.viblo.asia/0d2422d6-5229-4833-931e-ea01bbc9b915.png)

# `console.time, console.timeLog, console.timeEnd`

`console.time(label)` với tham số là tên của bộ đếm thời gian, có thể chạy đồng thời 10.000 bộ đếm trong cùng 1 trang. Hàm `console.timeEnd(label)` để dừng bộ đếm giờ với tham số đã khởi tạo bằng `console.time`. Trong khi đó `console.timeLog(label)` trả về thời gian hiện tại kể từ khi bắt đầu bằng `console.time`. Bộ ba hàm trên rất hữu hiệu khi kiểm tra thời gian chạy của câu lệnh trong javascript. Cùng xem qua ví dụ sau:

```js
console.time('total');
console.time('init arr');
const arr = new Array(5);
console.timeEnd('init arr');

for (let i=0; i <arr.length ; i++){
    arr[i] = new Object();
    const _type = (i%2 ===0)? 'even' : 'odd'
    console.count(_type + ' added' );
}
console.timeEnd('total');
```

Kết quả:

![](https://images.viblo.asia/ed89cb10-7f22-490b-ad5b-929ca2bcb5be.png)

# Kết luận

Sau bài viết này hi vọng các ban biết thêm về sức mạnh của `console` trong javascript cũng như giúp ích được trong project của các bạn. Hẹn gặp lại mọi người trong bài viết sau.

# Source

[https://developer.mozilla.org/en-US/docs/Web/API/Console/timeLog](https://developer.mozilla.org/en-US/docs/Web/API/Console/timeLog) [https://www.freecodecamp.org/news/how-you-can-improve-your-workflow-using-the-javascript-console-bdd7823a9472/](https://www.freecodecamp.org/news/how-you-can-improve-your-workflow-using-the-javascript-console-bdd7823a9472/) [https://medium.com/better-programming/boost-your-javascript-debugging-skills-with-these-console-tricks-ab984c70298a](https://medium.com/better-programming/boost-your-javascript-debugging-skills-with-these-console-tricks-ab984c70298a)
Nguồn:: [Nâng cao kỹ năng debug trong Javascript bằng Console](https://viblo.asia/p/nang-cao-ky-nang-debug-trong-javascript-bang-console-3P0lPEEp5ox)