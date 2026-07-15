---
share: true
created: 2023-07-26T15:55
updated: 2026-07-08T23:59
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

Thảo luận chung
![Thảo luận về công cụ và tư duy lập trình cho nhu cầu công việc - YouTube](https://youtu.be/By_xf7OpOSY?si=5M2xmM-_X1c9_PPV)

## Cách thức tổ chức
Vì các buổi thảo luận này là để phục vụ cho nhu cầu của bạn, nên mọi quyết định về cách tổ chức đều do bạn quyết định. VD:
- Vấn đề của bạn là gì?
- Bạn đã thử những điều gì? (Kèm thêm ảnh chụp màn hình nếu có)
- Bạn có thể thảo luận vào những khung thời gian nào?
- Bạn có muốn có thêm người tham gia không? 
	- Nếu có thì ai sẽ phù hợp để tham gia?
	- Nên có bao nhiêu người tham gia?
- Bạn muốn tổ chức ở đâu?
- Bạn có muốn được ghi hình buổi thảo luận không?

Bạn có thể nhắn trực tiếp với người cùng thảo luận với bạn, hoặc vào trong kênh trò chuyện chuyên về các buổi này trong [Discord Quả Cầu](https://doi-thoai.deno.dev/discordQC.7g.1) để thảo luận thêm với những người bạn khác:
![](https://i.imgur.com/pPo5h87.png)

Đây là một số mẫu ví dụ khi đề xuất buổi thảo luận:
1. `Tôi muốn có một buổi hướng dẫn về vấn đề ... Tôi đã thử ... nhưng bị lỗi ... Tôi muốn có một buổi thảo luận riêng để có được sự cá nhân hóa cao và bảo mật ý tưởng. Tôi không muốn được ghi hình buổi thảo luận. Nếu có thể đến nhà tôi để thảo luận thì thật tốt. Lịch trống tuần này của tôi là ..., nhưng nếu làm được càng sớm thì càng tốt.`
2. `Tôi muốn hiểu thêm về ... Tôi không có thời gian để tìm hiểu hay thử nghiệm gì. Tôi muốn có thêm những bạn khác cùng tham gia để biết thêm nhiều ý tưởng, nguồn lực. Chắc tầm 5 người là được. Tôi muốn được ghi hình buổi thảo luận. Gặp nhau ở đâu, lúc nào cũng được. Lịch trống tháng này của tôi là ...`

Để trở thành người hướng dẫn, bạn chỉ cần có khả năng và mong muốn hướng dẫn lại cho người khác.

## Xem thêm
- Thông tin về người hướng dẫn chính: [CV của Lý Minh Nhật](https://nhucầu.quảcầu.cc/2%20Thực%20thể/Cá%20nhân/Nhật/Nguồn%20lực/CV?utm_source=Vault+C+Obsidian%2C+quản+lý+dự+án+và+công+cụ+nghĩ+(Dự+án)&utm_medium=Vault&utm_campaign=A1&utm_content=📐+Dự+án%2FCác+buổi+huấn+luyện+lập+trình%2F9+Blog%2FCác+buổi+đáp+ứng+nhu+cầu+học+cách+sử+dụng+công+cụ+và+tư+duy+lập+trình+cho+nhu+cầu+công+việc.md&utm_term=), [Những chủ đề *khác* Nhật chia sẻ được](https://nhucầu.quảcầu.cc/2%20Thực%20thể/Cá%20nhân/Nhật/Nguồn%20lực/Chủ%20đề%20nói%20chuyện?utm_source=Vault+C+Obsidian%2C+quản+lý+dự+án+và+công+cụ+nghĩ+(Dự+án)&utm_medium=Vault&utm_campaign=A1&utm_content=📐+Dự+án%2FCác+buổi+huấn+luyện+lập+trình%2F9+Blog%2FCác+buổi+đáp+ứng+nhu+cầu+học+cách+sử+dụng+công+cụ+và+tư+duy+lập+trình+cho+nhu+cầu+công+việc.md&utm_term=)
- [[Làm sao để có một buổi khai vấn (mentor) tốt|Làm sao để có một buổi khai vấn (mentor) tốt?]]
- [Các buổi chia sẻ kỹ năng miễn phí với nhau](https://xn--qucu-hr5aza.cc/cac-buoi-chia-se-ky-nang-mien-phi-voi-nhau/?utm_source=CW+%C2%BB+Obsidian%2C+qu%E1%BA%A3n+l%C3%BD+d%E1%BB%B1+%C3%A1n+v%C3%A0+c%C3%B4ng+c%E1%BB%A5+ngh%C4%A9&utm_medium=vault&utm_campaign=C%C3%A1c+bu%E1%BB%95i+h%C6%B0%E1%BB%9Bng+d%E1%BA%ABn+l%E1%BA%ADp+tr%C3%ACnh)
- [[Việc đổi mới sáng tạo bắt đầu bằng việc mỗi người có thể tự mình điều khiển được máy tính, chứ không phải có thêm một sản phẩm no code hay AI nữa]]
- [[Hướng dẫn cho người thấy việc biết lập trình là quan trọng nhưng không thể biến việc học trở thành ưu tiên cao nhất]]
- [[Tản mạn về các buổi đáp ứng nhu cầu học cách sử dụng công cụ và tư duy lập trình cho nhu cầu công việc]]