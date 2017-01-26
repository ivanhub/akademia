<?
	namespace frontend\component;
	
	use yii\base\Component;
	
class Common extends Component {
	
	public static function sendMail($email,$subject,$body,$name=''){
	Yii::$app->mail->compose()
     ->setFrom([ \Yii::$app->params['adminEmail']  => \Yii::$app->name ])
     ->setTo([$form->email => $name])
     ->setSubject($subject)
     ->setTextBody($body)
     ->send();
}
}

class vars extends CApplicationComponent {
    public $your_variable = Yii::$app->mobileDetect->isDesktop();
}


//class Controller extends CController {
//  public $is_main_front_page;
//  public function setMainFrontPage(){ $this->is_main_front_page = true; }
//  public function getIsMainFrontPage(){ returns $this->is_main_front_page==true; }
//}
