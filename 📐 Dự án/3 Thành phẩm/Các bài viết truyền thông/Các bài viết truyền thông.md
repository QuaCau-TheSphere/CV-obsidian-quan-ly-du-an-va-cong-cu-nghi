---
share: True
---
%%
#file/thành-phẩm
%%
Phục vụ cho thành quả:
```dataview
LIST
From #file/thành-quả
WHERE contains(thành-phẩm,[[]])
```
Người chơi:: 

Thành quả cần có::
Thành quả hỗ trợ::

Thành phẩm nhỏ hơn:
```dataview
List 
From "📐 Dự án hỗ trợ người mới học Obsidian/3 Thành phẩm" 
Where contains(file.folder,this.file.folder) and file.name!=this.file.name
```
