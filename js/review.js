let fizzButton = document.createElement('button');
fizzButton.innerHTML = 'FizzBuzz time!';
fizzButton.style.display = "block";
document.body.append(fizzButton);
fizzButton.addEventListener("click", fizzBuzz);

function fizzBuzz() {
	for(let i = 0; i <= 100; i++) {
		if (i % 5 == 0 && i % 3 == 0) {
			console.log('FizzBuzz');
		} else if (i % 3 == 0) {
			console.log('Fizz');
		} else if (i % 5 == 0) {
			console.log('Buzz');
		} else {
			console.log(i);
		}
	}
}
	
let catButton = document.createElement('button');
catButton.innerHTML = 'Get me pictures of cats!';
catButton.style.display = "block";
document.body.append(catButton);
catButton.addEventListener("click", getCatPicture);

function getCatPicture() {
	let url = fetch('https://api.thecatapi.com/v1/images/search');
	url.then(function(data) {
		// console.log(data);
		return data.json();
	}).then(function(data) {
		// console.log(data[0]);
		if (document.querySelector('.catImg')) {
			document.querySelector('.catImg').remove();
		}
		let img = document.createElement('img');
		document.body.append(img);
		img.src = data[0].url;
		img.classList.add('catImg');
		img.style.width = '500px';
	});
}

for (let i = 0; i < 3; i++) {
	const h1 = document.createElement('h1');
	h1.innerHTML = 'Bitwise';
	document.body.appendChild(h1)
	h1.addEventListener('click', () => {
		h1.style.color = 'red';
	})
}

for(let i = 0; i < 5; i++) {
	const h1 = document.createElement('h1');
	h1.innerHTML = 'Hello World';
	document.body.appendChild(h1);
	h1.addEventListener('click', () => {
		h1.style.color = 'blue'
	})
}

for(let i = 0; i < 3; i++) {
	let h1 = document.createElement('h1');
	h1.innerHTML = 'Test3';
	document.body.appendChild(h1);
	h1.addEventListener('click',()  => {
		h1.style.color = 'purple';
	})
}

let cat = {
	name: 'May',
	legs: 4,
	furColor: 'white',
	meow: function() {
		alert(`${this.name} says Meow!`);
	},
	purr: function() {
		alert(`${this.name} purrs.`);
	}
}

class Animal {
	constructor(type, name, legs, color) {
		this.type=type,
		this.name=name,
		this.legs=legs,
		this.color=color
	} 
}

const animal1 = new Animal('Cat', 'May', 4, 'White');
console.log(animal1);

let div = document.createElement('span');
div.innerHTML +=
	`Type: ${animal1.type}
	Name: ${animal1.name}
	Legs: ${animal1.legs}
	Color: ${animal1.color}`;
document.body.append(div);


class Car {
	constructor(id, make, model, year, color) {
		this.id = id,
		this.make = make,
		this.model = model,
		this.year = year,
		this.color = color
	} honk() {
		alert(`The ${this.color} ${this.year} ${this.make} ${this.model} honks it's horn!`)
	}
}

let car1 = new Car(1, 'Ford', 'Mustang', 1967, 'Black');
let car2 = new Car(2, 'Chevrolet', 'Chevelle', 1970, 'Blue');
let car3 = new Car(3, 'Jeep', 'Grand Cherokee', 1993, 'Red');
let car4 = new Car(4, 'Ford', 'Escape', 2007, 'Black')

const cars = [
	car1, car2, car3, car4
];

for (i = 0; i < cars.length; i++) {
	const p = document.createElement('p')
	p.innerHTML = `${cars[i].year} ${cars[i].color} ${cars[i].make} ${cars[i].model}`
	document.body.append(p);
}
