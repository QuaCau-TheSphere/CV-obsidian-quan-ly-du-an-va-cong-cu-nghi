---
share: true
created: 2023-05-26T14:51
updated: 2024-07-16T23:17
description: Quản lý clipboard bằng CopyQ
---
# Copy tin nhắn từ Discord
```js
copyq:
var raw = str(clipboard())
var processed = raw.replace(new RegExp(" — .* at .*\n", "g"), ": ")
copy(processed)
paste()
```
