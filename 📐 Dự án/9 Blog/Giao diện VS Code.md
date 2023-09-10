---
share: True
---

## [Git Status Bar actions](https://code.visualstudio.com/docs/sourcecontrol/overview#_git-status-bar-actions)

There is a **Synchronize Changes** action in the Status Bar, next to the branch indicator, when the current checked out branch has an upstream branch configured. **Synchronize Changes** will pull remote changes down to your local repository and then push local commits to the upstream branch.

![git status bar sync](https://code.visualstudio.com/assets/docs/sourcecontrol/overview/git-status-bar-sync.png)

If there is no upstream branch configured and the Git repository has remotes set up, the **Publish** action is enabled. This will let you publish the current branch to a remote.

![git status bar publish](https://code.visualstudio.com/assets/docs/sourcecontrol/overview/git-status-bar-publish.png)

## [Gutter indicators](https://code.visualstudio.com/docs/sourcecontrol/overview#_gutter-indicators)

If you open a folder that is a Git repository and begin making changes, VS Code will add useful annotations to the gutter and to the overview ruler.

- A red triangle indicates where lines have been deleted
- A green bar indicates new added lines
- A blue bar indicates modified lines

![Gutter indicators](https://code.visualstudio.com/assets/docs/sourcecontrol/overview/gutter.png)

Nguồn:: [Source Control with Git in Visual Studio Code](https://code.visualstudio.com/docs/sourcecontrol/overview#_gutter-indicators "Source Control with Git in Visual Studio Code")