import sys
sys.path.insert(0, 'D:\Programming\Obsidian\py-obsidianmd')

from pathlib import Path
from pyomd import Notes
from pyomd.metadata import MetadataType

path_dir = Path('D:\QC supplements\Vaults\C Nhóm hỗ trợ người tự học\Obsidian, quản lý dự án và công cụ nghĩ')
print(path_dir)
for file in path_dir.iterdir():
    print(file)

print("Bắt đầu tạo object Notes") 
allnotes = Notes(path_dir)
print("Tạo xong object Notes")


allnotes.metadata.add(k="share", l="true", meta_type=MetadataType.FRONTMATTER)
allnotes.update_content()
allnotes.write()

dv="""

```dataview
List share
where !share
```
"""
print(dv)