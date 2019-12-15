var slideBefore = document.querySelector('.slider__image--before');
var sliderProgress = document.querySelector('.slider__progress');

function showSlide(widthPercent, progress) {
  slideBefore.style.width = widthPercent;

  if (progress === '--left') {
    sliderProgress.classList.remove('slider__progress--right');
  } else {
    sliderProgress.classList.remove('slider__progress--left');
  }
  sliderProgress.classList.add('slider__progress' + progress);
}
