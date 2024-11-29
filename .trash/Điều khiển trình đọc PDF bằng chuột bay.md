---
share: true
created: 2024-10-06T00:26
updated: 2024-10-06T18:12
---
## Sumatra
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
