---
share: true
created: 2023-05-26T14:51
updated: 2026-05-12T23:39
---
![](https://obsidian.md/images/screenshot-1.0-hero-combo.png) 
# Mục đích xây vault của bạn là gì?
```dataview
List
from "⚔️ Hướng dẫn Obsidian và Git/💎 Giới thiệu về Obsidian/Theo mục đích xây dựng vault" 
```
# Điểm mạnh và điểm yếu của Obsidian là gì?
```dataview
List rows.file.link
from "⚔️ Hướng dẫn Obsidian và Git/💎 Giới thiệu về Obsidian/Mô tả về Obsidian" 
Where !contains(file.name,"⭐" )
group by split(file.folder,"/")[3] 
```

# Có thể làm những trò gì trên Obsidian?
```dataview
List rows.file.link
from "⚔️ Hướng dẫn Obsidian và Git/💎 Giới thiệu về Obsidian/Theo tính năng của plugin" 
group by split(split(file.folder,"/")[3], "\.")[1] 
```
