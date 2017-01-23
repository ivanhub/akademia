<?PHP
use yii\helpers\Html;
use yii\bootstrap\Nav;
use yii\bootstrap\NavBar;

 $controllerl = Yii::$app->controller;
  $homecheker = $controllerl->id.'/'.$controllerl->action->id;

?>
<header class="page-header">



<div class="rd-navbar-panel-inner container-fluid">
<div class="rd-navbar-panel-inner-left row ">
<?= Yii::$app->params['homechecker'] = false; ?>
<?php  
 
  if($homecheker=='site/index')
  {
    echo '<div class="logo-akademia hvr-up onload-logo" ></div>';
     //no border on home page
  }else
  {
    echo '<div class="logo-akademia hvr-up" ></div>';
//border all other page
  } ?>



<div class="col-sm-3 col-xs-3 forlogo" ></div>
<div class="col-md-3 col-sm-4 col-xs-5"><p class="logotext onload-text">РОСАВТОАКАДЕМИЯ.РФ</p></div>
<div class="col-lg-offset-4 col-lg-3 col-md-offset-3 col-md-3 col-sm-4 text-right"><p class="phone">+7 (846) 255-69-99</p>
<p class="take"><a href>Запись ON-LINE</a></p>
</div>

</div>


<!-- will move to footer <div class="rd-navbar-panel-inner-right toggle-original-elements">
<a href="#" class="icon icon-xxs icon-circle icon-gray-lighter fa fa-vk"></a>
</div>
</div> -->

<div class="wrap  animated fadeIn" data-spy="affix" data-offset-top="92">
    <?php
    NavBar::begin([
     //   'brandLabel' => 'Учебный центр "Академия"',
        'brandUrl' => Yii::$app->homeUrl,
        'options' => [
            'class' => 'navbar navbar-default navshadow skew-menu',
        ],
    ]);
    $menuItems = [
        ['label' => 'Главная', 'url' => ['/site/index']],
        ['label' => 'Дистанционное обучение', 'url' => ['/site/about']],
        ['label' => 'Галерея', 'url' => ['/site/gallery']],
        ['label' => 'Контакты', 'url' => ['/site/contact']],    ];
   
    echo Nav::widget([
        'options' => ['class' => 'navbar-nav navbar-right interface'],
        'items' => $menuItems,
    ]);
    NavBar::end();
    ?>
</div>
</div>


</header>