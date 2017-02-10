<?php

/* @var $this yii\web\View */
/* @var $name string */
/* @var $message string */
/* @var $exception Exception */

use yii\helpers\Html;

$this->title = $name;

/*
 if ($exception->statusCode == 404) { 

          $errorMessage ='Страница не найдена:  404';
           }else { 
          $errorMessage=$exception->statusCode; };
          */
?>
<div class="site-error">
<br/><br/><br/><br/><br/>
    <h1><?= Html::encode($this->title) ?></h1>
<br/><br/>
    <div class="alert alert-danger">
    <?php if ($exception->statusCode == 404) { 
?>
          <h2 class="text-center"> Страница не найдена:  404</h2>
          <?php }else { ?>
<h2 class="text-center"> Страница не найдена:  <?= nl2br(Html::encode($exception->statusCode)) ?>.</h2>
          <?php }; ?>
          
    </div>

    <p>
<br/><br/><br/>


    </p>

</div>





