---
share: true
created: 2025-05-26T12:19
updated: 2026-07-01T12:27
---
```dataview
LIST rows.file.link
from [[]]
GROUP BY split(file.folder, "/")[3]
```
WHERE contains(khái-niệm, [[]])
