var $heading = document.querySelector('.countdown-display');
function countDown(event) {
  $heading.textContent--;
  if ($heading.textContent <= 0) {
    $heading.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(counter);
  }
}

var counter = setInterval(countDown, 1000);
