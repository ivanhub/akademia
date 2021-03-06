<?php

/* @var $this yii\web\View */
/* @var $form yii\bootstrap\ActiveForm */
/* @var $model \frontend\models\ContactForm */

use yii\helpers\Html;
//use yii\bootstrap\ActiveForm;
//use yii\captcha\Captcha;

use branchonline\lightbox\Lightbox;


$title = 'Самоходная техника';
$this->title = title($title);


$this->registerMetaTag(['name' => 'description',
    'content' => 'Обучение вождению на квадроцике и снегоходе. Права на самоходные машины: трактор, погрузчик, гусечные и колесные машины и т.д. Собственный автодром, опытные инструктора, экстремальное и защитное вождение. Доступные цены. Беспроцентная рассрочка! Одна из лучших автошкол в Самаре. Звоните!',
]);

$this->registerMetaTag(['name' => 'keywords',
    'content' => 'права на квадроцикл, права на снегоход, трактор, погрузчик, каток, квадроцикл, экскаватор, права, спецтехнику,
     самоходная техника, самоходные машины, гусеничные машины, колесные машины, внедорожные транспортные средства, 
     мототранспортные, получить права, росавтоакадемия, обучению вождению, школа вождения, вождение, автошкола, обучение, категория A, категория B, категория C, категория D, категория E',
]);



$this->params['breadcrumbs'][] = $title;
?>



<div class="site-distance  siteblock">
   

 <div class="row">


<section class="">
    

    <div class="post post-1771  type-page status-publish hentry odd" id="post-1771">


<div class="post-headline text-center">     <h1><?= Html::encode($title) ?></h1>
        </div>

<div class="post-bodycopy clearfix">
<p class="text"><b>Учебный центр "Росавтоакадемия"</b> предлагаем Вам пройти подготовку для получения прав тракториста-машиниста на управление снегоходами,
 квадроциклами (кат. А1), управление погрузчиками, экскаваторами, автогрейдерами, тракторами и т.д (кат. В, С, D и Е),
  а также получить свидетельство на управление иностранной самоходной техникой.
</p>
<p class="text">Оставьте заявку на сайте, мы свяжемся с Вами в самое ближайшее время и бесплатно проконсультируем по всем интересующим вопросам.</p>

<p class="text"><strong>Cамоходные машины</strong> - это тракторы, самоходные дорожно-строительные машины и другие наземные безрельсовые механические транспортные средства с независимым приводом, имеющие двигатель внутреннего сгорания объемом <span style="text-decoration: underline;">свыше 50 куб</span>. сантиметров или электродвигатель максимальной мощностью <span style="text-decoration: underline;">более 4 кВт</span> (за исключением предназначенных для движения по автомобильным дорогам общего пользования автомототранспортных средств, имеющих максимальную конструктивную скорость <span style="text-decoration: underline;">более 50 км/час</span>, и боевой самоходной техники Вооруженных Сил Российской Федерации, других войск, воинских формирований и органов, выполняющих задачи в области обороны и безопасности государства).</p>
<br/>
<table style="width: 100%;" border="2" width="100%" bordercolor="#badbb3">
<tbody>
<tr class="alt">
<td colspan="4" class="text-center" style="font-weight:bold; font-size:16px">Автомототранспортные средства, не предназначенные для движения по автомобильным дорогам общего пользования либо имеющие максимальную конструктивную скорость 50 км/ч и менее:</td>
</tr>
<tr>
<td class="td">А</td>
<td>AI — внедорожные мототранспортные средства — снегоходы, квадроциклы (дистанционное обучение).</td>
<td align="center">
<p style="text-align: center;"><img src="http://samarapb.ru/documents/avto/a_1.png" alt="Внедорожные мототранспортные средства. Школа вождения г. Самара" title="Внедорожные мототранспортные средства" width="100" height="80" ></p>
</td>
</tr>
<tr>
<td class="td">B</td>
<td>Гусеничные и колесные машины, двигатель мощностью до 25,7 кВт.</td>
<td align="center">
<p style="text-align: center;"><img src="../images/pics/cat.b.png" width="100" height="80" alt="Гусеничные и колесные машины. Школа вождения г. Самара" title="Гусеничные и колесные машины"></p>
</td>
</tr>
<tr class="">
<td class="td">С</td>
<td>Колесные машины с двигателем мощностью от 25,7 до 110,3 кВт.</td>
<td align="center">
<p style="text-align: center;"><img src="http://samarapb.ru/documents/avto/c.png"  width="100" height="80" alt="Колесные машины с двигателем мощностью от 25,7 до 110,3 кВт. Школа вождения г. Самара" title="Колесные машины с двигателем мощностью от 25,7 до 110,3 кВт."></p>
</td>
</tr>
<tr>
<td class="td">D</td>
<td>Колесные машины с двигателем мощностью свыше 110,3 кВт.</td>
<td align="center">
<p style="text-align: center;"><img src="http://samarapb.ru/documents/avto/d.png" width="100" height="80" alt="Колесные машины с двигателем мощностью свыше 110,3 кВт. Школа вождения г. Самара" title="Колесные машины с двигателем мощностью свыше 110,3 кВт."></p>
</td>
</tr>
<tr class="alt">
<td class="td">E</td>
<td>Гусеничные машины с двигателем мощностью свыше 25,7 кВт.</td>
<td align="center">
<p style="text-align: center;"><img src="http://samarapb.ru/documents/avto/e.png" width="100" height="80" alt="Гусеничные машины. Школа вождения г. Самара" title="Гусеничные машины"></p>
</td>
</tr>
</tbody>
</table>
<br/><br/>
<div class="row">
<div class="col-xs-4 text-center">
<div id='pics_container  text-center'>
<?php echo  Lightbox::widget([
    'files' => [
        [
            'thumb' => '../images/thmb/yd-th.jpg',
            'original' => 'http://samarapb.ru/documents/avto/yd.png',
            'title' => 'Удостоверение тракториста',
             'thumbOptions' => [
            'class' => 'img-responsive', 'alt' => 'Удостоверение тракториста. Школа вождения «Росавтоакадемия»', 'title' => "Удостоверение тракториста"  ]
      
        ],
        
    ]
]); ?>
</div>
</div>
<div class="col-xs-4 text-center">
<div id='pics_container text-center'>

    <?php echo  Lightbox::widget([
    'files' => [
  
        [
            'thumb' => '../images/thmb/vr-th.jpg',
            'original' => 'http://samarapb.ru/documents/avto/vr.png',
            'title' => 'Временное разрешение',
             'thumbOptions' => [
            'class' => 'img-responsive2', 'alt' => 'Временное разрешение. Школа вождения «Росавтоакадемия»', 'title' => "Временное разрешение"   ]
        ],
    ]
]); ?>
</div>
</div>

<div class="col-xs-4 text-center">
<div id='pics_container text-center'>

    <?php echo  Lightbox::widget([
    'files' => [
  
        [
            'thumb' => '../images/thmb/sv-th.jpg',
            'original' => 'http://samarapb.ru/documents/avto/sv.png',
            'title' => 'Свидетельство о регистрации машины',
             'thumbOptions' => [
            'class' => 'img-responsive2', 'alt' => 'Свидетельство о регистрации машины. Школа вождения «Росавтоакадемия»', 'title' => "Свидетельство о регистрации машины"   ]
        ],
    ]
]); ?>
</div>
</div>

</div>
<br/><br/>
<p class="text">В графе удостоверения тракториста-машиниста (тракториста) «Особые отметки» производятся информационные, ограничительные и разрешительные отметки.</p>
<p class="text">Удостоверение тракториста-машиниста (тракториста) выдается <strong>на 10 лет</strong>.</p>
<h5>
<p class="text">К сдаче экзаменов на право управления самоходными машинами допускаются лица:</p>
</h5>
<ol>
<li> Достигшие возраста:
<ul>
<li>16 лет — для самоходных машин категории «А I».</li>
<li>17 лет — для самоходных машин категорий «B», «С», «Е».</li>
<li>18 лет — для самоходных машин категории «D».</li>
</ul>
</li>
<li> Прошедшие медицинское освидетельствование и имеющие медицинское заключение установленного образца о допуске к управлению самоходными машинами соответствующих категорий (далее  — медицинское заключение).</li>
<li> Прошедшие профессиональную подготовку по профессиям (специальностям), связанным с управлением самоходными машинами установленных категорий. </li>
</ol>

<br/>
<h5 style="">Для записи на обучение Вам необходимо предоставить следующий пакет документов:
</h5>
<ul type="circle" class="gal3">
<li>Заявление.</li>
<li>Паспорт.</li>
<li>Медицинское заключение <b>на управление самоходной техникой.</b></li>
<li>Документ о прохождении обучения.</li>
<li>СНИЛС - страховой номер индивидуального лицевого счёта.</li>
<li>Удостоверение тракториста-машиниста (тракториста) или удостоверение другого вида на право управления самоходными машинами, если оно ранее выдавалось.</li>
<li>Фотографии, за исключением случаев автоматизированного изготовления удостоверений в органах гостехнадзора.</li>
<li>Водительское удостоверение, при наличии.</li>
<li>Документ, подтверждающий уплату государственной пошлины за выдачу удостоверения тракториста-машиниста (тракториста).</li>
<li>Зарегистрироваться  на портале гос. услуг для дальнейшей подачи заявки на экзамен в гостехнадзор.</li>
</ul>





  
     
        <div class="row ">

            <div class="col-md-offset-4 col-md-4 col-sm-offset-3 col-sm-6 col-xs-offset-1 col-xs-10">
                    <a data-toggle="collapse" data-parent="#accordion" href="#collapse1" title="Нажмите, чтобы раскрыть список">

                <div class="style5  exam">
                <div class="col-xs-3"><span class=" fa fa-graduation-cap fa-2x"></span></div>
                <div class="col-xs-9"><div class="advpr2"><h5 style="">Порядок сдачи экзаменов</h5></div></div>
                </div>
                            </a>

            </div>

        </div>
   
      <div id="collapse1" class="panel-collapse collapse">
        <div class="panel-body"><div class="post-bodycopy clearfix">

<p class="text">Прием экзаменов и выдача удостоверения тракториста-машиниста (тракториста) осуществляются органами гостехнадзора по зарегистрированному месту жительства гражданина (месту пребывания) на территории субъекта Российской Федерации.</p>
<p><strong><em>Экзамены сдаются в следующей последовательности:</em></strong></p>
<ol>
<li>По безопасной эксплуатации самоходных машин — теория.</li>
<li>По эксплуатации машин и оборудования  — теория.</li>
<li>По правилам дорожного движения — теория.</li>
<li>Комплексный (по практическим навыкам вождения, безопасной эксплуатации машин и правилам дорожного движения) — практика.</li>
</ol>
<p><strong><em>На теоретическом экзамене проверяется знание кандидатом:</em></strong></p>
<ul type="circle" class="gal3">
<li>Правил безопасной эксплуатации самоходных машин и основ управления ими.</li>
<li>Правил эксплуатации машин и оборудования и основ управления ими.</li>
<li>Законодательства Российской Федерации в части, касающейся обеспечения безопасности жизни, здоровья людей и имущества, охраны окружающей среды при эксплуатации самоходных машин, а также уголовной, административной и иной ответственности при управлении самоходными машинами.</li>
<li>Факторов, способствующих возникновению аварий, несчастных случаев и дорожно-транспортных происшествий.</li>
<li>Элементов конструкций самоходных машин, состояние которых влияет на безопасность жизни, здоровья людей и имущества, охрану окружающей среды.</li>
<li>Методов оказания доврачебной медицинской помощи лицам, пострадавшим при авариях, несчастных случаях и в дорожно-транспортных происшествиях.</li>
<li>Правил дорожного движения Российской Федерации и ответственности за их нарушения.</li>
</ul>
</ol>
<p><strong><em>На практическом экзамене проверяется умение выполнять следующие маневры:</em></strong></p>
<ul type="circle" class="gal3">
<li>Начало движения с места на подъеме.</li>
<li>Разворот при ограниченной ширине территории при одноразовом включении передачи.</li>
<li>Постановка самоходной машины в бокс задним ходом.</li>
<li>Постановка самоходной машины в агрегате с прицепом в бокс задним ходом (кроме категорий «А»).</li>
<li>Агрегатирование самоходной машины с навесной машиной (кроме категорий «А»).</li>
<li>Агрегатирование самоходной машины с прицепом (прицепной машиной).</li>
<li>Торможение и остановка на различных скоростях, включая экстренную остановку.</li>
</ul>

</div>
</div>
      </div>







</div>
</div>
</section>
</div>
</div>