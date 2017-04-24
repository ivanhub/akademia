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
?>
