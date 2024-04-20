---
share: true
created: 2023-09-05T16:17
updated: 2024-03-23T22:50
---
Khái niệm:: 
Nhập vào terminal:
```PowerShell
schtasks /create /sc onlogon /tn ShareX /rl highest /tr "'C:\Program Files\ShareX\ShareX.exe' -silent"
```
Nguồn:: [How can I get ShareX to start automatically with admin privileges · Issue #94 · ShareX/ShareX · GitHub](https://github.com/ShareX/ShareX/issues/94)