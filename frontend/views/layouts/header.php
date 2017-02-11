<?php
/* @var $this yii\web\View */
/* @var $form yii\bootstrap\ActiveForm */
/* @var $model \frontend\models\ContactForm */

use yii\helpers\Html;
use yii\bootstrap\Nav;
use yii\bootstrap\NavBar;

use yii\bootstrap\ActiveForm;
use frontend\components\ModalForm;
use frontend\models\Forma;
use yii\base\Widget;
use yii\helpers\Url;



 $controllerl = Yii::$app->controller;
 $homecheker = $controllerl->id.'/'.$controllerl->action->id;

$des = Yii::$app->mobileDetect->isDesktop();
$mobi = Yii::$app->mobileDetect->isMobile();
$tablet = Yii::$app->mobileDetect->isTablet();

//<?= Yii::$app->params['homechecker'] = false; 

?>






<header class="page-header1">



<div class="navbar-panel-inner container"><div class="backgr">
<div class="header-top row ">


<div class="col-sm-3 col-xs-3 forlogo" >


<?php $forma = new Forma(); ?>
<?= ModalForm::widget(['model' => $forma]) ?>

<?php  
//  echo ModalWidget::widget();
  



  if($homecheker=='site/index')
  {
    echo '<a href="/"><div class="logo-akademia hvr-up onload-logo" ></div></a>';
    
  }else
  { 
   echo '<a href="/"><div class="logo-akademia hvr-up animated fadeIn" ></div></a>';

  } ?>
<!-- <img class="logo-akademia hvr-up onload-logo" src="../images/logo134.png" width="134px"> -->
</div>
<div class="col-md-3 col-sm-4 col-xs-5">

<img class="logotop anilogo fadeIn" src="/images/rosauto3.png" width="540px">
<!--<p class="logotext onload-text">РОСАВТОАКАДЕМИЯ</p>-->
 <p class="logotextbottom">Лицензия № 4913 от 16.04.2013 г. </p> 
</div>
<div class="col-lg-offset-4 col-lg-3 col-md-offset-2 col-md-4 col-sm-5 text-right rightblock"><p class="phone"><a href="tel:8846255-69-99"> +7 (846) 255-69-99</a></p>
<p class="take">
<?php    echo Html::a(
    'Запись ОН-ЛАЙН',
  ['#'],
  [ 'data-toggle' => 'modal',
    'data-target' => '#idmodal',
    'data-which' => '0',
    'class' => 'hvr-wobble-horizontal'
  ]
    ); ?>

</p>
</div>

</div>


<!-- will move to footer <div class="rd-navbar-panel-inner-right toggle-original-elements">
<a href="#" class="icon icon-xxs icon-circle icon-gray-lighter fa fa-vk"></a>
</div>
</div> -->

<div class="wrap  animated fadeIn" data-spy="affix" data-offset-top="100">
<!--   <div class="greenlineup"></div>
 -->

<div class="logo46"></div>

    <?php
    NavBar::begin([
     //   'brandLabel' => 'Учебный центр "Академия"',
        'brandUrl' => Yii::$app->homeUrl,
        'options' => [
            'class' => 'navbar navbar-default navshadow skew-menu centering',


        ],
    ]);
    $menuItems = [
 ['label' => 'Главная', 'url' => ['/'], 'active' => $this->context->route == 'site/index'],
        ['label' => 'Дистанционное обучение', 'url' => ['/distance'], 'active' => $this->context->route == 'site/distance'],
        ['label' => 'Галерея', 'url' => ['/gallery'], 'active' => $this->context->route == 'site/gallery'],
        ['label' => 'Об организации', 'url' => ['/about-us'], 'active' => $this->context->route == 'site/aboutus'],
        ['label' => 'Контакты', 'url' => ['/contact'], 'active' => $this->context->route == 'site/contact']];
   
    echo Nav::widget([
        'options' => ['class' => 'navbar-nav navbar-right interface'],
        'items' => $menuItems,
    ]);

    NavBar::end();
    ?>
<!--   <div class="greenlinebot"></div>  
 --></div>
</div></div>


</header>



