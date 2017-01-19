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

 <?= $this->render('header') ?>

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

//var b = document.querySelector("button"); 
//b.setAttribute("class", "disabled");




//var addClassVar = document.querySelector('ul li a');
//var addClassVar2 = document.querySelector('ul li a');

 //define the addclass function
 //var addClass = function(el,className){
//   if (el.classList){
//     el.classList.add(className);
//   }
//   else {
//     el.className += ' ' + className;
//  }
//};

//call the function
//addClass(addClassVar, 'newnewnew');
//addClass(addClassVar2, 'newnewnew2');

var links = document.querySelectorAll('ul li a');
var i=1;
[].forEach.call(links, function(item) {
      item.classList.add('fadeInUp', 'animated'+i);
    i++;
});


 var items = document.querySelectorAll("ul li");
 var lastchild = items[items.length-1];
  lastchild.classList.add('last');
};

//**or second worked var
//**var i=1; [].forEach.call(
//**  document.querySelectorAll('ul li a'), function(el){el.classList.add('fadeInUp','animated'+i);i++;});

//Or second war for last child
//var b=1; [].forEach.call(
//document.querySelectorAll('ul li'), function(el){ if (b==4) el.classList.add('last'); b++;});

//$('ul').each(function() {
//    $(this).find('li').each(function(i) {
//        $(this).find('a').addClass('fadeInUp animated' + (i+1));
//    });
//});


   //document.getElementById('w1').each(function() {
  //var liArr = $(this).children("li");
  //jQuery(liArr[Math.floor(Math.random() * liArr.length)]).addClass('selected');
//});
 // document.getElementById('w1').className = 'animated fadeInUp';
// $('ul li').each(function(i) {
//    if ( i === 0 ) {
//       $(this).addClass('active2');
//    }
//});

//};
</script>
</body>
</html>
<?php $this->endPage() ?>
