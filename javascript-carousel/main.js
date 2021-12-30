var $image = document.querySelector('img');
var allImages = ['images/001.png', 'images/004.png', 'images/007.png', 'images/025.png', 'images/039.png'];
var allImagesIndex = -1;
var imageSwapCounter = setInterval(imageSwap, 3000);
function imageSwap() {
  allImagesIndex++;
  if (allImagesIndex >= allImages.length) {
    allImagesIndex = 0;
    circleButtons();
    $image.removeAttribute('src');
    $image.setAttribute('src', allImages[allImagesIndex]);
  } else {
    circleButtons();
    $image.removeAttribute('src');
    $image.setAttribute('src', allImages[allImagesIndex]);
  }
}

var $leftArrow = document.querySelector('#left-arrow');
var $rightArrow = document.querySelector('#right-arrow');
$leftArrow.addEventListener('click', leftArrow);
$rightArrow.addEventListener('click', rightArrow);

function leftArrow(event) {
  allImagesIndex--;
  clearInterval(imageSwapCounter);
  imageSwapCounter++;
  setInterval(imageSwap, 3000);
  if (allImagesIndex < 0) {
    allImagesIndex = allImages.length - 1;
    $image.removeAttribute('src');
    $image.setAttribute('src', allImages[allImagesIndex]);
    circleButtons();
  } else {
    circleButtons();
    $image.removeAttribute('src');
    $image.setAttribute('src', allImages[allImagesIndex]);
  }
}

function rightArrow(event) {
  allImagesIndex++;
  clearInterval(imageSwapCounter);
  imageSwapCounter++;
  setInterval(imageSwap, 3000);
  if (allImagesIndex >= allImages.length) {
    allImagesIndex = 0;
    $image.removeAttribute('src');
    $image.setAttribute('src', allImages[allImagesIndex]);
    circleButtons();
  } else {
    circleButtons();
    $image.removeAttribute('src');
    $image.setAttribute('src', allImages[allImagesIndex]);
  }
}
var $circleButtons = document.querySelectorAll('.circle-button');
function circleButtons() {
  for (var circleButtonsIndex = 0; circleButtonsIndex < $circleButtons.length; circleButtonsIndex++) {
    if (circleButtonsIndex === allImagesIndex) {
      $circleButtons[circleButtonsIndex].classList.replace('far', 'fas');
    }
    if (circleButtonsIndex !== allImagesIndex) {
      $circleButtons[circleButtonsIndex].classList.replace('fas', 'far');
    }
  }

}

imageSwap();
