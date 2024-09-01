---
share: true
created: 2023-05-26T14:51
updated: 2024-08-24T21:01
---

> [!info ] [[Tại sao lại cần tải kho về hơn là đọc trên web|Tại sao lại cần tải kho về hơn là đọc trên web?]]

## Cài đặt tự động
Bộ cài này dành cho Windows 10 trở lên:

[Tải bộ cài :octicons-download-16:](https://Obsidian.Quảcầu.cc/assets/Obsidian, quản lý dự án và công cụ nghĩ.exe){ .md-button .md-button--primary }

Hình ảnh bộ cài:
![](https://i.imgur.com/e3iB6N3l.png)

Hình ảnh sau khi cài xong:
![](https://i.imgur.com/c6PDsL1.png)

Để đảm bảo an toàn cho máy bạn, Obsidian sẽ hỏi là bạn có muốn tin kho dữ liệu này không không. Hãy bấm *Trust author and enable plugins*. Obsidian sẽ bật Settings lên để bạn duyệt các plugin. Bạn có thể bấm vào *Check for updates* để cập nhật chúng, hoặc tắt đi cũng được:
![](https://i.imgur.com/MhgGMBc.png) 

Vậy là xong. 

Xem thêm:: [[Các trục trặc có thể gặp khi cài]] 

## Cài đặt thủ công
### B1. Mở PowerShell với quyền admin
Bấm <kbd>Win+X</kbd> và chọn `Windows PowerShell (Terminal)`
![](https://st.quantrimang.com/photos/image/2018/07/09/cach-mo-powershell-nang-cao-trong-windows-10-5.jpg) 

### B2. Nhập lần lượt các lệnh sau
```PowerShell
New-ItemProperty -Path "HKLM:\SYSTEM\CurrentControlSet\Control\FileSystem" -Name "LongPathsEnabled" -Value 1 -PropertyType DWORD -Force
Set-Location "D:\" 
git config --global core.quotePath false
git config --global core.longpaths true
git config --global core.autocrlf true
git config --global core.safecrlf false
git clone https://github.com/QuaCau-TheSphere/quan-ly-du-an-va-cong-cu-nghi
Rename-Item "quan-ly-du-an-va-cong-cu-nghi/" "Obsidian, quản lý dự án và công cụ nghĩ"
git config --global --add safe.directory *
```

Nếu bạn chưa hiểu Git là gì nhưng cũng muốn thử sức thì có thể bắt đầu tìm hiểu ở bài [[4 Du hành thời gian với Git]]