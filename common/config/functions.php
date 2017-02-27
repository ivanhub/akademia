<?php
/*
* Code by DangNH
* Date: Apr 4, 2016
*/
 
/**
* Debug function
* d($var);
*/
function d() {
echo '
<pre>';
 for ($i = 0; $i < func_num_args(); $i++) {
 yii\helpers\VarDumper::dump(func_get_arg($i), 10, true);
 }
 echo '</pre>
';
}
 
/**
* Debug function with die() after
* dd($var);
*/
function dd() {
for ($i = 0; $i < func_num_args(); $i++) {
d(func_get_arg($i));
}
die();
}


function isActive($routes = array())
{
    if (Yii::$app->requestedRoute == "" && count($routes) == 0){
        return true;
    }
    $routeCurrent = Yii::$app->requestedRoute;
    foreach ($routes as $route) {
        $pattern = sprintf('~%s~', preg_quote($route));
        if (preg_match($pattern, $routeCurrent)) {
            return true;
        }
    }
    return false;
}

function hm($check)
{

 $controllerl = Yii::$app->controller;
 $homecheker = $controllerl->id.'/'.$controllerl->action->id;

    if ($check == $homecheker) {
    return true;
    } else { return false;}

}

