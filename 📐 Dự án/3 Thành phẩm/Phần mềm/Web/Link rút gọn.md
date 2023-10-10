---
share: true
created: 2023-05-26T14:51
updated: 2023-10-06T16:09
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
Người chơi:: 

Thành quả cần có::
Thành quả hỗ trợ::

Thành phẩm nhỏ hơn:
```dataview
List 
From #file/thành-phẩm 
Where contains(file.folder,this.file.folder) and file.name!=this.file.name
```
- Ở dưới mỗi file
- Bấm vào link thì sẽ tự động mở vault nếu đã cài rồi, hoặc mở web nếu chưa
