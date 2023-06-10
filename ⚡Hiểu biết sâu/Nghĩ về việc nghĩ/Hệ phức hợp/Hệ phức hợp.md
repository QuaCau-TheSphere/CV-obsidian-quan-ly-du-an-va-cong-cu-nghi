---
share: True
---
Chủ đề:: [[Sự tự tổ chức sự tạo mẫu hình một cách phi tuyến]]
- Theo lý thuyết mạng lưới: có độ kết nối cao 
- theo lý thuyết tiến hóa: hệ bắt đầu từ đơn giản sau đó có sự chuyên môn hóa và kết hợp lẫn nhau
# Hệ mở
| Hệ đóng                                                                                               | Hệ mở                                            |
| ----------------------------------------------------------------------------------------------------- | ------------------------------------------------ |
| có ranh giới rõ ràng, có thể kiểm soát hoàn toàn trong ranh giới đó. Có trật tự và sự đoán trước được |                                                  |
| Nhấn mạnh đến thành phần                                                                              | Nhấn mạnh đến sự liên kết                        |
| Các thành phần không có sự tự chủ                                                                     | Các thành phần có tính tự chủ                    |
| Có lợi thế trong môi trường ổn định                                                                   | Có lợi thế trong môi trường không ổn định        |
| Được định nghĩa bởi các thành phần                                                                    | Được định nghĩa bằng dòng tài nguyên chảy qua nó |
|                                                                                                       |                                                  |

# Hệ phi tuyến, động 
- Tuyến tính: quan hệ nhân quả, thường không để ý tới thời gian diễn ra. Chịu ảnh hưởng của tư duy Newton
- Phi tuyến: có phản hồi, không dự đoán được mối liên hệ giữa nhân và quả

| Tuyến tính                                                                                                                                                                        | Phi tuyến/song song/động/đáp ứng                                                                                               |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| Mọi object đều có chung một vòng đời, với một đầu vào và một đầu ra                                                                                                               | Có thể thay đổi vòng đời của nó                                                                                                |
| Thiết kế để chống lại sự thay đổi của môi trường, tạo cân bằng nội môi                                                                                                            |                                                                                                                                |
| Có giới hạn trần và giới hạn sàn. Trong giới hạn đó thì sẽ giữ được sự hoạt động trong thời gian càng lâu càng tốt trước khi bị hỏng. Ra ngoài mức độ này thì sẽ được xem là hỏng |                                                                                                                                |
| thiết kế nhanh và dễ, cần ít sự đầu tư và hiệu quả hơn trong ngắn hạn                                                                                                             | suboptimal but robust                                                                                                          |
| Các tương tác giữa các thành phần (quá trình và chức năng) diễn ra một cách độc lập và trên một chuỗi tuần tự                                                                     | Diễn ra giữa các vùng trong mạng lưới, nhiều vùng lặp lên nhau                                                                 |
|                                                                                                                                                                                   | Có thể có kiểu hệ thống của các hệ thống                                                                                       |
| Thiếu sự tích hợp với môi trường. Có thể gây làm hại tới những hệ xung quanh                                                                                                      | Điều phối với các hệ khác                                                                                                      |
|                                                                                                                                                                                   | Biến đổi theo thời gian                                                                                                        |
| Cùng một input sẽ cho ra cùng một output                                                                                                                                          | Output là kết quả của sự hợp trội của hệ từ các tương tác của thành phần. Các input giống nhau sẽ luôn cho ra output khác nhau |
| Có thể biết tổng số lượng và đánh dấu các thành phần. Có thể chỉ ra đâu là bên trong hệ đâu là bên ngoài hệ                                                                       |                                                                                                                                |
|    Đoán được tương lai                                                                                                                                                                              |   Tương lai là không chắc chắn                                                                                                                             |
Có thể xảy ra nhiều hiệu ứng bươm bướm và thiên nga đen 


# Hệ dịch vụ
Thế giới hậu công nghiệp bị bão hoà bởi sản phẩm. Con người không hứng thú đến việc có thêm sản phẩm nữa, mà hứng thú tới việc có thêm tính năng. Chúng ta không cần phải có xe để có thể hưởng được dịch vụ đi xe

| Sản phẩm                                   | Dịch vụ                                                                                                                                             |
| ------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| Sờ được                                    |                                                                                                                                                     |
| Đo đạc dễ dàng                             | Chỉ có giá trị khi được dùng                                                                                                                        |
| Người dùng ở ngoại vi, sử dụng thụ động    | Người dùng ở trung tâm. Muốn bán dịch vụ thì phải hiểu được bối cảnh cụ thể của họ                                                                  |
| Once-off                                   | thời gian, mqh. Nike bán dịch vụ huấn luyện sau khi mua giày, khiến người dùng phải mua lại dày của Nike để tiếp tục sử dụng dịch vụ huấn luyện này |
| Không tự đáp ứng. Giống nhau trong mọi lúc |                                                                                                                                                     |

# Hệ đáp ứng
| Hệ kháng | Hệ đáp ứng |
| -------- | ---------- |
|          |            |
- Web 1.0: static
- Web 2.0: dynamic
- Web 3.0: responsive 
	Synchronization: their state with other elements they are exposed to

Google khám phá vì muốn hỏi be where the next great thing is going to happen

[[Sự đáp ứng đòi hỏi ta nhận diện được rằng ta không thể hoàn toàn biết được tương lai của mình]]. Chuyển chiến lược từ cố gắng đoán tương lai đến việc thích ứng với nó

Có một biên giới để có sự cân bằng nội môi. Biên giới này sẽ có vòng lặp dương và càng ngày càng khóa mình vào đó
Sự kháng cự lại với môi trường bằng cách điều chỉnh môi trường để giảm số input có thể có 

Bởi vì sự khai thác sẽ đưa ra hệ quả nhanh hơn và chính xác hơn sự khám phá, nên về mặt tính chất các quá trình đáp ứng sẽ cải thiện sự khai thác nhanh hơn sự khám phá. Mà vì mỗi một độ tăng về năng lực của một hoạt động làm tăng khả năng nhận phần thưởng khi tham gia hoạt động đó, nên nó sẽ dẫn tới một vòng lặp dương
