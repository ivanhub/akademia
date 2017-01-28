ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [53.182762,50.093797],
            zoom: 17
        }, {
            searchControlProvider: 'yandex#publicMap'
        }),
        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: '���������������, ����������� ����',
            balloonContent: '443099, �. ������, ��. ����������������� 33, ��. 232, ���.: (846) 205-77-66'
            }, {
            // �����.
            // ���������� ������� ������ ��� ������.
            iconLayout: 'default#image',
            // ��� ����������� ������ �����.
            iconImageHref: 'http://samarapb.ru/img_contact/icon22.png',
            // ������� �����.
            iconImageSize: [50, 50],
            // �������� ������ �������� ���� ������ ������������
            // � "�����" (����� ��������).
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