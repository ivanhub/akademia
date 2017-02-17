<?php
/**
 * Created by PhpStorm.
 * User: kozhevnikov
 * Date: 17.03.2016
 * Time: 13:32
 */

use yii\helpers\Html;
use yii\helpers\Url;
use onmotion\helpers\Translator;

$date = new DateTime($model->date);

?>

<div class="gallery-item">
    <div class="image">

        <a class="image-wrap" href="<?= Url::toRoute(["view", 'id'=>$model->gallery_id]) ?>">
            <?php
            foreach($model->galleryPhotos as $prevPhoto){
                echo \yii\helpers\Html::img('/img/gallery/' . Translator::rus2translit($model->name) . '/thumb/' . $prevPhoto->name);
            };
            ?>
        </a>
    </div>
    <div class="name">
        <span><?= $model->name ?></span>
    </div>
</div>
