%%
#file/thành-phẩm
%%
Phục vụ cho thành quả:
```dataview
LIST
FROM #file/thành-quả 
WHERE contains(thành-phẩm,[[]])
```
Người chơi:: Ngân, Thảo, Nhật
Thời gian:: CN hàng tuần
Địa điểm:: TPHCM

Thành quả cần có:: [[Thảo có cuộc sống tích cực, khoẻ mạnh]]
Thành quả cần có:: [[Ngân học được Nodejs]]
Thành quả hỗ trợ:: [[Nhật hoàn thiện được vault giáo trình Obsidian]]

Thành phẩm nhỏ hơn:
```dataview
List 
From #file/thành-phẩm 
Where contains(file.folder,this.file.folder) and file.name!=this.file.name
```