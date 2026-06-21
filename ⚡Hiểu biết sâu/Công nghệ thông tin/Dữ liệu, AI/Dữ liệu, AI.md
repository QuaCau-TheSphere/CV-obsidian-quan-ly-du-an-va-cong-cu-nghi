---
share: true
created: 2024-07-20T13:22
updated: 2026-05-12T23:39
---
Khái niệm:: [[Dữ liệu]]

```dataview
LIST rows.file.link
FROM "⚡Hiểu biết sâu/Công nghệ thông tin/Dữ liệu, AI" 
WHERE file.name !=this.file.name
group by split(file.folder, "/" )[3]
```
## Nơi thảo luận
![](https://i.imgur.com/tl5D9i8.png)
