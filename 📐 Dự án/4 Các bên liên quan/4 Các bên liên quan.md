---
share: true
created: 2023-05-26T14:51
updated: 2023-10-06T16:09
---
```dataview
table
	split(file.folder,"/")[2] as "Cách phân loại",
	niềm-tin-về-họ as "Niềm tin về họ" 
From "📐 Dự án/4 Các bên liên quan" 
Where file.name!=this.file.name
```
