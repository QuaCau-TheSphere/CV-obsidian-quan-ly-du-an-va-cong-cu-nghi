---
share: true
created: 2023-05-26T14:51
updated: 2024-07-16T23:17
---
[Examples of ImageMagick Usage](https://imagemagick.org/Usage/ "Examples of ImageMagick Usage")

# Thêm logo hàng loạt
Thu nhỏ logo theo tỉ lệ 10% so với ảnh nền và ở vị trí góc phải trên cùng cách mép ảnh 3% chiều dài ảnh nền
```PowerShell
gci -recurse -file | Foreach-Object {
	magick $_.fullname ..\logo.png -resize %[fx:t?u.w*0.1:u.w]x%[fx:t?u.h*0.1:u.h] -gravity northeast -geometry +%[fx:t?u.w*0.03:u.w]+%[fx:t?u.w*0.03:u.w] -composite new"$_.name"
} 
```

Script: [Adding multiple logos to multiple images.ps1](https://gist.github.com/ooker777/7b559db31c1dcc4071592054baa1017e)

> [!NOTE]- Giải thích `%[fx:t?u.w*0.9:u.w]`
> 
> ## The reasoning behind the `%[fx:t?u.w*0.9:u.w]`
> From [The FX Special Effects Image Operator](https://imagemagick.org/script/fx.php "ImageMagick – The FX Special Effects Image Operator"):
> 
> ```
> u: first image in list
> v: second image in list
> t: index of current image (s) in list
> w: width of this image
> ```
> 
> So in plain language, it means that if the image in question is the second image, whose index is one, of which the ternary conditional operator also read as true, then resize it to 90% width of the first image, else do no resize. Or else `-resize` option will [apply to each images in an image sequence](https://imagemagick.org/script/command-line-processing.php#operator) (i.e. all input images before it, but not after it).
> 
> # Resize and crop
> I have over 1000 images on different resolutions, (for example 1234x2122, 4400x5212 , etc) and I want to convert all of them to fixed 100x100 size, so.
> 
> 1.  first I need to resize the images keeping proportions, and get 100xA or Ax100, where A > 100 (it depends width and height of image, for some images width > height, and for some images height > width).
>     
> 2.  Crop this image to 100x100 from center
> ```PowerShell
> magick convert input.jpg -resize 100x100^ -gravity Center -extent 100x100 output.jpg
> ```
> You would use the [area-fill](http://www.imagemagick.org/Usage/resize/#fill) (`^`) [geometry modifier](http://www.imagemagick.org/script/command-line-processing.php#geometry) on the `-resize` operation to unify the down-scale. For cropping the center, [`-extent`](http://www.imagemagick.org/script/command-line-options.php?#extent) with [`-gravity Center`](http://www.imagemagick.org/script/command-line-options.php?#gravity) will work.


# Thêm số thứ tự vào các hình hàng loạt
Hữu ích cho việc phân biệt mã nào mình đã làm rồi, mã nào chưa
```PowerShell
$i=1; Get-ChildItem -file | ForEach-Object {
  $filename=$_.name
  $basename = $_.basename
  $output = "$basename$i.jpg"
  $output; 
  magick convert -pointsize 300 -fill red -draw "text 60,600 `"$i`"" "$filename" $output
  $i++
} 
```