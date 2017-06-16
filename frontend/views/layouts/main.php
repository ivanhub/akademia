<?php

/* @var $this \yii\web\View */
/* @var $content string */
use yii\helpers\Html;
use yii\bootstrap\Nav;
use yii\bootstrap\NavBar;
use yii\widgets\Breadcrumbs;
use frontend\assets\AppAsset;

use yii\bootstrap\ActiveForm;

use yii\base\Widget;

//use frontend\components\TesttWidget;
//use kartik\base;
//use kartik\growl;
//"<?= Yii::$app->language >"
//
//if (!isset($_COOKIE['from'])) { 
//  setcookie( 'from', ,  2147483647, "/");
//}

if(isset($_SERVER['HTTP_REFERER'])) {
 if(!isset($_COOKIE['origURL'])) {
  setcookie( 'origURL', $_SERVER['HTTP_REFERER'],  2147483647, "/"); 
//  $_SESSION["origURL"] = $_SERVER["HTTP_REFERER"];
}
   }
else
{
setcookie( 'origURL', 'Прямой заход',  2147483647, "/");   
//$_SESSION["origURL"] = 'Прямой заход';
}



AppAsset::register($this);
$action = Yii::$app->controller->action->id;

//temporary, for testing
header("Access-Control-Allow-Origin: *");


$this->beginPage() ?>
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="<?= Yii::$app->charset ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="format-detection" content="telephone=no">
    <?= Html::csrfMetaTags() ?>
    <title><?= Html::encode($this->title) ?></title>
    <?php $this->head() ?>


</head>

<body id="<?php echo $action; ?>">


<?php $this->beginBody() 

/*
 TesttWidget::begin()

$form = ActiveForm::begin(['id' => 'contact-form',]); 
echo  $form->field($model, 'name')->label('Ваше Имя <sup>*</sup>')->textInput(['placeholder'=>"Введите Ваше Имя"]);
//echo $form->field($model, 'phone')->label('Номер телефона')->textInput(['placeholder'=>"+7 (__) ___-____"]);
echo $form->field($model, 'phone')->label('Номер телефона <sup>*</sup>')->widget(MaskedInput::className(),['mask' => '(999) 999-9999']); 

echo $form->field($model, 'body')->textArea(['rows' => 6])->label('Комментарии'); 
echo $form->field($model, 'from')->hiddenInput(['value'=> '7'])->label(false);

echo ' <div class="form-group">';

echo Html::submitButton('Отправить', ['class' => 'btn btn-primary btn-success', 'name' => 'contact-button']) ;
echo ' </div>';
 ActiveForm::end(); 
TesttWidget::end() 
*/

?>

<div class="page">

 <?= $this->render('header') ?>

    <div class="container mainb"><div class="backgr">
    <!-- <div id="breadcrumb"> -->
        <?= Breadcrumbs::widget([
              'homeLink' => [ 
                      'label' => Yii::t('yii', 'Главная'),
                      'url' => Yii::$app->homeUrl,
                 ],
               'links' => isset($this->params['breadcrumbs']) ? $this->params['breadcrumbs'] : [],
              /* 'options' => ['class' => 'crumbs'],*/
        ]) ?>
<!--         </div> -->
        
        <?= $content ?>
 <?= $this->render('../layouts/footer');?>
</div>   </div>
  <a href="#0" class="cd-top">Вверх</a>

</div>
<?php $this->endBody() ?>
<!-- <script src="https://api-maps.yandex.ru/2.1/?lang=ru_RU" type="text/javascript"></script>
 -->
<script type="text/javascript">

 $('#affix').affix({
      offset: {
      top: function () {
      return (this.bottom = $('.header-top').outerHeight(true) + 1)
    }
      }

   });

//$('#affix').affix('checkPosition');

(function($){
    // console.log(navigator.userAgent);
    /* Adjustments for Safari on Mac */
    if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Mac') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
     //console.log('Safari on Mac detected, applying class...');
        $('html').addClass('safari'); // provide a class for the safari-mac specific css to filter with
    }
})(jQuery);


window.addEventListener("load", function() {


<?php  
 
  if(hm('site/index'))
  { ?>
  var loader = setTimeout(function() {
                document.querySelector(".page-loader").classList.add('loaded');   

            }, 200);


 var mainblok = document.querySelectorAll(".cl-effect-12");

setTimeout(function(){
var j=1;
[].forEach.call(mainblok, function(item) {
      item.classList.add('box' + j );
      
    j++;
});
    }, 250);


/* IE10-11 target BEGIN
var ua = window.navigator.userAgent;
var msie = ua.indexOf("MSIE ");

if (!(msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./))) // If Internet Explorer, return version number
 {

var j=1;
[].forEach.call(mainblok, function(item) {
      //for IE11
      item.style["opacity"] = "0";
    j++;
});
};
/* IE10-11 target END*/


/* IF not IE all version */
//if (!(window.clipboardData)) { } has been corrected
var j=1;
[].forEach.call(mainblok, function(item) {
      //for IE11
      item.style["opacity"] = "0";
    j++;
});
          

// if ie9 or > var isIE = false; if (window.navigator.msPointerEnabled) {    isIE = true;}
//1 var isIE10 = !!navigator.userAgent.match(/MSIE 10/);
//2 if (Function('/*@cc_on return document.documentMode===10@*/')()){ document.documentElement.className+=' ie10';}
//3 if (/*@cc_on!@*/false && document.documentMode === 10) {}
//4 if(Function('/*@cc_on return 10===document.documentMode@*/')()){document.documentElement.className='ie10';}

    
 <?php } elseif (hm('site/students')) { ?>

var $el = $(".cube");
var rotate = function(index){
  var index = index || 0;
  $el.each(function(e){
    $(this).attr("data-rotate",Math.abs($(this).index() - index));
  });
}
$el.hover(function(e){
  var index = $(this).index();
  rotate(index);
});
    rotate(0);

    <?php }; ?>

/*
window.resize(function(){
    if(screen.width >= 3099){

img.setAttribute("align", "right");
        //do something
    }
});
*/


////var img = document.getElementsByTagName("img");
////go();
////window.addEventListener('resize', go);

////function go(){
////    if (document.documentElement.clientWidth >=3099)  {

////img[0].setAttribute("align", "right");
////img[1].setAttribute("align", "left");
////img[2].setAttribute("align", "right");
////img[3].setAttribute("align", "left");
////    }
////}


//var links = document.querySelectorAll('ul li');
//var i=1;
//[].forEach.call(links, function(item) {
//      item.classList.add('lightSpeedIn', 'animated'+i);
//    i++;
//});

//document.getElementById('w1')    .classList.add('lightSpeedIn', 'animated1');

 //setTimeout(function(){
//document.getElementById('w1').classList.remove('animated1', 'lightSpeedIn');
    //}, 1100);

//document.getElementById('w1')    .classList.add('lightSpeedIn', 'animated1');





 


/* RESIZE
window.addEventListener("resize", function () {
  var recResizeElement = function (root) {
    Array.prototype.forEach.call(root.childNodes, function (el) {

      var resizeEvent = document.createEvent("HTMLEvents");
      resizeEvent.initEvent("resize", false, true);
      var propagate = el.dispatchEvent(resizeEvent);

      if (propagate)
        recResizeElement(el);
    });
  };
  recResizeElement(document.body);
});
*/


//var links = document.querySelectorAll('ul li');
//var i=1;
//[].forEach.call(links, function(item) {
      //item.classList.add('lightSpeedIn', 'animated'+i);
    //i++;
//});

//var x = document.getElementsByClassName("blocktitle");

// setTimeout(function(){
//for (i = 0; i < x.length; i++) {
    //x[i].style.display = "inherit";
//}
    //}, 3000);



function handleClick()
{
//document.getElementById("full-widthid").style.marginTop = "220px";
}
//document.getElementsByTagName('button')[0].onclick=handleClick;




 var newspan = document.createElement('span');
 newspan.className = "icos";

var childTag = document.querySelectorAll("ul.nav li a");
var childTag1 = document.querySelector(".first");


for ( i = 0; i < childTag.length; i++)
{
   childTag[i].parentNode.insertBefore(newspan.cloneNode(true), childTag[i]);

}
document.getElementsByClassName('icos')[0].classList.add('fa','fa-home');
document.getElementsByClassName('icos')[1].classList.add('fa','fa-graduation-cap','hvr-icon-spin');
document.getElementsByClassName('icos')[2].classList.add('fa','fa-camera');
document.getElementsByClassName('icos')[3].classList.add('fa','fa-file-text');
document.getElementsByClassName('icos')[4].classList.add('fa','fa-phone');



/*$("body").on("click", ".call-back", function(){
    $('.span3').attr('data-nohover','1')
    });*/



var blocks = document.querySelectorAll(".blocktitle");

//document.getElementById('w1').classList.remove('animated1', 'lightSpeedIn');
 setTimeout(function(){
 var i=1;
[].forEach.call(blocks, function(item) {
      item.classList.add('bounceInLeft');

    i++;
});
    }, 1000);

//sec var
 /*setTimeout(function(){
for (i = 0; i < blocks.length; i++) {
    blocks[0].classList.add('bounceInLeft');
}
    }, 1500);
*/

 setTimeout(function(){
 var blocktitles = document.getElementsByClassName("blocktitle");

[].forEach.call(blocks, function(item) { 
  item.classList.remove('bounceInLeft');
  item.classList.add('hvr-bob');
  item.style.opacity = "1";
   });
//for (i = 0; i < blocktitles.length; i++) {blocktitles[i].style.opacity = "1";}

    }, 2000);


});
jQuery(document).ready(function($){


  // browser window scroll (in pixels) after which the "back to top" link is shown
  var offset = 300,
    //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
    offset_opacity = 1200,
    //duration of the top scrolling animation (in ms)
    scroll_top_duration = 700,
    //grab the "back to top" link
    $back_to_top = $('.cd-top');

  //hide or show the "back to top" link
  $(window).scroll(function(){
    ( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
    if( $(this).scrollTop() > offset_opacity ) { 
      $back_to_top.addClass('cd-fade-out');
    }
  });

  //smooth scroll to top
  $back_to_top.on('click', function(event){
    event.preventDefault();
    $('body,html').animate({
      scrollTop: 0 ,
      }, scroll_top_duration
    );
  });



   
//var menu = document.querySelector('.menu');
//var origOffsetY = 145;
//console.log(menu.offsetTop);
//function scroll () {
//  if ($(window).scrollTop() >= origOffsetY) {
//    $('.menu').addClass('fix-menu');
//  } else {
//    $('.menu').removeClass('fix-menu');
//  }  
//}
//document.onscroll = scroll;




});




$(document).ready(function () {
  if (location.hash){
    $(location.hash).collapse('show');
    $(location.hash).parents('.accordion-body').collapse('show');
  }


$('#idmodal').on('show.bs.modal', function(e) {
  var which = e.relatedTarget.dataset.which;
        //var newspan = document.createElement('div');
        //newspan.className = "wpacket";
if (which==0) {
 $("#contact-form").append('<div class="form-group field-forma-fromfield required"><input type="hidden" id="forma-fromfield" class="form-control" name="Forma[fromfield]" value="0"><p class="help-block help-block-error"></p></div>');
  } else if (which==1)
  {

 $("#contact-form").append('<div class="form-group field-forma-fromfield required"><input type="hidden" id="forma-fromfield" class="form-control" name="Forma[fromfield]" value="1"><p class="help-block help-block-error"></p></div>');

  }; 

});



});




$('input#fromurl').val('<?php if (isset($_COOKIE['origURL'])) echo $_COOKIE['origURL']; ?>');
$('input#fromurl').val() || $('input#fromurl').val(document.referrer);
</script>


<?php  if(hm('site/b'))
  { ?>

<!-- <script src="https://cdn.zingchart.com/zingchart.min.js" type="text/javascript" async="async"></script> -->

<script src="/assets/js/zingchart.min.js" type="text/javascript" async="async"></script>
<?php };
?>

<?php  if(hm('site/index'))
  { ?>

<!--<script src="/assets/js/jquery.viewportchecker.js"></script>-->
<script src="/assets/js/jquery.waypoints.js?v=4.0.1"></script>
<!--<script src="/assets/js/jquery.inview.min.js"></script> -->
<?php };
?>

</body>
</html>
<?php $this->endPage() ?>



