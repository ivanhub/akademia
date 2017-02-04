<?php

/* @var $this yii\web\View */
/* @var $form yii\bootstrap\ActiveForm */
/* @var $model \frontend\models\ContactForm */

use yii\helpers\Html;
use yii\bootstrap\ActiveForm;
use yii\captcha\Captcha;

?>
<div class="site-contact text-center">
    <h2>Заявка онлайн </h2>
    <div class="row text-center">
        <div class="col-lg-offset-4 col-lg-4">
         <?php $form = ActiveForm::begin(['id' => 'contact-form']); ?>
                <?= $form->field($model, 'name')->label(''); ?>
                <?= $form->field($model, 'phone')->label(''); ?>
           <!--     $form->field($model, 'subject') ?> -->
                <?= $form->field($model, 'body')->textArea(['rows' => 6])->label(''); ?>
                <?= $form->field($model, 'from')->hiddenInput(['value'=> '7'])->label(false);?>

                <div class="form-group">
                    <?= Html::submitButton('Submit', ['class' => 'btn btn-primary', 'name' => 'contact-button']) ?>
                </div>
            <?php ActiveForm::end(); ?>

        </div>
    </div>

</div>
