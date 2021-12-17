var $tabContainer = document.querySelector('.tab-container');
var $tabElements = document.querySelectorAll('.tab');
var $viewElements = document.querySelectorAll('.view');

$tabContainer.addEventListener('click', function (event) {
  if (event.target.matches('.tab')) {
    var $dataView = event.target.getAttribute('data-view');
    for (var i = 0; i < $viewElements.length; i++) {
      $viewElements[i].className = 'hidden';
      if ($dataView === $viewElements[i].getAttribute('data-view')) {
        $viewElements[i].classList.replace('hidden', 'view');
      }
    }
    for (var j = 0; j < $tabElements.length; j++) {
      $tabElements[j].classList.remove('active');
    }

    event.target.classList.add('active');
  }
});
