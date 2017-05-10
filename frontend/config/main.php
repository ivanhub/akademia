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
    'bootstrap' => ['mobileDetect','assetsAutoCompress'],
    'controllerNamespace' => '\frontend\controllers',
    
    'components' => [
     'assetsAutoCompress' =>
        [
            'class'                         => '\skeeks\yii2\assetsAuto\AssetsAutoCompressComponent',
            'enabled'                       => false,
 
            'readFileTimeout'               => 3,           //Time in seconds for reading each asset file
 
            'jsCompress'                    => true,        //Enable minification js in html code
            'jsCompressFlaggedComments'     => true,        //Cut comments during processing js
 
            'cssCompress'                   => true,        //Enable minification css in html code
 
            'cssFileCompile'                => true,        //Turning association css files
            'cssFileRemouteCompile'         => false,       //Trying to get css files to which the specified path as the remote file, skchat him to her.
            'cssFileCompress'               => true,        //Enable compression and processing before being stored in the css file
            'cssFileBottom'                 => false,       //Moving down the page css files
            'cssFileBottomLoadOnJs'         => false,       //Transfer css file down the page and uploading them using js
 
            'jsFileCompile'                 => false,        //Turning association js files
            'jsFileRemouteCompile'          => false,       //Trying to get a js files to which the specified path as the remote file, skchat him to her.
            'jsFileCompress'                => true,        //Enable compression and processing js before saving a file
            'jsFileCompressFlaggedComments' => true,        //Cut comments during processing js
 
            'htmlCompress'                  => false,        //Enable compression html
            'htmlCompressOptions'           =>              //options for compressing output result
            [
                'extra' => true,        //use more compact algorithm
                'no-comments' => true   //cut all the html comments
            ],     
        ],



    'MyCheck'         => [
            'class' => '\frontend\components\HomeCheck',
        ],
        'MyNav'         => [
            'class' => '\frontend\components\CustomNav',
        ],
         'urlManagerBackend' => [
                'class' => 'yii\web\urlManager',
                'baseUrl' => '/backend/web/img/gallery/',//i.e. $_SERVER['DOCUMENT_ROOT'] .'/yiiapp/web/'
                'enablePrettyUrl' => true,
                'showScriptName' => false,
        ],

         'mobileDetect' => [
         'class' => '\skeeks\yii2\mobiledetect\MobileDetect'
    ],
        //'Growl' => [ 'class' => '\kartik-v\yii2\widget-growl\Growl'],
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
