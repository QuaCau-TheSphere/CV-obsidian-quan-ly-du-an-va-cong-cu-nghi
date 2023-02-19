# Thành quả mong muốn
%%
Thành quả cần có:: [[100 nhóm dự án dùng Obsidian để quản lý công việc]] 

Thành quả hỗ trợ:: [[10 người đóng góp xây vault]]
Thành quả hỗ trợ:: [[50% người xây vault kết nối nhu cầu của mình tới vault chung]]
Thành quả hỗ trợ:: [[20% người tham gia tìm hiểu về Quả Cầu]]
Thành quả hỗ trợ:: [[20% người tham gia dùng Git 1 lần mỗi tuần]]
%%
## Cần có
```dataview
List
From outgoing([[]])
Where contains(this.thành-quả-cần-có,file.link)
```
## Hỗ trợ
```dataview
List
From outgoing([[]])
Where contains(this.thành-quả-hỗ-trợ,file.link)
```
# Thành phẩm
```dataview
List 
From "📐 Dự án" and #file/thành-phẩm 
Sort trạng-thái desc
```

# Công việc
```tasks
path includes Thành phẩm
```