---
share: True
---
![](https://obsidian.md/images/screenshot-1.0-hero-combo.png) 
# Mục đích xây vault của bạn là gì?
```dataview
List
from "⚔️ Lớp Obsidian và Git/💎 Giới thiệu về Obsidian/Theo mục đích xây dựng vault" 
```
# Điểm mạnh và điểm yếu của Obsidian là gì?
```dataview
List rows.file.link
from "⚔️ Lớp Obsidian và Git/💎 Giới thiệu về Obsidian/Mô tả về Obsidian" 
Where !contains(file.name,"⭐" )
group by split(file.folder,"/")[3] 
```

# Có thể làm những trò gì trên Obsidian?
```dataview
List rows.file.link
from "⚔️ Lớp Obsidian và Git/💎 Giới thiệu về Obsidian/Theo tính năng của plugin" 
group by split(split(file.folder,"/")[3], "\.")[1] 
```