---
share: true
created: 2023-07-06T22:07
updated: 2023-10-06T16:09
---
- Install expat library (`sudo apt install libexpat1-dev`)
- Install pangocairo library (`sudo apt install libpango1.0-dev`)
- Compile and install graphviz from source ([https://graphviz.org/download/source/](https://graphviz.org/download/source/)):
    ```xml
    ./configure --with-pangocairo
    make
    sudo make install
    ```
Nguồn:: [[⚡Hiểu biết sâu/Ξ Nguồn/Stack Overflow]], [Why do texts with non-ASCII characters have right padding?](https://stackoverflow.com/a/76630218/3416774)
