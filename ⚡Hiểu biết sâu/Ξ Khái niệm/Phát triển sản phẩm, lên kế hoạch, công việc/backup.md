---
share: true
created: 2024-07-28T21:54
updated: 2024-07-30T10:23
---
Xem thêm:: [[Ưu tiên]]
```dataviewjs
const kháiNiệmHiệnTại = dv.current().file.name
const inlinks = dv.current().file.inlinks
const dsKháiNiệmLiênQuan = []
for (const inlink of inlinks) {
    const kháiNiệmCủaInlink = dv.page(inlink)["Khái niệm"]
    if (Array.isArray(kháiNiệmCủaInlink)) {
        dsKháiNiệmLiênQuan.push(...kháiNiệmCủaInlink)
    } else {
        dsKháiNiệmLiênQuan.push(kháiNiệmCủaInlink)
    } 
}
const dsKháiNiệmLiênQuanKhôngBịLặp = [] 
for (const i of dsKháiNiệmLiênQuan) {
    if (!dsKháiNiệmLiênQuanKhôngBịLặp.includes(i.path)){
        dsKháiNiệmLiênQuanKhôngBịLặp.push(i.path) 
    } 
} 
dv.span(dsKháiNiệmLiênQuanKhôngBịLặp)
console.log(dsKháiNiệmLiênQuanKhôngBịLặp)
```

WHERE contains(khái-niệm, [[]])
LIST
```
```dataview