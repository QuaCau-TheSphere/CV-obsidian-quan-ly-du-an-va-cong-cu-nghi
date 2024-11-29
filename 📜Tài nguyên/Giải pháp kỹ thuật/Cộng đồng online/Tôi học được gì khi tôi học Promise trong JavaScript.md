---
share: true
created: 2024-11-24T21:23
updated: 2024-11-28T13:51
---
Tôi đang trong cơn muốn tìm hiểu về đường cú pháp, và tôi google [`syntactic sugar`](https://www.google.com/search?client=firefox-b-d&q=syntactic+sugar). Tôi bấm các liên kết tôi thấy hấp dẫn, và trong đó có bài [On syntactic sugar](https://evertpot.com/syntactic-sugar/). Dường như trong những kết quả được lên trang nhất Google, thì tôi thấy muốn đọc các blog cá nhân hơn, vì cảm giác mình sẽ dễ thu lượm được những thứ mà những nền tảng blog khác như dev.to, freeCodeCamp, Quora, v.v. ít khi cung cấp. Tôi nghĩ nhiều bài trên đó cũng đáng xem, nhưng để biết được những thứ thực sự rất rốt ráo thì . Bài viết dẫn tới hai bài này:
- [Why Async/Await Is More Than Just Syntactic Sugar](https://www.zhenghao.io/posts/await-vs-promise)
- [JS classes are not “just syntactic sugar”](https://webreflection.medium.com/js-classes-are-not-just-syntactic-sugar-28690fedf078)

Tôi thấy hứng thú đọc cả hai. Bài đầu tiên đọc cũng không thấy hiểu lắm, nhưng cũng không khó hiểu khi nó có nói là nó giả định người đọc đã có kiến thức nền tảng về `Promise`. Tác giả bảo rằng anh không có ý định cạnh tranh với các bài hướng dẫn trên [MDN](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous) và [javascript.info](https://javascript.info/promise-basics).

Tôi đã biết về hàm bất đồng bộ. Tôi đã thành thạo việc sử dụng await. Tôi đã hiểu về callback, và đã hiểu await là cách để sử dụng hàm bất đồng bộ với tư duy khi viết hàm đồng bộ. Dù chưa hiểu về promise hay callback hell thì tôi cũng đã hiểu là promise giúp giải quyết callback hell. Tôi biết rằng nếu gặp phải hàm bất đồng bộ thì cứ thêm await phía trước là nó chạy được. 

Nên là dù tôi cũng muốn hiểu thêm về `Promise`, tôi chưa thấy mình cần phải hiểu nó ngay bây giờ lắm. Tôi còn nhiều bài khác cần đọc, còn nhiều việc khác phải làm, và nhiều người khác đang rất cần những sản phẩm tôi tạo ra. 

Nhưng sự tò mò của tôi đã chiến thắng. Cũng đâu phải Dù sao cái `promise` này cứ thỉnh thoảng lại gặp phải. Biết một lần cho xong, những lần sau sẽ nhanh chóng lĩnh hội hơn. 
[[Hiểu biết sâu làm ta thấy khoái cảm]], [[Hiểu biết không chỉ để mình làm một cái gì đó, mà còn để mình không làm một cái gì đó]].Việc được tiếp cận tới những nguồn mới, mà xem lướt qua có vẻ có tiềm năng, đã dẫn đến kết cục là tôi là mở chục tab trên trình duyệt cùng lúc. 
[[Con người chuyển từ kỹ năng này sang kỹ năng khác ngay cả khi họ chỉ có một khái niệm mơ hồ về đích đến cuối cùng]]

[[Trải nghiệm truy cập web giống như trải nghiệm được dịch chuyển tức thời đến một nơi xa lạ]]. Việc đầu tiên bạn làm là định thần mình đang ở đâu. Nhưng khác với việc đến những vùng đất mới, bạn có thể dùng cả có thể để định hướng, thì ở trên web, bạn chỉ có thể định hướng bằng mắt 

Việc phải đọc code mẫu cần ít phải hiểu các hàm khác càng nhiều càng tốt.
Không đủ kiên nhẫn để đọc từ đầu
Khi đã thấy đủ để xong việc rồi thì không đủ kiên nhẫn để đọc tiếp
[[Việc mò mẫm vui, đỡ phải nghĩ và thường là hiệu quả hơn là đọc hướng dẫn cẩn thận]]. Nhưng vì việc [[Đọc lướt không giúp ta tiếp thu được gì cả]], nên ta sẽ thấy nhức đầu khi bật trang mới dù ta không cảm thấy áp lực gì cả. Dễ thấy nhất khi cần ngồi nghiên cứu và ta bật rất nhiều tab. [[Ta dường như khó có thể chuyển trạng thái từ việc đọc lướt sang việc đọc cẩn thận một cách suôn sẻ và tự nhiên|Vấn đề của việc đọc lướt không phải vì nó có khả năng thành công cao, mà là vì khi mình đã kết luận là khả năng thành công không cao rồi, thì sự chuyển trạng thái sang thực sự đọc cẩn thận không suôn sẻ và tự nhiên]]  

[[Dùng thuật ngữ chính xác hơn dùng từ bình dân, nhưng ngay cả chuyên gia cũng không phàn nàn về việc dùng từ bình dân, miễn là việc đó không tạo ra sự mơ hồ]]
[[Sự dễ hiểu làm tăng sự đáng tin, dù có thể nó không hợp lý]]

[[Ta hiểu một đoạn 100 chữ nếu có không quá 3 từ không biết]]
Ban đầu, bài viết này được đặt tiêu đề "Chuyện tôi tự học Promise trong JavaScript". Nhưng việc miêu tả hành trình tự học giữa các tab này tôi thấy vụn vặt quá. Tôi không thấy việc đọc chúng sẽ cho bạn thứ gì hữu ích. Nó sẽ có hữu ích với người làm nghiên cứu về trải nghiệm người dùng chẳng hạn. Theo trình tự thời gian khó mà tạo ra những tình tiết hấp dẫn.
Nó không nói được gì về những gì tôi đã biết trước đó hoặc sau đó 

### [Promise](https://javascript.info/promise-basics)
bắt đầu bằng hình ảnh những người hâm mộ đón chờ một bài hát, nhưng ca sĩ thì mệt mỏi bởi những mong đợi này.

### [Asynchronous Programming :: Eloquent JavaScript](https://eloquentjavascript.net/11_async.html)
Mở đầu bằng việc trích 2 câu của Lão Tử ở chương 15:
> Ai có thể đợi trong im lặng để chờ bùn lắng?
> Ai có thể giữ tĩnh cho đến lúc hành động

Đoạn tiếp theo cũng chỉ nói lại về callback, promise. Tôi đọc thì thấy cũng không quá dễ hiểu cho người mới. không nghĩ nó dễ hiểu 
Một câu chuyện về một con quạ tên là Carla. 
### [Introducing asynchronous JavaScript - Learn web development | MDN](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Introducing)
Ví dụ chỉ đơn giản là một đoạn code chạy lâu, nhưng làm bạn hiểu thêm được về những vấn đề kỹ thuật khác. Ngay sau khi bước qua đoạn đó là ví dụ ngay đến event handler
Kết nối ngay tới những khái niệm quan trọng khác đã được nói trước đó
Không có nhiều tình tiết
Các khái niệm tự nó đã tạo ra tình tiết rồi



Cuối cùng, tôi chọn quay về lại trang javascript.info. Tôi thấy họ đã làm được điều đó tốt nhất. 
Viết được xong cho bài "Đối số của Promise là một hàm. Nó được gọi là hàm thực thi (executor)" thì tôi nghĩ đã đủ rồi, không cần hiểu thêm nữa. Khi nào cần dùng tới then chain thì lại quay lại đọc tiếp
### MDN Learn
[JavaScript — Dynamic client-side scripting - Learn web development | MDN](https://developer.mozilla.org/en-US/docs/Learn/JavaScript "JavaScript — Dynamic client-side scripting - Learn web development | MDN")
Yêu cầu phải có khái niệm về HTML và CSS rồi

[Foundations of asynchronous programming in JavaScript](https://exploringjs.com/js/book/ch_async-js.html#ch_async-js)
## Bình luận
Tất nhiên là khi đọc cái này rồi đọc cái kia thì mình cũng đã tiếp thu được phần nào rồi. Không có cái đầu trống trơn không biết gì. Nhưng nó cũng không quá đầy, vì đọc gần nhau, nên tận dụng việc chưa kịp thấm bài 1 để đánh giá sự dễ hiểu của bài 2
[[Việc mò mẫm vui, đỡ phải nghĩ và thường là hiệu quả hơn là đọc hướng dẫn cẩn thận]]
Một cái tiêu đề phải khiến ta tự thấy mình phải đọc kỹ nó
Dùng ManicTime để dò lại lịch sử
[[Tình tiết là các sự kiện cá nhân]]
[[Trí nhớ tình tiết và thủ tục thường để não nhớ. Trí nhớ ngữ nghĩa và tương lai thường để cho não ngoài]]

Xanadu
Việc chỉ biết về `await` khiến mình chỉ biết sử dụng hàm bất đồng bộ do người khác viết sẵn, chứ không tự mình tạo ra một hàm bất đồng bộ được.
[Diátaxis](https://diataxis.fr/)

Việc tự học làm nhức đầu. Các buổi chia sẻ kx năng
Liệu đọc bài của tôi có dễ hiểu cho bạn không? Tôi... không biết
[[Thông diễn học bắt nguồn từ việc chú giải kinh thánh]]

[[Một văn bản không nên chỉ là thứ để truyền đạt thông tin hay hiểu biết một chiều và thụ động, mà còn nên trở thành một sân chơi cho người đọc khám phá]]