---
share: true
created: 2024-02-29T23:53
updated: 2024-12-21T22:37
---

```dataview
LIST rows.file.link
FROM "📜Tài nguyên/Giải pháp kỹ thuật" 
WHERE file.name!=this.file.name
WHERE !contains(file.folder, "TP.HCM") and !contains(file.folder, "Hà Nội") 
GROUP BY split(file.folder, "/")[2]
```
Giải pháp kỹ thuật:: [[Giải pháp kỹ thuật]]