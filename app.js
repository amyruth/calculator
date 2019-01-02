const numButton = document.querySelectorAll('.number-btn');
const calcWindow = document.querySelector('.calc-window');
const clearKey = document.querySelector('.clear-btn');
const keyPad = document.querySelector('.calc-keypad');
const decimal = document.querySelector('.is-decimal');
const operatorButton = document.querySelectorAll('.operator-btn');
let currentKey = null;
let operation = null;

numButton.forEach(button => {
  button.addEventListener('click', () => {
    currentKey = button.textContent;
    calcWindow.value += currentKey;
  });
});

clearKey.addEventListener('click', () => {
  currentKey = '';
  calcWindow.value = null;
});

operatorButton.forEach(opKey => {
  opKey.addEventListener('click', e => {
    console.log(e.target.textContent);
    operation = e.target.textContent;
    calcWindow.value += operation;
  });
});
