<?php
namespace frontend\controllers;

use Yii;
use yii\base\InvalidParamException;
use yii\web\BadRequestHttpException;
use yii\web\Controller;
use yii\filters\VerbFilter;
use yii\filters\AccessControl;
use common\models\LoginForm;
use frontend\models\PasswordResetRequestForm;
use frontend\models\ResetPasswordForm;
use frontend\models\SignupForm;
use frontend\models\ContactForm2;


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

    public function actionIndex()
    {
         $controllerl = Yii::$app->controller;
         $home = $controllerl->id.'/'.$controllerl->action->id;
        return $this->render('index', compact('home'));
    }

    public function actionDistance()
    {
         
        return $this->render('distance');
    }

       public function actionAutomotoschool()
    {
         
        return $this->render('automotoschool');
    }

      public function actionB()
    {
         
        return $this->render('B');
    }

          public function actionA()
    {
         
        return $this->render('A');
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


  public function actionStudents()
    {
         
        return $this->render('students');
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
  public function actionContacts2()
   {
        $model = new ContactForm2();
        if ($model->load(Yii::$app->request->post()) && $model->contact(Yii::$app->params['adminEmail'])) {
                            Yii::$app->session->setFlash('contactFormSubmitted');

            if ($model->sendEmail(Yii::$app->params['adminEmail'])) {
                Yii::$app->session->setFlash('success', 'Спасибо, что обратились к Нам. Мы ответим Вам как можно скорее.');
            } else {
                Yii::$app->session->setFlash('error', 'Ошибка при отправке email.');
            }

            return $this->refresh();
        } 
            return $this->render('contacts', [
                'model' => $model,
            ]);
       
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


