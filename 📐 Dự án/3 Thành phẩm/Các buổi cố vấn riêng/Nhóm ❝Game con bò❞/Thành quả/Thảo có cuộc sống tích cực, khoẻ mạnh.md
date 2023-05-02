%%
#file/thành-quả 
%%
Phục vụ cho thành quả:
```dataview
LIST
From #file/thành-quả 
where contains(thành-quả-cần-có,[[]]) or contains(thành-quả-hỗ-trợ,[[]]) 
```
Thành quả cần có:: [[Thảo thấy được tình trạng cảm xúc của mình]]
Thành quả cần có:: [[75% thời gian những suy nghĩ tiêu cực không chi phối Thảo]]
Thành quả hỗ trợ:: [[Những người quan tâm tới Thảo hiểu được Thảo]]

Thành phẩm nhỏ hơn:
```dataview
List 
From #file/thành-phẩm
Where contains(file.folder,this.file.folder) and file.name!=this.file.name
```
