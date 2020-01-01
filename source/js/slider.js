var slideBefore = document.querySelector(".slider__image--before");
var slideAfter = document.querySelector(".slider__image--after");
var sliderProgress = document.querySelector(".slider__progress");
var sliderContainer = document.querySelector(".example__slider");

function showSlide(widthPercent, state) {
  slideBefore.style.width = widthPercent;

  if (state === "--before") {
    sliderProgress.classList.remove("slider__progress--after");
    sliderContainer.classList.remove("example__slider--after");
    slideAfter.style.width = 0;
  } else {
    sliderProgress.classList.remove("slider__progress--before");
    sliderContainer.classList.remove("example__slider--before");
    slideAfter.style.width = widthPercent;
    slideBefore.style.width = 0;
  }
  sliderProgress.classList.add("slider__progress" + state);
  sliderContainer.classList.add("example__slider" + state);
}
