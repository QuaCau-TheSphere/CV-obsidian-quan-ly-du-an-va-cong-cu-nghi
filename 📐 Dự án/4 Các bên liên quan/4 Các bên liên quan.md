---
share: True
---
```dataview
table
	split(file.folder,"/")[2] as "Cách phân loại",
	niềm-tin-về-họ as "Niềm tin về họ" 
From "📐 Dự án/4 Các bên liên quan" 
Where file.name!=this.file.name
```
