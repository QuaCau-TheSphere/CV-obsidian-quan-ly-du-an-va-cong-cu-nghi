---
share: true
created: 2023-07-21T22:07
updated: 2023-12-17T12:16
---
## Nguyên lý SRP – Single Responsibility Principle

### Ví dụ

Hãy giả sử bạn làm việc ở một công ty nào đó. Bạn đảm nhiệm đồng thời công việc của kế toán và thủ kho. Như vậy bạn đồng thời phải biết và tuân thủ quy trình nghiệp vụ của cả hai bên. Bất kỳ bên nào có sự thay đổi về yêu cầu nghiệp vụ bạn sẽ phải thay đổi theo. Ôm nhiều vai cùng lúc vừa vất vả, vừa không chuyên tâm, vừa khó thay đổi.

Lấy một ví dụ khác. Giả sử bạn phát triển một phần mềm quản lý. Phần mềm này có chức năng kết xuất báo cáo (từ dữ liệu) và in ấn báo cáo. Tôi tin rằng nhiều bạn sẽ nhồi chúng vào cùng một class vì cùng là làm việc với báo cáo! Như vậy class này có thể thay đổi vì hai lý do: (1) nội dung của báo cáo thay đổi, (2) định dạng của báo cáo thay đổi.

### Nguyên lý SRP

Nguyên lý chữ S cho rằng, việc có nhiều lý do khác nhau dẫn đến thay đổi một class như trên là một thiết kế tồi. Hay nói cách khác, chỉ có một lý do duy nhất để thay đổi một class. Từ đây cũng dẫn đến một cách giải thích khác: mỗi class chỉ nên chịu trách nhiệm cho một phần duy nhất của phần mềm.

Quay trở lại hai ví dụ trên, chức năng kết xuất báo cáo nên được đặt trong một class riêng, chức năng in báo cáo đặt trong một class khác. Hai nhiệm vụ khác nhau không đặt chung trong một class. Một người không nên đảm trách nhiều nhiệm vụ khác nhau.

### Vận dụng

Lỗi thường gặp nhất khi các bạn học (và sử dụng) OOP là nhồi nhét đủ mọi thứ vào một class. Ví dụ, nhồi hết code giao diện với code xử lý nghiệp vụ và code xử lý dữ liệu. Đây là tình huống gặp đặc biệt nhiều khi dùng [console](https://tuhocict.com/net-console-mvc-library-1/) hay [windows forms](https://tuhocict.com/giai-phap-winforms-1-phan-tich-van-de-bai-toan-minh-hoa/).

Hãy cố gắng tách code ra nhiều class nhỏ theo chức năng của chúng sao cho mỗi class chỉ đảm nhiệm một nhiệm vụ xác định. Ví dụ, (1) class chuyên cho xuất thông tin của danh sách dữ liệu, (2) class chuyên cho nhập dữ liệu, (3), class chuyên cho truy xuất dữ liệu, v.v..

Việc tạo nhiều class nhỏ cũng có lợi thế so với một vài class lớn khi bảo trì code. Tuy nhiều class hơn nhưng mỗi class lại đơn giản hơn, do đó code ít bị lỗi hơn. Khi chỉnh sửa class nhỏ sẽ đơn giản hơn.

Để làm được việc này bạn phải phân tích rất rõ yêu cầu của bài toán. Từ đó đưa ra những chức năng chi tiết và hệ thống hóa chúng. Từ đó bạn xác định những class cần xây dựng sao cho mỗi class đảm nhiệm đúng một nhiệm vụ trong đó.

Nguồn:: [[tuhocict]], [Bộ nguyên lý SOLID - lập trình viên tương lai cần biết | Tự học ICT](https://tuhocict.com/bo-nguyen-ly-solid-lap-trinh-vien-tuong-lai-can-biet/)
