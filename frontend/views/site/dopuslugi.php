<?php

/* @var $this yii\web\View */
/* @var $form yii\bootstrap\ActiveForm */
/* @var $model \frontend\models\ContactForm */

use yii\helpers\Html;
//use yii\bootstrap\ActiveForm;
//use yii\captcha\Captcha;

//use frontend\components\Leftmenu;


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
   

 <div class="row"><!-- 
<div class="col-sm-12 col-md-3">


Leftmenu::widget() 



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
?>  


<ul class="left">
    <li><a href="/raspisanie">Расписание</a></li>
    <li><a href="#">Доп.&nbsp;услуги</a></li>
    <li><a href="/students">Учащимся</a></li>
    <li><a href="/postupayushchim">Поступающим</a></li>
    <li><a href="#">Условия&nbsp;обучения</a></li>  
</ul>
</div> -->






<div class="wrapall">
<section class="dopuslugi">
<h1 class="text-center">Дополнительные услуги</h1>
<p><img src="../images/pics/q1.png"> Аренда автодрома.</p>
<p>Автошкола Академия имеет свою собственную, не арендованную, оборудованную учебную площадку.
  На асфальто-бетонном покрытии нанесена разметка, в наличии достаточное количество разметочного оборудования (конуса, вешки) для оборудования зон упражнения. Площадь автодрома позволяет обеспечить комфорт и безопасность на практических занятиях и круглогодичное функционирование. Площадка освещается в темное время суток.</p>

<p><img src="../images/pics/q2.png"> Оплата дополнительных часов практических занятий по вождению.</p>
<p><img src="../images/pics/q3.png"> Консультации по приобретению, эксплуатации, хранению мотоцикла, выбору запчастей.</p>
<p><img src="../images/pics/q4.png">Обучение инструкторов по вождению.</p>

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

 <p>Если в своем послужном списке вы имеете все пункты, кроме последнего, то мы ждем Вас на повышение квалификации для получения права на обучение вождению!!!</p>
<p>Принимаются заявки на обучение преподавателей автошкол, занятых подготовкой по различным  дисциплинам по программе «Педагогические основы деятельности преподавателя по подготовке водителей автотранспортных средств».</p>

 </section>


</div>
</div>

</div>

