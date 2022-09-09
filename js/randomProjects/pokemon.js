// let randomPokemon = Math.floor(Math.random()*916);
// fetch(`https://pokeapi.co/api/v2/pokemon/${randomPokemon}`).then(function(data){
// 	return data.json()
// }).then(function(data){
// 	let name = document.createElement('h2');
// 	document.body.append(name);
// 	name.innerHTML = data.name.charAt(0).toUpperCase() + data.name.slice(1);
// 	return data.sprites
// }).then(function(data){
// 	return data.front_default
// }).then(function(data){
//  	console.log(data);
// 	 let img = document.createElement('img');
// 	 document.body.append(img);
// 	 img.src = data;
// 	 img.style.width = '200px';
// })


let container = document.createElement('div');
container.classList.add('container');
document.body.prepend(container);

for (let i = 1; i <= 151; i++) {
	let pokemonContainer = document.createElement('div');
	pokemonContainer.classList.add('pokemonContainer');
	pokemonContainer.classList.add('pokemonContainer'+i);
	document.getElementsByClassName('container')[0].append(pokemonContainer);
	// let randomPokemon = Math.floor(Math.random() * 916);
	// fetchURL = fetch(`https://pokeapi.co/api/v2/pokemon/${randomPokemon}`);
	const fetchURL = fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
	fetchURL.then(function (data) {
		return data.json();
	}).then((data) => {
		let name = document.createElement('span');
		document.getElementsByClassName('pokemonContainer'+i)[0].append(name);
		name.innerHTML = data.name.charAt(0).toUpperCase() + data.name.slice(1);
		console.log(data);
		let img = document.createElement('img');
		document.getElementsByClassName('pokemonContainer'+i)[0].append(img);
		img.src = data.sprites.front_default;
		img.addEventListener('click', () => {
			if (img.src == data.sprites.front_default) {
				img.src = data.sprites.back_default;
			} else if (img.src == data.sprites.back_default) {
				img.src = data.sprites.front_default;
			}
		})
	})
};