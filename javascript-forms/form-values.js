function submitInput(event) {
  event.preventDefault();
  var submission = {
    name: '',
    email: '',
    message: ''
  };
  var nameValue = $form.elements[0].value;
  var emailValue = $form.elements[1].value;
  var messageValue = $form.elements[2].value;
  submission.name = nameValue;
  submission.email = emailValue;
  submission.message = messageValue;
  $form.reset();
  console.log('form data:', submission);
}
var $form = document.querySelector('#contact-form');
$form.addEventListener('submit', submitInput);
