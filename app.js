const numButton = document.querySelectorAll(".number-btn");
const calcWindow = document.querySelector(".calc-window");
const clearKey = document.querySelector(".clear-btn");

numButton.forEach(button => {
  button.addEventListener("click", () => {
    let numValue = button.textContent;
    calcWindow.value += numValue;
  });
});

clearKey.addEventListener("click", () => {
  calcWindow.value = null;
});
