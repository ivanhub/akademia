<?php
set_time_limit(0);
/*///////////////////////////////////////////////*/
function getmicrotime()
{
	list($usec, $sec) = explode(" ",microtime());
	return ((float)$usec + (float)$sec);
}
/*///////////////////////////////////////////////*/
$time_start = getmicrotime();
/*///////////////////////////////////////////////*/
//require('Gifmerge.inc.php');
require('Animation.php');
/*///////////////////////////////////////////////*/
function grabPixel(&$im, $w, $h)
{
	for($i = 0; $i < $w; $i++)
	{
		for($j = 0; $j < $h; $j++)
		{
			$arr		= $j * $w + $i;
			$pix		= imageColorsForIndex($im, imageColorAt($im, $i, $j));
			$rgb[$arr]	= Array(red=>$pix['red'], green=>$pix['green'], blue=>$pix['blue']);
		}
	}
	return $rgb;
}
/*///////////////////////////////////////////////*/
/*
	The source image dimensions must be less than
	200 * 200 pixel.
*/
/*///////////////////////////////////////////////*/
$sourceimg	=  imageCreateFromGif("source.gif");
$sourceimw	=  imageSX($sourceimg);
$sourceimh	=  imageSY($sourceimg);
$animdivid	=  8;
$animframe	=  360 / $animdivid;
$animbgcol	=  Array(red=>255, green=>255, blue=>255);
/*///////////////////////////////////////////////*/
$animation	=  new Animation($sourceimw, $sourceimh, grabPixel($sourceimg, $sourceimw, $sourceimh));
for($i = 0; $i < $animdivid; $i++)
{
	$animation	-> generateFrames($animframe * $i, $animbgcol);
	$thisframe	=  $animation -> getFrame();
	$frame		=  imageCreateTrueColor($sourceimw, $sourceimh);
	$color 		=  imageColorAllocate($frame, 255, 255, 255);
	imageFill($frame, 0, 0, $color);
	for($j = 0; $j < $sourceimw; $j++)
	{
		for($k = 0; $k < $sourceimh; $k++)
		{
			$C98 = $k * $sourceimw + $j;
			$C99 = imageColorAllocate($frame, $thisframe[$C98][red], $thisframe[$C98][green], $thisframe[$C98][blue]);
			imagesetpixel($frame, $j, $k, $C99);
		}
	}
	imagegif($frame, "frame$i.gif");
	imageDestroy($frame);
}
/*///////////////////////////////////////////////*/
imageDestroy($sourceimg);
/*///////////////////////////////////////////////*/
$time_end = getmicrotime();
$parse = round($time_end - $time_start,2);
echo "$animdivid frames generated in $parse second.<br>\n";
?>
