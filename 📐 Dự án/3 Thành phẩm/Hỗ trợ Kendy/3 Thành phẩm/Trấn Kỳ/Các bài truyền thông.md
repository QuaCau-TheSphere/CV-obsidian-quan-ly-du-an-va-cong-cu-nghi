---
share: true
created: 2023-05-26T14:51
updated: 2023-10-13T22:28
---
%%
#file/thành-phẩm
%%

Phục vụ cho thành quả:
```dataview
LIST
FROM #file/thành-quả 
WHERE contains(thành-phẩm,[[]])
```
Người chơi:: 

Thành quả cần có::
Thành quả hỗ trợ::

Thành phẩm nhỏ hơn:
```dataview
List 
From #file/thành-phẩm 
Where contains(file.folder,this.file.folder) and file.name!=this.file.name
```
<iframe width=200% height=500px  src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQXAwSmM2AvOqpD3fE5TXI3pP1RgR4_X5czY_mgsADHTDoL3hXtrtC5z7zz997-loIW6xiWrWOc_jw-/pubhtml?gid=1158281590&amp;single=true&amp;widget=true&amp;headers=false"></iframe>