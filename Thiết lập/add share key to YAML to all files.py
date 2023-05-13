# import sys
# sys.path.insert(0, 'D:\Programming\Obsidian\py-obsidianmd')

from pathlib import Path
from pyomd import Notes
from pyomd.metadata import MetadataType

path_dir = Path('D:\QC supplements\Vaults\C Nhóm hỗ trợ người tự học\Obsidian, quản lý dự án và công cụ nghĩ')
print(f"Thư mục làm việc: {path_dir}")

print("Bắt đầu tạo object Notes") 
allnotes = Notes(path_dir)
print("Tạo xong object Notes")

print("Thêm metadata")
allnotes.metadata.add(k="share", l="true", meta_type=MetadataType.FRONTMATTER)
# allnotes.metadata.remove(k="dg-publish")

print("Bỏ những giá trị bị trùng")
allnotes.metadata.remove_duplicate_values() 


print("Ghi vào vault")
allnotes.update_content()
allnotes.write()