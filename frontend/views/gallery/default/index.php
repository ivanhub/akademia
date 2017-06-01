<?php
use yii\helpers\Url;
use yii\helpers\Html;
use yii\bootstrap\Modal;
use yii\widgets\Breadcrumbs;



/* @var $this yii\web\View */
/* @var $searchModel onmotion\gallery\models\GallerySearch */
/* @var $dataProvider yii\data\ActiveDataProvider */

$dataProvider->pagination->pageSize = 20;

$title = 'Галерея';
$this->title = title(Yii::$app->params['title'].$title);

$this->params['breadcrumbs'][] = $title;


$this->registerMetaTag([
    'name' => 'description',
    'content' => 'Галерея автошколы "Росавтоакадемия". Фотографии учебных площадок, автодрома, инструкторов, учебных классов, автотренажера. Обучение вождению по всем категориям. Первая автошкола Самары! Звоните!',
]);
$this->registerMetaTag([
    'name' => 'keywords',
    'content' => 'галерея автошколы, фотографии, инструктора, автодром, площадка, учебные классы, фотки, фото, автошкола, мотошкола, росавтоакадемия, центральная автошкола Самары, обучение вождению, услуги автошколы, школа вождения, права, рос автоакадемия,  права на автомобиль, главная автошкола Самары, самоходная техника, гидроцикл'
    ]);


?>
<h1 style="text-align:center">Галерея </h1>
<div class="gallery-index">

            <?php
            
    echo \yii\widgets\ListView::widget([
        'id' => 'gallery-listview',
        'dataProvider' => $dataProvider,
        'layout' => "{items}\n{pager}",
//\n{summary}
        'itemView' => function ($model) {
            return $this->render('galleryItem',['model' => $model]);
        },
        'pager' => [
            'firstPageLabel' => 'First',
            'lastPageLabel' => 'Last',
            'nextPageLabel' => '>',
            'prevPageLabel' => '<',
        ],
        
    ]);

    ?>
    </div>

<?php
Modal::begin([
    "id" => "gallery-modal",
    'header' => '<h4 class="modal-title"></h4>',
    "footer" =>
        Html::a('Close', ['#'],
            ['title' => 'Cancel', 'class' => 'btn btn-default pull-left', 'data-dismiss' => "modal"]) .
        Html::a('ОК', Url::to('#'),
            ['title' => '', 'class' => 'btn btn-primary', 'id' => 'modal-confirm-btn']),
]);

echo Html::beginTag('div', ['class' => 'preloader']);
echo Html::tag('div', Html::tag('span', '100', ['class' => 'sr-only']), ['class'=>"progress-bar progress-bar-striped active", 'role'=>"progressbar",
  'aria-valuenow'=>"100", 'aria-valuemin'=>"0", 'aria-valuemax'=>"100", 'style'=>"width:100%"]);
echo Html::endTag('div');
Modal::end(); ?>
