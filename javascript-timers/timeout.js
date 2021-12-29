function changeHeading(event) {
  var $heading = document.querySelector('.message');
  $heading.textContent = 'Hello There';
}

setTimeout(changeHeading, 2000);
