---
share: True
---
Nhìn chung, bạn nên thiết lập một tài khoản cho mỗi công ty và một property cho mỗi thương hiệu hoặc đơn vị kinh doanh.

## Phiên bản GA miễn phí chỉ có một loại property
### Ví dụ A: dùng một property riêng cho mỗi thương hiệu
- Công ty mẹ A: 1 tài khoản 
	- Thương hiệu X (ô tô): 1 property
	- Thương hiệu Y (hàng gia dụng): 1 property
	- Thương hiệu Z (hàng điện tử gia dụng): 1 property

Trong trường hợp này, công ty mẹ có 1 tài khoản và 3 property riêng biệt, mỗi property chỉ chứa dữ liệu liên quan đến thương hiệu/đơn vị kinh doanh đó. 

### Ví dụ B: dùng chung một property cho tất cả các lĩnh vực hoạt động 
- Doanh nghiệp B: 1 tài khoản
	- Dòng sản phẩm D (bảo hiểm nhà ở): 1 property
	- Dòng sản phẩm E (bảo hiểm ô tô): thuộc cùng property với dòng sản phẩm D
	- Dòng sản phẩm F (bảo hiểm nhân thọ): thuộc cùng property với dòng sản phẩm D và E

Trong trường hợp này, doanh nghiệp đã đổ dữ liệu tất cả các dòng sản phẩm vào một property duy nhất. Họ có thể có những khách hàng thường xuyên dùng nhiều sản phẩm, hoặc họ thường sử dụng chiến dịch bán thêm tính năng bổ sung, hoặc bán chéo các sản phẩm với nhau. Vì vậy sẽ hợp lý hơn khi xem tất cả các dữ liệu đó ở cùng một nơi. 

### Ví dụ C: dùng chung một property cho tất cả các sản phẩm
- Doanh nghiệp nhỏ C (ví dụ: Joe’s deli): 1 tài khoản
	- Tất cả sản phẩm (thịt nguội, bánh mì kẹp, đồ uống, v.v.): 1 property

Trong ví dụ này, Joe's deli là một doanh nghiệp nhỏ và không cần nhiều property. Họ phân tích tất cả dữ liệu cho dịch vụ giao hàng thịt nguội trực tuyến của mình cùng một chỗ vì họ không có lĩnh vực kinh doanh riêng biệt nào và khách hàng của họ thường mua nhiều sản phẩm. Một property duy nhất cho tất cả dữ liệu của họ sẽ là một lựa chọn hợp lý.

## Phiên bản GA 360 có thêm property con và property tổng hợp
### Ví dụ A: công ty mẹ cần một property tổng hợp
![Sơ đồ về một công ty mẹ có 3 thương hiệu](https://lh3.googleusercontent.com/-I1LuNrjqnJ9kaKbzN-fzws1S6q0VdJ1e2D8YXmk002nN-zOAxQQc6N2ZVwotpnh-w=w1200)

### Ví dụ B: mỗi nhóm vận hành cần dùng một property con để phân tích riêng
![Sơ đồ về một property nguồn có 3 property con](https://lh3.googleusercontent.com/_PexaSqraS2idITNQ4-Wn43RgTK46_9LiEax_3izgZMR9CJEvlPIiWOTZZUvYoKW1Q=w1200)

### Ví dụ C: công ty đa quốc gia

![Diagram showing global roll-up property with 3 regional roll-up properties](https://storage.googleapis.com/support-kms-prod/qlmD4iv4m436WgAq3P7q6XyMqDBplZGPD534)

Nguồn:: [[Google Support]], [[GA4] Google Analytics account structure - Analytics Help](https://support.google.com/analytics/answer/9679158?sjid=17022656340477521015-NA&hl=en#key-concepts&zippy=%2Ctable-of-contents%2Croll-up-properties%2Centerprise-company-with-several-complementary-lines-of-business%2Cparent-company-with-several-brands%2Cglobal-enterprise-with-regions-and-subregions)

![How to structure your Analytics account - YouTube](https://youtu.be/KqiWnzfJzxg)