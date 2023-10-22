---
share: true
created: 2023-05-26T14:51
updated: 2023-10-13T14:04
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

Thành quả cần có:: [[100% người tham gia cài đặt được và tự biết cách cấu hình ở buổi đầu tiên]]
Thành quả hỗ trợ::

Thành phẩm nhỏ hơn:
```dataview
List 
From #file/thành-phẩm 
Where contains(file.folder,this.file.folder) and file.name!=this.file.name
```
