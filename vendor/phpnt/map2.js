ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [53.132978, 50.107227],
            zoom: 17
        }, {
            searchControlProvider: 'yandex#publicMap'
        }),
        myPlacemark2 = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Автодром - Росавтоакадемия',
            balloonContent: 'г. Самара, ул. Утевская, напротив 4 роты полка ДПС ГИБДД Управление МВД России по г. Самаре).'
            }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'http://samarapb.ru/img_contact/icon22.png',
            // Размеры метки.
            iconImageSize: [50, 50],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-32, -50],
             balloonContentSize: [270, 99],
	                balloonLayout: "default#imageWithContent",
	                balloonImageHref: '/images/map/ballon222.png',
	                balloonImageOffset: [-70, -100],
	                balloonImageSize: [260, 106],
	                balloonShadow: false,
	                balloonAutoPan: false
        });

    myMap.geoObjects.add(myPlacemark);
});