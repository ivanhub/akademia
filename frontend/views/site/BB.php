<?php

/* @var $this yii\web\View */
/* @var $form yii\bootstrap\ActiveForm */
/* @var $model \frontend\models\ContactForm */

use yii\helpers\Html;
//use yii\bootstrap\ActiveForm;
//use yii\captcha\Captcha;
//use yii\bootstrap\Modal;
//use yii\bootstrap\Button;
//use \yii\widgets\MaskedInput;

//use yii\widgets\Menu;


$title = 'Категория B';
$this->title = title($title);


$this->registerMetaTag([
    'name' => 'description',
    'content' => 'Обучение вождению на автомобиле. Получение прав категории В. Собственный автодром, опытные квалифицированные инструктора, экстремальное и защитное вождение. Доступные цены. Беспроцентная рассрочка! Одна из лучших автошкол в Самаре. Звоните!',
]);

$this->registerMetaTag([
    'name' => 'keywords',
    'content' => 'лучшая автошкола Самары, главная автошкола Самары, центральная автошкола Самары, школа вождения, автошкола, услуги автошколы, Обучение вождению, получить права, росавтоакадемия, рос автоакадемия, росавто академия, права на автомобиль, права, категория А, категория В, обучение на права, сдать на права, курсы водителей',
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

<h1 class="text-center"><?= Html::encode($title) ?></h1>

<h4 class="text-center hideme"  data-ros="fadeInN"  data-options="delay:0;infinite:false;animationClass:animated;duration:1500;callback:;" >Мы предлагаем Вам следующие пакеты услуг:</h4>
<br/>

<div class="col-md-offset-1 col-md-10">  
<div class="col-xs-12 col-sm-4">  
<?php if (Yii::$app->mobileDetect->isMobile()) { ?>
        <div class="span3 pull-right-md  animatedb fadeInLeft opac1" data-nohover="0">
<?php } else { ?>
        <div class="span3 pull-right-md  animatedb  hideme" data-ros="fadeInLeft" data-options="delay:0;infinite:false;animationClass:opac1;duration:;callback:;"    data-nohover="0" style="">

<?php } ?>

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
    'data-which' => '5',
    'class' => 'send-price call-back'
  ]
    ); 

/*
$this->registerJs(<<<JS
JS
, yii\web\View::POS_READY);
*/
Yii::$app->view->registerJsFile('/assets/js/jquery.ros.js',  ['depends' => 'yii\web\JqueryAsset']); 

$this->registerJs(<<<JS

ros.init(); 

//$(".flash-success").animate({opacity: 1.0}, 1000).fadeOut("slow");


//$('#idmodal').on('close.bs.modal', function(e) { 
//setTimeout(function() {  $("#wrapacket").text(''); }, 6000);
//});


$('#idmodal').on('show.bs.modal', function(e) {
  var which = e.relatedTarget.dataset.which;
        //var newspan = document.createElement('div');
        //newspan.className = "wpacket";
if (which==5) {
$("#wrapacket").text('Пакет "Дневной"');
$( ".field-forma-packet" ).hide();          
$("#contact-form").append('<div class="form-group field-forma-fromfield required"><input type="hidden" id="forma-fromfield" class="form-control" name="Forma[pack]" value="Дневной"><input type="hidden" id="forma-fromfield" class="form-control" name="Forma[packet]" value="Категория B / Пакет Дневной"><p class="help-block help-block-error"></p></div>');

  } else if (which==6)
  {
$("#wrapacket").text('Пакет "Стандарт"');
$( ".field-forma-packet" ).hide();          
$("#contact-form").append('<div class="form-group field-forma-fromfield required"><input type="hidden" id="forma-fromfield" class="form-control" name="Forma[pack]" value="Стандарт"><input type="hidden" id="forma-fromfield" class="form-control" name="Forma[packet]" value="Категория B / Пакет Стандарт"><p class="help-block help-block-error"></p></div>');

  } else if (which==7) 
  {
$("#wrapacket").text('Пакет "Индивидуальный"');
$( ".field-forma-packet" ).hide();          
$("#contact-form").append('<div class="form-group field-forma-fromfield required"><input type="hidden" id="forma-fromfield" class="form-control" name="Forma[pack]" value="Индивидуальный"><input type="hidden" id="forma-fromfield" class="form-control" name="Forma[packet]" value="Категория B / Пакет Индивидуальный"><p class="help-block help-block-error"></p></div>');

  } else if (which==0 || which==1) 
  {
$("#wrapacket").text('');
$( ".field-forma-packet" ).show();          

  };

});

JS
, yii\web\View::POS_READY); ?>
 </div>
        </div>
        </div><div class="clearfix visible-xs"></div><div class="col-xs-12 col-sm-4 spaceblock">
        <div class="forsafari">


<?php if (Yii::$app->mobileDetect->isMobile()) { ?>
        <div class="span3 pull-center-md  animatedb flipInY opac1" data-nohover="0">
<?php } else { ?>
        <div class="span3 pull-center-md  animatedb hideme" data-ros="flipInY" data-options="delay:200;infinite:false;animationClass:opac1;duration:;callback:;"   data-nohover="0">
<?php } ?>

          <div class="p-item-title">ПАКЕТ<br>
          "Стандарт"</div>
          <div class="butt"><img src="../images/pics/ok.png" width="80px"></div>
          <div class="mt5">
  <p style="margin-bottom:0px">Удобен для всех</p><p style="color:#f62a2a;font-size: calc(14px + 0.35vw);font-weight:700;margin-top:-3px">АКЦИЯ 18000 р.</p>
       <p style="margin-bottom: -6px;margin-top: -17px;font-size: calc(7px + 0.35vw);">до 31 мая</p>
<p style="margin-top:2px;margin-bottom: 7px;">от <b style="color:darkgreen;text-decoration:line-through">20 000 р.</b> </p>
<div class="little"><p>Практические занятия:</p>
    <p style="font-size:12px !important">с 9:00 до 20:00 Вт.-Пт.</p>
    <p style="font-size:12px !important">Суббота: с 8:00 до 14:00</p>
    <p>Теоретические занятия:</p>
    <p style="margin-bottom:5px;font-size:12px !important">с 18:00 до 20:00 Пн.,Ср.</p>    </div>
          </div>
          <div class="butt">
            <?php    echo Html::a(
    'Записаться',
  ['#'],
  [ 'data-toggle' => 'modal',
    'data-target' => '#idmodal',
    'data-which' => '6',
    'class' => 'send-price call-back'
  ]
    ); ?>
          </div>
        </div>
      </div>


        </div><div class="clearfix visible-xs"></div><div class="col-xs-12 col-sm-4 spaceblock">

<?php if (Yii::$app->mobileDetect->isMobile()) { ?>
        <div class="span3 pull-left-md  animatedb fadeInRight opac1"  data-nohover="0"><?php } else { ?>
        <div class="span3 pull-left-md  animatedb hideme"  data-ros="fadeInRight"  data-options="delay:400;infinite:false;animationClass:opac1;duration:;callback:;" data-nohover="0"><?php } ?>


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
    'data-which' => '7',
    'class' => 'send-price call-back but3 '
  ]
    ); ?></div>
        </div>    </div>    
      </div>


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


<!--  <h5 class="m420" style="font-weight:bold; text-align:center">Без скрытых платежей и сборов</h5> -->
<!--   <h6 class="m420" style="font-weight:bold; text-align:center">Выберите желаемый пакет обучения.</h6>
  <h5  style="font-weight:bold; text-align:center">Порядок обучения</h5> -->
  </div><br/>
    <h5 class="hideme" style="font-weight:bold; text-align:center"  data-ros="fadeIn"   data-options="infinite:false;animationClass:animated;duration:1500;callback:;">Как проходит обучение в автошколе:</h5>




<br/>

<div class="wrapetap">

<div class="forsafari">
<div class="row text-center uslv"  data-ros="flipInX"   data-options="infinite:false;animationClass:animated;duration:1500;callback:;" >
  <div class="col-sm-offset-2 col-sm-2 text-center vc"><img src="../../images/pics/theory1.png"></div>
  <div class="col-sm-7 centerxs vc "><p><b>Теория</b></p> <p>134 часа теоретических занятий, внутренний экзамен.</p>  
  <p>Консультации и тестирование с психологом.</p>
  <p>Обучение преподавателем с многолетним стажем.</p>
   </div>
 </div></div><div class="forsafari">
<div class="row text-center uslv"  data-ros="flipInX"   data-options="delay:100;infinite:false;animationClass:animated;duration:1500;callback:;" >
  <div class="col-sm-offset-2 col-sm-2 text-center vc"><img src="../../images/pics/drive1.png"></div>
  <div class="col-sm-7 centerxs vc"><p><b>Вождение</b></p> <p>56 часов вождения. </p>
  <p>+2 часа подготовки к сдаче экзаменов в ГИБДД (внутренний экзамен).</p>
  <p>Учебные маршруты по всему городу.</p>
  </div>
  </div></div>

<div class="forsafari">
<div class="row text-center uslv"  data-ros="flipInX"   data-options="delay:300;infinite:false;animationClass:animated;duration:1500;callback:;" >
<div class="col-sm-offset-2 col-sm-2 text-center vc"><img src="../../images/pics/gibdd1.png"></div>
  <div class="col-sm-7 centerxs vc"> <p><b>Экзамен в ГИБДД</b></p> <p>Дни сдачи экзаменов в ГИБДД: каждый второй и четвертый четверг месяца.</p></div>
  </div></div>
<div class="forsafari">
<div class="row text-center uslv"  data-ros="flipInX"   data-options="delay:200;infinite:false;animationClass:animated;duration:1500;callback:;" >
  <div class="col-sm-offset-2 col-sm-2 text-center vc"><img src="../../images/pics/clock1.png"></div>
  <div class="col-sm-7 centerxs vc"><p><b>Срок обучения</b></p> <p>3 месяца </p></div>
  </div></div>
</div>

<br/><br/>

<!-- <img class="stylecenter" src="../../images/pics/plan.jpg" width="800px" align="center">
 --><div class="center-block width70" id="chart">
    <div class="stylecenter" id="myChart"></div></div>




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
<div class="linetire"></div>
<br/><br/>
<p class="poryadok green text-center" style="font-size:28px;font-weight:bold;padding-bottom:15px;" data-ros="anim-documents"   data-options="delay:100;infinite:false;animationClass:animated;duration: 900;callback:;">
Необходимые документы для поступления в Автошколу:</p>
<center class="block-documents">
<p   data-ros="pullUp"   data-options="infinite:false;animationClass:animated;delay:300;duration: 400;callback:;" style="font-weight:700;color: green;"><img  class="img-responsive acat2 wobble-left" src="../images/arrow.png" width="17" style="margin-top:-4px;margin-right:10px;"> Фотографии (3х4) - 2 шт.</p>
<img   data-ros="fadeIn"   data-options="infinite:false;animationClass:animated;delay:300;duration: 1000;callback:;"  src="../images/photos.png" width=38>
<p   data-ros="pullUp"   data-options="infinite:false;animationClass:animated;delay:400;duration: 400;callback:;" style="font-weight:700;color: green;padding-top:10px"><img  class="img-responsive acat2 wobble-left" src="../images/arrow.png" width="17" style="margin-top:-4px;margin-right:10px;"> Паспорт РФ</p>
<img   data-ros="fadeIn"   data-options="infinite:false;animationClass:animated;delay:300;duration: 1000;callback:;" src="../images/passport.png" width=38>
<p   data-ros="pullUp"   data-options="infinite:false;animationClass:animated;delay:500;duration: 400;callback:;" style="font-weight:700;color: green;padding-top:10px"><img  class="img-responsive acat2 wobble-left" src="../images/arrow.png" width="17" style="margin-top:-4px;margin-right:10px;"> Медицинская справка</p>
<img class=" darker20" data-ros="fadeIn"   data-options="infinite:false;animationClass:animated;delay:300;duration: 1000;callback:;" src="../images/spravka.jpg" width=19>
<p class="green" data-ros="fadeIn"   data-options="infinite:false;animationClass:animated;delay:500;duration: 1000;callback:;"  style="font-size:20px;padding-top:20px;font-weight:bold;"">Может понадобится:</p>
</center>
<div  data-ros="fadeIn"   data-options="infinite:false;animationClass:animated;delay:600;duration: 1000;callback:;"  class="text-center" style="width:58%;margin-left: auto;margin-right: auto;">
<p style="font-size:16px;line-height: 1;" align="left"><img  class=" darker" src="../images/arrow.png" width="8" style="margin-top:-3px;margin-left:-2px;margin-right:5px;">Ксерокопия водительского удостоверения (при открытии новой категории)</p>
<p style="font-size:16px;line-height: 1;" align="left"><img  class="darker" src="../images/arrow.png" width="8" style="margin-top:-3px;margin-left:-2px;margin-right:5px;">Ксерокопия свидетельства о рождении (сменившим фамилию)</p>
<p style="font-size:16px;line-height: 1;" align="left"><img  class=" darker" src="../images/arrow.png" width="8" style="margin-top:-3px;margin-left:-2px;margin-right:5px;">Ксерокопия документа, подтверждающего изменение фамилии, имени и отчества.</p>
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
Расписание занятий</p>
<table cellspacing="0" cellpadding="0" border="0" class="timetable  table-responsive" align="center"    data-ros="fadeIn"   data-options="delay:200;infinite:false;animationClass:animated;duration:1200;callback:;">
    <thead>
        <tr>
            <th>Планируемая дата<br/>начала обучения</th>
            <th><p>Адрес&nbsp;учебного&nbsp;класса</p></th>
          <?php if (Yii::$app->mobileDetect->isMobile()) {  ?> 
            <th class="last"><p>Дни&nbsp;и&nbsp;время&nbsp;занятий в&nbsp;учебной&nbsp;группе</p></th><?php } ?>
          <?php if (!Yii::$app->mobileDetect->isMobile()) {  ?> 
            <th><p>Дни&nbsp;и&nbsp;время&nbsp;занятий в&nbsp;учебной&nbsp;группе</p></th>
             <th class="last"><p>Свободные места</p></th> <?php } ?>
        </tr>
    </thead>
    <tbody>
         <tr class="timetable__theory-tr"><td colspan="4" class="timetable__theory text-center "> <span>ТЕОРИЯ</span></td></tr>
        <tr>
            <td><span>22.05.2017</span></td>

            <td>ул. Молодогвардейская, 33<br>т.: 255-69-99</td>
            <td>
                <span class="span2">ПН,СР: 18.00-20.00</span>
            
            </td>
             <?php if (!Yii::$app->mobileDetect->isMobile()) {  ?> 
            <td><div id="advanced-circle" class="circle fl"></div><span class="fl zel">ЕСТЬ</span></td><?php } ?>
        </tr>
        
        <tr>
            <td><span>22.05.2017</span></td>

            <td>ул. Осипенко, 11<br>т.: 255-69-99</td>
            <td>
                <span class="span2">ВТ,ЧТ: 18.00-20.00</span>
            </td>
             <?php if (!Yii::$app->mobileDetect->isMobile()) {  ?> 
            <td><div id="advanced-circle" class="circle fl"></div><span class="fl zel">ЕСТЬ</span></td><?php } ?>
        </tr>
                         <tr class="timetable__theory-tr"><td  colspan="4" class="timetable__theory text-center "> <span>ВОЖДЕНИЕ</span></td></tr>

         <tr class="otstup">
            <td><span>22.05.2017</span></td>

            <td>Автодром,<br> ул. Уральская, 34 <br/>т.: 255-69-99</td>
            <td class="text-left 
            ">
                <span class="span2">ВТ-ПТ: 9.00-20.00<br/>CБ: 9.00-16.00</span>
            </td>
             <?php if (!Yii::$app->mobileDetect->isMobile()) {  ?> 
            <td><div id="advanced-circle" class="circle fl"></div><span class="fl zel">ЕСТЬ</span></td><?php } ?>
        </tr>

    </tbody>
    </table>
<br/>
<br/>
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






            <!-- <script src="https://cdn.zingchart.com/modules/zingchart-mobile.min.js" type="text/javascript"></script> -->

<!-- <script>zingchart.MODULESDIR="/assets/js/modules/";</script>


<script src="/assets/js/modules/zingchart-hbar.min.js"></script>
<script src="/assets/js/modules/zingchart-animation.min.js"></script>
<script src="/assets/js/modules/zingchart-grid.min.js"></script>
<script src="/assets/js/modules/zingchart-objects.min.js"></script>
<script src="/assets/js/modules/zingchart-maps.min.js"></script>
<script src="/assets/js/modules/zingchart-yx.min.js"></script>
<script src="/assets/js/modules/zingchart-tooltip.min.js"></script>
<script src="/assets/js/modules/zingchart-line.min.js"></script>
<script src="/assets/js/modules/zingchart-grid.min.js"></script>
<script src="/assets/js/modules/zingchart-xy.min.js"></script>
<script src="/assets/js/modules/zingchart-maps-usa.min.js"></script>
      
 -->

<?php 


      
$this->registerJs(<<<JS

  //      zingchart.MODULESDIR="";
var chartIsShown = false;

function chartInit() {
    chartIsShown = true;


var myConfig =         {
    "type": "hbar",
        "backgroundColor":"transparent",
  "tooltip": {
    "htmlMode": true,
    "backgroundColor": "none",
    "padding": 0,
    "placement": "node:center",
    "text": "<div class='zingchart-tooltip'><div class='scalex-value'>%kt<\/div><div class='scaley-value'>Всего дней: %v<\/div><\/div>"
  },
  
            "font-family":"Arial",
            "title":{
                "text":"План обучения",
                "font-family":"Arial",
                "background-color":"transparent",
                "font-color":"darkgreen",
                "font-size":"24px",
                 "alpha":"0.7"
            },
  
            "labels":[ 
                {
                    "font-size":"12px",
                    "font-color":"#9d9d9d",
                    "x":"11.5%",
                    "y":"10%",
                },
    

            ],
           
            "plot":{
                  stacked:true,

               // "bars-overlap":"100%",
                "borderRadius":8,
          
          
            },
            "plotarea":{
                "margin":"60px 130px 20px 210px",
                "backgroundColor":"transparent",

            }, 
            "scale-x":{
              
                      "mirrored":true,
                "line-color":"none",
                "values":["Заключение договора",
                          "Медкомиссия",
                          "Тренажеры (Руление)", "Автодром", "Город"
                         , "Теория", "Экзамен по теории", 
                         "Экзамен Автодром"],
                "tick":{
                    "visible":false
                },
                "guide":{
                    "visible":false
                },
                "item":{
                    "font-size":"14px",
                    "padding-right":"20px",
                    "auto-align":true,
                    "rules":[
                        {
                            "rule":"%i==0",
                            "font-color":"#FA8452"
                        },
                        {
                            "rule":"%i==1",
                           "font-color":"#FA8452"

                        },
                       {
                            "rule":"%i==2",
                            "font-color":"#FCAE48"
                        },
                        {
                            "rule":"%i==3",
                            "font-color":"#FCCC65"
                        },
                        {
                            "rule":"%i==4",
                            "font-color":"#A0BE4A"
                        },
                        {
                            "rule":"%i==5",
                            "font-color":"#6FA6DF"
                        },
                      {
                            "rule":"%i==6",
                            "font-color":"#6FA6DF"
                        },
                      {
                            "rule":"%i==7",
                            "font-color":"#5c5a8b"
                        }
                    ]
                }
            }, 
  "scale-y":{
"label": {
      "text": "Кол-во дней",
      "color": "black",
      "fontSize": 14,
      "font-style": "italic"
    },
               "line-color":"green",

              "max-value":"100",
            
               "tick":{
                    "visible":true
                },
                "guide":{
                    "visible":true
                }
            },
  "arrows":[
              {
                "backgroundColor":"#CCCCCC",
                "direction":"bottom",
                "borderWidth": 0,
                "from":{
                  "x": "199px",
                  "y": "12%"
                },
                "to":{
                  "x": "199px",
                  "y": "100%"
                }
              }
            ],
            "shapes":[
              {
                "type":"circle",
                "x": "199px",
                "y": 79,
                "backgroundColor": "white",
                "borderColor":"lightgray",
                "borderWidth":2,
                "size": 7
              },
              {
                "type":"circle",
                "x": "199px",
                "y": 79,
                "backgroundColor": "white",
                "borderColor":"#6FA6DF",
                "borderWidth":4,
                "size": 5
              },
                             {
                "type":"circle",
                "x": "199px",
                "y": 115,
                "backgroundColor": "white",
                "borderColor":"lightgray",
                "borderWidth":2,
                "size": 7
              },
            
                                      {
                "type":"circle",
                "x": "199px",
                "y": 115,
                "backgroundColor": "white",
                "borderColor":"#6FA6DF",
                "borderWidth":4,
                "size": 5
              },
                       {
                "type":"circle",
                "x": "199px",
                "y": 152,
                "backgroundColor": "white",
                "borderColor":"lightgray",
                "borderWidth":2,
                "size": 7
              },       
                       {
                "type":"circle",
                "x": "199px",
                "y": 152,
                "backgroundColor": "white",
                "borderColor":"#6FA6DF",
                "borderWidth":4,
                "size": 5
              },
              {
                "type":"circle",
                "x": "199px",
                "y": 188,
                "backgroundColor": "white",
                "borderColor":"lightgray",
                "borderWidth":2,
                "size": 7
              },
                       {
                "type":"circle",
                "x": "199px",
                "y": 188,
                "backgroundColor": "white",
                "borderColor":"#6FA6DF",
                "borderWidth":4,
                "size": 5
              },
              
              {
                "type":"circle",
                "x": "199px",
                "y": 224,
                "backgroundColor": "white",
                "borderColor":"#6FA6DF",
                "borderWidth":4,
                "size": 5
              },
              {
                "type":"circle",
                "x": "199px",
                "y": 224,
                "backgroundColor": "white",
                "borderColor":"lightgray",
                "borderWidth":2,
                "size": 7
              },
              
              {
                "type":"circle",
                "x": "199px",
                "y": 224,
                "backgroundColor": "white",
                "borderColor":"#6FA6DF",
                "borderWidth":4,
                "size": 5
              },
              
              {
                "type":"circle",
                "x": "199px",
                "y": 260,
                "backgroundColor": "white",
                "borderColor":"lightgray",
                "borderWidth":2,
                "size": 7
              },
                       {
                "type":"circle",
                "x": "199px",
                "y": 260,
                "backgroundColor": "white",
                "borderColor":"#6FA6DF",
                "borderWidth":4,
                "size": 5
              },
              {
                "type":"circle",
                "x": "199px",
                "y": 297,
                "backgroundColor": "white",
                "borderColor":"lightgray",
                "borderWidth":2,
                "size": 7
              },
                       {
                "type":"circle",
                "x": "199px",
                "y": 297,
                "backgroundColor": "white",
                "borderColor":"#6FA6DF",
                "borderWidth":4,
                "size": 5
              },
                {
                "type":"circle",
                "x": "199px",
                "y": 333,
                "backgroundColor": "white",
                "borderColor":"lightgray",
                "borderWidth":1,
                "size": 8
              },
                       {
                "type":"circle",
                "x": "199px",
                "y": 333,
                "backgroundColor": "white",
                "borderColor":"#6FA6DF",
                "borderWidth":4,
                "size": 5
              },
                       
                 
              
              
              
             
              ],
            
            "series":[
            
                {
                    "values":[0,0,5,21,30,7,79,80,81],
                    "bar-width":"32px",
                    "max-trackers":0,
                    "background-color":"transparent"

                  
                },
              {
                    "values":[5,5,15,8,36,71,1,1], 
                          "animation": {
                    "delay": "1000",
                    "effect": 3, //3
                    "speed": 500,
                    "method": "1",
                    "sequence": "3"
                },
                    "bar-width":"32px",
                    "background-color":"#6fbadf #6FA6DF",
                 "hover-state" : { backgroundColor: 'green'},
                    "border-color": "transparent",

                    "fill-angle":100,
                 "value-box":{
                        "placement":"top-out",
                        "text":"%v день",
                        "decimals":0,
                        "font-color":"#979595",
                        "font-size":"14px",
                        "alpha":1,
                     "rules":[
                        {
                            "rule":"%i==0",
                        "text":"1-5 день",
                        },
                        {
                            "rule":"%i==1",
                            "text":"1-5 день",
                        },
                        {
                            "rule":"%i==2",
                            "text":"6-21 день",
                        },
                        { 
                            "rule":"%i==3",
                            "text":"22-30 день",

                        },
                        {
                            "rule":"%i==4",
                            "text":"31-67 день",

                        },
                       {
                            "rule":"%i==5",
                            "text":"8-79 день",

                        },
                        
                      {
                            "rule":"%i==8",
                            "text":"80 день",

                        },
                      {
                            "rule":"%i==9",
                            "text":"81 день",
                        },
                                           
                    ],
                    },
                
                
               
  
                },
            ]
        };


//zingchart.loadModules("animation,hbar,objects,tooltip,yx", function(){
//        });


zingchart.render({ 
  id : 'myChart', 
  data : myConfig, 
  height:'370px',
  width:'100%',
  'min-height':'150px'
});

};




  $(window).on('scroll resize').one('scroll resize', function() {chartInit();});


JS
, yii\web\View::POS_LOAD);  





//     ['position' => yii\web\View::POS_READY]  <script src="/assets/js/zingchart.min.js" type="text/javascript"></script>
?>





