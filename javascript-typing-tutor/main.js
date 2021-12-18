var $span = document.querySelectorAll('span');
var spanElements = 0;
document.addEventListener('keydown', myFunction);
function myFunction(event) {
  console.log(event);
  console.log(event.target);
  console.log(event.target.tagName);
  if (event.key !== $span[spanElements].textContent) {
    $span[spanElements].className = 'red-color';
    return;
  }
  if (event.key === $span[spanElements].textContent) {
    $span[spanElements].className = 'green-color';
    $span[spanElements + 1].className = 'underline';
  }
  spanElements++;
}

// the first letter should start with an underscore
// for each letter that is typed, highlight green without any underscore.
// if the letter is typed incorrectly highlight red with an underscore
// if the letter is typed correctly, move the underscore to the next letter
// probably need a boolean (true and false) to determine whether the text is correct
