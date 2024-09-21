---
share: true
created: 2024-09-10T12:53
updated: 2024-09-10T12:53
---
- Heavyweight markup languages like xml/xhtml/html/groff/tex/mdx can be used for structured data because they have specs that specify how to store data. This is a consequence of the authors intending to use them for data at the first place
- Lightweight markup languages like markdown shouldn't be used for structured data because they don't have a spec specifying how to store data. This is the consequence of the authors not intending to use them for data at the first place
- If I want to use markdown for data I just need to write a parser/processor. Having a spec is good, but not necessary. This is what dataview does
- If I want to have intellisense features on my editor (syntax-based autocomplete, type guarding, refactoring, etc.), I need to write my own LSP via a plugin. Again having a spec is good, but not necessary
- If I have a spec, I have a flavor