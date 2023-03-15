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

- [ ] Phỏng vấn pqn 🔼
- [ ] Phỏng vấn adref 🔼 
- [ ] Phỏng vấn duocnguyen 🔼 

Thành phẩm nhỏ hơn:
```dataview
List
Where contains(file.folder,this.file.folder) and file.name!=this.file.name
```