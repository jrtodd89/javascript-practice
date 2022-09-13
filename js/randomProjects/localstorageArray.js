let itemList = []

const itemContainer = document.createElement('ul');
document.body.prepend(itemContainer);

const input = document.createElement('input');
document.body.append(input);

const add = document.createElement('button');
add.innerHTML = `Add`;
document.body.append(add);
add.addEventListener('click', function () {
	if (input.value !== '') {
		itemList.push(input.value);
		localStorage.setItem('list', JSON.stringify(itemList));

		document.querySelectorAll('li').forEach(item => {
			item.remove();
		});

		renderList();
		input.value = '';
	}
})

// const render = document.createElement('button');
// render.innerHTML = `Render`;
// document.body.append(render);
// render.addEventListener('click', function () {
// 	renderList();
// })

function renderList() {
	
	for (let i = 0; i < itemList.length; i++) {

		const item = document.createElement('li');
		item.innerHTML = itemList[i];
		itemContainer.append(item);

		const editItem = document.createElement('button');
		editItem.innerHTML = `Edit`;
		item.append(editItem);
		editItem.addEventListener('click', function () {
			console.log(itemList);
		})

		const deleteItem = document.createElement('button');
		deleteItem.innerHTML = `Delete`;
		item.append(deleteItem);
		deleteItem.addEventListener('click', function () {
			itemList.splice(i, 1);
			this.parentNode.remove();
			console.log(itemList);
		})

	}
}
renderList();