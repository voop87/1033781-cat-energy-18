//Выпадающее меню
var menuBtn = document.querySelector(".page-header__menu-toggle");
var jsMenuBtn = document.querySelector(".js-menu-toggle");
var menu = document.querySelector(".main-nav");

menuBtn.classList.add("page-header__menu-toggle--js");
function showMenu() {
  menuBtn.classList.toggle("page-header__menu-toggle--closed");
  menu.classList.toggle("main-nav--closed");
}

//Интерактивная карта Yandex
ymaps.ready(function () {
  var myMap = new ymaps.Map("map", {
    center: [59.938674, 30.322858],
    zoom: 18
  }, {
    searchControlProvider: "yandex#search"
  }),

  // Создаём макет содержимого.
  MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
    '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
  ),

  myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
    hintContent: "Cat Energy",
    balloonContent: ""
  }, {
    // Опции.
    // Необходимо указать данный тип макета.
    iconLayout: "default#image",
    // Своё изображение иконки метки.
    iconImageHref: "../img/map-pin-google.png",
    // Размеры метки.
    iconImageSize: [100, 85],
    // Смещение левого верхнего угла иконки относительно
    // её "ножки" (точки привязки).
    iconImageOffset: [-5, -38]
  });

  myMap.geoObjects
      .add(myPlacemark);
});