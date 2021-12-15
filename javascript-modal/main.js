var $modalButton = document.querySelector('.open-modal-button');
var $noButton = document.querySelector('.no-button');
var $background = document.querySelector('#background');
var $popUp = document.querySelector('#pop-up');
var buttonClicked = false;
function button(event) {
  if (buttonClicked === false) {
    buttonClicked = true;
    $background.className = 'position-fixed background-dark';
    $popUp.className = 'row center-of-page white-box position-fixed';
  } else if (buttonClicked === true) {
    buttonClicked = false;
    $background.className = 'position-fixed';
    $popUp.className = 'row center-of-page white-box position-fixed no-display';
  }

}
$modalButton.addEventListener('click', button);
$noButton.addEventListener('click', button);
