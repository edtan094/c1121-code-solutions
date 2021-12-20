var $span = document.querySelectorAll('span');
var spanElements = 0;
document.addEventListener('keydown', myFunction);
function myFunction(event) {
  if (event.key !== $span[spanElements].textContent) {
    $span[spanElements].className = 'red-color';
    return;
  } else {
    $span[spanElements].className = 'green-color';
    $span[spanElements + 1].className = 'underline';
  }
  spanElements++;
}
