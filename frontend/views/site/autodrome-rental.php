<?php

/* @var $this yii\web\View */
/* @var $form yii\bootstrap\ActiveForm */
/* @var $model \frontend\models\ContactForm */

use yii\helpers\Html;
//use yii\bootstrap\ActiveForm;
//use yii\captcha\Captcha;

//use frontend\components\Leftmenu;


$title = 'Дополнительные услуги';
$this->title = title($title);

$this->registerMetaTag([
    'name' => 'description',
    'content' => 'Специальные программы: Курс "Спецсигналы". Курс "Допог". Обучаем инструкторов по вождению. Аренда автодрома. Индивидуальные занятия с инструктором. Звоните!',
]);
$this->registerMetaTag([
    'name' => 'keywords',
    'content' => 'автошкола, мотошкола, росавтоакадемия, спецсигналы, ДОПОГ, обучение, обучение инструкторов по вождению, аренда автодрома, центральная автошкола Самары, обучение вождению, услуги автошколы, школа вождения, права, рос автоакадемия, права на автомобиль, главная автошкола Самары'
    ]);



/* $this->params['breadcrumbs'][] = [ /* 'template' => "<li><b>{link}</b></li>\n", 
                                    'label' => 'Автомотошкола', 
                                    'url' => ['/automotoschool'] 
                                 ]; */
$this->params['breadcrumbs'][] = $title;
?>






<!--  --> 
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
<h1 class="text-center"><?= Html::encode($title) ?></h1>


<br/>




 <div class="panel-group" id="accordion">
    <div class="panel panel-default">
      <div class="panel-heading">
        <h4 class="panel-title text-center">
          <a data-toggle="collapse" data-parent="#accordion" href="#specialsignals">Курс "Спецсигналы"</a>
        </h4>
      </div>
      <div id="specialsignals" class="panel-collapse collapse">
        <div class="panel-body"><p>
         Подготовка водителей к управлению транспортными средствами категории «А»,
    «В», «С» и «D» оборудованными устройствами для подачи специальных световых
    и звуковых сигналов.</p>
    <p>
    <strong>Срок обучения: </strong>
    36 часов.
</p>
<p>
    <strong>После прохождения данного курса Вы:</strong>
</p>
<ul type="disc" class="preimul gal4">
    <li>
        Научитесь применять на практике защитный и безопасный стиль вождения.
    </li>
    <li>
        Сформируете собственную психологическую модель поведения.
    </li>
    <li>
        Сможете видеть скрытые механизмы совершения того или иного действия,
        маневра окружающими участниками дорожного движения.
    </li>
    <li>
        Узнаете истинный смысл правил дорожного движения и научитесь их умело
        применять на практике.
    </li>
    <li>
        Получите мотивацию на компенсацию ошибок других участников дорожного
        движения.
    </li>
    <li>
        Сможете установить безопасное пространство вокруг автомобиля и умело
        его поддерживать.
    </li>
    <li>
        Научитесь проводить анализ ДТП и применять опыт их ошибок в своей
        практике.
    </li>
</ul>
<p>
    В конце обучения проводится итоговое экзаменационное испытание, на
    основании результатов которого выдается свидетельство о прохождении
    подготовки установленной формы.
</p>

</div>
      </div>
    </div>

    <div class="panel panel-default">
      <div class="panel-heading">
        <h4 class="panel-title text-center">
          <a data-toggle="collapse" data-parent="#accordion" href="#DOPOG">Курс "Перевозка опасных крузов (ДОПОГ)"</a>
        </h4>
      </div>
      <div id="DOPOG" class="panel-collapse collapse">
        <div class="panel-body">

<div class="post-bodycopy clearfix">


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
<tr class="alt">
<td><strong>«Переподготовка водителей»</strong></td>
<td><strong>24 ч.</strong></td>
</tr>
</tbody>
</table>
<br/>
<p class="text"><strong>Форма обучения:</strong> очная.</p>

<p class="text-center">Для более подробной информации по курсу, перейдите <a style="text-decoration:underline;" href="/DOPOG">по ссылке.</a></p>

</div>
</div>



</div>
      </div>

    <div class="panel panel-default">
      <div class="panel-heading">
        <h4 class="panel-title text-center">
          <a data-toggle="collapse" data-parent="#accordion" href="#instructor_training">
          <img src="../images/pics/q4.png" width="50" style="margin-right:15px" alt='Курс "Обучение инструкторов по вождению". Автошкола г. Самара' title="Обучение инструкторов по вождению">Курс "Обучение инструкторов по вождению"</a>
        </h4>
      </div>
      <div id="instructor_training" class="panel-collapse collapse">
        <div class="panel-body">
<p><b>Наш Учебный Центр</b> проводит подготовку мастеров производственного обучения как для получения права на обучение вождению, так и для его подтверждения (1 раз в 3 года). </p>

<p style="font-weight:bold">Что нужно чтобы стать инструктором по вождению? </p>

<p>Чтобы получить четкое представление о том, как стать инструктором по вождению автомобиля, необходимо изучить список требований к будущему преподавателю, без которого работа инструктором по вождению попросту невозможна.</p>
<p><b>Необходимо:</b> </p>

<ul class="preimul2 preimul">
 <li>•   Наличие водительского удостоверения (начиная с категории В). </li>
 <li>•  Опыт вождения автомобиля (стаж не менее 3-х лет). </li>
 <li>•  Наличие образования - не ниже среднего профессионального.</li>
 <li>•  Безукоризненное знание правил дорожного движения. </li>
 <li>•  Удостоверения о повышении квалификации.</li>
 </ul>

 <p>Если в своем послужном списке вы имеете все пункты, кроме последнего, то мы ждем Вас на повышение квалификации для получения права на обучение вождению!!!</p>
<p>Принимаются заявки на обучение преподавателей автошкол, занятых подготовкой по различным  дисциплинам по программе «Педагогические основы деятельности преподавателя по подготовке водителей автотранспортных средств».</p>


</div>
      </div>
    </div>
        <div class="panel panel-default">
      <div class="panel-heading"  style="padding: 15px 15px;">
        <h4 class="panel-title text-center">
          <a data-toggle="collapse" data-parent="#accordion" href="#Arenda_avtodroma">
          <img src="../images/pics/q22.png" width="55" style="margin-right:15px"  alt="Аренда автодрома в Самаре" title="Аренда автодрома">Аренда автодрома</a>
        </h4>
      </div>
      <div id="Arenda_avtodroma" class="panel-collapse collapse">
        <div class="panel-body">

<p style="text-indent:60px"><strong>Учебный центр «Академия»</strong> имеет свою собственную, не арендованную, оборудованную учебную площадку.
  На асфальто-бетонном покрытии нанесена разметка, в наличии достаточное количество разметочного оборудования (конуса, вешки) для оборудования зон упражнения. Площадь автодрома позволяет обеспечить комфорт и безопасность на практических занятиях и круглогодичное функционирование. Площадка освещается в темное время суток. </p>
<p style="text-indent:60px"><b>Размер оплаты</b> (почасовая):</p>
<ul class="preimul">
<li>-Автодром на Вашем автомобиле - 100 руб.</li>
<li>-Автодром на автомобиле школы с инструктором - 500 руб.</li>
</ul>
</div>
      </div>
    </div>
        <div class="panel panel-default">
      <div class="panel-heading" style="padding: 15px 15px;">
        <h4 class="panel-title text-center">
          <a data-toggle="collapse" data-parent="#accordion" href="#consultation"><img src="../images/pics/q44.png" width="50" style="margin-right:15px" alt="Индивидуальные занятия с инструктором. Автошкола г. Самара «Росавтоакадемия»" title="Индивидуальные занятия с инструктором">Индивидуальные занятия с инструктором</a>
        </h4>
      </div><a name="consultation"></a>
      <div id="consultation" class="panel-collapse collapse">
        <div class="panel-body"  style="text-indent:60px">
<ul class="gal4 preimul2"><li>
    Если вы пока еще с опаской садитесь за руль, боитесь перестраиваться из
    ряда в ряд или вам плохо дается параллельная парковка – стоит еще
    пару-тройку раз встретиться с нашим инструктором.
</li>
<li>
    Мы поможем Вам восстановить навыки вождения автомобиля после длительного перерыва.
</li>
<li>
        Дополнительные занятия по вождению будут особенно полезны для людей,
        которые собираются в скором времени устраиваться на работу водителями.

</li>
<li>
    На дополнительных занятиях наши инструктора помогут Вам отточить навыки
    вождения до совершенства не только на нашем автодроме, но и на оживленных
    городских улицах. Занятия с инструктором проводятся на автомобиле автошколы
    или на Вашем автомобиле.
    </li>
</ul>
<p>
    Аренда автодрома (почасовая):
</p>

<p>
    Аренда автодрома на собственном автомобиле – 100 руб.
</p>
<p>
    Аренда автодрома на нашем автомобиле с инструктором – 500 руб.
</p>
<p>
    Вождение по городу с инструктором – 500 руб.
</p>
</div>
      </div>
    </div>
</div>




<!--
<img src="../images/pics/q1.png">
<p><img src="../images/pics/q3.png"> Консультации по приобретению, эксплуатации, хранению мотоцикла, выбору запчастей.</p>
<p><img src="../images/pics/q4.png">Обучение инструкторов по вождению.</p>
-->

 </section>


</div>
</div>

</div>

<?php 

//peremotka vverh to active accordion, after click
$this->registerJs(<<<JS

var lanopt = $(".panel-group");

lanopt.on("show.bs.collapse",".collapse", function(){
   lanopt.find(".collapse.in").collapse("hide");
   
    var offset = $(this).find('.collapse.in').prev('.panel-heading');
        if(offset) {
            $('html,body').animate({
                scrollTop: $('.panel-title a').offset().top -50
            }, 500); 
        }
});

JS
, yii\web\View::POS_READY); ?>



