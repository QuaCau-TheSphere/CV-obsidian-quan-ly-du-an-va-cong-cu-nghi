---
share: true
created: 2023-05-26T14:51
updated: 2026-02-12T12:43
---
```dataview
LIST rows.file.link
WHERE contains(nguồn, [[]])
group by split(file.folder, "/")[0] 
```
