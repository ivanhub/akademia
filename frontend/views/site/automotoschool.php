<?php

/* @var $this yii\web\View */
/* @var $form yii\bootstrap\ActiveForm */
/* @var $model \frontend\models\ContactForm */

use yii\helpers\Html;
use yii\bootstrap\ActiveForm;
//use yii\captcha\Captcha;
//use phpnt\yandexMap\YandexMaps;

$title = 'Автомотошкола';
$this->title = title($title);


$this->registerMetaTag([
    'name' => 'description',
    'content' => 'Обучение вождению на автомобиле и мотоцикле (категории: А, В). Собственный автодром, опытные квалифицированные инструктора, экстремальное и защитное вождение. Доступные цены. Беспроцентная рассрочка! Одна из лучших автомотошкол в Самаре.',
]);

$this->registerMetaTag([
    'name' => 'keywords',
    'content' => 'центральная автошкола Самары, школа вождения, автошкола, мотошкола, услуги автошколы, Обучение вождению, получить права, росавтоакадемия, рос автоакадемия, росавто академия, мотоцикл, права на автомобиль, права, мото, лучшая автошкола Самары, главная автошкола Самары, категория А,  категория В, обучение на права, сдать на права, курсы водителей, автомотошкола',
]);



$this->params['breadcrumbs'][] = $title;


?>




<!-- <ul class="left2">
        <li><a href="/postupayushchim">Поступающим</a></li>
    <li><a href="/students">Учащимся</a></li>
    <li><a href="/raspisanie">Расписание</a></li>
    <li><a href="/dop-uslugi">Доп.&nbsp;услуги</a></li>
    
  
</ul> -->
<div class="site-automotoschool siteblock">
   

<div class="row">

<h1 class="text-center"><?= Html::encode($title) ?></h1>
<br/>

<div class="text-center">


<div class="col-xs-12 col-sm-4">
 <div class="blockBB AA1">
 <a href="/driving-school/A" title="Выберите категорию">
 <img class="img-responsive" src="../../images/pics/AA.png" style="width:100%"  title="Выберите категорию" alt="Категория А. Мотошкола Самара">
   </a></div></div>

<div class="col-xs-12 col-sm-4">
 <div class="blockBB BB1">
 <a href="/driving-school/B">
 <img  style="width:100%" class="B1 img-responsive" src="../../images/pics/b-l.png"  title="Выберите категорию" alt="Категория В. Автошкола в Самаре">
 </a>
</div></div>
<div class="col-xs-12 col-sm-4">
 <div class="blockBB CC1">
 <a href="/additional-services">
 <img  style="width:100%" class="img-responsive" src="../../images/pics/CC.png" title="Дополнительные услуги"  alt="Дополнительные услуги. Автошкола">
 </a>
</div></div>

</div>
</div>
<div class="hidden-xs"><br/><br/></div>

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




 <!-- <section class="automotoschool">
 
 <h2 class="text-center">Наши основные преимущества</h2>
 <p class="adv">•   Современные учебные транспортные средства</p>
 <p>Парк наших транспортных средств включает в себя достаточное количество современных автомобилей, мотоциклов для обучения вождению. Срок их эксплуатации не превышает 4-х лет, поэтому техническое состояние транспортных средств находится на очень достойном уровне.</p>
 <p>Транспортные средства – с механической трансмиссией (МККП) оборудованы дополнительными педалями сцепления и тормоза, зеркалом заднего вида. На учебные автомобили установлен аппаратно-программный комплекс аудио и видеонаблюдения на базе видеорегистратора, необходимые для сдачи экзамена на получение водительского удостоверения.</p>
 <p class="adv">•   Собственный автодром</p>
 <p>Автошкола Академия имеет свою собственную, не арендованную, оборудованную учебную площадку.
  Практические занятия на автодроме проходят по индивидуальному графику с отработкой всех необходимых элементов.
   На асфальто-бетонном покрытии нанесена разметка, в наличии достаточное количество разметочного оборудования
    (конуса, вешки) для оборудования зон упражнения. Площадь автодрома позволяет обеспечить комфорт и безопасность 
    на практических занятиях и круглогодичное функционирование. Площадка освещается в темное время суток.</p>
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


<!-- 
<div class="row preimbox">
<h2 class="text-center">Почему нас выбирают:</h2>
<br/>

<div class="col-md-4 col-sm-6 col-xs-12">
<div class="style1">
<div class="col-sm-3"><span class="vc_icon_element-icon fa fa-road fa-3x"></span></div>
<div class="col-sm-9"><p class="advpr">Собственный Автодром</p>  

</div>
</div>

<div class="style1"><div class="col-sm-3"><span class="vc_icon_element-icon fa fa-handshake-o fa-3x"></span></div>
<div class="col-sm-9"><p class="advpr">Обучение без ОБМАНА - Все часы вождения!!!</p></div></div>

</div>

<div class="col-md-4 col-sm-6 col-xs-12">

<div class="style1"><div class="col-sm-3"><span class="vc_icon_element-icon fa fa-rub  fa-3x"></span></div>
<div class="col-sm-9"> <p class="advpr">Рассрочка платежа на весь период обучения.</p></div></div>
<div class="style1"><div class="col-sm-3"><span class="fa-stack">
  <i class="fa fa-desktop fa-stack-2x"></i>
  <i class="fa fa-car fa-stack-1x" style="top:auto;bottom:17%;%;left:-1%"></i>
  <i class="fa fa-circle fa-badge-bg fa-inverse2 fa-outline-inverse" style="top:45%;left:55%"></i>
  <i class="fa fa-user fa-badge"style="left:55%"></i>
</span></div>
<div class="col-sm-9"> <p class="advpr">Тренажер для первоначальных навыков</p></div></div>
</div>


<div class="col-md-4 col-sm-6 col-xs-12">

<div class="style1"><div class="col-sm-3"><span class="vc_icon_element-icon fa fa-laptop fa-3x"></span></div>
<div class="col-sm-9"><p class="advpr">Современные оборудованные классы</p></div></div>
<div class="style1"><div class="col-sm-3"><span class="vc_icon_element-icon fa fa-calendar fa-3x"></span></div>
<div class="col-sm-9"> <p class="advpr">Вечерние группы и группы выходного дня</p></div></div>
</div>
   

<div class="col-md-4 col-sm-6 col-xs-12">
    <div class="style1"><div class="col-sm-3"><span class="vc_icon_element-icon fa fa-car fa-3x"></span>
<span class="fa-stack-2x">
<i class="fa fa-car" style="top:auto;left:-1%"></i>
<i class="fa fa-motorcycle"></i>
</span></div>
<div class="col-sm-9"><p class="advpr">Парк новых автомобилей и мотоциклов </p></div></div>
    </div>
    <div class="col-md-4 col-sm-6 col-xs-12">
<div class="style1"><div class="col-sm-3"><span class="vc_icon_element-icon fa fa-leanpub fa-3x"></span></div>
<div class="col-sm-9"> <p class="advpr">Бесплатная литература</p></div></div>
    </div>

        <div class="col-sm-offset-3 col-md-offset-0 col-md-4 col-sm-6 col-xs-12">
        <div class="style1"><div class="col-sm-3"><span class="vc_icon_element-icon fa fa-graduation-cap fa-3x"></span></div>
<div class="col-sm-9"> <p class="advpr">Сопровождение на экзамене</p></div></div>
        </div>

</div>

<br/><br/>
<br/>
 -->
<div class="mainContent">

<div class="row preimbox">
<h2 class="text-center">Почему нас выбирают:</h2>
<br/>

<div class="col-md-4 col-sm-6 col-xs-12">
 <div class="box bx1">
<div class="style5" id="style5">
 <div class="col-xs-3"><span class="inside vc_icon_element-icon fa fa-road fa-3x"></span></div>
<div class="col-xs-9"><div class="inside1 advpr">Собственный Автодром</div></div>
<new class="x1"><div class="showing1"><p class="xi-title">Собственный Автодром</p>
  <p class="xi-text">Автошкола Академия имеет свой собственный учебный автодром.
  Площадь автодрома позволяет обеспечить комфорт и безопасность на практических занятиях и круглогодичное функционирование.
  </p></div> </new>  
</div>
</div>
 <div class="box bx4">

<div class="style5">
<div class="col-xs-3"><span class="inside vc_icon_element-icon fa fa-handshake-o fa-3x"></span></div>
<div class="col-xs-9"><div class="inside1 advpr2">Обучение без ОБМАНА - Все часы вождения!!!</div></div>
<new class="x1"><div class="showing1"><p class="xi-title">Обучение без ОБМАНА - Все часы вождения!!!</p>
  <p class="xi-text">Мы заинтересованы в качественном обучении студентов и успешной сдаче экзаменов в ГИБДД. От этого зависит наша репутация. 
В нашем учебном центре прозрачная система обучения. Мы всегда открыты для вас. Задача центра НАУЧИТЬ вас водить,
потому что от этого зависит ваша жизнь.</p></div> </new>  
</div></div>
</div>

<div class="col-md-4 col-sm-6 col-xs-12">

 <div class="box bx2">
<div class="style5 cntr">
<div class="col-xs-3"><span class="inside vc_icon_element-icon fa fa-rub  fa-3x"></span></div>
<div class="col-xs-9"> <div class="inside1 advpr2">Рассрочка платежа на весь период обучения.</div></div>
<new class="x1"><div class="showing1"><p class="xi-title">Рассрочка платежа на весь период обучения.</p>
  <p class="xi-text">Первоначальный взнос от 5 000 р. Остальную сумму Вы оплачиваете в период всего обучения.</p></div> </new> 
</div>
</div>

 <div class="box bx5">
<div class="style5 cntr">
<div class="col-xs-3"><span class="inside fa-stack">
  <i class="fa fa-desktop fa-stack-2x"></i>
  <i class="fa fa-car fa-stack-1x" style="top:auto;bottom:17%;%;left:-1%"></i>
  <i class="fa fa-circle fa-badge-bg fa-inverse2 fa-outline-inverse" style="top:45%;left:55%"></i>
  <i class="fa fa-user fa-badge"style="left:55%"></i>
</span></div>
<div class="col-xs-9"> <div class="inside1 advpr2" >Тренажер для первоначальных навыков</div></div>
<new class="x1"><div class="showing1"><p class="xi-title">Тренажер для первоначальных навыков</p>
  <p class="xi-text">Занятия на автотренажере в нашей автошколе являются обязательными по программе обучения. Обучить курсантов автошкол 
базовым навыкам управления автомобилей с механической КПП позволяет виртуальное вождение автомобиля на тренажере.</p></div> </new> 
  </div>
</div>

</div>


   <div class="clearfix visible-sm"></div>

<div class="col-md-4 col-sm-6 col-xs-12">

 <div class="box bx3">
<div class="style5 lst">
<div class="col-xs-3"><span class="inside vc_icon_element-icon fa fa-laptop fa-3x"></span></div>
<div class="col-xs-9"><div class="inside1 advpr2">Современные оборудованные классы</div></div>
<new class="x1"><div class="showing1"><p class="xi-title">Современные оборудованные классы</p>
  <p class="xi-text">Учебные классы оборудованы всем необходимым инвентарем,  тематическими плакатами, компьютерами и тренажерами для 
первоначальных навыков вождения. У нас большая видеотека с обучающими роликами. Доверившись нам, вы 
получите высококлассное обучение в этой сфере, что позволит Вам успешно сдать экзамены на права.</p></div> </new> </div>
</div>

<div class="box bx6">
<div class="style5 lst">
<div class="col-xs-3"><span class="inside vc_icon_element-icon fa fa-medkit fa-3x"></span></div>
<div class="col-xs-9"> <div class="inside1 advpr2">Помощь в прохождении медицинской комиссии</div></div>
<new class="x1"><div class="showing1"><p class="xi-title">Помощь в прохождении медицинской комиссии</p>
  <p class="xi-text">
  Мы поможем вам пройти медицинскую комиссию в самые короткие сроки и без очередей.<br/> Для удобства наших учеников мы организовываем медицинскую комиссию в Автошколе! * ООО «АсокмаМед» лицензия № ЛО-63-01-002110 от 31.07.2013 г.</p>
  </div> </new> </div>
</div>


</div>
   

   

<div class="col-md-4 col-sm-6 col-xs-12">

<div class="box bx7">
<div class="style5">
<div class="col-xs-3"><span class="inside vc_icon_element-icon fa fa-car fa-3x"></span>
</div>
<div class="col-xs-9"><div class="inside1 advpr2">Парк новых автомобилей и мотоциклов </div></div>
<new class="x1"><div class="showing1"><p class="xi-title">Парк новых автомобилей и мотоциклов </p>
  <p class="xi-text">Срок их эксплуатации не превышает 4-х лет, поэтому техническое состояние транспортных средств находится на
очень достойном уровне. Все машины оснащены видео- и аудиосистемами регистрации.</p></div> </new> 
  </div>
</div>

    </div>
    <div class="col-md-4 col-sm-6 col-xs-12">

    <div class="box bx8">
<div class="style5 cntr">
<div class="col-xs-3"><span class="inside vc_icon_element-icon fa fa-leanpub fa-3x"></span></div>
<div class="col-xs-9"> <div class="inside1 advpr">Бесплатная литература</div></div>
<new class="x1"><div class="showing1"><p class="xi-title">Бесплатная литература</p>
  <p class="xi-text">Всю необходимую литературу: экзаменационные билеты, правила дорожного движения, методички Вы получите на первом 
теоретическом занятии.</p></div> </new> 
  </div>
  </div>


    </div>

        <div class="col-sm-offset-3 col-md-offset-0 col-md-4 col-sm-6 col-xs-12">

<div class="box bx9">
        <div class="style5 lst">
<!--             <div class="x99"></div>
 --><div class="col-xs-3"><span class="inside vc_icon_element-icon fa fa-graduation-cap fa-3x"></span></div>
<div class="col-xs-9"> <div class="inside1 advpr2 advprm">Сопровождение на экзамене</div></div>
<new class="x1"><div class="showing1"><p class="xi-title">Сопровождение на экзамене</p>
  <p class="xi-text">Мы подготовим пакет документов для сдачи экзамена, предоставим учебные автомобили и мотоциклы на экзамены в ГИБДД. Представитель автошколы будет сопровождать Вас на протяжении всего экзамена.</p></div> </new> </div>
        </div>


        </div>
</div>    </div>

</div>

<br/><br/>

<?php $user_agent = $_SERVER['HTTP_USER_AGENT'];
if (stripos( $user_agent, 'Chrome') !== false)
{
    echo "<div class=''>";
}

elseif (stripos( $user_agent, 'Safari') !== false)
{
   echo "<div class='forsafari'>";
} ?>


<h5 style="" class="text-center hideme h5style" data-ros="flipInX"   data-options="infinite:false;animationClass:animated;duration: 2500;callback:;"> Услуги, которые  предоставляем бесплатно</h5>  <br/>

 <ul class=" preimul2 lr10 gal text-justify">
 <li style="animation-duration: 1s; animation-delay: 0;"> Подготовка пакета документов для сдачи экзамена в ГИБДД.</li>
 <li style="animation-duration: 1s; animation-delay: .4s;"> Организация и предоставление учебных транспортных средств на первичные экзамены (выпускной и ГИБДД).</li>
 <li style="animation-duration: 1s; animation-delay: .7s;"> Учебная литература в подарок: экзаменационные билеты, правила дорожного движения, 
 методичка по вождению, памятка по упражнениям на площадке.</li>
 <li style="animation-duration: 1s; animation-delay: 1s;"> Консультация с преподавателем теоретического курса по пропущенным занятиям.</li>
 <li style="animation-duration: 1s; animation-delay: 1.3s;"> Улыбка и доброжелательное отношение со стороны администрации.</li>
 </ul>

<br/><br/> </div>



<!-- next x8
next inside
next showing
 -->



<?php 
Yii::$app->view->registerJsFile('/assets/js/jquery.ros.js',  ['depends' => 'yii\web\JqueryAsset']);

$this->registerJs(<<<JS

var \$animation_elements = $('.gal li');
var \$window = $(window);

function check_if_in_view() {
  var window_height = \$window.height();
  var window_top_position = \$window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);
  var window_bottom2_position = (window_top_position + window_height - 215);

    var \$element = $('.mainContent');
    var element_height = \$element.outerHeight();
    var element_top_position = \$element.offset().top;
    var element_bottom_position = (element_top_position + element_height);


   if ((element_bottom_position >= window_top_position) &&
      (element_top_position <= window_bottom2_position)) {
document.body.classList.add('begin');
    } else {
    }

  $.each(\$animation_elements, function() {

 var \$element = $(this);
    var element_height = \$element.outerHeight();
    var element_top_position = \$element.offset().top;
    var element_bottom_position = (element_top_position + element_height +30);

    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) &&
      (element_top_position <= window_bottom_position)) {
      \$element.addClass('animated fadeInLeft');
    } else {
      \$element.removeClass('in-view');
    }
  });
}

\$window.on('scroll resize', check_if_in_view);
\$window.trigger('scroll');




window.addEventListener("load", function() {

ros.init();
});


JS
, yii\web\View::POS_READY); ?>



 