<?php

/* @var $this yii\web\View */
/* @var $form yii\bootstrap\ActiveForm */
/* @var $model \frontend\models\ContactForm */

use yii\helpers\Html;
use yii\bootstrap\ActiveForm;
use yii\captcha\Captcha;
use phpnt\yandexMap\YandexMaps;

$this->title = 'Запись на обучение';
$this->params['breadcrumbs'][] = [
                                   /* 'template' => "<li><b>{link}</b></li>\n", */
                                    'label' => 'Автомотошкола', 
                                    'url' => ['/automotoschool']
                                 ];
$this->params['breadcrumbs'][] = $this->title;
?>






<!-- <?= Html::encode($this->title) ?> --> 
<div class="site-automotoschool  siteblock">
   

 <div class="row">
<div class="col-sm-12 col-md-3">

<div class="menu">
   <a  href="#"> <div class="menuItem uno"><span>Запись на обучение</span></div></a>
    <a  href="/raspisanie"><div class="menuItem dos"><span>Расписание занятий</span></div></a>
    <a  href="/our-advantages"><div class="menuItem tres"><span>Наши преимущества</span></div></a>
    <a  href="/dop-uslugi"><div class="menuItem cuatro"><span>Доп. услуги</span></div></a>
 </div>



</div>

<div class="col-md-9 col-sm-12">
<section class="incoming">
<h1 class="text-center">Условия обучения</h1>
<p><b>Для курсантов по категории "B":</b></p>
<h5>Перечень документов</h5>
<p>1. Фотографии (3х4) - 2 шт.</p>
<p>2. Ксерокопия паспорта (личные данные и все страницы с пропиской).</p>
<p>3. Медицинская справка и ее ксерокопия.</p>
<p>4. Ксерокопия свидетельства о рождении.</p>
<p>5. Ксерокопия документа, подтверждающего изменение фамилии, имени и отчества.</p>
<br/>
<p><b>Для курсантов, имующих временную прописку в Самаре:</b></p>
<p>1. Оригинал и ксерокопия свидетельства о временной регистрации.</p>
<p>2. Справка из Самарского адресного бюро.</p>
<p>3. Справка из ГИБДД с места постоянной прописки:</p>
<p>- о том, что водительсткое удостоверени ене выдавалось,</p>
<p>- о том, что нет задолженностей перед ГИБДД.</p>
<p>(может быть две отдельные справки).</p>
<p></p>
<p>Если медицинскую комиссию проходил(а) по месту постоянной регистрации, то необходимо по месту временной регистрации пройти </p>
<p>- психиатра,</p>
<p>-нарколога.</p>
<p></p>
 
 <h4 class="text-center">Этапы обучения:</h4>

 <div class="panel-group" id="accordion">
    <div class="panel panel-default">
      <div class="panel-heading">
        <h4 class="panel-title">
          <a data-toggle="collapse" data-parent="#accordion" href="#collapse1">I этап - Запись на обучение, заключение договора, оплата услуг.</a>
        </h4>
      </div>
      <div id="collapse1" class="panel-collapse collapse in">
        <div class="panel-body"><p>На обучение водителей транспортных средств категории «А» принимаются лица в возрасте старше 16 лет, категории «В» - старше 17 лет.  </p>
<p class="text-center" style="font-weight:700;">Лица, не достигшие 18 лет принимаются на экзамен в ГИБДД с согласия обоих родителей.</p>
</div>
      </div>
    </div>
    <div class="panel panel-default">
      <div class="panel-heading">
        <h4 class="panel-title">
          <a data-toggle="collapse" data-parent="#accordion" href="#collapse2">II этап - Прохождение медицинской комиссии.</a>
        </h4>
      </div>
      <div id="collapse2" class="panel-collapse collapse">
        <div class="panel-body"><p>Прежде чем начать обучение в автошколе, необходимо пройти медицинскую комиссию, получить справку от нарколога и психиатра. Медицинского заключения требуется для подтверждения отсутствия противопоказаний к управлению ТС. Медсправка по форме № 003-В/у, утв. Приказом Минтранса РФ от 15.06.2015 г. № 344 н.</p>

<p class="text-center" style="font-weight:700;">Для удобства наших учеников мы организовываем медицинскую комиссию в Автошколе! * ООО «АсокмаМед» лицензия № ЛО-63-01-002110 от 31.07.2013 г.</p>
</div>
      </div>
    </div>
    <div class="panel panel-default">
      <div class="panel-heading">
        <h4 class="panel-title">
          <a data-toggle="collapse" data-parent="#accordion" href="#collapse3">III этап - Организационное собрание.</a>
        </h4>
      </div>
      <div id="collapse3" class="panel-collapse collapse">
        <div class="panel-body"><p>Ознакомительное занятие для разъяснения правил обучения в автошколе и допуска к практическим занятиям. Сбор согласий на обработку персональных данных. На нем Вы подробно ознакомитесь с условиями обучения, выбираете удобное для Вас время проведения занятий по вождению и распределяетесь на вождение к мастеру производственного обучения.</p>
<p style="font-style:italic"><b>Раздача бесплатной литературы !!! Всем слушателям выдаются ПДД и Экзаменационные билеты «А» и «В».</b></p>
</div>
      </div>
    </div>
        <div class="panel panel-default">
      <div class="panel-heading">
        <h4 class="panel-title">
          <a data-toggle="collapse" data-parent="#accordion" href="#collapse4">IV этап - Обучение вождению на тренажере.</a>
        </h4>
      </div>
      <div id="collapse4" class="panel-collapse collapse">
        <div class="panel-body"><p>Занятия на автотренажере в нашей автошколе являются обязательными в программе обучения. Обучить курсантов автошкол базовым навыкам управления автомобилем с механической КПП позволяет виртуальное вождение на тренажере. </p>
<p>Преимущества виртуальных автотренажеров:</p>
<ul class="preimul2 preimul">
 <li>•  Объемный окружающий мир: дорога, автомобили, здания …</li>
 <li>•  Возможность регулировки интенсивности движения (в потоке, в города, на трассе).</li>
 <li>•  Познакомиться с органами управления (руль, педали…)</li>
 <li>•  Первоначальные навыки посадки за руль, пользование органами управления, пуск двигателя, начало движения, переключение передач.</li>
 <li>•  Подсказчик, сообщающий о любой ошибке.</li>
 </ul></div>
      </div>
    </div>
        <div class="panel panel-default">
      <div class="panel-heading">
        <h4 class="panel-title">
          <a data-toggle="collapse" data-parent="#accordion" href="#collapse5">V этап - Обучение вождению на автодроме.</a>
        </h4>
      </div>
      <div id="collapse5" class="panel-collapse collapse">
        <div class="panel-body"><p>Практические занятия включают поездку на автодроме с различными препятствиями и импровизированными парковками, гаражами и эстакадами. На первом занятии в реальном автомобиле инструктор по вождению проведет с Вами инструктаж, познакомит с органами управления автомобиля, составит график посещения занятий с учетом Ваших пожеланий. График по вождению составляется еженедельно, при этом за курсантом закрепляется определенное время вождения.</p>
<p>Во время проведения занятий на закрытой площадке Вам в последовательности разъяснят этапы выполнения каждого упражнения, необходимого для сдачи экзамена. Именно такие особенности позволят вам без особых сложностей получить вполне качественные навыки и знания. Не следует пропускать занятия по практике вождения. Это важнейшая часть обучения в автошколе, и без полноценного ее прохождения Вам будет очень сложно достичь действительно качественных навыков вождения.</p>
<p>Хочется так же отметить, что обучение проходит строго индивидуально! Поэтому, если Ваши навыки после первого этапа вождения и контрольного занятия не позволяют выехать в город, то инструктор вместе с Вами будет разбирать Ваши ошибки до полного усвоения техники вождения автомобилем на учебной площадке.</p>
</div>
      </div>
    </div>
        <div class="panel panel-default">
      <div class="panel-heading">
        <h4 class="panel-title">
          <a data-toggle="collapse" data-parent="#accordion" href="#collapse6">VI этап - Вождение в условиях реального городского движения по согласованному с ГИБДД маршруту.</a>
        </h4>
      </div>
      <div id="collapse6" class="panel-collapse collapse">
        <div class="panel-body"><p><b>VI этап</b>  -  Вождение в условиях реального городского движения по согласованному с ГИБДД маршруту.</p>
<p>Вождение в условиях реального дорожного движения – самый трудный (и по времени и по сложности) элемент подготовки водителя. Экзамен по вождению в городе также является самым сложным.</p>
<p>Водители – инструкторы научат Вас первоклассному вождению, помогут максимально избежать критических ситуаций на дорогах, отработать практические навыки управления автомобилем, для успешной сдачи экзамена в ГИБДД.</p>
<p> Движение проходит по маршруту, утвержденному руководителем автошколы. Наши маршруты подготовлены с учетом программы подготовки и транспортной загруженности города.</p>
</div>
      </div>
    </div>
        <div class="panel panel-default">
      <div class="panel-heading">
        <h4 class="panel-title">
          <a data-toggle="collapse" data-parent="#accordion" href="#collapse7">VII этап - Квалификационный экзамен.</a>
        </h4>
      </div>
      <div id="collapse7" class="panel-collapse collapse">
        <div class="panel-body"><p>Внутренний экзамен в автошколе максимально приближен к сдачи экзамена в ГИБДД на получение водительского удостоверения. </p>
</div>
      </div>
    </div>
  </div> 



  </section>
<br/>

</div>
</div>

</div>

