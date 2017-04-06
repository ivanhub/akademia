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
          <div class="butt"><img src="../images/pics/ok.png" width="80px"></div>
          <div class="mt5">
       <p style="margin-bottom:0px">Удобен для всех<br/><b style="color:#f62a2a;font-size: calc(14px + 0.35vw);">АКЦИЯ 5000 р.</b></p>
       <p style="margin-bottom: -6px;margin-top: -6px;font-size: calc(8.5px + 0.35vw);">до 7 апреля</p>
<p style="margin-top:7px;margin-bottom: 2px;">от <b style="color:darkgreen;text-decoration:line-through">10 000 р.</b> </p>
<div class="little"><p>Практические занятия:</p>
    <p>с 9:00 до 19:00 Вт-Пт.</p>
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
        </div><div class="clearfix visible-xs"></div><div class="col-xs-12 col-sm-4 spaceblock">
<div class="forsafari">
<?php if (Yii::$app->mobileDetect->isMobile()) { ?>
        <div class="span3 pull-center-md animatedb flipInY opac1" data-nohover="0">
<?php } else { ?>
        <div class="span3 pull-center-md animatedb hideme" data-ros="flipInY" data-options="delay:200;infinite:false;animationClass:opac1;duration:;callback:;"  data-nohover="0">

<?php } ?>

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
 <h5 class="hideme" style="font-weight:bold; text-align:center"  data-ros="fadeIn"   data-options="infinite:false;animationClass:animated;duration:1500;callback:;">Как проходит обучение в автошколе:</h5>


<div class="wrapetap"> <div class="forsafari">
<div class="row text-center uslv " data-ros="flipInX"   data-options="infinite:false;animationClass:animated;duration:1500;callback:;" >
  <div class="col-sm-offset-2 col-sm-2 text-center"><img src="../../images/pics/theory1.png"></div>
  <div class="col-sm-7 centerxs"><p><b>Теория</b></p> <p>112 часов теоретических занятий, внутренний экзамен. </p>  
  <p>Консультации и тестирование с психологом.</p>
  <p>Лекции проводит преподаватель с многолетним стажем.</p>
   </div>
 </div> </div><div class="forsafari">
<div class="row text-center uslv" data-ros="flipInX"   data-options="infinite:false;animationClass:animated;delay:100;duration:1500;callback:;">
  <div class="col-sm-offset-2 col-sm-2 text-center"><img src="../../images/pics/drive1.png"></div>
  <div class="col-sm-7 centerxs"><p><b>Вождение</b></p> <p>18 часов вождения или 6 занятий. </p>
  <p>+2 часа подготовки к сдаче экзаменов в ГИБДД (внутренний экзамен).</p>
    <p>На время занятий выдается экипировка (шлем, наколенники). </p>


  </div>
  </div></div> <div class="forsafari">
<div class="row text-center uslv"  data-ros="flipInX"   data-options="infinite:false;animationClass:animated;delay:200;duration:1500;callback:;">
  <div class="col-sm-offset-2 col-sm-2 text-center"><img src="../../images/pics/clock1.png"></div>
  <div class="col-sm-7 centerxs"><p><b>Срок обучения</b></p> <p>1,5 месяца. </p>
  <p>Обучение проводится в период с мая по октябрь.</p></div>
  </div></div>
<div class="forsafari">
<div class="row text-center uslv"  data-ros="flipInX"   data-options="infinite:false;animationClass:animated;delay:300;duration:1500;callback:;">
<div class="col-sm-offset-2 col-sm-2 text-center"><img src="../../images/pics/gibdd1.png"></div>
  <div class="col-sm-7 centerxs"> <p><b>Экзамен в ГИБДД</b></p>  <p>Дни сдачи экзаменов в ГИБДД: по субботам.</p></div>
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
<img  class="img-responsive acat" src="../../images/pics/A-cat.png">
<div class="clearfix visible-xs"></div>
<div class="leftarrow acat"></div>
<p class="kakpr"> Обучение <br/>с 16 лет </p>
<div class="leftarrow acat"></div>
<p class="kakpr"> Открытие категории <br/>с 18 лет </p>
<div class="leftarrow acat"></div>
<p class="kakpr">Получение<br/> прав</p>
<img  class="img-responsive acat" src="../../images/pics/prava.png">

</div>
<br/>
<div class="" data-ros="fadeInLeft"   data-options="infinite:false;animationClass:animated;delay:200;duration: 1100;callback:;">
<p class="">Легкие мотоциклы с объемом двигателя от 50 до 125 куб. см.</p>
<img  class="img-responsive acat" src="../../images/pics/A1-cat.png">
<div class="clearfix visible-xs"></div>
<div class="leftarrow acat"></div>
<p class="kakpr"> Обучение <br/>с 16 лет </p>
<div class="leftarrow acat"></div>
<p class="kakpr"> Открытие категории <br/>с 16 лет </p>
<div class="leftarrow acat"></div>
<p class="kakpr">Получение<br/> прав</p>
<img  class="img-responsive acat" src="../../images/pics/prava.png">
</div>

<br/>
<div class="" data-ros="fadeInLeft"   data-options="infinite:false;animationClass:animated;delay:300;duration: 1100;callback:;">
<p class=" " style="">Открывается автоматически при получении водительского удостоверения.<span class="visible-xs">(Категория М)</span></p>
<img  class="img-responsive acat" src="../../images/pics/M-cat.png">
<div class="clearfix visible-xs"></div>
<div class="leftarrow acat"></div>
<p class="kakpr"> Обучение <br/>с 14 лет </p>
<div class="leftarrow acat"></div>
<p class="kakpr"> Открытие категории <br/>с 16 лет </p>
<div class="leftarrow acat"></div>
<p class="kakpr">Получение<br/> прав</p>
<img  class="img-responsive acat" src="../../images/pics/prava.png">
</div>





 </section>
<br/><br/>

</div></div></div>

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
$( ".field-forma-packet" ).hide();          
 $("#contact-form").append('<div class="form-group field-forma-fromfield required"><input type="hidden" id="forma-fromfield" class="form-control" name="Forma[pack]" value="Стандарт"><input type="hidden" id="forma-fromfield" class="form-control" name="Forma[packet]" value="Категория А / Пакет Стандарт"><p class="help-block help-block-error"></p></div>');


  } else if (which==5)
  {
$("#wrapacket").text('Пакет "Двойной A+B"');
$( ".field-forma-packet" ).hide();          
$("#contact-form").append('<div class="form-group field-forma-fromfield required"><input type="hidden" id="forma-fromfield" class="form-control" name="Forma[pack]" value="Двойной А+В"><input type="hidden" id="forma-fromfield" class="form-control" name="Forma[packet]" value="Категория А / Пакет Двойной А+В"><p class="help-block help-block-error"></p></div>');

  } else if (which==6) 
  {
$("#wrapacket").text('Пакет "Индивидуальный"');
$( ".field-forma-packet" ).hide();          
$("#contact-form").append('<div class="form-group field-forma-fromfield required"><input type="hidden" id="forma-fromfield" class="form-control" name="Forma[pack]" value="Индивидуальный"><input type="hidden" id="forma-fromfield" class="form-control" name="Forma[packet]" value="Категория А / Пакет Индивидуальный"><p class="help-block help-block-error"></p></div>');

  } else if (which==0 || which==1) 
  {
$("#wrapacket").text('');
$( ".field-forma-packet" ).show();          

  };

});


window.addEventListener("load", function() {ros.init();});

JS
, yii\web\View::POS_READY);  ?>



