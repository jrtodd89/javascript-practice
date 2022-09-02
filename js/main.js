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
