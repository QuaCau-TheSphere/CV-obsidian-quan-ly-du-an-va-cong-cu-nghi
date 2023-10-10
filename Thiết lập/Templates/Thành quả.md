---
share: true
created: 2023-05-26T14:51
updated: 2023-10-06T16:09
---
%%
#file/thành-quả
%%
Trạng thái:: <% (await tp.system.suggester((item) => item, Object.keys(app.metadataCache.getTags()).filter((key) => key.includes('tt')).filter((key) => key.includes('/')))) %>
Độ cấp thiết:: <% (await tp.system.suggester((item) => item, Object.keys(app.metadataCache.getTags()).filter((key) => key.includes('đct')))) %>

Phục vụ cho thành quả:
```dataview
List 
From #file/thành-quả 
where contains(thành-quả-cần-có,[[]]) or contains(thành-quả-hỗ-trợ,[[]]) 
```

Là giải pháp cho vấn đề:
```dataview
List 
where contains(giải-pháp-gợi-ý,[[]]) 
```

Thành quả cần có:: 

Thành phẩm::
