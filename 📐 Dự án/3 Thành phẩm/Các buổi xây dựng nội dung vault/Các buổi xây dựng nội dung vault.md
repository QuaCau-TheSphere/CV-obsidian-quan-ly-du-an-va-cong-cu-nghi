%%
#file/thành-phẩm
%%
Phục vụ cho thành quả:
```dataview
LIST
FROM #file/thành-quả 
WHERE contains(thành-phẩm,[[]])
```
Người chơi:: Nhật

Thành quả cần có::
Thành quả hỗ trợ:: Người tham gia nói nhu cầu của họ

Thành phẩm nhỏ hơn:
```dataview
List 
From #file/thành-phẩm 
Where contains(file.folder,this.file.folder) and file.name!=this.file.name
```