---
share: True
---
[The Complete Guide to PowerShell Punctuation - Simple Talk](https://www.red-gate.com/simple-talk/sysadmin/powershell/the-complete-guide-to-powershell-punctuation/)
# Tạo nhiều folder
```PowerShell
$list=(ls -name -directory).substring(1)
foreach ($i in $list) {
	$index=$i.substring(0,1)
	cd "2$i" 
	new-item "2$index`1 Thành quả cần có" -type directory;
	new-item "2$index`2 Sự kiện" -type directory;
	new-item "2$index`3 Tài liệu" -type directory;
	Cd ..
}
```
# Tạo array
```PowerShell
$list|ForEach-Object {"`"$_`"," } |clip
```
# Đổi tên hàng loạt
```PowerShell
Get-ChildItem *.md -recurse | Where-Object {$_.name -cmatch '^2[A-Z]'}  | Rename-Item -newname { $_.name -replace '^2(.*)', '4$1'} -whatif 
```
- `-cmatch`: match có case sensitive
# Tìm và thay chuỗi hàng loạt
VScode nhiều khi không tìm hết được do tên file dài quá
```PowerShell
Get-ChildItem *.md -recurse | ForEach-Object { (Get-Content $_).Replace('Kết quả cần có::','Thành quả cần có::') | Set-Content $_ } 
```
# Xoá tất cả desktop.ini 
```PowerShell
Get-ChildItem -Force -Recurse -File -Filter "desktop.ini" | Remove-Item -force
```
# [Tắt giới hạn số ký tự tối đa cho đường dẫn](https://learn.microsoft.com/en-us/windows/win32/fileio/maximum-file-path-limitation?tabs=powershell#enable-long-paths-in-windows-10-version-1607-and-later "Maximum Path Length Limitation - Win32 apps | Microsoft Learn")
```PowerShell
New-ItemProperty -Path "HKLM:\SYSTEM\CurrentControlSet\Control\FileSystem" -Name "LongPathsEnabled" -Value 1 -PropertyType DWORD -Force
```
