var $taskList = document.querySelector('.task-list');
function myFunction(event) {
  console.log('event target:', event.target);
  console.log('event target tagname:', event.target.tagName);
  if (event.target.tagName === 'BUTTON') {
    var element = event.target.closest('.task-list-item');
    console.log('closest element:', element);
    element.remove();
  }

}
$taskList.addEventListener('click', myFunction);
