---
dg-publish: True
share: [ True, true ]
---
%%
#file/thành-phẩm
%%

Phục vụ cho thành quả:
```dataview
LIST
FROM #file/thành-quả 
WHERE contains(thành-phẩm,[[]])
```
Các giả thuyết cần kiểm tra:
```dataview
LIST giả-thuyết
FROM #file/thành-quả 
WHERE contains(thành-phẩm,[[]])
```
Người chơi :: [[Nhật]], [[Nghi]], [[Thịnh]]
Đối tượng thụ hưởng: `=this.file.inlinks.đối-tượng-thụ-hưởng`


Thành quả cần có:: 
Thành quả hỗ trợ:: Người tham gia nói nhu cầu của họ

Thành phẩm nhỏ hơn:
```dataview
List
Where contains(file.folder,this.file.folder) and file.name!=this.file.name
```

- [x] Hoàn thiện kế hoạch buổi gặp ✅ 2023-03-08
- [x] Hoàn thiện phiếu đăng ký ✅ 2023-03-08