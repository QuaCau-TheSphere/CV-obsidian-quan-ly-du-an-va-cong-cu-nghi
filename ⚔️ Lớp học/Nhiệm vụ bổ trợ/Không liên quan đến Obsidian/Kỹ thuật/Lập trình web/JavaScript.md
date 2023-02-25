# Lấy ảnh trên Gravatar
```js
const md5 = require( 'md5' );

function getGravatarURL( email ) {
  const address = String( email ).trim().toLowerCase();
  const hash = md5( address );
  return `https://www.gravatar.com/avatar/${ hash }`;
}
```
