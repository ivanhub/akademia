<?php

return [
    'components' => [
        'db' => [
            'dsn' => 'mysql:host=127.0.0.1;dbname=akademia',
            'username' => 'root',
            'password' => 'local',
          /*  'tablePrefix' => 'y_',*/
        ],
        'mailer' => [
            'useFileTransport' => true,
        ],
        'cache' => [
            'class' => 'yii\caching\FileCache',
        ],
    ],
];