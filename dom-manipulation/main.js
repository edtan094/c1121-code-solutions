var clickedButton = 0;
var $hotButton = document.querySelector('.hot-button');
var $clickCount = document.querySelector('.click-count');

function addingClicks(clicks) {
  $clickCount.textContent = clickedButton++;
  if (clickedButton > 4 && clickedButton < 7) {
    $hotButton.className = 'hot-button cool';
  } else if (clickedButton > 7 && clickedButton < 10) {
    $hotButton.className = 'hot-button tepid';
  } else if (clickedButton > 10 && clickedButton < 13) {
    $hotButton.className = 'hot-button warm';
  } else if (clickedButton > 13 && clickedButton < 16) {
    $hotButton.className = 'hot-button hot';
  } else if (clickedButton > 16) {
    $hotButton.className = 'hot-button nuclear';
  }
}

$hotButton.addEventListener('click', addingClicks);
