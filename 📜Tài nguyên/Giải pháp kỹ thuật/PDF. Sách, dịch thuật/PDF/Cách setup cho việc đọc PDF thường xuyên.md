---
share: true
created: 2023-05-27T20:53
updated: 2024-10-06T21:31
---
## Chuột bay
| Tên sản phẩm     | Giá  |
| ---------------- | ---- |
| c120             | 290k |
| **Minix neo a2** | 473k |
| T3               | 490k |
| Measy RC11       |      |

Script AutoHotKey cho Sumatra:
```autohotkey
#IfWinActive, ahk_class SUMATRA_PDF_FRAME
Media_Play_Pause::
b::Send {f12}			;Bookmark 
`::Send ^2 				;Zoom fit
x::Send ^w				;Close tab
a::Send {NumpadMult}	;Rotate
f::Send {f11}			;Fullscreen
^PgDn::^tab
^PgUp::^+tab
Browser_Home::
Left::Send +{left}
Right::Send +{right}
+Left::send {left}
+Right::send {Right}
Up::Send +{up}          ;Bookmark panel also use ↑ and ↓ to 
Down::Send +{Down}      ;quickly scroll page up but not affect in bookmark
+Up::Send {up}          ;
+Down::Send {Down}      ;
+`::Suspend
return 
```


## Màn hình lớn
19 inch là đủ

## Tự động chỉnh phóng to mức page width trong Firefox
Trong Firefox, mở `about:config`, kiếm `pdfjs.defaultZoomValue` và chỉnh giá trị là `page-width`
