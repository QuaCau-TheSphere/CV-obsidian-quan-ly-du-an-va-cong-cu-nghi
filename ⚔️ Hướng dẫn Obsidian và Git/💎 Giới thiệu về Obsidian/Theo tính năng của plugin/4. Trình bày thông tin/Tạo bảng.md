---
share: true
created: 2023-05-26T14:51
updated: 2026-01-14T13:10
---
> [!NOTE] Plugin sử dụng: Dataview

Bảng

```dataview
TABLE
	file.ctime as "Ngày tạo", 
	split(file.folder,"/")[1] as "Mức độ",
	file.folder
WHERE contains(file.name, "📖")
SORT split(this.file.folder,"/")[1]
```
