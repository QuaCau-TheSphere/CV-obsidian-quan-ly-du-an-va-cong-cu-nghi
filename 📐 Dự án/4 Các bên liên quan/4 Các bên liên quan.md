---
dg-publish: True
share: true
---
```dataview
table split(file.folder,"/")[2] as "Cách phân loại",
	niềm-tin-về-họ
From "📐 Dự án hỗ trợ người mới học Obsidian/5 Các bên liên quan" 
Where file.name!=this.file.name
```
