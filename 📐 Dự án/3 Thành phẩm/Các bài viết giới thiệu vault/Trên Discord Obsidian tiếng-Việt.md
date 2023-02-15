%%
#file/thành-phẩm
%%
Phục vụ cho thành quả:
```dataview
LIST
FROM "📐 Dự án/2 Thành quả mong muốn"
WHERE contains(thành-phẩm,[[]])
```
Người chơi::

Thành quả cần có::
Thành quả hỗ trợ::

Thành phẩm nhỏ hơn:
```dataview
List 
From "📐 Dự án/3 Thành phẩm" 
Where contains(file.folder,this.file.folder) and file.name!=this.file.name
```