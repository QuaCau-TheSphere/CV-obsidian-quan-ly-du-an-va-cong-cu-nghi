%%
#file/thành-quả
%%
Trạng thái:: <% (await tp.system.suggester((item) => item, Object.keys(app.metadataCache.getTags()).filter((key) => key.includes('tt')).filter((key) => key.includes('/')))) %>
Độ cấp thiết:: <% (await tp.system.suggester((item) => item, Object.keys(app.metadataCache.getTags()).filter((key) => key.includes('đct')))) %>
Đối tượng thụ hưởng:: [[<% await tp.system.suggester(item => item, [...function*fn(p){ const f = app.vault.getAbstractFileByPath(p); if (f.children) { for (const c of f.children) { yield* fn(c.path); } return; } yield f; }("📐 Dự án hỗ trợ người mới học Obsidian/5 Các bên liên quan/Loại đối tượng")].map(file => file.basename)) %>]] 
Người chơi:: 

Phục vụ cho thành quả:
```dataview
List 
From #file/thành-quả 
where contains(thành-quả-cần-có,[[]]) or contains(thành-quả-hỗ-trợ,[[]]) 
```
Thành quả cần có:: 

Thành phẩm:: 

Giả thuyết::