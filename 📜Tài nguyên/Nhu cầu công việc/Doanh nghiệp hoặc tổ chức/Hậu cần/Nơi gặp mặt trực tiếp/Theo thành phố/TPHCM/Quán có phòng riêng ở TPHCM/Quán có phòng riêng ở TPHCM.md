---
share: true
created: 2023-05-26T14:51
updated: 2024-07-16T22:56
---
Không bị ồn từ bên ngoài:: ✔
Nhà vệ sinh:: ✔
Được nói to:: ✔
Không bị ồn từ bên ngoài:: ✔
Có thể vận động cơ thể:: ✔
Bàn phù hợp cho việc dùng laptop:: ✔

```dataview
Table 
	giá-rẻ as "Giá rẻ", 
	máy-chiếu as "Máy chiếu",
	nước-ngon as "Nước ngon", 
	gần-nhà-đa-số-thành-viên as "Gần trung tâm", 
	ở-lại-tới-23h as "Ở lại tới 23h", 
	không-gian-tạo-cảm-hứng as "Không gian tạo cảm hứng", 
	có-loa-mic as "Có loa mic"
FROM "📜 Tài nguyên/Làm dự án/Hậu cần/Địa điểm gặp mặt trực tiếp/TPHCM/Quán có phòng riêng ở TPHCM"
Where file.name!=split(file.folder, "/")[3] and file.name!="Nhà Ân" and file.name!=this.file.name
sort "Hình thức" 
```
