<?php
	namespace frontend\components;
		
use Yii;
		
use yii\base\Widget;
use yii\helpers\Html;
use frontend\models\Forma;
use yii\web\View;



class ModalForm extends Widget{
	    public $model;

	public function init(){
		parent::init();
		$view = Yii::$app->getView();
	}
	
	public function run(){
		$model = new Forma();

  if ($model->load(Yii::$app->request->post()) && $model->checkSpam() && $model->validate() && $model->save() && $model->sendEmail() ) {
//Yii::$app->session->setFlash('success', 'Спасибо, что обратились к Нам. Мы ответим Вам в ближайшее время.');
       //Yii::$app->session->setFlash('contactFormSubmitted');

       //     $model->refresh();

    
Yii::$app->getSession()->setFlash('success', [
     'type' => 'custom',
     'duration' => 30000000,
     'icon' => 'fa fa-envelope',
     'message' => 'Спасибо, что обратились к Нам. Мы ответим Вам в ближайшее время.',
     'title' => 'Сообщение отправлено!',
     'positonY' => 'top',
     'positonX' => 'center',
     'pluginOptions' => [
        'showProgressbar' => true, 
        'icon_type'=>'image',
        'placement' => [
            'from' => 'top',
            'align' => 'right',
        ],
 ],
 ]);
unset($_POST['Forma']);
unset($GLOBALS['Forma']);

$success=true;
return json_encode($success);
        
    }	else
    {  return $this->render('Header',  ['model' => $model]); 	}
	
}
}

