<?php

/* @var $this \yii\web\View */
/* @var $content string */

use yii\helpers\Html;
use yii\bootstrap\Nav;
use yii\bootstrap\NavBar;
use yii\widgets\Breadcrumbs;
use frontend\assets\Menu5Asset;
use common\widgets\Alert;

Menu5Asset::register($this);
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

 <?= $this->render('header5') ?>

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



//var links = document.querySelectorAll('ul li');
//var i=1;
//[].forEach.call(links, function(item) {
//      item.classList.add('lightSpeedIn', 'animated'+i);
//    i++;
//});

document.getElementById('w1')    .classList.add('lightSpeedIn', 'animated1');

 setTimeout(function(){
document.getElementById('w1').classList.remove('animated1', 'lightSpeedIn');
    }, 1100);

//document.getElementById('w1')    .classList.add('lightSpeedIn', 'animated1');


 var items = document.querySelectorAll("ul li");
 var lastchild = items[items.length-1];
  lastchild.classList.add('last');

  document
    .getElementsByTagName("ul")[0]
    .getElementsByTagName("li")[0]
    .classList.add('first');



 var newspan = document.createElement('span');
 newspan.className = "icos";

var childTag = document.querySelectorAll("ul li a");
var childTag1 = document.querySelector(".first");


for ( i = 0; i < childTag.length; i++)
{
   childTag[i].parentNode.insertBefore(newspan.cloneNode(true), childTag[i]);

}
document.getElementsByClassName('icos')[0].classList.add('fa-home');
document.getElementsByClassName('icos')[1].classList.add('fa-graduation-cap','hvr-icon-spin');
document.getElementsByClassName('icos')[2].classList.add('fa-camera');
document.getElementsByClassName('icos')[3].classList.add('fa-phone');





var afterli=document.getElementsByClassName("navs");//gives an array so you cannot append child to that.

//   newspan.appendChild(afterli[1]);

  var list = document.getElementById('list')

};






</script>
</body>
</html>
<?php $this->endPage() ?>
