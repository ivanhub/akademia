<?php

/* @var $this yii\web\View */
/* @var $form yii\bootstrap\ActiveForm */
/* @var $model \frontend\models\ContactForm */

use yii\helpers\Html;
use yii\bootstrap\ActiveForm;
use yii\captcha\Captcha;
use yii\bootstrap\Modal;
use yii\bootstrap\Button;
use \yii\widgets\MaskedInput;

$this->title = 'Категория B';

$this->params['breadcrumbs'][] = [
                                   /* 'template' => "<li><b>{link}</b></li>\n", */
                                    'label' => 'Автомотошкола', 
                                    'url' => ['/automotoschool']
                                 ];
$this->params['breadcrumbs'][] = $this->title;
?>






<!--  Html::encode($this->title) -->

<div class="site-automotoschool siteblock">
   

 <div class="row">
<div class="col-sm-12 col-md-3 hidden-sm hidden-xs">



<div class="menu">
  <div class="menuItem uno"><span><a style="color:;" href="/postupayushchim">Запись на обучение</a></span></div>
  <div class="menuItem dos"><span><a style="color:;" href="/students">Расписание занятий</a></span></div>
  <div class="menuItem tres"><span><a style="color:;" href="/raspisanie">Наши преимущества</a></span></div>
  <div class="menuItem cuatro"><span><a href="/dop-uslugi">Доп. услуги</a></span></div>
 </div>




<!-- <ul class="left2">
        <li><a href="/postupayushchim">Поступающим</a></li>
    <li><a href="/students">Учащимся</a></li>
    <li><a href="/raspisanie">Расписание</a></li>
    <li><a href="/dop-uslugi">Доп.&nbsp;услуги</a></li>
    
  
</ul> -->
</div>

<div class="col-md-9 col-sm-12">

<h1 class="text-center">Качество наших услуг выше чем их стоимость.</h1>

 <br/><br/>


<!-- Awesome  -->

<!-- <div class='wrapper'>
  <input id='1' type='checkbox'>
  <label for='1'>
    <div>
      <div class='circle'></div>
         <div class="span4" style="">
          <div class="p-item-title">ПАКЕТ<br>
          "Дневной"</div>
          <div class="butt"><img src="../images/pics/ok.png" width="80px">

<img src="../images/pics/s1.png" >
          </div>
          <div class="mt5">
         <p>Идеальный выбор для студентов! </p>
<p>от 17 000 р. </p>
          </div>
          <div class="butt">
          <a class="send-price call-back" style="width: 128px;" href="#" role="button" data-info="Стандарт">Записаться</a></div>
        </div>
    </div>
    <p>Пакет "Дневной"</p>
    <p>Практические занятия:</p>
    <p>с 9:00 до 16:00 Вт.-Пт.</p>
    <p>Теоретические занятия:</p>
    <p>с 18:00 до 20:00 Вт.-Чт.</p>
  </label>
  <input id='2' type='checkbox'>
  <label for='2'>
    <div>
      <div class='circle'></div>
    <div class="span4" style="margin-left: 10px;">
          <div class="p-item-title">ПАКЕТ<br>
          "Стандарт"</div>
          <div class="butt"><img src="../images/pics/ok.png" width="80px">

<img src="../images/pics/s2.png" >
          </div>
          <div class="mt5">
<p>Удобней для всех</p>
<p>от 20 000 р. </p>
          </div>
          <div class="butt"><a class="send-price call-back" style="width: 128px;margin-top: 25px;" href="#" role="button" data-info="Индивидуальный">Записаться</a></div>
        </div>
    </div>
    <p>Текст2 внутри</p>
  </label>
  <input id='3' type='checkbox'>
  <label for='3'>
    <div>
      <div class='circle'></div>
       <div class="span4" style="float: left; margin-left: 20px;">
          <div class="p-item-title">ПАКЕТ<br>
          "Индивидуальный"</div>
          <div class="butt"><img src="../images/pics/ok.png" width="80px">
<img src="../images/pics/s3.png" >


          </div>
          <div class="mt5">
<p>Вы выбираете,<br/>Мы исполняем </p>
<p>от 30 000 р. </p>       
          </div>
          <div class="butt"><a class="send-price call-back" style="width: 128px;margin-top: 0px;" href="#" role="button" data-info="Стандарт">Записаться</a></div>
        </div>  
    </div>
    <p>Текст3 внутри</p>
  </label>
</div>
 -->


<!-- Awesome END -->


<!--  Modal::begin([
    'header' => '<h2>Запись онлайн</h2>',
    'id' => 'idmodal3',
    'toggleButton' => [
        'tag' => 'a',
        'class' => 'send-price call-back',
        'label' => 'Записаться',
        'data-target' => '#idmodal6',
        'data-toggle'=>'modal',


    ],
        'clientOptions' => false,

]);
 
echo 'Росавтоакадемия, г. Самара';
 
Modal::end();
 

<div class="modal34 remote34 fade" id="idmodal34">
        <div class="modal-dialog34">
            <div class="modal-content34 loader-lg34"></div>
        </div>
</div>

-->




<div class="row-fluid">
<div class="hovergallery">  
<div clas="col-xs-6">  
        <div class="span3" style=" margin-left: 50px;" data-nohover="0">
          <div class="p-item-title">ПАКЕТ<br>
          "Дневной"</div>
          <div class="butt"><img src="../images/pics/ok.png" width="80px"></div>
          <div class="mt5">
         <p class="linet">Идеальный выбор для студентов! </p>
<p>от<b style="color:darkgreen"> 18 000 р.</b> </p>
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
    'data-which' => '1',
    'class' => 'send-price call-back'
  ]
    ); 


$this->registerJs(<<<JS

$(".flash-success").animate({opacity: 1.0}, 1000).fadeOut("slow");

JS
, yii\web\View::POS_READY);


$this->registerJs(<<<JS

$('#idmodal').on('close.bs.modal', function(e) { 
setTimeout(function() {  $("#wrapacket").text('BUBUBU'); }, 6000);


});


$('#idmodal').on('show.bs.modal', function(e) {
  var which = e.relatedTarget.dataset.which;
        //var newspan = document.createElement('div');
        //newspan.className = "wpacket";
if (which==1) {
          $("#wrapacket").text('Пакет "Дневной"');

 $("#contact-form").append('<div class="form-group field-forma-fromfield required"><input type="hidden" id="forma-fromfield" class="form-control" name="Forma[pack]" value="Дневной"><p class="help-block help-block-error"></p></div>');


  } else if (which==2)
  {
$("#wrapacket").text('Пакет "Стандарт"');
 $("#contact-form").append('<div class="form-group field-forma-fromfield required"><input type="hidden" id="forma-fromfield" class="form-control" name="Forma[pack]" value="Стандарт"><p class="help-block help-block-error"></p></div>');

  } else if (which==3) 
  {
$("#wrapacket").text('Пакет "Индивидуальный"');
 $("#contact-form").append('<div class="form-group field-forma-fromfield required"><input type="hidden" id="forma-fromfield" class="form-control" name="Forma[pack]" value="Индивидуальный"><p class="help-block help-block-error"></p></div>');

  };

});

JS
, yii\web\View::POS_READY); ?>
 </div>
        </div>
        </div><div class="clearfix visible-xs"></div><div clas="col-xs-6">

        <div class="span3" style="margin-left: 20px;" data-nohover="0">
          <div class="p-item-title">ПАКЕТ<br>
          "Стандарт"</div>
          <div class="butt"><img src="../images/pics/ok.png" width="80px"></div>
          <div class="mt5">
<p class="linet2">Удобен для всех!</p>
<p class="little2">от <b style="color:darkgreen">20 000 р.</b> </p>
<div class="little"><p>Практические занятия:</p>
    <p>с 16:00 до 20:00 Вт.-Сб.</p>
    <p>Теоретические занятия:</p>
    <p>с 18:00 до 20:00 Пн.,Ср.</p>    </div>
          </div>
          <div class="butt">
            <?php    echo Html::a(
    'Записаться',
  ['#'],
  [ 'data-toggle' => 'modal',
    'data-target' => '#idmodal',
    'data-which' => '2',
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
<p>от<b style="color:darkgreen"> 25 000 р. </b></p>  
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
    'data-which' => '3',
    'class' => 'send-price call-back but3 '
  ]
    ); ?></div>
        </div>    </div>    
      </div></div>


<!-- 
<div class="contblock">
<div class="blockpack">
  <div class="section sec-1">
    <div class="word">
<p class="zag">Пакет дневной</p>
<p>Идеальный выбор для студентов! </p>
<p>от 17 000 р. </p>
    </div>
    <span class="close-btn">+</span>
    <div class="inner"></div>
    <div class="text">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque variu
    </div>
  </div>
  <div class="section sec-2">
    <div class="word">
<p class="zag">Пакет стандарт</p>
<p>Удобней для всех</p>
<p>от 20 000 р. </p>
    </div>
    <span class="close-btn">+</span>
    <div class="inner"></div>
    <div class="text">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque varius orci s.
    </div>
  </div>
  <div class="section sec-3">
    <div class="word">
<p class="zag">Пакет индивидуальный</p>
<p>Вы выбираете,</p>
<p>Мы исполняем </p>
<p>от 30 000 р. </p>
    </div>
    <span class="close-btn">+</span>
    <div class="inner"></div>
    <div class="text">
      Lorem ipsum dolor sit amet, consectetur adipiscingos..
    </div>
  </div>

  </div>
  </div> -->
 

<!-- 
<iframe name='iframe1' id="iframe1" src="../block.html" 
        frameborder="0" border="0" cellspacing="0"
        style="border-style: none;width: 100%; height: 320px;"></iframe>
 -->


 <h5 class="m420" style="font-weight:bold; text-align:center">Без скрытых платежей и сборов</h5>
<br/>
<div class="row text-center uslv">
  <div class="col-xs-2"><img src="../../images/fon/clock.png"></div>
  <div class="col-xs-10"><p><b>Срок обучения</b></p> <p>3 месяца </p></div>
</div>

<div class="row text-center uslv">
  <div class="col-xs-2"><img src="../../images/fon/book.png"></div>
  <div class="col-xs-10"><p><b>Теория</b></p> <p>134 часа теоретических занятий, внутренний экзамен.</p>  
  <p>консультации и тестирование с психологом.</p>
  <p>обучение преподователем с многолетним стажем.</p>
   </div>
</div>
<div class="row text-center uslv">
  <div class="col-xs-2"><img src="../../images/fon/rul.png"></div>
  <div class="col-xs-10"><p><b>Вождение</b></p> <p>56 часов вождения. </p>
  <p>+2 часа подготовки к сдачи экзаменов в ГИБДД (внутренний экзамен).</p>
  <p>учебные маршруты по всему городу.</p>


  </div>
</div>

<br/><br/>
<br/>
<img src="../../images/pics/plan.jpg" width="800px">




<br/>
<h5 class="text-center"> Услуги, которые  предоставляем бесплатно</h5>  <br/>
 
 <ul class=" preimul2">
  <li>•  подготовка пакета документов для сдачи экзамена в ГИБДД;</li>
 <li>•  организация и предоставление учебных автомобилей на первичные экзамены (выпускной и ГИБДД);</li>
 <li>•  учебная литература в подарок: экзаменационные билеты, правила дорожного движения, 
 учебник по вождению автомобиля, памятка по упражнениям на площадке;</li>

 <li>•  консультация с преподавателем теоретического курса по пропущенным занятиям;</li>
 <li>•  улыбка и доброжелательное отношение со стороны администрации.</li>
 </ul>

<br/>
 <!-- <section class="automotoschool">
 
 <h2 class="text-center">Наши основные преимущества</h2>
 <p class="adv">•   Современные учебные транспортные средства</p>
 <p>Парк наших транспортных средств включает в себя достаточное количество современных автомобилей, мотоциклов для обучения вождению. Срок их эксплуатации не превышает 4-х лет, поэтому техническое состояние транспортных средств находится на очень достойном уровне.</p>
 <p>Транспортные средства – с механической трансмиссией (МККП) оборудованы дополнительными педалями сцепления и тормоза, зеркалом заднего вида. На учебные автомобили установлен аппаратно-программный комплекс аудио и видеонаблюдения на базе видеорегистратора, необходимые для сдачи экзамена на получение водительского удостоверения.</p>
 <p class="adv">•   Собственный автодром</p>
 <p>Автошкола Академия имеет свою собственную, не арендованную, оборудованную учебную площадку. Практические занятия на автодроме проходят по индивидуальному графику с отработкой всех необходимых элементов. На асфальто-бетонном покрытии нанесена разметка, в наличии достаточное количество разметочного оборудования (конуса, вешки) для оборудования зон упражнения. Площадь автодрома позволяет обеспечить комфорт и безопасность на практических занятиях и круглогодичное функционирование. Площадка освещается в темное время суток.</p>
 <p class="adv">•   Компьютезированые учебные классы</p>
 <p>Для проведения теоретических занятий автомотошкола располагает комфортными компьютерными и лекционными классами. Классы оснащены всеми наглядными учебно-методическими материалами, плакатами, пособиями, необходимой литературой. АНО ДПО «Академия» имеет в собственности всю мебель и необходимое оборудование, компьютеры, оргтехнику, специальное оборудование, материалы для проведения лекционных и практических занятий. Современная оргтехника позволяет демонстрировать видео-уроки, учебные презентации. На всех персональных компьютерах подключен Интернет, работает бесплатный Wi-Fi. Во всех классах установлены кондиционеры, обеспечивающие комфорт в жаркое время года. </p>
 <p class="adv">•   Тренажер</p>
 <p>Занятия на автотренажере в нашей автошколе являются обязательными в программе обучения. Обучить курсантов автошкол базовым навыкам управления автомобилем с механической КПП позволяет виртуальное вождение автомобиля на тренажере. </p>
 <p>Преимущества виртуальных автотренажеров:</p>
 <ul class="preimul"><li>•  Объемный окружающий мир: дорога, автомобили, здания …</li>
 <li>•  Возможность регулировки интенсивности движения.</li>
 <li>•  Первоначальные навыки посадки за руль, пользование органами управления, пуск двигателя, начало движения, переключение передач.</li>
 <li>•  Подсказчик, сообщающий о любой ошибке.</li>
 </ul>
 <p class="adv">•   Медицинская помощь</p>  
 <p>В учебном центре организована первая медицинская помощь.  Медицинский кабинет, осуществляется текущий контроль за состоянием здоровья обучающихся, проведение санитарно-гигиенических, профилактических и оздоровительных мероприятий, пропаганда здорового образа жизни, оказание первичной доврачебной медико-санитарной помощи обучающимся.</p>
 <p>Весь водительский состав проходит ежедневный медицинский осмотр и допуск перед выездом.</p>
 
 
 <br/><br/>
 <h5 class="text-center">Категория А, А 1</h5>
 <p style="font-weight:600;font-size:22px">Обучение вождению на мотоцикле</p>
 <p>Хотите освоить искусство безопасного и уверенного вождения мотоцикла с нуля и до хорошего городского уровня? Школа предлагает как групповые занятия с организованной сдачей экзамена категории А, так и частные индивидуальные уроки вождения мотоцикла с мотоинструктором. Мы не просто научим управлять мотоциклом. Наши инструкторы и педагоги дадут консультации по приобретению, эксплуатации, хранению мотоцикла, а так же, по выбору запчастей и экипировки.</p>
 <p>Автошкола АНО ДПО «Академия» ведет подготовку водителей мотоциклов категории А и подкатегории А1.</p>
 
 
 <table class="table table-bordered table-striped table-condensed table-responsive">
    <thead>
        <tr>
            <th>
 Категория            </th>
            <th>
 Расшифровка            </th>
            <th>
 Обучение            </th>
            <th>
 Открытие 
 категории
            </th>
            <th>
 Марка мотоцикла            </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
 А            </td>
            <td>
 Тяжелые мотоциклы
 (объем двигателя 
 свыше 125 куб.см.)
            </td>
            <td>
 С 16 лет            </td>
            <td>
 С 18 лет            </td>
            <td>
 KAWASAKI
 ER650E,
 <br/>
 RACER<br/>
 RC250-C5B.
            </td>
        </tr>
        <tr>
            <td>
 А1            </td>
            <td>
 Легкие мотоциклы
 (объем двигателя
 от 50 до 125 куб. см.)
            </td>
            <td>
 С 16 лет            </td>
            <td>
 С 16 лет            </td>
            <td>
 YAMAHA
 YBR125 ESD
            </td>
        </tr>
        <tr>
            <td>
 М            </td>
            <td>
 Мопеды,
 мотики, 
 скутеры
            </td>
            <td>
 С 14 лет            </td>
            <td>
 С 16 лет,<br/>
 Открывается 
 автоматически при
 получении водительского удостоверения
            </td>
            <td>
 -            </td>
        </tr>
 
    </tbody>
 </table>
 
 
 
 
 
 <p style="font-weight:600;font-size:20px">Теория</p>
 <p>Теоретический курс состоит из правил дорожного движения и основ устройства мотоцикла. Его можно посещать в составе любой из групп, проходящих обучение на категорию «В», так как экзаменационные вопросы одинаковы в том и другом случае. Лица, имеющие водительское удостоверение с любой открытой категорией проходят теоретические занятия по желанию.</p>
 <br/>
 <p style="font-weight:600;font-size:20px">Вождение</p>
 <p>Учебная программа курса рассчитана на <b>18 часов</b> или 6 занятий. Занятия проводят опытные инструкторы на собственном автодроме, с отработкой всех упражнений, необходимых для успешной сдачи экзамена и уверенного управления мототехникой. Все упражнения на автодроме соответствуют новому регламенту сдачи экзамена.</p>
 <p><b>Срок обучение – 1 месяц.</b></p>
 <br/>
 <p style="font-weight:600;font-size:20px">Акция</p>
 <p>При записи в автошколу на категории "А" и "В" одновременно – скидка 5 000 рублей.</p>
 
 <br/>
 <h5 class="text-center"> Услуги, предоставляемые бесплатно</h5>  <br/>
 
 <ul class="preimul preimul2">
 <li>•  Учебная литература в подарок: экзаменационные билеты. правила дорожного движения. учебник по вождению автомобиля. памятка по упражнениям на площадке;</li>
 <li>•  подготовка пакета документов для сдачи экзамена в ГИБДД;</li>
 <li>•  организация и предоставление учебных автомобилей на первичные экзамены (выпускной и ГИБДД);</li>
 <li>•  консультация с преподавателем теоретического курса по пропущенным занятиям;</li>
 <li>•  родниковая вода в кулере;</li>
 <li>•  улыбка и доброжелательное отношение со стороны администрации.</li>
 </ul>
 
 
 </section> -->
<br/><br/>

</div>
</div>
</div>



          <!--    <button class="md-trigger send-price call-back" data-modal="modal-3">Записаться</button>

    <div class="md-modal md-effect-3" id="modal-3">
      <div class="md-content">

        <h3>Запись онлайн</h3>
        <div>
    <button type="button" class="close md-close" data-dismiss="modal" aria-hidden="true">×</button>

          <p>Форма для записи на занятия</p>
          <ul>
            <li><strong>Close:</strong> click on the button below to close the modal.</li>
          </ul>
        </div>
      </div>
    </div>

 <div class="md-overlay"></div>the overlay element
      Yii::$app->view->registerJsFile('/assets/js/modals.js',  ['depends' => 'yii\web\JqueryAsset']); 
     -->