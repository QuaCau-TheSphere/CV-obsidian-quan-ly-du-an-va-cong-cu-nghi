---
share: true
created: 2023-09-05T16:17
updated: 2024-02-07T12:39
alias:
  - Điểm giống và khác nhau giữa các chương trình về quản lý chi tiêu cá nhân
  - Quang cảnh giữa các chương trình về quản lý chi tiêu cá nhân
---
# Đầu vào
## Phần mềm chat
PiPu (Telegram) 
## Phần mềm ghi chú
Google Keep

# Đầu ra
## Bảng tính
[SaveDi v1.0 - Google Sheets](https://docs.google.com/spreadsheets/d/1tsGtsqxDQQ0KqBAotiEunys9wQbAJNbkmIg7iC4n3J0/edit#gid=964331749)

## Cơ sở dữ liệu
SQL, Fibery

## Chương trình kế toán GUI
## Chương trình kế toán văn bản thuần
[Plain Text Accounting](https://blog.emacsen.net/profit-first-constraints-plain-text-accounting.html "")
Beancount
- [Plain Text Accounting (PTA) - plaintextaccounting.org](https://plaintextaccounting.org/ "Plain Text Accounting (PTA) - plaintextaccounting.org")
- [&quot;Managing Your Finances Using Python&quot; - Brian Ryall - YouTube](https://www.youtube.com/watch?v=mFzctYkktXQ "&quot;Managing Your Finances Using Python&quot; - Brian Ryall - YouTube")
- [Double Entry Bookkeeping for Personal Finance - YouTube](https://www.youtube.com/watch?v=lIGJzQw79hg "Double Entry Bookkeeping for Personal Finance - YouTube")
- [Plain Text Accounting: An Opinionated View - YouTube](https://www.youtube.com/watch?v=ZDF7xVtKLu0 "Plain Text Accounting: An Opinionated View - YouTube")

Vì phần chi tiêu cá nhân ko có tác dụng đối với mục đích kê khai thuế ở Mỹ, nên m nói mục đích của dev beancount có vẻ ko phải để theo dõi chi tiêu. b đọc các ví dụ minh họa cách sử dụng của beancount sẽ thấy đa phần là để theo dõi danh mục đầu tư cá nhân, ghi nhận lãi lỗ, nhằm mục đích kê khai thuế thu nhập cá nhân hàng năm của Mỹ. Không như Vietnam thì thuế thu nhập từ đầu tư cá nhân đã được thu hộ tại nguồn là các cty chứng khoán rồi Nhưng m thấy beancount vẫn làm tốt việc theo dõi chi tiêu ở mức tiểu khoản rất tốt. Nếu kiên nhẫn nhập đúng và đủ.

## App phân loại chi tiêu cá nhân
Misa, MoneyLover


```graphviz
graph ip_map {
	node [fontname="Helvetica,Arial,sans-serif"]
	TK
    PiPU
    Beancount
    SaveDi
    
    Xử lý tiếng Việt tự nhiên
    Game hoá
    Thân thiện với người mới
    Tự trị dữ liệu (lưu dữ liệu bằng văn bản thuần) 
        Tạo script được
        Version control
    Miễn phí
    
	edge [fontname="Helvetica,Arial,sans-serif"]
	MH -- { ERC ALC WH1 HO1 IH1 };
	ALC -- MV -- AN;
	MV -- HO3 -- WH1;
	HO3 -- MT;
	MT -- LZ -- FL;
	MT -- FJ;
	MT -- ER;
	HO1 -- HR;
	MT -- DR;
	HO1 -- CB -- IH1 -- IHC;
	HO1 -- HV;
	{IHP IW IH1 IH2 IH4 } -- {IHP IW IH1 IH2 IH4 };
	{IH4 IH2} -- {MLM HV};
	HO1 -- HO3;
	HO3 -- IH1;
	IH2 -- IH4 [len=4];	// hack
}
```

Ở đây bọn mình đã cố gắng vét cạn những đặc điểm của chúng. Tất nhiên, vì bọn mình là tác giả của Trấn Kỳ nên chắc chắn sẽ có phiến diện. Nhưng bọn mình cũng đã cố gắng khách quan nhất có thể. Nếu còn thiếu cái gì các bạn hãy nói cho mình biết nhé.