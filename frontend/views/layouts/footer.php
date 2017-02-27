<?PHP
use yii\helpers\Html;
?>

<footer class="page-footer bg-gray-lighter">

<div class=" foot1">
<div class="row">
<div class="col-md-2 col-xs-2 foocol"></div>

<div class="col-md-3 col-xs-5">
 <p><a href="/automotoschool">Автомотошкола</a></p>   
 <p><a href="/automotoschool/A">Категория А</a></p>
  <p><a href="/automotoschool/B">Категория B</a></p>
  <p style="padding-top:5px"><b><a href="/samohodnaya-tehnika">Самоходная техника</a></b></p>
  <p style="padding-top:5px"><b><a href="/sudovozhdenie">Судовождение</a></b></p>   
 <!-- <p><a href="/postupayushchim">Запись на обучение</a></p>
 <p><a href="/raspisanie">Расписание занятий</a></p>
 <p><a href="/our-advantages">Наши преимущества</a></p>
 <p><a href="/dop-uslugi">Дополнительные услуги</a></p> -->
 </div>

  <div class="clearfix visible-sm"></div>
  <div class="col-xs-2 foocol visible-sm visible-xs"></div>

<div class="col-md-3 col-xs-5 col4">
<p><a href="/dop-uslugi">Дополнительные услуги</a></p>   
 <p><a href="/dop-uslugi#specialsignals">Курс "Спецсигналы"</a></p>
 <p><a href="/dop-uslugi#DOPOG">Курс "ДОПОГ"</a></p>
 <p><a href="/dop-uslugi#instructor_training">Обучение инструкторов</a></p>
 <p><a href="/dop-uslugi#Arenda_avtodroma">Аренда автодрома</a></p>
 <p><a href="/dop-uslugi#consultation">Консультации</a></p>
</div>
<div class="col-md-3 col-xs-12 my"><div class="vk"><BR/>
<p><?php    echo Html::a(
    'Запись на занятия',
  ['#'],
  [ 'data-toggle' => 'modal',
    'data-target' => '#idmodal',
    'data-which' => '8',
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
<p style="margin-left:-10px">  <a target="blank" href="https://vk.com/club66648747" class="icon icon-xxs icon-circle icon-white hi-icon"><i class=" fa fa-vk"></i></a><a href="https://vk.com/club66648747" target="blank" class="myvk">Мы Вконтакте</a></p><BR/>
<!--<div class="hi-icon-effect-8 "> -->


<p></p>
<p></p>
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



JS
, yii\web\View::POS_READY, 'contact-form'); ?>

<!-- Copyright © 2017 АНО НПО “Академия”
<footer class="footer">
    <div class="container">
        <p class="pull-left"> My Company </p>

        <p class="pull-right"></p>
    </div>
</footer> -->