---
share: true
created: 2023-06-01T14:09
updated: 2023-11-14T14:14
---
# Copy tin nhắn từ Discord
```js
copyq:
var raw = str(clipboard())
var processed = raw.replace(new RegExp(" — .* at .*\n", "g"), ": ")
copy(processed)
paste()
```
