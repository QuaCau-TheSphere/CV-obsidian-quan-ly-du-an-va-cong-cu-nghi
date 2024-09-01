---
share: true
created: 2024-07-20T13:22
updated: 2024-09-02T14:38
---
```dataviewjs
const thưMụcHiệnTại = dv.current().file.folder
const danhSáchGhiChú = dv.pages(`"${thưMụcHiệnTại}"`)
const danhSáchLiênKếtTớiGhiChú = danhSáchGhiChú.map(i => i.file.link)
dv.span(danhSáchLiênKếtTớiGhiChú)
```

## Nơi thảo luận
![](https://i.imgur.com/tl5D9i8.png)