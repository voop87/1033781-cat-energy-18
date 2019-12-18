var slideBefore = document.querySelector('.slider__image--before');
var sliderProgress = document.querySelector('.slider__progress');
var sliderContainer = document.querySelector('.example__slider');

function showSlide(widthPercent, state) {
  slideBefore.style.width = widthPercent;

  if (state === '--before') {
    sliderProgress.classList.remove('slider__progress--after');
    sliderContainer.classList.remove('example__slider--after');
  } else {
    sliderProgress.classList.remove('slider__progress--before');
    sliderContainer.classList.remove('example__slider--before');
  }
  sliderProgress.classList.add('slider__progress' + state);
  sliderContainer.classList.add('example__slider' + state);
}
