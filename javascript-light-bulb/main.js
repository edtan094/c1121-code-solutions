var $button = document.querySelector('.on-button');
var $background = document.querySelector('.background-light');
var isLightOn = true;
function lights(event) {
  if (isLightOn === true) {
    isLightOn = false;
    $button.className = 'off-button';
    $background.className = 'background-dark';
  } else if (isLightOn === false) {
    isLightOn = true;
    $button.className = 'on-button';
    $background.className = 'background-light';
  }
}

$button.addEventListener('click', lights);
