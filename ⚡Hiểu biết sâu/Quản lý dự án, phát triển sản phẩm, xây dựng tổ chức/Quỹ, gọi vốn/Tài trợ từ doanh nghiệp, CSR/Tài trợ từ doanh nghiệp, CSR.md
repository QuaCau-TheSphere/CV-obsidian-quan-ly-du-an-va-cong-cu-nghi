---
share: true
created: 2023-12-19T17:41
updated: 2023-12-19T17:41
---

```dataview
LIST rows.file.link
FROM "Tài trợ từ doanh nghiệp, CSR" 
WHERE file.name!=this.file.name
GROUP BY split(file.folder, "/")[2]
```

[Hợp tác & Gây quỹ từ khối tư nhân — Viện iSEE](https://www.isee.org.vn/thu-vien/c8zk30ydi7y5ngxc99maqtpg3817r6-6kahw)