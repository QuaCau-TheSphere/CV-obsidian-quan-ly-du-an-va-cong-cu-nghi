---
share: True
---
%%
#file/thành-phẩm
%%
Trạng thái:: #tt/đang-làm, [[Nhật]]
Phục vụ cho thành quả:
```dataview
LIST
FROM #file/thành-quả 
WHERE contains(thành-phẩm,[[]])
```

Thành quả cần có::
Thành quả hỗ trợ:: [[100% người tham gia cho phản hồi về độ hấp dẫn của bài học]]

Thành phẩm nhỏ hơn:
```dataview
List
Where contains(file.folder,this.file.folder) and file.name!=this.file.name
```
