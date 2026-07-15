---
share: true
created: 2024-11-29T12:19
updated: 2026-07-08T12:13
---
Đáp ứng cho nhu cầu công việc: `=filter(this.file.inlinks, (i) => contains(i.nhu-cầu-công-nghệ, [[]]))`

Lĩnh vực:: 
Giải pháp kỹ thuật:: 
Nhu cầu công nghệ:: [[Cào web]]

[[WordPress giúp việc tạo web dễ dàng nhất, chứ không phải là thứ quản lý web hiệu quả nhất|Người dùng cá nhân hoặc dự án nhỏ có nên dùng WordPress hay không?]]

## Tin tức
**news aggregator**, also termed a **feed aggregator**, **content aggregator**, **feed reader**, **news reader**, or simply an **aggregator**
[News aggregator - Wikipedia](https://en.wikipedia.org/wiki/News_aggregator)
Những cái này đọc qua RSS

Nếu không dùng RSS thì phải [[Cào web]]

[Internet Aggregator: Khám phá công cụ tổng hợp thông tin trực tuyến hiệu quả](https://rdsic.edu.vn/blog/blog-4/internet-aggregator-vi-cb.html)
Tổng hợp các thông tin mà các báo đăng mỗi ngày: [Trung tâm báo chí Thành phố Hồ Chí Minh](https://ttbc-hcm.gov.vn/)

Hot trend trên reddit, Facebook
[News Minimalist — All news ranked by significance](https://www.newsminimalist.com/?sort=significance)

## Sự kiện
- Sự kiện doanh nghiệp: [VietBest® Khám phá Sự kiện - Hội chợ Triển lãm - Ở đâu Khuyến mãi giá tốt gần nhất !](https://vietbest.vn/kham-pha)

## Nội dung
![](https://nodetics.com/feedbro/shots/integrations.png)
### Nhập toàn bộ danh sách theo dõi từ Facebook
![[Nhập toàn bộ danh sách theo dõi từ Facebook.png]]

1. Vào profile của mình, mở followings, cuộn xuống cho đến khi FB load hết, rồi mở Firefox Dev Console, copy inner HTML chứa toàn bộ thẻ div của cái danh sách theo dõi ấy.
  (Với Firefox, cần vào `about:config`, set `devtools.markup.beautifyOnCopy` true trước, để giữ format/indent khi copy)

2. Dán vào sublime, rồi xài chức năng find and replace with regex để format lại.
  Đầu tiên dùng chức năng find → find all trước, để lọc ra thẻ liên quan.
   ```html
   <a class="" href="(https://www.facebook.com/[^"]+)"[^>]*> (https://www%5C.facebook%5C.com/%5B%5E%22%5D+)%22%5B%5E%3E%5D*%3E)<span class="" dir="auto">([^<]+)</span>
   ```
  Rồi ấn Ctrl+C để copy toàn bộ cái được lọc ra, paste lại nó lên sublime.
Sau đó nhấn Ctrl + H, và sử dụng pattern  `<outline text="$2" title="$2" type="rss" \n xmlUrl="$1" htmlUrl="$1"/>` để convert sang định đạng OPML dùng cho FeedBro.

3. Mở FeedBro, chọn Setting, chọn xuất ra OPML file.
  Mở cái file đó ra, tạo thêm thư mục mới với thẻ outline, và copy toàn bộ bên kia sang và lưu lại.
  Rồi nhập ngược lại vào FeedBro là xong

Ngoại trừ một số tài khoản để trang cá nhân "chỉ bạn bè" thì đành chịu, chưa có cách. 
Cái này có vấn đề với bài đăng được chia sẻ từ bên thứ ba, video hoặc reel. Nhưng text thì có vẻ hoạt động.

Xem theo dòng thời gian, lọc bởi từ khóa, hay xem song song nhiều tab cùng lúc (như TweetDesk) khá tiện
