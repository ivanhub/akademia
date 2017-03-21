<?php
namespace app\controllers;

use \mrssoft\sitemap\Sitemap;

class SitemapController extends \mrssoft\sitemap\SitemapController
{
    /**
     * @var int Cache duration, set null to disabled
     */
    protected $cacheDuration = 43200; // default 12 hour

    /**
     * @var string Cache filename
     */
    protected $cacheFilename = 'sitemap.xml';

    public function models()
    {
        return [
            [
                'class' => \app\models\Page::className(),
                'change' => Sitemap::MONTHLY,
                'priority' => 0.8
            ]
        ];
    }

    public function urls()
    {
        return [
            [
                'url' => 'about/index',
                'change' => Sitemap::MONTHLY,
                'priority' => 0.8
            ]
        ];
    }
}