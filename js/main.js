// ------------ DAILY CHALLENGE ------------
// Prompt the user for two different numbers
// Convert the values to integers
// Store the two integers as variables
// Compare the two numbers
// Alert the larger number

// ------------ TAKE HOME CHALLENGE ------------
// Add an edge case to your daily challenge code
// Check if the user input anything other than a number
// If so, prompt the user again to input a number


// ATTEMPT ONE
// let numberOne = prompt(`Choose a number.`);
// numberOne = parseInt(numberOne);
// let numberTwo = prompt(`Choose a second number.`);
// numberTwo = parseInt(numberTwo);

// if (numberOne == numberTwo) {
// 	alert(`Numbers are indentical.`);
// } else {
// 	const largerNumber = Math.max(numberOne, numberTwo);
// 	alert(`${largerNumber} is the largest number.`);
// }

// ATTEMPT TWO
// function getNumber() {
// 	let numberOne = prompt(`Choose a number.`);
// 	numberOne = parseInt(numberOne);
// 	let numberTwo = prompt(`Choose a second number.`);
// 	numberTwo = parseInt(numberTwo);
// 	if (isNaN(numberOne) || isNaN(numberTwo)) {
// 		getNumber();
// 	} else {
// 		if (numberOne === numberTwo) {
// 			alert(`Numbers are indentical.`);
// 		} else {
// 			const largerNumber = Math.max(numberOne, numberTwo);
// 			alert(`${largerNumber} is the larger number.`);
// 		}
// 	}
// }
// getNumber();

// ATTEMPT THREE

// Prompt the user for two different numbers
// Convert the values to integers
// Store the two integers as variables
// Compare the two numbers
// Alert the larger number

// ------------ TAKE HOME CHALLENGE ------------
// Add an edge case to your daily challenge code
// Check if the user input anything other than a number
// If so, prompt the user again to input a number 

let numberOne = '';
let numberTwo = '';

function getNumber() {
	if (isNaN(numberOne) || typeof(numberOne) != 'number') {
		numberOne = prompt(`Choose your first number.`);
		numberOne = parseInt(numberOne);
		getNumber();
	} else if (isNaN(numberTwo) || typeof(numberTwo) != 'number') {
		numberTwo = prompt(`Choose a second number.`);
		numberTwo = parseInt(numberTwo);
		getNumber();
	} else {
		if (numberOne === numberTwo) {
			alert(`Numbers are indentical.`);
		} else {
			const largerNumber = Math.max(numberOne, numberTwo);
			alert(`${largerNumber} is the larger number.`);
		}
	}
}
getNumber();