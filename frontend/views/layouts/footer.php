<?PHP
use yii\helpers\Html;
?>

<footer class="page-footer bg-gray-lighter">

<div class=" foot1">
<div class="row">
<div class="col-md-2  col-sm-2 col-xs-2 foocol"></div>

<div class="col-md-3   col-sm-3 col-xs-5">
 <p><a href="/driving-school">Автомотошкола</a></p>   
 <p><a href="/driving-school/A">Категория А</a></p>
  <p><a href="/driving-school/B">Категория B</a></p>
  <p style="padding-top:0px"><b><a href="/self-propelled-machinery">Самоходная техника</a></b></p>
  <p style="padding-top:0px"><b><a href="/navigation">Судовождение</a></b></p>   
  <p style="padding-top:0px"><b><a href="/safety-driving">Защитное вождение</a></b></p>   
  <p style="padding-top:0px"><b><a href="/distance-education">Дистанционное обучение</a></b></p>   

 <!-- <p><a href="/postupayushchim">Запись на обучение</a></p>
 <p><a href="/raspisanie">Расписание занятий</a></p>
 <p><a href="/our-advantages">Наши преимущества</a></p>
 <p><a href="/additional-services">Дополнительные услуги</a></p> -->
 </div>

  <!-- <div class="clearfix visible-sm"></div> -->
  <div class="col-xs-2 foocol hidden-sm visible-xs"></div>

<div class="col-md-3 col-sm-3  col-xs-5 col4">

<?php if (hm('site/dopuslugi')) {
  ?>
<p><a href="#">Дополнительные услуги</a></p>   
 <p><a data-toggle="collapse" href="#specialsignals">Курс "Спецсигналы"</a></p>
 <p><a data-toggle="collapse" href="#DOPOG">Курс "ДОПОГ"</a></p>
 <p><a data-toggle="collapse" href="#instructor_training">Обучение инструкторов</a></p>
 <p><a data-toggle="collapse" href="#Arenda_avtodroma">Аренда автодрома</a></p>
 <p><a data-toggle="collapse" href="#consultation">Занятия с инструктором</a></p>

  <?php } else { ?>
<p><a href="/additional-services">Дополнительные услуги</a></p>   
 <p><a href="/additional-services#specialsignals">Курс "Спецсигналы"</a></p>
 <p><a href="/additional-services#DOPOG">Курс "ДОПОГ"</a></p>
 <p><a href="/additional-services#instructor_training">Обучение инструкторов</a></p>
 <p><a href="/additional-services#Arenda_avtodroma">Аренда автодрома</a></p>
 <p><a href="/additional-services#consultation">Занятия с инструктором</a></p>

<?php } ?>

</div>
<div class="col-md-3  col-sm-3 col-xs-12 my"><div class="vk"><BR/>
<p><?php    echo Html::a(
    'Запись на занятия',
  ['#'],
  [ 'data-toggle' => 'modal',
    'data-target' => '#idmodal',
    'data-which' => '1',
  ]
    ); ?></p> 

  <!--  <div class="wrapperb">
    <p class="innerb">
        <a href="/" class="buttonn">
            <span class="borderr"></span>
            <span class="topp"></span>
            <span class="rightt"></span>
            <span class="bottomm"></span>
            <span class="leftt"></span>
            <span class="textt">Запись на обучение</span>
        </a>
    </p>
</div>http://codepen.io/anon/pen/mWJmmm?editors=1100-->
<p style="margin-left:-10px">  <a target="blank" href="https://vk.com/rosavtoakademia" class="icon icon-xxs icon-circle icon-white hi-icon"><i class=" fa fa-vk"></i></a><a href="https://vk.com/rosavtoakademia" target="blank" class="myvk">Мы Вконтакте</a></p><BR/>
<!--<div class="hi-icon-effect-8 "> -->

</div>
</div>
</div>
</div>
<div class="rangelogo range-xs-center range-xs-middle text-center">
<!-- <img class="minilogo" src="http://front.loc/images/minlogo.png" align="left"> -->
<p class="pull-top">&nbsp; Copyright &copy; <span id="copyright-year"><?= date('Y') ?> АНО ДПО "Академия"</span>
 <a href="privacy-policy-link.html" class="link-decoration-none text-hover-primary text-gray-light">
 </a></p>


</div>
</footer>




<!-- <div id="w00" class="col-xs-11 col-sm-3 alert alert-custom  fadeInDown" role="alert" data-notify="container" data-notify-position="top-center" style="display: inline-block; margin: 0px auto; position: fixed; transition: all 0.5s ease-in-out; z-index: 1031; top: 20px; left: 0px; right: 0px; animation-iteration-count: 1;"><button type="button" class="close" data-notify="dismiss"><span aria-hidden="true">×</span></button><span data-notify="icon" class="fa fa-envelope"></span><span data-notify="title">Сообщение отправлено!</span><hr class="kv-alert-separator"><span data-notify="message">Спасибо, что обратились к Нам. <br/>Мы ответим Вам в ближайшее время.</span><a href="#" data-notify="url" target="_blank"></a></div> -->

<?php 
$this->registerJs(<<<JS
var div = document.createElement('div');
div.className = "greenlinebot";
  document.getElementsByClassName("navbar-header")[0].appendChild(div);
  $('form').on('beforeSubmit', function(e) {
    var form = $(this);
    var formData = form.serialize();
    $.ajax({
       // url: form.attr("action"),
        type: form.attr("method"),
        data: formData,
        success: function (result) {
        yaCounter43279694.reachGoal("click123"); 
        ga('send', 'event', 'forma', 'ok');
//     $("#w00").addClass('animated');
//                                  $('#idmodal').modal('toggle');
//                      setTimeout(function(){        $("#w00").removeClass('animated');
//                        }, 3000);
  //console.log(result);
//if (result == 'true') {
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
//}
//else { modalBody.html(result).hide().fadeIn();                }
        },
        error: function () {
            alert("Something went wrong");
        }
    });
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


<!-- Google.Analytics counter --> <script>!function(e,t,a,n,c,s,o){e.GoogleAnalyticsObject=c,e[c]=e[c]||function(){(e[c].q=e[c].q||[]).push(arguments)},e[c].l=1*new Date,s=t.createElement(a),o=t.getElementsByTagName(a)[0],s.async=1,s.src=n,o.parentNode.insertBefore(s,o)}(window,document,"script","https://www.google-analytics.com/analytics.js","ga"),ga("create","UA-93157723-1","auto"),ga("send","pageview");</script>
<!-- Yandex.Metrika counter --> <script type="text/javascript"> (function (d, w, c) { (w[c] = w[c] || []).push(function() { try { w.yaCounter43279694 = new Ya.Metrika({ id:43279694, clickmap:true, trackLinks:true, accurateTrackBounce:true, webvisor:true }); } catch(e) { } }); var n = d.getElementsByTagName("script")[0], s = d.createElement("script"), f = function () { n.parentNode.insertBefore(s, n); }; s.type = "text/javascript"; s.async = true; s.src = "https://mc.yandex.ru/metrika/watch.js"; if (w.opera == "[object Opera]") { d.addEventListener("DOMContentLoaded", f, false); } else { f(); } })(document, window, "yandex_metrika_callbacks"); </script> <noscript><div><img src="https://mc.yandex.ru/watch/43279694" style="position:absolute; left:-9999px;" alt="" /></div></noscript> <!-- /Yandex.Metrika counter -->


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
<script type="text/javascript"  src="//www.googleadservices.com/pagead/conversion_async.js"></script>