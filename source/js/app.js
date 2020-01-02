//Выпадающее меню
var menuBtn = document.querySelector(".page-header__menu-toggle");
var jsMenuBtn = document.querySelector(".js-menu-toggle");
var menu = document.querySelector(".main-nav");

menuBtn.classList.add("page-header__menu-toggle--js");
function showMenu() {
  menuBtn.classList.toggle("page-header__menu-toggle--closed");
  menu.classList.toggle("main-nav--closed");
}

//Интерактивная карта Google
function initMap() {
  var address = {lat: 59.9387412, lng: 30.3228941};
  var map = new google.maps.Map(
      document.querySelector(".page-footer__google-map"), {zoom: 18, center: address});

  var marker = new google.maps.Marker({
    position: address,
    map: map,
    icon: "../img/map-pin-google.png"
  });
}
