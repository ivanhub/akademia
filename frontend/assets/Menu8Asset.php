<?php

namespace frontend\assets;

use yii\web\AssetBundle;
use yii\web\View;

/**
 * Main frontend application asset bundle.
 */
class Menu8Asset extends AssetBundle
{
    public $basePath = '@app';
    public $baseUrl = '@web';
        public $css = [
        'assets/css/bootstrap.css',
        'assets/css/custom.css',
        'assets/css/custom1.css',
        'assets/css/custom26.css',
        'assets/css/custom8.css',
        'assets/css/boxes2.css',




    ];
    public $js = [
 //   'assets/js/cssrefresh.js'
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
