<?php

namespace common\components\phpclasses;
use Yii;
use yii\base\Component;

/*/////////////////////////////////////////////////*/
/*
                  Animation.class.php
                Created by László Zsidi
                 zsidi.laszlo@chello.hu
                 ----------------------
   A liszensze ennek a Class-nek megváltozott és Freeware
   lett.
   Szabadon használható ingyenes és kereskedelmi jelleg&#369;
   oldalakon, valamint publikálható és terjeszthet&#337;, de
   a forráskód nem módosítható a szerz&#337; beleegyezése nélkül.
   Ha használod a kódokat kérlek helyezz el egy felém mutató
   linket.
   =======================================================
   Licence of This class has been changed freeware!
   Can be used for freeware or commercial services,
   can be distributed anywhere but cannot be modified sourcecode
   without permission of author.
   If you use this class please refer with a link to me.
*/
/*/////////////////////////////////////////////////*/
//require('Rotator.class.php');
//require('FramePoint.class.php');
class Animation extends Component
{
	var $kx;
	var $ky;
	var $kz;
	var $frame;
	var $width;
	var $height;
	var $pixels;
	var $rotator;
	var $offsets;
	var $rgbpixels;
	function Animation($w, $h, $o)
	{
		$this->rotator		= new Rotator();
		$this->kx			= 0.029999999999999999;
		$this->ky			= 0.01;
		$this->kz			= 8;
		$this->frame		= $i;
		$this->width		= $w;
		$this->height		= $h;
		$this->pixels		= $o;
		$this->rgbpixels	= Array('red'=>255, 'green'=>255, 'blue'=>255);
	}

	function generateFrames($i, $c)
	{
		$originalWidth 	= $this->width;
		$originalHeight	= $this->height;
		$this->rotator->setRotation(0, 15, 0);
		for($j = 0; $j < $this->width; $j++)
		{
			for($k = 0; $k < $this->height; $k++)
			{
				$C00 				 = $this->calcZvalue($j, $k, $i);
				$C01				 = $this->rotator->rotatePoints(Array($j, $k, $C00));
				$C02				 = $k * $this->width + $j;
                $this->offsets[$C02] = new FramePoint($C01[0], $C01[1] - $this->height / 2, $C01[2], $this->pixels[$C02]);
                $C03				 = $this->offsets[$C02]->color[red];
                $C04				 = $this->offsets[$C02]->color[green];
                $C05				 = $this->offsets[$C02]->color[blue];
                $C06				 = ($C00 + 50) / 100;
                $C06				 = ($C06 + $C06) - 1.0;
                if($C06 > 0.0)
                {
					$C03 = ($C03 + (255 - $C03) * $C06);
					$C04 = ($C04 + (255 - $C04) * $C06);
					$C05 = ($C05 + (255 - $C05) * $C06);
                }
                else
					if($C06 < 0.0)
					{
						$C03 = ($C03 - $C03 * $C06 * -1);
						$C04 = ($C04 - $C04 * $C06 * -1);
						$C05 = ($C05 - $C05 * $C06 * -1);
				}
				$this->offsets[$C02]->color[red]	= $C03;
				$this->offsets[$C02]->color[green]	= $C04;
				$this->offsets[$C02]->color[blue]	= $C05;
			}
		}
		$w				= $originalWidth + 4;
		$h				= $originalHeight + 4;
		for($i = 0; $i < ($w * $h); $i++)
		{
        	$this->rgbpixels[$i][red]	= $c[red];
        	$this->rgbpixels[$i][green]	= $c[green];
        	$this->rgbpixels[$i][blue]	= $c[blue];
		}
		for($i = 0; $i < count($this->offsets); $i++)
		{
			$C07 = $this->offsets[$i]->pointX();
			$C08 = $this->offsets[$i]->pointY() + round($this->height / 2);
			if($C07 < $this->width - 1 && $C08 < $this->height - 1 && $C07 > 0 && $C08 > 0)
			{
				/* { */
				$this->rgbpixels[$C08 * $this->width + $C07][red] 	= $this->offsets[$i]->color[red];
				$this->rgbpixels[$C08 * $this->width + $C07][green] = $this->offsets[$i]->color[green];
				$this->rgbpixels[$C08 * $this->width + $C07][blue] 	= $this->offsets[$i]->color[blue];
				/* <-- --> */
				$this->rgbpixels[$C08 * $this->width + $C07 + 1][red] 	= $this->offsets[$i]->color[red];
				$this->rgbpixels[$C08 * $this->width + $C07 + 1][green] = $this->offsets[$i]->color[green];
				$this->rgbpixels[$C08 * $this->width + $C07 + 1][blue] 	= $this->offsets[$i]->color[blue];
				/* <-- --> */
				$this->rgbpixels[($C08 + 1) * $this->width + $C07][red] 	= $this->offsets[$i]->color[red];
				$this->rgbpixels[($C08 + 1) * $this->width + $C07][green] 	= $this->offsets[$i]->color[green];
				$this->rgbpixels[($C08 + 1) * $this->width + $C07][blue] 	= $this->offsets[$i]->color[blue];
				/* } */
				if($this->rgbpixels[($C08 * $this->width + $C07) - 1][red] == $c[red] && $this->rgbpixels[($C08 * $this->width + $C07) - 1][green] == $c[green] && $this->rgbpixels[($C08 * $this->width + $C07) - 1][blue] == $c[blue])
				{
					$this->rgbpixels[($C08 * $this->width + $C07) - 1][red] 	= $this->offsets[$i]->color[red];
					$this->rgbpixels[($C08 * $this->width + $C07) - 1][green] 	= $this->offsets[$i]->color[green];
					$this->rgbpixels[($C08 * $this->width + $C07) - 1][blue] 	= $this->offsets[$i]->color[blue];
				}
				if($this->rgbpixels[($C08 - 1) * $this->width + $C07][red] == $c[red] && $this->rgbpixels[($C08 - 1) * $this->width + $C07][green] == $c[green] && $this->rgbpixels[($C08 - 1) * $this->width + $C07][blue] == $c[blue])
				{
					$this->rgbpixels[($C08 - 1) * $this->width + $C07][red] 	= $this->offsets[$i]->color[red];
					$this->rgbpixels[($C08 - 1) * $this->width + $C07][green] 	= $this->offsets[$i]->color[green];
					$this->rgbpixels[($C08 - 1) * $this->width + $C07][blue] 	= $this->offsets[$i]->color[blue];
				}
			}
		}
	}

	function getFrame()
	{
        return $this->rgbpixels;
	}

	function calcZvalue($i, $j, $k)
	{
		$this->kx = 0.029999999999999999 + (11 * $i) / ($this->width * $this->width);
		$this->ky = 0.01 + (4.4000000000000004 * $i) / ($this->width * $this->width);
		if($i < $this->width / 6)
			$this->kz = 1.0 + $i * (8 / ($this->width / 6));
		else
			$this->kz = 8;
		$f = (($k * 0.017453292519943295 - $this->kx * $i) + $this->ky * $j);
		$l = intval($this->kz * sin($f) + 0.5);
		return $l;
	}
}






class Rotator
{
	var $ct;
	var $st;
	var $cp;
	var $sp;
	var $cg;
	var $sg;
	function Rotator()
	{
		$this->ct = 1.0;
		$this->cp = 1.0;
		$this->cg = 1.0;
	}
	function setRotation($i, $j, $k)
	{
		$this->ct = cos($i * 0.017453292519943295);
		$this->st = sin($i * 0.017453292519943295);
		$this->cp = cos($j * 0.017453292519943295);
		$this->sp = sin($j * 0.017453292519943295);
		$this->cg = cos($k * 0.017453292519943295);
		$this->sg = sin($k * 0.017453292519943295);
	}
	function rotatePoints($ai)
	{
		$ai[0] = round($ai[0] * ($this->cp * $this->cg - $this->st * $this->sp * $this->sg) + $ai[1] * ($this->cp * $this->sg + $this->st * $this->sp * $this->cg) + $ai[2] * -($this->ct * $this->sp));
		$ai[1] = round($ai[0] * -($this->ct * $this->sg) + $ai[1] * ($this->ct * $this->cg) + $ai[2] * $this->st);
		$ai[2] = round($ai[0] * ($this->sp * $this->cg + $this->st * $this->cp * $this->sg) + $ai[1] * ($this->sp * $this->sg - $this->st * $this->cp * $this->cg) + $ai[2] * ($this->ct * $this->cp));
		return $ai;
	}
}






class FramePoint
{
	var $x;
	var $y;
	var $z;
	var $color;
	var $d;
	function FramePoint($i, $j, $k, $l)
	{
		$this->d 		= 300;
		$this->x 		= $i;
		$this->y 		= $j;
		$this->z 		= $k;
		$this->color 	= $l;
	}
	function pointX()
	{
		if($this->z + $this->d == 0)
			return $this->x * $this->d;
		else
			return intval(($this->x * $this->d) / ($this->z + $this->d) + 0.5);
	}
	function pointY()
	{
		if($this->z + $this->d == 0)
			return $this->y * $this->d;
		else
			return intval(($this->y * $this->d) / ($this->z + $this->d) + 0.5);
	}
}





?>
