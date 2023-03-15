%%
#file/thành-phẩm
%%
Phục vụ cho thành quả:
```dataview
LIST
From #file/thành-quả
WHERE contains(thành-phẩm,[[]])
```
Người chơi:: [[Nhật]]

Thành quả cần có:: [[50% người dễ dàng tự sử dụng]]
Thành phẩm nhỏ hơn:: [[100% bài học có thành quả cần có]]

Thành phẩm nhỏ hơn:
```dataview
List 
From "📐 Dự án hỗ trợ người mới học Obsidian/3 Thành phẩm" 
Where contains(file.folder,this.file.folder) and file.name!=this.file.name
```