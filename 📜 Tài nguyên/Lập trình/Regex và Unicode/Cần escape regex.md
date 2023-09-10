---
share: True
---
```
function escapeRegex(string) {
    return string.replace(/[/\-\\^$*+?.()|[\]{}]/g, '\\$&');
}
```
Nguồn:: [[Tự ngẫm nghĩ, trải nghiệm]]