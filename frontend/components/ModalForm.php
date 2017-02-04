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
  if ($model->load(Yii::$app->request->post()) && $model->validate() && $model->save()  && $model->sendEmail()) {
Yii::$app->session->setFlash('success', 'Спасибо, что обратились к Нам. Мы ответим Вам в ближайшее время.');

echo $this->render('Header',  ['model' => $model]);
        
    }	else
    {  echo $this->render('Header',  ['model' => $model]); 	}
	
}
}

