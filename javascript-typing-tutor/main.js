var $span = document.querySelectorAll('span');
// $heading.addEventListener('keydown', myFunction)
document.addEventListener('keydown', myFunction);
function myFunction(event) {
  console.log(event);
  console.log(event.target);
  console.log(event.target.tagName);

  for (var spanElements = 0; spanElements < $span.length; spanElements++) {
    if (event.key !== $span[spanElements].textContent) {
      $span[spanElements].className = 'red-color';
      return;
    }
    if (event.key === $span[spanElements].textContent) {
      $span[spanElements].className = 'green-color';
      $span[spanElements + 1].className = 'underline';
    }
    // if ($span[spanElements].className === 'green-color') {
    // }
    // if ($span[spanElements - 1].className === 'green-color') {
    //   spanElements++;
    // }
  }
  // if (event[key] === span[0])
  // for (var i = 0; i < $span.length; i++){
  //   if (event[key] === span[i] ){
  //     true
  //   }
  // }
}

// the first letter should start with an underscore
// for each letter that is typed, highlight green without any underscore.
// if the letter is typed incorrectly highlight red with an underscore
// if the letter is typed correctly, move the underscore to the next letter
// probably need a boolean (true and false) to determine whether the text is correct
