<?php
return [

    'vendorPath' => dirname(dirname(__DIR__)) . '/vendor',
    'components' => [
      'assetManager' => [
        'bundles' => [
            'yii\web\JqueryAsset' => [
                'js'=>[]
            ],
            'yii\bootstrap\BootstrapPluginAsset' => [
                'js'=>[]
            ],
            #'yii\bootstrap\BootstrapAsset' => [
             #   'css' => []
           # ] 
        ]
    ],
        'cache' => [
            'class' => 'yii\caching\FileCache',
        ],
         'urlManager' => [
            'enablePrettyUrl' => true,
            'showScriptName' => false,
             'rules' => [
            '<alias:home|feedback|login|logout|signup|contact|about|index>' => 'site/<alias>', 
                    '<controller>/<action>' => '<controller>/<action>'            
        ],],
    ],
];
