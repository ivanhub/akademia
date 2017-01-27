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
use frontend\models\ContactForm;


class Menu11Controller extends Controller
{
    
      public $layout = 'menu11';

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

    public function actionContact()
    {
        $model = new ContactForm();
        if ($model->load(Yii::$app->request->post()) && $model->validate()) {
            if ($model->sendEmail(Yii::$app->params['adminEmail'])) {
                Yii::$app->session->setFlash('success', 'Спасибо, что обратились к Нам. Мы ответим Вам как можно скорее.');
            } else {
                Yii::$app->session->setFlash('error', 'Ошибка при отправке email.');
            }

            return $this->refresh();
        } 
            return $this->render('contact', [
                'model' => $model,
            ]);
       
    }



    public function actionIndex2()
    {
        return $this->render('index2');
    }

}

