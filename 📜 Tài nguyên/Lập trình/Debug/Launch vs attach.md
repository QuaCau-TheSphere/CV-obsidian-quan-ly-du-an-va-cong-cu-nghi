---
share: True
---
Khởi chạy so với đính kèm cấu hình

Trong Mã VS, có hai chế độ gỡ lỗi cốt lõi, Khởi chạy và Đính kèm, xử lý hai quy trình công việc và phân đoạn khác nhau của nhà phát triển. Tùy thuộc vào quy trình làm việc của bạn, có thể gây nhầm lẫn khi biết loại cấu hình nào phù hợp với dự án của bạn.

Nếu bạn đến từ nền tảng Công cụ dành cho nhà phát triển của trình duyệt, bạn có thể không quen với việc "khởi chạy từ công cụ của mình" vì phiên bản trình duyệt của bạn đã được mở. Khi bạn mở DevTools, bạn chỉ cần đính kèm DevTools vào tab trình duyệt đang mở của mình. Mặt khác, nếu bạn đến từ nền máy chủ hoặc màn hình nền, thì việc trình chỉnh sửa của bạn khởi chạy quy trình cho bạn là điều khá bình thường và trình chỉnh sửa của bạn sẽ tự động đính kèm trình gỡ lỗi của nó vào quy trình mới được khởi chạy.

Cách tốt nhất để giải thích sự khác biệt giữa khởi chạy và đính kèm là coi cấu hình khởi chạy như một công thức về cách khởi động ứng dụng của bạn ở chế độ gỡ lỗi trước khi Mã VS gắn vào nó, trong khi cấu hình đính kèm là công thức về cách kết nối Mã VS trình gỡ lỗi cho ứng dụng hoặc quy trình đang chạy.

Trình gỡ lỗi VS Code thường hỗ trợ khởi chạy chương trình ở chế độ gỡ lỗi hoặc đính kèm vào chương trình đã chạy ở chế độ gỡ lỗi. Tùy thuộc vào yêu cầu (đính kèm hoặc khởi chạy), các thuộc tính khác nhau được yêu cầu và các đề xuất và xác thực launch.json của VS Code sẽ giúp ích cho việc đó.
Thêm cấu hình mới
### [Launch versus attach configurations](https://code.visualstudio.com/docs/editor/debugging#_launch-versus-attach-configurations)

In VS Code, there are two core debugging modes, **Launch** and **Attach**, which handle two different workflows and segments of developers. Depending on your workflow, it can be confusing to know what type of configuration is appropriate for your project.

If you come from a browser Developer Tools background, you might not be used to "launching from your tool," since your browser instance is already open. When you open DevTools, you are simply **attaching** DevTools to your open browser tab. On the other hand, if you come from a server or desktop background, it's quite normal to have your editor **launch** your process for you, and your editor automatically attaches its debugger to the newly launched process.

The best way to explain the difference between **launch** and **attach** is to think of a **launch** configuration as a recipe for how to start your app in debug mode **before** VS Code attaches to it, while an **attach** configuration is a recipe for how to connect VS Code's debugger to an app or process that's **already** running.

VS Code debuggers typically support launching a program in debug mode or attaching to an already running program in debug mode. Depending on the request (`attach` or `launch`), different attributes are required, and VS Code's `launch.json` validation and suggestions should help with that.

### [Add a new configurati](https://code.visualstudio.com/docs/editor/debugging#_add-a-new-configuration)

Nguồn:: [Debugging in Visual Studio Code](https://code.visualstudio.com/docs/editor/debugging#_launch-configurations)