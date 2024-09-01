---
share: true
created: 2024-02-29T23:53
updated: 2024-09-01T15:38
---
```dataview
LIST rows.file.link
FROM "📜Tài nguyên/Nhu cầu công việc" 
WHERE file.name!=this.file.name
WHERE none([file.name, "Nơi gặp mặt trực tiếp"], (i) => contains(file.folder, i))
GROUP BY split(file.folder, "/")[2]
```

[[Thành phẩm (output) là các kết quả trực tiếp của các công việc|Việc đáp ứng nhu cầu công việc tạo ra thành phẩm]].
Nhu cầu công nghệ:: [[Nhu cầu công nghệ]]
Lĩnh vực:: [[Lĩnh vực]]