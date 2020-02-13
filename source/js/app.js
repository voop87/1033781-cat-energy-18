//Выпадающее меню
var menuBtn = document.querySelector(".page-header__menu-toggle");
var jsMenuBtn = document.querySelector(".js-menu-toggle");
var menu = document.querySelector(".main-nav");

menuBtn.classList.add("page-header__menu-toggle--js");
function showMenu() {
  menuBtn.classList.toggle("page-header__menu-toggle--closed");
  menu.classList.toggle("main-nav--closed");
}
