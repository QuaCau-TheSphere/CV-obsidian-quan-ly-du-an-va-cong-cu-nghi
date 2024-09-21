---
share: true
created: 2024-08-02T16:21
updated: 2024-09-21T21:28
---
Đặt mình vào tư thế của người thầy dạy sinh viên, của người có kiến thức nhưng chỉ tạm thời quên

**Đừng mong tìm được thuật ngữ tiếng Việt nếu không có `filetype:pdf`** !!!

[Từ điển Cồ Việt](http://tratu.coviet.vn/)

Vào Wikipedia tiếng Anh → qua Wiki tiếng Trung → [phiên âm sang từ Hán Việt](https://hvdic.thivien.net/transcript.php#trans)

Nhiều khi thấy Google Translate hay Bing Translate cũng nghĩ ra nhiều từ thú vị phết. Không hẳn là nó dịch đúng, nhưng vì nó ngu ngu nên khơi mở được nhiều cách tiếp cận mới.

Dự án dịch máy [tranonet](https://www.tranonet.com/) dành riêng cho tiếng Việt (theo quảng cáo là hơn cả Bing Translate, Google Translate trong việc dịch thuật ngữ chuyên ngành)

Nội dung

- [Lục database](https://xn--qucu-hr5aza.cc/kinh-nghiem-google-thuat-ngu/#Luc_database "Lục database")
- [Các từ khóa để thêm vào sau từ mình cần tìm](https://xn--qucu-hr5aza.cc/kinh-nghiem-google-thuat-ngu/#Cac_tu_khoa_de_them_vao_sau_tu_minh_can_tim "Các từ khóa để thêm vào sau từ mình cần tìm")
    - [Từ khóa chung](https://xn--qucu-hr5aza.cc/kinh-nghiem-google-thuat-ngu/#Tu_khoa_chung "Từ khóa chung")
    - [Từ khóa y học](https://xn--qucu-hr5aza.cc/kinh-nghiem-google-thuat-ngu/#Tu_khoa_y_hoc "Từ khóa y học")
    - [Từ khóa tâm lý](https://xn--qucu-hr5aza.cc/kinh-nghiem-google-thuat-ngu/#Tu_khoa_tam_ly "Từ khóa tâm lý")
    - [Từ khóa vệ tinh – vũ trụ](https://xn--qucu-hr5aza.cc/kinh-nghiem-google-thuat-ngu/#Tu_khoa_ve_tinh_%E2%80%93_vu_tru "Từ khóa vệ tinh – vũ trụ")
    - [AutoHotKey](https://xn--qucu-hr5aza.cc/kinh-nghiem-google-thuat-ngu/#AutoHotKey "AutoHotKey")

## Lục database

[Dataset Search](https://datasetsearch.research.google.com/)

[Trung tâm Thông tin Tư liệu – Viện Hàn lâm Khoa học và Công nghệ Việt Nam](http://library.vast.vn/primo_library/libweb/action/dlDisplay.do?vid=84vast&docId=&fromSitemap=1&afterPDS=true)

[Bộ sưu tập tài liệu tham khảo ảo – Thư viện trung tâm ĐHQG TP.HCM](http://www.vnulib.edu.vn/?p=1664)

[Google Scholar](https://scholar.google.com/)

-inurl:htm -inurl:html intitle:"index of" "Last modified" mp4 "peppa pig"

:related :info $50..$100

intext:keyword 

site:[reddit.com/r/opendirectories/](https://www.reddit.com/r/opendirectories/)

[List of academic databases and search engines – Wikipedia](https://en.wikipedia.org/wiki/List_of_academic_databases_and_search_engines)

[http://www.powersearchingwithgoogle.com](http://www.powersearchingwithgoogle.com)

[http://www.googleguide.com/advanced_operators_reference.html](http://www.googleguide.com/advanced_operators_reference.html)

[Snoopsnoo](https://snoopsnoo.com/)

## Các từ khóa để thêm vào sau từ mình cần tìm

### Từ khóa chung

chuyên ngành

chương trình đào tạo

Đại cương, khái luận

Luận văn, luận án

Kỹ thuật (làm) pdf

Hướng dẫn sử dụng (hướng dẫn sử dụng của Toshiba hay có song ngữ dịch chuẩn)

List/checklist/outline

### Từ khóa y học

Các bệnh viện lớn, bộ y tế, WHO

Dung nạp

[dieutri.vn](http://dieutri.vn/)

### Từ khóa tâm lý

[https://trangtamly.blog/](https://trangtamly.blog/) (song ngữ)

[tâm lý trị liệu | tủ sách tâm lý trị liệu](https://tamlytrilieu.wordpress.com/)

### Từ khóa vệ tinh – vũ trụ

Trung tâm vệ tinh quốc gia

Trung tâm vũ trụ Việt Nam

Viện công nghệ vũ trụ: [http://www.sti.vast.ac.vn/](http://www.sti.vast.ac.vn/)

[http://spaceprogram.vast.vn/ket-qua-san-pham/85-sach-giao-trinh.html](http://spaceprogram.vast.vn/ket-qua-san-pham/85-sach-giao-trinh.html)

ISS virtual tour: [http://esamultimedia.esa.int/multimedia/virtual-tour-iss/](http://esamultimedia.esa.int/multimedia/virtual-tour-iss/)

### AutoHotKey
```
:*:pdff::filetype:pdf `{backspace}
:*:indexx::intitle:"index.of" -inurl:(html|htm|php|asp|jsp) type:(pdf|epub|mob)
```