---
share: true
created: 2023-05-26T14:51
updated: 2023-11-07T11:56
alias:
  - Kế hoạch tổ chức các buổi hướng dẫn sử dụng Trấn Kỳ
  - Tổ chức các buổi hướng dẫn người dùng sử dụng Trấn Kỳ
---
Vào Discord của Quả Cầu, mục Trấn Kỳ để hẹn lịch. 
%%
#file/thành-phẩm
%%

[[Các buổi đáp ứng nhu cầu học cách sử dụng công cụ và tư duy lập trình cho nhu cầu cá nhân hoặc nghiên cứu]]
Phục vụ cho thành quả:
```dataview
LIST
FROM #file/thành-quả 
WHERE contains(thành-phẩm,[[]])
```
Người chơi:: 

Thành quả cần có:: [[100% người tham gia cài đặt được và tự biết cách cấu hình ở buổi đầu tiên]]
Thành quả hỗ trợ::

Thành phẩm nhỏ hơn:
```dataview
List 
From #file/thành-phẩm 
Where contains(file.folder,this.file.folder) and file.name!=this.file.name
```