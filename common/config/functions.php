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


function title($title)
  {
          // Remove all characters that are not the separator, a-z, 0-9, or whitespace and arabic lang
          //$title = preg_replace ( "/&([\x{0600}-\x{06FF}а-яА-Яa-zA-Z])(uml|acute|grave|circ|tilde|ring),/u", "", $title );
          //$title = preg_replace ( "/[^\x{0600}-\x{06FF}а-яА-Яa-zA-Z0-9_ .-]/u", "", $title );

          // Remove all characters that are not the separator, a-z, 0-9, or whitespace
          //        $title = preg_replace('/[^'.$separator.'a-z0-9\s]+/', '', strtolower($title));

          // Replace all separator characters and whitespace by a single separator
          //$title = preg_replace('/['."-".'\s]+/', "", $title);

          // Trim separators from the beginning and end
    ///$title = $title."-";
          return $title;
  }