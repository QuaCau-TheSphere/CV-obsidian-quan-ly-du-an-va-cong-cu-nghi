---
share: true
created: 2023-07-21T22:37
updated: 2023-10-06T16:09
---
Bộ nguyên lý SOLID có vai trò rất quan trọng khi phát triển ứng dụng và được sử dụng phổ biến trong thiết kế và lập trình hướng đối tượng. Khi sử dụng hợp lý, bộ nguyên lý SOLID giúp phần mềm dễ bảo trì, dễ mở rộng. Lập trình viên chuyên nghiệp bắt buộc phải biết và vận dụng thành thạo các nguyên lý SOLID. Đây là bộ nguyên lý mà [sinh viên theo học các hướng/chuyên ngành phát triển ứng dụng cần biết](https://tuhocict.com/muon-thanh-lap-trinh-vien-nen-hoc-nhung-gi/). Bài viết này có mục tiêu giới thiệu bước đầu cho các bạn sinh viên các nguyên lý này để dần có ý thức áp dụng chúng khi code.

## Giới thiệu chung về bộ nguyên lý SOLID

![Bộ nguyên lý SOLID](https://tuhocict.com/wp-content/uploads/2019/06/B%E1%BB%99-nguy%C3%AAn-l%C3%BD-SOLID-300x169.png)

Khi học lập trình hướng đối tượng (Object-Oriented Programming, OOP) trong trường, các bạn đều phải nắm chắc các _nguyên lý của OOP_. Các nguyên lý chính bao gồm tính trừu tượng (Abstraction), bao đóng (Encapsulation), đa hình (Polymorphism), kế thừa (Inheritance).

SOLID, ở khía cạnh khác, lại là các _nguyên lý thiết kế_ trong OOP. Hiểu một cách đơn giản, các nguyên lý của OOP mô tả cách thức hoạt động, còn các nguyên lý SOLID mô tả cách thức vận dụng của OOP trong lập trình thực tế.

Việc tuân thủ theo SOLID giúp thiết kế (và code) phần mềm dễ đọc, dễ test, uyển chuyển, dễ bảo trì. Bạn nên hiểu rằng [[Code phần mềm chỉ chiếm khoảng 1 phần 3 thời gian, còn lại là dành cho bảo trì (thêm bớt chức năng, fix lỗi, v.v.)|khâu code phần mềm chỉ chiếm khoảng 13 thời gian. Còn lại là dành cho khâu bảo trì (như thêm bớt chức năng, fix lỗi)]]. SOLID giúp ích cực lớn cho khâu này.

Các nguyên lý SOLID khá khó tiêu đối với sinh viên hay thậm chí đối với lập trình viên mới vào nghề. Các [chương trình đào tạo đại học](https://tuhocict.com/xay-dung-chuong-trinh-tu-dao-tao-cong-nghe-thong-tin/) cũng thường chỉ dạy code và công nghệ chứ không chú trọng về cách vận dụng. Vì vậy, việc tự học các vấn đề này là vô cùng quan trọng đối với sinh viên theo các hướng/chuyên ngành liên quan đến phát triển ứng dụng. Việc hiểu và vận dụng SOLID cũng có thể được dùng để đo sự tiến bộ của bạn trên con đường lập trình viên.

Để nắm được SOLID, bạn bắt buộc phải nắm vững các nguyên lý và kỹ thuật lập trình hướng đối tượng của một ngôn ngữ nào đó. Nếu vẫn chưa rành về lập trình hướng đối tượng thì chưa vội đọc những nguyên lý SOLID làm gì (vì có đọc cũng chẳng hiểu).

## Các nguyên lý SOLID

SOLID là cách gọi tắt của một bộ năm nguyên lý sau:

- S (SRP) – [Single Responsibility principle](https://en.wikipedia.org/wiki/Single_responsibility_principle)
- O (OCP) – [Open-Closed principle](https://en.wikipedia.org/wiki/Open%E2%80%93closed_principle)
- L (LSP) – [Liskov Substitution principle](https://en.wikipedia.org/wiki/Liskov_substitution_principle)
- I (ISP) – [Interface Segregation principle](https://en.wikipedia.org/wiki/Interface_segregation_principle)
- D (DIP) – [Dependency Inversion principle](https://en.wikipedia.org/wiki/Dependency_inversion_principle)

Tên gọi các nguyên lý này khá khó dịch sang tiếng Việt. Vì vậy ở đây chúng ta dùng nguyên bản tiếng Anh.

SOLID không gắn với ngôn ngữ hoặc công nghệ cụ thể nào. Các nguyên lý SOLID là chung cho bất kỳ ngôn ngữ lập trình hướng đối tượng nào, dù là C#, Java hay C++. Tuy nhiên, cách thức thực hiện cụ thể sẽ phụ thuộc một phần vào các tính năng mà ngôn ngữ hỗ trợ.

Nói luôn là chúng ta sẽ không viết lại mô tả chính thức của các nguyên lý này như trong sách. Chúng ta sẽ cố diễn đạt nó bằng những từ ngữ đơn giản dễ hiểu. Các bạn cũng nên hiểu rằng đây là các _nguyên lý_, không phải _kỹ thuật_ cụ thể. Bạn hiểu nguyên lý để định hướng cho cách làm.

Nguồn:: [[tuhocict]], [Bộ nguyên lý SOLID - lập trình viên tương lai cần biết | Tự học ICT](https://tuhocict.com/bo-nguyen-ly-solid-lap-trinh-vien-tuong-lai-can-biet/)
