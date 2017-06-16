<?php
/*
/* @var $this yii\web\View */
/* @var $user common\models\User */
?>
<div class="mailer">

    <p><b>Пакет:</b>     <?= $pack ?>   </p>       
    <p><b>Имя:</b>     <?= $name ?>   </p>
    <p><b>Телефон:</b>     <?= $phone ?>   </p>
    <p><b>Выбранный курс:</b>     <?= $packet ?>   </p>
    <p><b>Комментарий:</b>     <?= $body ?>   </p>       
    <br>
    <?= $total ?>     
    <p></p>
    <p><b>Источник:</b>      <?= $fromUrl ?> </p>
</div>

