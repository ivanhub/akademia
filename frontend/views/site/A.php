<?php

/* @var $this yii\web\View */
/* @var $form yii\bootstrap\ActiveForm */
/* @var $model \frontend\models\ContactForm */

use yii\helpers\Html;
//use yii\bootstrap\ActiveForm;
//use yii\captcha\Captcha;
//use phpnt\yandexMap\YandexMaps;
//use \yii\widgets\MaskedInput;


//use frontend\components\Leftmenu;



$title = 'Категория A';
$this->title = title($title);



$this->registerMetaTag([
    'name' => 'description',
    'content' => 'Обучение вождению на мотоцикле. Получение прав категории А. Собственный автодром, опытные квалифицированные инструктора. Доступные цены. Беспроцентная рассрочка! Одна из лучших мотошкол в Самаре. Звоните!',
]);

$this->registerMetaTag([
    'name' => 'keywords',
    'content' => 'лучшая автошкола Самары, мотошкола, мотошкола Самары, главная автошкола Самары, центральная автошкола Самары, школа вождения, обучение вождению, получить права, росавтоакадемия, рос автоакадемия, росавто академия, права на мото, права на мотоцикл, права, мото, категория А, категория A, обучение на права, сдать на права, курсы водителей, мотоцикл',
]);




$this->params['breadcrumbs'][] = [
                                   /* 'template' => "<li><b>{link}</b></li>\n", */
                                    'label' => 'Автомотошкола', 
                                    'url' => ['/driving-school']
                                 ];
$this->params['breadcrumbs'][] = $title;


?>







<div class="site-automotoschool siteblock">
   

 <div class="row">
<!-- <div class="col-sm-12 col-md-3">
 Leftmenu::widget() ?>
<ul class="left2">
        <li><a href="/postupayushchim">Поступающим</a></li>
    <li><a href="/students">Учащимся</a></li>
    <li><a href="/raspisanie">Расписание</a></li>
    <li><a href="/dop-uslugi">Доп.&nbsp;услуги</a></li>
    
  
</ul>
</div> -->


<h1 class="text-center"> <?= Html::encode($title) ?></h1>
<!-- 
  <div class="containerrr">
    <div class="bike-body">
      <div class="seat"></div>
      <div class="cover"></div>
      <div class="lamp"></div>
      <div class="motor">
        <div class="part-1">
          <div class="part-1-top"></div>
          <div class="part-1-bottom"></div>
        </div>
        <div class="part-2">
          <div class="part-2-base">
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
          </div>
        </div>
      </div>
      <div class="front"></div>
      <div class="back2"></div>
    </div>
    <div class="tire"></div>
    <div class="tire"></div>
    <div class="smoke"></div>
  </div> -->
<!-- <h4 class="text-center">Качество наших услуг выше чем их стоимость.</h4>
 --><h4 class="text-center hideme"  data-ros="fadeInN"   data-options="infinite:false;animationClass:animated;duration:1500;callback:;" >Мы предлагаем Вам следующие пакеты услуг:</h4>
<br/>


<div class="col-md-offset-1 col-md-10">
<div class="col-xs-12 col-sm-4">  
<?php if (Yii::$app->mobileDetect->isMobile()) { ?>
        <div class="span3 pull-right-md animatedb fadeInLeft opac1" data-nohover="0" >
<?php } else { ?>
        <div class="span3 pull-right-md animatedb hideme" data-ros="fadeInLeft" data-options="delay:0;infinite:false;animationClass:opac1;duration:;callback:;"  style="" data-nohover="0" >
<?php } ?>
          <div class="p-item-title">ПАКЕТ<br>
          "Стандарт"</div>
          <div class="butt"><img src="../images/pics/ok.png" width="80px" alt="Пакет «Стандарт». Мотошкола в Самаре «Росавтоакадемия»" title="Пакет «Стандарт»"></div>
          <div class="mt5">
       <p style="margin-bottom:0px">Удобен для всех<br/><b style="color:#f10d09;font-size: calc(14px + 0.35vw);">АКЦИЯ <span style="font-size:130%">8000</span> р.</b></p>
       <p style="margin-bottom: -6px;margin-top: -6px;font-size: calc(8.5px + 0.35vw);">&nbsp;<!--(только до <?php
//$months = explode("|", '|января|февраля|марта|апреля|мая|июня|июля|августа|сентября|октября|ноября|декабря');
//$month = preg_replace("~\%bg~", $months[date('n', time())], '&nbsp;%bg');
//$date = date('d');
//if ($date >= 15) echo date('t'),$month; 
//elseif ($date < 15) echo "15",$month;
?>)-->
</p>
<p style="margin-top:7px;margin-bottom: 2px;"><b style="color:darkgreen;text-decoration:line-through;font-size:155%">10 000 р.</b> </p>
<p style="height:5px;">&nbsp;</p>

<!-- <div class="little"><p>Практические занятия:</p>
    <p>с 9:00 до 19:00 Вт-Пт.</p>
    <p>Теоретические занятия:</p>
    <p>с 18:00 до 20:00 Пн.,Ср.</p>    </div>       --></div>
          <div class="butt">
<?php    echo Html::a(
    'Записаться',
  ['#'],
  [ 'data-toggle' => 'modal',
    'data-target' => '#idmodal',
    'data-which' => '4',
    'class' => 'send-price call-back'
  ]
    ); 

?>
 </div>
        </div>
        </div><div class="clearfix visible-xs"></div><div class="col-xs-12 col-sm-4 spaceblock">
<div class="forsafari">
<?php if (Yii::$app->mobileDetect->isMobile()) { ?>
        <div class="span3 pull-center-md animatedb flipInY opac1" data-nohover="0">
<?php } else { ?>
        <div class="span3 pull-center-md animatedb hideme" data-ros="flipInY" data-options="delay:200;infinite:false;animationClass:opac1;duration:;callback:;"  data-nohover="0">

<?php } ?>

          <div class="p-item-title">ПАКЕТ<br>
          "Двойной A+B"</div>
          <div class="butt"><img src="../images/pics/ok.png" width="80px" alt="Пакет «Двойной A+B». Права на Мото в Самаре" title="Пакет «Двойной A+B»"></div>
          <div class="mt5">
<p class="linet">Автомобиль и Мотоцикл<br/><span style="color:#f10d09;font-weight:bolder;font-style:italic">Скидка: <span style="font-style:italic;font-size:110%">5000</span> р.!</span></p>
<p style="font-weight:bold;color:green;font-size: calc(14px + 0.35vw); margin-top:-15px;"> <span style="font-size:150%">23 000 р.</span></p>
<p style="margin-top:-20px;margin-bottom: 2px;"><b style="color:darkgreen;font-size:155%;text-decoration:line-through;">28 000 р.</b> </p>
<p style="height:5px;">&nbsp;</p>

<!-- <div class="little"><p>Практические занятия:</p>
    <p>с 9:00 до 20:00 Вт.-Сб.</p>
    <p>Теоретические занятия:</p>
    <p>с 18:00 до 20:00 Пн.,Ср.</p>    </div> -->
          </div>
          <div class="butt">
            <?php    echo Html::a(
    'Записаться',
  ['#'],
  [ 'data-toggle' => 'modal',
    'data-target' => '#idmodal',
    'data-which' => '5',
    'class' => 'send-price call-back'
  ]
    ); ?>
          </div>
        </div></div>

      </div>

      <div class="clearfix visible-xs"></div><div class="col-xs-12 col-sm-4 spaceblock">
<?php if (Yii::$app->mobileDetect->isMobile()) { ?>
        <div class="span3 pull-left-md animatedb fadeInRight opac1"  data-nohover="0">
<?php } else { ?>
            <div class="span3 pull-left-md animatedb hideme" data-ros="fadeInRight" data-options="delay:400;infinite:false;animationClass:opac1;duration:;callback:;"  data-nohover="0">
<?php } ?>    
          <div class="p-item-title">ПАКЕТ<br>
          "Индивидуальный"</div>
          <div class="butt"><img src="../images/pics/ok.png" width="80px" alt="Пакет «Индивидуальный». Права на мотоцикл в Самаре" title="Пакет «Индивидуальный»"></div>
          <div class="mt5">
<p class="linet">Вы выбираете,<br/>Мы исполняем </p>
<p style="margin-top:25px;margin-bottom: 2px;"><b style="color:darkgreen;font-size:155%"> 15 000 р. </b></p>  
<p style="height:5px;">&nbsp;</p>

<!-- <div class="little "><p>Индивидуальный график</p>
<p>занятий составляем</p>
    <p> по вашему желанию</p>
  </div>
 -->
          </div>
          <div class="butt">
            <?php    echo Html::a(
    'Записаться',
  ['#'],
  [ 'data-toggle' => 'modal',
    'data-target' => '#idmodal',
    'data-which' => '6',
    'class' => 'send-price call-back but3 '
  ]
    ); ?></div>
        </div>    </div>    
     </div></div>


  <br/>

<!-- Без скрытых платежей и сборов -->
 <h5 class="hideme" style="font-weight:bold; text-align:center"  data-ros="fadeIn"   data-options="infinite:false;animationClass:animated;duration:1500;callback:;">Как проходит обучение в автошколе:</h5>


<div class="wrapetap"> <div class="forsafari">
<div class="row text-center uslv " data-ros="flipInX"   data-options="infinite:false;animationClass:animated;duration:1500;callback:;" >
  <div class="col-sm-offset-2 col-sm-2 text-center vc"><img src="../../images/pics/theory1.png"  alt="Теория. Мотошкола в Самаре" title="Теория: 112 ч."></div>
  <div class="col-sm-7 centerxs vc"><p><b>Теория</b></p> <p>112 часов теоретических занятий, внутренний экзамен. </p>  
  <p>Консультации и тестирование с психологом.</p>
  <p>Лекции проводит преподаватель с многолетним стажем.</p>
   </div>
 </div> </div><div class="forsafari">
<div class="row text-center uslv" data-ros="flipInX"   data-options="infinite:false;animationClass:animated;delay:100;duration:1500;callback:;">
  <div class="col-sm-offset-2 col-sm-2 text-center vc"><img src="../../images/pics/drive1.png" alt="Вождение. Мотошкола в Самаре" title="Вождение: 18 ч."></div>
  <div class="col-sm-7 centerxs vc"><p><b>Вождение</b></p> <p>18 часов, 9 занятий. </p>
  <p>+2 часа подготовки к сдаче экзаменов в ГИБДД (внутренний экзамен).</p>
    <p>На время занятий выдается экипировка (шлем, наколенники). </p>


  </div>
  </div></div> 
<div class="forsafari">
<div class="row text-center uslv"  data-ros="flipInX"   data-options="infinite:false;animationClass:animated;delay:300;duration:1500;callback:;">
<div class="col-sm-offset-2 col-sm-2 text-center vc"><img src="../../images/pics/gibdd1.png"  alt="Экзамен в ГИБДД. Мотошкола в Самаре" title="Экзамен в ГИБДД"></div>
  <div class="col-sm-7 centerxs vc"> <p><b>Экзамен в ГИБДД</b></p>  <p>Дни сдачи экзаменов в ГИБДД: по субботам.</p></div>
  </div></div>
  <div class="forsafari">
<div class="row text-center uslv"  data-ros="flipInX"   data-options="infinite:false;animationClass:animated;delay:200;duration:1500;callback:;">
  <div class="col-sm-offset-2 col-sm-2 text-center vc"><img src="../../images/pics/clock1.png" alt="Срок обучения. Мотошкола в Самаре" title="Срок обучения: 1.5 мес."></div>
  <div class="col-sm-7 centerxs vc"><p><b>Срок обучения</b></p> <p>1,5 месяца. </p>
  <p>Обучение проводится в период с мая по октябрь.</p></div>
  </div></div>
</div>




<br/>

<div class="row">
<div class="col-lg-offset-2 col-lg-8 col-md-offset-1 col-md-10  col-sm-12 text-center ">
 <section class="stylecenter">


<!-- <p style="font-weight:600;font-size:22px">Обучение вождению на мотоцикле</p>
 -->
<h5 class="green text-center" data-ros="fadeInUp"   data-options="infinite:false;animationClass:animated;duration: 500;callback:;"><b>Порядок получения водительского удостоверения</b></h5>
<br/><br/>
<div class="" data-ros="fadeInLeft"   data-options="infinite:false;animationClass:animated;delay:100;duration: 1100;callback:;">
<p class="">Тяжелые мотоциклы с объемом двигателя от 125 куб. см.</p>
<img  class="img-responsive acat" src="../../images/pics/A-cat.png" alt="Мотоциклы. Категория А. Обучение вождению" title="Мотоциклы">
<div class="clearfix visible-xs"></div>
<div class="leftarrow acat"></div>
<p class="kakpr"> Обучение <br/>с 16 лет </p>
<div class="leftarrow acat"></div>
<p class="kakpr"> Открытие категории <br/>с 18 лет </p>
<div class="leftarrow acat"></div>
<p class="kakpr">Получение<br/> прав</p>
<img  class="img-responsive acat" src="../../images/pics/prava.png" alt="Права на категорию А" title="Права категории А">

</div>
<br/>
<div class="" data-ros="fadeInLeft"   data-options="infinite:false;animationClass:animated;delay:200;duration: 1100;callback:;">
<p class="">Легкие мотоциклы с объемом двигателя от 50 до 125 куб. см.</p>
<img  class="img-responsive acat" src="../../images/pics/A1-cat.png" alt="Легкие мотоциклы, мопеды. Категория А1. Обучение вождению" title="Легкие мотоциклы, мопеды">
<div class="clearfix visible-xs"></div>
<div class="leftarrow acat"></div>
<p class="kakpr"> Обучение <br/>с 16 лет </p>
<div class="leftarrow acat"></div>
<p class="kakpr"> Открытие категории <br/>с 16 лет </p>
<div class="leftarrow acat"></div>
<p class="kakpr">Получение<br/> прав</p>
<img  class="img-responsive acat" src="../../images/pics/prava.png" alt="Права на категорию А1" title="Права категории А1">
</div>

<br/>
<div class="" data-ros="fadeInLeft"   data-options="infinite:false;animationClass:animated;delay:300;duration: 1100;callback:;">
<p class=" " style="">Открывается автоматически при получении водительского удостоверения.<span class="visible-xs">(Категория М)</span></p>
<img  class="img-responsive acat" src="../../images/pics/M-cat.png" alt="Скутеры, мопеды. Категория М. Обучение вождению" title="Скутеры, мопеды">
<div class="clearfix visible-xs"></div>
<div class="leftarrow acat"></div>
<p class="kakpr"> Обучение <br/>с 14 лет </p>
<div class="leftarrow acat"></div>
<p class="kakpr"> Открытие категории <br/>с 16 лет </p>
<div class="leftarrow acat"></div>
<p class="kakpr">Получение<br/> прав</p>
<img  class="img-responsive acat" src="../../images/pics/prava.png" alt="Права на категорию М" title="Права категории М">
</div>

<br/><br/><br/>

 </section>

</div></div><!-- При поступлении в Автошколу кандидат в водители предоставляет следующие документы:--><div class="linetire"></div>
<br/><br/>
<p class="poryadok green text-center" style="font-size:28px;font-weight:bold;padding-bottom:15px;" data-ros="anim-documents"   data-options="delay:100;infinite:false;animationClass:animated;duration: 900;callback:;">
Необходимые документы для поступления в Автомотошколу:</p>
<center class="block-documents">
<p   data-ros="pullUp"   data-options="infinite:false;animationClass:animated;delay:300;duration: 400;callback:;" style="font-weight:700;color: green;"><img  class="img-responsive acat2 wobble-left" src="../images/arrow.png" width="17" style="margin-top:-4px;margin-right:10px;" alt="2 фотографии 3х4. Мотошкола «Росавтоакадемия»" title="Фотографии"> Фотографии (3х4) - 2 шт.</p>
<img   data-ros="fadeIn"   data-options="infinite:false;animationClass:animated;delay:300;duration: 1000;callback:;"  src="../images/photos.png" width=38 alt="Фотографии (3х4) - 2 шт. Права на мотоцикл в Самаре" title="Фотографии (3х4) - 2 шт.">
<p   data-ros="pullUp"   data-options="infinite:false;animationClass:animated;delay:400;duration: 400;callback:;" style="font-weight:700;color: green;padding-top:10px"><img  class="img-responsive acat2 wobble-left" src="../images/arrow.png" width="17" style="margin-top:-4px;margin-right:10px;" alt="Паспорт Рф. Мотошкола «Росавтоакадемия»" title="Паспорт"> Паспорт РФ</p>
<img   data-ros="fadeIn"   data-options="infinite:false;animationClass:animated;delay:300;duration: 1000;callback:;" src="../images/passport.png" width=38  alt="Паспорт РФ. Права на мото в Самаре" title="Паспорт РФ">
<p   data-ros="pullUp"   data-options="infinite:false;animationClass:animated;delay:500;duration: 400;callback:;" style="font-weight:700;color: green;padding-top:10px"><img  class="img-responsive acat2 wobble-left" src="../images/arrow.png" width="17" style="margin-top:-4px;margin-right:10px;" alt="Медицинская справка. Права на мопед в Самаре" title="Мед. справка"> Медицинская справка</p>
<img class=" darker20" data-ros="fadeIn"   data-options="infinite:false;animationClass:animated;delay:300;duration: 1000;callback:;" src="../images/spravka.jpg" width=19 alt="Медицинская справка. Права на скутер в Самаре" title="Медицинская справка">
<p class="green" data-ros="fadeIn"   data-options="infinite:false;animationClass:animated;delay:500;duration: 1000;callback:;"  style="font-size:20px;padding-top:20px;font-weight:bold;"">Может понадобится:</p>
</center>
<div  data-ros="fadeIn"   data-options="infinite:false;animationClass:animated;delay:600;duration: 1000;callback:;"  class="text-center" style="width:58%;margin-left: auto;margin-right: auto;">
<p style="font-size:16px;line-height: 1;" align="left"><img  class=" darker" src="../images/arrow.png" width="8" style="margin-top:-3px;margin-left:-2px;margin-right:5px;" alt="Ксерокопия водительского. Открыть категорию на мотоцикл">Ксерокопия водительского удостоверения (при открытии новой категории)</p>
<p style="font-size:16px;line-height: 1;" align="left"><img  class="darker" src="../images/arrow.png" width="8" style="margin-top:-3px;margin-left:-2px;margin-right:5px;" alt="Ксерокопия свидетельства о рождении. Открыть категорию на мото">Ксерокопия свидетельства о рождении (лицам моложе 16 лет, либо сменившим фамилию)</p>
<p style="font-size:16px;line-height: 1;" align="left"><img  class=" darker" src="../images/arrow.png" width="8" style="margin-top:-3px;margin-left:-2px;margin-right:5px;" alt="Ксерокопия документа. Открыть категорию А">Ксерокопия документа, подтверждающего изменение фамилии, имени и отчества.</p>
</div>
<!-- <div class="col-sm-offset-1 col-md-offset-1 col-xs-11 col-sm-10 col-md-10" style="">
<p style="font-size:16px;line-height: 1;padding-left:30px;">Ксерокопия свидетельства о рождении (лицам моложе 16 лет, либо сменившим фамилию)</p>
<p style="font-size:16px;line-height: 1;padding-left:30px;">Ксерокопия документа, подтверждающего изменение фамилии, имени и отчества</p>
<p style="font-size:16px;line-height: 1;padding-left:30px;">Ксерокопия водительского удостоверения (при открытии новой категории) </p>
</div>
</div> -->
<br/><br/><div class="linetire"></div>
<br/>
<p class="poryadok green text-center" style="font-size:28px;font-weight:bold;padding-bottom:15px;" data-ros="anim-documents"   data-options="delay:100;infinite:false;animationClass:animated;duration: 900;callback:;">
Расписание занятий</p><div class="hidden-xs">
<table cellspacing="0" cellpadding="0" border="0" class="timetable" align="center"  data-ros="fadeIn"   data-options="delay:200;infinite:false;animationClass:animated;duration:1200;callback:;">
    <thead>
        <tr>
            <th><p>Адрес&nbsp;учебного&nbsp;класса</p></th>
          <?php if (Yii::$app->mobileDetect->isMobile()) {  ?> 
            <th class="last"><p>Дни&nbsp;и&nbsp;время&nbsp;занятий в&nbsp;учебной&nbsp;группе</p></th><?php } ?>
          <?php if (!Yii::$app->mobileDetect->isMobile()) {  ?> 
            <th><p>Дни&nbsp;и&nbsp;время&nbsp;занятий в&nbsp;учебной&nbsp;группе</p></th>
             <th class="last"><p>Свободные места</p></th> <?php } ?>
        </tr>
    </thead>
    <tbody>
         <tr class="timetable__theory-tr"><td  colspan="4" class="timetable__theory text-center "> <span>ТЕОРИЯ</span></td></tr>
        <tr>

            <td>ул. Молодогвардейская, 33<br>т.: 255-69-99</td>
            <td>
                <span class="span2">ПН,СР: 18:00-20:00</span>
            
            </td>
             <?php if (!Yii::$app->mobileDetect->isMobile()) {  ?> 
            <td><div id="advanced-circle" class="circle fl"></div><span class="fl zel">ЕСТЬ</span></td><?php } ?>
        </tr>
        
        <tr>

            <td>ул. Осипенко, 11<br>т.: 255-69-99</td>
            <td>
                <span class="span2">ВТ,ЧТ: 18:00-20:00</span>
            </td>
             <?php if (!Yii::$app->mobileDetect->isMobile()) {  ?> 
            <td><div id="advanced-circle" class="circle fl"></div><span class="fl zel">ЕСТЬ</span></td><?php } ?>
        </tr>
                         <tr class="timetable__theory-tr"><td  colspan="4" class="timetable__theory text-center "> <span>ВОЖДЕНИЕ</span></td></tr>

         <tr>
            

            <td>Автодром,<br> ул. Уральская, 34 <br>т.: 255-69-99</td>
            <td class="text-left">
                <span class="span2">Индивидуальный график вождения</span>
            </td>
             <?php if (!Yii::$app->mobileDetect->isMobile()) {  ?> 
            <td><div id="advanced-circle" class="circle fl"></div><span class="fl zel">ЕСТЬ</span></td><?php } ?>
        </tr>

    </tbody>
    </table>
<br/>
<br/>
</div>
<div class="visible-xs" style="margin-top:-15px">
<!-- <p align="center" style="font-size:18px;font-weight:bold"> Планируемая дата начала обучения:<br/>
<span style="font-size:140%;color:#0c500c;font-weight:bold">12.05.2017</span> </p> -->
<center>
<table class="rwd-table">
<thead>
  <tr> 
    <th>Адрес учебного класса</th>
    <th>Дни и время занятий в учебной группе</th>
    <th>Свободные места</th>
  </tr></thead>
  <tr class="timetable__theory-tr"><td  colspan="3" class="timetable__theory text-center "> <span>ТЕОРИЯ</span></td></tr>
  <tr class="alt">
    <td data-th="Адрес учебного класса"><span>ул. Молодогвардейская, 33</span></td>
    <td data-th="Дни и время занятий в учебной группе"><span class="rwd-table__time">ПН,СР: 18:00-20:00</span></td>
    <td data-th="Свободные места"><div id="advanced-circle" class="circle fl"></div><span>ЕСТЬ</span></td>
  </tr>
  <tr class="alt2">
    <td data-th="Адрес учебного класса"><span>ул. Осипенко, 11</span></td>
    <td data-th="Дни и время занятий в учебной группе"><span class="rwd-table__time">ВТ,ЧТ: 18:00-20:00</span></td>
    <td data-th="Свободные места"><div id="advanced-circle" class="circle fl"></div><span>ЕСТЬ</span></td>
  </tr>
 <tr class="timetable__theory-tr"><td  colspan="3" class="timetable__theory text-center "> <span>ВОЖДЕНИЕ</span></td></tr>

  <tr class="alt">
    <td data-th="Адрес учебного класса"><span>Автодром,<br/>ул. Уральская, 34</span></td>
    <td data-th="Дни и время занятий в учебной группе"><span class="rwd-table__time">Индивидуальный график вождения</span></td>
    <td data-th="Свободные места"><div id="advanced-circle" class="circle fl"></div><span>ЕСТЬ</span></td>
  </tr>
</table>
</center><br/><br/></div>
</div>


<?php 

Yii::$app->view->registerJsFile('/assets/js/jquery.ros.js',  ['depends' => 'yii\web\JqueryAsset']); 

$this->registerJs(<<<JS



//$(".flash-success").animate({opacity: 1.0}, 1000).fadeOut("slow");

//$('#idmodal').on('close.bs.modal', function(e) { 
//setTimeout(function() {  $("#wrapacket").text(''); }, 6000);
//});


$('#idmodal').on('show.bs.modal', function(e) {
  var which = e.relatedTarget.dataset.which;
        //var newspan = document.createElement('div');
        //newspan.className = "wpacket";
if (which==4) {
$("#wrapacket").text('Пакет "Стандарт"');
 $("#contact-form").append('<div class="form-group field-fromfield required"><input type="hidden" id="pack" class="form-control" name="pack" value="Стандарт"><input type="hidden" id="packet" class="form-control" name="packet" value="Категория А / Пакет Стандарт"><p class="help-block help-block-error"></p></div>');
$("#contact-form").children('.field-packet').hide();

  } else if (which==5)
  {
$("#wrapacket").text('Пакет "Двойной A+B"');
$("#contact-form").append('<div class="form-group field-fromfield required"><input type="hidden" id="pack" class="form-control" name="pack" value="Двойной А+В"><input type="hidden" id="packet" class="form-control" name="packet" value="Категория А / Пакет Двойной А+В"><p class="help-block help-block-error"></p></div>');
$("#contact-form").children('.field-packet').hide();

  } else if (which==6) 
  {
$("#wrapacket").text('Пакет "Индивидуальный"');
$("#contact-form").append('<div class="form-group field-fromfield required"><input type="hidden" id="pack" class="form-control" name="pack" value="Индивидуальный"><input type="hidden" id="packet" class="form-control" name="packet" value="Категория А / Пакет Индивидуальный"><p class="help-block help-block-error"></p></div>');
$("#contact-form").children('.field-packet').hide();

  } else if (which==0 || which==1) 
  {
$("#wrapacket").text('');
$( ".field-forma-packet" ).show();          
$("#contact-form").children('.field-packet').show();

  };

});


window.addEventListener("load", function() {ros.init();});

JS
, yii\web\View::POS_READY);  ?>



