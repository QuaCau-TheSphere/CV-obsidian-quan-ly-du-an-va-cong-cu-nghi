---
share: True
---
Hàm giúp ta làm một công việc nào đó. Công việc đó có thể liên quan tới một đối tượng hoặc không. Còn phương thức chắc chắn phải làm những công việc liên quan tới một đối tượng cụ thể. 

Ví dụ, bạn có một rổ trái cây:
![|300](https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/A_basket_of_fruits.jpg/600px-A_basket_of_fruits.jpg)

Bạn muốn cân khối lượng từng quả, nên bạn viết một phương thức `cân_nặng()` giúp bạn cân chúng:

```python
táo.cân_nặng()   # Kết quả: 30g
chuối.cân_nặng() # Kết quả: 40g
lê.cân_nặng()    # Kết quả: 50g
```

Bạn thấy, dù phương thức `cân_nặng()` không thay đổi, nhưng đối với mỗi một loại trái cây khác nhau sẽ cho một kết quả khác nhau. Phương thức này phải gắn lên một đối tượng cụ thể nào đó để có tác dụng.

Trong khi đó, nếu bạn muốn biết ngày hôm nay là ngày gì, bạn chỉ cần dùng hàm `xem_ngày()`

```python
xem_ngày() # Kết quả: "ngày 32 tháng 13 năm 12023" 
```

Bạn thấy là công việc `xem_ngày()` này không phụ thuộc vào đối tượng nào. Dù bạn quyết định là sẽ ăn táo hay ăn lê thì kết quả cũng không thay đổi.

