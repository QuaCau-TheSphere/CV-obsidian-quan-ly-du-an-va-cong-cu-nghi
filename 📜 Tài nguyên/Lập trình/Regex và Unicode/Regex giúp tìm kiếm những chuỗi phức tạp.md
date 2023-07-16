---
share: True
---
# Tạo query DQL từ danh sách các key
Do that in several steps. 
1) `^.*$` ⇒ `$& as "$&"`
2) `(?:\G|^\S*)\K\h+(?=.* as ".*"$)` ⇒ `-,`
3)  `(?:\G-|^)[^-]+(?=\S* as ".*"$)` ⇒ `\L$&`
https://stackoverflow.com/questions/75015542/how-to-convert-multiple-words-into-multiple-words-as-multiple-words



- [Perilous Shores](https://watabou.github.io/perilous-shores/?seed=2006422892&tags=peninsula,woodland,neutral,perilous&name=Qu%E1%BA%A3%20C%E1%BA%A7u&hexes=1)
- [dusty sea](https://watabou.github.io/perilous-shores/?seed=34941435&tags=bay,chaotic,perilous)
- [gloomy tarm](https://watabou.github.io/perilous-shores/?seed=527587900&tags=lake,highland,wetland,woodland,neutral,perilous)
