---
share: true
created: 2023-07-07T16:55
updated: 2023-10-06T16:09
---
```js
var string = 'lorem word ipsum'
var regex = new RegExp('word', 'gi');
console.log("test result outside of if:", regex.test(string))
if (regex.test(string)) {
    console.log("hi")
}

//test result outside of if: true
```
# Cách sửa
```js
var string = 'lorem word ipsum'
var regex = new RegExp('word', 'gi');
test = regex.test(string)
console.log("test result outside of if:", test)
if (test) {
    console.log("hi")
}

//test result outside of if: true
//hi
```

[Regex.test(value) returns true when logged but false within an if statement](https://stackoverflow.com/a/59694184/3416774)
