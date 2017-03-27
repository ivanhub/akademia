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


  function wagent($USER_AGENT)
{
$crawlers = array(
      'Safari' => 'Safari',
      'MSN' => 'msnbot',
      'Rambler' => 'Rambler',
      'Yahoo' => 'Yahoo',
      'AbachoBOT' => 'AbachoBOT',
      'accoona' => 'Accoona',
      'AcoiRobot' => 'AcoiRobot',
      'ASPSeek' => 'ASPSeek',
      'CrocCrawler' => 'CrocCrawler',
      'Dumbot' => 'Dumbot',
      'FAST-WebCrawler' => 'FAST-WebCrawler',
      'GeonaBot' => 'GeonaBot',
      'Gigabot' => 'Gigabot',
      'Lycos spider' => 'Lycos',
      'MSRBOT' => 'MSRBOT',
      'Altavista robot' => 'Scooter',
      'AltaVista robot' => 'Altavista',
      'ID-Search Bot' => 'IDBot',
      'eStyle Bot' => 'eStyle',
      'Scrubby robot' => 'Scrubby',
      'Facebook' => 'facebookexternalhit',
  );
  // to get crawlers string used in function uncomment it
  // it is better to save it in string than use implode every time
  // global $crawlers
   $crawlers_agents = implode('|',$crawlers);
  if (strpos($crawlers_agents, $USER_AGENT) === false)
      return 'false';
    else {
    return 'TRUE';
    }
}


function agent($USER_AGENT)
{
$crawlers = 'Yandex|Google|msnbot|Rambler|Yahoo|Lycos|Altavista';
// AbachoBOT|accoona|
//'AcioRobot|ASPSeek|CocoCrawler|Dumbot|FAST-WebCrawler|' .
//'GeonaBot|Gigabot|Lycos|MSRBOT|Scooter|AltaVista|IDBot|eStyle|Scrubby';
$isCrawler = (preg_match("/$crawlers/", $USER_AGENT) > 0);
return $isCrawler;
}


function title($title)
  {
    if (!hm('site/index')) {
if(agent($_SERVER['HTTP_USER_AGENT'])) 
{
    
return Yii::$app->params['titlebot'].$title;;
}
 else
 {
 return  Yii::$app->params['title'].$title; }
  }
else if (agent($_SERVER['HTTP_USER_AGENT'])) return  'Автошкола и Мотошкола «Росавтоакадемия» г. Самара';
else return '«РОСАВТОАКАДЕМИЯ» - Автошкола и Мотошкола г. Самара';
}

    // Remove all characters that are not the separator, a-z, 0-9, or whitespace and arabic lang
          //$title = preg_replace ( "/&([\x{0600}-\x{06FF}а-яА-Яa-zA-Z])(uml|acute|grave|circ|tilde|ring),/u", "", $title );
          //$title = preg_replace ( "/[^\x{0600}-\x{06FF}а-яА-Яa-zA-Z0-9_ .-]/u", "", $title );

          // Remove all characters that are not the separator, a-z, 0-9, or whitespace
          //        $title = preg_replace('/[^'.$separator.'a-z0-9\s]+/', '', strtolower($title));

          // Replace all separator characters and whitespace by a single separator
          //$title = preg_replace('/['."-".'\s]+/', "", $title);

          // Trim separators from the beginning and end
    ///$title = $title."-";