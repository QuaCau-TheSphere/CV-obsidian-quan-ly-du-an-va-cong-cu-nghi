---
share: true
title: Nơi gặp mặt trực tiếp theo loại hình
created: 2023-10-22T13:11
updated: 2024-07-16T22:56
---

```dataview
Table 
	giá-rẻ as "Giá rẻ", 
	wifi as Wifi, 
	nhà-vệ-sinh as "Nhà vệ sinh" , 
	máy-chiếu as "Máy chiếu",
	được-nói-to as "Được nói to", 
	không-bị-ồn-từ-bên-ngoài as "Không bị ồn từ bên ngoài", 
	bàn-đúng-kích-thước-làm-việc as "Bàn đúng kích thước làm việc", 
	có-thể-vận-động-cơ-thể as "Có thể vận động cơ thể", 
	nước-ngon as "Nước ngon", 
	gần-nhà-đa-số-thành-viên as "Gần trung tâm", 
	ở-lại-tới-23h as "Ở lại tới 23h", 
	không-gian-tạo-cảm-hứng as "Không gian tạo cảm hứng", 
	có-loa-mic as "Có loa mic"
FROM "📜 Tài nguyên/Làm dự án/Hậu cần/Nơi gặp mặt trực tiếp/Theo loại hình" 
WHERE file.name!=this.file.name
```