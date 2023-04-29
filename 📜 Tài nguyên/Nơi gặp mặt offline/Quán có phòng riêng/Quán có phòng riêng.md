---
dg-publish: True
share: [ True, true ]
---
Không bị ồn từ bên ngoài :: ✔, ✔
Nhà vệ sinh :: ✔
Được nói to :: ✔
Có thể vận động cơ thể:: ✔
Bàn phù hợp cho việc dùng laptop :: ✔
```dataviewjs
import { Octokit } from "https://cdn.skypack.dev/@octokit/core"
const octokit = new Octokit({ auth: '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' })
await octokit.request('GET /repos/QuaCau-TheSphere/Nhap-mon-Obsidian-cho-quan-ly-du-an/traffic/clones', { owner: 'ooker777', repo: 'Nhap-mon-Obsidian-cho-quan-ly-du-an' })
```