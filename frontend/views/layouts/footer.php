<?PHP
use yii\helpers\Html;
?>
<footer class="page-footer bg-gray-lighter">

<div class=" foot1">
 <div class="foot1__preload-hide">
   <img src="../../img/phone_icon.png" width="1" height="1" title="Школа вождения, обучение вождению" alt='Автошкола "Росавтоакадемия" номер телефона' />
 </div>

<div class="row">

        <div class="col-sm-4 col-xs-12">
                <div class="footer-col-1 col1">
                <i class="footer__vline footer__vline_1"></i>
<ul class="footer-links">
<li><a href="/driving-school"></i>Автомотошкола</a></li>
<li class="indent10"><i class="footer__hline footer__hline_1"></i> <a href="/driving-school/A">Категория А</a></li>
<li class="indent10"><i class="footer__hline footer__hline_1"></i> <a href="/driving-school/B">Категория B</a></li>
 
<?php if (hm('site/dopuslugi')) {
  ?>
 <!--<li  style="font-size:14.5px;" class="indent10"><i class="footer__hline footer__hline_1"></i><a href="#" style="font-weight:900">Дополнительные услуги</a></li>
 <i class="footer__vline_two footer__vline_1_1"></i>-->
 <li class="indent10"><i class="footer__hline footer__hline_1"></i> <a data-toggle="collapse" href="#instructor_training">Обучение инструкторов</a></li>
 <li  class="indent10"><i class="footer__hline footer__hline_1"></i> <a data-toggle="collapse" href="#Arenda_avtodroma">Аренда автодрома</a></li>
 <li  class="indent10"><i class="footer__hline footer__hline_1"></i> <a data-toggle="collapse" href="#consultation">Занятия с инструктором</a></li>
  <?php } else { ?>
 <!--<li style="font-size:14.5px;" class="indent10"><i class="footer__hline"></i><a href="/additional-services" style="font-weight:900"><span>Д</span>ополнительные услуги</a></li>
  <i class="footer__vline_two footer__vline_1_1"></i>-->
 <li class="indent10"><i class="footer__hline footer__hline_1"></i> <a href="/additional-services#instructor_training">Обучение инструкторов</a></li>
 <li class="indent10"><i class="footer__hline footer__hline_1"></i> <a href="/additional-services#Arenda_avtodroma">Аренда автодрома</a></li>
 <li class="indent10"><i class="footer__hline footer__hline_1"></i> <a href="/additional-services#consultation">Занятия с инструктором</a></li>
<?php } ?>

</ul>
                  </div>
        </div>
        <div class="clearfix visible-xs" style="margin-bottom:20px;"></div>
       <div class="col-sm-4 col-xs-12">
                       <div class="footer-col-2 col4">
   

<!--<i class="footer__vline footer__vline_2"></i>-->


<ul class="footer-links">
<li style="font-size:14.5px;padding-top:0px"><b><a href="/safety-driving">Защитное вождение</a></b></li>
<li style="font-size:14.5px;padding-top:0px"><b><a href="/self-propelled-machinery">Самоходная техника</a></b></li>
<li style="font-size:14.5px;padding-top:0px"><b><a href="/DOPOG">Курсы по ДОПОГ</a></b></li>
<li style="font-size:14.5px;padding-top:0px"><b><a href="/navigation">Судовождение</a></b></li>
<li style="font-size:14.5px;padding-top:0px"><b><a href="/special-signals">Курс "Спецсигналы"</a></b></li>  

</ul>      
        </div>

                </div>
        <div class="col-sm-4 col-xs-12">
                        <div class="footer-col-3 my">


<div class="footer-phone">
<p class="phone">
<a href="tel:+78462556999"><i class="footer-phone__pic"></i> <span>+7 (846) 255-69-99</span></a></p>
<p class="footer-phone__p">пн-чт с 8.00 до 17.00</p>
<p class="footer-phone__p">пт с 8.00 до 16.00</p>
</div>
<div class="vk">
<?php    echo Html::a(
   '<div class="wrapperb">
        <p class="buttonn">
            <span class="borderr"></span>
            <span class="topp"></span>
            <span class="rightt"></span>
            <span class="bottomm"></span>
            <span class="leftt"></span>
            <span class="textt">Запись на занятия</span>
        </p>
</div>',
  ['#'],
  [
  'data-toggle' => 'modal',
  'data-target' => '#idmodal',
  'data-which' => '1',
  ]
    ); ?> 


                  </div>
<a href="https://www.rospa.com" target="_blank" ><img src="/images/RoSPA_Accredited.png" width="70px" style="margin-bottom:-25px;margin-top:-15px"></a>

<!--
<p class="footer__myvkontakte  text-right" style="margin-top:3px"><a href="https://vk.com/rosavtoakademia" target="blank" class="myvk"><span>Мы ВКонтакте</span> <i class="social-btns"><i class="btn vk" href="#"><i class="fa fa-vk"></i></i></i></a></p>
-->
<!--<br><br><p class="footer__myvkontakte text-right visible-xs"  style="margin-top:7px"><a href="https://vk.com/rosavtoakademia" target="blank" class="myvk"><span>Мы ВКонтакте</span> <i class="social-btns"><i class="btn vk" href="#"><i class="fa fa-vk"></i></i></i></a></p>
-->
        </div>

<!--
<div class="col-md-2  col-sm-2 col-xs-2 foocol"></div>
<div class="col-md-3   col-sm-3 col-xs-5 col1"> 

</div> -->
 <!-- <p><a href="/postupayushchim">Запись на обучение</a></p>
 <p><a href="/raspisanie">Расписание занятий</a></p>
 <p><a href="/our-advantages">Наши преимущества</a></p>
 <p><a href="/additional-services">Дополнительные услуги</a></p> -->
 
  <!-- <div class="clearfix visible-sm"></div> -->
<!--  <div class="col-xs-2 foocol hidden-sm visible-xs"></div>
<div class="col-md-3 col-sm-3  col-xs-5 col4">
</div>
<div class="col-md-3  col-sm-3 col-xs-12 my">
<BR/>
</div>
-->
  <!--http://codepen.io/anon/pen/mWJmmm?editors=1100-->
<!-- <p style="margin-left:85px;text-align:center"><a href="https://vk.com/rosavtoakademia" target="blank" class="myvk"><i class="icon icon-xxs icon-circle icon-white hi-icon"><i class=" fa fa-vk"></i></i>Мы Вконтакте</a></p>
-->
<!--<div class="hi-icon-effect-8 ">              <i class="my-vk"></i>-->

<!--<p style="margin-top:15px"><a href="https://vk.com/rosavtoakademia" target="blank" class="myvk"><span>Мы Вконтакте &nbsp;</span> <i class="icon-button vk1"> <i class="fa fa-vk"><span></span></i></i></a></p>-->

<BR/>
</div>
</div>
</div>
<div class="rangelogo range-xs-center range-xs-middle text-center">
<!-- <img class="minilogo" src="http://front.loc/images/minlogo.png" align="left"> -->
<p class="pull-top">&nbsp; Copyright &copy; <span id="copyright-year"><?= date('Y') ?> АНО ДПО "Академия". &nbsp;<a href="/privacy" class="privacy">Политика конфиденциальности</a></span>
 <a href="" class="link-decoration-none text-hover-primary text-gray-light">
 </a></p>
  <!--<p class="footer__myvkontakte text-right hidden-xs"><a href="https://vk.com/rosavtoakademia" target="blank" class="myvk" style=""><span>Мы ВКонтакте</span> <i class="social-btns"><i class="btn vk" href="#"><i class="fa fa-vk"></i></i></i></a></p>
  -->


</div>
</footer>




<!-- <div id="w00" class="col-xs-11 col-sm-3 alert alert-custom  fadeInDown" role="alert" data-notify="container" data-notify-position="top-center" style="display: inline-block; margin: 0px auto; position: fixed; transition: all 0.5s ease-in-out; z-index: 1031; top: 20px; left: 0px; right: 0px; animation-iteration-count: 1;"><button type="button" class="close" data-notify="dismiss"><span aria-hidden="true">×</span></button><span data-notify="icon" class="fa fa-envelope"></span><span data-notify="title">Сообщение отправлено!</span><hr class="kv-alert-separator"><span data-notify="message">Спасибо, что обратились к Нам. <br/>Мы ответим Вам в ближайшее время.</span><a href="#" data-notify="url" target="_blank"></a></div> -->

<?php 



$this->registerJs(<<<JS


var div = document.createElement('div');
div.className = "greenlinebot";

  document.getElementsByClassName("navbar-header")[0].appendChild(div);
  var allowSubmit = true;
  $('form').on('beforeSubmit', function(e) {

            if (allowSubmit) 
{
    allowSubmit = false; 
    var form = $(this);
    var formData = form.serialize();
    $.ajax({
     // url: form.attr("action"),
        type: form.attr("method"),
        data: formData,
        success: function (result) {

if (typeof window.yaCounter43279694 != 'undefined') {  yaCounter43279694.reachGoal("clickpb123") }

          if (typeof ga == 'function') { ga('send', 'event', 'forma', 'ok');  }
     

var modalContainer = $('#idmodal');
var modalBody = modalContainer.find('.modal-body');
var insidemodalBody = modalContainer.find('#contact-form');
insidemodalBody.html(result).hide(); 
$('.sel').html("<div class='alert alert-success'>");
$('.sel > .alert-success').append("<strong>Спасибо! Заявка отправлена.</strong>");
$('.sel > .alert-success').append('</div>');
//$('.sel').css('visibility', 'visible');

setTimeout(function() { 
$("#idmodal").modal('hide');
//$('#w00').css('visibility', 'hidden');
}, 4000);

        },
        error: function () {
            alert("Something went wrong");
        }
    });

  }
}).on('submit', function(e){
    e.preventDefault();
}); 

/*
"use strict";
function start5() {
    if (jQuery("#specialsignals").hasClass("in")) {
        jQuery("#specialsignals").removeClass("in");
    } else {
        jQuery("#specialsignals").addClass("in").css({
            height: "auto !important"
        });
    }
}*/


JS
, yii\web\View::POS_READY, 'contact-form'); ?>

<!-- Copyright © 2017 АНО НПО “Академия”
<footer class="footer">
    <div class="container">
        <p class="pull-left"> My Company </p>

        <p class="pull-right"></p>
    </div>
</footer> -->



<script type="text/javascript"> 
var host = window.location.hostname;
if (host != "front.loc")
{
// Google.Analytics counter
!function(e,t,a,n,c,s,o){e.GoogleAnalyticsObject=c,e[c]=e[c]||function(){(e[c].q=e[c].q||[]).push(arguments)},e[c].l=1*new Date,s=t.createElement(a),o=t.getElementsByTagName(a)[0],s.async=1,s.src=n,o.parentNode.insertBefore(s,o)}(window,document,"script","https://www.google-analytics.com/analytics.js","ga"),ga("create","UA-93157723-1","auto"),ga("send","pageview");
// Yandex.Metrika counter 
var yaParams = {ip: "<? echo $_SERVER['REMOTE_ADDR'];?>", agent: "<? echo $_SERVER['HTTP_USER_AGENT'];?>"};
(function (d, w, c) { (w[c] = w[c] || []).push(function() { try { w.yaCounter43279694 = new Ya.Metrika({ id:43279694, clickmap:true, trackLinks:true, accurateTrackBounce:true, webvisor:true, params:window.yaParams }); } catch(e) { } }); var n = d.getElementsByTagName("script")[0], s = d.createElement("script"), f = function () { n.parentNode.insertBefore(s, n); }; s.type = "text/javascript"; s.async = true; s.src = "https://mc.yandex.ru/metrika/watch.js"; if (w.opera == "[object Opera]") { d.addEventListener("DOMContentLoaded", f, false); } else { f(); } })(document, window, "yandex_metrika_callbacks"); 
}
</script>
<!-- Yandex.Metrika counter -->
<noscript><div><img src="https://mc.yandex.ru/watch/43279694" style="position:absolute; left:-9999px;" alt="Обучение вождению" title="Открыть категорию на автомобиль и мотоцикл." /></div></noscript> 
<!-- /Yandex.Metrika counter -->


<!-- Google Code for Conversion Page
In your html page, add the snippet and call
goog_report_conversion when someone clicks on the
phone number link or button. -->
<script type="text/javascript">
  /* <![CDATA[ */
  goog_snippet_vars = function() {
    var w = window;
    w.google_conversion_id = 1014455957;
    w.google_conversion_label = "aMPBCNLzkG8Qlb3d4wM";
    w.google_remarketing_only = false;
  }
  // DO NOT CHANGE THE CODE BELOW.
  goog_report_conversion = function(url) {
    goog_snippet_vars();
    window.google_conversion_format = "3";
    var opt = new Object();
    opt.onload_callback = function() {
    if (typeof(url) != 'undefined') {
      window.location = url;
    }
  }
  var conv_handler = window['google_trackConversion'];
  if (typeof(conv_handler) == 'function') {
    conv_handler(opt);
  }
}
/* ]]> */


</script>

<?php 

if ($_SERVER['HTTP_HOST']!=="front.loc"){  ?>
 <script type="text/javascript"  src="//www.googleadservices.com/pagead/conversion_async.js"></script>
<?php } ?>

