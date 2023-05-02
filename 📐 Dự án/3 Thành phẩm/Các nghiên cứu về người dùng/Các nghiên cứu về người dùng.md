---
share: True
---
%%
#file/thành-phẩm
%%

Phục vụ cho thành quả:
```dataview
LIST
FROM #file/thành-quả 
WHERE contains(thành-phẩm,[[]])
```
Các giả thuyết cần kiểm tra:
```dataview
LIST giả-thuyết
FROM #file/thành-quả 
WHERE contains(thành-phẩm,[[]])
```
Người chơi:: 
Đối tượng thụ hưởng: `=this.file.inlinks.đối-tượng-thụ-hưởng`

Thành quả cần có::
Thành quả hỗ trợ::

Thành phẩm nhỏ hơn:
```dataview
List
Where contains(file.folder,this.file.folder) and file.name!=this.file.name
```
