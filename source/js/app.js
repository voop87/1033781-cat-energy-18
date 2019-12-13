var slideBefore = document.getElementById("slider__image--before");
var slideAfter = document.getElementById("slider__image--after");
var btnBefore = document.getElementById("slider__control--before");
var btnAfter = document.getElementById("slider__control--after");
var progress = document.getElementById("slider__progress");

var showSlideBefore = function () {
  slideAfter.setAttribute("hidden", "hidden");
  slideBefore.removeAttribute("hidden");
  progress.style.left = "5px";
};
var showSlideAfter = function () {
  slideBefore.setAttribute("hidden", "hidden");
  slideAfter.removeAttribute("hidden");
  progress.style.left = "42px";
};

btnBefore.addEventListener("click", showSlideBefore);
btnAfter.addEventListener("click", showSlideAfter);
