<?php

/* @var $this yii\web\View */
/* @var $form yii\bootstrap\ActiveForm */
/* @var $model \frontend\models\ContactForm */

use yii\helpers\Html;
use yii\bootstrap\ActiveForm;
use yii\captcha\Captcha;
use phpnt\yandexMap\YandexMaps;

$this->title = 'Наши контакты';
$this->params['breadcrumbs'][] = $this->title;
?>





<!-- <?= Html::encode($this->title) ?> --> <br/>    <br/>
<div class="site-contact container">
   
    <div class="row">
    <div class="col-md-6 col-sm-6 cont">
 <h1>Контакты</h1>


<p><b> АНО ДПО "Академия".</b></p>
  <div class="START"></div>
  <br/>
<p><b>Тел.:</b> (846) 255-69-99</p> 
<p><b>Электронная почта:</b> <a href="mailto:samarapb@mail.ru">samarapb@mail.ru</a></p>
<br/><br/>
    </div>
    <div class="col-md-6 col-sm-6">  
<div id="map"></div>


    </div> </div>
   


</div>



 <script src="http://api-maps.yandex.ru/2.1/?lang=ru_RU" type="text/javascript"></script>
 

 <script type="text/javascript">
       




ymaps.ready(init);

function init() {
    var groups = [
        {
            name: "Росавтоакадемия, Центральный офис",
            descr: "443099, г. Самара, <br>ул. Молодогвардейская 33, оф. 232, <br>тел.: (846) 205-77-66",
            items: [
                {
                    center: [53.182762,50.093797],
                    name: "",
                    num: 1
                },                
            ]},

        {
            name: "Автодром",
            descr: "г. Самара, <br/>ул. Утевская, напротив 4 роты полка ДПС ГИБДД). <br>Время работы 9:00-20:00",
            items: [
                {
                    center: [53.132978, 50.107227],
                    name: "",
                    num:2
                },
                
            ]},
                
    ];


    var myMap = new ymaps.Map('map', {
            center: [53.182762,50.093797],
            zoom: 17,
                    controls: ['smallMapDefaultSet']
                  //      controls: ['zoomControl', 'searchControl', 'typeSelector',  'fullscreenControl']
        }, {
            searchControlProvider: 'yandex#search'
        }),
counter=0,


   BalloonContentLayout = ymaps.templateLayoutFactory.createClass(
           '<div class="ballon"><img style="background: transparent;  border: none;border-radius: none;padding: 0px; margin-right: 3px;" src="http://samarapb.ru/img_contact/logo2.png" class="ll"/><p style="padding-top: 7px;padding-left:68px;margin:7px 0px;">443099, г. Самара, <br>ул. Молодогвардейская 33, <br>оф. 232, тел.: (846) 205-77-66</p><img class="close" id="close" style="background: transparent;  border: none;border-radius: none;padding: 0px;" src="http://samarapb.ru/img_contact/close.png"/></div>', {

         
            build: function () {
                BalloonContentLayout.superclass.build.call(this);
                                $('#close').bind('click', this.onCounterClick);

              
            },
            clear: function () {
         
                $('#close').unbind('click', this.onCounterClick);
                BalloonContentLayout.superclass.clear.call(this);
            },
                    onCounterClick: function () {
                                            myMap.balloon.close();

                
                },
            

        
        }),

 BalloonContentLayout2 = ymaps.templateLayoutFactory.createClass(
  '<div class="ballon"><img style="background: transparent;  border: none;border-radius: none;padding: 0px; margin-right: 3px;" src="http://samarapb.ru/img_contact/logo2.png" class="ll"/><p style="padding-top: 7px;padding-left:65px;margin:7px 0px;">ул. Утевская, напротив <br/>4 роты полка ДПС ГИБДД). <br/>Время работы 9:00-20:00</p><img class="close" id="close" style="background: transparent;  border: none;border-radius: none;padding: 0px;" src="http://samarapb.ru/img_contact/close.png"/></div>', {

            build: function () {
             
                BalloonContentLayout.superclass.build.call(this);
                                $('#close').bind('click', this.onCounterClick);

              
            },
            clear: function () {
             
                $('#close').unbind('click', this.onCounterClick);
                BalloonContentLayout.superclass.clear.call(this);
            },
                    onCounterClick: function () {
                                            myMap.balloon.close();

                
                },
            

        }),


        menu = $('<div class="panel panel-default"></div>');

            createMenuGroup(groups[0]);

    function createMenuGroup (group) {
    
    var goodItem1 = $('<div class="panel panel-default"><div class="panel-heading">  <h4 class="panel-title"><a data-toggle="collapse" data-parent="#accordion" href="#collapse1">' + groups[0].name + '</a>  </h4></div><div id="collapse1" class="panel-collapse collapse in"> <div class="panel-body"><b>'+ groups[0].descr +'</b></div></div></div>'),
   goodItem2 = $('<div class="panel panel-default"><div class="panel-heading">  <h4 class="panel-title"><a data-toggle="collapse" data-parent="#accordion" href="#collapse1">' + groups[1].name + '</a>  </h4></div><div id="collapse1" class="panel-collapse collapse in"> <div class="panel-body"><b>'+ groups[1].descr +'</b></div></div></div>');
   

            collection = new ymaps.GeoObjectCollection(),
       

        myMap.geoObjects.add(collection);

 placemark = new ymaps.Placemark([53.182762,50.093797], {  name: 'odin name' },

 {             
            balloonContentLayout: BalloonContentLayout,
          
            balloonPanelMaxMapArea: 0, iconLayout: 'default#image',
          
            iconImageHref: 'http://samarapb.ru/img_contact/icon22.png',
                iconImageSize: [50, 50],
           
            iconImageOffset: [-32, -50],
                  balloonContentSize: [290, 79],
                    balloonLayout: "default#imageWithContent",
                    balloonImageHref: 'http://samarapb.ru/img_contact/ballon222.png',
                    balloonImageOffset: [-75, -90],
                    balloonImageSize: [280, 89],
                    balloonShadow: false,
                    balloonAutoPan: false

        });

 placemark2 = new ymaps.Placemark( [53.132978, 50.107227], {  name: 'dva name' },

 {             
            balloonContentLayout: BalloonContentLayout2,
           
            balloonPanelMaxMapArea: 0, iconLayout: 'default#image',
 
            iconImageHref: 'http://samarapb.ru/img_contact/icon22.png',
                iconImageSize: [50, 50],

            iconImageOffset: [-32, -50],
                  balloonContentSize: [290, 79],
                    balloonLayout: "default#imageWithContent",
                    balloonImageHref: 'http://samarapb.ru/img_contact/ballon222.png',
                    balloonImageOffset: [-75, -90],
                    balloonImageSize: [280, 89],
                    balloonShadow: false,
                    balloonAutoPan: false


        });

      
        collection.add(placemark);
        collection.add(placemark2);

              goodItem1
             .appendTo(menu)
             .find('a') 
            .bind('click', function () {
              if (myMap.getZoom() < 13) {
             myMap.setZoom(14, { smooth: true }); }

                if (!placemark.balloon.isOpen()) {
                 
                   myMap.panTo([53.182762,50.093797], {
            flying: 1, callback: function () {  myMap.setZoom(18, { smooth: true });}
        });     
     

              //                          myMap.setCenter([53.182762,50.093797], 14);

                    placemark.balloon.open();

                }

   
                return false;
            });

                          goodItem2
             .appendTo(menu)
             .find('a') 
            .bind('click', function () {
if (myMap.getZoom() < 13) {
             myMap.setZoom(14, { smooth: true }); }


          myMap.panTo([53.132978, 50.107227],  {
            flying: 1,callback: function () { myMap.setZoom(15, { smooth: true });}
        });
  //                  myMap.setCenter( [53.132978, 50.107227], 13);
// zoom callback: function () { map.setZoom(zoom, { smooth: true });}
                if (!placemark2.balloon.isOpen()) {
                    placemark2.balloon.open();
                } 

                return false;
            });
    }

   
    menu.appendTo($('.START'));





myMap.events.add('click', function (e) {
        if (!myMap.balloon.isOpen()) {
            var coords = e.get('coords');
            myMap.balloon.open(coords, {
                contentHeader:'АНО ДПО "АКАДЕМИЯ"',
                contentBody:'<p>Запись на занятия по тел.:<br/>+7 (846) 205-77-66</p>' + [
                    ].join(', ') ,
                contentFooter:'<sup>Будем рады видеть вас на наших курсах</sup>'
            });
        }
        else {
            myMap.balloon.close();
        }
    });


    myMap.setBounds(myMap.geoObjects.getBounds());
}




    </script>

