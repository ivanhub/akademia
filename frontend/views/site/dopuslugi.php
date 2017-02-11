<?php

/* @var $this yii\web\View */
/* @var $form yii\bootstrap\ActiveForm */
/* @var $model \frontend\models\ContactForm */

use yii\helpers\Html;
use yii\bootstrap\ActiveForm;
use yii\captcha\Captcha;
use phpnt\yandexMap\YandexMaps;

use yii\widgets\Menu;


$this->title = 'Дополнительные услуги';
$this->params['breadcrumbs'][] = [
                                   /* 'template' => "<li><b>{link}</b></li>\n", */
                                    'label' => 'Автомотошкола', 
                                    'url' => ['/automotoschool'] 
                                 ];
$this->params['breadcrumbs'][] = $this->title;
?>






<!-- <?= Html::encode($this->title) ?> --> 
<div class="site-automotoschool  siteblock">
   

 <div class="row">
<div class="col-sm-12 col-md-3">


<?php

echo Menu::widget([

    'items' => [
        ['label' => 'Запись на обучение', 'url' => ['/postupayushchim'],'active' => $this->context->route == 'site/postupayushchim'],
        ['label' => 'Расписание занятий', 'url' => ['/raspisanie'],'active' => $this->context->route == 'site/raspisanie'],
        ['label' => 'Наши преимущества', 'url' => ['/our-advantages'],'active' => $this->context->route == 'site/ouradvantages'],
        ['label' => 'Дополнительные услуги', 'url' => ['/dop-uslugi'], 'active' => $this->context->route == 'site/dopuslugi',
        'class' => 'biaka'],

    ],
    'options' => [
          //'id'=>'navid',
          'class' => 'menu',
          'style'=>'float: left; font-size: 16px;',
          'data'=>'menu',
        ],

    'activeCssClass'=>'active',
    'linkTemplate' => '<a href="{url}"><div class="menuItem"><span>{label}</span></div></a>',


]);

?>
<!-- 

 <?= leoshtika\bootstrap\NavSidebar::widget([
    'items' => [
        [
            'url' => ['site/index'],
            'label' => 'Запись на обучение',
            'icon' => 'home' // This is a bootstrap icon name
        ],
        [
            'url' => ['site/about'],
            'label' => 'Расписание занятий',
            'icon' => 'info-sign' // This is a bootstrap icon name
        ],
        [
            'url' => ['site/about'],
            'label' => 'Наши преимущества',
            'icon' => 'info-sign' // This is a bootstrap icon name
        ],
        [
            'url' => ['/dop-uslugi'],
            'label' => 'Дополнительные услуги',
            'icon' => 'info-sign', // This is a bootstrap icon name
            'active' => $this->context->route == 'site/dopuslugi',

'activeCssClass' => 'active'
        ],
    ],
]);
?>  -->


<!-- <ul class="left">
    <li><a href="/raspisanie">Расписание</a></li>
    <li><a href="#">Доп.&nbsp;услуги</a></li>
    <li><a href="/students">Учащимся</a></li>
    <li><a href="/postupayushchim">Поступающим</a></li>
    <li><a href="#">Условия&nbsp;обучения</a></li>  
</ul>-->
</div> 






<div class="col-md-9 col-sm-12">
<section class="dopuslugi">
<h1 class="text-center">Дополнительные услуги</h1>
<p>1(значок) Аренда автодрома.</p>
<p>Автошкола Академия имеет свою собственную, не арендованную, оборудованную учебную площадку.
  На асфальто-бетонном покрытии нанесена разметка, в наличии достаточное количество разметочного оборудования (конуса, вешки) для оборудования зон упражнения. Площадь автодрома позволяет обеспечить комфорт и безопасность на практических занятиях и круглогодичное функционирование. Площадка освещается в темное время суток.</p>

<p>2)(значок) Оплата дополнительных часов практических занятий по вождению.</p>
<br/>
<h6 class="text-center">Обучение инструкторов по вождению.</h6>

<p>Наш Учебный Центр проводит подготовку мастеров производственного обучения как для получения права на обучение вождению, так и для его подтверждения (1 раз в 3 года). </p>

<p style="font-style:italic;">Что нужно чтобы стать инструктором по вождению? </p>

<p>Чтобы получить четкое представление о том, как стать инструктором по вождению автомобиля, необходимо изучить список требований к будущему преподавателю, без которого работа инструктором по вождению попросту невозможна.</p>
<p>Необходимо: </p>

<ul class="preimul2 preimul">
 <li>•   Наличие водительского удостоверения (начиная с категории В); </li>
 <li>•  Опыт вождения автомобиля (стаж не менее 3-х лет); </li>
 <li>•  Наличие образования - не ниже среднего профессионального;</li>
 <li>•  Безукоризненное знание правил дорожного движения; </li>
 <li>•  Удостоверения о повышении квалификации.</li>
 </ul>

 <p>Если в своем послужном списке вы имеете все пункты, кроме последнего, то мы ждем вас на повышение квалификации для получения права на обучение вождению!!!</p>
<p>Принимаются заявки на обучение преподавателей автошкол, занятых подготовкой по различным  дисциплинам по программе «Педагогические основы деятельности преподавателя по подготовке водителей автотранспортных средств».</p>

 </section>


</div>
</div>

</div>

