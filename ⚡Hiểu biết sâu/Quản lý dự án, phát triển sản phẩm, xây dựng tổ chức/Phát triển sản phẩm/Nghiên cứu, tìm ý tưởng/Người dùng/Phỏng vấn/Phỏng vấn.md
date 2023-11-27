---
share: true
created: 2023-11-01T13:54
updated: 2023-11-27T22:26
---
<a data-flickr-embed="true" href="https://www.flickr.com/photos/rosenfeldmedia/8628030624/in/album-72157633187242728/" title="IU004: Figure 1.3"><img src="https://live.staticflickr.com/8538/8628030624_067e653092_c.jpg" alt="IU004: Figure 1.3"/></a><script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8"></script>
<a data-flickr-embed="true" href="https://www.flickr.com/photos/rosenfeldmedia/8628030264/in/album-72157633187242728/" title="IU005: Figure 1.4"><img src="https://live.staticflickr.com/8532/8628030264_8eed8cc639_c.jpg" alt="IU005: Figure 1.4"/></a><script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8"></script>
```dataview
LIST rows.file.link
FROM "⚡Hiểu biết sâu/Quản lý dự án, phát triển sản phẩm, xây dựng tổ chức/Phát triển sản phẩm/Khảo sát, phỏng vấn người dùng" 
WHERE file.name!=this.file.name
GROUP BY split(file.folder, "/")[3]
```