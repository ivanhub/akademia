<?php

/* @var $this yii\web\View */
/* @var $form yii\bootstrap\ActiveForm */
/* @var $model \frontend\models\ContactForm */

use yii\helpers\Html;
use yii\bootstrap\ActiveForm;
use yii\captcha\Captcha;
use phpnt\yandexMap\YandexMaps;

$this->title = 'Автомотошкола';
$this->params['breadcrumbs'][] = $this->title;
?>






<!-- <?= Html::encode($this->title) ?> -->

<div class="site-automotoschool siteblock">
   

 <div class="row">
<div class="col-sm-12 col-md-3">




<div class="menu">
  <div class="menuItem uno"><span><a style="color:;" href="/postupayushchim">Запись на обучение</a></span></div>
  <div class="menuItem dos"><span><a style="color:;" href="/students">Расписание занятий</a></span></div>
  <div class="menuItem tres"><span><a style="color:;" href="/raspisanie">Наши преимущества</a></span></div>
  <div class="menuItem cuatro"><span><a href="/dop-uslugi">Доп. услуги</a></span></div>
 </div>





<!-- <ul class="left2">
        <li><a href="/postupayushchim">Поступающим</a></li>
    <li><a href="/students">Учащимся</a></li>
    <li><a href="/raspisanie">Расписание</a></li>
    <li><a href="/dop-uslugi">Доп.&nbsp;услуги</a></li>
    
  
</ul> -->
</div>

<div class="col-md-9 col-sm-12">

<h1 class="text-center">Автомотошкола</h1>
<div class="text-center" >


 <div class="blockAB" style="margin-top:10px" >
 <div class="blockBB">
 <a href="/automotoschool/A"  title="Выберите категорию">
 <img class="" src="../../images/pics/a-a2.png" width="260px">
 </a></div>

 <div class="blockBB " style="margin-left:50px;">
 <a href="/automotoschool/B">
 <img  class="B1" src="../../images/pics/b-l.png" width="260px" title="Выберите категорию">
    </a>
</div>
 </div>

 <!-- <div class="blockAB" style="margin-top:10px" >
 <div class="blockTT">
 <a href="/automotoschool/A"  title="Выберите категорию">
 <img class="" src="../../images/pics/aaa3333.png" width="260px">
 </a></div>
 
 <div class="blockTT " style="margin-left:50px;">
 <a href="/automotoschool/B">
 <img  class="B1" src="../../images/pics/bbb14.png" width="260px" title="Выберите категорию">
    </a>
 </div>
 </div>
 
 <div class="blockAB" style="margin-top:10px" >
 <div class="blockAA">
 <a href="/automotoschool/A"  title="Выберите категорию">
 <img class="" src="../../images/pics/aaa3333.png" width="260px">
 </a></div>
 
 <div class="blockAA " style="margin-left:50px;">
 <a href="/automotoschool/B">
 <img  class="B1" src="../../images/pics/bb333.png" width="260px" title="Выберите категорию">
    </a>
 </div>
 </div> -->



 </div>


 <!-- <section class="automotoschool">
 
 <h2 class="text-center">Наши основные преимущества</h2>
 <p class="adv">•   Современные учебные транспортные средства</p>
 <p>Парк наших транспортных средств включает в себя достаточное количество современных автомобилей, мотоциклов для обучения вождению. Срок их эксплуатации не превышает 4-х лет, поэтому техническое состояние транспортных средств находится на очень достойном уровне.</p>
 <p>Транспортные средства – с механической трансмиссией (МККП) оборудованы дополнительными педалями сцепления и тормоза, зеркалом заднего вида. На учебные автомобили установлен аппаратно-программный комплекс аудио и видеонаблюдения на базе видеорегистратора, необходимые для сдачи экзамена на получение водительского удостоверения.</p>
 <p class="adv">•   Собственный автодром</p>
 <p>Автошкола Академия имеет свою собственную, не арендованную, оборудованную учебную площадку. Практические занятия на автодроме проходят по индивидуальному графику с отработкой всех необходимых элементов. На асфальто-бетонном покрытии нанесена разметка, в наличии достаточное количество разметочного оборудования (конуса, вешки) для оборудования зон упражнения. Площадь автодрома позволяет обеспечить комфорт и безопасность на практических занятиях и круглогодичное функционирование. Площадка освещается в темное время суток.</p>
 <p class="adv">•   Компьютеризированные учебные классы</p>
 <p>Для проведения теоретических занятий автомотошкола располагает комфортными компьютерными и лекционными классами. Классы оснащены всеми наглядными учебно-методическими материалами, плакатами, пособиями, необходимой литературой. АНО ДПО «Академия» имеет в собственности всю мебель и необходимое оборудование, компьютеры, оргтехнику, специальное оборудование, материалы для проведения лекционных и практических занятий. Современная оргтехника позволяет демонстрировать видео-уроки, учебные презентации. На всех персональных компьютерах подключен Интернет, работает бесплатный Wi-Fi. Во всех классах установлены кондиционеры, обеспечивающие комфорт в жаркое время года. </p>
 <p class="adv">•   Тренажер</p>
 <p>Занятия на автотренажере в нашей автошколе являются обязательными в программе обучения. Обучить курсантов автошкол базовым навыкам управления автомобилем с механической КПП позволяет виртуальное вождение автомобиля на тренажере. </p>
 <p>Преимущества виртуальных автотренажеров:</p>
 <ul class="preimul"><li>•  Объемный окружающий мир: дорога, автомобили, здания …</li>
 <li>•  Возможность регулировки интенсивности движения.</li>
 <li>•  Первоначальные навыки посадки за руль, пользование органами управления, пуск двигателя, начало движения, переключение передач.</li>
 <li>•  Подсказчик, сообщающий о любой ошибке.</li>
 </ul>
 <p class="adv">•   Медицинская помощь</p>  
 <p>В учебном центре организована первая медицинская помощь.  Медицинский кабинет, осуществляется текущий контроль 
 за состоянием здоровья обучающихся, проведение санитарно-гигиенических, профилактических и оздоровительных мероприятий
 , пропаганда здорового образа жизни, оказание первичной доврачебной медико-санитарной помощи обучающимся.</p>
 <p>Весь водительский состав проходит ежедневный медицинский осмотр и допуск перед выездом.</p>
 
 
 <br/><br/>
 <h5 class="text-center">Категория А, А 1</h5>
 <p style="font-weight:600;font-size:22px">Обучение вождению на мотоцикле</p>
 <p>Хотите освоить искусство безопасного и уверенного вождения мотоцикла с нуля и до хорошего городского уровня? Школа предлагает как групповые занятия с организованной сдачей экзамена категории А, так и частные индивидуальные уроки вождения мотоцикла с мотоинструктором. Мы не просто научим управлять мотоциклом. Наши инструкторы и педагоги дадут консультации по приобретению, эксплуатации, хранению мотоцикла, а так же, по выбору запчастей и экипировки.</p>
 <p>Автошкола АНО ДПО «Академия» ведет подготовку водителей мотоциклов категории А и подкатегории А1.</p>
 
 
 <table class="table table-bordered table-striped table-condensed table-responsive">
    <thead>
        <tr>
            <th>
 Категория            </th>
            <th>
 Расшифровка            </th>
            <th>
 Обучение            </th>
            <th>
 Открытие 
 категории
            </th>
            <th>
 Марка мотоцикла            </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
 А            </td>
            <td>
 Тяжелые мотоциклы
 (объем двигателя 
 свыше 125 куб.см.)
            </td>
            <td>
 С 16 лет            </td>
            <td>
 С 18 лет            </td>
            <td>
 KAWASAKI
 ER650E,
 <br/>
 RACER<br/>
 RC250-C5B.
            </td>
        </tr>
        <tr>
            <td>
 А1            </td>
            <td>
 Легкие мотоциклы
 (объем двигателя
 от 50 до 125 куб. см.)
            </td>
            <td>
 С 16 лет            </td>
            <td>
 С 16 лет            </td>
            <td>
 YAMAHA
 YBR125 ESD
            </td>
        </tr>
        <tr>
            <td>
 М            </td>
            <td>
 Мопеды,
 мотики, 
 скутеры
            </td>
            <td>
 С 14 лет            </td>
            <td>
 С 16 лет,<br/>
 Открывается 
 автоматически при
 получении водительского удостоверения
            </td>
            <td>
 -            </td>
        </tr>
 
    </tbody>
 </table>
 
 
 
 
 
 <p style="font-weight:600;font-size:20px">Теория</p>
 <p>Теоретический курс состоит из правил дорожного движения и основ устройства мотоцикла. Его можно посещать в составе любой из групп, проходящих обучение на категорию «В», так как экзаменационные вопросы одинаковы в том и другом случае. Лица, имеющие водительское удостоверение с любой открытой категорией проходят теоретические занятия по желанию.</p>
 <br/>
 <p style="font-weight:600;font-size:20px">Вождение</p>
 <p>Учебная программа курса рассчитана на <b>18 часов</b> или 6 занятий. Занятия проводят опытные инструкторы на собственном автодроме, с отработкой всех упражнений, необходимых для успешной сдачи экзамена и уверенного управления мототехникой. Все упражнения на автодроме соответствуют новому регламенту сдачи экзамена.</p>
 <p><b>Срок обучение – 1 месяц.</b></p>
 <br/>
 <p style="font-weight:600;font-size:20px">Акция</p>
 <p>При записи в автошколу на категории "А" и "В" одновременно – скидка 5 000 рублей.</p>
 
 <br/>
 <h5 class="text-center"> Услуги, предоставляемые бесплатно</h5>  <br/>
 
 <ul class=" preimul2">
 <li>•  Учебная литература в подарок: экзаменационные билеты. правила дорожного движения. учебник по вождению автомобиля. памятка по упражнениям на площадке;</li>
 <li>•  подготовка пакета документов для сдачи экзамена в ГИБДД;</li>
 <li>•  организация и предоставление учебных автомобилей на первичные экзамены (выпускной и ГИБДД);</li>
 <li>•  консультация с преподавателем теоретического курса по пропущенным занятиям;</li>
 <li>•  родниковая вода в кулере;</li>
 <li>•  улыбка и доброжелательное отношение со стороны администрации.</li>
 </ul>
 
 
 </section> -->
<br/><br/>

</div>



</div>
<div class="row preimbox">
<h2 class="text-center">Наши преимущества</h2>
<br/>

<div class="col-md-4 col-sm-6 col-xs-12">
<div class="style1">
<div class="col-sm-3"><span class="vc_icon_element-icon fa fa-road fa-3x"></span></div>
<div class="col-sm-9"><p class="advpr">Собственный Автодром</p>  </div>
</div>

<div class="style1 iskl"><div class="col-sm-3"><span class="fa fa-stack fa-3x" style="margin-left:-25px">
    <i class="fa fa-shield fa-stack-2x" ></i>
    <i class="fa fa-square fa-stack-bottom-right fa-inverse"></i>
    <i class="fa fa-check-square fa-stack-bottom-right"></i>
</span></div>
<div class="col-sm-9"><p class="advpr">Обучение без ОБМАНА - Все часы вождения!!!</p></div></div>
<div class="style1"><div class="col-sm-3"><span class="vc_icon_element-icon fa fa-rub  fa-3x"></span></div>
<div class="col-sm-9"> <p class="advpr">Рассрочка платежа на весь период обучения.</p></div></div>

</div>



<div class="col-md-4 col-sm-6 col-xs-12">
<div class="style1"><div class="col-sm-3"><span class="vc_icon_element-icon fa fa-leanpub fa-3x"></span></div>
<div class="col-sm-9"> <p class="advpr">Тренажер для первоначальных навыков</p></div></div>
<div class="style1"><div class="col-sm-3"><span class="vc_icon_element-icon fa fa-laptop fa-3x"></span></div>
<div class="col-sm-9"><p class="advpr">Современные оборудованные классы</p></div></div>
<div class="style1"><div class="col-sm-3"><span class="vc_icon_element-icon fa fa-calendar fa-3x"></span></div>
<div class="col-sm-9"> <p class="advpr">Вечерние группы и группы выходного дня</p></div></div>
</div>
   
<div class="col-md-4 col-md-offset-0 col-sm-offset-3 col-sm-6 col-xs-12">
<div class="style1"><div class="col-sm-3"><span class="vc_icon_element-icon fa fa-clock-o fa-3x"></span></div>
<div class="col-sm-9"><p class="advpr">Парк новых автомобилей и мотоциклов </p></div></div>
<div class="style1"><div class="col-sm-3"><span class="vc_icon_element-icon fa fa-medkit fa-3x"></span></div>
<div class="col-sm-9"> <p class="advpr">Бесплатная литература</p></div></div>
<div class="style1"><div class="col-sm-3"><span class="vc_icon_element-icon fa fa-medkit fa-3x"></span></div>
<div class="col-sm-9"> <p class="advpr">Медицинская комиссия</p></div></div>
<div class="style1"><div class="col-sm-3"><span class="vc_icon_element-icon fa fa-graduation-cap fa-3x"></span></div>
<div class="col-sm-9"> <p class="advpr">Сопровождение на экзамене</p></div></div>


</div>

</div><br/><br/>
<br/>










<div class="row preimbox">
<h2 class="text-center">Наши преимущества</h2>
<br/>

<div class="style2">
<div class="col-sm-3 text-center"><span class="vc_icon_element-icon fa fa-road fa-3x"></span></div>
<div class="col-sm-9"><p class="advpr">Собственный Автодром</p>  </div>
</div>

<div class="style2 iskl"><div class="col-sm-3 text-center"><span class="fa fa-stack fa-3x" style="margin-left:-25px">
    <i class="fa fa-shield fa-stack-2x" ></i>
    <i class="fa fa-square fa-stack-bottom-right fa-inverse"></i>
    <i class="fa fa-check-square fa-stack-bottom-right"></i>
</span></div>
<div class="col-sm-9"><p class="advpr">Обучение без ОБМАНА - Все часы вождения!!!</p></div></div>
<div class="style2"><div class="col-sm-3 text-center"><span class="vc_icon_element-icon fa fa-laptop fa-3x"></span></div>
<div class="col-sm-9"><p class="advpr">Современные оборудованные классы</p></div></div>



<div class="style2"><div class="col-sm-3 text-center"><span class="vc_icon_element-icon fa fa-leanpub fa-3x"></span></div>
<div class="col-sm-9"> <p class="advpr">Бесплатная литература</p></div></div>
<div class="style2"><div class="col-sm-3 text-center"><span class="vc_icon_element-icon fa fa-rub  fa-3x"></span></div>
<div class="col-sm-9"> <p class="advpr">Рассрочка платежа на весь период обучения.</p></div></div>
<div class="style2"><div class="col-sm-3 text-center"><span class="vc_icon_element-icon fa fa-calendar fa-3x"></span></div>
<div class="col-sm-9"> <p class="advpr">Вечерние группы и группы выходного дня</p></div></div>
   
<div class="style2"><div class="col-sm-3 text-center"><span class="vc_icon_element-icon fa fa-clock-o fa-3x"></span></div>
<div class="col-sm-9"><p class="advpr">Индивидуальный график вождения</p></div></div>
<div class="style2"><div class="col-sm-3 text-center"><span class="vc_icon_element-icon fa fa-graduation-cap fa-3x"></span></div>
<div class="col-sm-9"> <p class="advpr">Сопровождение на экзамене</p></div></div>
<div class="style2"><div class="col-sm-3 text-center"><span class="vc_icon_element-icon fa fa-medkit fa-3x"></span></div>
<div class="col-sm-9"> <p class="advpr">Медицинская комиссия</p></div></div>

</div>














</div>
<br/><br/><br/>