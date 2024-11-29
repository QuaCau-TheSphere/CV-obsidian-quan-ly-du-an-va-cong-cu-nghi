---
share: true
created: 2023-12-30T22:53
updated: 2024-02-24T22:22
---

```dataview
LIST rows.file.link
FROM "📐 Dự án/Các buổi đáp ứng nhu cầu học cách sử dụng công cụ và tư duy lập trình cho nhu cầu công việc/4 Thành phẩm/Nghiên cứu người dùng" 
WHERE file.name!=this.file.name
GROUP BY split(file.folder, "/")[4]
```