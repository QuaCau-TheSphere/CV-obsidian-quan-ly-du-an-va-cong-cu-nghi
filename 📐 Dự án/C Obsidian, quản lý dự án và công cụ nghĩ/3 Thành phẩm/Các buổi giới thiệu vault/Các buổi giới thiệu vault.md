---
share: true
created: 2023-05-26T14:51
updated: 2023-10-27T21:28
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
