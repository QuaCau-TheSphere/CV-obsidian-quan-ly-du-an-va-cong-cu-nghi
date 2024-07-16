---
share: true
title: Nơi gặp mặt trực tiếp tại Hà Nội
alias: Nơi gặp mặt trực tiếp tại Hà Nội
created: 2023-05-26T14:51
updated: 2024-07-16T22:56
---

> [!info] Hướng dẫn sử dụng
> Để lọc ra được những địa điểm phù hợp với mình, bấm <kbd>Ctrl+E</kbd> để thấy phần Dataview. Ở dòng where ghi lại những tiêu chí mình cần có, xong <kbd>Ctrl+E</kbd> thêm lần nữa
> Ví dụ:
> `where wifi = "✔" and không-bị-ồn-từ-bên-ngoài="✔" `

![[Quán có phòng riêng ở TPHCM]]
# Quán có phòng riêng
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
FROM "📜 Tài nguyên/Làm dự án/Hậu cần/Địa điểm gặp mặt trực tiếp/TPHCM/Quán có phòng riêng ở TPHCM"
Where file.name!=split(file.folder, "/")[3] and file.name!="Nhà Ân" and file.name!=this.file.name
sort "Hình thức" 
```
# Quán không có phòng riêng
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
FROM "📜 Tài nguyên/Làm dự án/Hậu cần/Địa điểm gặp mặt trực tiếp/TPHCM/Quán không có phòng riêng ở TPHCM"
Where file.name!=split(file.folder, "/")[3] and file.name!="Nhà Ân" and file.name!=this.file.name
sort "Hình thức" 
```
# Phòng họp riêng
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
FROM "📜 Tài nguyên/Làm dự án/Hậu cần/Địa điểm gặp mặt trực tiếp/TPHCM/Phòng họp riêng ở TPHCM"
Where file.name!=split(file.folder, "/")[3] and file.name!="Nhà Ân" and file.name!=this.file.name
sort "Hình thức" 
```
# Không gian làm việc chung
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
FROM "📜 Tài nguyên/Làm dự án/Hậu cần/Địa điểm gặp mặt trực tiếp/TPHCM/Không gian làm việc chung ở TPHCM"
Where file.name!=split(file.folder, "/")[3] and file.name!="Nhà Ân" and file.name!=this.file.name
sort "Hình thức" 
```
# Địa điểm công cộng
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
FROM "📜 Tài nguyên/Làm dự án/Hậu cần/Địa điểm gặp mặt trực tiếp/TPHCM/Địa điểm công cộng ở TPHCM"
Where file.name!=split(file.folder, "/")[3] and file.name!="Nhà Ân" and file.name!=this.file.name
sort "Hình thức" 
```
where không-bị-ồn-từ-bên-ngoài="✔" 

![[Nơi gặp mặt trực tiếp#^3a53fd]]
