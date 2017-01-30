<?PHP

use yii\helpers\Html;
use yii\bootstrap\Nav;
use yii\bootstrap\NavBar;

 $controllerl = Yii::$app->controller;
 $homecheker = $controllerl->id.'/'.$controllerl->action->id;

$des = Yii::$app->mobileDetect->isDesktop();
$mobi = Yii::$app->mobileDetect->isMobile();
$tablet = Yii::$app->mobileDetect->isTablet();

//<?= Yii::$app->params['homechecker'] = false; 

?>






<header class="page-header">



<div class="navbar-panel-inner container">
<div class="header-top row ">


<div class="col-sm-3 col-xs-3 forlogo" >


<?php  
 
  if($homecheker=='site/index')
  {
    echo '<div class="logo-akademia hvr-up onload-logo" ></div>';
    
  }else
  { 
   echo '<div class="logo-akademia hvr-up animated fadeIn" ></div>';

  } ?>
<!-- <img class="logo-akademia hvr-up onload-logo" src="../images/logo134.png" width="134px"> -->
</div>
<div class="col-md-3 col-sm-4 col-xs-5">

<img class="logotop anilogo fadeIn" src="../images/rosauto3.png" width="540px">
<!--<p class="logotext onload-text">РОСАВТОАКАДЕМИЯ</p>
 <p class="logotextbottom">Обучение всем видам вождения! </p> -->
</div>
<div class="col-lg-offset-4 col-lg-3 col-md-offset-2 col-md-4 col-sm-5 text-right rightblock"><p class="phone">+7 (846) 255-69-99</p>
<p class="take"><a href class="hvr-wobble-horizontal">Запись ОН-ЛАЙН</a></p>
</div>

</div>


<!-- will move to footer <div class="rd-navbar-panel-inner-right toggle-original-elements">
<a href="#" class="icon icon-xxs icon-circle icon-gray-lighter fa fa-vk"></a>
</div>
</div> -->

<div class="wrap  animated fadeIn" data-spy="affix" data-offset-top="100">
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
        ['label' => 'Главная', 'url' => ['/']],
        ['label' => 'Дистанционное обучение', 'url' => ['/distance']],
        ['label' => 'Галерея', 'url' => ['/']],
        ['label' => 'Контакты', 'url' => ['/contact']],    ];
   
    echo Nav::widget([
        'options' => ['class' => 'navbar-nav navbar-right interface'],
        'items' => $menuItems,
    ]);
    NavBar::end();
    ?>
</div>
</div>


</header>