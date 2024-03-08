---
share: true
created: 2024-02-29T23:53
updated: 2024-03-01T14:42
---

```dataview
LIST rows.file.link
FROM "📐 Dự án/Các buổi đáp ứng nhu cầu học cách sử dụng công cụ và tư duy lập trình cho nhu cầu công việc/1 Nhu cầu/Lĩnh vực" 
WHERE file.name!=this.file.name
GROUP BY split(file.folder, "/")[2]
```
Giải pháp kỹ thuật:: [[Giải pháp kỹ thuật]]