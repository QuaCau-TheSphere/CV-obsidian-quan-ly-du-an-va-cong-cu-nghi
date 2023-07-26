---
share: True
---
![Getting started with Node.js debugging in VS Code - YouTube](https://youtu.be/2oFKNL7vYV8)
Các thuộc tính sau là bắt buộc đối với mọi cấu hình khởi chạy:

     loại - loại trình gỡ lỗi sẽ sử dụng cho cấu hình khởi chạy này. Mỗi tiện ích mở rộng gỡ lỗi được cài đặt đều giới thiệu một loại: nút cho trình gỡ lỗi Node tích hợp sẵn, hoặc php và sử dụng các tiện ích mở rộng PHP và Go.
     yêu cầu - loại yêu cầu của cấu hình khởi chạy này. Hiện tại, khởi chạy và đính kèm được hỗ trợ.
     tên - tên thân thiện với người đọc sẽ xuất hiện trong danh sách thả xuống cấu hình khởi chạy Gỡ lỗi.

Dưới đây là một số thuộc tính tùy chọn có sẵn cho tất cả các cấu hình khởi chạy:

     bản trình bày - bằng cách sử dụng các thuộc tính thứ tự, nhóm và ẩn trong đối tượng bản trình bày, bạn có thể sắp xếp, nhóm và ẩn các cấu hình và hợp chất trong trình đơn thả xuống Cấu hình gỡ lỗi và trong phần chọn nhanh Gỡ lỗi.
     preLaunchTask - để khởi chạy tác vụ trước khi bắt đầu phiên gỡ lỗi, hãy đặt thuộc tính này thành nhãn của tác vụ được chỉ định trong task.json (trong thư mục .vscode của không gian làm việc). Hoặc, điều này có thể được đặt thành ${defaultBuildTask} để sử dụng tác vụ xây dựng mặc định của bạn.
     postDebugTask - để khởi chạy tác vụ ở cuối phiên gỡ lỗi, hãy đặt thuộc tính này thành tên của tác vụ được chỉ định trong task.json (trong thư mục .vscode của không gian làm việc).
     internalConsoleOptions - thuộc tính này kiểm soát khả năng hiển thị của bảng điều khiển Gỡ lỗi trong phiên gỡ lỗi.
     debugServer - chỉ dành cho tác giả tiện ích mở rộng gỡ lỗi: thuộc tính này cho phép bạn kết nối với một cổng được chỉ định thay vì khởi chạy bộ điều hợp gỡ lỗi.
     serverReadyAction - nếu bạn muốn mở một URL trong trình duyệt web bất cứ khi nào chương trình đang gỡ lỗi xuất một thông báo cụ thể tới bảng điều khiển gỡ lỗi hoặc thiết bị đầu cuối tích hợp. Để biết chi tiết, hãy xem phần Tự động mở URI khi gỡ lỗi chương trình máy chủ bên dưới.

Nhiều trình gỡ lỗi hỗ trợ một số thuộc tính sau:

     chương trình - tệp thực thi hoặc tệp để chạy khi khởi chạy trình gỡ lỗi
     args - đối số được truyền cho chương trình để gỡ lỗi
     env - biến môi trường (giá trị null có thể được sử dụng để "không xác định" một biến)
     envFile - đường dẫn đến tệp dotenv với các biến môi trường
     cwd - thư mục làm việc hiện tại để tìm các tệp phụ thuộc và các tệp khác
     cổng - cổng khi gắn vào một quy trình đang chạy
     stopOnEntry - ngắt ngay lập tức khi chương trình khởi chạy
     bảng điều khiển - loại bảng điều khiển nào sẽ sử dụng, ví dụ: internalConsole, integrationTerminal hoặc externalTerminal

The following attributes are mandatory for every launch configuration:

    type - the type of debugger to use for this launch configuration. Every installed debug extension introduces a type: node for the built-in Node debugger, for example, or php and go for the PHP and Go extensions.
    request - the request type of this launch configuration. Currently, launch and attach are supported.
    name - the reader-friendly name to appear in the Debug launch configuration dropdown.

Here are some optional attributes available to all launch configurations:

    presentation - using the order, group, and hidden attributes in the presentation object, you can sort, group, and hide configurations and compounds in the Debug configuration dropdown and in the Debug quick pick.
    preLaunchTask - to launch a task before the start of a debug session, set this attribute to the label of a task specified in tasks.json (in the workspace's .vscode folder). Or, this can be set to ${defaultBuildTask} to use your default build task.
    postDebugTask - to launch a task at the very end of a debug session, set this attribute to the name of a task specified in tasks.json (in the workspace's .vscode folder).
    internalConsoleOptions - this attribute controls the visibility of the Debug Console panel during a debugging session.
    debugServer - for debug extension authors only: this attribute allows you to connect to a specified port instead of launching the debug adapter.
    serverReadyAction - if you want to open a URL in a web browser whenever the program under debugging outputs a specific message to the debug console or integrated terminal. For details see section Automatically open a URI when debugging a server program below.

Many debuggers support some of the following attributes:

    program - executable or file to run when launching the debugger
    args - arguments passed to the program to debug
    env - environment variables (the value null can be used to "undefine" a variable)
    envFile - path to dotenv file with environment variables
    cwd - current working directory for finding dependencies and other files
    port - port when attaching to a running process
    stopOnEntry - break immediately when the program launches
    console - what kind of console to use, for example, internalConsole, integratedTerminal, or externalTerminal

Variable substitution
Nguồn::  The following attributes are mandatory for every launch configuration:

    type - the type of debugger to use for this launch configuration. Every installed debug extension introduces a type: node for the built-in Node debugger, for example, or php and go for the PHP and Go extensions.
    request - the request type of this launch configuration. Currently, launch and attach are supported.
    name - the reader-friendly name to appear in the Debug launch configuration dropdown.

Here are some optional attributes available to all launch configurations:

    presentation - using the order, group, and hidden attributes in the presentation object, you can sort, group, and hide configurations and compounds in the Debug configuration dropdown and in the Debug quick pick.
    preLaunchTask - to launch a task before the start of a debug session, set this attribute to the label of a task specified in tasks.json (in the workspace's .vscode folder). Or, this can be set to ${defaultBuildTask} to use your default build task.
    postDebugTask - to launch a task at the very end of a debug session, set this attribute to the name of a task specified in tasks.json (in the workspace's .vscode folder).
    internalConsoleOptions - this attribute controls the visibility of the Debug Console panel during a debugging session.
    debugServer - for debug extension authors only: this attribute allows you to connect to a specified port instead of launching the debug adapter.
    serverReadyAction - if you want to open a URL in a web browser whenever the program under debugging outputs a specific message to the debug console or integrated terminal. For details see section Automatically open a URI when debugging a server program below.

Many debuggers support some of the following attributes:

    program - executable or file to run when launching the debugger
    args - arguments passed to the program to debug
    env - environment variables (the value null can be used to "undefine" a variable)
    envFile - path to dotenv file with environment variables
    cwd - current working directory for finding dependencies and other files
    port - port when attaching to a running process
    stopOnEntry - break immediately when the program launches
    console - what kind of console to use, for example, internalConsole, integratedTerminal, or externalTerminal

Variable substitution