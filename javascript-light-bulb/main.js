var $button = document.querySelector('.on-button');
var $background = document.querySelector('.background-light');
function lights(event) {
  if ($button.className === 'on-button') {
    $button.className = 'off-button';
    $background.className = 'background-dark';
  } else if ($button.className === 'off-button') {
    $button.className = 'on-button';
    $background.className = 'background-light';
  }
}

$button.addEventListener('click', lights);
