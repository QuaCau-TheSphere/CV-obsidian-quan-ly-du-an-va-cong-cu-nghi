---
share: true
created: 2023-05-26T14:51
updated: 2026-01-14T13:11
---
%%
#file/thành-quả
%%
Trạng thái:: #tt/đang-làm
Độ cấp thiết:: #đct/cao
Đối tượng thụ hưởng:: [[Người muốn quản lý cuộc sống cá nhân]]

Phục vụ cho thành quả:
```dataview
List 
From #file/thành-quả 
where contains(thành-quả-cần-có,[[]]) or contains(thành-quả-hỗ-trợ,[[]]) 
```
Thành quả cần có:: 

Thành phẩm:: 


```dataview
list thành-quả-cần-có[0][0] 
from "📐 Dự án hỗ trợ người mới học Obsidian/6 Kế hoạch" 
```

```dataviewjs
dv.span(dv.pages('"📐 Dự án hỗ trợ người mới học Obsidian/6 Kế hoạch"')["Thành quả cần có"][0][0])
```
