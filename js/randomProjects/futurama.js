function random(length) {
	return Math.ceil(Math.random() * length);
}

// fetch (`http://futuramaapi.herokuapp.com/api/v2/characters`).then((data) => {
// 	return data.json();
// }).then((data) => {
// 	return data[random(data.length)];
// }).then((data) => {
// 	console.log(data.PicUrl);
// 	console.log(data.Name);

// 	const pic = document.createElement('img');
// 	pic.src = data.PicUrl;
// 	document.body.append(pic);
// 	const name = document.createElement('p');
// 	name.innerHTML = data.Name;
// 	document.body.append(name);
// })


function getRandomQuote() {
	fetch(`https://futuramaapi.herokuapp.com/api/quotes/1`).then((data) => {
		return data.json();
	}).then((data) => {
		const character = data[0];

		if (document.querySelector('.quoteContainer')) {
			document.querySelector('.quoteContainer').remove();
		}

		const quoteContainer = document.createElement('div');
		quoteContainer.classList.add('quoteContainer');
		document.body.append(quoteContainer);

		let name = document.createElement('p');
		name.innerHTML = character.character;

		let quote = document.createElement('p');
		quote.innerHTML = character.quote;

		let image = document.createElement('img');
		image.src = character.image;

		document.getElementsByClassName('quoteContainer')[0].append(quote);
		document.getElementsByClassName('quoteContainer')[0].append(name);
		document.getElementsByClassName('quoteContainer')[0].append(image);
		
	})
}

const button = document.createElement('button');
button.innerHTML = `Get a random quote!`;
document.body.append(button);
button.addEventListener('click', getRandomQuote);