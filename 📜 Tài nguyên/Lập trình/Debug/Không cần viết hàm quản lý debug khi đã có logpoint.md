---
share: true
created: 2023-07-09T17:14
updated: 2023-10-06T16:09
---
```
function debug(on, vịTrí, ...biến) {
    if (on !== "on") {return}

    //Trong dánNhãn(), trước khi test regex
    if (vịTrí === 1) return console.log('Ở ngoài test:', biến)

    //Trong dánNhãn(), sau khi test regex thành công
    if (vịTrí === 2) return console.log('Vào trong test:', biến)
    
    //Trong tạoDanhSáchTừVàNhãnTừCâuNhập() 
    if (vịTrí === 3) return console.log('vậtThểTừCâuNhập[i][0]:', biến)

    if (vịTrí === 4) return console.log('PTTTThựcSự:', biến)
}
```
# Ưu
- Có thể định nghĩa những bộ nhiều console.log() khác nhau cho cùng một bug. Mỗi bug khác nhau sẽ có một bộ khác nhau. Có thể tắt mở tất cả chúng cùng lúc
- Bấm `F12` để di chuyển đến nơi xuất hiện hàm debug khác
- Có thể tắt ở cả trong hàm lẫn ở vị trí
- Lúc này nếu cần console.log() thì có thể xoá nhanh chóng
# Nhược
- Chưa biết khác gì với console.log()
- Khi debug bấm vào link thì nhảy ra hàm debug chứ không ra chỗ console.log
- Tại vị trí debug cũng không hiểu nó ra kết quả gì
	- Nếu đã thay đổi biến thì cũng không biết hàm debug đã mất tác dùng

# So sánh với debugger
- Nếu thay đổi số biến thì cũng mất công theo dõi
- Không thấy được mối tương quan với các biến khác
- Có dòng debug thì cũng có thể hơi khó chịu 
