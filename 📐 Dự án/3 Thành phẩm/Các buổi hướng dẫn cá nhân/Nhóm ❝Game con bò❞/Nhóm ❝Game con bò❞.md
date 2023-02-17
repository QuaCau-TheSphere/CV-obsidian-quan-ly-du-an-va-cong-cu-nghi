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
Trạng thái:: #tt/đang-làm 

Thành quả cần có:: [[Thảo có cuộc sống tích cực, khoẻ mạnh]]
Thành quả cần có:: [[Ngân học được Nodejs]]
Thành quả hỗ trợ:: [[Nhật hoàn thiện được vault giáo trình Obsidian]]

Thành phẩm nhỏ hơn:
```dataview
List 
From #file/thành-phẩm 
Where contains(file.folder,this.file.folder) and file.name!=this.file.name
```

- [ ] Dạy cho Ngân 🔁 every week on Sunday 🛫 2023-02-19