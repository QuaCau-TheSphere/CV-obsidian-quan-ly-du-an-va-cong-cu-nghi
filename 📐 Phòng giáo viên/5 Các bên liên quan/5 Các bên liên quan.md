```dataview
table split(file.folder,"/")[2] as "Cách phân loại",
	niềm-tin-về-họ
From "📐 Phòng giáo viên/5 Các bên liên quan" 
Where file.name!=this.file.name
```
