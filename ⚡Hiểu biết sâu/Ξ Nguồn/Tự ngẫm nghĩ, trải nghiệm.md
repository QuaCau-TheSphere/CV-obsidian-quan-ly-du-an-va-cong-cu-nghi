---
share: true
created: 2023-05-26T14:51
updated: 2024-07-30T15:44
---
```dataview
LIST rows.file.link
WHERE contains(nguồn, [[]])
group by split(file.folder, "/")[0] 
```