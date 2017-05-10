NOT WORKING <?php
	namespace frontend\components;
		
		
use yii\base\Widget;
use yii\helpers\Html;
use frontend\models\Forma;



class ModalWidget extends Widget{
	
	public function init(){
		parent::init();
	}
	
	public function run(){
	//	return //Html::encode($this->message);
	 $model = new Forma();
	 //  if ($model->load(Yii::$app->request->post()) && $model->validate() && $model->saveform() && $model->sendEmail()) {
//Yii::$app->session->setFlash('success', 'Спасибо, что обратились к Нам. Мы ответим Вам в ближайшее время.');

        //    return $this->refresh();
//}

		//else { 
			return $this -> render('Modal', [ 'model' => $model]);
	//}
		
	
	}
}

