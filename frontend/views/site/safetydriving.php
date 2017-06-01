<?php

/* @var $this yii\web\View */
/* @var $form yii\bootstrap\ActiveForm */
/* @var $model \frontend\models\ContactForm */

use yii\helpers\Html;
//use yii\bootstrap\ActiveForm;
//use yii\captcha\Captcha;

use branchonline\lightbox\Lightbox;

$title = 'Защитное вождение';
$this->title = title($title);

$this->registerMetaTag([
    'name' => 'description',
    'content' => 'Защитное и контраварийное вождение в Автомотошколе "Росавтоакадемия". Обучение навыкам предотвращения аварийных ситуаций и ДТП. Лучшая автошкола Самары. Звоните!',
]);
$this->registerMetaTag([
    'name' => 'keywords',
    'content' => 'автошкола, защитное вождение, стиль вождения, контраварийное вождение, мотошкола, росавтоакадемия, обучение, предотвращение аварийных ситуаций, центральная автошкола Самары, обучение вождению, услуги автошколы, школа вождения, права, рос автоакадемия, права на автомобиль, главная автошкола Самары'
    ]);




$this->params['breadcrumbs'][] = $title;
?>






<!-- <?= Html::encode($this->title) ?> --> 
<div class="site-distance  siteblock">
   

 <div class="rowww">


<section class="safetydriving">
<h1 class="text-center"><?= Html::encode($title) ?></h1>
 <br/>
  <p>Подготовка по программе «Защитное вождение» формирует у водителей особое мышление, направленное на предотвращение аварийных и предаварийных ситуаций путем системного наблюдения и своевременного обнаружения опасностей на дороге, на прилегающих территориях и в самом автомобиле.</p>

  <h4 class='text-center' style="margin-top:20px">Цель программы</h4>

 <p>Целью программы профессионального обучения (повышение квалификации) является обучение слушателей приемам защитного вождения, т.е. такому способу управления автомобилем, при котором водитель независимо от внешних факторов, состояния дороги, других участников движения, погодных условий и так далее, не допускает попадания в дорожно-транспортные происшествия (ДТП). </p>

<h4 class='text-center' style="margin-top:30px">Задачи обучения</h4>


 <ul class=" preimul2  gal2">
  <li> Мотивировать водителей к применению защитного стиля поведения.</li>
 <li> Показать возможные потери в случае ДТП и те преимущества, которые дает защитное вождение.</li>
 <li> Усовершенствовать навыки определения дорожно-транспортных опасностей и способы защиты в этих ситуациях.</li>
 <li> Улучшить способности водителей к прогнозированию поведения окружающих участников дорожного движения.</li>
 <li> Углубить знания ПДД и ознакомить водителей с их актуальным состоянием.</li>
 <li> Снизить аварийные риски при управлении транспортными средствами.</li>
 </ul>


<h4 class='text-center' style="margin-top:0">Форма обучения</h4>
 <p>Очная, с применением электронного обучения и дистанционных образовательных технологий.</p>
 <p>Программой предусмотрены теоретические и практические занятия. На теоретических занятиях рассматриваются различные материалы, разбираются многие дорожные ситуации. </p>
 <p>Практические занятия предусматривают вождение транспортного средства по дорогам общего пользования с комментариями мастера производственного обучения (инструктора), содержащими конкретные упражнения для дальнейшего совершенствования приемов защитного вождения. В ходе практического занятия закрепляются знания, полученные на теоретических занятиях, проверяется усвоение материала образовательной программы, корректируются привычные ошибки водителей. </p>

<h4 class='text-center' style="margin-top:30px">Срок обучения</h4>
<p>Срок проведения обучения: 24 часа</p>
<p>Может быть изменен в соответствии с индивидуальным учебным планом.</p>
<p>Режим занятий: не более 8 часов в день.</p>
<p>График обучения, даты, время согласовываются с руководителями структурных        подразделений.</p>

<p>По окончанию курса выдается свидетельство. </p>
<center>
<?php echo  Lightbox::widget([
    'files' => [
        [
            'thumb' => '../images/thmb/svidetelstvo-th.jpg',
            'original' => '../images/svidetelstvo.jpg',
            'title' => 'Защитное и зимнее вождение. Образец выдаваемого свидетельства.',
        ],
        
    ]
]); ?>
</center>
  </section>


</div>
</div>


