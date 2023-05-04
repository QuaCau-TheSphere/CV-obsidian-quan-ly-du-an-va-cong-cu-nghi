---
share: True
---
[Examples of ImageMagick Usage](https://imagemagick.org/Usage/ "Examples of ImageMagick Usage")

# Thêm logo hàng loạt
Thu nhỏ logo theo tỉ lệ 10% so với ảnh nền và ở vị trí góc phải trên cùng cách mép ảnh 3% chiều dài ảnh nền
```PowerShell
gci -recurse -file | Foreach-Object {
	magick $_.fullname ..\logo.png -resize %[fx:t?u.w*0.1:u.w]x%[fx:t?u.h*0.1:u.h] -gravity northeast -geometry +%[fx:t?u.w*0.03:u.w]+%[fx:t?u.w*0.03:u.w] -composite new"$_.name"
} 
```

## The reasoning behind the `%[fx:t?u.w*0.9:u.w]`
From [The FX Special Effects Image Operator](https://imagemagick.org/script/fx.php "ImageMagick – The FX Special Effects Image Operator"):

```
u: first image in list
v: second image in list
t: index of current image (s) in list
w: width of this image
```

So in plain language, it means that if the image in question is the second image, whose index is one, of which the ternary conditional operator also read as true, then resize it to 90% width of the first image, else do no resize. Or else `-resize` option will [apply to each images in an image sequence](https://imagemagick.org/script/command-line-processing.php#operator) (i.e. all input images before it, but not after it).

## [Adding multiple logos to multiple images.ps1](https://gist.github.com/ooker777/7b559db31c1dcc4071592054baa1017e)
