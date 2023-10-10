---
Alias: Danh sách tất cả các tag
share:
  - true
  - true
created: 2023-06-11T18:31
updated: 2023-10-06T16:09
---
# Các mức độ trạng thái/tình trạng của công việc
```dataview
List 
flatten file.etags as tags
Where startswith(tags,"#tt")
Group by tags
```


| Tag                                     | Giải thích                                                                                                                                                                                                         |
| --------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| #tt-⚪/chưabắtđầubàn                    |                                                                                                                                                                                                                    |
| #tt-⚪/chưathốngnhất                    | Vấn đề chưa rõ ràng/chưa thống nhất xong                                                                                                                                                                           |
| #tt-⚪/chưađếnlúclàm                    | Công việc này chỉ làm khi môi trường có gì đó mới                                                                                                                                                                  |
| #tt-⚪/chưaainhậnlàm                    |                                                                                                                                                                                                                    |
| #tt-🟡/chờkếtquảtừngườikhác             | Đang làm dở nhưng chưa có thời gian để làm tiếp                                                                                                                                                                    |
| #tt-🟡/đangbịviệckháccuốn/khôngliênquan | Việc bị cuốn không giúp ích                                                                                                                                                                                        |
| #tt-🟡/đangbịviệckháccuốn/cóliênquan    | Việc bị cuốn có giúp ích cho việc này, nhưng thực ra cũng không quá cần. Nhưng nếu để cho mình bị cuốn tiếp thì kết quả sẽ đã hơn, lâu dài hơn, tạo ấn tượng cho người dùng hơn. Hoặc ít nhất là mình thấy như vậy |
| #tt-🟢/xong25٪                          |                                                                                                                                                                                                                    |
| #tt-🟢/xong50٪                          |                                                                                                                                                                                                                    |
| #tt-🟢/xong75٪                          | Còn vài mục là xong                                                                                                                                                                                                |
| #tt-🟢/khôngthểbiếtkhinàoxong           |                                                                                                                                                                                                                    |
| #tt-🔀Chuyểnsanghướngtiếpcậnkhác        | Chuyển sang hướng tiếp cận khác tốt hơn                                                                                                                                                                            |
| #tt-✅/chưalượnggiá                     |                                                                                                                                                                                                                    |
| #tt-✅/đãcóthànhviênkhácchoýkiến        |                                                                                                                                                                                                                    |
| #tt-✅/cầnđánhgiálại                    |                                                                                                                                                                                                                    |

# Các mức độ cấp thiết của công việc
```dataview
List 
flatten file.etags as tags
Where startswith(tags,"#đct")
Group by tags
```
| Mức độ                     | Diễn giải                                                                                                                                                                                                                                                                            |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 1. #đct-🔥🔥Phảilàmngay    |                                                                                                                                                                                                                                                                                      |
| 2. #đct-🔥/muốnlàmngay     | Thiên về công việc quan trọng trong dài hạn. Những thứ mình có hứng thú và chỉ muốn được làm nó hoài, hoặc nếu không làm cảm thấy nhức đầu                                                                                                                                           |
| 3. #đct-🔥/nênlàmngay      | Thiên về công việc quan trọng trong ngắn hạn. Chưa làm ngay do phải ưu tiên nguồn lực cho những thứ phải làm ngay hay muốn làm ngay khác. Hoặc là phải làm ngay nhưng do đang làm rồi nên cũng không cần phải ép mình. Những thứ mình cần phải ép bản thân để đạt được thứ mình muốn |
| 4. #đct-🍃/lâulâulạicần    |                                                                                                                                                                                                                                                                                      |
| 4. #đct-🍃/sớmphảilàm      | Chưa cần làm ngay nhưng sẽ sớm phải làm. Đang chờ các điều kiện hội đủ                                                                                                                                                                                                               |
| 5. #đct-🍃/đợingườinhậnlàm | Chưa cần làm ngay nhưng nếu có người làm giúp thì cũng đỡ được nhiều thứ                                                                                                                                                                                                             |
| 6. #đct-❄️/chưaquantrọng   | Hãy để sự ngẫu nhiên dẫn dắt hành động                                                                                                                                                                                                                                               |
| 6. #đct-❄️/hếtquantrọng    | Hãy để sự ngẫu nhiên dẫn dắt hành động                                                                                                                                                                                                                                               |
| 7. #đct-✅✅Đãxong         |                                                                                                                                                                                                                                                                                      |
|                            |                                                                                                                                                                                                                                                                                      |
