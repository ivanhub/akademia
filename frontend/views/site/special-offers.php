<?php

/* @var $this yii\web\View */
/* @var $form yii\bootstrap\ActiveForm */
/* @var $model \frontend\models\ContactForm */

use yii\helpers\Html;
//use yii\bootstrap\ActiveForm;
//use yii\captcha\Captcha;
//use phpnt\yandexMap\YandexMaps;
//$agent=$_SERVER['HTTP_USER_AGENT'];
//dd($agent);
//if(agent($_SERVER['HTTP_USER_AGENT'])) echo '555';


$title = 'Акции и спец. предложения';
$this->title = title($title);

$this->registerMetaTag([
    'name' => 'description',
    'content' => 'Возможность дистанционного обучения теории по всем направлениям школы вождения: Права на авто и мото технику. Права на квадроцикл, снегоход, трактор, погрузчик, квадроцикл, гидроцикл, катер, снегоход и т.д. Лучшая автошкола в Самаре. Звоните!',
]);
$this->registerMetaTag([
    'name' => 'keywords',
    'content' => 'автошкола, мотошкола, права, дистанционное обучение, заочно, на дому, обучение дома, удаленное, обучение вождению, росавтоакадемия, центральная автошкола Самары, рос автоакадемия, школа вождения, права на автомобиль, услуги автошколы, главная автошкола Самары, самоходная техника, гидроцикл, права катер'
    ]);


$this->params['breadcrumbs'][] = $title;
?>


<!-- 
<div class="" id="full-widthid">
<div class="container-fluid mainblock text-center contacts">
  <div class="text-center contacts">  <div class="row">
  <div class="col-md-3 col-sm-3 col-xs-6  col-big-6  box1  cl-effect-12">
  <img class="hvr-grow1" src="../images/new_car.png" width="180px">
  <p class="blocktitlec anim_one  hvr-bob1 ">Автомотошкола</p>
  </div>
  <div class="col-md-3 col-sm-3 col-xs-6  col-big-6  box2 cl-effect-12">
  <img class="hvr-grow1" src="../images/two.png" width="150px" style="margin-top: 0;">
  <p class="blocktitlec anim_two  hvr-bob1">Самоходная техника</p>
  </div>
  <div class="col-md-3 col-sm-3 col-xs-6  col-big-6 box3  cl-effect-12">
  <img class="hvr-grow1" src="../images/boat_t2.png" width="160px">
  <p class="blocktitlec anim_three hvr-bob1">Судовождение</p>
  </div>
  <div class="col-md-3 col-sm-3 col-xs-6  col-big-6 box4  cl-effect-12">
  <img class="hvr-grow1" src="../images/new_car.png" width="180px" style="margin-top: 0;">
  <p class="blocktitlec anim_four hvr-bob1">Защитное вождение</p>
  </div>
  </div> 
  </div></div></div>
 -->

<!-- <?= Html::encode($this->title) ?> -->
<div class="site-distance  siteblock">
   
<h1 class="text-center"><?= Html::encode($title) ?></h1>
<br/>

<!--
<div class="boxxx">
 <center><h2>Акция</h2></center>
<div class="boxx">
    <div class="border-1"></div>
    <div class="border-2"></div>
    <div class="contentt">
        dfdfasdfasdfadsfasdf
    </div>
</div>
</div>-->

<div class="container2">
  <div class="uniqlo">
    <div class="product">
      <div class="product-hover"></div>
<div class="stock">
                                    <div class="wraph2"><h2>Акция</h2></div>
                                    <div class="clear"></div>
                                    <h4 abp="2242">В автошколе проходит акция: теория и пакет ГИБДД <span abp="2243">БЕСПЛАТНО! </span></h4>
<div class="clear" abp="2244"></div>
<div class="deal-info-head" abp="2246">
<div class="deal-period" abp="2247">
<div abp="2248">Период действия: <strong abp="2249">по 24 июля</strong></div>
</div>
<div class="deal-countdown" title="До окончания акции" data-dateto="1500929999">
        <span class="days">0</span>
        <span class="hours">9</span>:<span class="minutes">12</span>:<span class="seconds">1</span>
    </div>
</div>
<div class="stock_info" abp="2250">
<div abp="2251"><strong abp="2252">Спешите!</strong></div>
<div abp="2253">
<ul abp="2254">
<li abp="2255"><span abp="2256">Обучение</span> <i class="m_1" abp="2257"></i> <strong abp="2258">от 21 000 руб.</strong></li>
<li abp="2259"><span abp="2260">Теория</span> <i class="m_2" abp="2261"></i> <strong abp="2262">бесплатно!</strong></li>
<li abp="2263"><span abp="2264">ГИБДД</span> <i class="m_3" abp="2265"></i> <strong abp="2266">бесплатно!</strong></li>
</ul>
</div>
<div abp="2267"><a class="e_btn_calc" href="" abp="2268"> Забронировать место в группе </a></div>
</div>
                                </div> </div></div></div>

<br/>
<br/>
</div>

