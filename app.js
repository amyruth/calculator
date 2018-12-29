const numButton = document.querySelectorAll(".number-btn");
const calcWindow = document.querySelector(".calc-window");
const clearKey = document.querySelector(".clear-btn");
const keyPad = document.querySelector('.calc-keypad');
const decimal = document.querySelector('.is-decimal');
let currentKey = null;


// numButton.forEach(button => {
//   button.addEventListener("click", () => {
//     let currentKey = button.textContent;
//     calcWindow.value += currentKey;
//   });
// });

clearKey.addEventListener("click", () => {
	currentKey = "";
  	calcWindow.value = null;
});

// changed to event iistener on parent element. I forgot about that
//need to add condition to prevent multiple decimals in a row

// determine if key pressed is decimal
//is last character entered a number

//if last character is an operator key, add 0 before decimal

keyPad.addEventListener('click', (e) => {
	console.log(e.target);
	

	if(e.target.classList.contains('is-decimal')){
		//checks if last key pressed was a number
		//if not a number, do nothing
		if(!currentKey !== '.'){
			currentKey += e.target.textContent;
			console.log(calcWindow.value);
		}
	}

	if(e.target.classList.contains('number-btn')){
		currentKey = e.target.textContent;
		
	}
	calcWindow.value += currentKey;
});