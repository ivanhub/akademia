<?php

/* @var $this yii\web\View */
/* @var $form yii\bootstrap\ActiveForm */
/* @var $model \frontend\models\ContactForm */

use yii\helpers\Html;
use yii\bootstrap\ActiveForm;
//use yii\captcha\Captcha;
//use phpnt\yandexMap\YandexMaps;
use \yii\widgets\MaskedInput;


//use frontend\components\Leftmenu;



$this->title = 'Категория A';

$this->params['breadcrumbs'][] = [
                                   /* 'template' => "<li><b>{link}</b></li>\n", */
                                    'label' => 'Автомотошкола', 
                                    'url' => ['/automotoschool']
                                 ];
$this->params['breadcrumbs'][] = $this->title;
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


<h1 class="text-center"> <?= Html::encode($this->title) ?></h1>
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
 --><h4 class="text-center">Мы предлагаем Вам следующие пакеты услуг:</h4>
<br/>

<div class="col-md-offset-1 col-md-10">
<div class="col-sm-12 col-md-4">  
        <div class="span3 pull-right-md" style="" data-nohover="0">
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
        </div><div class="clearfix visible-xs"></div><div class="col-sm-12 col-md-4">

        <div class="span3 pull-center-md" style="" data-nohover="0">
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
        </div></div><div class="clearfix visible-xs"></div><div class="col-sm-12 col-md-4">

        <div class="span3 pull-left-md" style="" data-nohover="0">
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


  <br/>

<!-- Без скрытых платежей и сборов -->
 <h5 class="" style="font-weight:bold; text-align:center">Как проходит обучение в автошколе:</h5>


<div class="wrapetap">
<div class="row text-center uslv">
  <div class="col-xs-offset-2 col-xs-2 text-center"><img src="../../images/pics/theory1.png"></div>
  <div class="col-xs-7"><p><b>Теория</b></p> <p>112 часов теоретических занятий, внутренний экзамен. </p>  
  <p>консультации и тестирование с психологом.</p>
  <p>лекции проводит преподователь с многолетним стажем.</p>
   </div>
</div>
<div class="row text-center uslv">
  <div class="col-xs-offset-2 col-xs-2 text-center"><img src="../../images/pics/drive1.png"></div>
  <div class="col-xs-7"><p><b>Вождение</b></p> <p>18 часов вождения или 6 занятий. </p>
  <p>+2 часа подготовки к сдачи экзаменов в ГИБДД (внутренний экзамен).</p>
    <p>На время занятий выдается экипировка (шлем, наколенники). </p>


  </div>
</div>
<div class="row text-center uslv">
  <div class="col-xs-offset-2 col-xs-2 text-center"><img src="../../images/pics/clock1.png"></div>
  <div class="col-xs-7"><p><b>Срок обучения</b></p> <p>1,5 месяца. </p>
  <p>Обучение проводится в период с мая по октябрь.</p></div>
</div>

<div class="row text-center uslv">
<div class="col-xs-offset-2 col-xs-2 text-center"><img src="../../images/pics/gibdd1.png"></div>
  <div class="col-xs-7"> <p><b>Экзамен в ГИБДД</b></p>  <p>Дни сдачи экзаменов в ГИБДД: по субботам.</p></div>
</div>
</div>




<br/>

<div class="row">
<div class="col-md-offset-2 col-md-8">
 <section class="stylecenter">


<!-- <p style="font-weight:600;font-size:22px">Обучение вождению на мотоцикле</p>
 -->
<h5 class="green text-center"><b>Порядок получения водительского удостоверения</b></h5>
<br/><br/>

<p class="">Тяжелые мотоциклы с объемом двигателя от 125 куб. см.</p>
<img style="display:block;margin-left:auto;margin-right:auto;margin-top:-15px" src="../../images/pics/A-1.png">
<br/>
<p class="">Легкие мотоциклы с объемом двигателя от 50 до 125 куб. см.</p>
<img style="display:block;margin-left:auto;margin-right:auto;margin-top:-15px" src="../../images/pics/A1.png">
<br/>
<p class=" " style="">(открывается автоматически при получении водительского удостоверения)</p>
<img style="display:block;margin-left:auto;margin-right:auto;margin-top:-15px" src="../../images/pics/M-.png">



<br/>

 </section>
<br/><br/>

</div></div></div>

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
