---
share: true
created: 2024-07-28T21:54
updated: 2026-07-01T13:41
title: Kế hoạch
---
```dataviewjs
const inlinks = dv.current().file.inlinks
const linkList = []
for (const inlink of inlinks) {
    const data = dv.page(inlink)["Khái niệm"]
    if (!Array.isArray(data)) {
        linkList.push(data)
    } 
}
const result = [] 
console.log(inlinks)
console.log(linkList)
for (const i of linkList) {
    result.push(i.path) 
    console.log("result", result)
} 
dv.span(result)
```

[[backup]]
