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
Người chơi:: [[Nhật]]

Thành quả cần có::
Thành quả hỗ trợ::

Thành phẩm nhỏ hơn:
```dataview
List
Where contains(file.folder,this.file.folder) and file.name!=this.file.name
```

- [ ] Chỉnh hình nền 
- [ ] Chạy thử trên máy ảo
