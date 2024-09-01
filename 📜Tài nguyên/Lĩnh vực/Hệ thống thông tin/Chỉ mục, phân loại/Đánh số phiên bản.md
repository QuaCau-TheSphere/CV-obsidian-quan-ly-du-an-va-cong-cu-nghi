---
share: true
created: 2023-06-01T22:17
updated: 2024-09-01T17:27
---
In the spirit of [Semantic Versioning](https://semver.org/), I come up with an idea to semantic versioning my vault. Here is the idea:

Given a version number MAJOR.MINOR.PATCH, increment the:

1. MAJOR version when root folder has significant changes
2. MINOR version when 1st-level folders has significant changes
3. PATCH version when 2st-level folders has significant changes

What is significance is up to you. For me, it may be adding or removing a file or folder. Renaming without changing the idea much may be denoted with a letter after (i.e. `3`→`3a`→`3b`). If your root folder's structure is already stable before you apply the versioning, you foresee that it will be stable in a far future, then you can skip the MAJOR version if you want.

This idea can be generalize to any hierarchical structure, not just limited to folder structure. For example, a hierarchical graph.

What do you think about this idea?

---

FYI, in Git you can add tags with:
```
git tag -a v1.3 -m "tag label here"
```
If you are new with Git, you can start with [Learn Git Branching](https://learngitbranching.js.org/ "Learn Git Branching"). It's really help me.


`X.Y`
Nếu là vault Obsidian, thì có thể đánh số phiên bản theo kiểu:
- Nếu thay đổi ở folder cấp 0 thì X tăng 1
- Nếu thay đổi ở folder cấp 1 thì Y tăng 1
