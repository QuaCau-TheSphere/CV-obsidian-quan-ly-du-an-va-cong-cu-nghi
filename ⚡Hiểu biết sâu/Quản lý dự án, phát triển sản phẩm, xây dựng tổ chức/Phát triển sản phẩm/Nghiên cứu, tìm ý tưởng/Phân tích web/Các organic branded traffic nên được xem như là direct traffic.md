---
share: true
created: 2023-06-30T12:52
updated: 2023-11-28T11:08
---
Organic search traffic bao gồm cả các branded traffic, tức là các traffic mà từ khóa mà người dùng sử dụng để tìm kiếm có chứa tên thương hiệu trong đó. Ví dụ brand ở đây là Wall Street English và thay vì tìm kiếm với từ khóa chung chung là _“học tiếng Anh”_ thì người dùng có thể tìm kiếm bằng từ khóa _“học tiếng Anh Wall Street English”_ và bấm vào kết quả tìm kiếm tự nhiên để vào website. Lúc này về mặt kỹ thuật, các traffic này vẫn là search traffic nhưng về mặt bản chất thì người dùng đã biết đến Wall Street English từ trước và họ tìm kiếm với mục đích là để đến website của brand này chứ không phải để tìm kiếm sự lựa chọn nữa. Và branded traffic thường có xu hướng gia tăng khi nhận diện thương hiệu của brand được gia tăng (thông qua các hoạt động quảng cáo, branding, PR) chứ không liên quan nhiều đến kết quả thứ hạng các từ khóa và hoạt động SEO. Một số khách hàng và công ty mà tôi đã có dịp tư vấn qua thì organic traffic của họ tăng trưởng đều đều nhưng sau khi kiểm tra lại thì thực chất phần tăng trưởng đó là branded traffic và phần này có khi chiếm tới 80% tổng số organic traffic. Lúc này thực chất, từ khóa duy nhất mà các công ty này đang rank có lẽ chỉ là tên thương hiệu của họ.

# Giải pháp

Vì các lý do nêu trên, các branded traffic nên được xem như là direct traffic thì sẽ chính xác hơn về mặt ý nghĩa để đánh giá và phân tích. Trong Google Analytics nên thiết lập một segment để đo lường branded traffic và non-branded traffic riêng biệt để có đánh giá chính xác hơn về tình hình thực sự của organic traffic mà không bị ảnh hưởng bởi người dùng tìm kiếm về thương hiệu.

Cách thiết lập segment cho Branded Traffic: vào mục Organic Search trong Channels, phía trên cái graph sẽ có dòng Add Segment, bấm vào đó. Sau đó bấm New Segment, đặt tên là Branded Organic Traffic hay đại loại, trong bảng đó bấm vào Traffic Sources, khung medium chọn contains sau đó gõ vào “organic”. Sau đó trong phần Conditions bên dưới trong khung đầu tiên chọn “Keyword”, khung thứ hai chọn “contains” sau đó phần khung còn lại điền vào brand của mình. Nếu brand có nhiều cách gọi hoặc cách gõ thì tốt nhất nên nhập hết bao gồm cả typo, ví dụ “wall street english”, “wse”, “wallstreet english”, “wsenglish”. Sau đó bấm Save là xong.

[![branded-organic-traffic.png](https://conversion.vn/wp-content/uploads/branded-organic-traffic.png)](https://conversion.vn/wp-content/uploads/branded-organic-traffic.png)

Nên thiết lập một segment để tracking traffic liên quan đến branded keywords. 

Nguồn:: [[Bùi Quang Tinh Tú]], [Google Analytics Và Tại Sao Nó Không Chính Xác](https://conversion.vn/google-analytics-khong-chinh-xac/#Organic_Search)
