// let counter = 0;
// const interval = setInterval(() => {
// 	console.log(counter)
// 	counter++;
// 	if (counter > 5) {
// 		clearInterval(interval);
// 		console.log('done!')
// 	}
// }, 1000);

let counter = localStorage.getItem('Counter');

const counterDisplay = document.createElement('p');
const addButton = document.createElement('button');
const resetButton = document.createElement('button');
const subtractButton = document.createElement('button');

counterDisplay.innerHTML = counter;
addButton.innerHTML = 'Add';
resetButton.innerHTML = 'Reset';
subtractButton.innerHTML = 'Subtract';

document.body.append(counterDisplay);
document.body.append(addButton);
document.body.append(resetButton);
document.body.append(subtractButton);

counterDisplay.style.fontSize = '32px';
counterDisplay.style.fontWeight = 'bold';

function counterColor() {
	if (counter > 0) {
		counterDisplay.style.color = 'green';
	} else if (counter < 0) {
		counterDisplay.style.color = 'red';
	} else {
		counterDisplay.style.color = 'black';
	}
}

counterColor();

addButton.addEventListener('click', () => {
	counter++;
	localStorage.setItem('Counter', counter);
	counterDisplay.innerHTML = counter;
	counterColor();
})

subtractButton.addEventListener('click', () => {
	counter--;
	localStorage.setItem('Counter', counter);
	counterDisplay.innerHTML = counter;
	counterColor();
})

resetButton.addEventListener('click', () => {
	counter = 0;
	localStorage.setItem('Counter', counter);
	counterDisplay.innerHTML = counter;
	counterColor();
})