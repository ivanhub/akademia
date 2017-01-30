<?php

/* @var $this yii\web\View */
/* @var $name string */
/* @var $message string */
/* @var $exception Exception */

use yii\helpers\Html;

$this->title = $name;
?>
<div class="site-error">
<br/><br/><br/><br/><br/>
    <h1><?= Html::encode($this->title) ?></h1>
<br/><br/>
    <div class="alert alert-danger">
          <h2 class="text-center"> Страница не найдена: 404.</h2>

      <!--   <?= nl2br(Html::encode($message)) ?> -->
    </div>

    <p>
<br/><br/><br/>


    </p>

</div>
