---
share: True
---
- Quy tắc kiểu cũ có phần căn cứ trên nhãn quan, giữ vị trí dấu ở giữa hay gần giữa mỗi từ cho cân bằng. VD: `hòa`
- Quy tắc "kiểu mới" căn cứ trên [ngữ âm học](https://vi.wikipedia.org/wiki/Ng%E1%BB%AF_%C3%A2m_h%E1%BB%8Dc "Ngữ âm học") muốn đối chiếu chữ và âm. VD `hoà`
Nguồn:: [[Wikipedia]], [Quy tắc đặt dấu thanh trong chữ quốc ngữ – Wikipedia tiếng Việt](https://vi.wikipedia.org/wiki/Quy_t%E1%BA%AFc_%C4%91%E1%BA%B7t_d%E1%BA%A5u_thanh_trong_ch%E1%BB%AF_qu%E1%BB%91c_ng%E1%BB%AF)
Quy tắc cũ chỉ khác với quy tắc mới ở những từ không có phụ âm cuối. Nếu có phụ âm cuối thì giống như nhau
# Câu lệnh Regex để bắt lỗi đặt dấu thanh trong tiếng Việt

21 Tháng Tám, 2021 Bởi [Nguyễn Đức Anh](https://kiencang.net/author/admin/ "Xem tất cả bài viết bằng Nguyễn Đức Anh")

Trong bài viết này tôi sử dụng quy tắc đặt dấu thanh kiểu cũ, chúng ta tạm đặt ra bên ngoài các tranh cãi về mặt ngôn ngữ học. Lý do chủ yếu tôi chọn cách này, vì nó phổ biến hơn, đây cũng là quy tắc mặc định trong trình hỗ trợ gõ tiếng Việt phổ biến là Unikey.

Quy tắc là thế này:

- Nếu trong từ có dấu, và nó có một nguyên âm, thì dấu phải đặt ở nguyên âm đó, ví dụ như mẹ, lẹ, có, càng;
- Nếu nó chỉ có 2 nguyên âm mà ở liền sau không có chữ cái nào nữa thì dấu đặt ở nguyên âm đầu, ví dụ như bùa, cào, táo, bùi, túi, tòa, mãi;
- Nếu nó có 2 nguyên âm mà liền sau có thêm một nguyên âm hoặc phụ âm thì dấu đặt ở nguyên âm giữa (trường hợp 3 nguyên âm), hoặc nguyên âm thứ hai (trường hợp 2 nguyên âm + phụ âm cuối), ví dụ: toàn, choáng (2 nguyên âm + phụ âm), hoặc oái, oải (3 nguyên âm liền nhau);
- Nếu trong từ có dấu và có nguyên âm ê hoặc ơ thì bất kể nó ở đâu, dấu phải thuộc về ê hoặc ơ. Ví dụ chuyện, quyển (dấu thanh không phải ở giữa mà ở cuối dù có 3 nguyên âm liền nhau), tuế, thuở (chỉ có 2 nguyên âm cuối nhưng dấu thanh không đặt trước mà đặt sau)
- Với những từ bắt đầu với gi và qu như giá, quà, gió, quạ thì gi và qu được coi là mẫu tự riêng, và quy tắc dấu ở nguyên âm trước không áp dụng;

OK, giờ chúng ta sẽ đi vào phần bắt lỗi các từ không tuân thủ quy tắc trên. Để đỡ phức tạp, code mẫu được tôi viết cho từ viết thường, viết HOA thì bạn chỉ cần bổ sung thêm là được, quan trọng là khi hiểu vấn đề thì việc thêm sẽ không khó khăn gì.

Bạn có thể muốn tham khảo 2 tài nguyên giúp ích cho quá trình này:

- [Các chữ cái sẵn có trong bài viết để tiện sao chép](https://kiencang.net/mang-array-tien-dung-ho-ten/);
- [Cú pháp cơ bản của Regex](https://kiencang.net/cu-phap-co-ban-regex/) (biểu thức chính quy);

Chúng ta bắt đầu với ngoại lệ của gi và qu trước:

- Nếu bắt đầu bằng gi và qu, dấu không được đặt lên i và u trong gi và qu. Do vậy việc bắt từ đặt sai dấu sẽ thế này:

```
(^(g[íìỉĩị]|q[úùủũụứừửữự])[aăâeêoôơuưiy])[a-z]*
```

Nó sẽ bắt lỗi các từ như thế này:

```
gía
gíong
gíêng
qúa
qúan
gìau
gìêng
```

- Tiếp đến là các từ có 2 nguyên âm ở cuối, dấu sẽ đặt ở nguyên âm đầu, chúng ta sẽ bắt lỗi các từ đặt ở nguyên âm sau:

```
([bcdfhjklmnprstvxzđ]*[aăâeoôơuưiy][áàảãạắằẳẵặấầẩẫậéèẻẽẹóòỏõọốồổỗộúùủũụứừửữựýỳỷỹỵíìỉĩị])$
```

Lưu ý là đoạn sẽ không có `[bcdfhjklmnprstvxzđ]` g và q, vì nếu đặt vào nó sẽ mâu thuẫn với nguyên tắc gi và qu.

Dấu $ đặt cuối để chỉ thị sau nó không còn có từ nào nữa, vì chúng ta bắt lỗi này chỉ với từ có 2 nguyên âm.

Trong nhóm `[áàảãạắằẳẵặấầẩẫậéèẻẽẹóòỏõọốồổỗộúùủũụứừửữựýỳỷỹỵíìỉĩị]` cũng không có ê và ơ, vì 2 từ này được phép có dấu dù vị trí của nó ở đâu.

Đoạn mã trên sẽ bắt lỗi các từ như thế này:

```
hoạ
hoà
haọ
keó
meọ
coí
```

- Giờ chúng ta xử lý việc từ có 3 nguyên âm liên tiếp hoặc 2 nguyên âm và có ít nhất một từ đằng sau đó. Nếu từ có 3 nguyên âm, lỗi sẽ xảy ra nếu dấu nằm ở nguyên âm đầu, hoặc nguyên âm cuối. Nếu từ có 2 nguyên âm và ít nhất một từ đứng cuối, bắt lỗi sẽ xảy ra nếu dấu nằm ở nguyên âm đầu.

Đoạn mã Regex bắt lỗi dấu ở nguyên âm đầu trong trường hợp có 3 nguyên âm hoặc 2 nguyên âm + phụ âm cuối:

```
([a-zđ]*[áàảãạắằẳẵặấầẩẫậéèẻẽẹóòỏõọốồổỗộúùủũụứừửữựýỳỷỹỵíìỉĩị][aăâêeoôơuưiy][aăâeêoôơuưiybcdghklmnpqrstvx]+)
```

Chúng ta cần bổ sung thêm trường hợp 3 nguyên âm và dấu nằm ở nguyên âm cuối:

```
[bcdfghjklmnpqrstvxzđ]*[aăâeêoôơuưiy][aăâeêoôơuưiy][áàảãạắằẳẵặấầẩẫậéèẻẽẹóòỏõọốồổỗộúùủũụứừửữựýỳỷỹỵíìỉĩị][a-z]*
```

Kết quả nó sẽ bắt lỗi các từ như thế này:

```
hòang
hùynh
tòan
tươí
toaì
tóai
```

- Cuối cùng là bắt lỗi từ có dấu có ê hoặc ơ, mà dấu không nằm ở ê hoặc ơ

Mã Regex với ê:

```
[a-zăâôơưđ]*[áàảãạắằẳẵặấầẩẫậóòỏõọốồổỗộờớởỡợúùủũụứừửữựýỳỷỹỵíìỉĩị][a-z]*ê[a-zăâôơư]*
```

Nó sẽ bắt lỗi các từ như thế này:

```
chụyên
chuỵên
lúyên
luỵên
túê
tụê
```

Tương tự là mã Regex với ơ:

```
[a-zăâôêưđ]*[áàảãạắằẳẵặấầẩẫậếềểễệóòỏõọốồổỗộúùủũụứừửữựýỳỷỹỵíìỉĩị][a-z]*ơ[a-zăâôơư]*
```

Cuối cùng là đoạn mã tổng hợp với một chút chỉnh sửa thêm để bắt lỗi các trường hợp đặt sai dấu thanh:

```
(((g[íìỉĩị]|q[úùủũụứừửữự])[aăâeêoôơuưiy])[a-z]*)|([bcdfhjklmnprstvxzđ]*[aăâeoôơuưiy][áàảãạắằẳẵặấầẩẫậéèẻẽẹóòỏõọốồổỗộúùủũụứừửữựýỳỷỹỵíìỉĩị])$|([a-zđ]*[áàảãạắằẳẵặấầẩẫậéèẻẽẹóòỏõọốồổỗộúùủũụứừửữựýỳỷỹỵíìỉĩị][aăâêeoôơuưiy][aăâeêoôơuưiybcdfghklmnpqrstvx]+)|([bcdfghjklmnpqrstvxzđ]*[aăâêeoôơuưiy][aăâêeoôơuưiy][áàảãạắằẳẵặấầẩẫậéèẻẽẹóòỏõọốồổỗộúùủũụứừửữựýỳỷỹỵíìỉĩị][bcdfghjklmnpqrstvxz]*)|([a-zăâôơưđ]*[áàảãạắằẳẵặấầẩẫậóòỏõọốồổỗộờớởỡợúùủũụứừửữựýỳỷỹỵíìỉĩị][a-z]*ê[a-zăâôơư]*)|([a-zăâôêưđ]*[áàảãạắằẳẵặấầẩẫậếềểễệóòỏõọốồổỗộúùủũụứừửữựýỳỷỹỵíìỉĩị][a-z]*ơ[a-zăâôơư]*)
```

Bạn có thể [ghé thăm đường link này tôi viết sẵn](https://regex101.com/r/0Fe2Es/1/) để tiện tham khảo.

## Tích hợp vào PHP

Bình thường thì nếu kiểm tra Regex bắt chính xác đưa vào PHP là sẽ chạy. Nhưng với câu lệnh trên cho vào sẽ ra kết quả không như ý. Mã PHP điều chỉnh phải như bên dưới mới bắt được.

Vì viết một mẫu khớp (pattern) sẽ rất dài nên tôi tách ra để bạn tiện theo dõi, và chỉnh sửa nếu cần. Có vẻ mã vẫn chưa tối ưu và cần kiểm tra thêm, dù sao tạm thời có còn hơn không vậy:

```
// bắt lỗi gío, qúa, qúy-----------------

$r='/^(gí|gì|gỉ|gĩ|gị]|qú|qù|qủ|qũ|qụ|qứ|qừ|qử|qữ|qự)(a|ă|â|e|ê|o|ô|ơ|u|ư|i|y)([a-z]*)/'; 

//---------------------------------------



// bắt lỗi toà, keó, hoạ-----------------------------

$r2='/[bcdfhjklmnprstvxzđ]*[^gq](a|ă|â|e|o|ô|ơ|u|ư|i|y)(á|à|ả|ã|ạ|ắ|ằ|ẳ|ẵ|ặ|ấ|ầ|ẩ|ẫ|ậ|é|è|ẻ|ẽ|ẹ|ó|ò|ỏ|õ|ọ|ố|ồ|ổ|ỗ|ộ|ú|ù|ủ|ũ|ụ|ứ|ừ|ử|ữ|ự|ý|ỳ|ỷ|ỹ|ỵ|í|ì|ỉ|ĩ|ị)$/'; 

//---------------------------------------------------



// bắt lỗi tòan, cừơi, hòang-------------

$r3='/[bcdfhjklmnprstvxzđ]*[^aăâeoôơuưiy](á|à|ả|ã|ạ|ắ|ằ|ẳ|ẵ|ặ|ấ|ầ|ẩ|ẫ|ậ|é|è|ẻ|ẽ|ẹ|ó|ò|ỏ|õ|ọ|ố|ồ|ổ|ỗ|ộ|ú|ù|ủ|ũ|ụ|ứ|ừ|ử|ữ|ự|ý|ỳ|ỷ|ỹ|ỵ|í|ì|ỉ|ĩ|ị)(a|ă|â|ê|e|o|ô|ơ|u|ư|i|y)(a|ă|â|e|o|ô|ơ|u|ư|i|y|b|c|d|f|g|h|k|l|m|n|p|q|r|s|t|v|x)+/'; 

//---------------------------------------



// bắt lỗi cươí, tươí, cuôí---------------------------

$r4='/[bcdfghjklmnpqrstvxzđ]*(a|ă|â|ê|e|o|ô|ơ|u|ư|i|y)(a|ă|â|ê|e|o|ô|ơ|u|ư|i|y)(á|à|ả|ã|ạ|ắ|ằ|ẳ|ẵ|ặ|ấ|ầ|ẩ|ẫ|ậ|é|è|ẻ|ẽ|ẹ|ó|ò|ỏ|õ|ọ|ố|ồ|ổ|ỗ|ộ|ú|ù|ủ|ũ|ụ|ứ|ừ|ử|ữ|ự|ý|ỳ|ỷ|ỹ|ỵ|í|ì|ỉ|ĩ|ị)[bcdfghjklmnpqrstvxz]*/';

//----------------------------------------------------



// bắt lỗi ê không có dấu trong từ có dấu

$r5='/ê[a-z]*(á|à|ả|ã|ạ|ắ|ằ|ẳ|ẵ|ặ|ấ|ầ|ẩ|ẫ|ậ|é|è|ẻ|ẽ|ẹ|ó|ò|ỏ|õ|ọ|ố|ồ|ổ|ỗ|ộ|ú|ù|ủ|ũ|ụ|ứ|ừ|ử|ữ|ự|ý|ỳ|ỷ|ỹ|ỵ|í|ì|ỉ|ĩ|ị)/';


$r6='/(á|à|ả|ã|ạ|ắ|ằ|ẳ|ẵ|ặ|ấ|ầ|ẩ|ẫ|ậ|é|è|ẻ|ẽ|ẹ|ó|ò|ỏ|õ|ọ|ố|ồ|ổ|ỗ|ộ|ú|ù|ủ|ũ|ụ|ứ|ừ|ử|ữ|ự|ý|ỳ|ỷ|ỹ|ỵ|í|ì|ỉ|ĩ|ị)[a-z]*ê/';

//---------------------------------------



// bắt lỗi ơ không có dấu trong từ có dấu

$r7='/(á|à|ả|ã|ạ|ắ|ằ|ẳ|ẵ|ặ|ấ|ầ|ẩ|ẫ|ậ|é|è|ẻ|ẽ|ẹ|ó|ò|ỏ|õ|ọ|ố|ồ|ổ|ỗ|ộ|ú|ù|ủ|ũ|ụ|ứ|ừ|ử|ữ|ự|ý|ỳ|ỷ|ỹ|ỵ|í|ì|ỉ|ĩ|ị)[a-z]*ơ/';

$r8='/ơ[a-z]*(á|à|ả|ã|ạ|ắ|ằ|ẳ|ẵ|ặ|ấ|ầ|ẩ|ẫ|ậ|é|è|ẻ|ẽ|ẹ|ó|ò|ỏ|õ|ọ|ố|ồ|ổ|ỗ|ộ|ú|ù|ủ|ũ|ụ|ứ|ừ|ử|ữ|ự|ý|ỳ|ỷ|ỹ|ỵ|í|ì|ỉ|ĩ|ị)/';
```
[Câu lệnh Regex để bắt lỗi đặt dấu thanh trong tiếng Việt • Kiến càng](https://kiencang.net/cau-lenh-regex-dau-thanh-viet/)