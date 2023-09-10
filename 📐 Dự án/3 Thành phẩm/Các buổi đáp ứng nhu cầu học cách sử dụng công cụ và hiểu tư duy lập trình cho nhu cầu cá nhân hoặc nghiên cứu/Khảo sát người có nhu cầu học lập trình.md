---
share: True
---
%%
#file/thành-phẩm/bài-viết 
%%

Phục vụ cho thành quả:
```dataview
LIST
FROM #file/thành-quả 
WHERE contains(thành-phẩm,[[]])
```
Người chơi:: 

Thành quả cần có::
Thành quả hỗ trợ::

Thành phẩm nhỏ hơn:
```dataview
List 
From #file/thành-phẩm 
Where contains(file.folder,this.file.folder) and file.name!=this.file.name
```
   
- [ ] Tự động hoá các công việc lặp đi lặp lại
- [ ] Truy vấn và khai thác dữ liệu
- [ ] Tạo đồ thị
- [ ] Lập web cá nhân, quản lý phiên bản
- [ ] Quản lý và chia sẻ kiến thức
- [ ] Tạo web dự án
- [ ] Quản lý tài chính cá nhân, hiểu dân dev nói gì
- [ ] Nghiên cứu cộng đồng mạng, nắm bắt xu hướng, nhân văn số