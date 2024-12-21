---
share: true
created: 2024-10-18T12:41
updated: 2025-09-27T15:28
aliases:
  - Sơ đồ kiến thức, canvas
description: Thể hiện bức tranh toàn cảnh giữa các lập luận, ý tưởng
---
Canvas giống như một bàn làm việc được trải ra hơn là đơn thuần là nơi vẽ. Xem [Zsolt's Visual Personal Knowledge Management - YouTube](https://www.youtube.com/@VisualPKM)

[[Sơ đồ không phụ thuộc vào hướng. Bản đồ phụ thuộc vào hướng]]

## Các loại sơ đồ
[UX Mapping Methods Compared: A Cheat Sheet - NN/G](https://www.nngroup.com/articles/ux-mapping-cheat-sheet/), [UX Mapping Methods: Study Guide - NN/G](https://www.nngroup.com/articles/ux-mapping-methods-study-guide/)
[nihlibrary.nih.gov/sites/default/files/Creating\_Infographics\_with\_Inkscape.pdf](https://www.nihlibrary.nih.gov/sites/default/files/Creating_Infographics_with_Inkscape.pdf)
![[A SURVEY OF STAKEHOLDER VISUALIZATION APPROACHES.pdf]]

![](https://i.imgur.com/5rO0fMW.jpeg)
- [Diagrammatic reasoning - Wikipedia](https://en.wikipedia.org/wiki/Diagrammatic_reasoning)
- Concept map, knowledge graph

## Tự nhập ý tưởng của mình
### Số lượng nhỏ
- UML, mermaid 
- [Napkin AI - The visual AI for business storytelling](https://www.napkin.ai/)
- [Excalidraw Whiteboard](https://excalidraw.com/)
- Figma
- [Kinopio](https://kinopio.club/hello-kinopio-0sorcue6MMLibrO24qy-C) (hoá ra tác giả của nó là đồng sáng lập ra Fog Creek: [About](https://pketh.org/about/), [#8 – Pirijan Ketheswaran: Kinopio, Canvas-based tools, being a solo developer — localfirst.fm](https://www.localfirst.fm/8))

### Số lượng lớn
Cái này không gọi là đồ thị mạng lưới, vì dù nó có liên kết với nhau thì việc ứng dụng lý thuyết đồ thị vào nó cũng thấp. Cần có một định nghĩa rõ ràng hơn cho việc liên kết.

![Kialo - YouTube](https://youtu.be/MifNyU49_JA) 
![An introduction to analysing dialogical argumentation in OVA3 - YouTube](https://youtu.be/P4PEMkFJOi0?si=5EXUkO8BSYmmKGyx)
![Introducing Nomic Atlas: Operationalize Massive Datasets of Text, PDFs, and Embeddings - YouTube](https://youtu.be/t0c0D9w1B68?si=bdZOWTFmsiEx5Cf_)
[bramadams.dev \| Atlas Map](https://atlas.nomic.ai/data/bram1/bramadamsdev/map?xs=-18.94004&xf=20.55096&ys=-16.37676&yf=18.69068)
[GitHub - bramses/ghost-to-nomic: Upload your Ghost blog posts as a Nomic Map](https://github.com/bramses/ghost-to-nomic)

## Tự động hoá việc tạo canvas từ ghi chú của mình
Nếu bạn muốn tự động hoá việc tạo một canvas từ ghi chú của mình, thì về mặt công nghệ bạn đang [đào lập luận](https://en.wikipedia.org/wiki/Argument_mining), và về mặt kỹ thuật bạn đang xuất [JSON Canvas](https://jsoncanvas.org/). Thử kiếm xem có ai đã kết hợp hai khái niệm đó vào một thư viện chưa? Nếu không phải là canvas mà là concept diagram hoặc knowledge graph chắc cũng đã có người làm. Trước đây mình cũng có viết [[Tôi học được gì sau khi viết Graphvidian|Graphvidian]] cho vấn đề này.

Xem thêm:: [[Tôi học được gì sau khi viết Graphvidian|Tôi học được gì sau khi viết Graphvidian?]]

Từng có người làm thư viện này [xmind2json](https://pypi.org/project/xmind2json/ "https://pypi.org/project/xmind2json/") nên chắc họ đã từng convert mindmap xmind sang dạng json và ngược lại. Mà xmind ra đời khá lâu trước Obsidian

[[Sự chuyên gia đến từ việc nhìn ra mẫu hình]]. [[Đồ thị mạng lưới giúp ta thấy được mẫu hình]]. [[Trực giác là việc nhìn ra mẫu hình không hơn không kém]]

Mình thấy vẽ đồ thị chỉ có tác dụng kích thích sự chú ý ban đầu, với nếu nó tạo ra được các cụm rõ ràng (community) thì hữu ích. Ví dụ như [các hình về các plugin và category của nó trong Obsidian Hub](https://forum.obsidian.md/t/some-graphs-of-plugins-and-their-categories-in-obsidian-hub/87863?u=ooker). Còn ở những trường hợp khác thì tạo database rồi kiếm sẽ tốt hơn. Nếu đó là đồ thị cục bộ thì nó chỉ hữu ích khi tìm đường giữa 2 nút cụ thể, như kiểu [Six Degrees of Wikipedia](https://www.sixdegreesofwikipedia.com/). Chứ chỉ có quanh một cái thì không hữu ích gì cả.

[Tổng hợp tất cả các app có đồ thị](https://www.notion.so/My-2d-Brain-Networked-Notebook-App-a131b468fc6f43218fb8105430304709)
![](https://i.imgur.com/WC5RElN.png)

Thường mình sẽ có 2 loại biểu đồ: sơ đồ các khái niệm (không phải concept map) và cái schema của nó. VD như hình 1 là cái sơ đồ các khái niệm mình export ra Graphviz. Cái chú thích hoặc hình 2 là schema của nó.
Khi có ý tưởng thì mình cố gắng bật máy lên và vẽ chúng ra, tìm các biểu tượng thích hợp để điền vào chỗ trống trong bức tranh hình dung ban đầu. Nhưng mình thấy vẽ đồ thị chỉ có tác dụng kích thích sự chú ý ban đầu, với nếu nó tạo ra được các cụm rõ ràng (community) thì hữu ích. Ví dụ như mấy cái hình ở đây. Còn ở những trường hợp khác thì tạo database rồi kiếm sẽ tốt hơn 

## Có tương tác? 
Chỉ trừ khi nào mình xác định là phải đọc trên giấy, chứ nếu người đọc chỉ đọc trên màn hình thì tại sao

Điều này sẽ dẫn đến việc tạo [[Tài liệu động]]

Xem thêm:: [Towards a theory of quality in documentation - Diátaxis](https://diataxis.fr/quality/)