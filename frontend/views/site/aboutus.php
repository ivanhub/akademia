<?php

/* @var $this yii\web\View */
/* @var $form yii\bootstrap\ActiveForm */
/* @var $model \frontend\models\ContactForm */

use yii\helpers\Html;
//use yii\bootstrap\ActiveForm;
//use yii\captcha\Captcha;
//use yii\bootstrap\Modal;
//use yii\bootstrap\Button;
//use \yii\widgets\MaskedInput;


use branchonline\lightbox\Lightbox;

$title = 'Сведения об образовательной организации';
$this->title = title($title);


$this->registerMetaTag([
    'name' => 'description',
    'content' => 'Авто и мотошкола "Росавтоакадемия". Обучение вождению по всем категориям: Обучение судовождению, вождению на квадроцикле, снегоходе, тракторе, погрузчике, гидроцикле, катере и т.д. Лучшая автошкола Самары. Звоните!',
]);
$this->registerMetaTag([
    'name' => 'keywords',
    'content' => 'автошкола, мотошкола, росавтоакадемия, центральная автошкола Самары, о нас, об организации, сведения об организации, документы автошколы, лицензии автошколы, обучение вождению, услуги автошколы, школа вождения, права, рос автоакадемия, права на автомобиль, главная автошкола Самары'
    ]);


$this->params['breadcrumbs'][] = $title;
?>



<!--  Html::encode($this->title) -->

<div class="site-about-us siteblock">
   

 <div class="row-about">
<!--

['site/index'],
            'label' => 'Запись на обучение',
            'icon' => 'car' // This is a bootstrap icon name
        ],
        [
            'url' => ['site/about'],
            'label' => 'Расписание занятий',
            'icon' => 'clock-o' // This is a bootstrap icon name
        ],
         [
            'url' => ['site/about'],
            'label' => 'Наши преимущества',
            'icon' => 'star' // This is a bootstrap icon name
        ],
         [
            'url' => ['site/about'],
            'label' => 'Доп. услуги',
            'icon' => 'rocket' // This is a bootstrap icon name
        ],
    ],
]) ?> 

<?= leoshtika\bootstrap\NavSidebar::widget([
    'items' => [
        [
            'url' => ['site/index'],
            'label' => 'Основные сведения',
            'icon' => '' // This is a bootstrap icon name
        ],
        [
            'url' => ['site/about'],
            'label' => 'Структура и органы управления образовательной организацией',
            'icon' => '' // This is a bootstrap icon name
        ],
         [
            'url' => ['site/about'],
            'label' => 'Документы',
            'icon' => 'star' // This is a bootstrap icon name
        ],
         [
            'url' => ['site/about'],
            'label' => 'Образование',
            'icon' => 'rocket' // This is a bootstrap icon name
        ],
        [
            'url' => ['site/about'],
            'label' => 'Образовательные стандарты',
            'icon' => 'rocket' // This is a bootstrap icon name
        ],
        [
            'url' => ['site/about'],
            'label' => 'Руководство. Педагогический (научно-педагогический) состав',
            'icon' => 'rocket' // This is a bootstrap icon name
        ],
        [
            'url' => ['site/about'],
            'label' => 'Материально-техническое обеспечение и оснащенность образовательного процесса',
            'icon' => 'rocket' // This is a bootstrap icon name
        ],
        [
            'url' => ['site/about'],
            'label' => 'Стипендии и иные виды материальной поддержки',
            'icon' => 'rocket' // This is a bootstrap icon name
        ],
        [
            'url' => ['site/about'],
            'label' => 'Платные образовательные услуги',
            'icon' => 'rocket' // This is a bootstrap icon name
        ],
        [
            'url' => ['site/about'],
            'label' => 'Финансово-хозяйственная деятельность',
            'icon' => 'rocket' // This is a bootstrap icon name
        ],
        [
            'url' => ['site/about'],
            'label' => 'Вакантные места для приема(перевода)',
            'icon' => 'rocket' // This is a bootstrap icon name
        ],
          
    ],
]) ?> -->






<br/>
<h1 class="text-center"><?= Html::encode($title) ?></h1><br/>

 <div class="panel-group" id="accordion">
    <div class="panel panel-default">
      <div class="panel-heading">
        <h4 class="panel-title">
          <a data-toggle="collapse" data-parent="#accordion" href="#collapse1">Основные сведения</a>
        </h4>
      </div>
      <div id="collapse1" class="panel-collapse collapse ">
        <div class="panel-body"><div class="post-bodycopy clearfix"><p class="text"><strong>Полное наименование образовательной организации:</strong> Автономная некоммерческая организация дополнительного профессионального образования «Академия».</p>
<p class="text"><strong>Сокращенное наименование:</strong> АНО ДПО «Академия».</p>
<p class="text"><strong>Дата создания:</strong> 30.11.2010 г. </p>
<p class="text"><strong>Местонахождение организации (юридический, фактический адрес):</strong> Российская Федерация, 443099, Самарская область, г. Самара, ул. Молодогвардейская, д.33.</p>
<p class="text"><strong>Режим работы:</strong> Учебные занятия: Пн. – Суб. </p>
<p class="text">Количество, распределение по дням недели и последовательность занятий определяются расписанием, но не более 8 академических часов в день. </p>
<p class="text"><strong>График работы образовательной организации: </strong>Пн.- Пт.  8:00-17:00 </p>
<p class="text">График работы отдельных специалистов определяется индивидуально.</p>
<p class="text"><strong>Контактные телефоны:</strong> (846)205-77-66, 277-89-86</p>
<p class="text"><strong>Адрес электронной почты:</strong> <a href="mailto:samarapb@mail.ru">samarapb@mail.ru</a></p>
</div></div>
      </div>
    </div>
    <div class="panel panel-default">
      <div class="panel-heading">
        <h4 class="panel-title">
          <a data-toggle="collapse" data-parent="#accordion" href="#collapse2">Структура и органы управления образовательной организацией</a>
        </h4>
      </div>
      <div id="collapse2" class="panel-collapse collapse">
        <div class="panel-body"><div class="post-bodycopy clearfix"><p class="text">Управление  организацией  осуществляется в соответствии с действующим законодательством Российской Федерации и Уставом.</p>
<p class="text"><strong>Органами управления организацией являются:</strong></p>
<p class="text">Коллегиальные органы управления — Правление, общее собрание работников организации, педагогический совет, совет обучающихся.</p>
<p class="text">Единоличный исполнительный орган: ректор. </p>
<p class="text">Ректор АНО ДПО «Академия» <u><strong>Семенычев Виталий Валерьевич</strong></u><br>
</p><center>
<h1>Структура АНО ДПО «Академия»</h1>
<p></p></center>
<p></p><center>
<?php echo  Lightbox::widget([
    'files' => [
        [
            'thumb' => '../images/thmb/structure-th.jpg',
            'original' => 'https://samarapb.ru/documents/organization/structure.jpg',
            'title' => 'Удостоверение тракториста',
               'thumbOptions' => [
            'class' => 'img-responsive', 'alt' => 'Схема и структура школы «Росавтоакадемия»', 'title' => "Структура и органы. Учебный центр «Академия»" ]
        ],
        
    ]
]); ?>

</center><p></p>
<p class="text"><strong>Адрес электронной почты всех структурных подразделений:</strong> <a href="mailto:samarapb@mail.ru">samarapb@mail.ru</a></p>
<p class="text"><strong>Телефоны всех структурных подразделений:</strong> 205-77-66</p>
</div></div>
      </div>
    </div>
    <div class="panel panel-default">
      <div class="panel-heading">
        <h4 class="panel-title">
          <a data-toggle="collapse" data-parent="#accordion" href="#collapse3">Документы</a>
        </h4>
      </div>
      <div id="collapse3" class="panel-collapse collapse">
        <div class="panel-body"><div class="post-bodycopy clearfix"><table  class="table table-bordered table-striped table-hover table-condensed table-responsive" style="width: 100%;" border="2" width="100%" bordercolor="#ccccff">
<tbody>
<tr class="alt">
<th><strong>№ п/п</strong></th>
<th><strong>Название документа</strong></th>
<th><strong>Ссылка для скачивания</strong></th>
</tr>
<tr>
<td>1.</td>
<td>Устав образовательной организации</td>
<td><a href="https://samarapb.ru/documents/organization/ustav.pdf">Скачать</a></td>
</tr>
<tr class="alt">
<td>2.</td>
<td>Лицензия на осуществление образовательной деятельности</td>
<td><a href="https://samarapb.ru/documents/organization/licenzija.pdf">Скачать</a></td>
</tr>
<tr>
<td>3.</td>
<td>Приложение к лицензии на осуществление образовательной деятельности</td>
<td><a href="https://samarapb.ru/documents/organization/prilozhenie_k_licenzii.pdf" target="_self">Скачать</a></td>
</tr>
<tr class="alt">
<td>4.</td>
<td>Приказ о выдаче лицензии</td>
<td><a href="https://samarapb.ru/documents/organization/prikaz_o_vydache_licenzii.pdf">Скачать</a></td>
</tr>
<tr>
<td>5.</td>
<td>Положение о порядке организации образовательной деятельности</td>
<td><a href="https://samarapb.ru/documents/organization/porjadok_organizacii_obrazovatelnoj_dejatelnosti.pdf">Скачать</a></td>
</tr>
<tr class="alt">
<td>6.</td>
<td>Положение о порядке предоставления платных образовательных услуг</td>
<td><a href="https://samarapb.ru/documents/organization/platnye_obrazovatelnye_uslugi.pdf">Скачать</a></td>
</tr>
<tr>
<td>7.</td>
<td>Образец договора об оказании платных образовательных услуг</td>
<td><a href="https://samarapb.ru/documents/organization/okazanii_platnyh_obrazovatelnyh_uslug.pdf">Скачать</a></td>
</tr>
<tr class="alt">
<td>8.</td>
<td>Правила внутреннего трудового распорядка</td>
<td><a href="https://samarapb.ru/documents/organization/trudovoj_rasporjadok.pdf">Скачать</a></td>
</tr>
<tr>
<td>9.</td>
<td>Отчет о самообследовании 2014г.</td>
<td><a href="https://samarapb.ru/documents/organization/otchet_o_samoobsledovanii.pdf">Скачать</a></td>
</tr>
<tr class="alt">
<td>10.</td>
<td>Стоимость обучения</td>
<td><a href="https://samarapb.ru/documents/organization/stoimost_obuchenija.jpg">Скачать</a></td>
</tr>
<tr>
<td>11.</td>
<td>Заключение ГИБДД</td>
<td><a href="/documents/zakljuchenie-gibdd.pdf">Скачать</a></td>
</tr>
<tr class="alt">
<td>12.</td>
<td>Акт обследования учебно-материальной базы</td>
<td><a href="https://samarapb.ru/documents/organization/akt_obsledovaniya_materialnoj_bazy.pdf">Скачать</a></td>
</tr>
<tr><td>13.</td>
<td>Отчет о самообследовании 2015г.</td>
<td><a href="https://samarapb.ru/documents/organization/otchet_o_samoobsledovanii_2015.pdf">Скачать</a></td>
</tr>
<tr><td>14.</td>
<td>Отчет о самообследовании 2016 г.</td>
<td><a href="/documents/otchet-o-samoobsledovanii-2016.pdf">Скачать</a></td>
</tr>
<tr><td>15.</td>
<td>Акт обследования ГИБДД 2017 г.</td>
<td><a href="/documents/akt-obsledovaniya-gibdd-2017.pdf">Скачать</a></td>
</tr>
</tbody>
</table>
</div></div>
      </div>
    </div>
        <div class="panel panel-default">
      <div class="panel-heading">
        <h4 class="panel-title">
          <a data-toggle="collapse" data-parent="#accordion" href="#collapse4">Образование</a>
        </h4>
      </div>
      <div id="collapse4" class="panel-collapse collapse">
        <div class="panel-body"><div class="post-bodycopy clearfix"><p class="text"><strong>Учебный центр «Академия»</strong> реализует образовательные программы:</p>
<ul>
<li>профессионального обучения (профессиональная подготовка, переподготовка и повышения квалификации рабочих и служащих)</li>
<li>дополнительного профессионального образования (повышение квалификации и профессиональная переподготовка лиц, имеющих (получающих) среднее профессиональное и (или) высшее образование</li>
<li>дополнительного образования детей и взрослых (дополнительные общеразвивающие программы)</li>
</ul>
<p class="text">Обучение слушателей ведется на русском языке.</p>
<p class="text">Образовательные услуги предоставляются на платной основе, на основании заявок от физических и юридических лиц. </p>
<p class="text">Обучение проводится круглогодично по мере комплектования групп. </p>
<p class="text">Платные образовательные услуги предоставляются в соответствии с условиями заключенного договора об оказании образовательных услуг. </p>
<p class="text">Формы обучения определяются учебным центром «Академия» самостоятельно. Допускается сочетание различных форм получения образования (очная, очно-заочная, заочная)  и форм обучения (сетевые формы реализации образовательных программ, дистанционные образовательные технологии).<br>
Образовательные услуги предоставляются на платной основе, на основании заявок от физических и юридических лиц. </p>
<p><a href="https://samarapb.ru/documents/organization/Metodicheskie materialy.pdf">Методические материалы</a></p>
<p></p><center><b><br>
<h3>Обучение водителей транспортных средств категории В</h3>
</b><p><b></b></p></center><p></p>
<table  class="table table-bordered table-striped table-hover table-condensed table-responsive" style="width: 100%;" border="2" width="100%" bordercolor="#ccccff">
<tbody>
<tr class="alt">
<th><strong>№ п/п</strong></th>
<th><strong>Название документа</strong></th>
<th><strong>Ссылка для скачивания</strong></th>
</tr>
<tr>
<td>1.</td>
<td>Программы профессионального обучения водителей категории «В»</td>
<td><a href="https://samarapb.ru/documents/organization/kategorija_b.pdf">Скачать</a></td>
</tr>
<tr class="alt">
<td>2.</td>
<td>Материалы для проведения промежуточной и итоговой аттестации</td>
<td><a href="https://samarapb.ru/documents/organization/materialy_dlja_provedenija_promezhutochnoj_i_itogovoj_attestacii.pdf">Скачать</a></td>
</tr>
<tr>
<td>3.</td>
<td>Методические рекомендации по организации образовательного процесса</td>
<td><a href="https://samarapb.ru/documents/organization/metodicheskie_rekomendacii_po_organizacii_obrazovatelnogo_processa.pdf">Скачать</a></td>
</tr>
<tr class="alt">
<td>4.</td>
<td>Календарный учебный график</td>
<td><a href="https://samarapb.ru/documents/organization/kalendarnyj_grafik.pdf">Скачать</a></td>
</tr>
<tr>
</tr></tbody>
</table>
<p class="text"><b>Нормативный срок обучения</b> по программам подготовки, переподготовки и повышения квалификации водителей транспортных средств категории В определяется в зависимости от конкретной образовательной программы.</p>
<p class="text"><b>Планируемая численность обучающихся</b> по программам подготовки, переподготовки и повышения квалификации водителей транспортных средств категории В, определенная в соответствии  имеющимися учебными кабинетами и механическими транспортными средствами:</p>
<ol>
<li>Количество оборудованных учебных кабинетов соответствует количеству общего числа групп — 32 учебных групп. Наполняемость учебной группы не превышает 30 человек.
</li><li>Количество механических транспортных средств соответствует: для категории А1 - 53, категории А - 53, категории B - 342 обучающихся в год.
</li></ol>


<center><b><br>
<h3>Реализуемые программы дополнительного образования детей и взрослых</h3>
</b><p><b> (дополнительные общеразвивающие программы)</b></p></center><p></p>
<table  class="table table-bordered table-striped table-hover table-condensed table-responsive" style="width: 100%;" border="2" width="100%" bordercolor="#ccccff">
<tbody>
<tr>
<th style="text-align: center; ">
   <b>№ п/п</b>
   </th>
<th style="text-align: center;">
   <b>Наименование образовательной программы</b>
   </th>
<th style="text-align: center;">
   <b>Нормативный срок освоения</b>
   </th>
<th style="text-align: center;">
   <b>Ссылка для скачивания</b>
   </th>
</tr>
<tr class="alt">
<td>
   1.
   </td>
<td>
   Судоводитель маломерного судна
   </td>
<td style="text-align: center;">
   75/45
   </td>
<td>
<a href="https://samarapb.ru/documents/organization/titlepage/Programmy DO detej i vzroslyh/Sudovoditel malomernogo sudna.pdf">Скачать</a>
   </td>
</tr>
</tbody>
</table>
<p></p><center><b><br>
<h3>Реализуемые программы профессионального обучения</h3>
</b><p><b> (программы профессиональной подготовки, программы повышения квалификации, программы переподготовки)</b></p></center><p></p>
<table  class="table table-bordered table-striped table-hover table-condensed table-responsive" style="width: 100%;" border="2" width="100%" bordercolor="#ccccff">
<tbody>
<tr>
<th style="text-align: center; ">
   <b>№ п/п</b>
   </th>
<th style="text-align: center; "><b>Код профессии</b></th>
<th style="text-align: center; ">
   <b>Наименование образовательной программы</b>
   </th>
<th style="text-align: center; "><b>Разряд</b>
</th><th style="text-align: center; ">
   <b>Нормативный срок освоения</b>
   </th>
<th style="text-align: center; ">
   <b>Ссылка для скачивания</b>
   </th>
</tr>
<tr class="alt">
<td>
   1.
   </td>
<td style="text-align: center;"></td>
<td>
   Программа профессиональной подготовки водителей транспортных средств категории «В»
   </td>
<td></td>
<td style="text-align: center;">
   190
   </td>
<td>
<a href="https://samarapb.ru/documents/organization/titlepage/Programmy%20professional'nogo%20obuchenija/1 Programma professional'noj podgotovki voditelej transportnyh sredstv kategorii B.pdf">Скачать</a>
   </td>
</tr>
<tr>
<td>
   2.
   </td>
<td style="text-align: center;"></td>
<td>
   Программа профессиональной переподготовки водителей транспортных средств с категории «С» на категорию «В»
   </td>
<td></td>
<td style="text-align: center;">
   60
   </td>
<td>
<a href="https://samarapb.ru/documents/organization/titlepage/Programmy%20professional'nogo%20obuchenija/2 Programma professional'noj perepodgotovki voditelej transportnyh sredstv s kategorii C na kategoriju B.pdf">Скачать</a>
   </td>
</tr>
<tr class="alt">
<td>
   3.
   </td>
<td style="text-align: center;"></td>
<td>
Программа профессиональной переподготовки водителей транспортных средств с категории «D» на категорию «В»
   </td>
<td style="text-align: center;"></td>
<td style="text-align: center;">
   64
   </td>
<td>
<a href="https://samarapb.ru/documents/organization/titlepage/Programmy%20professional'nogo%20obuchenija/3 Programma professional'noj perepodgotovki voditelej transportnyh sredstv s kategorii D na kategoriju B.pdf">Скачать</a>
   </td>
</tr>
<tr>
<td>
   4.
   </td>
<td style="text-align: center;"></td>
<td>
  Программа повышения квалификации водителей транспортных средств категории «В» с автоматической трансмиссией
   </td>
<td></td>
<td style="text-align: center;">
   16
   </td>
<td>
<a href="https://samarapb.ru/documents/organization/titlepage/Programmy%20professional'nogo%20obuchenija/4 Programma povyshenija kvalifikacii voditelej transportnyh sredstv kategorii V s avtomaticheskoj transmissiej.pdf">Скачать</a>
   </td>
</tr>
<tr class="alt">
<td>
   5.
   </td>
<td></td>
<td>
Программа профессиональной подготовки водителей транспортных средств категории «А»
   </td>
<td></td>
<td style="text-align: center;">
   130
   </td>
<td>
<a href="https://samarapb.ru/documents/organization/titlepage/Programmy%20professional'nogo%20obuchenija/5 Programma kategorii A.pdf">Скачать</a>
   </td>
</tr>
<tr>
<td>
   6.
   </td>
<td></td>
<td>
   Программа профессиональной подготовки водителей транспортных средств подкатегории «А1»
   </td>
<td></td>
<td style="text-align: center;">
   130
   </td>
<td>
<a href="https://samarapb.ru/documents/organization/titlepage/Programmy%20professional'nogo%20obuchenija/6 Programma kategorii A1.pdf">Скачать</a>
   </td>
</tr>
<tr class="alt">
<td>
   7.
   </td>
<td></td>
<td>
Программа профессиональной подготовки водителей транспортных средств категории «В» с автоматической трансмиссией
   </td>
<td></td>
<td style="text-align: center;">
   188
   </td>
<td>
<a href="https://samarapb.ru/documents/organization/titlepage/Programmy%20professional'nogo%20obuchenija/7 Programma kategorija B avtomat.pdf">Скачать</a>
   </td>
</tr>
<tr>
<td>
   8.
   </td>
<td></td>
<td>
Водитель мототранспортных средств (категория АI)
   </td>
<td></td>
<td style="text-align: center;">
   202
   </td>
<td>
<a href="https://samarapb.ru/documents/organization/titlepage/Programmy%20professional'nogo%20obuchenija/8 voditel' mototransport sredstv, kat. AI.pdf">Скачать</a>
   </td>
</tr>
<tr class="alt">
<td>
   9.
   </td>
<td></td>
<td>
  Ждет заполнения (Для редактора!)
   </td>
<td></td>
<td style="text-align: center;">
   хх
   </td>
<td>
<a href="https://samarapb.ru/documents/organization/titlepage/Programmy%20professional'nogo%20obuchenija/x.pdf">Скачать</a>
   </td>
</tr>

</tbody>
</table>
</div></div>
      </div>
    </div>
        <div class="panel panel-default">
      <div class="panel-heading">
        <h4 class="panel-title">
          <a data-toggle="collapse" data-parent="#accordion" href="#collapse5">Образовательные стандарты</a>
        </h4>
      </div>
      <div id="collapse5" class="panel-collapse collapse">
        <div class="panel-body"><div class="post-bodycopy clearfix"><h4 style="text-align: center;">Документы для скачивания</h4>
<table  class="table table-bordered table-striped table-hover table-condensed table-responsive" style="width: 100%;" border="2" width="100%" bordercolor="#ccccff">
<tbody>
<tr class="alt">
<th><strong>№ п/п</strong></th>
<th><strong>Название документа</strong></th>
<th><strong>Ссылка для скачивания</strong></th>
</tr>
<tr>
<td>1.</td>
<td>Федеральный образовательный стандарт «Водитель транспортного средства категории В»</td>
<td><a href="https://samarapb.ru/documents/organization/federalnyj_standart.doc">Скачать</a></td>
</tr>
<tr class="alt">
<td>2.</td>
<td>ФГОС ВПО Техносферная безопастность бакалавр</td>
<td><a href="https://samarapb.ru/documents/organization/fgos_vpo_tehnosferaja_bezopasnost_bakalavr.rtf">Скачать</a></td>
</tr>
</tbody>
</table>
</div></div>
      </div>
    </div>
        <div class="panel panel-default">
      <div class="panel-heading">
        <h4 class="panel-title">
          <a data-toggle="collapse" data-parent="#accordion" href="#collapse6">Руководство. Педагогический (научно-педагогический) состав</a>
        </h4>
      </div>
      <div id="collapse6" class="panel-collapse collapse">
        <div class="panel-body"><div class="post-bodycopy clearfix"><p class="text"><span style="text-decoration: underline;">Руководство:</span></p>
<p class="text"><strong>Ректор: </strong>Семенычев Виталий Валерьевич</p>
<p class="text"><strong>Исполнительный директор: </strong>Богданов Олег Николаевич</p>
<p class="text"><strong>Проректор по стратегическому развитию:</strong> Соколов Анатолий Иванович</p>
<p class="text"><strong>Адрес электронной почты руководства АНО ДПО «Академия»:</strong> samarapb@mail.ru</p>
<p class="text"><strong>Телефоны руководства АНО ДПО «Академия»: </strong>205-77-66</p>
<p></p><center><strong>Сведения о преподавателях учебных предметов по программам подготовки, переподготовки и повышения квалификации водителей автотранспортных средств категории В</strong></center><p></p>
<p class="text">Коллектив АНО ДПО «Академия», осуществляющий профессиональное обучение водителей транспортных средств категории «В» – это высококвалифицированные преподаватели, специалисты, имеющие большой педагогический стаж и значительный опыт практической работы по всем направлениям обучения, обладающие достаточным потенциалом для качественной подготовки слушателей.</p>
<p></p><center><p></p>
<table  class="table table-bordered table-striped table-hover table-condensed table-responsive" style="width: 100%;" border="2" width="100%" bordercolor="#ccccff">
<tbody>
<tr class="alt">
<th colspan="2">Показатель</th>
<th style="text-align: center;">Кол-во чел.</th>
</tr>
<tr>
<td style="text-align: center;" colspan="2"><strong>Всего преподавателей учебных предметов</strong></td>
<td style="text-align: center;">6</td>
</tr>
<tr class="alt">
<td colspan="2">Из них штатных работников</td>
<td style="text-align: center;">2</td>
</tr>
<tr>
<td colspan="2">Преподавателей, работающих по договорам гражданско-правового характера</td>
<td style="text-align: center;">4</td>
</tr>
<tr class="alt">
<td style="text-align: center;">Образовательный уровень педагогических работников</td>
<td>с высшим образованием в области, соответствующей преподаваемому предмету, либо высшим образованием и дополнительным профессиональным образованием по направлению деятельности</td>
<td style="text-align: center;">6</td>
</tr>
<tr>
<td colspan="2">Прошли  курсы повышения  квалификации  за последние 3 года в области, соответствующей преподаваемому предмету </td>
<td style="text-align: center;">5</td>
</tr>
<tr class="alt">
<td style="text-align: center;" colspan="2"><strong>Всего мастеров производственного обучения </strong></td>
<td style="text-align: center;">4</td>
</tr>
<tr>
<td colspan="2">Из них штатных работников</td>
<td style="text-align: center;">2</td>
</tr>
<tr class="alt">
<td colspan="2">Мастеров производственного обучения, работающих по договорам гражданско-правового характера</td>
<td style="text-align: center;">2</td>
</tr>
<tr>
<td style="text-align: center;" rowspan="2">Образовательный уровень мастеров производственного обучения</td>
<td>с высшим образованием в области, соответствующей преподаваемому предмету,  либо высшим образованием и дополнительным профессиональным образованием по направлению деятельности</td>
<td style="text-align: center;">2</td>
</tr>
<tr class="alt">
<td>из них со средним профессиональным образованием по направлению деятельности</td>
<td style="text-align: center;">2</td>
</tr>
<tr>
<td colspan="2">Прошли  курсы повышения  квалификации  по программе повышения квалификации «Педагогические основы деятельности преподавателя по подготовке водителей автотранспортных средств»</td>
<td style="text-align: center;">4</td>
</tr>
<tr class="alt">
<td colspan="2">Из них совмещают должности преподавателей учебных предметов</td>
<td style="text-align: center;">1</td>
</tr>
</tbody>
</table>
<p></p></center><br>
<center><br>
<strong>Сведения о преподавателях учебных предметов по программам подготовки, переподготовки и повышения квалификации водителей автотранспортных средств категории В</strong><br>
</center><br>
<center><p></p>
<table  class="table table-bordered table-striped table-hover table-condensed table-responsive" style="width: 100%;" border="2" width="100%" bordercolor="#ccccff">
<tbody>
<tr>
<th style="text-align: center;">Ф.И.О</th>
<th style="text-align: center;">Учебный предмет</th>
<th style="text-align: center;">Документ о высшем или среднем профессиональном образовании по направлению подготовки «Образование и педагогика» или в области, соответствующей преподаваемому предмету, либо о высшем или среднем профессиональном образовании и дополнительное профессиональное образование по направлению деятельности</th>
<th style="text-align: center;">Удостоверение о повышении квалификации (не реже чем один раз в три года)</th>
<th style="text-align: center;">Общий стаж</th>
<th style="text-align: center;">Стаж работы по специальности</th>
</tr>
<tr class="alt">
<td>Баннов Александр Евгеньевич</td>
<td>«Основы законодательства в сфере дорожного движения» «Основы управления транспортными средствами»</td>
<td>Куйбышевский государственный университет. Преподаватель</td>
<td>Удостоверение № БД 014-01-1 от 28.01.2014 г.</td>
<td style="text-align: center;">31</td>
<td style="text-align: center;">5</td>
</tr>
<tr>
<td>Дмитриев Вадим Владимирович</td>
<td>«Устройство и техническое обслуживание транспортных средств категории «В» как объектов управления»</td>
<td>Самарский государственный технический университет, инженер-педагог по специальности «Профессиональное обучение»</td>
<td>Удостоверение № БД 014-01-2 Рег. 14 0133056 от 28.01.2014 г.</td>
<td style="text-align: center;">18</td>
<td style="text-align: center;">5</td>
</tr>
<tr class="alt">
<td>Саламатина Майа Азатжановна</td>
<td>«Основы законодательства в сфере дорожного движения» «Основы управления транспортными средствами»</td>
<td>Самарский государственный технический университет, инженер- разработчик</td>
<td>Удостоверение № БД 014-01-3 от 28.01.2014 г.; Удостоверение ФАУ «Отраслевой научно-методический центр» Московская обл. г.Любрецы Серия ОГ №2274 от 27.06.2013 г.</td>
<td style="text-align: center;">7</td>
<td style="text-align: center;">2</td>
</tr>
<tr>
<td>Грицкова Татьяна Ивановна</td>
<td>«Первая помощь при дорожно-транспортном проишествии»</td>
<td>Высшее образование, Куйбышевский медицинский институт им. Д.И. Ульянова, Врач</td>
<td>Свидетельство, Рег. № 1232 о повышении квалификации; Удостоверение о краткосрочном повышении квалификации Рег. №4101 от 01.06.2011. Центр ПК и ПС СамГУ</td>
<td style="text-align: center;">40</td>
<td style="text-align: center;">23</td>
</tr>

</tbody>
</table>

</center>
</div></div>
      </div>
    </div>
        <div class="panel panel-default">
      <div class="panel-heading">
        <h4 class="panel-title">
          <a data-toggle="collapse" data-parent="#accordion" href="#collapse7">Материально-техническое обеспечение и оснащенность образовательного процесса</a>
        </h4>
      </div>
      <div id="collapse7" class="panel-collapse collapse">
        <div class="panel-body"><div class="post-bodycopy clearfix"><p></p><center><strong>По программам профессионального обучения водителей транспортных средств категории «В»</strong><br>
(без учета помещений, оргтехники, оборудования, аппаратно-программных средств, использующихся для административных целей)</center><p></p>
<p class="text" style="text-align:center"><strong>Оборудованные учебные кабинеты и площадки для практического обучения:</strong></p>
<p></p><center><p></p>
<table  class="table table-bordered table-striped table-hover table-condensed table-responsive" style="width: 100%;" border="2" bordercolor="#ccccff">
<tbody>
<tr class="alt">
<th>№ п/п</th>
<th style="text-align: center;">Наименование</th>
<th style="text-align: center;">Местонахождение, адрес</th>
</tr>
<tr>
<td style="text-align: center;">1.</td>
<td>Компьютерно-лекционные классы для теоретических занятий и сдачи экзамена с оборудованием, техническими средствами обучения, учебно-наглядными пособиями, информационными материалами.</td>
<td>443099, г. Самара,ул. Молодогвардейская, д. 33 офис. 238, 229</td>
</tr>
<tr class="alt">
<td style="text-align: center;">2.</td>
<td>Компьютерный класс для сдачи теоретического экзамена</td>
<td>443099, г. Самара, ул. Молодогвардейская, д. 33 офис. 235</td>
</tr>
<tr>
<td style="text-align: center;">2.</td>
<td>Автодром</td>
<td>443535, Самарская область, Волжский район, в 3-х км северо-восточнее жилого массива Яицкое, участок б/н</td>
</tr>
</tbody>
</table>
<p class="text" style="text-align:center;text-indent:0"><strong>Средства обучения и воспитания:</strong></p>
<table  class="table table-bordered table-striped table-hover table-condensed table-responsive" style="width: 100%;" border="2" bordercolor="#ccccff">
<tbody>
<tr class="alt">
<th>№ п/п</th>
<th style="text-align: center;">Наименование учебного оборудования</th>
<th style="text-align: center;">Единица измерения</th>
<th style="text-align: center;">Кол-во</th>
</tr>
<tr>
<td style="text-align: center;" colspan="4">Мебель для учебных классов:</td>
</tr>
<tr class="alt">
<td style="text-align: center;">1.</td>
<td>Стол преподавателя</td>
<td style="text-align: center;">шт.</td>
<td style="text-align: center;">8</td>
</tr>
<tr>
<td style="text-align: center;">2.</td>
<td>Стул с пюпитром (поворотным/откидным)</td>
<td style="text-align: center;">шт.</td>
<td style="text-align: center;">35</td>
</tr>
<tr class="alt">
<td style="text-align: center;">3.</td>
<td>Столы ученические и компьютерные</td>
<td style="text-align: center;">шт.</td>
<td style="text-align: center;">22</td>
</tr>
<tr>
<td style="text-align: center;">4.</td>
<td>Стул</td>
<td style="text-align: center;">шт.</td>
<td style="text-align: center;">30</td>
</tr>
<tr class="alt">
<td style="text-align: center;">5.</td>
<td>Шкаф для хранения документов и книг</td>
<td style="text-align: center;">шт.</td>
<td style="text-align: center;">8</td>
</tr>
<tr>
<td style="text-align: center;" colspan="4">Библиотечный фонд:</td>
</tr>
<tr class="alt">
<td style="text-align: center;">6.</td>
<td>Печатные учебные издания</td>
<td style="text-align: center;">шт.</td>
<td style="text-align: center;">104</td>
</tr>
<tr>
<td style="text-align: center;">7.</td>
<td>Электронные учебники</td>
<td style="text-align: center;">шт.</td>
<td style="text-align: center;">10</td>
</tr>
<tr class="alt">
<td style="text-align: center;" colspan="4">Компьютеры, оргтехника, информационно-телекоммуникационные сети:</td>
</tr>
<tr>
<td style="text-align: center;">8.</td>
<td>Стационарные ПЭВМ, использующиеся только для обучения</td>
<td style="text-align: center;">шт.</td>
<td style="text-align: center;">20</td>
</tr>
<tr class="alt">
<td style="text-align: center;">9.</td>
<td>Ноутбуки</td>
<td style="text-align: center;">шт.</td>
<td style="text-align: center;">6</td>
</tr>
<tr>
<td style="text-align: center;">10.</td>
<td>Web-камеры и гарнитура для проведения вебинаров</td>
<td style="text-align: center;">шт.</td>
<td style="text-align: center;">4</td>
</tr>
<tr class="alt">
<td style="text-align: center;">11.</td>
<td>Принтер цветной</td>
<td style="text-align: center;">шт.</td>
<td style="text-align: center;">2</td>
</tr>
<tr>
<td style="text-align: center;">12.</td>
<td>Принтер</td>
<td style="text-align: center;">шт.</td>
<td style="text-align: center;">4</td>
</tr>
<tr class="alt">
<td style="text-align: center;">13.</td>
<td>Ламинатор</td>
<td style="text-align: center;">шт.</td>
<td style="text-align: center;">1</td>
</tr>
<tr>
<td style="text-align: center;">14.</td>
<td>Резак для бумаги</td>
<td style="text-align: center;">шт.</td>
<td style="text-align: center;">1</td>
</tr>
<tr class="alt">
<td style="text-align: center;">15.</td>
<td>Переплетная машина Unibind</td>
<td style="text-align: center;">шт.</td>
<td style="text-align: center;">1</td>
</tr>
<tr>
<td style="text-align: center;">16.</td>
<td>Брошюратор для пластиковой пружины</td>
<td style="text-align: center;">шт.</td>
<td style="text-align: center;">1</td>
</tr>
<tr class="alt">
<td style="text-align: center;" colspan="4">Аудиовизуальные средства:</td>
</tr>
<tr>
<td style="text-align: center;">17.</td>
<td>Телевизор</td>
<td style="text-align: center;">шт.</td>
<td style="text-align: center;">4</td>
</tr>
<tr class="alt">
<td style="text-align: center;">18.</td>
<td>Мультимедийный проектор</td>
<td style="text-align: center;">шт.</td>
<td style="text-align: center;">2</td>
</tr>
<tr>
<td style="text-align: center;">19.</td>
<td>Проекционный экран</td>
<td style="text-align: center;">шт.</td>
<td style="text-align: center;">1</td>
</tr>
<tr class="alt">
<td style="text-align: center;">20.</td>
<td>Магнитно-маркерная доска</td>
<td style="text-align: center;">шт.</td>
<td style="text-align: center;">2</td>
</tr>
<tr>
<td style="text-align: center;">21.</td>
<td>Электронная доска для визуального моделирования, анализа и разбора дорожной ситуации</td>
<td style="text-align: center;">шт.</td>
<td style="text-align: center;">2</td>
</tr>
<tr class="alt">
<td style="text-align: center;">22.</td>
<td>Видео-регистратор Supra SCR автомобильный c картой памяти micro</td>
<td style="text-align: center;">шт.</td>
<td style="text-align: center;">2</td>
</tr>
<tr>
<td style="text-align: center;" colspan="4">Учебно-наглядные пособия:</td>
</tr>
<tr class="alt">
<td style="text-align: center;">23.</td>
<td>Плакаты</td>
<td style="text-align: center;">шт.</td>
<td style="text-align: center;">157</td>
</tr>
<tr>
<td style="text-align: center;">24.</td>
<td>Электронные учебные пособия (обучающе – контролирующие программы, учебные фильмы)<p></p>
<ul>
<li>Видео-уроки по ПДД.</li>
<li>Видео-уроки по вождению.</li>
<li>Учебный видеоролик «Обучаюсь за рулем. Первая помощь при ДТП и др.»</li>
<li>Мультимедийная обучающая программа «Оказание первой помощи при ДТП.</li>
<li>Учебный курс «Первая помощь» Фирма 1С</li>
<li>Компьютерная программа для теоретического экзамена в ГИБДД (МААШ).</li>
<li>Компьютерная программа «Игра по правилам»</li>
</ul>
</td>
<td style="text-align: center;">наименование</td>
<td style="text-align: center;">83</td>
</tr>
<tr class="alt">
<td style="text-align: center;">25.</td>
<td>Электронные учебные материалы (мультимедийные слайды, презентации)<p></p>
<ul>
<li>Основные положения ПДД</li>
<li>ПДД в схемах</li>
<li>Устройство транспортных средств</li>
<li>Психофизиологические основы деятельности водителя</li>
</ul>
</td>
<td style="text-align: center;">наименование</td>
<td style="text-align: center;">65</td>
</tr>
<tr>
<td style="text-align: center;" colspan="4">Оборудование и технические средства:</td>
</tr>
<tr class="alt">
<td style="text-align: center;">26.</td>
<td>Учебные механические транспортные средства, соответствующие установленным требованиям</td>
<td style="text-align: center;">шт.</td>
<td style="text-align: center;">3</td>
</tr>
<tr>
<td style="text-align: center;">27.</td>
<td>Прицеп (разрешенная максимальная масса не превышает 750 кг.)</td>
<td style="text-align: center;">шт.</td>
<td style="text-align: center;">1</td>
</tr>
<tr class="alt">
<td style="text-align: center;">28.</td>
<td>Детское удерживающее устройство</td>
<td style="text-align: center;">шт.</td>
<td style="text-align: center;">1</td>
</tr>
<tr>
<td style="text-align: center;">29.</td>
<td>Тягово-сцепное устройство</td>
<td style="text-align: center;">шт.</td>
<td style="text-align: center;">1</td>
</tr>
<tr class="alt">
<td style="text-align: center;">30.</td>
<td>Гибкое связующее звено (буксировочный трос)</td>
<td style="text-align: center;">шт.</td>
<td style="text-align: center;">2</td>
</tr>
<tr>
<td style="text-align: center;">31.</td>
<td>Тренажер компьютерный вождения автомобиля ВАЗ (АТК – 03М1)</td>
<td style="text-align: center;">шт.</td>
<td style="text-align: center;">1</td>
</tr>
<tr class="alt">
<td style="text-align: center;">32.</td>
<td>Тренажер-манекен взрослого пострадавшего(голова, торс, конечности) с выносным контролером для отработки приёмов сердечно-лёгочной реанимации</td>
<td style="text-align: center;">шт.</td>
<td style="text-align: center;">1</td>
</tr>
<tr>
<td style="text-align: center;">33.</td>
<td>Тренажер — манекен взрослого пострадавшего (голова, торс) без контролера для отработки приемов сердечно-легочной реанимации.</td>
<td style="text-align: center;">шт.</td>
<td style="text-align: center;">1</td>
</tr>
<tr class="alt">
<td style="text-align: center;">34.</td>
<td>Тренажер — манекен взрослого пострадавшего для отработки приемов удаления инородного тела из верхних дыхательных путей</td>
<td style="text-align: center;">шт.</td>
<td style="text-align: center;">1</td>
</tr>
<tr>
<td style="text-align: center;">35.</td>
<td>Расходный материал для тренажёров (пленка лицевая учебная для маникенов, пленки с клапаном для проведения искусственной вентиляции легких)</td>
<td style="text-align: center;">шт.</td>
<td style="text-align: center;">30</td>
</tr>
<tr class="alt">
<td style="text-align: center;">36.</td>
<td>Мотоциклетный шлем</td>
<td style="text-align: center;">шт.</td>
<td style="text-align: center;">1</td>
</tr>
<tr>
<td style="text-align: center;">37.</td>
<td>Аптечка первой помощи (автомобильная)</td>
<td style="text-align: center;">шт.</td>
<td style="text-align: center;">8</td>
</tr>
<tr class="alt">
<td style="text-align: center;">38.</td>
<td>Табельные средства для оказания первой помощи: <br>Устройства для проведения искусственной вентиляции легких: лицевая маска с клапаном. <br>Средства для временной остановки кровотечения- жгуты. <br>Средства иммобилизации для верхних, нижних конечностей, шейного отдела позвоночника (шины). <br>Перевязочные средства (бинты, салфетки, лейкопластырь)</td>
<td style="text-align: center;">комплект</td>
<td style="text-align: center;">2</td>
</tr>
<tr>
<td style="text-align: center;">39.</td>
<td>Подручные материалы, имитирующие носилочные средства, средства для остановки кровотечения, перевязочные средства, иммобилизирующие вещества</td>
<td style="text-align: center;">комплект</td>
<td style="text-align: center;">2</td>
</tr>
<tr class="alt">
<td style="text-align: center;">40.</td>
<td>Огнетушитель автомобильный ОП – 2</td>
<td style="text-align: center;">шт.</td>
<td style="text-align: center;">3</td>
</tr>
<tr>
<td style="text-align: center;">41.</td>
<td>Противооткатный упор</td>
<td style="text-align: center;">шт.</td>
<td style="text-align: center;">3</td>
</tr>
<tr class="alt">
<td style="text-align: center;">42.</td>
<td>Компрессор автомобильный</td>
<td style="text-align: center;">шт.</td>
<td style="text-align: center;">3</td>
</tr>
<tr>
<td style="text-align: center;">43.</td>
<td>Конус дорожный</td>
<td style="text-align: center;">шт.</td>
<td style="text-align: center;">10</td>
</tr>
<tr class="alt">
<td style="text-align: center;">44.</td>
<td>Знак аварийной остановки</td>
<td style="text-align: center;">шт.</td>
<td style="text-align: center;">2</td>
</tr>
</tbody>
</table>
<p></p></center><p></p>
<p class="text"><strong>В холле учебного центра размещен информационный стенд</strong></p>
<p class="text"><strong>Информационный стенд:</strong></p>
<ol>
<li>Закон Российской Федерации от 7 февраля 1992 г. N 2300-1 «О защите прав потребителей»</li>
<li>Копия лицензии с соответствующим приложением</li>
<li>Примерная программа профессиональной подготовки водителей транспортных средств категории «B»</li>
<li>Программа профессиональной подготовки водителей транспортных средств категории «B», согласованная с Госавтоинспекцией</li>
<li>Учебный план</li>
<li>Календарный учебный график (на каждую учебную группу)</li>
<li>Расписание занятий (на каждую учебную группу)</li>
<li>График учебного вождения (на каждую учебную группу)</li>
<li>Схемы учебных маршрутов, утвержденные руководителем организации, осуществляющей образовательную деятельность</li>
<li>Книга жалоб и предложений</li>
<li>Адрес официального сайта в сети «Интернет» — Академия.рф</li>
</ol>
<p class="text"><strong>Условия питания и охраны здоровья обучающихся:</strong></p>
<p class="text">Расписание занятий предусматривает перерывы достаточной продолжительности для питания обучающихся. На первом этаже здания расположена столовая ООО «Сытый папа». Меню разнообразное, от первых блюд до выпечки.</p>
<p class="text">В учебном центре организован медицинский кабинет, осуществляется текущий контроль за состоянием здоровья обучающихся, проведение санитарно-гигиенических, профилактических и оздоровительных мероприятий, пропаганда здорового образа жизни, оказание первичной доврачебной медико-санитарной помощи обучающимся.</p>
<p class="text"><strong>Доступ к информационным системам и информационно-телекоммуникационным сетям:</strong></p>
<p class="text">На всех персональных компьютерах, использующихся для обучения, есть доступ в сеть Интернет, работает бесплатный Wi-Fi</p>
<p class="text" style="text-align:center;text-indent:0;"><strong>Обеспечение образовательной деятельности оборудованными учебными транспортными средствами</strong></p>
<p></p><center><p></p>
<table  class="table table-bordered table-striped table-hover table-condensed table-responsive" style="width: 100%;" border="2" bordercolor="#ccccff">
<tbody>
<tr>
<th style="text-align: center;" rowspan="2">Сведения</th>
<th style="text-align: center;" colspan="6">Номер по порядку</th>
</tr>
<tr class="alt">
<th style="text-align: center;">1</th>
<th style="text-align: center;">2</th>
<th style="text-align: center;">3</th>
<th style="text-align: center;">4</th>
<th style="text-align: center;">5</th>
<th style="text-align: center;">6</th>
</tr>
<tr>
<td>Марка, модель</td>
<td style="text-align: center;">LADA GRANTA, 219010</td>
<td style="text-align: center;">LADA KALINA, 219210</td>
<td style="text-align: center;">KIA RIO</td>
<td style="text-align: center;">KAWASAKI ER650E</td>
<td style="text-align: center;">YAMAHA YBR125 ESD</td>
<td style="text-align: center;">829450</td>
</tr>
<tr class="alt">
<td>Тип транспортного средства</td>
<td style="text-align: center;">Легковой</td>
<td style="text-align: center;">Легковой</td>
<td style="text-align: center;">Легковой</td>
<td style="text-align: center;">Мотоциклы</td>
<td style="text-align: center;">Мотоциклы</td>
<td style="text-align: center;">Прочие прицепы</td>
</tr>
<tr>
<td>Категория транспортного средства</td>
<td style="text-align: center;">В</td>
<td style="text-align: center;">В</td>
<td style="text-align: center;">В</td>
<td style="text-align: center;">A</td>
<td style="text-align: center;">A1</td>
<td style="text-align: center;">Прицеп</td>
</tr>
<tr class="alt">
<td>Год выпуска</td>
<td style="text-align: center;">2013</td>
<td style="text-align: center;">2014</td>
<td style="text-align: center;">2013</td>
<td style="text-align: center;">2014</td>
<td style="text-align: center;">2014</td>
<td style="text-align: center;">2014</td>
</tr>
<tr>
<td>Техническое состояние</td>
<td style="text-align: center;" colspan="6">Отвечают требованиям соответствующих стандартов, правил и руководств по их технической эксплуатации</td>
</tr>
<tr class="alt">
<td>Наличие тягово-сцепного (опорно-сцепного) устройства</td>
<td style="text-align: center;">—</td>
<td style="text-align: center;">Установлено тягово-сцепного (опорно-сцепного) устройства</td>
<td style="text-align: center;">—</td>
<td style="text-align: center;">—</td>
<td style="text-align: center;">—</td>
<td style="text-align: center;">—</td>
</tr>
<tr>
<td>Тип трансмиссии (автоматическая или механическая)</td>
<td style="text-align: center;" colspan="5">Механическая</td>
<td style="text-align: center;"></td>
</tr>
<tr class="alt">
<td>Дополнительные педали в соответствии с  п. 5  Основных положений</td>
<td style="text-align: center;" rowspan="4">Установлены дублирующие педали тормоза и сцепления, знак «У», доп. зеркало заднего вида СКТС 63АА0025191 от 07.11.2013 г. ОГИБДД по г. Самаре</td>
<td style="text-align: center;" rowspan="4">Установлены дублирующие педали тормоза и сцепления, доп. зеркало заднего вида, знак «У» СКТС ТС 63АА0025595 от 17.07.2014 г. РЭО по г. Самары</td>
<td style="text-align: center;" rowspan="4">Установлены дублирующие педали тормоза и сцепления, доп. зеркало заднего вида, знак «У» СКТС 63 АА0028973 от 06.10.2014 г. РЭО  г. Самары</td>
<td style="text-align: center;" rowspan="4">—</td>
<td style="text-align: center;" rowspan="4">—</td>
<td style="text-align: center;" rowspan="4">—</td>
</tr>
<tr>
<td>Зеркала заднего вида для обучающего вождению в соответствии с  п. 5 Основных положений</td>
</tr>
<tr class="alt">
<td>Опознавательный знак «Учебное транспортное средство»</td>
</tr>
<tr>
<td>Наличие информации о внесении изменений в конструкцию ТС в регистрационном документе</td>
</tr>
</tbody>
</table>
</center></div>
</div>
      </div>
    </div>

          <div class="panel panel-default">
      <div class="panel-heading">
        <h4 class="panel-title">
          <a data-toggle="collapse" data-parent="#accordion" href="#collapse8">Стипендии и иные виды материальной поддержки</a>
        </h4>
      </div>
      <div id="collapse8" class="panel-collapse collapse">
        <div class="panel-body"><div class="post-bodycopy clearfix"><p class="text">Устав <strong>Автономной некоммерческой организации дополнительного профессионального образования «Академия»</strong> не предусматривает назначение стипендии своим слушателям и обеспечение их общежитием.</p>
<p class="text">Согласно ст. 36 (ч.2) Федерального закона «Об образовании» возможно назначение стипендии юридическими и физическими лицами, направившими слушателей на обучение.</p>
</div>
</div>
      </div>
    </div>

          <div class="panel panel-default">
      <div class="panel-heading">
        <h4 class="panel-title">
          <a data-toggle="collapse" data-parent="#accordion" href="#collapse9">Платные образовательные услуги</a>
        </h4>
      </div>
      <div id="collapse9" class="panel-collapse collapse">
        <div class="panel-body"><div class="post-bodycopy clearfix"><p class="text"><strong>Автономная некоммерческая организация дополнительного профессионального образования «Академия»</strong> (далее — Организация) представляет на платной основе образовательные услуги, предусмотренные Федеральным законом Российской Федерации «Об образовании», в соответствии с Правилами оказания платных образовательных услуг (утв. постановлением Правительства РФ от 15 августа 2013 г. N 706), Уставом Организации, Положением о порядке и условиях предоставления платных образовательных услуг в АНО ДПО «Академия». </p>
<p class="text">Платные образовательные услуги предоставляются с целью обеспечения качественной подготовки рабочих, специалистов и иных лиц в различных сферах деятельности.</p>
<p class="text">Платные образовательные услуги предоставляются только по желанию обучающихся и в соответствии с условиями заключенного договора об оказании образовательных услуг между Организацией и обучающимся либо организацией, направляющей на обучение своих сотрудников (далее — Договор). </p>
<p class="text"><u>Организация оказывает следующие виды образовательных услуг:</u> </p>
<ul>
<li>обучение по программам дополнительного профессионального. образования (повышение квалификации, профессиональная переподготовка) </li>
<li>обучение по программам профессионального обучения рабочих и служащих (профессиональная подготовка, переподготовка, повышение квалификации)</li>
<li>обучение по дополнительным общеразвивающим программам (дополнительное образование детей и взрослых)</li>
</ul>
<p class="text">Осуществление Организацией лицензируемых платных образовательных услуг возможно на основании лицензии Министерства образования и науки Самарской области на данный вид деятельности в соответствии с действующим законодательством РФ. </p>
<p class="text">Организация оказывает образовательные услуги в порядке и в сроки, определенные Уставом Организации, утвержденными учебными планами, условиями заключенного Договора. </p>
<p class="text">Организация заключает договор при наличии возможности оказать запрашиваемую образовательную услугу. </p>
<p class="text">Организация не вправе оказывать предпочтение одному лицу перед другим в отношении заключения договора, кроме случаев, предусмотренных законом и иными нормативными правовыми актами. </p>
<p class="text">Организация организует контроль качества предоставляемых образовательных услуг. </p>
<p class="text">Стоимость оказываемых образовательных услуг в договоре определяется по соглашению в соответствии с тарифами, утвержденными ректором Организации. Оплата за образовательные услуги осуществляется в безналичной форме в сроки, предусмотренные договором. </p>
</div>
</div>
      </div>
    </div>

          <div class="panel panel-default">
      <div class="panel-heading">
        <h4 class="panel-title">
          <a data-toggle="collapse" data-parent="#accordion" href="#collapse10">Финансово-хозяйственная деятельность
</a>
        </h4>
      </div>
      <div id="collapse10" class="panel-collapse collapse">
        <div class="panel-body"><div class="post-bodycopy clearfix">
<p class="text">Финансовое обеспечение образовательной деятельности частной образовательной организации <strong>АНО ДПО «Академия»</strong> не осуществляется за счет бюджетных ассигнований федерального бюджета, бюджетов субъектов РФ, местных бюджетов.</p>
<p class="text">Денежные средства поступают от оказания платных образовательных услуг и расходуются согласно уставным целям.</p>
<p class="text">План финансово-хозяйственной деятельности, требования к его составлению, утверждению и размещению в свободном доступе, согласно подпункту 6 пункта 3.3 статьи 32 Федерального закона от 12 января 1996 г. N 7-ФЗ «О некоммерческих организациях» и подзаконным нормативным актам, в обязательном порядке реализуются только государственными (муниципальными) образовательными организациями.</p>
</div>
</div>
      </div>
    </div>

          <div class="panel panel-default">
      <div class="panel-heading">
        <h4 class="panel-title">
          <a data-toggle="collapse" data-parent="#accordion" href="#collapse11">Вакантные места для приема(перевода)</a>
        </h4>
      </div>
      <div id="collapse11" class="panel-collapse collapse">
        <div class="panel-body"><div class="post-bodycopy clearfix"><p class="text">Вакантные места на обучение в <strong>АНО ДПО «Академия»</strong> имеются всегда, так как образовательные услуги оказываются круглогодично и обучение по каждой образовательной программе проводится по мере комплектования групп.</p>
<p class="text">Зачисление в группы обучения ведется без вступительных испытаний, согласно полученным заявкам физических и юридических лиц с заключением договора об оказании образовательных услуг.</p>
</div>
</div>
      </div>
    </div>








  </div> 



  </div>
</div>
