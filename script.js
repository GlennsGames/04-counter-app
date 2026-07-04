// These buttons and the count display won't change, so we use const to store them
const decreaseButton = document.getElementById('decrease');
const increaseButton = document.getElementById('increase');
const resetButton = document.getElementById('reset');
const countDisplay = document.getElementById('count');

// count will change every time the button is clicked, so we use let
let count = 0;

increaseButton.addEventListener('click', function () {
  count = count + 1;
  countDisplay.textContent = '' + count;
});

decreaseButton.addEventListener('click', function () {
  count = count - 1;
  countDisplay.textContent = '' + count;
});

resetButton.addEventListener('click', function () {
  count = 0;
  countDisplay.textContent = '' + count;
});

increaseButton.addEventListener('click', function () {
  if (count > 50) {
    count--;
    countDisplay.textContent = '' + count;
  }
});

decreaseButton.addEventListener('click', function () {
  if (count < 0) {
    count++;
    countDisplay.textContent = '' + count;
  }
});