<?
	namespace frontend\components;

use Yii;

	use yii\base\Component;
	use yii\bootstrap\NavBar;
    use yii\helpers\Html;
    use yii\helpers\ArrayHelper;

use yii\bootstrap\BootstrapPluginAsset;
use yii\bootstrap\Widget;


class CustomNav extends NavBar {

    protected function renderToggleButton()
    {
        $bar = Html::tag('span', '', ['class' => 'icon-bar']);
        $screenReader = "<span class=\"sr-only\">{$this->screenReaderToggleText}</span>";

        return Html::button("{$screenReader}\n{$bar}\n{$bar}\n{$bar}", [
            'class' => 'navbar-toggle',
            'data-toggle' => 'collapse',
    //	        'data-target' => "#{$this->containerOptions['id']}",
        ]);
    }
}

