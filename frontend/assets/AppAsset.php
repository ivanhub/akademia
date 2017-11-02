<?php

namespace frontend\assets;

use yii\web\AssetBundle;
use yii\web\View;

/**
 * Main frontend application asset bundle.
 */
class AppAsset extends AssetBundle
{

    public function init()
{
 //   $this->js = !YII_DEBUG ? ['param.js'] : [
//'assets/js/cssrefresh.js'
//    ];
    parent::init();
}

    public $basePath = '@webroot';
    public $baseUrl = '@web';
        public $css = [
        'assets/css/custom.css',
        'assets/css/custom1.css',
        'assets/css/custom26.css',
        'assets/css/boxes2.css',
        'assets/css/allanim.css',
        'assets/css/breadcrumb.css',
        'assets/css/left.css',
        'assets/css/topmenu.css',
        'assets/css/font-awesome.css',
        'assets/css/block.css',
        'assets/css/moto.css',        
//!!   //'assets/css/rwd-table.css',
        //'assets/css/animate.css',
        //'assets/css/animation.css',
        // 'assets/css/zingchart-mobile.min.css'









    ];
    public $js = [
 // 'assets/js/cssrefresh.js'
    ];
    public $depends = [
  //      'yii\web\YiiAsset',
        'yii\bootstrap\BootstrapAsset',         //bootstrap.css
        'yii\bootstrap\BootstrapPluginAsset' // bootstrap.js
    ];

     public $jsOptions = [
      'position' =>  View::POS_END,
    ];
}
