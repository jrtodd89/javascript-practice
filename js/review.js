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