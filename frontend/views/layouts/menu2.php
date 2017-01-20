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

 <?= $this->render('header2') ?>

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


var links = document.querySelectorAll('ul li');
var i=1;
[].forEach.call(links, function(item) {
      item.classList.add('lightSpeedIn', 'animated'+i);
    i++;
});


 var items = document.querySelectorAll("ul li");
 var lastchild = items[items.length-1];
  lastchild.classList.add('last');

  document
    .getElementsByTagName("ul")[0]
    .getElementsByTagName("li")[0]
    .classList.add('first');
};

</script>
</body>
</html>
<?php $this->endPage() ?>
