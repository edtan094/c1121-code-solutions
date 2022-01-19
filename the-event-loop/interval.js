let count = 3;
var counter = setInterval(countDown, 1000);

function countDown(number) {
  if (count === 0) {
    console.log('Blast off!');
    clearInterval(counter);
  } else {
    console.log(count);
    count--;
  }
}
