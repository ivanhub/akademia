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






<!-- <?= Html::encode($this->title) ?> --> <br/>    <br/>
<div class="site-contact container siteblock">
   
    <div class="row">
    <div class="col-md-6 col-sm-6 cont">
 <h1>Контакты</h1>


<p><b> АНО ДПО "Академия".</b></p>
  <div class="START"><div class="start2">
      

  <div class="panel-group" id="accordion">
    <div class="panel panel-default">
   <div class="panel-heading">
      <h4 class="panel-title"><a data-toggle="collapse" data-parent="#accordion" href="#collapse1">Росавтоакадемия, Центральный офис</a>  </h4>
   </div>
   <div id="collapse1" class="panel-collapse collapse in">
      <div class="panel-body"><b>443099, г. Самара, <br>ул. Молодогвардейская 33, оф. 232. Время работы 8:00 - 18:00. <br>Тел.: +7 (846) 255-69-99</b></div>
   </div>
</div>
<div class="panel panel-default">
   <div class="panel-heading">
      <h4 class="panel-title"><a data-toggle="collapse" data-parent="#accordion" href="#collapse1">Автодром</a>  </h4>
   </div>
   <div id="collapse1" class="panel-collapse collapse in">
      <div class="panel-body"><b>г. Самара, <br>ул. Уральская, 34 (по ул. Утевская, напротив 4 роты полка ДПС ГИБДД) <br>Время работы 9:00-20:00</b></div>
   </div>
</div>
<!-- <div class="panel panel-default">
   <div class="panel-heading">
      <h4 class="panel-title"><a data-toggle="collapse" data-parent="#accordion" href="#collapse1">Новый учебный класс</a>  </h4>
   </div>
   <div id="collapse1" class="panel-collapse collapse in">
      <div class="panel-body"><b>г. Самара, ул. Осипенко, 11. Время работы 8:00-18:00<br/>Тел.: +7 (846) 255-69-99</b></div>
   </div>
</div> -->
</div>



  </div> </div>
  <br/>
<p style="font-size:20px;"><b>Тел.:</b> <span class="fa fa-phone" style="color:#0c500c;"></span> +7 (846) 255-69-99</p> 
<p><b>Электронная почта: </b> <span class="fa fa-envelope" style="color:#0c500c;"></span> <a href="mailto:samarapb@mail.ru" style="color:#0c500c;">samarapb@mail.ru</a></p>
<br/><br/>
    </div>
    <div class="col-md-6 col-sm-6">  
<div id="map"></div>


    </div> </div>
   


</div>



 <script src="http://api-maps.yandex.ru/2.1/?lang=ru_RU" type="text/javascript"></script>
<?php Yii::$app->view->registerJsFile('/assets/js/map.js',  ['depends' => 'yii\web\JqueryAsset']); ?>


