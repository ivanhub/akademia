<?php
	namespace frontend\components;
		
		
use yii\base\Widget;
use yii\helpers\Html;
use frontend\models\Forma;



class TestWidget extends Widget{
	    public $form;

	public function init(){
		parent::init();
	}
	
	public function run(){
	
 if (! $this->form instanceof CFormModel) {
            throw new RuntimeException('No valid form available.');
        }
        $this->render('TestWidget.php', array('form'=>$this->form));
    }	
	}
}

