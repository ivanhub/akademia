<?php
return [

    'vendorPath' => dirname(dirname(__DIR__)) . '/vendor',
    'components' => [
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
            '<alias:gallery|students|raspisanie|automotoschool|home|feedback|login|logout|signup|contact|distance|about|index>' => 'site/<alias>', 
            '<alias:dop-uslugi>' =>  'site/dopuslugi', 
            '<alias:safety-driving>' =>  'site/safetydriving', 
            '<alias:postupayushchim>' =>  'site/incoming', 
                    '<controller>/<action>' => '<controller>/<action>',
             
        ],],
    ],
];
