---
share: true
created: 2023-12-19T17:41
updated: 2023-12-19T17:42
---

```dataview
LIST rows.file.link
FROM "Quỹ, gọi vốn" 
WHERE file.name!=this.file.name
GROUP BY split(file.folder, "/")[2]
```

[Gây Quỹ Cho Hoạt Động Phát Triển Từ Năng Lực Đến Niềm Tin — Viện iSEE](https://www.isee.org.vn/thu-vien/c8zk30ydi7y5ngxc99maqtpg3817r6-6d2cz)