---
share: true
created: 2023-11-05T21:09
updated: 2024-02-06T17:02
title: Kế hoạch
alias:
  - Các bản kế hoạch
  - Kế hoạch tổng
---

```dataview
List rows.file.link
FROM "📐 Dự án/Trấn Kỳ/4 Thành phẩm/Kế hoạch" 
WHERE file.name!=this.file.name
group by split(file.folder,"/" )[4] 
```