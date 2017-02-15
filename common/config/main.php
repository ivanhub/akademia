<?php
return [

    'vendorPath' => dirname(dirname(__DIR__)) . '/vendor',
        'modules' => [
         'gallery' => [
            'class' => 'onmotion\gallery\Module',
        ], ],
  
    'components' => [
        'formatter' => [
          'class' => 'yii\i18n\Formatter',
          'dateFormat' => 'php:d-M-Y',
          'datetimeFormat' => 'php:d-M-Y H:i:s',
           'timeFormat' => 'php:H:i:s',
            ],
     'mailer' => [
        'class' => 'yii\swiftmailer\Mailer',
        'viewPath' => '@common/mail',
        'htmlLayout' => 'layouts/html',
        'textLayout' => 'layouts/text',
        'messageConfig' => [
            'charset' => 'UTF-8',
            'from' => ['noreply@site.com' => 'Site Name'],
        ],
        'useFileTransport' => true,
           'transport' => [
            'class' => 'Swift_SmtpTransport',
            'host' => 'smtp.gmail.com',
            'username' => 'inmonitors@gmail.com',
            'password' => 'noviypass12',
            'port' => '587',
            'encryption' => 'tls',
                        ],
    ],
    'view' => [
            'theme' => [
                'pathMap' => [
                    //'@vendor/onmotion/yii2-gallery/views' => '@app/views/galadmin/default/index.php', // example: @app/views/gallery/default/index.php
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
            '<alias:sudovozhdenie|validate|create|savecont|createwidget|feedform|feedForm|contacts2|contacts|students|raspisanie|automotoschool|home|feedback|login|logout|signup|contact|distance|about|index>' => 'site/<alias>', 
            '<alias:dop-uslugi>' =>  'site/dopuslugi', 
             '<alias:our-advantages>' =>  'site/ouradvantages', 
            '<alias:safety-driving>' =>  'site/safetydriving', 
            '<alias:samohodnaya-tehnika>' =>  'site/samohodnayatehnika',             
            '<alias:postupayushchim>' =>  'site/incoming', 
            '<alias:automotoschool/B>' =>  'site/b', 
            '<alias:automotoschool/A>' =>  'site/a',
            '<alias:about-us>' =>  'site/aboutus', 
            '<controller>/<action>' => '<controller>/<action>',
            '<alias:gatest>' => '@vendor/onmotion/yii2-gallery/views', // example: @app/views/gallery/default/index.php

             
        ],],
    ],
];
