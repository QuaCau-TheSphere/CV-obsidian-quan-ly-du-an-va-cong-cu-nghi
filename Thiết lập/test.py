from pathlib import Path
from pyomd import Notes
from pyomd.metadata import MetadataType

path_dir = Path('..')
allnotes = Notes(path_dir)

allnotes.metadata.add(k="share", l="true", meta_type=MetadataType.FRONTMATTER)
allnotes.update_content()
allnotes.write()
