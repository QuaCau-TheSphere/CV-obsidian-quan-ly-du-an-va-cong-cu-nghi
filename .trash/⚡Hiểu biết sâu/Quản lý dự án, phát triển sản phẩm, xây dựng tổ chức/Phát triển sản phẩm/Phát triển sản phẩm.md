---
share: true
created: 2023-10-16T22:57
updated: 2023-10-16T23:46
filename: index
---

```dataview
LIST rows.file.link
FROM "⚡Hiểu biết sâu/Quản lý dự án, phát triển sản phẩm, xây dựng tổ chức/Phát triển sản phẩm" 
WHERE file.name!=this.file.name
group by split(file.folder, "/")[3] 
```

Em để các ghi chú này lên trang [Phát triển sản phẩm - Obsidian, quản lý dự án và công cụ nghĩ](https://obsidian.quảcầu.cc/%E2%9A%A1hi%E1%BB%83u%20bi%E1%BA%BFt%20s%C3%A2u/qu%E1%BA%A3n%20l%C3%BD%20d%E1%BB%B1%20%C3%A1n,%20ph%C3%A1t%20tri%E1%BB%83n%20s%E1%BA%A3n%20ph%E1%BA%A9m,%20x%C3%A2y%20d%E1%BB%B1ng%20t%E1%BB%95%20ch%E1%BB%A9c/ph%C3%A1t%20tri%E1%BB%83n%20s%E1%BA%A3n%20ph%E1%BA%A9m/ph%C3%A1t%20tri%E1%BB%83n%20s%E1%BA%A3n%20ph%E1%BA%A9m/?utm_source=F+G+%C2%BB+Product+Maker+Vietnam&utm_medium=social&utm_campaign=Tr%E1%BA%A5n+K%E1%BB%B3). Mỗi một ghi chú này đều là một link để đọc sâu hơn. Có thể có cái không ghi gì cả, nhưng cũng có cái ghi chi tiết. 