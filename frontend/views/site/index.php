<?php

/* @var $this yii\web\View */

use yii\helpers\Html;
use common\components\phpclasses\Animation;



$this->title = title('cd');

$this->registerMetaTag([
    'name' => 'description',
    'content' => 'Обучение вождению на автомобиле и мотоцикле (категории: А, В). Обучение судовождению. Права на квадроцикл, снегоход, трактор, погрузчик и т.д. Собственный автодром, опытные квалифицированные инструктора, экстремальное и защитное вождение. Доступные цены. Беспроцентная рассрочка! Одна из лучших автошкол в Самаре. Звоните!',
]);
$this->registerMetaTag([
    'name' => 'keywords',
    'content' => 'автошкола, главная автошкола Самары, мотошкола, школа вождения, права, права на авто, права на автомобиль, права на мото, права на мотоцикл, обучение вождению, получить права, росавтоакадемия, рос автоакадемия, росавто академия, обучение на права, сдать на права, курсы водителей, судовождение,  лучшая автошкола Самары, центральная автошкола Самары, категория А,  категория В, автомотошкола, услуги автошколы, мотоцикл, лодка, самоходная техника, гусеничные машины, снегоходы, квадроциклы, погрузчик, трактор, каток, допог, гидроцикл, водный мотоцикл, курс спецсигналы, аренда автодрома, занятия с инструктором, обучение инструкторов, защитное вождение, контраварийное вождение, судоводитель, самоходные машины',
]);


//$this->params['breadcrumbs'][] = ['label' => 'Employees', 'url' => ['index']];
//$this->params['breadcrumbs'][] = $this->title;

?>
<div class="page-loader safari_only">
<div>
<div class="page-loader-body">
<div class="cssload-loader">
<div class="cssload-inner cssload-one"></div>
<div class="cssload-inner cssload-two"></div>
<div class="cssload-inner cssload-three"></div>
</div>
</div>
</div>
</div> 


<!--<div class="container">

<div class="jumbofon jumbotron">
 <h1>Учебный Центр "Академия"</h1><BR> 
</div></div>-->
<!-- <div></div>
   <div class="full-width" id="full-widthid">
  <div class="container-fluid mainblock text-center">
  <div class="row">
  <div class="col-md-3 col-sm-6 col-xs-12  col-big-6  box1  cl-effect-12">
  <img class="hvr-bounce-in" src="../images/new_car.png" width="305px">
  <p class="blocktitle anim_one  hvr-bob ">Автомотошкола</p>
  </div>
  <div class="col-md-3 col-sm-6 col-xs-12  col-big-6  box2 cl-effect-12">
  <img class="hvr-wobble-to-top-right" src="../images/two.png" width="255px" style="margin-top: -10px;">
  <p class="blocktitle anim_two  hvr-bob">Самоходная техника</p>
  </div>
   <div class="clearfix visible-sm"></div>
  <div class="col-md-3 col-sm-6 col-xs-12  col-big-6 box3  cl-effect-12">
  <img class="boat" src="../images/boat_t2.png" width="270px" style="margin-top: -5px;">
  <p class="blocktitle anim_three hvr-bob">Судовождение</p>
  </div>
  <div class="col-md-3 col-sm-6 col-xs-12  col-big-6 box4  cl-effect-12">
  <img class="hvr-wobble-top" src="../images/new_car.png" width="305px" style="margin-top: 0;">
  <p class="blocktitle anim_four hvr-bob">Защитное вождение</p>
  </div>
  </div> 
  </div>
  </div>   --> 
 <section class="main ">
<h1>Права на автомобиль и мотоцикл (категорию А и В). Автошкола. Судовождение, квадроцикл, трактор, погрузчик</h1>

<div class="row rowm">

<div class="forsafari1">
<div class="col-md-4 col-xs-12 col-sm-6 box1  cl-effect-12">
<div class="fill">

<a href="/driving-school"> <div class="block-mestoONLY hvr-bounce-in"><p class="blocktitle anim_one text-center">Автомотошкола</p></div>
<div class="aa">
  <img class="img-responsive" src="../images/css1-230.gif" alt="Автошкола г. Самара" title="Автошкола" width="200px">
</div>
</a>
</div>
</div></div>

<div class="forsafari1">
<div class="col-md-4 col-xs-12 col-sm-6 box2 cl-effect-12">
<div class="fill2">
<a href="/safety-driving"> 
<div class="block-mestoONLY hvr-bounce-in"><p class="blocktitle anim_two text-center">Защитное вождение</p></div>
<div class="aa">
<img class="img-responsive" src="../images/css2.png"  alt="Дополнительные услуги г. Самара" title="Дополнительные услуги"  width="200px">
</div></a>
</div>
  </div></div>


<div class="forsafari1">
<div class="col-md-4 col-xs-12 col-sm-6 box2n box3 cl-effect-12">
<div class="fill2"> <!-- hvr-wobble-to-top-right-->
<a href="/self-propelled-machinery"> 
<div class="block-mestoONLY hvr-bounce-in"><p class="blocktitle anim_two text-center">Самоходная техника</p></div>
<div class="aa">
<img class="img-responsive" src="../images/css3.gif"  alt="Самоходная техника" title="Права на спецтехнику"  width="200px" >
</div></a>
</div>
  </div></div>



 <!--  <div class="clearfix visible-sm"></div> -->
  <div class="forsafari1">
<div class="col-md-4 col-xs-12 col-sm-6 box4 cl-effect-12">
<div class="fill">
<a href="/DOPOG"> 
<div class="block-mestoONLY hvr-bounce-in"><p class="blocktitle anim_three text-center">Курсы по ДОПОГ</p></div>
<div class="aa">
<img class="img-responsive" src="../images/css4.gif"  alt="Судовождение г. Самара" title="Права на лодку, катер, гидроцикл"  width="200px">
</div></a>
  </div></div></div>
  <div class="clearfix visible-sm" style="margin-bottom:20px"></div>

<div class="forsafari1">
<div class="col-md-4 col-xs-12 col-sm-6 box5 cl-effect-12">
<div class="fill">
<a href="/navigation"> 
<div class="block-mestoONLY hvr-bounce-in"><p class="blocktitle anim_three text-center">Судовождение</p></div>
<div class="aa">
<img class="img-responsive" src="../images/css5.png"  alt="Судовождение г. Самара" title="Права на лодку, катер, гидроцикл"  width="200px">
</div></a>
  </div></div></div>


<div class="forsafari1">
<div class="col-md-4 col-xs-12 col-sm-6 box6  cl-effect-12">
<div class="fill2">
<a href="/special-signals"> 
<div class="block-mestoONLY hvr-bounce-in"><p class="blocktitle anim_four text-center">Спецсигналы</p></div>
<div class="aa"> 
<img class="img-responsive" src="../images/css6.gif"  alt="Дополнительные услуги г. Самара" title="Дополнительные услуги"  width="200px">
</div></a>
</div></div></div>


<!-- 

  <div class="col-sm-12 col-md-3 right-aside">
  <aside>
  <h4 >Акции</h4>
   <div class="saleblock">
 <img src="../../images/pics/banner12.png" class="saleimg" width="220px" >
 <p>Новогодняя акция - Скидка 15%!</p>
               <p>[Подробнее] </p>
           </div>
             <div class="saleblock">
 <img src="../../images/pics/banner5.png" class="saleimg" width="220px" style="margin-top:40px">
<p>Новогодняя акция - Скидка 15%!</p>
              <p>[Подробнее] </p>
           </div>
 

  <div class="saleblock">
  <img src="https://dummyimage.com/240x120/989898/000000.png" class="saleimg">
    <p>Новогодняя акция - Скидка 15%!</p>
                  <p>[Подробнее] </p> 
            </div>
  <h5>Новости</h5>
      <div class="news">
     <p>11/01/2016  Набор в группу водителей самоходной техники. </p>
     <p>Объявляется набор в группу на подготовку водителей самоходной техники</p><p>...</p>
     <p>[Подробнее]</p>
     </div>
      <div class="news">
         <p>11/01/2016 Открыт сезон обучения на категорию А. </p>
        <p class="news-text">Хотите освоить искусство безопасного и уверенного</p><p>...</p>
        <p>[Подробнее] </p>
     </div>

 <div class="news">
        <p>11/01/2016 Набор на обучение вождению категории B.</p>
      <p>Автошкола объявляет набор в дневную группу школьников и</p><p>...</p>
      <p>[Подробнее] </p>
    </div>

         


  </aside>
</div> -->
</div>




<br> 
<div class="mtwrap">
<p class="m50 mtext4" >Единственная в России Автошкола 
с международной<br/> аккредитацией <a href="https://www.rospa.com" target="_blank" style="">RoSPA</a> по безопасному вождению!</p>
<p class="mtext2" style="clear:both; text-align:justify">
В нашем учебном центре разработаны авторские методики обучения по всем направлениям. 
Кардинально новый подход к обучению - это то, что в первую очередь отличает наш центр!
Проанализировав накопившийся опыт, изучив европейскую систему подготовки водителей, 
взяв на вооружение передовые технологии, мы разработали свои, адаптированные к нашим реалиям, 
методики обучения.</p>
<div class="mtext3"></div>

</div>
<div class="text-center  akcii">
<center>
<div class="insideakcii"><a id="Akcii"></a>
<!-- <h2><i class="fa fa-star" style="font-size:15px !important;margin-left:-15px;"></i> Наши акции:</h2> -->

</div>
<!-- <img style="margin-top:-15px;" src="../../images/svet7.png" width="815" class="saleimg" width="" alt="Выгодное предложение" title="Выгодное предложение">  -->


<div class="row row2">
<div class="col-md-4 one-third third offscreen">
<div class="akciya">
<p class="start-akciya" style="padding-top:20px; margin-bottom:0"><?php
$months = explode("|", '|января|февраля|марта|апреля|мая|июня|июля|августа|сентября|октября|ноября|декабря');
$month = preg_replace("~\%bg~", $months[date('n', time())], '&nbsp;%bg');
$date1 = date('d');
if ($date1 >= 15) echo "15";
elseif ($date1 < 15) echo "1";
echo $month;
?> - <?php
$date = date('d');
if ($date >= 15) echo date('t');
elseif ($date < 15) echo "15";
echo $month;
?></p>
<p class="start-akciya" style="font-size:20px;margin-top:-7px">АКЦИЯ</p>
<p class="akciya-h2" style="margin-top:-7px">Обучение на<br/>категорию А</p>
<p class="outlineA" style="color:#f9fa83;margin-top:-7px">Всего:</p>
<p class="outlineA" style="font-size:50px;color:#f9fa83;margin-top:-30px"><span class="pyat count1">10000</span>
<span style="font-size:35px;">р.</span></p>
<!-- <svg class="line" x="0px" y="0px"  width="153" height="67" >
   <path stroke="" d="m2.5,3.37535c0.67757,0 2.08708,-0.40881 4.06542,0c1.47456,0.3047 3.33782,1.2873 9.48598,3.55865c3.36169,1.24193 9.45938,3.59987 14.22897,5.93109c7.41266,3.62306 15.46495,7.34561 27.1028,11.86217c8.05247,3.1251 16.44669,5.56067 23.03738,8.30352c6.30021,2.62196 12.9356,6.40301 17.61682,8.30352c4.12338,1.67403 5.89656,2.70665 9.48598,4.15176c1.94663,0.78372 4.74299,2.37243 8.13084,4.15176c3.38785,1.77933 7.29138,3.80532 9.48598,4.74487c3.84959,1.64807 6.7757,2.37243 9.48598,3.55865c1.35514,0.59311 3.18014,1.45834 4.06542,1.77933c1.25198,0.45394 2.03271,0 2.71028,0c0.67757,0 1.48117,-0.18235 2.71028,0.59311c0.77736,0.49044 1.35514,0.59311 2.03271,0.59311l0.67757,0l0.67757,0.59311" id="svg_4" fill-opacity="0" stroke-opacity="null" stroke-width="1.5" fill="none"/>
</svg>  -->

<div class="" style="margin-left:5px;margin-top:-7px;"><img src="/images/pics/sale20.gif" class="flag1"  alt="Скидка 20% права на мотоцикл" title="Скидка 20% права на мото"><p class="speshite" style="margin-left:99px;padding-top:6px;">Спешите!</p></div> 
<div class="saleMot"></div> 
</div></div>

<div class="col-md-4 col-centered third  two-third  offscreen" style="margin-top:0px; margin-bottom:-10px">
<div class="akciya">
<p class="start-akciya" style="padding-top:20px; margin-bottom:0">&nbsp;</p>
<p class="start-akciya" style="font-size:20px;margin-top:-7px">АКЦИЯ</p>
<p class="akciya-h2" style="margin-top:-9px;font-size:26px">Обучение на<br/>катер<br/>и гидроцикл</p>
<p class="outlineA" style="color:#f9fa83;margin-top:-15px">Всего:</p>
<p class="outlineA" style="font-size:50px;color:#f9fa83;margin-top:-30px"><span class="pyat count2">12000</span>
<span style="font-size:35px;">р.</span></p>
<div class="" style="margin-left:5px;margin-top:-16px;"><img src="/images/pics/sale.png" class="an-flick" style="float:left"  alt="Скидка Права на катер и гидроцикл" title="Скидка"><p class="speshite"  align="center" style="line-height:.9;font-size:18px;margin-left:98px;padding-top:6px;">Оставьте заявку на сайте!</p></div> 
<div class="saleHYDRO"></div> 
</div>
</div>
<!-- <div class="col-md-4 two-third third offscreen">
<div class="akciya">
<p class="start-akciya" style="padding-top:20px; margin-bottom:0">&nbsp;</p>
<p class="start-akciya" style="font-size:20px;margin-top:-7px">АКЦИЯ</p>
<p class="akciya-h2" style="margin-top:-7px">Обучение на<br/>категории А+В</p>
<p class="outlineA" style="font-size:30px;color:#f9fa83;margin-top:-7px">Скидка</p>
<p class="outlineA" style="font-size:30px;color:#f9fa83;margin-top:-20px"><span class="pyat" style="left:0">+</span>
<p class="outlineA" style="font-size:30px;color:#f9fa83;margin-top:-25px"><span class="pyat" style="left:0">Бонус</span>
<div class="" style="margin-left:5px;margin-top:-7px;"><img src="/images/pics/sale.png" class="an-flick" style="float:left"><p class="speshite" style="margin-left:99px;padding-top:6px;">Звоните!</p></div> 
<div class="saleCar"></div> 
</div>
</div> -->
<div class="col-md-4 three-third third offscreen">
<div class="akciya">
<p class="start-akciya" style="padding-top:20px; margin-bottom:0">&nbsp;</p>
<p class="start-akciya" style="font-size:20px;margin-top:-7px">АКЦИЯ</p>
<p class="akciya-h2" style="margin-top:-9px;font-size:26px">Обучение на<br/>квадроцикл<br/>и снегоход</p>
<p class="outlineA" style="color:#f9fa83;margin-top:-15px">Всего:</p>
<p class="outlineA" style="font-size:50px;color:#f9fa83;margin-top:-30px"><span class="pyat count">10000</span>
<span style="font-size:35px;">р.</span></p>
 <div class="" style="margin-left:5px;margin-top:-16px;"><img src="/images/pics/sale50.gif" class="flag1"  alt="Скидка 50%! Права на квадроцикл и снегоход" title="Скидка 50% Права на квадроцикл "><p class="speshite"  align="center" style="line-height:.9;font-size:18px;margin-left:98px;padding-top:6px;">Количество мест ограничено!</p></div> 
<div class="saleATV"></div> 
</div>
</div>
</div>

</center>
</div>
<center><p class="footer__myvkontakte"><a href="https://vk.com/rosavtoakademia" target="blank" class="myvk" style=""><span>Мы ВКонтакте</span> <i class="social-btns"><i class="btn vk" href="#"><i class="fa fa-vk"></i></i></i></a></p></center>

<br/><br/><br/>
 
 </div>
 </section>



<?php if (!Yii::$app->mobileDetect->isMobile()) { ?>

<script type="text/javascript">

var SVGNS = "http://www.w3.org/2000/svg",
    XLINKNS = "http://www.w3.org/1999/xlink",
    TAU = 2 * Math.PI,
    skins = ["#FFDFC4", "#F0D5BE", "#EECEB3", "#E1B899", "#E5C298", "#FFDCB2", "#E5B887", "#E5A073", "#E79E6D", "#DB9065", "#CE967C", "#C67856", "#BA6C49", "#A57257", "#F0C8C9", "#DDA8A0", "#B97C6D", "#A8756C", "#AD6452", "#5C3836", "#CB8442", "#BD723C", "#704139", "#A3866A", "#870400", "#710101", "#430000", "#5B0001", "#302E2E"],
    COLORS = ["#000000", "#000033", "#000066", "#000099", "#0000CC", "#0000FF", "#003300", "#003333", "#003366", "#003399", "#0033CC", "#0033FF", "#006600", "#006633", "#006666", "#006699", "#0066CC", "#0066FF", "#009900", "#009933", "#009966", "#009999", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#00FF00", "#00FF33", "#00FF66", "#00FF99", "#00FFCC", "#00FFFF", "#330000", "#330033", "#330066", "#330099", "#3300CC", "#3300FF", "#333300", "#333333", "#333366", "#333399", "#3333CC", "#3333FF", "#336600", "#336633", "#336666", "#336699", "#3366CC", "#3366FF", "#339900", "#339933", "#339966", "#339999", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#33FF00", "#33FF33", "#33FF66", "#33FF99", "#33FFCC", "#33FFFF", "#660000", "#660033", "#660066", "#660099", "#6600CC", "#6600FF", "#663300", "#663333", "#663366", "#663399", "#6633CC", "#6633FF", "#666600", "#666633", "#666666", "#666699", "#6666CC", "#6666FF", "#669900", "#669933", "#669966", "#669999", "#6699CC", "#6699FF", "#66CC00", "#66CC33", "#66CC66", "#66CC99", "#66CCCC", "#66CCFF", "#66FF00", "#66FF33", "#66FF66", "#66FF99", "#66FFCC", "#66FFFF", "#990000", "#990033", "#990066", "#990099", "#9900CC", "#9900FF", "#993300", "#993333", "#993366", "#993399", "#9933CC", "#9933FF", "#996600", "#996633", "#996666", "#996699", "#9966CC", "#9966FF", "#999900", "#999933", "#999966", "#999999", "#9999CC", "#9999FF", "#99CC00", "#99CC33", "#99CC66", "#99CC99", "#99CCCC", "#99CCFF", "#99FF00", "#99FF33", "#99FF66", "#99FF99", "#99FFCC", "#99FFFF", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC6666", "#CC6699", "#CC66CC", "#CC66FF", "#CC9900", "#CC9933", "#CC9966", "#CC9999", "#CC99CC", "#CC99FF", "#CCCC00", "#CCCC33", "#CCCC66", "#CCCC99", "#CCCCCC", "#CCCCFF", "#CCFF00", "#CCFF33", "#CCFF66", "#CCFF99", "#CCFFCC", "#CCFFFF", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF6666", "#FF6699", "#FF66CC", "#FF66FF", "#FF9900", "#FF9933", "#FF9966", "#FF9999", "#FF99CC", "#FF99FF", "#FFCC00", "#FFCC33", "#FFCC66", "#FFCC99", "#FFCCCC", "#FFCCFF", "#FFFF00", "#FFFF33", "#FFFF66", "#FFFF99", "#FFFFCC", "#FFFFFF"],
    transparent = "transparent",
    black = "#000000",
    white = "#ffffff",
    PIANO_BASE = Math.pow(2, 1 / 12),
    audio = new AudioContext(),
    OSCILLATORS = [];




if (audio.createGain) {
  var out = audio.createGain();
  out.connect(audio.destination);

  initAudio = function initAudio(minNote, maxNote) {
    var type = arguments.length <= 2 || arguments[2] === undefined ? "sawtooth" : arguments[2];

    var dNote = maxNote - minNote;
    for (var i = 0; i < dNote; ++i) {
      var gn = audio.createGain();
      gn.gain.value = 0;
      var o = audio.createOscillator();
      o.type = type;
      o.frequency.value = piano(minNote + i + 1);
      o.connect(gn);
      o.start();
      gn.connect(out);
      gn.osc = o;
      OSCILLATORS.push(gn);
    }
  };

  noteOn = function noteOn(volume, i) {
    if (0 <= i && i < OSCILLATORS.length) {
      var o = OSCILLATORS[i];
      o.gain.value = volume;
      return o;
    }
  };

  noteOff = noteOn.bind(undefined, 0);

  play = function play(i, volume, duration) {
    if (OSCILLATORS.length == 0) {
      initAudio(0, 88);
    }
    var o = noteOn(volume, i);
    if (o) {
      if (o.timeout) {
        clearTimeout(o.timeout);
        o.timeout = null;
      }
      o.timeout = setTimeout(function () {
        noteOff(i);
        o.timeout = null;
      }, duration * 1000);
    }
  };
} else {
  IS_IN_GRID = true;

  // a polyfill to fix animation for the CodePen front-page
  (function () {
    var startT = null;
    window.requestAnimationFrame = function (thunk) {
      setTimeout(function () {
        if (startT == null) {
          startT = Date.now();
        }
        thunk(Date.now() - startT);
      }, 16);
    };
  })();

}


function animate(update, paint, resize) {
  var lt = null,
      dt = 0,
      st = 1000 / 60,
      mt = st * 3,
      ft = st / 1000,
      onpaint = function onpaint(t) {
    requestAnimationFrame(onpaint);
    if (lt != null) {
      dt += t - lt;
      while (dt >= st) {
        if (dt < mt) {
          update(ft, t - lt);
        }
        dt -= st;
      }
      if (paint) {
        paint();
      }
    }
    lt = t;
  };
  requestAnimationFrame(onpaint);
  if (resize) {
    window.addEventListener("resize", resize, false);
    resize();
  }
}


// we want to wire up all of the event handlers to the Canvas element itself, so that the X and Y coordinates of the events are offset correctly into the container.


function beginApp(update, render, resize, elem) {
  var lt = null,
      dt = 0,
      st = 1000 / 60,
      mt = st * 3,
      ft = st / 1000,
      points = {},
      keys = {},
      hover = {},
      onpaint = function onpaint(t) {
    var ticker = requestAnimationFrame(onpaint);
    try {
      if (lt != null) {
        var realDT = t - lt;
        dt += realDT;
        while (dt >= st) {
          if (dt < mt) {
            update(ft, points, keys, hover);
          }
          dt -= st;
        }
        render(realDT);
      }
    } catch (err) {
      cancelAnimationFrame(ticker);
      throw err;
    }
    lt = t;
  };


  // This function gets called the first time a mouse button is pressed or a new finger touches the screen. The idx value defaults to 10 because mouse clicks don't have an identifier value, but we need one to keep track of mouse clicks separately than touches, which do have identifier values, ending at 9.
 
  // This function gets called anytime the mouse or one of the fingers moves. It's just recording the points that were covered, it doesn't do much of anything else.

  // This function gets called anytime the mouse or one of the fingers is released. It just cleans up our tracking objects, so the next time the mouse button is pressed, it can all start over again.
 

  resize();
  requestAnimationFrame(onpaint);
}

function findEverything() {
  return Array.prototype.filter.call(document.querySelectorAll("*"), function (e) {
    return e.id;
  }).reduce(function (o, e) {
    return o[e.id] = e, o;
  }, {});
}

function createWorker(script) {
  var stripFunc = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];

  if (typeof script === "function") {
    script = script.toString();
  }
  if (stripFunc) {
    script = script.trim();
    var start = script.indexOf('{');
    script = script.substring(start + 1, script.length - 1);
  }

  var blob = new Blob([script], {
    type: "text/javascript"
  }),
      dataURI = URL.createObjectURL(blob);

  return new Worker(dataURI);
}

// Because of the significant overhead for serializing and deserializing objects between threads, if your updates are simple, but your data is large, then you will probably be able to process more of them on the main thread than you can communicate between threads. But if your processing is expensive for a relatively small amount of data, the serialization overhead might be worth the effort. Also, running expensive updates on the worker thread will keep the UI thread responsive, so even if the updates can only run at, say, 10FPS, the rendering is still running at 60FPS.

var Workerize = function () {
  function Workerize(func) {
    var _this = this;

    _classCallCheck(this, Workerize);

    // First, rebuild the script that defines the class. Since we're dealing with pre-ES6 browsers, we have to use ES5 syntax in the script, or invoke a conversion at a point post-script reconstruction, pre-workerization.

    // start with the constructor function
    var script = func.toString(),

    // strip out the name in a way that Internet Explorer also undrestands (IE doesn't have the Function.name property supported by Chrome and Firefox)
    name = script.match(/function (\w+)\(/)[1];

    // then rebuild the member methods
    for (var k in func.prototype) {
      // We preserve some formatting so it's easy to read the code in the debug view. Yes, you'll be able to see the generated code in your browser's debugger.
      script += "\n\n" + name + ".prototype." + k + " = " + func.prototype[k].toString() + ";";
    }

    // Automatically instantiate an object out of the class inside the worker, in such a way that the user-defined function won't be able to get to it.
    script += "\n\n(function(){\n  var instance = new " + name + "();";

    // Create a mapper from the events that the class defines to the worker-side postMessage method, to send message to the UI thread that one of the events occured.
    script += "\n  if(instance.addEventListener){\n    for(var k in instance.listeners) {\n      instance.addEventListener(k, function(){\n        var args = Array.prototype.slice.call(arguments);\n        postMessage(args);\n      }.bind(this, k));\n    }\n  }";

    // Create a mapper from the worker-side onmessage event, to receive messages from the UI thread that methods were called on the object.
    script += "\n\n  onmessage = function(evt){\n    var f = evt.data.shift();\n    if(instance[f]){\n      instance[f].apply(instance, evt.data);\n    }\n  }\n\n})();";

    // The binary-large-object can be used to convert the script from text to a data URI, because workers can only be created from same-origin URIs.
    this.worker = createWorker(script, false);

    // create a mapper from the UI-thread side onmessage event, to receive messages from the worker thread that events occured and pass them on to the UI thread.
    this.listeners = {};
    this.worker.onmessage = function (e) {
      var f = e.data.shift();
      if (_this.listeners[f]) {
        _this.listeners[f].forEach(function (g) {
          return g.apply(_this, e.data);
        });
      }
    };

    // create mappers from the UI-thread side method calls to the UI-thread side postMessage method, to inform the worker thread that methods were called, with parameters.
    for (var k in func.prototype) {
      // we skip the addEventListener method because we override it in a different way, to be able to pass messages across the thread boundary.
      if (k != "addEventListener") {
        this[k] = function () {
          // convert the varargs array to a real array
          var args = Array.prototype.slice.call(arguments);
          this.worker.postMessage(args);
        }.bind(this, k); // make the name of the function the first argument, no matter what.
      }
    }
  }

  // Adding an event listener just registers a function as being ready to receive events, it doesn't do anything with the worker thread yet.

  Workerize.prototype.addEventListener = function addEventListener(evt, thunk) {
    if (!this.listeners[evt]) {
      this.listeners[evt] = [];
    }
    this.listeners[evt].push(thunk);
  };

  return Workerize;
}();



// You can save some processing time by making the strips wider, but the fidelity of the image will suffer.
var STRIP_WIDTH = 1;

var Flag = (_temp = _class = function () {
  // You can change these scaling factors to change the number of folds and the speed of the waive of the flag.

  function Flag(f) {
    _classCallCheck(this, Flag);

    this.image = f;
    this.DOMElement = document.createElement("div");
    this.parts = [];
    this.shadows = [];
    this.t = 0;

    if (this.image.clientWidth > 0) {
      this.onload();
    } else {
      // just in case the image took longer to load than we expected
      this.image.addEventListener("load", this.onload.bind(this), false);
    }
  }

  // This offset factor pushes the shadow to the side to make it look a little more realistic.

  Flag.prototype.onload = function onload() {
    // we set the container element's width and height to explicitly match the size of the original image. This makes it easier to calculate the offsets for the image strips.
    this.DOMElement.style.width = this.image.clientWidth + "px";
    this.DOMElement.style.height = this.image.clientHeight + "px";

    // generate all of the image strips:
    for (var x = 0; x < this.image.clientWidth; x += STRIP_WIDTH) {
      // a DIV element for both the image strip and the shadow strip
      var p = document.createElement("div"),
          s = document.createElement("div");

      this.parts.push(p);
      this.shadows.push(s);

      // set the strip's background image to the src attribute of the original element. If the image loaded, then this should work fine.
      p.style.backgroundImage = "url(" + this.image.src + ")";

      // put the strip into its place inside of the container.
      s.style.left = p.style.left = x + "px";
      s.style.width = p.style.width = STRIP_WIDTH + "px";

      // and reset the position of the background image within it, so that they create a thin, tall window over the background image.
      p.style.backgroundPosition = -x + "px 0";

      // and of course, put the elements in the container.
      this.DOMElement.appendChild(p);
      this.DOMElement.appendChild(s);
    }

    // finally, we replace the original image with our ersatz image, and copy the class and ID from the image to the new element, so it can pick up some of the positioning attributes of the original image
    this.image.parentElement.replaceChild(this.DOMElement, this.image);
    this.DOMElement.className = this.image.className;
    this.DOMElement.id = this.image.id;
  };

  Flag.prototype.update = function update(dt) {
    this.t += dt;
  };

  Flag.prototype.render = function render() {
    this.parts.forEach(function (p, x) {
      var s = this.shadows[x],

      // The waiving shape is a sinusoidal function. We apply the scaling and offset factors here, to change the shape of the sine waive.
      a = (x * Flag.SCALE_I + this.t * Flag.SCALE_T) * Flag.SCALE_A,
          v1 = Math.sin(a),
          v2 = Math.sin(a - Flag.OFFSET_S);

      // both the shadow and the image strip need to be repositioned or else the shadow won't overlap the image correctly.
      s.style.top = p.style.top = v1 * 4 + "px";

      // Setting the opacity of the shadow strip lets the image underneath blend through, creating the effect of depth on the flag.
      s.style.opacity = (v2 + 1) / 4;
    }.bind(this));
  };

  return Flag;
}(), _class.SCALE_I = 3, _class.SCALE_T = 165 / STRIP_WIDTH, _class.SCALE_A = 0.03 * STRIP_WIDTH, _class.OFFSET_S = 1.5 * STRIP_WIDTH, _temp);

// find every element tagged with the "flag" CSS class, and turn them into Flag objects

var flags = Array.prototype.map.call(document.querySelectorAll(".flag"), function (f) {
  return new Flag(f);
});

animate(function (dt) {
  return flags.forEach(function (f) {
    return f.update(dt);
  });
}, function () {
  return flags.forEach(function (f) {
    return f.render();
  });
});


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  </script>

  <?php } ?>

<?php 
$this->registerJs(<<<JS

var waypoint2 = new Waypoint({
  element: $('.third'),
  handler: function(direction) {
    if (direction == 'down') {
                             $('.third').removeClass('offscreen');
    } else {
                             $('.third').addClass('offscreen');
    }
  },
  offset: '90%'
});


/*
$('.count').each(function() {
var waypoint = new Waypoint({
element: this, handler: function(direction) {
Counter(this.element,5000);
waypoint.destroy();
  },
  offset: '90%'
});
});*/


var waypoint = new Waypoint({
element: $('.count'), handler: function(direction) {
Counter(this.element,5500);
waypoint.destroy();
  }, offset: '90%' });

var waypoint3 = new Waypoint({
element: $('.count1'), handler: function(direction) {
Counter(this.element,8000);
waypoint3.destroy();
  }, offset: '90%' });

var waypoint4 = new Waypoint({
element: $('.count2'), handler: function(direction) {
Counter(this.element,10000);
waypoint4.destroy();
  }, offset: '90%' });


function Counter(th,\$num) {
    var \$this = jQuery(th);
    var \$start = jQuery(\$this).text();
            jQuery({ Counter: \$start }).stop(true, true).delay(900).animate({ Counter: \$num }, {
                duration: 1700,
                easing: 'swing',
                step: function (now) {
                    \$this.text(Math.ceil(now));
                }
            });
};

JS
, yii\web\View::POS_LOAD);  

?>
