<?php
/* @var $this yii\web\View */
/* @var $form yii\bootstrap\ActiveForm */
/* @var $model \frontend\models\ContactForm */

use yii\helpers\Html;
use yii\bootstrap\Nav;
use yii\bootstrap\NavBar;

use yii\bootstrap\ActiveForm;
use frontend\components\ModalForm;
use frontend\models\Forma;
use yii\base\Widget;
use yii\helpers\Url;



$des = Yii::$app->mobileDetect->isDesktop();
$mobi = Yii::$app->mobileDetect->isMobile();
$tablet = Yii::$app->mobileDetect->isTablet();

//<?= Yii::$app->params['homechecker'] = false; 

?>






<header class="page-header1">



<div class="navbar-panel-inner container"><div class="backgr">
<div class="header-top row ">


<div class="col-md-2 col-lg-3 col-sm-2 col-xs-1 forlogo" >


<?php $forma = new Forma(); ?>
<?= ModalForm::widget(['model' => $forma]) ?>

<?php  
//  echo ModalWidget::widget();
  



  if(hm('site/index'))
  {
    echo '<a href="/" ><div class="logo-akademia hvr-up onload-logo" ></div></a>';
    
  }else
  { 
   echo '<a href="/"><div class="logo-akademia hvr-up animated fadeIn" ></div></a>';

  } ?>

 <!--  <map name="map">
    <area shape="poly" href="sun.htm" coords="41, 88, 10, 69, 9, 26, 7, 12, 16, 5, 43, 3, 71, 5, 74, 10, 68, 30, 73, 44, 75, 63" />
</map>
<img src="logo80.png" alt="" usemap="#map" />


<img class="logo-akademia hvr-up onload-logo" src="../images/logo134.png" width="134px"> -->
</div>
<div class="col-md-6 col-lg-6 col-sm-6 col-xs-7 mob">

<img class="logotop anilogo fadeIn" src="/images/rosauto3.png" width="100%" alt="Автошкола «Росавтоакадемия» г. Самара" title="Автошкола «Росавтоакадемия» г. Самара">
<!--<p class="logotext onload-text">РОСАВТОАКАДЕМИЯ</p>-->
 <p class="logotextbottom hidemobi">Лицензия № 4913 от 16.04.2013 г. / Аккредитация RoSPA (Великобритания)</p> 


  <div class="justmobi">
    <div class="row">
      
      <p class="phone"><a href="tel:+78462556999"> +7 (846) 255-69-99</a></p>
<span class="take">
<?php    echo Html::a(
    'Заявка ОН-ЛАЙН',
  ['#'],
  [ 'data-toggle' => 'modal',
    'data-target' => '#idmodal',
    'data-which' => '0',
    'class' => 'hvr-wobble-horizontal'
  ]
    ); ?>

</span>

    </div>
  </div>


</div>
<div class="col-lg-3 col-lg-offset-1 col-md-4 col-sm-4 col-xs-4 text-right rightblock hidemobi"><p class="phone"><a href="tel:+78462556999"> +7 (846) 255-69-99</a></p>
<p class="take">
<?php    echo Html::a(
    'Запись ОН-ЛАЙН',
  ['#'],
  [ 'data-toggle' => 'modal',
    'data-target' => '#idmodal',
    'data-which' => '0',
    'class' => 'hvr-wobble-horizontal'
  ]
    ); ?>

</p>
</div>


</div>


<!-- will move to footer <div class="rd-navbar-panel-inner-right toggle-original-elements">
<a href="#" class="icon icon-xxs icon-circle icon-gray-lighter fa fa-vk"></a>
</div>
</div> -->




<div class="wrap  animated fadeIn" data-spy="" id="affix">
<!--   <div class="greenlineup"></div>
 -->

<div class="logo46"></div>

    <?php
    NavBar::begin([
     //   'brandLabel' => 'Учебный центр "Академия"',
        'brandUrl' => Yii::$app->homeUrl,
                    'containerOptions' => ['id' => 'topmen'],

        'options' => [
            'class' => 'navbar navbar-default navshadow skew-menu centering',


        ],
    ]);
    $menuItems = [
 ['label' => 'Главная', 'url' => ['/'], 'active' => $this->context->route == 'site/index'],
        ['label' => 'Дистанционное обучение', 'url' => ['/distance-education'], 'active' => $this->context->route == 'site/distance'],
        ['label' => 'Галерея', 'url' => ['/gallery'], 'active' => $this->context->route == 'site/gallery'],
        ['label' => 'Об организации', 'url' => ['/about-us'], 'active' => $this->context->route == 'site/aboutus'],
        ['label' => 'Контакты', 'url' => ['/contact'], 'active' => $this->context->route == 'site/contact']];
   
    echo Nav::widget([
        'options' => ['class' => 'navbar-nav navbar-right interface'],
        'items' => $menuItems,
    ]);

    NavBar::end();
    ?>
</div> 
</div>  </div>


</header>



<script type="text/javascript">

var str = '<img src="/img/ico-menu.png" alt=""> <span>МЕНЮ</span>'; 
document.getElementsByClassName("navbar-toggle")[0].innerHTML=str;

var items = document.querySelectorAll(".navbar-collapse ul li");
 var lastchild = items[items.length-1];

   lastchild.classList.add('last');
   items[0].classList.add('first');



var links = document.querySelectorAll('.navbar-collapse ul li');
var i=1;
[].forEach.call(links, function(item) {
      item.classList.add('fadeInUp1');
      item.classList.add('animated' + i );

    i++;
});




  </script>

