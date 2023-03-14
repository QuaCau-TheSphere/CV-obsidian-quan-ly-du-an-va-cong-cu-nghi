# Thành quả mong muốn
%%
Thành quả cần có:: [[50 nhóm dự án sử dụng Obsidian để quản lý công việc]]

Thành quả hỗ trợ:: [[10 người đóng góp xây vault]]

Thành quả hỗ trợ:: [[20% người tham gia tìm hiểu về Quả Cầu]]
Thành quả hỗ trợ:: [[20% người tham gia dùng Git 1 lần mỗi tuần]]
Thành quả hỗ trợ:: [[50% người đóng góp đáp ứng được các nhu cầu khác của họ]] 

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
From #file/thành-phẩm 
Sort trạng-thái desc
```

# Công việc
```tasks
path includes Thành phẩm
not done
```
