<?php

/* @var $this yii\web\View */
/* @var $form yii\bootstrap\ActiveForm */
/* @var $model \frontend\models\ContactForm */

use yii\helpers\Html;
use yii\bootstrap\ActiveForm;
use yii\captcha\Captcha;
use phpnt\yandexMap\YandexMaps;
use yii\widgets\Breadcrumbs;


$this->title = 'Расписание';
$this->params['breadcrumbs'][] = [
                                   /* 'template' => "<li><b>{link}</b></li>\n", */
                                    'label' => 'Автомотошкола', 
                                    'url' => ['/automotoschool'] 
                                 ];
$this->params['breadcrumbs'][] = $this->title;
?>






<!-- <?= Html::encode($this->title) ?> --> <br/>    <br/>
<div class="site-raspisanie l-menu container">
   

 <div class="row">
<div class="col-sm-12 col-md-3">

<ul class="left">
    <li><a href="#">Расписание &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</a></li>
    <li><a href="/dop-uslugi">Доп.&nbsp;услуги &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </a></li>
    <li><a href="/students">Учащимся &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</a></li>
    <li><a href="/postupayushchim">Поступающим &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; </a></li>
    
  
</ul>
</div>

<div class="col-md-9 col-sm-12">
<section class="raspisanie">
<h1 class="text-center">Расписание</h1>
 
 <p>Обучение в автошколе проводиться по программе профессиональной подготовки водителей транспортных средств категории «В», «А» и подкатегории «А1». Учебный план, календарный учебный график и программы подготовки согласованы в установленном законодательстве порядке.</p>
 <h2 class="text-center">Подготовка ведется по следующим дисциплинам:</h2>
 <p>•   "Основы законодательства в сфере дорожного движения";</p>
 <p>•   "Психофизиологические основы деятельности водителя";</p>
 <p>•   "Основы управления транспортными средствами";</p>
 <p>•   "Первая помощь при дорожно-транспортном происшествии";</p>
<p>•    "Устройство и техническое обслуживание транспортных средств категории "B" как объектов управления";</p>
<p>•    "Основы управления транспортными средствами категории "B";</p>
<p>•    "Вождение транспортных средств категории "B" (с механической трансмиссией)";</p>
<p>•    "Организация и выполнение грузовых перевозок автомобильным транспортом";</p>
<p>•    "Организация и выполнение пассажирских перевозок автомобильным транспортом".</p>


<h6 class="text-center">Расписание занятий учебных групп:</h6>
<p><b>Категория В</b>(Продолжительность обучения составляет 3 месяца).</p>

 <ul class="preimul"><li>•  09.01.17 – 31.03.17</li>
 <li>•  01.04.17 – 30.06.17</li>
 <li>•  01.07.17 – 30.09.17</li>
 <li>•  01.10.17 – 31.12.17</li>
 </ul>
<p><b>Категория A</b>(Продолжительность обучения составляет 1 месяц).</p>

 <ul class="preimul"><li>•  01.05.17 – 31.05.17</li>
 <li>•  01.06.17 – 30.06.17</li>
 <li>•  01.07.17 – 31.07.17</li>
 <li>•  01.08.17 – 31.08.17</li>
 </ul>
 

 </section>


</div>
</div>

</div>

