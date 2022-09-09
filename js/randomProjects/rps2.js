function roll() {
	const roll = Math.ceil(Math.random() * 3);
	return roll;
}

const rock = document.createElement('button');
const paper = document.createElement('button');
const scissors = document.createElement('button');

rock.innerHTML = 'Rock';
paper.innerHTML = 'Paper';
scissors.innerHTML = 'Scissors';

document.body.append(rock);
document.body.append(paper);
document.body.append(scissors);

let p1 = '';

rock.addEventListener('click', () => {
	p1 = 'rock';
	play();
});
paper.addEventListener('click', () => {
	p1 = 'paper';
	play();
});
scissors.addEventListener('click', () => {
	p1 = 'scissors';
	play();
});


if (document.querySelector('.result')) {
	document.querySelector('.result').remove();
}
const result = document.createElement('p')

p2 ='';
function play() {

	if (roll() == 1) {
		var p2 = 'rock'
	} else if (roll() == 2) {
		var p2 = 'paper';
	} else {
		var p2 = 'scissors'
	}

	function printResults(text) {
		result.innerHTML = text
		console.log(`P1 chose ${p1}`);
		console.log(`P2 chose ${p2}`);
	}

	if (p1 === p2) {
		printResults(`Tie!`);
	} else if (p1 == 'rock' && p2 == 'paper') {
		printResults(`Player 2 wins with ${p2}`);
	} else if (p1 == 'rock' && p2 == 'scissors') {
		printResults(`Player 1 wins with ${p1}`);
	} else if (p1 == 'scissors' && p2 == 'paper') {
		printResults(`Player 1 wins with ${p1}`)
	} else if (p1 == 'scissors' && p2 == 'rock') {
		printResults(`Player 2 wins with ${p2}`);
	} else if (p1 == 'paper' && p2 == 'rock') {
		printResults(`Player 1 wins with ${p1}`)
	} else if (p1 == 'paper' && p2 == 'scissors') {
		printResults(`Player 2 wins with ${p2}`);
	}
}

document.body.append(result);