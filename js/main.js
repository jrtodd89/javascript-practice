//Create a new codepen
//Write a function that accepts a number as an argument
//Alert the user whether the given number is even or odd
//Call your function

function numberAlert(input) {
	if (input % 2 == 0) {
		alert(`Your number is even!`)
	} else if (input % 2 != 0) {
		alert(`Your number is odd!`)
	}
}
// numberAlert(42);

// Write a function that accepts a password (string)
// Validate the password using the following rules:
// Must be 6-20 characters long
// Must start with a letter
// Alert the user if their password has been accepted or why their password was rejected

function password(input) {
	let regExp = /[a-z]/i;
	if (input.length < 6) {
		alert(`Password is too short!`)
	} else if (input.length > 20) {
		alert(`Password is too long!`)
	} else if (regExp.test(input.charAt(0))) {
		alert(`Password has been accepted.`)
	} else {
		alert(`Password does not begin with a letter.`)
	}
}

password('deKmN00ofe6O');



// function createElement(type) {
// 	document.createElement(type);
// }

// function placeElement(element, parent) {
// 	parent.appendChild(element);
// }

// function updateElement(element, html) {
// 	element.innerHTML = html;
// }

// function updateElementStyle(element, styleName, styleValue) {
// 	element.style[styleName] = styleValue;
// }

// function updateElementClass(element, className) {
// 	element.classList.add(className);
// }

// function removeElementClass(element, className) {
// 	element.classList.remove(className);
// }

// function removeElement(element){
// 	element.remove();
// }

