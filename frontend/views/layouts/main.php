<?php

/* @var $this \yii\web\View */
/* @var $content string */

use yii\helpers\Html;
use yii\bootstrap\Nav;
use yii\bootstrap\NavBar;
use yii\widgets\Breadcrumbs;
use frontend\assets\AppAsset;
use common\widgets\Alert;

AppAsset::register($this);
$controll = Yii::$app->controller;
$action = $controll->action->id;


 $controllerl = Yii::$app->controller;
 $homecheker = $controllerl->id.'/'.$controllerl->action->id;


?>

<?php $this->beginPage() ?>
<!DOCTYPE html>
<html lang="<?= Yii::$app->language ?>">
<head>
    <meta charset="<?= Yii::$app->charset ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <?= Html::csrfMetaTags() ?>
    <title><?= Html::encode($this->title) ?></title>
    <?php $this->head() ?>



</head>

<body id="<?php echo $action; ?>" >


<?php $this->beginBody() ?>

<div class="page">

 <?= $this->render('header') ?>

    <div class="container">
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
        <?= Alert::widget() ?>
        <?= $content ?>
    </div>

<?= $this->render('../layouts/footer');?>

</div>
<?php $this->endBody() ?>
<!-- <script src="https://api-maps.yandex.ru/2.1/?lang=ru_RU" type="text/javascript"></script>
 -->
<script type="text/javascript">


window.onload = function() {



<?php  
 
  if($homecheker=='site/index')
  { ?>
  var loader = setTimeout(function() {
                document.querySelector(".page-loader").classList.add('loaded');   

            }, 200);
    
 <?php } elseif (($homecheker=='site/students')) { ?>

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

var mainblok = document.querySelectorAll(".cl-effect-12");
var j=1;
[].forEach.call(mainblok, function(item) {
      item.classList.add('box' + j );

    j++;
});


 var items = document.querySelectorAll("#w0-collapse ul li");
 var lastchild = items[items.length-1];
  lastchild.classList.add('last');

  document    .getElementsByTagName("ul")[0] .getElementsByTagName("li")[0]
    .classList.add('first');


var links = document.querySelectorAll('#w0-collapse ul li');
var i=1;
[].forEach.call(links, function(item) {
      item.classList.add('fadeInUp1');
      item.classList.add('animated' + i );

    i++;
});


var blocks = document.querySelectorAll(".blocktitle");

//document.getElementById('w1').classList.remove('animated1', 'lightSpeedIn');
 setTimeout(function(){
 var i=1;
[].forEach.call(blocks, function(item) {
      item.classList.add('bounceInLeft');
    i++;
});
    }, 600);

//sec var
 /*setTimeout(function(){
for (i = 0; i < blocks.length; i++) {
    blocks[0].classList.add('bounceInLeft');
}
    }, 1500);
*/

 setTimeout(function(){
 var i=1; var blocktitles = document.getElementsByClassName("blocktitle");

[].forEach.call(blocks, function(item) { item.classList.remove('bounceInLeft'); });
for (i = 0; i < blocktitles.length; i++) {blocktitles[i].style.opacity = "1";}

    }, 1600);




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
document.getElementById("full-widthid").style.marginTop = "220px";
}


document.getElementsByTagName('button')[0].onclick=handleClick;




 var newspan = document.createElement('span');
 newspan.className = "icos";

var childTag = document.querySelectorAll("ul li a");
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


};


</script>
<!-- 
<script type="text/javascript">
        ymaps.ready(init); 
        var myMap; 
        function init () { 
            var myMap = new ymaps.Map("map2", { 
                    center: [53.182762,50.093797],
                    behaviors: ['default', 'scrollZoom'], 
                    zoom: 17, 
      type: "yandex#publicMap"
                });
            myMap.controls 
            .add('zoomControl', { left: 5, top: 5 }) 
            .add('typeSelector')
            .add('mapTools', { left: 35, top: 5 }); 
         //                    controls: ['zoomControl', 'searchControl','[typeSelector]','[mapTools]'],

              
          myPlacemark1 = new ymaps.Placemark([53.182762,50.093797], {
                  balloonContent: '<div class="ballon"><img style="background: transparent;  border: none;border-radius: none;padding: 0px; margin-right: 3px;" src="/images/map/logo2.png" class="ll"/><p style="margin:3px 0px;">443099, г. Самара, <br>ул. Молодогвардейская 33, <br>оф. 232, тел.: (846) 205-77-66</p><img class="close" onclick="myMap.balloon.close()" style="background: transparent;  border: none;border-radius: none;padding: 0px;" src="/images/map/close.png"/></div>'
                }, {
                iconLayout: 'default#image',
                iconImageHref: '/images/map/icon22.png',
                iconImageSize: [64, 64],
                iconImageOffset: [-32, -64],
                  balloonContentSize: [270, 99],
                  balloonLayout: "default#imageWithContent",
                  balloonImageHref: '/images/map/ballon222.png',
                  balloonImageOffset: [-70, -100],
                  balloonImageSize: [260, 106],
                  balloonShadow: false,
                  balloonAutoPan: false
                  });
          
          myMap.geoObjects.add(myPlacemark1);

         
      myMap.geoObjects.events.add([
            'balloonopen'
        ], function (e) {
            var geoObject = e.get('target');
            myMap.panTo(geoObject.geometry.getCoordinates(), {
                                        delay: 0
                                    });
        });

    myPlacemark1.balloon.open();
    }
  </script> -->



</body>
</html>
<?php $this->endPage() ?>
