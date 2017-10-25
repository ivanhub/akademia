<?php
namespace frontend\controllers;

use Yii;
use yii\base\InvalidParamException;
use yii\web\BadRequestHttpException;
use yii\web\Controller;
use yii\filters\VerbFilter;
use yii\filters\AccessControl;
use frontend\models\ContactForm;
use frontend\models\Forma;
use frontend\models\Forma2;
use yii\helpers\Html;
use kartik\widgets\Growl;



class SiteController extends Controller
{
   //   public $layout = 'main';

    public function actions()
    {
        return [
            'error' => [
                'class' => 'yii\web\ErrorAction',
            ],
            'captcha' => [
                'class' => 'yii\captcha\CaptchaAction',
                'fixedVerifyCode' => YII_ENV_TEST ? 'testme' : null,
            ],
        ];
    }

  //    public function actionTestMailer() {
   //     \app\models\User::findByUsername('admin')->sendMail('example', 'Пример письма', ['paramExample' => '123']);
   // }


    public function actionIndex()
    {

        
     //$this->getView()->title = 'Мой заголовок';
        return $this->render('index', compact('home'));
    }

    public function actionDistance()
    {
         
        return $this->render('distance');
    }

  public function actionSudovozhdenie()
    {
         
        return $this->render('sudovozhdenie');
    }

     public function actionDopog() { return $this->render('dopog');}
     public function actionSpecialoffers() { return $this->render('special-offers');}

      public function actionSamohodnayatehnika()
    {
         
        return $this->render('samohodnayatehnika');
    }

      public function actionAboutus()
    {
        return $this->render('aboutus');
    }

      public function actionDiscounta()
    {
        return $this->render('discount-A');
    }

          public function actionSpecialsignals()
    {
        return $this->render('special-signals');
    }

      public function actionPrivacy()
    {
        return $this->render('privacy');
    }


          public function actionInstructorsteaching()
    {
        return $this->render('instructors-teaching');
    }
          public function actionAutodromerental()
    {
        return $this->render('autodrome-rental');
    }
          public function actionDrivinglessons()
    {
        return $this->render('driving-lessons');
    }


       public function actionAutomotoschool()
    {
         
        return $this->render('automotoschool');
    }

      public function actionB()
    {
       
    $model = new Forma();
        if ($model->load(Yii::$app->request->post())  && $model->checkSpam() && $model->validate() && $model->save() && $model->sendEmail()) {

//       Yii::$app->session->setFlash('contactFormSubmitted');
//Yii::$app->session->setFlash('success', 'Спасибо, что обратились к Нам. Мы ответим Вам в ближайшее время.');

/*Yii::$app->getSession()->setFlash('success', [
    'type' => 'success',
    'duration' => 12000,
    'icon' => 'fa fa-users',
    'message' => 'Yii',
    'title' => 'Yii',
    'positonY' => 'top',
    'positonX' => 'left'
]);*/

/*
$script = <<< JS
   $(".allert-success").animate({opacity: 1.0}, 3000).fadeOut("slow");

JS;
$this->registerJs($script, yii\web\View::POS_READY);*/

   //Yii::$app->session->setFlash('success', 'Спасибо, что обратились к Нам. Мы ответим Вам в ближайшее время.');


   /* }
 else {
/*                Yii::$app->session->setFlash('error', 'Ошибка при отправке email.'); }
*/          //return $this->renderAjax('delete');
         //   return $this->refresh();
 // return $this->redirect(['view', 'id' => $model->id]);

}
 else { return $this->render('B',[ 'model' => $model,]);
}
}


public function actionValidate(){
    if (Yii::$app->request->isAjax) {
        Yii::$app->response->format = Response::FORMAT_JSON;
        $model = new Forma;
        if (!$model->validate()) {
            return ActiveForm::validate($model);
        }
    }
}


          public function actionA()
    {
         
        return $this->render('A');
    }

 public function actionCreatewidget(){

        return $this->render('modalwidget');

    }

    public function actionRaspisanie()
    {
         
        return $this->render('raspisanie');
    }


    public function actionDopuslugi()
    {
         
        return $this->render('dopuslugi');
    }


    public function actionSafetydriving()
    {
         
        return $this->render('safetydriving');
    }


  public function actionIncoming()
    {
         
        return $this->render('incoming');
    }


   public function actionOuradvantages()
    {
         
        return $this->render('ouradvantages');
    }


/*  public function actionGallery()
    {
         
        return $this->render('gallery/default/index.php');
    }
*/  
    public function actionContact()
    {
       return $this->render('contact');
       
    }


    public function actionFeedform()
{
       $model = new Forma();
       return $this->renderAjax('contacts', [
                'model' => $model,
        ]);

}

  public function actionContacts2()
   {
/*
          $model->name = $_POST['ContactForm']['name'];
          $model->phone = $_POST['ContactForm']['phone'];
          $model->body = $_POST['ContactForm']['body'];
          $model->from = $_POST['ContactForm']['from'];*/
           /*$model->date = Yii::$app->formatter->asDateTime('now', 'long'); */

/* Yii::$app
            ->mailer
compose(
                ['html' => 'passwordResetToken-html', 'text' => 'passwordResetToken-text'],
                ['user' => $user]
            )
            ->setFrom([Yii::$app->params['adminEmail'] => Yii::$app->name . ' robot'])
            ->setTo('test-11@list.ru')
            ->setSubject('Password reset for ' . Yii::$app->name)
            ->send();
    }

   Yii::$app->mailer->compose(  ['html' => 'html', 'text' => 'text'],['content' => 'blabla'])
    ->setFrom([Yii::$app->params['adminEmail'] => 'Test Mail'])
    ->setTo('test-11@list.ru')
    ->setSubject('This is a test mail ' )
    ->send();}

*/


    $model = new ContactForm();

 if ($model->load(Yii::$app->request->post()) && $model->validate()) {

          $model->name = $_POST['ContactForm']['name'];
          $model->phone = $_POST['ContactForm']['phone'];
          $model->body = $_POST['ContactForm']['body'];
          $model->from = $_POST['ContactForm']['from'];



        $forma = new Forma();
    $forma->name = $model->name;
    $forma->phone = $model->phone;
    $forma->body = $model->body;
    $forma->from = $model->from;
    $forma->save();
    Yii::$app->mailer->compose(  ['html' => 'html', 'text' => 'text'],['body' => $model->body, 'phone' => $model->phone, 'name'=>$model->name])
    ->setFrom(Yii::$app->params['supportEmail'])
    ->setTo(Yii::$app->params['adminEmail'])
    ->setSubject('Заявка с сайта' )
    ->setTextBody($model->body)
    ->send();



  return $this->render('contacts', [
                'model' => $model, 
                'success' => true,
                'error' => false,
            ]);
} else {
    if (isset($_POST["address"])) $error = true;
    else $error = false;
  return $this->render('contacts', [
                'model' => $model, 
                'success' => false,
                'error' => true,
            ]);
}


/* $model->contact(Yii::$app->params['adminEmail'])) {
                Yii::$app->session->setFlash('success', 'Спасибо, что обратились к Нам. Мы ответим Вам как можно скорее.');

            if ($model->sendEmail(Yii::$app->params['adminEmail'])) {
                Yii::$app->session->setFlash('success', 'Спасибо22, что обратились к Нам. Мы ответим Вам как можно скорее.');
            } else {
                Yii::$app->session->setFlash('error', 'Ошибка при отправке email.');
            }

            return $this->refresh();
        } 
            return $this->render('contacts', [
                'model' => $model,
            ]);*/
       
    }


    public function actionIndex2()
    {
        return $this->render('index2');
    }


public function actionContacts()
    {
        $model = new ContactForm();
        if ($model->load(Yii::$app->request->post())) {

          $model->name = $_POST['ContactForm']['name'];
          $model->email = $_POST['ContactForm']['email'];
          $model->subject = $_POST['ContactForm']['subject'];
          $model->body = $_POST['ContactForm']['body'];

           if ($model->save())
            Yii::$app->response->redirect(array('site/contact', 'model' => $model));
            return $this->refresh();
        } else {
            return $this->render('contacts', [
                'model' => $model,
            ]);
        }
    }
}


