//Интерактивная карта Google
function initMap() {
  var address = {lat: 59.9386667, lng: 30.321771};
  var map = new google.maps.Map(
      document.querySelector('.page-footer__map'), {zoom: 16, center: address});

  var marker = new google.maps.Marker({
    position: address,
    map: map,
    icon: '../img/map-pin-google.png'
  });
}
