<?php
namespace frontend\components;

use Yii; 
use yii\bootstrap\ActiveForm;
use yii\helpers\Url;
use \yii\widgets\MaskedInput;
use yii\helpers\Html;
use frontend\models\Forma;
use yii\bootstrap\Modal;



 $controllerl = Yii::$app->controller;
 $homecheker = $controllerl->id.'/'.$controllerl->action->id;



Modal::begin([
    'header' => '<h3>Онлайн заявка на обучение</h3>',
    'options' => ['id' => 'idmodal',],
    'footer' => 'Вы сделали правильный выбор, обратившись в нашу компанию. ',
     'clientOptions' => false,
     'size' => 'modal-sm',


]);
 
echo ' <div class="row"><div class="col-xs-12 modal-md-12">';
echo '<div class="sel text-center"><p id="wrapacket" style="font-weight:700"></p></div><br/>';
/*$model = new Forma();
$form = ActiveForm::begin([
        'method' => 'get',
        'action' => Url::to(['//index.php/site/contact']),
]);*/

if (Yii::$app->session->hasFlash('contactFormSubmitted')): 
        echo '<div id="success" class="alert alert-success">';
        echo 'Спасибо, что обратились к Нам.<br/> Мы ответим Вам в ближайшее время.</div>';
     //   echo '<script>setTimeout(function(){$(\'#idmodal\').modal(\'hide\')}, 3000);</script>';
else: $form = ActiveForm::begin(['id' => 'contact-form',  'action' => '', 
    'validationUrl' => ['/validate'],
'enableClientValidation' => true, 
 'options' => ['enableAjaxValidation'=>true,
'validateOnSubmit'=>true,'validateOnChange' => false, 
        ],
    ]); 
echo  $form->field($model, 'name')->label('Ваше Имя <sup>*</sup>')->textInput(['placeholder'=>"Введите Ваше Имя"]);
//echo $form->field($model, 'phone')->label('Номер телефона')->textInput(['placeholder'=>"+7 (__) ___-____"]);
echo $form->field($model, 'phone')->label('Номер телефона <sup>*</sup>')->widget(MaskedInput::className(),['mask' => '+7 (999) 999-9999'])->textInput(['placeholder'=>"+7 (___) ___-____"]);; 

echo $form->field($model, 'body')->textArea(['rows' => 6])->label('Комментарий'); 
echo $form->field($model, 'fromfield')->hiddenInput(['value'=> '1'])->label(false);
echo $form->field($model, 'pack')->hiddenInput(['value'=> 'Запись онлайн'])->label(false);


echo ' <div class="form-group text-center">';

echo Html::submitButton('Отправить', ['class' => 'btn btn-primary btn-success', 'name' => 'contact-button']) ;
echo ' </div>';
 ActiveForm::end(); 
  endif;
echo '</div></div>';
 
Modal::end();


$this->registerJs(<<<JS
JS
, yii\web\View::POS_READY);

?>
