const servantContainer = document.createElement('div');
servantContainer.classList.add('servantContainer')
servantContainer.style.display = 'flex';
servantContainer.style.flexWrap = 'wrap';
document.body.append(servantContainer);

fetch(`https://api.atlasacademy.io/export/NA/nice_servant_lore.json`).then(function(data) {
	return data.json();
}).then((data)=> {
	console.log(data);
	data.forEach(element => {

		if (element.extraAssets.narrowFigure.ascension !== undefined) {
		
			const servant = document.createElement('div');
			servant.classList.add('servant')
			servant.style.width = '200px';
			servantContainer.append(servant);
			
			const servantImg = document.createElement('img');
			servantImg.src = element.extraAssets.narrowFigure.ascension[4];
			servantImg.style.border = '10px solid black';
			servantImg.style.borderRadius = '35px';
			servantImg.style.cursor = 'pointer';
			servant.append(servantImg);
			
			const servantName = document.createElement('p');
			servantName.style.textAlign = 'center'
			servantName.innerHTML = element.name;
			
			servant.append(servantName);

			servantImg.addEventListener('click', function() {
				if (this.style.borderColor == 'green') {
					this.style.borderColor = 'red';
				} else {
					this.style.borderColor = 'green'
				}
			})
		}
	});
})