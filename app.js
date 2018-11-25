const numButton = document.querySelectorAll(".number-btn");
const calcWindow = document.querySelector(".calc-window");
const clearKey = document.querySelector(".clear-btn");
const keyPad = document.querySelector('.calc-keypad');
const decimal = document.querySelector('.is-decimal');



// numButton.forEach(button => {
//   button.addEventListener("click", () => {
//     let numValue = button.textContent;
//     calcWindow.value += numValue;
//   });
// });

clearKey.addEventListener("click", () => {
  calcWindow.value = null;
});

decimal.addEventListener('click', () = {

});

// changed to event iistener on parent element. I forgot about that
keyPad.addEventListener('click', (e) => {
	console.log(e.target);
	if(e.target.classList.contains('number-btn')){
		let numValue = e.target.textContent;
		calcWindow.value += numValue;
	}
});