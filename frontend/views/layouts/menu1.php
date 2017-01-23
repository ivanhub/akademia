<?php

/* @var $this \yii\web\View */
/* @var $content string */

use yii\helpers\Html;
use yii\bootstrap\Nav;
use yii\bootstrap\NavBar;
use yii\widgets\Breadcrumbs;
use frontend\assets\Menu1Asset;
use common\widgets\Alert;

Menu1Asset::register($this);
$controll = Yii::$app->controller;
$action = $controll->action->id;
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

<div class="page text-center">

 <?= $this->render('header1') ?>

    <div class="container">
        <?= Breadcrumbs::widget([
              'homeLink' => [ 
                      'label' => Yii::t('yii', 'Главная'),
                      'url' => Yii::$app->homeUrl,
                 ],
               'links' => isset($this->params['breadcrumbs']) ? $this->params['breadcrumbs'] : [],
        ]) ?>
        <?= Alert::widget() ?>
        <?= $content ?>
    </div>

<?= $this->render('../layouts/footer') ?>

</div>
<?php $this->endBody() ?>
<script type="text/javascript">


window.onload = function() {

/*
window.resize(function(){
    if(screen.width >= 3099){

img.setAttribute("align", "right");
        //do something
    }
});
*/
var img = document.getElementsByTagName("img");
go();
window.addEventListener('resize', go);

function go(){
    if (document.documentElement.clientWidth >=3099)  {

img[0].setAttribute("align", "right");
img[1].setAttribute("align", "left");
img[2].setAttribute("align", "right");
img[4].setAttribute("align", "left");



    }
}


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


 var items = document.querySelectorAll("ul li");
 var lastchild = items[items.length-1];
  lastchild.classList.add('last');

  document    .getElementsByTagName("ul")[0] .getElementsByTagName("li")[0]
    .classList.add('first');


var links = document.querySelectorAll('ul li');
var i=1;
[].forEach.call(links, function(item) {
      item.classList.add('fadeInUp1', 'animated'+i);
    i++;
});


var blocks = document.querySelectorAll(".mainblock .row p");

//document.getElementById('w1').classList.remove('animated1', 'lightSpeedIn');
 setTimeout(function(){
 var i=1;
[].forEach.call(blocks, function(item) {
      item.classList.add('bounceInLeft');
    i++;
});
    }, 1500);




 setTimeout(function(){
 var i=1; var blocktitles = document.getElementsByClassName("blocktitle");

[].forEach.call(blocks, function(item) { item.classList.remove('bounceInLeft'); });
for (i = 0; i < blocktitles.length; i++) {blocktitles[i].style.opacity = "1";}

    }, 3000);





 


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







};






</script>
</body>
</html>
<?php $this->endPage() ?>
