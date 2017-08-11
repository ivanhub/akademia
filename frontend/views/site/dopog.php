<?php

/* @var $this yii\web\View */
/* @var $form yii\bootstrap\ActiveForm */
/* @var $model \frontend\models\ContactForm */

use yii\helpers\Html;
use branchonline\lightbox\Lightbox;
use yii\helpers\Url;

//use yii\bootstrap\ActiveForm;
//use yii\captcha\Captcha;
//use phpnt\yandexMap\YandexMaps;
//$agent=$_SERVER['HTTP_USER_AGENT'];
//dd($agent);
//if(agent($_SERVER['HTTP_USER_AGENT'])) echo '555';


$title = 'Курсы по ДОПОГ';
$this->title = title($title);


$this->registerMetaTag([
    'name' => 'description',
    'content' => 'Проводим профессиональное обучение и подготовку водителей по ДОПОГ (дорожная перевозка опасных грузов). Многолетний опытом. Низкие цены. Звоните сейчас!',
]);
$this->registerMetaTag([
    'name' => 'keywords',
    'content' => 'обучение, подготовка, аттестация, дорожная перевозка опасных грузов, допог, водителей, автотранспортных средств, курсы, переподготовка, повышение квалификации, академия, росакадемия, профессиональное образование, в области автомобильных перевозок, дапок, допок, автошкола, росавтоакадемия, школа вождения, рос автоакадемия, дистанционное обучение, заочно'
    ]);



$this->registerLinkTag(['rel' => 'canonical', 'href' => 'https://samarapb.ru/napravleniya/obuchenie-v-oblasti-avtomobilnyh-perevozok/perevozka-og-dopog/']);


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
<div class="site-dopog  siteblock">
   
<h1 class="text-center"><?= Html::encode($title) ?></h1>
<br/>



<div class="post-bodycopy clearfix"><p class="text">Согласно Правилам перевозок грузов автомобильным транспортом, утвержденных постановлением Правительства Российской Федерации от 15 апреля 2011 г. № 272, начиная с 25 апреля 2012 года, коммерческие перевозки опасных грузов в городском, пригородном и междугородном сообщениях осуществляются в соответствии с требованиями, установленными приложениями A и B к Европейскому соглашению о международной дорожной перевозке опасных грузов (ДОПОГ).</p>
<p class="text">Все водители, осуществляющие подобные перевозки опасных грузов должны иметь удостоверение ДОПОГ выданное Управлением государственного автодорожного надзора (УГАДН по Самарской области).</p>
<p class="text"><strong>Учебный центр «Академия»</strong> входит  в реестр аккредитованных учебных центров по подготовке водителей по перевозке опасных грузов  и предлагает обучение  по следующим учебным программам:</p>
<p class="text"><strong>Подготовка водителей, осуществляющих перевозку опасных грузов по курсам:</strong></p>
<table border="0" cellspacing="0" cellpadding="2" width="99%">
<tbody>
<tr class="alt">
<td><strong>  «Базовый курс подготовки»</strong></td>
<td><strong>24 ч.</strong></td>
</tr>
<tr>
<td><strong>«Специализированный курс в цистернах»</strong></td>
<td><strong>24 ч.</strong></td>
</tr>
<tr class="alt">
<td><strong>«Специализированный курс по класса 1»</strong></td>
<td><strong>12 ч.</strong></td>
</tr>
<tr>
<td><strong>«Специализированный курс по класса 7»</strong></td>
<td><strong>12 ч.</strong></td>
</tr>
<tr>
<td><strong>«Переподготовка водителей»</strong></td>
<td><strong>24 ч.</strong></td>
</tr>


</tbody>
</table>
<p class="text">Обучение предусматривает лекции и самостоятельные занятия с помощью обучающей контролирующей программы.</p>
<p class="text">Занятия проводятся квалифицированными преподавателями, прошедшими повышение квалификации. В наличии имеется наглядная методическая литература, плакаты, обучающие слайды, презентации, видеофильмы. В процессе обучение слушателям выдается методический материал в бумажном и электронном виде (рабочие тетради по перевозке опасных грузов, письменные инструкции, пособия водителей, буклеты).</p>
<p class="text">Учебный центр Академия практикует проведение занятий на базе организации-заказчика по согласованному графику.</p>
<h5 class="text-center"><strong>Необходимые документы:</strong></h5>
<p><strong> </strong></p>
<ul>
<li>- Заявление от физических лиц/Заявка от юридического лица установленной формы</li>
<li>- Физ. лицам – копия паспорта (стр. 2-5)</li>
<li>- Фото 1 шт.</li>
<li>- Копия водительского удостоверения (водительский стаж не менее 3 лет)</li>
</ul>
<h4 style="text-align: center;">Ссылки</h4>
<table style="width: 100%;" border="2" width="100%" bordercolor="#ccccff">
<tbody>
<tr>
<th><center><strong>№ п/п</strong></center></th>
<th><center><strong>Ресурс / Документ</strong></center></th>
<th><center><strong>Ссылка</strong></center></th>
</tr>
<tr class="alt">
<td class=" text-center">1.</td>
<td>Удостоверение об утверждении курсов подготовки</td>
<td>
<p style="text-align: center;"><?php echo  Lightbox::widget([
    'files' => [
        [
            'thumb' => '../images/pb/udostoverenie_UGADN_70x99.jpg',
            'original' => '/images/pb/udostoverenie_UGADN.jpg',
            'title' => 'Удостоверение УГАДН',
             'thumbOptions' => [
            'class' => 'img-responsive', 'alt' => '.  Удостоверение об утверждении курсов подготовки. Автошкола «Росавтоакадемия»', 'title' => "'Удостоверение УГАДН. Образец"  ]
      
        ],
        
    ]
]); ?></td>
</tr>
<tr>
<td class=" text-center">2.</td>
<td>Управление государственного автодорожного надзора по Самарской области</td>
<td class=" text-center"><a href="http://ugadn63.ru/node/38" target="_blank">Перейти</a></td>
</tr>
<tr class="alt">
<td class="text-center">3.</td>
<td>Информационный ресурс для участников рынка опасных веществ и изделий, автоперевозчиков и профессиональных учебных заведений</td>
<td class=" text-center"><a href="http://www.pogt.ru/" target="_blank">Перейти</a></td>
</tr>
</tbody>
</table>
<p style="text-align: center;">
</p><p>&nbsp;<br>
Для получения квалифицированной консультации Вы можете обратиться по электронной почте: <strong>samarapb@mail.ru</strong></p>
</p><div class="wpcf7" id="wpcf7-f3454-p1489-o2" lang="ru-RU" dir="ltr">
<div class="screen-reader-response"></div>
<form name="" action="/napravleniya/obuchenie-v-oblasti-avtomobilnyh-perevozok/perevozka-og-dopog/#wpcf7-f3454-p1489-o2" method="post" class="wpcf7-form" novalidate="novalidate">
<div style="display: none;">
<input type="hidden" name="_wpcf7" value="3454">
<input type="hidden" name="_wpcf7_version" value="4.0.2">
<input type="hidden" name="_wpcf7_locale" value="ru_RU">
<input type="hidden" name="_wpcf7_unit_tag" value="wpcf7-f3454-p1489-o2">
<input type="hidden" name="_wpnonce" value="5646748b5b">
</div>
<p><span id="more-3430"></span><br>
<a name="zajavka"></a></p>
<div class="wpcf7-response-output wpcf7-display-none"></div></form></div><p></p>
</div>


</div>

