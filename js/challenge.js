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

