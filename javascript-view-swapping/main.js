var $tabContainer = document.querySelector('.tab-container');
var $tabElements = document.querySelectorAll('.tab');
var $viewElements = document.querySelectorAll('.view');

$tabContainer.addEventListener('click', function (event) {
  if (event.target.matches('.tab')) {
    var $dataView = event.target.getAttribute('data-view');
    for (var viewElementsPage = 0; viewElementsPage < $viewElements.length; viewElementsPage++) {
      $viewElements[viewElementsPage].className = 'hidden';
      if ($dataView === $viewElements[viewElementsPage].getAttribute('data-view')) {
        $viewElements[viewElementsPage].classList.replace('hidden', 'view');
      }
    }
    for (var viewTab = 0; viewTab < $tabElements.length; viewTab++) {
      $tabElements[viewTab].classList.remove('active');
    }

    event.target.classList.add('active');
  }
});
