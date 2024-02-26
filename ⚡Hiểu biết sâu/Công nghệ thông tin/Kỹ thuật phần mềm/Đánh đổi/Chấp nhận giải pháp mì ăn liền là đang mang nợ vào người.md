---
share: true
created: 2023-09-05T16:17
updated: 2024-02-10T23:32
---
![technical_debt.jpg](https://images.viblo.asia/68cd9326-84a6-4c75-ae34-ecfd3ee8fc4d.jpg)

## Mở đầu

Dạo gần đây đọc được một khái niệm khá thú vị **Technical Debt - Nợ Kĩ thuật**. Đây là một món nợ mà hầu hết các lập trình viên đều phải gánh trong suốt đời gõ phím của mình. Hẳn các bạn đang thắc mắc lập trình viên chúng mình đều là những thanh niên siêng năng chăm chỉ (chơi ngày cày đêm =))) , không cờ bạc (đánh xổ số tư nhân thôi =))) , không gái gú ( muốn mà không được (khoc))... hết giờ làm thì cắp cặp về nhà, không biết vay ai cái gì (thật ra là vay chằng, quịt, vờ quên) thì lấy đâu ra nợ ???

Muốn biết món nợ này từ đâu mà ra mời các bạn đọc bài viết này. Đây là một khái niệm thú vị nên biết.

## Technical Debt là gì ???

Khái niệm này được đưa ra bởi Ward Cunningham (Cha đẻ của wiki đầu tiên):

> Shipping first time code is like going into debt. A little debt speeds development so long as it is paid back promptly with a rewrite... The danger occurs when the debt is not repaid. Every minute spent on not-quite-right code counts as interest on that debt. Entire engineering organizations can be brought to a stand-still under the debt load of an unconsolidated implementation, object-oriented or otherwise.

Trong cuộc sống, đôi khi bạn sẽ phải mượn tiền để xài, sau đó cày cuốc trả. Số tiền này được gọi là nợ. Trong lập trình cùng thế, đôi khi ta chọn cách giải quyết “mì ăn liền”, giải quyết được vấn đề ngay, nhưng sẽ gây khó khăn cho quá trình phát triển và bảo trì về sau. Mỗi lần như vậy, ta tạo thêm 1 khoản “nợ kĩ thuật” cho dự án.

Technical bebt ban đầu rất ít, nhưng theo quá trình code thì càng ngày nó càng nhiều lên, trở thành nợ nần chồng chất. Một số ví dụ:

- Để tái sử dụng code đã viết, ta copy và paste code sửa đôi chút (thay vì phải tách thành module riêng). Cách này nhanh, nhưng khi có bug thì sửa… chết luôn vì code được copy ở đủ chỗ.
- Khi có requirement mới, thay với áp dụng sửa lại code cho dễ mở rộng, ta viết thêm hàm if. Cách này nhanh, nhưng mở rộng nhiều thì code sẽ một đống if.
- Có bug khủng liên quan tới kiến trúc hệ thống, thay vì fix bug và refactor thì ta try/catch nuốt lỗi và fix tạm ở phần ngọn, gọi là hotfix.

Technical Debt là điều tất yếu khó có thể loại bỏ hoàn toàn trong quá trình code. Mỗi quyết định ta đưa ra trong lúc code đều làm tăng số nợ này lên, vấn đề là tăng nhiều hay ít. Đồng thời chúng ta cũng không nên trả ngay số nợ này, cũng giống như việc nấu ăn vậy, chẳng ai lại đi rửa nồi trong lúc nấu cả (trừ khi bạn có duy nhất 1 cái và bạn đang cần dùng nó cho việc khác). Techinical debt có thể dời lại một khoảng thời gian nhất định, nhưng cũng ko nên quá lâu nếu để lâu, techinical debt tích lũy sẽ gây ra nhiều hậu quả nguy hiểm khôn lường.

## Tác hại “khủng khiếp” của nợ

Nhìn từ góc độ kĩ thuật nếu không trả nợ, cả vốn lẫn lãi sẽ dần chồng chất trong quá trình phát triển. Quá nhiều nợ làm chậm tốc độ của team, đồng thời ảnh hưởng đến tinh thần làm việc của các thành viên trong nhóm.

Trong nhiều dự án, vì ban đầu bị trễ deadline nên team phải code ẩu, sinh ra technical debt. Nợ làm cho tốc độ phát triển chậm dần lại, dẫn tới trễ dealine -> code ẩu -> thêm nợ, thành 1 vòng lẩn quẩn. Một tính năng có thể chỉ mất 1 ngày để hoàn thành, nhưng nếu technical debt quá nhiều sẽ mất tới 1 tuần.

Tới một mức nào đó, khi không trả được lãi nữa, ta sẽ bị “phá sản”. Lúc này, code hiện tại đã nát tới mức cực kì khó mở rộng hay bảo trì, phải đập đi viết lại. Đây cũng là nguyên nhân gây trễ deadline/thất bại cho nhiều dự án.

![Strip-la-boucle-sans-fin-700-finalenglish.jpg](https://images.viblo.asia/38ffeb3d-29cd-440e-b1cd-9012a141b92e.jpg)

Nhìn từ góc độ kinh tế, nợ kĩ thuật là rất rủi ro và có thể rất tốn kém. Nợ kĩ thuật được trả càng lâu sau khi phần mềm bắt đầu được sử dụng thì càng đắt đỏ. Một bug được phát hiện bởi developer trong lúc lập trình có thể có chi phí (phải fix) bằng 1/100 so với bug được phát hiện ra lúc thành phẩm đã đến tay người dùng cuối ( lúc đó cũng phải fix, nhưng với chi phí lớn hơn nhiều lần: cử người ra fix lỗi, vá lỗ hổng, deploy lại, v.v – mà hầu như không được trả thêm xu nào).

![debt-1500774_640.png](https://images.viblo.asia/af7eb16e-df4a-4e32-b660-2e60b4d6b0df.png)

## Thế nợ từ đâu mà tới ???

Có rất nhiều lý do dẫn tới nợ kĩ thuật, ví dụ như:

- Do khách hàng thay đổi requirement liên tục, kiến trúc dự án không kịp thay đổi cho phù hợp
- Do bị dealine dí gây áp lực nên code ẩu để hoàn thành task.
- Do các thành viên trong team không đủ nền tảng kĩ thuật tốt.

Nhưng tựu chung lại nợ vẫn cứ là từ chính chúng mình những developer gây ra (facepalm)

Đôi khi technical debt là do cố ý: Chấp nhận làm nhanh vì phải có sản phẩm giao khách hàng, giành dự án, vấn đề technical tính sau. Hoặc trong các công ty start-up, người ta xây dựng sản phẩm (MVP) nhanh chóng nhất có thể để khảo sát nhu cầu người dùng. Lúc này, chức năng và tốc độ phát triển mới là quan trọng nhất, code ẩu hay kiến trúc tệ không quan trọng.

## Nợ rồi thì làm sao trả ???

Như đã nói, code sẽ có bug, dự án rồi sẽ có technical debt. Để trả nợ thì có nhiều cách, có thể trả nợ bằng cách phân tích và tái cấu trúc hệ thống, hoặc viết thêm document, viết thêm test case, refactor code để code rõ ràng, dễ cải tiến.

Thế nhưng việc tái cấu trúc, refactor là những việc tiêu tốn nhiều thời gian và công sức, không phải lúc nào cũng làm được. Vì vậy những thời điểm như khi review code, thêm chức năng vào source cũ hay khi task đã ít hơn là thời điểm thích hợp để trả nợ. Lúc này chúng ta cần đọc lại code và rất có thể tìm ra cách trả nợ.

Tuy nhiên với những món nợ lớn, có khả năng gây ảnh hưởng tới tốc độ dự án, chúng ta cũng nên ưu tiên trả nó tránh tính trạng lãi mẹ đẻ lãi con:

![technical-debt-ceos-perspective.jpg](https://images.viblo.asia/33830520-1526-43a4-9ea3-893f12d32260.jpg)

## Có tránh được nợ không ???

Như đã nói, chúng ta không thể tránh hoàn toàn technical debt. Nhưng chúng ta có thể hạn chế nó bằng những phương pháp sau:

- Clean code: code viết ra không chỉ cho chúng ta đọc, mà còn cho cả những thành viên khác trong team. Việc viết code thiếu tường minh sẽ khiến cho người đọc không nắm bắt được chức năng mà function đó thực hiện có thể dẫn đến việc hiểu sai và sử dụng sai mục đích. Từ đó dẫn đến các bug tiềm ẩn khác.
- Coverage testing: viết test cho ứng dụng để hạn chế bug.
- Áp dụng [XP (Extreme Programming)](https://viblo.asia/hieubm/posts/PDOkqMBpkjx)

Và hãy luôn nhớ một điều: Mỗi lần code ẩu, code đểu, ta đang thêm nợ cho dự án. Nợ đời có vay có trả, mình không trả thì một thanh niên xấu số khác trong team sẽ trả (problem?). Nợ code không chỉ trả bằng code, Technical debt phải trả bằng thời gian, công sức và mồ hôi nước mắt của lập trình viên (yes)

## Kết

Qua bài viết này hi vọng các bạn phần nào hiểu được Technical Debt là gì. Hãy thử nhớ xem chúng ta đã gây ra bao nhiêu nợ từ 2 bàn tay trắng (problem?).

Cuối cùng chúc các bạn phải gánh ít nợ hơn trong tương lai. Nếu không may "được" nhận một dự án đầy nợ

![tech-debt-too-damn-high.jpg](https://images.viblo.asia/3e99f0bc-d7ff-4845-870a-c2a322461abd.jpg)

Chúc bạn vui vẻ gánh nợ (problem?)

## Tham khảo

- [https://toidicodedao.com/2016/08/02/technical-debt/](https://toidicodedao.com/2016/08/02/technical-debt/)
- [https://www.techopedia.com/definition/27913/technical-debt](https://www.techopedia.com/definition/27913/technical-debt)
- [http://martinfowler.com/bliki/TechnicalDebt.html](http://martinfowler.com/bliki/TechnicalDebt.html)
- [https://blog.codinghorror.com/paying-down-your-technical-debt/](https://blog.codinghorror.com/paying-down-your-technical-debt/)

## Bonus

![photo_1442919057_temp.jpg](https://images.viblo.asia/136108c1-5ceb-4600-ae31-95ae83a7449f.jpg)

Nguồn:: [[⚡Hiểu biết sâu/Ξ Nguồn/Khoa học dữ liệu. Khoa học máy tính/Viblo]], [Technical Debt - Nợ kĩ thuật - Nợ code không chỉ trả bằng code](https://viblo.asia/p/technical-debt-no-ki-thuat-no-code-khong-chi-tra-bang-code-nwmGyEQMGoW)

[Technical debt - Wikipedia](https://en.wikipedia.org/wiki/Technical_debt "Technical debt - Wikipedia")
![Technical debt isn't technical - Einar Høst - DDD Europe 2019 - YouTube](https://youtu.be/d2Ddo8OV7ig?si=Gp12_8wumUxh-8Wm)