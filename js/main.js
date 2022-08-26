let randomPokemon = Math.floor(Math.random()*916);
fetch(`https://pokeapi.co/api/v2/pokemon/${randomPokemon}`).then(function(data){
	return data.json()
}).then(function(data){
	let name = document.createElement('h2');
	document.body.append(name);
	name.innerHTML = data.name.charAt(0).toUpperCase() + data.name.slice(1);
	return data.sprites
}).then(function(data){
	return data.front_default
}).then(function(data){
 	console.log(data);
	 let img = document.createElement('img');
	 document.body.append(img);
	 img.src = data;
	 img.style.width = '200px';
	})
	
	
	let url = fetch('https://api.thecatapi.com/v1/images/search');
	
	url.then(function(data) {
		return data.json();
	}).then(function(data) {
		console.log(data[0]);
		let img = document.createElement('img');
		document.body.append(img);
		img.src = data[0].url;
		img.style.width = '500px';

});