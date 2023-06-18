---
alias: Khi nào thì có thể nói là thành công
share: True
---
Nhu cầu:: các nhóm liên thông dữ liệu với nhau, Quả Cầu có thêm người quan tâm

# Thành quả mong muốn
%%
Thành quả cần có:: [[50 nhóm dự án sử dụng Obsidian để quản lý công việc]]

Thành quả hỗ trợ:: [[10 người đóng góp xây vault]]

Thành quả hỗ trợ:: [[20% người tham gia tìm hiểu về Quả Cầu]]
Thành quả hỗ trợ:: [[20% người tham gia liên thông dữ liệu với các vault khác]]
Thành quả hỗ trợ:: [[50% người đóng góp đáp ứng được các nhu cầu khác của họ]] 


- Cung cấp kiến thức công nghệ áp dụng được cho việc hoạt động như một bầy chim sáo
- Nhấn mạnh vào sự khác biệt với những phần mềm khác và ý nghĩa của nó
- Giúp những người tự nhận là mình ngu công nghệ thấy được mình có thể làm chủ công nghệ như thế nào
- Là một đầu mối để khám phá và kết nối các dự án khác

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
# Thành phẩm chính
```dataview
List 
From #file/thành-phẩm 
where file.inlinks.độ-cấp-thiết
Sort trạng-thái desc
```

# Công việc
```dataview 
task
where file.inlinks.độ-cấp-thiết and !fullyCompleted
```

[[Thiết lập/Gõ tắt]]
