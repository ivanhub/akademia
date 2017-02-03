<?php
return [

    'vendorPath' => dirname(dirname(__DIR__)) . '/vendor',
        'modules' => [
         'gallery' => [
            'class' => 'onmotion\gallery\Module',
        ], ],
    'components' => [
    'view' => [
            'theme' => [
                'pathMap' => [
                    '@vendor/onmotion/yii2-gallery/views' => '@app/views/gallery', // example: @app/views/gallery/default/index.php
                ],
            ],
        ],
      'assetManager' => [
        'appendTimestamp' => true,
        'linkAssets' => true
    ],
            'log' => [
            'traceLevel' => YII_DEBUG ? 3 : 0,
            'targets' => [
                [
                    'class' => 'yii\log\FileTarget',
                    'levels' => ['error'],
                    'logFile' => '@app/runtime/logs/web-error.log'

                ],
                [
                    'class' => 'yii\log\FileTarget',
                    'levels' => ['warning'],
                    'logFile' => '@app/runtime/logs/web-warning.log'
                ],
               
            ],
        ],
        'cache' => [
            'class' => 'yii\caching\FileCache',
        ],
         'urlManager' => [
            'enablePrettyUrl' => true,
            'showScriptName' => false,
             'rules' => [
            '<alias:contacts2|contacts|students|raspisanie|automotoschool|home|feedback|login|logout|signup|contact|distance|about|index>' => 'site/<alias>', 
            '<alias:dop-uslugi>' =>  'site/dopuslugi', 
            '<alias:safety-driving>' =>  'site/safetydriving', 
            '<alias:postupayushchim>' =>  'site/incoming', 
            '<alias:automotoschool/B>' =>  'site/b', 
            '<alias:automotoschool/A>' =>  'site/a', 

 


                    '<controller>/<action>' => '<controller>/<action>',
             
        ],],
    ],
];
