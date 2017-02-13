<?php

/* @var $this yii\web\View */
/* @var $form yii\bootstrap\ActiveForm */
/* @var $model \frontend\models\ContactForm */

use yii\helpers\Html;
use yii\bootstrap\ActiveForm;
use yii\captcha\Captcha;
//use phpnt\yandexMap\YandexMaps;
use \yii\widgets\MaskedInput;


use frontend\components\Leftmenu;



$this->title = 'Категория A';

$this->params['breadcrumbs'][] = [
                                   /* 'template' => "<li><b>{link}</b></li>\n", */
                                    'label' => 'Автомотошкола', 
                                    'url' => ['/automotoschool']
                                 ];
$this->params['breadcrumbs'][] = $this->title;
?>






<!-- <?= Html::encode($this->title) ?> -->

<div class="site-automotoschool siteblock">
   

 <div class="row">
<div class="col-sm-12 col-md-3">


<?= Leftmenu::widget() ?>



<!-- <ul class="left2">
        <li><a href="/postupayushchim">Поступающим</a></li>
    <li><a href="/students">Учащимся</a></li>
    <li><a href="/raspisanie">Расписание</a></li>
    <li><a href="/dop-uslugi">Доп.&nbsp;услуги</a></li>
    
  
</ul> -->
</div>

<div class="col-md-9 col-sm-12">

<h1 class="text-center">Категория A</h1>

<h4 class="text-center">Качество наших услуг выше чем их стоимость.</h4>
<br/>


<div class="row-fluid">
<div class="hovergallery">  
<div clas="col-xs-6">  
        <div class="span3" style=" margin-left: 50px;" data-nohover="0">
          <div class="p-item-title">ПАКЕТ<br>
          "Стандарт"</div>
          <div class="butt"><img src="../images/pics/ok.png" width="80px"></div>
          <div class="mt5">
       <p class="linet2">Удобен для всех</p>
<p class="little2">от <b style="color:darkgreen">10 000 р.</b> </p>
<div class="little"><p>Практические занятия:</p>
    <p>с 9:00 до 16:00 Вт-Пт.</p>
    <p>Теоретические занятия:</p>
    <p>с 18:00 до 20:00 Пн.,Ср.</p>    </div>      </div>
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
        </div><div class="clearfix visible-xs"></div><div clas="col-xs-6">

        <div class="span3" style="margin-left: 20px;" data-nohover="0">
          <div class="p-item-title">ПАКЕТ<br>
          "Двойной A+B"</div>
          <div class="butt"><img src="../images/pics/ok.png" width="80px"></div>
          <div class="mt5">
<p class="linet2">Скидка 5 000 р. </p>
<p class="little2">от <b style="color:darkgreen">25 000 р.</b> </p>
<div class="little"><p>Практические занятия:</p>
    <p>с 9:00 до 20:00 Вт.-Сб.</p>
    <p>Теоретические занятия:</p>
    <p>с 18:00 до 20:00 Пн.,Ср.</p>    </div>
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
        </div></div><div class="clearfix visible-xs"></div><div clas="col-xs-6">

        <div class="span3" style=" margin-left: 20px;" data-nohover="0">
          <div class="p-item-title">ПАКЕТ<br>
          "Индивидуальный"</div>
          <div class="butt"><img src="../images/pics/ok.png" width="80px"></div>
          <div class="mt5">
<p class="linet">Вы выбираете,<br/>Мы исполняем </p>
<p>от<b style="color:darkgreen"> 15 000 р. </b></p>  
<div class="little "><p>Индивидуальный график</p>
<p>занятий составляем</p>
    <p> по вашему желанию</p>
  </div>

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


  <br/><br/><br/><br/>

 <h5 class="m350" style="font-weight:bold; text-align:center">Без скрытых платежей и сборов</h5>
<br/>
<div class="row text-center uslv">
  <div class="col-xs-2"><img src="../../images/fon/clock.png"></div>
  <div class="col-xs-10"><p><b>Срок обучения</b></p> <p>1,5 месяца </p></div>
</div>

<div class="row text-center uslv">
  <div class="col-xs-2"><img src="../../images/fon/book.png"></div>
  <div class="col-xs-10"><p><b>Теория</b></p> <p>112 часов теоретических занятий, внутренний экзамен. </p>  
  <p>консультации и тестирование с психологом.</p>
  <p>лекции проводит преподователь с многолетним стажем.</p>
   </div>
</div>
<div class="row text-center uslv">
  <div class="col-xs-2"><img src="../../images/fon/rul.png"></div>
  <div class="col-xs-10"><p><b>Вождение</b></p> <p>18 часов вождения или 6 занятий. </p>
  <p>+2 часа подготовки к сдачи экзаменов в ГИБДД (внутренний экзамен).</p>
    <p>На время занятий выдается экипировка (шлем, наколенники). </p>


  </div>
</div>
<br/><br/><br/>

 <section class="automotoschool">


<!-- <p style="font-weight:600;font-size:22px">Обучение вождению на мотоцикле</p>
 -->
<p class="green"><b>Автошкола АНО ДПО «Академия» ведет подготовку водителей мотоциклов категории А и подкатегории А1.</b></p>
<br/><br/>

<img style="display:block;margin-left:auto;margin-right:auto" src="../../images/pics/A-1.png">
<br/><br/>
<img style="display:block;margin-left:auto;margin-right:auto" src="../../images/pics/A1.png">
<br/><br/>
<p class="text-center green" style="font-weight:bold;font-style:italic">Открывается автоматически при получении водительского удостоверения</p>
<img style="display:block;margin-left:auto;margin-right:auto" src="../../images/pics/M-.png">








<br/>
<h5 class="text-center"> Услуги, которые  предоставляем бесплатно</h5>  <br/>
 
 <ul class=" preimul2">
  <li>•  подготовка пакета документов для сдачи экзамена в ГИБДД;</li>
 <li>•  организация и предоставление учебных мотоциклов на первичные экзамены (выпускной и ГИБДД);</li>
 <li>•  учебная литература в подарок: экзаменационные билеты, правила дорожного движения, 
 методичка по вождению мотоцикла, памятка по упражнениям на площадке;</li>

 <li>•  консультация с преподавателем теоретического курса по пропущенным занятиям;</li>
 <li>•  улыбка и доброжелательное отношение со стороны администрации.</li>
 </ul>


 </section>
<br/><br/>

</div>
</div>
</div>
</div>


<?php 


$this->registerJs(<<<JS
$(".flash-success").animate({opacity: 1.0}, 1000).fadeOut("slow");


$('#idmodal').on('close.bs.modal', function(e) { 
setTimeout(function() {  $("#wrapacket").text('BUBUBU'); }, 6000);


});


$('#idmodal').on('show.bs.modal', function(e) {
  var which = e.relatedTarget.dataset.which;
        //var newspan = document.createElement('div');
        //newspan.className = "wpacket";
if (which==4) {
          $("#wrapacket").text('Пакет "Стандарт"');

 $("#contact-form").append('<div class="form-group field-forma-fromfield required"><input type="hidden" id="forma-fromfield" class="form-control" name="Forma[pack]" value="Дневной"><p class="help-block help-block-error"></p></div>');


  } else if (which==5)
  {
$("#wrapacket").text('Пакет "Двойной A+B"');
 $("#contact-form").append('<div class="form-group field-forma-fromfield required"><input type="hidden" id="forma-fromfield" class="form-control" name="Forma[pack]" value="Стандарт"><p class="help-block help-block-error"></p></div>');

  } else if (which==6) 
  {
$("#wrapacket").text('Пакет "Индивидуальный"');
 $("#contact-form").append('<div class="form-group field-forma-fromfield required"><input type="hidden" id="forma-fromfield" class="form-control" name="Forma[pack]" value="Индивидуальный"><p class="help-block help-block-error"></p></div>');

  };

});

JS
, yii\web\View::POS_READY);  ?>
