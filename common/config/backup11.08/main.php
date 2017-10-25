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
            '<alias:validate|create|savecont|createwidget|feedform|feedForm|contacts2|contacts|students|raspisanie|home|feedback|login|logout|signup|contact|about|index>' => 'site/<alias>', 
	                          '<alias:driving-school>' =>  'site/automotoschool',            
				  '<alias:additional-services>' =>  'site/dopuslugi', 
			             '<alias:our-advantages>' =>  'site/ouradvantages', 
				                 '<alias:safety-driving>' =>  'site/safetydriving', 
						             '<alias:self-propelled-machinery>' =>  'site/samohodnayatehnika',             
							                 '<alias:distance-education>' =>  'site/distance',             
									             '<alias:navigation>' =>  'site/sudovozhdenie',             
										                 '<alias:postupayushchim>' =>  'site/incoming', 
												             '<alias:driving-school/B>' =>  'site/b', 
													                 '<alias:driving-school/A>' =>  'site/a',
															             '<alias:about-us>' =>  'site/aboutus', 
'<alias:DOPOG>' =>  'site/dopog', 
            '<alias:specialoffers>' =>  'site/special-offers',
																                 '<controller>/<action>' => '<controller>/<action>',
																		             '<alias:gatest>' => '@vendor/onmotion/yii2-gallery/views', // example: @app/views/gallery/default/index.php
																			                  '<alias:gallery>' => 'gallery/default/index',
        ],],
    ],
];
