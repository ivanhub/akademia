<?php
	namespace frontend\components;
		
		use Yii;

use yii\base\Widget;
use yii\helpers\Html;
use yii\widgets\Menu;


use yii\web\View;



class Leftmenu extends Widget{
	
	 public $route;

	public function init(){
		parent::init();
      
	        


	}
	
	public function run(){
$frv = Yii::$app->getView();
$route= $frv->context->route;

return Menu::widget([

    'items' => [
        ['label' => 'Запись на обучение', 'url' => ['/postupayushchim'],'active' => $route == 'site/postupayushchim'],
        ['label' => 'Расписание занятий', 'url' => ['/raspisanie'],'active' => $route == 'site/raspisanie'],
     //   ['label' => 'Наши преимущества', 'url' => ['/our-advantages'],'active' => $route == 'site/ouradvantages'],
        ['label' => 'Дополнительные услуги', 'url' => ['/dop-uslugi'], 'active' => $route == 'site/dopuslugi'],

    ],
    'options' => [
          //'id'=>'navid',
          'class' => 'menu',
          'style'=>'float: left; font-size: 16px;',
          'data'=>'menu',
        ],

    'activeCssClass'=>'active',
    'linkTemplate' => '<a href="{url}"><div class="menuItem"><span>{label}</span></div></a>',
]);


		
	
	}
}

