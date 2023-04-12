```dataview
Table giá-rẻ, 
	wifi, 
	nhà-vệ-sinh, 
	máy-chiếu, 
	được-nói-to, 
	không-bị-ồn-từ-bên-ngoài, 
	bàn-đúng-kích-thước-làm-việc, 
	có-thể-vận-động-cơ-thể, 
	nước-ngon, 
	gần-nhà-đa-số-thành-viên, 
	ở-lại-tới-11h, 
	không-gian-tạo-cảm-hứng, 
	có-loa-mic
FROM "9 Tài liệu khác/92 Các chọn lựa/Nơi gặp mặt/Offline"
Where file.name=split(file.folder, "/")[4]
```