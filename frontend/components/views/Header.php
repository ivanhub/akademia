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
    'header' => '<h3>Онлайн заявка на обучение</h3>',
    'options' => ['id' => 'idmodal',],
    'footer' => 'Вы сделали правильный выбор, обратившись в нашу компанию. ',
     'clientOptions' => false,
     'size' => 'modal-sm',


]);
 
echo ' <div class="row"><div class="col-xs-12 modal-md-12">';
echo '<div class="sel text-center"><p id="wrapacket" style="font-weight:700"></p></div>';
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


 $items = [
        'Автомотошкола' => [
            'Автомотошкола / Категория А' => 'Категория А',
            'Автомотошкола / Категория B' => 'Категория B',
            'Автомотошкола / Категория A+B' => 'Категория A+B',
        ],
        'Самоходная техника' => [
            'Сам. техника / Категория А' => 'Категория А',
            'Сам. техника / Категория B' => 'Категория B',
            'Сам. техника / Категория C' => 'Категория C',
            'Сам. техника / Категория D' => 'Категория D',
            'Сам. техника / Категория E' => 'Категория E',
        ],
        'Судовождение' => [
            'Судовождение / Судоводитель гидроцикла' => 'Судоводитель гидроцикла',
            'Судовождение / Судоводитель маломерного судна' => 'Судоводитель маломерного судна',
        ],
         'Защитное вождение' => [
            'Курс по программе "Защитное вождение"' => 'Курс по программе "Защитное вождение"',
        ],
        'Дополнительные услуги' => [
            'Курс "Спецсигналы"' => 'Курс "Спецсигналы"',
            'Курс "ДОПОГ"' => 'Курс "ДОПОГ"',
            'Обучение инструкторов' => 'Обучение инструкторов',
            'Аренда автодрома' => 'Аренда автодрома',            
            'Индивидуальные занятия с инструктором' => 'Индивидуальные занятия с инструктором',            
        ],
    ];
    $params = [
        'prompt' => 'Выберите курс обучения...',
    ];
echo $form->field($model, 'packet')->label('Курс обучения: <sup>*</sup>')->dropDownList($items, $params);
 
echo $form->field($model, 'body')->textArea(['maxlength' => 1000,'rows' => 6])->label('Комментарий'); 
echo $form->field($model, 'fromfield')->hiddenInput(['value'=> '1'])->label(false);
echo $form->field($model, 'fromUrl')->hiddenInput(['value'=> ''])->label(false);
echo $form->field($model, 'total')->hiddenInput(['value'=> ''])->label(false);
echo $form->field($model, 'pack')->hiddenInput(['value'=> ''])->label(false);
echo $form->field($model, 'info')->textArea(['value'=> '', 'class' => 'special'])->label(false);

echo ' <div class="form-group text-center form-group-up">';
echo '<p style="font-size:80%">Нажимая на кнопку "Отправить", я соглашаюсь с условиями <a href="/privacy" style="color:#3c3c89" target="_blank">политики конфиденциальности</a></p>';
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
