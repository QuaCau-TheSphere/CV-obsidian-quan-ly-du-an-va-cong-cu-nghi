---
share: true
created: 2025-05-26T19:55
updated: 2025-07-08T21:34
aliases:
  - Kula
---
## Nhận xét về app mô phỏng VSLA
(Nhận xét có được sau khi chơi được một nửa [app mô phỏng VSLA](https://fabo.org/dca/VSLA_training), đọc hết [tài liệu cho người điều phối](https://fabo.org/pluginfile.php/180950/mod_resource/content/2/VSLA_SimulationGameApp_guideline.pdf) và xem hết [webminar](https://careorg.zoom.us/rec/play/HKnQzNXB9gbPYCjljaGvVTB-RtIpYbMGVAco53mwInmEvCaKhyoIo4GxsRdEXxs3h4-p3bPTbQHkeTZj.YxB6EWTGgLRqcS8M?continueMode=true&_x_zm_rtaid=z95Dco_2QRa5GnzWSjahbA.1642670731961.030913f153adafd79a992fa11e7eda2e&_x_zm_rhtaid=917). Webminar phát âm khó nghe nên cũng lõm bõm)


| Đặc điểm người dùng                                | Hệ quả                                                             |
| -------------------------------------------------- | ------------------------------------------------------------------ |
| Không biết chữ                                     | Cần dùng âm thanh                                                  |
| Trình độ tin học thấp                              | Phải có nhiều affordance: dễ bấm, sinh động                        |
| Không có internet                                  | Phải là chương trình trên máy tính chứ không chạy trên server được |
| Nguồn điện không ổn định, app nặng có lúc bị crash | Cần có bản giấy phòng hờ                                           |
| Không có thiết bị riêng                            | Xem chi tiết ở dưới                                                |

Việc thành viên nhóm không có thiết bị riêng đem lại những hệ quả gì?
- Điểm mạnh:
	- Tăng thêm hứng thú khi được thấy đồ công nghệ
	- Thấy mình đẳng cấp hơn
- Điểm yếu:
	- Do thiết bị được giao cho người điều phối cầm nên họ cần phải cẩn thận để tránh bị trộm cướp
	- Trình diễn cho nhóm đông người xem nên phải là màn hình lớn như tablet hoặc laptop, không thể là điện thoại
		- Người dùng không cá nhân hoá theo số tiền của mình được

Về mặt thiết kế thì cái này không nên gọi là game, vì game là phải cho người dùng được thử nghiệm, khám phá. App này thì cũng gọi là có tương tác, nhưng người dùng chỉ có một lựa chọn để bấm chứ không có tương tác và lựa chọn hành động theo ý của mình được. Nó chỉ dùng để học luật mà thôi.

Về mặt kỹ thuật thì app này dùng Adobe Air, và chạy ActionScript. Adobe Air là một môi trường runtime, còn ActionScript là một ngôn ngữ dựa trên JavaScript. Cơ bản không khác gì Electron với TypeScript ngày nay. Cả Adobe Air và Electron đều không chạy trên trình duyệt được mà phải xuất thành tệp chương trình. Nhưng viết bằng TypeScript thì có thể chuyển đổi sang JavaScript để chạy trên web dễ dàng, còn ActionScript thì không chắc. 

Do chỉ là bấm chuột nên app này làm trên PowerPoint cũng được.

Câu hỏi khác:
- App chỉ có tiếng Anh, trong khi bản giấy thì lại được dịch ra nhiều ngôn ngữ. Bên DanChurchAid đã nguồn lực để làm app và làm nghiên cứu cho 3 quốc gia thì sao lại không dịch được app?
- Vào trang của [VSLA](https://www.vsla.net/) thì không thấy giới thiệu gì về app? 
- Có vẻ như các chương trình VSLA này ở các nước đều đến từ các NGO nước ngoài? Khi nào thì nó phá hoại, khi nào không? 
- CARE có hoạt động ở VN. Nó có thử nghiệm mô hình này ở VN ko?

## Ý tưởng cho việc áp dụng ở Việt Nam
Nếu người ở các cộng đồng làng xã cũng không có thiết bị riêng, mù chữ và khó tiếp cận internet, thì việc dịch app thì đúng là tiết kiệm thời gian hơn. Nếu mà dịch thì chắc dịch thêm cả tiếng bản địa luôn?

Với các quỹ cộng đồng mà thành phần tham dự chủ yếu là người ở đô thị, thì có thể có những điều kiện và nhu cầu khác, như:
- Biết tiếng Anh, 
- Có internet
- Có điện thoại và laptop riêng
- Được tiếp xúc với game lâu rồi
- Không phải ngồi chung với nhau mỗi tuần
- Dễ tiếp cận hệ thống tín dụng hơn

Việc dùng app dịch có lẽ cũng đủ để hướng dẫn họ, chưa phát huy được hết tiềm năng đang có? Ví dụ:
- Thay vì dùng app chỉ phù hợp cho màn hình lớn thì tạo giao diện phù hợp cho điện thoại (mobile-first) và sử dụng được ngay trên web luôn, không cần phải tải về?
- Thay vì chỉ là một app dùng cho việc đào tạo, dùng xong rồi bỏ thì sao không tích hợp với các chương trình khác, như chương trình kết nối AMAP, chương trình tính lãi suất, chương trình quản lý tiền? Hoặc thậm chí là biến nó thành một môi trường giải thích khám phá được ([explorable explanations](https://explorabl.es/))?
  <iframe title="vimeo-player" src="https://player.vimeo.com/video/67076984?h=f57f26cc02" width="640" height="360" frameborder="0"    allowfullscreen></iframe>

Mấy cái đồng coin hay có mấy cái game dùng để làm quen với nó, chắc cũng áp dụng ý tưởng tương tự.

Đọc thêm: 
- [[Môi trường nghĩ là nơi ta có thể có những loại suy nghĩ mới, những suy nghĩ mà trước đây ta không thể hình thành]]
- [[Cần nghĩ về công việc như là một cách để kiểm định giả thiết, chứ không phải chỉ để hoàn thành]]
