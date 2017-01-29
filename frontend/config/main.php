<?php
$params = array_merge(
    require(__DIR__ . '/../../common/config/params.php'),
    require(__DIR__ . '/../../common/config/params-local.php'),
    require(__DIR__ . '/params.php'),
    require(__DIR__ . '/params-local.php')
);


return [
    'id' => 'app-frontend',
    'basePath' => dirname(__DIR__),
    'bootstrap' => ['mobileDetect'],
    'controllerNamespace' => 'frontend\controllers',
    'components' => [
         'mobileDetect' => [
         'class' => '\skeeks\yii2\mobiledetect\MobileDetect'
    ],
        'assetManager' => [     
               'class' => 'yii\web\AssetManager',

        'bundles' => [
            'yii\web\JqueryAsset' => [
                'js'=>[
                                YII_ENV_DEV ? 'jquery.js' : 'jquery.min.js'

                ]
            ],
            'yii\bootstrap\BootstrapPluginAsset' => [
                'js'=>[
                                YII_ENV_DEV ? 'js/bootstrap.js' : 'js/bootstrap.min.js',
                ]
            ],
            'yii\bootstrap\BootstrapAsset' => [
               'css' => [

                                YII_ENV_DEV ? 'css/bootstrap.css' :         'css/bootstrap.min.css',
                ]
            ], 
        ],
        ],
    
        'request' => [
            'csrfParam' => '_csrf-frontend',
        ],
        'user' => [
            'identityClass' => 'common\models\User',
            'enableAutoLogin' => true,
            'identityCookie' => ['name' => '_identity-frontend', 'httpOnly' => true],
        ],
        'session' => [
            // this is the name of the session cookie used for login on the frontend
            'name' => 'advanced-frontend',
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
        'errorHandler' => [
            'errorAction' => 'site/error',
        ],
        /*
        'urlManager' => [
            'enablePrettyUrl' => true,
            'showScriptName' => false,
            'rules' => [
            ],
        ],
        */
    ],
    'params' => $params,
];
