<?php
namespace frontend\controllers;

use Yii;
use yii\base\InvalidParamException;
use yii\web\BadRequestHttpException;
use yii\web\Controller;

use frontend\models\Image;

class MainController extends Controller
{
    public function actionIndex()
    {
	    $url_image = Image::getImageUrl();
        return $this->render('index', ['url_image' => $url_image]);
    }
	public function actionTest() 
    {
		print 1;
	}
}
