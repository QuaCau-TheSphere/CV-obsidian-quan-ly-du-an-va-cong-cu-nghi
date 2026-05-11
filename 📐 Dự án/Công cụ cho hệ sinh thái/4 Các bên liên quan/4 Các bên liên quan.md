---
share: true
created: 2023-05-26T14:51
updated: 2026-01-14T13:11
---
```dataview
table
	split(file.folder,"/")[4] as "Cách phân loại",
	niềm-tin-về-họ as "Niềm tin về họ" 
From "📐 Dự án/C Obsidian, quản lý dự án và công cụ nghĩ/4 Các bên liên quan" 
Where file.name!=this.file.name
```
