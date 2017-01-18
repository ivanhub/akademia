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

  $controllerl = Yii::$app->controller;
  $homecheker = $controllerl->id.'/'.$controllerl->action->id;
  if($homecheker=='site/index')
  {
     $homecheker = true;
     //no border on home page
  }else
  {
     $homecheker = false;//border all other page
  }

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
<body>
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

$('ul').each(function() {
    $(this).find('li').each(function(i) {
        $(this).find('a').addClass('fadeInUp animated' + (i+1));
    });
});


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

};
</script>
</body>
</html>
<?php $this->endPage() ?>
