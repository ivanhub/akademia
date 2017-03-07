       
$(document).ready(function() {



ymaps.ready(init);

function init() {
    var groups = [
        {
            name: "Головной офис, г. Самара",
            descr: "443099, г. Самара, ул. Молодогвардейская 33, оф. 232. <br>График работы: 8:00 - 17:00 Пн.-Пт.<br/>Тел.: +7 (846) 255-69-99",
	    balloon: "г. Самара, <br>ул. Молодогвардейская 33, <br>оф. 232, тел.: (846) 255-69-99",
            items: [
                {
                    center: [53.182762,50.093797],
                    name: "",
                    num: 1
                },                
            ]},

        {
            name: "г. Бузулук",
            descr: "461040, Оренбургская обл., г. Бузулук, ул. 1 мая, д. 110, <br>тел.: (35342) 3-90-35 - Чурсина Раиса Петровна",
	    balloon: "г. Бузулук, <br> ул. 1 мая, д. 110, <br> тел.: (35342) 3-90-35 <br> Чурсина Раиса Петровна",
            items: [
                {
                    center: [52.796475, 52.255925],
                    name: "г. Самара, <br/>ул. Осипенко 11,  оф. 404.<br/> Тел.: +7 (846) 255-69-99",
                    num:2
                },
                
            ]},
        {
            name: "г. Волгоград",
            descr: "400005, г. Волгоград, ул. Коммунистическая 21, <br>тел.:(8442)24-40-66",
	    balloon: "г. Волгоград, <br> ул. Коммунистическая 21, <br>тел.: (8442)24-40-66 <br>",
            items: [
                {
                    center: [48.716389,44.523964],
                    name: "",
                    num:2
                },
                
            ]},


        {
            name: "г. Краснодар",
            descr: "350005, Краснодарский край, г. Краснодар, ул. Дзержинского, д. 167, оф. 6<br/>Тел. 8 (861) 203-05-05, 8-987-929-33-30",
	    balloon: "г. Краснодар, <br>ул. Дзержинского, д.167, оф. 6,<br>тел. 8 (861) 203-05-05, 8-987-929-33-30<br> ",
            items: [
                {
                    center: [45.090578, 38.976562],
                    name: "",
                    num:2
                },
            ]},
        {
            name: "г. Мирный",
            descr: "446377, Самарская область, Красноярский район, п. Мирный, ул. Зои Космодемьянской, д. 3, оф. 55<br/>Тел. 8-987-94-10-555",
	    balloon: "Самарская область, <br> п. Мирный, ул. Зои Космодемьянской, д. 3, оф. 55,<br>тел. 8-987-94-10-555 <br>",
            items: [
                {
                    center: [53.508548, 50.267486],
                    name: "",
                    num:2
                },                
            ]},

        {
            name: "г. Москва",
            descr: "115230, Московская область, г. Москва, Варшавское шоссе, д. 42, оф. 2073<br/>Тел. 8 (495) 137-55-50",
	    balloon: "г. Москва, <br> Варшавское шоссе, <br/>д. 42, оф. 2073,<br>тел. 8 (495) 137-55-50<br> ",
            items: [
                {
                    center: [55.675306, 37.624741],
                    name: "",
                    num:2
                },                
            ]},

        {
            name: "г. Нижний Новгород",
            descr: "603140, Нижегородская область, г. Нижний Новгород, пер. Мотальный, д. 10 А, оф. 205<br/>Тел. 8 (831) 288-05-05",
	    balloon: "г. Нижний Новгород, <br> пер. Мотальный,<br/> д. 10 А, оф. 205, <br>тел. 8 (831) 288-05-05<br>",
            items: [
                {
                    center: [56.293637, 43.948566],
                    name: "",
                    num:2
                },                
            ]},

        {
            name: "г. Отрадный",
            descr: "446306, г. Отрадный, ул. Советская 103Е, <br/>тел.:(937) 100-04-55",
	    balloon: "г. Отрадный,<br> ул. Советская 103Е,<br>тел.: (937) 100-04-55 <br>",
            items: [
                {
                    center: [53.380268, 51.365502],
                    name: "",
                    num:2
                },                
            ]},

        {
            name: "г. Севастополь",
            descr: "299053, Республика Крым, г. Севастополь, ул. Вакуленчука, д. 33-А/2, этаж 4<br/>Тел. 8 (3652) 78-83-83",
	    balloon: "г. Севастополь,<br>ул. Вакуленчука,<br/> д. 33-А/2, этаж 4 <br>тел. 8 (3652) 78-83-83<br>",
            items: [
                {
                    center: [44.597531, 33.488304],
                    name: "",
                    num:2
                },                
            ]},

        {
            name: "г. Симферополь",
            descr: "295053, г. Симферополь, ул. Гурзуфская 8а, <br/>тел.:(3652)78-83-83, (978)041-22-29",
	    balloon: "г. Симферополь, <br> ул. Гурзуфская 8а, <br>(3652)78-83-83 <br />+7(978)041-22-29 <br>",
            items: [
                {
                    center: [44.9493,34.1280],
                    name: "",
                    num:2
                },                
            ]},

        {
            name: "г. Тольятти",
            descr: "445012, г. Тольятти, ул. Коммунистическая 8, оф. 501,<br/>тел.: (8482) 79-54-66",
	    balloon: "г. Тольятти, <br>ул. Коммунистическая 8, <br/>оф. 501<br>тел.: (8482) 79-54-66 <br/>",
            items: [
                {
                    center: [53.475297,49.460334],
                    name: "",
                    num:2
                },                
            ]},

        {
            name: "г. Ульяновск",
            descr: "432001, г. Ульяновск, ул. Федерации 83, <br/>тел.:(8422) 21-50-50",
	    balloon: "г. Ульяновск, <br> ул. Федерации 83,<br>тел.: (8422) 21-50-50 <br>",
            items: [
                {
                    center: [54.327551,48.396370],
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
	counter=0;

//var BalloonContentL = [];
//for (var h = 0; h < 4; ++h) {
//  BalloonContentL[h] = "ymaps.templateLayoutFactory.createClass('<div class=\"ballon\"><img style=\"background: transparent;  border: none;border-radius: none;padding: 0px; margin-right: 3px;\" src=\"images/map/logo2.png\" class=\"ll\"/><p style=\"padding-top: 7px;padding-left:68px;margin:7px 0px;\">"+ groups[h].balloon +"</p><img class=\"close\" id=\"close\" style=\"background: transparent;  border: none;border-radius: none;padding: 0px;\" src=\"images/map/close.png\"/></div>', {       build: function () { BalloonContentL["+h+"].superclass.build.call(this); $('#close').bind('click', this.onCounterClick);           },clear: function () { $('#close').unbind('click', this.onCounterClick); BalloonContentL["+h+"].superclass.clear.call(this); },onCounterClick: function () {myMap.balloon.close();},})";
//console.log(BalloonContentL[h]);
//}

var BalloonContentLayout = ymaps.templateLayoutFactory.createClass(
           '<div class="ballon"><img style="background: transparent;  border: none;border-radius: none;padding: 0px; margin-right: 3px;" src="images/map/logo2.png" class="ll"/><p style="padding-top: 7px;padding-left:68px;margin:7px 0px;">'+ groups[0].balloon +'</p><img class="close" id="close" style="background: transparent;  border: none;border-radius: none;padding: 0px;" src="images/map/close.png"/></div>', {       
            build: function () { BalloonContentLayout.superclass.build.call(this); $('#close').bind('click', this.onCounterClick);           },
            clear: function () { $('#close').unbind('click', this.onCounterClick); BalloonContentLayout.superclass.clear.call(this); },
   onCounterClick: function () {myMap.balloon.close();},}),

BalloonContentLayout2 = ymaps.templateLayoutFactory.createClass(
  '<div class="ballon"><img style="background: transparent;  border: none;border-radius: none;padding: 0px; margin-right: 3px;" src="images/map/logo2.png" class="ll"/><p style="padding-top: 7px;padding-left:65px;margin:7px 0px;">'+ groups[1].balloon +'<img class="close" id="close" style="background: transparent;  border: none;border-radius: none;padding: 0px;" src="images/map/close.png"/></div>', {
            build: function () { BalloonContentLayout2.superclass.build.call(this);$('#close').bind('click', this.onCounterClick);},
            clear: function () { $('#close').unbind('click', this.onCounterClick); BalloonContentLayout2.superclass.clear.call(this);},
   onCounterClick: function () {myMap.balloon.close();                },          }),


BalloonContentLayout3 = ymaps.templateLayoutFactory.createClass(
  '<div class="ballon"><img style="background: transparent;  border: none;border-radius: none;padding: 0px; margin-right: 3px;" src="images/map/logo2.png" class="ll"/><p style="padding-top: 7px;padding-left:65px;margin:7px 0px;">'+ groups[2].balloon +'</p><img class="close" id="close" style="background: transparent;  border: none;border-radius: none;padding: 0px;" src="images/map/close.png"/></div>', {
            build: function () {                            BalloonContentLayout3.superclass.build.call(this);$('#close').bind('click', this.onCounterClick);              },
            clear: function () {                 $('#close').unbind('click', this.onCounterClick);BalloonContentLayout3.superclass.clear.call(this);            },
   onCounterClick: function () { myMap.balloon.close(); },   }),

BalloonContentLayout4 = ymaps.templateLayoutFactory.createClass(
  '<div class="ballon"><img style="background: transparent;  border: none;border-radius: none;padding: 0px; margin-right: 3px;" src="images/map/logo2.png" class="ll"/><p style="padding-top: 7px;padding-left:65px;margin:7px 0px;">'+ groups[3].balloon +'</p><img class="close" id="close" style="background: transparent;  border: none;border-radius: none;padding: 0px;" src="images/map/close.png"/></div>', {
            build: function () {                            BalloonContentLayout4.superclass.build.call(this);$('#close').bind('click', this.onCounterClick);              },
            clear: function () {                 $('#close').unbind('click', this.onCounterClick);BalloonContentLayout4.superclass.clear.call(this);            },
   onCounterClick: function () { myMap.balloon.close(); },   }),

BalloonContentLayout5 = ymaps.templateLayoutFactory.createClass(
  '<div class="ballon"><img style="background: transparent;  border: none;border-radius: none;padding: 0px; margin-right: 3px;" src="images/map/logo2.png" class="ll"/><p style="padding-top: 7px;padding-left:65px;margin:7px 0px;">'+ groups[4].balloon +'</p><img class="close" id="close" style="background: transparent;  border: none;border-radius: none;padding: 0px;" src="images/map/close.png"/></div>', {
            build: function () {                            BalloonContentLayout5.superclass.build.call(this);$('#close').bind('click', this.onCounterClick);              },
            clear: function () {                 $('#close').unbind('click', this.onCounterClick);BalloonContentLayout5.superclass.clear.call(this);            },
   onCounterClick: function () { myMap.balloon.close(); },   }),

BalloonContentLayout6 = ymaps.templateLayoutFactory.createClass(
  '<div class="ballon"><img style="background: transparent;  border: none;border-radius: none;padding: 0px; margin-right: 3px;" src="images/map/logo2.png" class="ll"/><p style="padding-top: 7px;padding-left:65px;margin:7px 0px;">'+ groups[5].balloon +'</p><img class="close" id="close" style="background: transparent;  border: none;border-radius: none;padding: 0px;" src="images/map/close.png"/></div>', {
            build: function () {                            BalloonContentLayout6.superclass.build.call(this);$('#close').bind('click', this.onCounterClick);              },
            clear: function () {                 $('#close').unbind('click', this.onCounterClick);BalloonContentLayout6.superclass.clear.call(this);            },
   onCounterClick: function () { myMap.balloon.close(); },   }),

BalloonContentLayout7 = ymaps.templateLayoutFactory.createClass(
  '<div class="ballon"><img style="background: transparent;  border: none;border-radius: none;padding: 0px; margin-right: 3px;" src="images/map/logo2.png" class="ll"/><p style="padding-top: 7px;padding-left:65px;margin:7px 0px;">'+ groups[6].balloon +'</p><img class="close" id="close" style="background: transparent;  border: none;border-radius: none;padding: 0px;" src="images/map/close.png"/></div>', {
            build: function () {                            BalloonContentLayout7.superclass.build.call(this);$('#close').bind('click', this.onCounterClick);              },
            clear: function () {                 $('#close').unbind('click', this.onCounterClick);BalloonContentLayout7.superclass.clear.call(this);            },
   onCounterClick: function () { myMap.balloon.close(); },   }),

BalloonContentLayout8 = ymaps.templateLayoutFactory.createClass(
  '<div class="ballon"><img style="background: transparent;  border: none;border-radius: none;padding: 0px; margin-right: 3px;" src="images/map/logo2.png" class="ll"/><p style="padding-top: 7px;padding-left:65px;margin:7px 0px;">'+ groups[7].balloon +'</p><img class="close" id="close" style="background: transparent;  border: none;border-radius: none;padding: 0px;" src="images/map/close.png"/></div>', {
            build: function () {                            BalloonContentLayout8.superclass.build.call(this);$('#close').bind('click', this.onCounterClick);              },
            clear: function () {                 $('#close').unbind('click', this.onCounterClick);BalloonContentLayout8.superclass.clear.call(this);            },
   onCounterClick: function () { myMap.balloon.close(); },   }),

BalloonContentLayout9 = ymaps.templateLayoutFactory.createClass(
  '<div class="ballon"><img style="background: transparent;  border: none;border-radius: none;padding: 0px; margin-right: 3px;" src="images/map/logo2.png" class="ll"/><p style="padding-top: 7px;padding-left:65px;margin:7px 0px;">'+ groups[8].balloon +'</p><img class="close" id="close" style="background: transparent;  border: none;border-radius: none;padding: 0px;" src="images/map/close.png"/></div>', {
            build: function () {                            BalloonContentLayout9.superclass.build.call(this);$('#close').bind('click', this.onCounterClick);              },
            clear: function () {                 $('#close').unbind('click', this.onCounterClick);BalloonContentLayout9.superclass.clear.call(this);            },
   onCounterClick: function () { myMap.balloon.close(); },   }),

BalloonContentLayout10 = ymaps.templateLayoutFactory.createClass(
  '<div class="ballon"><img style="background: transparent;  border: none;border-radius: none;padding: 0px; margin-right: 3px;" src="images/map/logo2.png" class="ll"/><p style="padding-top: 7px;padding-left:65px;margin:7px 0px;">'+ groups[9].balloon +'</p><img class="close" id="close" style="background: transparent;  border: none;border-radius: none;padding: 0px;" src="images/map/close.png"/></div>', {
            build: function () {                            BalloonContentLayout10.superclass.build.call(this);$('#close').bind('click', this.onCounterClick);              },
            clear: function () {                 $('#close').unbind('click', this.onCounterClick);BalloonContentLayout10.superclass.clear.call(this);            },
   onCounterClick: function () { myMap.balloon.close(); },   }),

BalloonContentLayout11 = ymaps.templateLayoutFactory.createClass(
  '<div class="ballon"><img style="background: transparent;  border: none;border-radius: none;padding: 0px; margin-right: 3px;" src="images/map/logo2.png" class="ll"/><p style="padding-top: 7px;padding-left:65px;margin:7px 0px;">'+ groups[10].balloon +'</p><img class="close" id="close" style="background: transparent;  border: none;border-radius: none;padding: 0px;" src="images/map/close.png"/></div>', {
            build: function () {                            BalloonContentLayout11.superclass.build.call(this);$('#close').bind('click', this.onCounterClick);              },
            clear: function () {                 $('#close').unbind('click', this.onCounterClick);BalloonContentLayout11.superclass.clear.call(this);            },
   onCounterClick: function () { myMap.balloon.close(); },   }),

BalloonContentLayout12 = ymaps.templateLayoutFactory.createClass(
  '<div class="ballon"><img style="background: transparent;  border: none;border-radius: none;padding: 0px; margin-right: 3px;" src="images/map/logo2.png" class="ll"/><p style="padding-top: 7px;padding-left:65px;margin:7px 0px;">'+ groups[11].balloon +'</p><img class="close" id="close" style="background: transparent;  border: none;border-radius: none;padding: 0px;" src="images/map/close.png"/></div>', {
            build: function () {                            BalloonContentLayout12.superclass.build.call(this);$('#close').bind('click', this.onCounterClick);              },
            clear: function () {                 $('#close').unbind('click', this.onCounterClick);BalloonContentLayout12.superclass.clear.call(this);            },
   onCounterClick: function () { myMap.balloon.close(); },   }),



    menu = $('<div class="panel-group" id="accordion"></div>');

   createMenuGroup(groups[0]);

   function createMenuGroup (group) {
    
var goodItem1 = $('<div class="panel panel-default"><div class="panel-heading">  <h4 class="panel-title"><a data-toggle="collapse" data-parent="#accordion" href="#collapse5">' + groups[0].name + '</a>  </h4></div><div id="collapse5" class="panel-collapse collapse"> <div class="panel-body"><b><a href="" onclick="myMap.panTo()">'+ groups[0].descr +'</a></b></div></div></div>'),
    goodItem2 = $('<div class="panel panel-default"><div class="panel-heading">  <h4 class="panel-title"><a data-toggle="collapse" data-parent="#accordion" href="#collapse6">' + groups[1].name + '</a>  </h4></div><div id="collapse6" class="panel-collapse collapse"> <div class="panel-body"><b><a href="" onclick="myMap.panTo()">'+ groups[1].descr +'</a></b></div></div></div>');
    goodItem3 = $('<div class="panel panel-default"><div class="panel-heading">  <h4 class="panel-title"><a data-toggle="collapse" data-parent="#accordion" href="#collapse7">' + groups[2].name + '</a>  </h4></div><div id="collapse7" class="panel-collapse collapse"> <div class="panel-body"><b><a href="" onclick="myMap.panTo()">'+ groups[2].descr +'</a></b></div></div></div>');   
    goodItem4 = $('<div class="panel panel-default"><div class="panel-heading">  <h4 class="panel-title"><a data-toggle="collapse" data-parent="#accordion" href="#collapse7">' + groups[3].name + '</a>  </h4></div><div id="collapse7" class="panel-collapse collapse"> <div class="panel-body"><b><a href="" onclick="myMap.panTo()">'+ groups[3].descr +'</a></b></div></div></div>');   
    goodItem5 = $('<div class="panel panel-default"><div class="panel-heading">  <h4 class="panel-title"><a data-toggle="collapse" data-parent="#accordion" href="#collapse7">' + groups[4].name + '</a>  </h4></div><div id="collapse7" class="panel-collapse collapse"> <div class="panel-body"><b><a href="" onclick="myMap.panTo()">'+ groups[4].descr +'</a></b></div></div></div>');   
    goodItem6 = $('<div class="panel panel-default"><div class="panel-heading">  <h4 class="panel-title"><a data-toggle="collapse" data-parent="#accordion" href="#collapse7">' + groups[5].name + '</a>  </h4></div><div id="collapse7" class="panel-collapse collapse"> <div class="panel-body"><b><a href="" onclick="myMap.panTo()">'+ groups[5].descr +'</a></b></div></div></div>');   
    goodItem7 = $('<div class="panel panel-default"><div class="panel-heading">  <h4 class="panel-title"><a data-toggle="collapse" data-parent="#accordion" href="#collapse7">' + groups[6].name + '</a>  </h4></div><div id="collapse7" class="panel-collapse collapse"> <div class="panel-body"><b><a href="" onclick="myMap.panTo()">'+ groups[6].descr +'</a></b></div></div></div>');   
    goodItem8 = $('<div class="panel panel-default"><div class="panel-heading">  <h4 class="panel-title"><a data-toggle="collapse" data-parent="#accordion" href="#collapse7">' + groups[7].name + '</a>  </h4></div><div id="collapse7" class="panel-collapse collapse"> <div class="panel-body"><b><a href="" onclick="myMap.panTo()">'+ groups[7].descr +'</a></b></div></div></div>');   
    goodItem9 = $('<div class="panel panel-default"><div class="panel-heading">  <h4 class="panel-title"><a data-toggle="collapse" data-parent="#accordion" href="#collapse7">' + groups[8].name + '</a>  </h4></div><div id="collapse7" class="panel-collapse collapse"> <div class="panel-body"><b><a href="" onclick="myMap.panTo()">'+ groups[8].descr +'</a></b></div></div></div>');   
    goodItem10 = $('<div class="panel panel-default"><div class="panel-heading">  <h4 class="panel-title"><a data-toggle="collapse" data-parent="#accordion" href="#collapse7">' + groups[9].name + '</a>  </h4></div><div id="collapse7" class="panel-collapse collapse"> <div class="panel-body"><b><a href="" onclick="myMap.panTo()">'+ groups[9].descr +'</a></b></div></div></div>');   
    goodItem11 = $('<div class="panel panel-default"><div class="panel-heading">  <h4 class="panel-title"><a data-toggle="collapse" data-parent="#accordion" href="#collapse7">' + groups[10].name + '</a>  </h4></div><div id="collapse7" class="panel-collapse collapse"> <div class="panel-body"><b><a href="" onclick="myMap.panTo()">'+ groups[10].descr +'</a></b></div></div></div>');   
    goodItem12 = $('<div class="panel panel-default"><div class="panel-heading">  <h4 class="panel-title"><a data-toggle="collapse" data-parent="#accordion" href="#collapse7">' + groups[11].name + '</a>  </h4></div><div id="collapse7" class="panel-collapse collapse"> <div class="panel-body"><b><a href="" onclick="myMap.panTo()">'+ groups[11].descr +'</a></b></div></div></div>');   

    collection = new ymaps.GeoObjectCollection(),
       

   myMap.geoObjects.add(collection);
  


 placemark = new ymaps.Placemark(groups[0].items[0].center, {   hintContent: groups[0].name   },  { balloonContentLayout: BalloonContentLayout, balloonPanelMaxMapArea: 0, iconLayout: 'default#image', iconImageHref: 'images/map/icon22.png', iconImageSize: [50, 50], iconImageOffset: [-32, -50], balloonContentSize: [290, 79], balloonLayout: "default#imageWithContent", balloonImageHref: 'images/map/ballon222.png', balloonImageOffset: [-75, -90], balloonImageSize: [280, 89], balloonShadow: false, balloonAutoPan: false });
 placemark2 = new ymaps.Placemark(groups[1].items[0].center, {   hintContent: groups[1].name   }, { balloonContentLayout: BalloonContentLayout2, balloonPanelMaxMapArea: 0, iconLayout: 'default#image', iconImageHref: 'images/map/icon22.png', iconImageSize: [50, 50], iconImageOffset: [-32, -50], balloonContentSize: [290, 79], balloonLayout: "default#imageWithContent", balloonImageHref: 'images/map/ballon222.png', balloonImageOffset: [-75, -90], balloonImageSize: [280, 89], balloonShadow: false, balloonAutoPan: false });
 placemark3 = new ymaps.Placemark(groups[2].items[0].center, {   hintContent: groups[2].name,   },{ balloonContentLayout: BalloonContentLayout3, balloonPanelMaxMapArea: 0, iconLayout: 'default#image', iconImageHref: 'images/map/icon22.png', iconImageSize: [50, 50], iconImageOffset: [-32, -50], balloonContentSize: [290, 79], balloonLayout: "default#imageWithContent", balloonImageHref: 'images/map/ballon222.png', balloonImageOffset: [-75, -90], balloonImageSize: [280, 89], balloonShadow: false, balloonAutoPan: false });
 placemark4 = new ymaps.Placemark(groups[3].items[0].center, {   hintContent: groups[3].name   },  { balloonContentLayout: BalloonContentLayout4, balloonPanelMaxMapArea: 0, iconLayout: 'default#image', iconImageHref: 'images/map/icon22.png', iconImageSize: [50, 50], iconImageOffset: [-32, -50], balloonContentSize: [290, 79], balloonLayout: "default#imageWithContent", balloonImageHref: 'images/map/ballon222.png', balloonImageOffset: [-75, -90], balloonImageSize: [280, 89], balloonShadow: false, balloonAutoPan: false });
 placemark5 = new ymaps.Placemark(groups[4].items[0].center, {   hintContent: groups[4].name   }, { balloonContentLayout: BalloonContentLayout5, balloonPanelMaxMapArea: 0, iconLayout: 'default#image', iconImageHref: 'images/map/icon22.png', iconImageSize: [50, 50], iconImageOffset: [-32, -50], balloonContentSize: [290, 79], balloonLayout: "default#imageWithContent", balloonImageHref: 'images/map/ballon222.png', balloonImageOffset: [-75, -90], balloonImageSize: [280, 89], balloonShadow: false, balloonAutoPan: false });
 placemark6 = new ymaps.Placemark(groups[5].items[0].center, {   hintContent: groups[5].name,   },{ balloonContentLayout: BalloonContentLayout6, balloonPanelMaxMapArea: 0, iconLayout: 'default#image', iconImageHref: 'images/map/icon22.png', iconImageSize: [50, 50], iconImageOffset: [-32, -50], balloonContentSize: [290, 79], balloonLayout: "default#imageWithContent", balloonImageHref: 'images/map/ballon222.png', balloonImageOffset: [-75, -90], balloonImageSize: [280, 89], balloonShadow: false, balloonAutoPan: false });
 placemark7 = new ymaps.Placemark(groups[6].items[0].center, {   hintContent: groups[6].name   },  { balloonContentLayout: BalloonContentLayout7, balloonPanelMaxMapArea: 0, iconLayout: 'default#image', iconImageHref: 'images/map/icon22.png', iconImageSize: [50, 50], iconImageOffset: [-32, -50], balloonContentSize: [290, 79], balloonLayout: "default#imageWithContent", balloonImageHref: 'images/map/ballon222.png', balloonImageOffset: [-75, -90], balloonImageSize: [280, 89], balloonShadow: false, balloonAutoPan: false });
 placemark8 = new ymaps.Placemark(groups[7].items[0].center, {   hintContent: groups[7].name   }, { balloonContentLayout: BalloonContentLayout8, balloonPanelMaxMapArea: 0, iconLayout: 'default#image', iconImageHref: 'images/map/icon22.png', iconImageSize: [50, 50], iconImageOffset: [-32, -50], balloonContentSize: [290, 79], balloonLayout: "default#imageWithContent", balloonImageHref: 'images/map/ballon222.png', balloonImageOffset: [-75, -90], balloonImageSize: [280, 89], balloonShadow: false, balloonAutoPan: false });
 placemark9 = new ymaps.Placemark(groups[8].items[0].center, {   hintContent: groups[8].name,   },{ balloonContentLayout: BalloonContentLayout9, balloonPanelMaxMapArea: 0, iconLayout: 'default#image', iconImageHref: 'images/map/icon22.png', iconImageSize: [50, 50], iconImageOffset: [-32, -50], balloonContentSize: [290, 79], balloonLayout: "default#imageWithContent", balloonImageHref: 'images/map/ballon222.png', balloonImageOffset: [-75, -90], balloonImageSize: [280, 89], balloonShadow: false, balloonAutoPan: false });
 placemark10 = new ymaps.Placemark(groups[9].items[0].center, {   hintContent: groups[9].name   },  { balloonContentLayout: BalloonContentLayout10, balloonPanelMaxMapArea: 0, iconLayout: 'default#image', iconImageHref: 'images/map/icon22.png', iconImageSize: [50, 50], iconImageOffset: [-32, -50], balloonContentSize: [290, 79], balloonLayout: "default#imageWithContent", balloonImageHref: 'images/map/ballon222.png', balloonImageOffset: [-75, -90], balloonImageSize: [280, 89], balloonShadow: false, balloonAutoPan: false });
 placemark11 = new ymaps.Placemark(groups[10].items[0].center, {   hintContent: groups[10].name   }, { balloonContentLayout: BalloonContentLayout11, balloonPanelMaxMapArea: 0, iconLayout: 'default#image', iconImageHref: 'images/map/icon22.png', iconImageSize: [50, 50], iconImageOffset: [-32, -50], balloonContentSize: [290, 79], balloonLayout: "default#imageWithContent", balloonImageHref: 'images/map/ballon222.png', balloonImageOffset: [-75, -90], balloonImageSize: [280, 89], balloonShadow: false, balloonAutoPan: false });
 placemark12 = new ymaps.Placemark(groups[11].items[0].center, {   hintContent: groups[11].name   }, { balloonContentLayout: BalloonContentLayout12, balloonPanelMaxMapArea: 0, iconLayout: 'default#image', iconImageHref: 'images/map/icon22.png', iconImageSize: [50, 50], iconImageOffset: [-32, -50], balloonContentSize: [290, 79], balloonLayout: "default#imageWithContent", balloonImageHref: 'images/map/ballon222.png', balloonImageOffset: [-75, -90], balloonImageSize: [280, 89], balloonShadow: false, balloonAutoPan: false });
  
        collection.add(placemark);
        collection.add(placemark2);
        collection.add(placemark3);
        collection.add(placemark4);
        collection.add(placemark5);
        collection.add(placemark6);
        collection.add(placemark7);
        collection.add(placemark8);
        collection.add(placemark9);
        collection.add(placemark10);
        collection.add(placemark11);
        collection.add(placemark12);


      goodItem1.appendTo(menu).find('a').bind('click', function () {  if (myMap.getZoom() < 13) { myMap.setZoom(14, { smooth: true }); }
      	     myMap.panTo(groups[0].items[0].center, { flying: 1, callback: function () {  myMap.setZoom(18, { smooth: true });}});      
//myMap.setCenter([53.182762,50.093797], 14);
       if (!placemark.balloon.isOpen()) { placemark.balloon.open();}
                return false;
       });

     goodItem2.appendTo(menu).find('a').bind('click', function () {if (myMap.getZoom() < 13) { myMap.setZoom(14, { smooth: true }); }
          myMap.panTo(groups[1].items[0].center,  { flying: 3,callback: function () { myMap.setZoom(15, { smooth: true });}});
//                  myMap.setCenter( [53.132978, 50.107227], 13);
// zoom callback: function () { map.setZoom(zoom, { smooth: true });}
                if (!placemark2.balloon.isOpen()) {placemark2.balloon.open();} 
                return false;
      });

       goodItem3.appendTo(menu).find('a').bind('click', function () { if (myMap.getZoom() < 13) { myMap.setZoom(14, { smooth: true }); }
            myMap.panTo(groups[2].items[0].center, {flying: 2, callback: function () {  myMap.setZoom(18, { smooth: true });}});     
              //                          myMap.setCenter([53.182762,50.093797], 14);
                if (!placemark3.balloon.isOpen()) {placemark3.balloon.open();}
                return false;
       });



       goodItem4.appendTo(menu).find('a').bind('click', function () { if (myMap.getZoom() < 13) { myMap.setZoom(14, { smooth: true }); }
            myMap.panTo(groups[3].items[0].center, {flying: 2, callback: function () {  myMap.setZoom(18, { smooth: true });}});     
                if (!placemark4.balloon.isOpen()) {placemark4.balloon.open();}
                return false;       });


       goodItem5.appendTo(menu).find('a').bind('click', function () { if (myMap.getZoom() < 13) { myMap.setZoom(14, { smooth: true }); }
            myMap.panTo(groups[4].items[0].center, {flying: 2, callback: function () {  myMap.setZoom(18, { smooth: true });}});     
                if (!placemark5.balloon.isOpen()) {placemark5.balloon.open();}
                return false;       });


       goodItem6.appendTo(menu).find('a').bind('click', function () { if (myMap.getZoom() < 13) { myMap.setZoom(14, { smooth: true }); }
            myMap.panTo(groups[5].items[0].center, {flying: 2, callback: function () {  myMap.setZoom(18, { smooth: true });}});     
                if (!placemark6.balloon.isOpen()) {placemark6.balloon.open();}
                return false;       });



       goodItem7.appendTo(menu).find('a').bind('click', function () { if (myMap.getZoom() < 13) { myMap.setZoom(14, { smooth: true }); }
            myMap.panTo(groups[6].items[0].center, {flying: 2, callback: function () {  myMap.setZoom(18, { smooth: true });}});     
                if (!placemark7.balloon.isOpen()) {placemark7.balloon.open();}
                return false;       });



       goodItem8.appendTo(menu).find('a').bind('click', function () { if (myMap.getZoom() < 13) { myMap.setZoom(14, { smooth: true }); }
            myMap.panTo(groups[7].items[0].center, {flying: 2, callback: function () {  myMap.setZoom(18, { smooth: true });}});     
                if (!placemark8.balloon.isOpen()) {placemark8.balloon.open();}
                return false;       });



       goodItem9.appendTo(menu).find('a').bind('click', function () { if (myMap.getZoom() < 13) { myMap.setZoom(14, { smooth: true }); }
            myMap.panTo(groups[8].items[0].center, {flying: 2, callback: function () {  myMap.setZoom(18, { smooth: true });}});     
                if (!placemark9.balloon.isOpen()) {placemark9.balloon.open();}
                return false;       });



       goodItem10.appendTo(menu).find('a').bind('click', function () { if (myMap.getZoom() < 13) { myMap.setZoom(14, { smooth: true }); }
            myMap.panTo(groups[9].items[0].center, {flying: 2, callback: function () {  myMap.setZoom(18, { smooth: true });}});     
                if (!placemark10.balloon.isOpen()) {placemark10.balloon.open();}
                return false;       });



       goodItem11.appendTo(menu).find('a').bind('click', function () { if (myMap.getZoom() < 13) { myMap.setZoom(14, { smooth: true }); }
            myMap.panTo(groups[10].items[0].center, {flying: 2, callback: function () {  myMap.setZoom(18, { smooth: true });}});     
                if (!placemark11.balloon.isOpen()) {placemark11.balloon.open();}
                return false;       });


       goodItem12.appendTo(menu).find('a').bind('click', function () { if (myMap.getZoom() < 13) { myMap.setZoom(14, { smooth: true }); }
            myMap.panTo(groups[11].items[0].center, {flying: 2, callback: function () {  myMap.setZoom(18, { smooth: true });}});     
                if (!placemark12.balloon.isOpen()) {placemark12.balloon.open();}
                return false;       });



    }


//    jQuery( ".start6" ).remove();
    menu.appendTo($('.START5'));



/*myMap.events.add('click', function (e) {
        if (!myMap.balloon.isOpen()) {
            var coords = e.get('coords');
            myMap.balloon.open(coords, {
                contentHeader:'АНО ДПО "АКАДЕМИЯ"',
                contentBody:'<p>Запись на занятия по тел.:<br/>+7 (846) 255-69-99</p>' + [
                    ].join(', ') ,
                contentFooter:'<sup>Будем рады видеть вас на наших курсах</sup>'
            });
        }
        else {
            myMap.balloon.close();
        }
    });      */


    myMap.setBounds(myMap.geoObjects.getBounds());
}

});

