---
share: true
created: 2024-10-06T00:11
updated: 2024-10-06T21:29
---
## Lọc SĐT 
1. Tách PDF thành các ảnh rời:
```PowerShell
cpdf -extract-images .\file.pdf
```
2. (Thủ công) Kiếm các ảnh chỉ có sđt. Bật view largest lên để tìm cho dễ
3. Chạy script PowerShell sau:
```PowerShell
# Đọc OCR từ các ảnh
$i = 1
Get-ChildItem | ForEach-Object {
  $basename = $_.basename
  $count = $i.toString('D3') 
  $filename = "$count$basename" 
  $filename
  tesseract $_.name $filename
  $i++ 
}   

# Chỉ lọc đúng dòng có sđt và gom lại vào một file
select-string -path *.txt -pattern '\d+-\d+-\d+' | add-content final.txt
Notepad++ final.txt
```
4. (Thủ công) Kiểm tra lần cuối và dùng regex để tạo kết quả