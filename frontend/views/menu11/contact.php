<?php

/* @var $this yii\web\View */
/* @var $form yii\bootstrap\ActiveForm */
/* @var $model \frontend\models\ContactForm */

use yii\helpers\Html;
use yii\bootstrap\ActiveForm;
use yii\captcha\Captcha;
use phpnt\yandexMap\YandexMaps;

$this->title = 'Наши контакты';
$this->params['breadcrumbs'][] = $this->title;
?>



<!--    <div class="" id="full-widthid">
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
  </div>



 -->



<!-- <?= Html::encode($this->title) ?> -->
<div class="site-contact container">
    <br/>    <br/>
    <div class="row">
    <div class="col-md-6">
 <h1>Контакты</h1>


<p><b> АНО ДПО "Академия".</b></p>
<div class="panel-group" id="accordion">
  <div class="panel panel-default">
    <div class="panel-heading">
      <h4 class="panel-title">
        <a data-toggle="collapse" data-parent="#accordion" href="#collapse1">
       Центральный офис</a>
      </h4>
    </div>
    <div id="collapse1" class="panel-collapse collapse in">
      <div class="panel-body"><b> 443099, г. Самара, ул. Молодогвардейская 33, оф. 232. Время работы с 8:00-17:00. Тел.: (846) 205-77-66</b></div>
    </div>
  </div>
  <div class="panel panel-default">
    <div class="panel-heading">
      <h4 class="panel-title">
        <a data-toggle="collapse" data-parent="#accordion" href="#collapse2">
       Наш автодром</a>
      </h4>
    </div>
    <div id="collapse2" class="panel-collapse collapse">
      <div class="panel-body"><b>г. Самара, ул. Утевская, напротив 4 роты полка ДПС ГИБДД Управление МВД России по г. Самаре).Время работы 9:00-20:00 </b></div>
    </div>
  </div>

</div>
</p>
<p><b>Тел.:</b> (846) 255-69-99</p> 
<p><b>Электронная почта:</b> <a href="mailto:samarapb@mail.ru">samarapb@mail.ru</a></p>
<br/><br/>
    </div>
    <div class="col-md-6">  


    </div> </div>
   

<div class="container-fluid">
 <h6 class="text-center">Схема проезда </h6>
 <br/>

<section class="map1 wideline"></section>
<!-- <BR><BR><BR><BR>
Вторая карта
<div id="map2" class="wideline" ></div> -->

</div>

<!-- <section class="feedback">

    <p>
Любые интересующиеся вопросы, Вы можете задать через форму обратной связи, пожалуйста, заполните форму для связи с нами. 
    </p>

    <div class="row">

        <div class="col-md-offset-4 col-lg-offset-3 col-lg-5 col-md-5 col-sm-7 col-sm-offset-2">
            <?php $form = ActiveForm::begin(['id' => 'contact-form']); ?>

                <?= $form->field($model, 'name')->textInput(['autofocus' => false]) ?>

                <?= $form->field($model, 'email') ?>

                <?= $form->field($model, 'subject') ?>

                <?= $form->field($model, 'body')->textarea(['rows' => 6]) ?>

                <?= $form->field($model, 'verifyCode')->widget(Captcha::className(), [
  'template' => '<div class="row"><div class="col-lg-3">{image}</div><div class="col-lg-6">{input}</div></div>',
                ]) ?>

                <div class="form-group">
                    <?= Html::submitButton('Submit', ['class' => 'btn btn-primary', 'name' => 'contact-button']) ?>
                </div>

            <?php ActiveForm::end(); ?>
        </div>
    </div>
    </section> -->

</div>



