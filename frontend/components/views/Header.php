<?php
namespace frontend\components;

use Yii; 
use yii\bootstrap\ActiveForm;
use yii\helpers\Url;
use \yii\widgets\MaskedInput;
use yii\helpers\Html;
use frontend\models\Forma;
use yii\bootstrap\Modal;





Modal::begin([
    'header' => '<h3>Онлайн заявка</h3>',
    'options' => ['id' => 'idmodal',],
    'footer' => 'Вы сделали правильный выбор, <br/>обратившись в нашу компанию. ',
     'clientOptions' => false,
     'size' => 'modal-sm',


]);
 
echo ' <div class="row"><div class="col-xs-12 modal-md-12">';
  echo '<div class="sel text-center"><p>Пакет</p> <p id="wrapacket" style="font-weight:700"></p></div><br/>';
/*$model = new Forma();
$form = ActiveForm::begin([
        'method' => 'get',
        'action' => Url::to(['//index.php/site/contact']),
]);*/

if (Yii::$app->session->hasFlash('contactFormSubmitted')): 
        echo '<div id="success" class="alert alert-success">';
        echo 'Спасибо за обращение к нам. Мы постараемся ответить вам как можно скорее.</div>';
        echo '<script>setTimeout(function(){$(\'#idmodal\').modal(\'hide\')}, 3000);</script>';
else: $form = ActiveForm::begin(['id' => 'contact-form',]); 
echo  $form->field($model, 'name')->label('Ваше Имя <sup>*</sup>')->textInput(['placeholder'=>"Введите Ваше Имя"]);
//echo $form->field($model, 'phone')->label('Номер телефона')->textInput(['placeholder'=>"+7 (__) ___-____"]);
  echo $form->field($model, 'phone')->label('Номер телефона <sup>*</sup>')->widget(MaskedInput::className(),['mask' => '(999) 999-9999']); 

echo $form->field($model, 'body')->textArea(['rows' => 6])->label('Комментарии'); 
echo $form->field($model, 'from')->hiddenInput(['value'=> '1'])->label(false);
echo $form->field($model, 'pack')->hiddenInput(['value'=> 'Запись онлайн'])->label(false);


echo ' <div class="form-group">';

echo Html::submitButton('Отправить', ['class' => 'btn btn-primary btn-success', 'name' => 'contact-button']) ;
echo ' </div>';
 ActiveForm::end(); 
  endif;
echo '</div></div>';
 
Modal::end();



?>
