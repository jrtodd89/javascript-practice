function rps() {
	function roll() {
		const roll = Math.ceil(Math.random() * 3);
		// console.log(roll)
		return roll;
	}

	if (roll() == 1) {
		var p1 = 'rock'
	} else if (roll() == 2) {
		var p1 = 'paper';
	} else {
		var p1 = 'scissors'
	}

	if (roll() == 1) {
		var p2 = 'rock'
	} else if (roll() == 2) {
		var p2 = 'paper';
	} else {
		var p2 = 'scissors'
	}

	if (document.querySelector('.result')) {
		document.querySelector('.result').remove();
	}

	let result = document.createElement('p');
	result.classList.add('result');

	if (p1 === p2) {
		result.innerHTML = ('Tie!')
		console.log(`P1 rolled ${p1}`);
		console.log(`P2 rolled ${p2}`);
	} else if (p1 == 'rock' && p2 == 'paper') {
		result.innerHTML = (`Player 2 wins with ${p2}`);
		console.log(`P1 rolled ${p1}`);
		console.log(`P2 rolled ${p2}`);
	} else if (p1 == 'rock' && p2 == 'scissors') {
		result.innerHTML = (`Player 1 wins with ${p1}`);
		console.log(`P1 rolled ${p1}`);
		console.log(`P2 rolled ${p2}`);
	} else if (p1 == 'scissors' && p2 == 'paper') {
		result.innerHTML = (`Player 1 wins with ${p1}`)
		console.log(`P1 rolled ${p1}`);
		console.log(`P2 rolled ${p2}`);
	} else if (p1 == 'scissors' && p2 == 'rock') {
		result.innerHTML = (`Player 2 wins with ${p2}`);
		console.log(`P1 rolled ${p1}`);
		console.log(`P2 rolled ${p2}`);
	} else if (p1 == 'paper' && p2 == 'rock') {
		result.innerHTML = (`Player 1 wins with ${p1}`)
		console.log(`P1 rolled ${p1}`);
		console.log(`P2 rolled ${p2}`);
	} else if (p1 == 'paper' && p2 == 'scissors') {
		result.innerHTML = (`Player 2 wins with ${p2}`);
		console.log(`P1 rolled ${p1}`);
		console.log(`P2 rolled ${p2}`);
	}

	document.body.append(result);
}

const button = document.createElement('button');
button.innerHTML = 'Play Rock Paper Scissors!';
document.body.append(button);
button.addEventListener('click', rps);