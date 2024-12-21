---
share: true
created: 2023-05-26T14:51
updated: 2025-04-20T23:26
---
[Simple URL Tricks for Google Drive You Should Know - Digital Inspiration](https://www.labnol.org/internet/direct-links-for-google-drive/28356/)
## Tải nhiều folder cùng lúc
1. tải file ở đây https://github.com/glotlabs/gdrive/releases. Giải nén
2. Tải file export ở trên vào cùng thư mục
3. Mở terminal, cd vào nơi giải nén
4. Nhập `.\gdrive.exe account import .\gdrive_export-ganuongphap_gmail_com.tar` để nó lấy client id của anh
5. Lấy folder id
6. Nhập `.\gdrive.exe files download --recursive folder_id` rồi đợi nó tải về