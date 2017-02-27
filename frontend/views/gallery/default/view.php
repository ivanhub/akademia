<?php

use kartik\file\FileInput;
use onmotion\gallery\Gallery;
use yii\bootstrap\Collapse;
use yii\bootstrap\Modal;
use yii\helpers\Html;
use yii\helpers\Url;
use yii\widgets\Breadcrumbs;
use onmotion\helpers\Translator;

/* @var $this yii\web\View */
/* @var $model onmotion\gallery\models\Gallery */
/* @var $photos onmotion\gallery\models\GalleryPhoto */

set_time_limit(60);
ini_set('memory_limit', '512M');

$this->params['breadcrumbs'][] = ['label' => 'Галерея', 'url' => ['/gallery']];
$this->params['breadcrumbs'][] = $model->name;

$this->registerJs(<<<JS
$('#preloader').show();
$('body').css('overflow', 'hidden');
window.onload = function() {
	$('body').css('overflow', 'auto');
    $('#preloader').hide();
  };
   $("[data-toggle='tooltip']").tooltip();
JS
);
            echo Html::beginTag('div', ['class' => 'gallery-view']);
            echo \yii\bootstrap\Collapse::widget([
                'items' => [
                    [
                        'label' => $model->name . ' (' . count((array)$photos) . ' фото)',
                        'content' => !empty($model->descr) ? $model->descr : ''
                    ]
                ],
                'options' => [
                    'class' => 'header-collapse'
                ]
            ]);
            $galleryName = $model->name;

            if (!empty($photos)) {
                foreach ($photos as $photo) {
                    $items[] =
                        [
                            'original' => '/img/gallery/' . Translator::rus2translit($galleryName) . '/' . $photo->name,
                            'thumbnail' => '/img/gallery/' . Translator::rus2translit($galleryName) . '/thumb/' . $photo->name,
                            'options' => [
                                'title' => $galleryName,
                                'data-id' => $photo->photo_id,
                            ],
                        ];
                };
            } else {
                echo 'Нет загруженных фото...';
            }
            ?>
            <div class="row">
                <div class="col-xs-1"></div>
                <div class="col-xs-10 text-center">
                    <?php
                    if (!empty($items))
                        echo Gallery::widget([
                            'id' => 'gallery-links',
                            'items' => $items,
                            'pluginOptions' => [
                                'slideshowInterval' => 2000,
                                'transitionSpeed' => 200,
                                ],
                        ]);
                    ?>
                </div>
                <div class="col-xs-1"></div>
            </div>
     <div id="w1" class="download-collapse panel-group collapse in" aria-expanded="true">
      <div class="panel panel-default"><div class="panel-heading"><h4 class="panel-title"> Ждём Вас на наших курсах! 
      </h4></div>
      <div id="w1-collapse1" class="panel-collapse collapse"><div class="panel-body"></div>
      </div></div>
      </div> 

      <!-- Входим в ТОП-20 автошкол по рейтингу ГИБДД. -->
            <?php

echo Html::endTag('div');



echo Html::beginTag('div', ['class' => 'preloader']);
echo Html::tag('div', Html::tag('span', '100', ['class' => 'sr-only']), ['class'=>"progress-bar progress-bar-striped active", 'role'=>"progressbar",
    'aria-valuenow'=>"100", 'aria-valuemin'=>"0", 'aria-valuemax'=>"100", 'style'=>"width:100%"]);
echo Html::endTag('div');


?>