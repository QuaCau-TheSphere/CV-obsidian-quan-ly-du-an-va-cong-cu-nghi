---
share: True
---
`a.js` (entry module):

```javascript
import { b } from "./b.js";

export const a = 2;
```

`b.js`:

```javascript
import { a } from "./a.js";

console.log(a); // ReferenceError: Cannot access 'a' before initialization
export const b = 1;
```

# Cách 1
```javascript
function a_js() {
  var b = b_js(); // unnecessary line
  return 2;
}

function b_js() {
  var a = a_js();
  console.log(a);
  return 1;
}
```
# Cách 2
`a.js`:
```javascript
import { logA, b } from "./b.js";

export const a = 2;

logA();
console.log(b);
```

`b.js`:
```javascript
import { a } from "./a.js";

export const b = 1;

export function logA() {
  console.log(a);
}
```

Nguồn:: [Does importing a module mean embedding the code of the module at the line of the import statement?](https://stackoverflow.com/q/76928950/3416774)

[[Việc chia các lệnh trong kịch bản thành các hàm nhỏ hơn sẽ giúp dễ bắt lỗi hơn]]