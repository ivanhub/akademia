<?php

return [
    'components' => [
        'db' => [
            'dsn' => 'mysql:host=127.0.0.1;dbname=yi2',
            'username' => 'root',
            'password' => 'root',
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