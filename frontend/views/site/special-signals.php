<?php

/* @var $this yii\web\View */
/* @var $form yii\bootstrap\ActiveForm */
/* @var $model \frontend\models\ContactForm */

use yii\helpers\Html;
//use yii\bootstrap\ActiveForm;
//use yii\captcha\Captcha;

//use frontend\components\Leftmenu;


$title = 'Курс "Спецсигналы"';
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


        <div class="panel-body"><p>
         <b>Учебный центр "Росавтоакадемия"</b> проводит подготовку водителей к управлению транспортными средствами категории <b>«А»,
    «В», «С» и «D»</b> оборудованными устройствами для подачи специальных световых
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



