---
share: true
created: 2023-05-26T14:51
updated: 2023-10-06T16:09
---
# Tôi không tải được bộ cài
Theo quy định của Microsoft, các phần mềm khi cài đặt cần phải có một chứng chỉ ký mã hoá ([code signing certificate](https://www.youtube.com/watch?v=K98SSsKfcNs)). Hiện nay bọn mình chưa có tiền để mua chứng chỉ này, nên Windows sẽ rất gắt gao trong việc sử dụng nó. 

Một số trình duyệt khi bấm vào sẽ hiện thông báo này:  
![](https://i.imgur.com/apKjHxym.png) 

Bấm vào dấu 3 chấm để tải về:  
![](https://i.imgur.com/uJ4oa8bm.png) 

Trình duyệt sẽ rất cố gắng để không cho bạn tải xuống, bằng cách hỏi lại lần nữa nhưng lần này lại giấu đi nút cho phép. Bạn phải bấm vào *Show more* để thấy được:  
![](https://i.imgur.com/6cQcAGYm.png) 

Bạn có thể phụ bọn mình báo cho Microsoft biết đây là file an toàn bằng cách bấm *Report this app as safe* ở dòng ở giữa:  
![](https://i.imgur.com/3qAR3KQm.png) 

# Windows không cho tôi chạy bộ cài
Sau khi tải về bạn hãy bật file lên. Windows vẫn sẽ tiếp tục hỏi bạn tiếp:  
![](https://i.imgur.com/gWyTfdbm.png) 

Bấm vào *More info* để thấy được nút *Run anyway*:  
![](https://i.imgur.com/SAzsiVXm.png) 

Sau khi hết Windows Defender Smartscreen hỏi thì sẽ đến User Account Control hỏi:  
![](https://i.imgur.com/SPwOzSH.png)

Trong quá trình cài thì bộ cài cũng sẽ cài thêm những phần mềm quan trọng khác như Obsidian, Git, và màn hình này sẽ tiếp tục bật ra. Nếu bạn không muốn bị phiền nhiễu thì có thể bấm vào *Show more details* để có thể tiếp tục bấm vào *Change when these notifications appear*:  
![](https://i.imgur.com/WVL0aBz.png)

Kéo thanh trượt xuống dưới cùng (*Never notify*) rồi bấm *OK*:  
![](https://i.imgur.com/ekX1nsZ.png) 

Chọn *Yes*:  
![](https://i.imgur.com/gIE83ar.png)

Bấm đúp vào bộ cài để chạy lần nữa. Nếu suôn sẻ máy sẽ bật lên màn hình chuẩn bị cho bộ cài:  
![](https://i.imgur.com/b2t0jLK.png) 


# Bộ cài chỉ hiện một cửa sổ đen rồi hết
Nếu bạn chỉ chạy được tới đây rồi không thấy gì nữa:  
![Màn hình đen của cmd cho script "Chuẩn bị"](https://i.imgur.com/ovgzl6K.png)

thì có thể đây là do các chương trình quét virus nhận nhầm. Hãy **tạm ngừng các chương trình quét virus** rồi thử lại. 

## Cách tắt Windows Security có sẵn trên máy
Bấm đúp vào icon của Windows Security trên thanh taskbar:  
![](https://winaero.com/blog/wp-content/uploads/2017/03/Windows-Defender-Security-Center-icon.png) 

Ở mục *Virus & threat protection settings*, chọn *Manage settings*:  
![](https://i.imgur.com/yrwjMLLm.png) 

Tắt *Real-time protection* như trong hình:  
![](https://i.imgur.com/FszcWF6m.png) 

# Bộ cài báo tôi chưa cài winget
Bộ cài sử dụng [Windows Package Manager](https://xuanthulab.net/su-dung-winget-tai-va-cai-dat-ung-dung-tren-windows.html "Sử dụng winget tải và cài đặt ứng dụng trên Windows") (hay còn gọi là winget) để cài các phần mềm khác. Một số phiên bản Windows cũ sẽ không có nó. Hãy cập nhật [App Installer](https://apps.microsoft.com/store/detail/tr%C3%ACnh-c%C3%A0i-%C4%91%E1%BA%B7t-%E1%BB%A9ng-d%E1%BB%A5ng/9NBLGGH4NNS1) và thử lại.

Với winget bạn có thể cài nhiều phần mềm cùng lúc. Điều này sẽ tiện lợi nếu bạn phải dùng một máy khác (đổi máy, mượn máy khác) mà cần sử dụng phần mềm của mình.

# Tôi đã thử mọi cách nhưng đều không thể bật được màn hình cài đặt
Nếu vẫn không được, bạn hãy **giải nén bộ cài** bằng cách bấm chuột phải vào bộ cài, chọn *WinRar* (hoặc *7zip*), chọn *Extract to Land_of_Spheres*:  
![](https://i.imgur.com/vtj27x6m.png) 

Bạn sẽ thấy trong folder mới được tạo có một folder nữa tên là *Bộ cài chính*. Trong đó sẽ có file *LOS Installer.exe*. Hãy bấm đúp vào nó:  
![](https://i.imgur.com/U55ymPvm.png) 

Màn hình cài đặt sẽ hiện ra:  
![](https://i.imgur.com/e3iB6N3l.png)
