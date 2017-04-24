<?php
namespace common\components\phpclasses;
use Yii;

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
