<?php

/* @var $this yii\web\View */
/* @var $form yii\bootstrap\ActiveForm */
/* @var $model \frontend\models\ContactForm */

use yii\helpers\Html;
use branchonline\lightbox\Lightbox;
//use yii\bootstrap\ActiveForm;
//use yii\captcha\Captcha;
//use phpnt\yandexMap\YandexMaps;
//$agent=$_SERVER['HTTP_USER_AGENT'];
//dd($agent);
//if(agent($_SERVER['HTTP_USER_AGENT'])) echo '555';


$title = 'Акции и спец. предложения';
$this->title = title($title);

$this->registerMetaTag([
    'name' => 'description',
    'content' => 'Возможность дистанционного обучения теории по всем направлениям школы вождения: Права на авто и мото технику. Права на квадроцикл, снегоход, трактор, погрузчик, квадроцикл, гидроцикл, катер, снегоход и т.д. Лучшая автошкола в Самаре. Звоните!',
]);
$this->registerMetaTag([
    'name' => 'keywords',
    'content' => 'автошкола, мотошкола, права, дистанционное обучение, заочно, на дому, обучение дома, удаленное, обучение вождению, росавтоакадемия, центральная автошкола Самары, рос автоакадемия, школа вождения, права на автомобиль, услуги автошколы, главная автошкола Самары, самоходная техника, гидроцикл, права катер'
    ]);


$this->params['breadcrumbs'][] = $title;
?>


<!-- 
<div class="" id="full-widthid">
<div class="container-fluid mainblock text-center contacts">
  <div class="text-center contacts">  <div class="row">
  <div class="col-md-3 col-sm-3 col-xs-6  col-big-6  box1  cl-effect-12">
  <img class="hvr-grow1" src="../images/new_car.png" width="180px">
  <p class="blocktitlec anim_one  hvr-bob1 ">Автомотошкола</p>
  </div>
  <div class="col-md-3 col-sm-3 col-xs-6  col-big-6  box2 cl-effect-12">
  <img class="hvr-grow1" src="../images/two.png" width="150px" style="margin-top: 0;">
  <p class="blocktitlec anim_two  hvr-bob1">Самоходная техника</p>
  </div>
  <div class="col-md-3 col-sm-3 col-xs-6  col-big-6 box3  cl-effect-12">
  <img class="hvr-grow1" src="../images/boat_t2.png" width="160px">
  <p class="blocktitlec anim_three hvr-bob1">Судовождение</p>
  </div>
  <div class="col-md-3 col-sm-3 col-xs-6  col-big-6 box4  cl-effect-12">
  <img class="hvr-grow1" src="../images/new_car.png" width="180px" style="margin-top: 0;">
  <p class="blocktitlec anim_four hvr-bob1">Защитное вождение</p>
  </div>
  </div> 
  </div></div></div>
 -->

<!-- <?= Html::encode($this->title) ?> -->
<div class="siteblock">
   
<!--<h1 class="text-center"><?= Html::encode($title) ?></h1>-->
<br/>

<!--
<div class="boxxx">
 <center><h2>Акция</h2></center>
<div class="boxx">
    <div class="border-1"></div>
    <div class="border-2"></div>
    <div class="contentt">
        dfdfasdfasdfadsfasdf
    </div>
</div>
</div>-->
<center>
<div class="container2">
  <div class="uniqlo">
    <div class="product">
      <div class="product-hover"></div>
<div class="stock">
                                  <h2>Акция</h2>
<div class="roww"><h4 style='font-weight:bold;margin-top:-4px;'>Обучение на категорию А — <span style="font-weight:bold">8 000 рублей!</span></h4></div>
<div class="row"><div class="megaline"></div></div>
<div class="roww2">
<br>
<p style="font-size:120%;color:#353f35;">Запишись на обучение прямо сейчас по спец. цене!</p>
<br/>
<div style="font-size:150%;color:darkgreen;margin-top:-35px">Период действия: <strong>до <img style="margin-top:-8px" width="30" src="data:image/png;base64,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"> 
<?php $months = explode("|", '|января|февраля|марта|апреля|мая|июня|июля|августа|сентября|октября|ноября|декабря');
$month = preg_replace("~\%bg~", $months[date('n', time())], '&nbsp;%bg');
echo $month;
?>
</strong></div>
<!-- <center><div class="block-mesto"><div class="hover-mesto"></div><div class="hover2-mesto"></div>
<div class="header-mesto">Забронировать место</div></div></center> -->

<?php    echo Html::a(
   '<button class="snip1535" style="">Забронировать место</button>',
  ['#'],
  [
  'data-toggle' => 'modal',
  'data-target' => '#idmodal',
  'data-which' => '555',
  ]
    ); ?> 
<div style="font-size:140%;color:green;margin-top:-5px"><strong>Осталось <span style="color:darkgray">
<?php 
$date = date('d');
if ($date >= 25) echo "3</span> свободных места"; 
elseif ($date >= 20) echo "4</span> свободных места"; 
elseif ($date >= 15) echo "5</span> свободных мест"; 
elseif ($date >= 10) echo "6</span> свободных мест"; 
elseif ($date >= 5) echo "7</span> свободных мест"; 
elseif ($date >= 0) echo "8</span> свободных мест"; 
?></strong></div>
<br/>
<div class="row">
<div class="col-lg-5 col-lg-offset-1">
<ul class="gl" style="text-align:left">
<li><strong>Бесплатная литература!</strong></li>
<li><span></span> <strong>Автодром - бесплатно!</strong></li>
</ul>
</div>

<div class="col-lg-6">
<ul class="gl" style="text-align:left">
<li><strong>Отсутствие дополнительных платежей!</strong></li>
<li><span></span> <strong>Сопровождение на экзамен в ГИБДД!</strong></li>
</ul>
</div>
</div>
</div>
</div>
<!--<div><a class="e_btn_calc" href=""> Забронировать место в группе </a></div>-->
</div>
</div>
</div>
 

<p style="font-size:180%;font-style:italic;color:darkred;font-weight:900;margin-top:10px;padding-top:15px;padding-bottom:15px;">Преподователи и инструктора нашей школы имеют <br/> международную аккредитацию <a href="https://www.rospa.com" target="_blank" style="color:#051d60;font-size:115%;">RoSPA</a> по безопасному вождению!</p>

<!--<img src="/images/pics/rospa.png" width="70" style="margin-top:-3px;margin-left:3px;transform:skew(-15deg);-webkit-transform:skew(-15deg);">-->
</center>

</div>

<div class="mtext3"></div>
<div class="container-fluid preim-podlozhka">
<center><br/>
<ul class="preim4 ">
<li>
<div class="img"><img style="margin-top: 14px; margin-left:-8px" src="/images/pics/0-percent.png" width="116px"></div>
<h3 class="h3-first">Рассрочка платежа на период обучения</h3>
<hr class="hr1"><a  data-lightbox="preim1">Первоначальный взнос от 5000р. Остальную сумму Вы оплачиваете в период всего обучения.</a></li>
<li>
<div class="img"><img src="/images/pics/yes.png" alt="" width="93px"></div>
<h3 class="h3-second">Обучение без ОБМАНА</h3>
<hr class="hr2"><a data-lightbox="preim2">Все часы вождения! Мы заинтересованы в качественном обучении студентов и успешной сдаче экзаменов в ГИБДД.
</a></li>
<li>
<div class="img"><img style="margin-top: 14px; margin-left:-15px" src="/images/pics/13vozvrat4.png" width="115px"></div>
<h3 class="h3-third">Возврат 13% от стоимости обучения</h3>
<hr class="hr3"><a  data-lightbox="preim3">Налоговый вычет при обучении в автошколе. Вы можете вернуть 13% от суммы оплаты за обучение!</a></li>



<li>
<div class="img"><img style="margin-top: 18px; margin-left:0" src="/images/pics/autodrome3.png" width="95px"></div>
<h3 class="h3-third">Собственный автодром</h3>
<hr class="hr3"><a data-lightbox="preim3">Автошкола Академия имеет свой собственный учебный автодром. Площадь автодрома позволяет обеспечить комфорт и безопасность на практических занятиях и круглогодичное функционирование.</a></li>

<li>
<div class="img"><img style="margin-top: 17px; margin-left:0" src="/images/pics/books9.png" width="85px"></div>
<h3 class="h3-first">Бесплатная литература</h3>
<hr class="hr1"><a  data-lightbox="preim1">Всю необходимую литературу: экзаменационные билеты, правила дорожного движения, методички Вы получите на первом теоретическом занятии.
<br/><br/>
</a></li>
<li>
<div class="img"><img style="margin-top: 14px; margin-left:-15px" src="/images/pics/soprovozhdenie.png" width="95px"></div>
<h3 class="h3-third">Сопровождение на экзамене</h3>
<hr class="hr3"><a  data-lightbox="preim3">Мы подготовим пакет документов для сдачи экзамена, предоставим учебные автомобили и мотоциклы на экзамены в ГИБДД. Представитель автошколы будет сопровождать Вас на протяжении всего экзамена.
</a></li>
<li>
<div class="img"><img style="margin-top:24px; margin-left:0" src="/images/pics/simulator4.png" alt="" width="93px"></div>
<h3 class="h3-second">Тренажер для первоначальных навыков</h3>
<hr class="hr2"><a data-lightbox="preim2">Занятия на автотренажере в нашей автошколе являются обязательными по программе обучения. Обучить курсантов автошкол базовым навыкам управления автомобилей с механической КПП позволяет виртуальное вождение автомобиля на тренажере.
</a></li>

<li>
<div class="img"><img style="margin-top: 26px; margin-left:-4px" src="/images/pics/laptop.png" width="94px"></div>
<h3 class="h3-first">Современные оборудованные классы</h3>
<hr class="hr1"><a  data-lightbox="preim1">Учебные классы оборудованы всем необходимым инвентарем, тематическими плакатами, компьютерами и тренажерами для первоначальных навыков вождения. У нас большая видеотека с обучающими роликами. Доверившись нам, вы получите высококлассное обучение, что позволит Вам успешно сдать экзамены на права.</a></li>
<li>
<div class="img"><img style="margin-top: 30px; margin-left:-5px"  src="/images/pics/aid2.png" alt="" width="84px"></div>
<h3 class="h3-second">Помощь в прохождении медкомиссии</h3>
<hr class="hr2"><a data-lightbox="preim2">Мы поможем вам пройти медицинскую комиссию в самые короткие сроки и без очередей.
Для удобства наших учеников мы организовываем медицинскую комиссию в Автошколе! * ООО «АсокмаМед» лицензия № ЛО-63-01-002110 от 31.07.2013 г.
</a></li>


</ul>

<!-- <button class="btnnn btn-4 btn-4a icon-arrow-right">Все наши преимущества</button>
 -->
<section class="container-preim" id="ishe">
    <button class="btnx btn--md btn--border-animation btn--border-animation-blue" >
      <span class="anim-helper-border anim-helper-border--top" aria-hidden="true"></span>
      <span class="anim-helper-border anim-helper-border--right" aria-hidden="true"></span>
      <span class="anim-helper-border anim-helper-border--bottom" aria-hidden="true"></span>
      <span class="anim-helper-border anim-helper-border--left" aria-hidden="true"></span>
  Все наши преимущества
    </button>
    <img src="/images/pics/test13.png" width="25" style="margin-top:-10px;">
</section>
 </center>




</div><div class="mtext3"></div>
<br/>
<center><h4>Фотографии учебных классов и автодрома</h4></center><br/>
<div class="gallery-container">
<div class="gallery-slider">    
<?php 
 
if ($dir = opendir('images/gallery-slider/')) {
 
    while (false !== ($file = readdir($dir))) { 
       if($file == '.' || $file == '..' || is_dir('images/gallery-slider/' . $file) || substr($file, strrpos($file, '.') + 1) != 'jpg'){
        continue;
    }
    //echo $file;
?>     
         <div><div><a href="/images/gallery-slider/<?=$file?>"> <img src="/images/gallery-slider/tn/<?=preg_replace('/\.\w+$/', '', $file);?>_tn.jpg" ></a></div></div>
<?php 
 
    }
 
}

?>



</div>
</div>


<br/>
<br/>
<br/>


<?php 


$this->registerJs(<<<JS

  ishe_count = 1; ishe_height = 350;
document.getElementById ("ishe").addEventListener ("click", ishe, false);

  function ishe() {
        if(ishe_count < 2) {
            ishe_count++;
            if ($(window).width() < 583) ishe_height += 3100; else if ($(window).width() < 992) ishe_height += 1250; else ishe_height += 855;
            jQuery('ul.preim4').animate({height: ishe_height + "px"}, 1000);
            if(ishe_count == 6)
                jQuery('.ishe').hide();
        }

        jQuery('.container-preim').hide(1000);
      }


      jQuery('.gallery-slider').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  arrows: true,
//          prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left fa-3x' aria-hidden='true'></i></button>",
//nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right fa3-x' aria-hidden='true'></i></button>"     
draggable:true,
responsive: [
  {
      breakpoint: 1199,
      settings: {
        slidesToShow:3,
        slidesToScroll: 3,
        infinite: true,
        //dots: true
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow:2,
        slidesToScroll: 2,
        infinite: true,
        //dots: true
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
   
  
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
             });

jQuery('.gallery-slider').slickLightbox({
  itemSelector        : 'a',
  navigateByKeyboard  : true
});
JS
, yii\web\View::POS_READY); 


Yii::$app->view->registerJsFile('/assets/js/slick.min.js',  ['depends' => 'yii\web\JqueryAsset']); 
Yii::$app->view->registerJsFile('/assets/js/slick-lightbox.js?',  ['depends' => 'yii\web\JqueryAsset']); 
Yii::$app->view->registerCssFile('/assets/css/slick.css?v=131',  ['depends' => 'yii\web\JqueryAsset']); 
Yii::$app->view->registerCssFile('/assets/css/slick-lightbox.css?v=7',  ['depends' => 'yii\web\JqueryAsset']); 
Yii::$app->view->registerCssFile('/assets/css/slick-theme.css?v=7',  ['depends' => 'frontend\assets\AppAsset']); 

?>



