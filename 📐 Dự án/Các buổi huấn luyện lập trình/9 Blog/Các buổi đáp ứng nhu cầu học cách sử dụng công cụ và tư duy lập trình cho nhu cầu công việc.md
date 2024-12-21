---
share: true
created: 2023-07-26T15:55
updated: 2025-09-17T09:40
cssClasses:
  - wide-table
---
Nếu bạn muốn:
- Quản lý và xử lý được thông tin, dữ liệu, kiến thức của mình một cách hiệu quả
- Không phải tốn tiền thuê cho những thứ mà mình có thể làm được, hoặc thậm chí tự mình làm sẽ tốt hơn. Không muốn bị phụ thuộc vào người khác
- Có những gợi ý tốt hơn trong việc pháp triển cá nhân và sự nghiệp, đem lại nhiều cơ hội, nhiều sự thú vị và ý nghĩa cho bạn hơn

Và để đạt được điều này, bạn thấy mình cần:
- Vượt qua được sự hoang mang khi không biết mình cần phải bắt đầu từ đâu
- Không còn thấy ngộp bởi quá nhiều thuật ngữ khi tự tìm hiểu
- Không còn thấy việc lập trình giống như làm phép thuật, là một thứ kỳ diệu mình không bao giờ hiểu được
- Hiểu cách lập trình viên tư duy và cách các hệ thống vận hành hơn là viết code thành thạo (vì bạn chỉ muốn làm xong việc của bạn chứ không có ý định kiếm tiền, kiếm việc từ nó)

Thì các buổi đáp ứng nhu cầu học cách sử dụng công cụ và tư duy lập trình cho nhu cầu công việc là dành cho bạn. Chúng là các những buổi tư vấn, hướng dẫn, đào tạo 1:1 cho cá nhân hoặc nhóm, với mong muốn **phổ cập kiến thức xây dựng, quản lý thông tin và xử lý dữ liệu cho các cá nhân hoặc nhóm có nhu cầu cá nhân hoá cao.** Sự cá nhân hoá này là quan trọng để bạn không cảm thấy mình đang lãng phí thời gian cho những thứ bạn thấy không quan trọng, để bảo vệ sự tập trung của bạn vào công việc quan trọng hơn.

> [!IMPORTANT] Những thứ sẽ được chú trọng trong các buổi này
> - **Những khái niệm thiết yếu trong việc xây dựng mental model, đặc biệt là:**
>     - Những khái niệm cơ bản mà nếu không được giải thích thì không thể tự đoán ra được. Công việc ta cần làm đòi hỏi ta phải làm theo những hướng dẫn mặc định rằng ta đã hiểu được chúng rồi, và không cung cấp thêm lời giải thích hoặc xây dựng đủ bối cảnh để ta có thể đoán ý nghĩa của nó. Thường để hiểu được các khái niệm cơ bản này ta sẽ phải quay lại học bài bản, nhưng lúc đó việc học bài bản lại phân tán sự tập trung của ta khỏi công việc cần làm
>     - Các so sánh, ẩn dụ tới một cái gì đó dễ hiểu, dễ liên tưởng hơn
>     - Sự khác biệt, tương phản hoặc tăng tiến về cường độ của những thứ có vẻ na ná nhau hoặc mâu thuẫn nhau. Phân biệt những cái tên khác nhau cho cùng một thứ, và những thứ khác nhau có cùng một cái tên
>     - Những thuật ngữ dùng không được chuẩn xác. Có những cách dùng từ mà với người đã hiểu rồi thì sự thiếu chính xác cũng không thành vấn đề, thậm chí còn tiện lợi, nhưng người mới học thì thấy loạn (các [misnomer](https://en.wikipedia.org/wiki/Misnomer))
>     - Ý đồ thiết kế ([design rationale](https://en.wikipedia.org/wiki/Design_rationale "Design rationale - Wikipedia")) để hiểu được điểm mạnh, điểm yếu của các giải pháp khác nhau cho cùng một vấn đề, và vì sao các tác giả của chúng chấp nhận những đánh đổi đó
> - **Các lỗi thường gặp mà việc tìm hiểu đòi hỏi phải có hiểu biết sâu về vấn đề (pitfall)**
> - **Những nguồn tốt dể học một cách bài bản**
> - **Những lĩnh vực, hướng tư duy ít được để ý**
> 
> Chúng là những thứ mà bạn ước rằng ngày xưa có ai nói với mình như vậy để mình hiểu ra nhanh. Chúng thể hiện được sự vận động, chuyển động của khái niệm.

## Một số nhu cầu ví dụ và những kiến thức cần có để làm được chúng
### Các nhu cầu công việc ví dụ
```dataview
LIST rows.file.link
FROM "📜Tài nguyên/Nhu cầu công việc" 
GROUP BY split(file.folder, "/")[2]
where file.name != "Nhu cầu công việc"
where !contains(file.folder, "Hậu cần")
```
### Các nhu cầu công nghệ ví dụ
```dataview
LIST rows.file.link
FROM "📜Tài nguyên/Nhu cầu công nghệ" 
GROUP BY split(file.folder, "/")[2]
where file.name!="Nhu cầu công nghệ" 
```

### Tiêu chí lựa chọn
- Là những nhu cầu xuất hiện trong quá trình tạo ra một sản phẩm,
- Thường đủ phức tạp để các giải pháp làm sẵn hoặc AI không đáp ứng hiệu quả được 
- Thường xuất hiện ở các tổ chức, dự án nhỏ, vốn không có nhiều tiền để thuê ngoài
- Thường tự làm thì sẽ làm chủ động và hiệu quả hơn là để người khác làm
- Việc tự học để giải quyết nhu cầu thường tạo cảm giác bị phân tán sự tập trung khỏi công việc quan trọng hơn

Bảng này so sánh đặc điểm các mô hình học tập khác nhau để bạn lựa chọn cho phù hợp:

| Loại hình →<br>Tính chất ↓                          | Các buổi đáp ứng nhu cầu       | Lớp học trả tiền                | Chuỗi video                                                | Cộng đồng thảo luận                                 |
| --------------------------------------------------- | ------------------------------ | ------------------------------- | ---------------------------------------------------------- | --------------------------------------------------- |
| Ví dụ                                               | Nhóm này, các nhóm tự học khác | Các lớp học chính quy, workshop | Các khoá học trên YouTube, Coursera, Codecademy, edX, v.v. | Stack Overflow, Reddit, server Discord của phần mềm |
| Không đòi hỏi phải nghiên cứu trước khi đặt câu hỏi | ✔                              | ✔                               | ❌                                                         | ❌                                                  |
| Câu hỏi được giải đáp tức thời                      | ✔                              | ✔                               | ❌                                                         | ❌ (nhưng thời gian chờ thường cũng nhanh)          |
| Có thể xem lại sau                                  | ✔                              | ✔                               | ✔                                                          | ✔                                                   |
| Nội dung được cá nhân hoá                           | ✔                              | ❌                              | ❌                                                         | ✔                                                   |
| Khi cần là có ngay                                  | ❌                             | ❌                              | ✔                                                          | ✔                                                   |
| Trình độ người hướng dẫn cao                        | Tuỳ                            | ✔                               | ✔                                                          | ✔                                                   |
| Không cần dùng tiền để được tham gia                | ✔                              | ❌                              | Tuỳ                                                        | ✔                                                   |

## Các buổi thảo luận đã diễn ra
Writing Logseq Collins Dictionary Plugin 
![Quả Cầu x Duy Phong: Writing Logseq Collins Dictionary Plugin - YouTube](https://youtu.be/obcpkYjSGQw?si=N7WF0UvNPOrb0izs)

Giới hạn của PKM nằm ở đâu: máy móc mình sử dụng hay chính người sử dụng nó? 
![Giới hạn của PKM nằm ở đâu: máy móc mình sử dụng hay chính người sử dụng nó? - YouTube](https://www.youtube.com/watch?v=DIKNl3nVSxw)

 Công nghệ và ký ức: trí nhớ của ta có còn nằm trong não của ta nữa không?
![Công nghệ và ký ức: trí nhớ của ta có còn nằm trong não của ta nữa không? - YouTube](https://www.youtube.com/watch?v=anEPsQCBPKI)

## Lộ trình
Vì đây là dự án phục vụ nhu cầu của bạn, nên số lượng buổi học, thời gian học, và hình thức học (trực tuyến hay trực tiếp) đều do bạn quyết định. 

Người ai có khả năng và mong muốn hướng dẫn lại cho người khác sẽ trở thành người hướng dẫn. Hiện tại, người hướng dẫn chính là Lý Minh Nhật ([LinkedIn](https://www.linkedin.com/in/nh%E1%BA%ADt-l%C3%BD/)).

Bọn mình cho rằng **bạn nên được quyền quyết định giá trị của buổi hướng dẫn**. Bọn mình khuyến khích bạn đề xuất giá trị của buổi hướng dẫn này với đa dạng hình thức chi trả/trao đổi nhu cầu (ví dụ: tiền hoặc các tác vụ hỗ trợ Quả Cầu theo thoả thuận). Để tham gia hãy điền vào phiếu đăng ký ở dưới. Sau khi xem xét các đăng ký, bọn mình sẽ lựa chọn để trao đổi và hợp tác với những nhu cầu phù hợp.

Đọc thêm các bài sau đây để hiểu hơn về ý tưởng này:
- [[Mô hình kinh doanh của các buổi đáp ứng nhu cầu học cách sử dụng công cụ và tư duy lập trình|Khi nào thì chiến lược định giá "trả tuỳ tâm" đạt được sự bền vững?]]
- [Các buổi chia sẻ kỹ năng miễn phí với nhau](https://xn--qucu-hr5aza.cc/cac-buoi-chia-se-ky-nang-mien-phi-voi-nhau/?utm_source=CW+%C2%BB+Obsidian%2C+qu%E1%BA%A3n+l%C3%BD+d%E1%BB%B1+%C3%A1n+v%C3%A0+c%C3%B4ng+c%E1%BB%A5+ngh%C4%A9&utm_medium=vault&utm_campaign=C%C3%A1c+bu%E1%BB%95i+h%C6%B0%E1%BB%9Bng+d%E1%BA%ABn+l%E1%BA%ADp+tr%C3%ACnh)

## Nơi thảo luận, đăng ký
![](https://i.imgur.com/pPo5h87.png)

## Tản mạn
Tiêu đề của bài gồm có 3 phần:
- Các buổi đáp ứng nhu cầu học
- cách sử dụng công cụ và tư duy lập trình
- cho nhu cầu công việc

Chúng ta hãy nói thêm về những ý này.

### Đáp ứng nhu cầu học không đồng nhất với giảng bài
Bởi vì những buổi này để đáp ứng nhu cầu của người tham gia, nên tất cả sẽ cùng thảo luận với nhau để đạt mục tiêu của mình. Trong những cuộc thảo luận mở như vậy, bất kỳ ai cũng có thể hỏi, và ai trả lời được thì trả lời. Có thể sẽ có một ai đó biết nhiều câu trả lời hơn những người còn lại, nhưng điều đó là không quan trọng. Việc được hỏi cũng sẽ đảm bảo rằng ai cũng hiểu được vấn đề, và họ có đủ thời gian để tiếp thu và nghiền ngẫm trước khi tiếp tục nội dung khác. Những người khác khi giải thích cho họ thì cũng sẽ hiểu sâu hơn, vì cách học tốt nhất là dạy.

Những tài nguyên bạn biết được bạn sẽ có không gian để chia sẻ và mọi người sẽ cùng bàn luận. Sẽ càng tốt nếu bạn đang có sẵn một dự án và cần biết cách áp dụng kiến thức đó vào dự án của mình thế nào. Chính vì như vậy, nên cho dù ban đầu nó có một mục tiêu được định trước, nhưng việc thảo luận sẽ luôn làm nảy nở những mục tiêu mới. Nếu bạn cảm thấy mục tiêu ban đầu của mình không còn là mục tiêu của những người khác thì sẽ tách ra.

### Giải quyết nhu cầu công việc không đồng nhất với kiếm tiền bằng lập trình
Các buổi này được tạo ra để giúp bạn tự chủ về công nghệ, để bạn có thể giải quyết bài toán của mình. Bạn còn rất nhiều công việc, và lập trình là một công cụ quan trọng để làm được việc, nhưng lại không phải là bài toán quan trọng nhất. Bạn đến với lập trình không phải vì bạn muốn lập trình, mà là vì bạn cần giải quyết những vấn đề khác, mà những vấn đề đó cần lập trình. [[Mỗi một thắc mắc đều làm tăng thêm khối lượng nhận thức mà chúng ta có trong tâm trí, qua đó làm phân tán sự tập trung của ta khỏi thứ mà ta định làm]]. Thế nên, dù bạn không muốn nước đến chân mới nhảy, nhưng bạn cũng biết rằng nước mà không đến chân thì bạn sẽ không thể nhảy. Nơi đây chỉ là nơi để mọi người cùng nhảy với nhau khi nước chưa đến chân mà thôi (hoặc có thể là có những người nước đến chân luôn rồi).

Vì thế, ở đây, các bài học phải giải đáp được nhu cầu có thực của riêng bạn, chứ không phải chỉ là một ví dụ cho dễ hiểu xong rồi xóa đi. "Bài tập" giao cho bạn phải là thứ bạn đã muốn làm từ lâu rồi.

Nếu từ các buổi này bạn có thể kiếm thêm được tiền thì bọn mình mừng cho bạn, nhưng nó không đủ để bạn trở thành lập trình viên.

### Cách sử dụng công cụ và tư duy lập trình không đồng nhất với kiến thức lập trình căn bản
Để có thể phục vụ tốt nhất những người đang cần học lập trình cho một nhu cầu rõ ràng nào đó, nên nội dung sẽ đề cao đến tính "làm được việc" hơn là cung cấp một nền tảng vững chắc. Tất nhiên có nền tảng thì rất tốt, và trong quá trình thảo luận thì chắc chắn cũng phải giải thích những thứ nền tảng, nhưng chúng sẽ được cá nhân hoá vào mục tiêu của người tham gia. 

Nếu bạn muốn bắt đầu từ nền tảng trước thì có lẽ nên đi học các lớp học lập trình. Những lớp như vậy có rất nhiều, và cũng rất nhiều giảng viên tâm huyết và trình độ hơn bọn mình. Bọn mình còn phải đi học họ thì bọn mình không nghĩ bạn cần phải tìm đến bọn mình. 

Xem thêm:: [[Hướng dẫn đọc code cho người thấy việc biết lập trình là quan trọng nhưng không thể biến nó trở thành ưu tiên cao nhất]]

[[Các buổi đáp ứng nhu cầu học lập trình]]

Bạn ưu tiên các tiêu chí nào sau đây:
- [ ] Làm sớm
- [ ] Gặp mặt
- [ ] Cá nhân hoá
- [ ] Riêng tư