// listItems = JSON.stringify(listItems);
// console.log(listItems);

// listItems = JSON.parse(listItems);
// console.log(listItems);

let listItems = [];

const itemInput = document.createElement('input');
document.body.append(itemInput);

const addItemButton = document.createElement('button');
addItemButton.innerHTML = `Add Item`;
document.body.append(addItemButton)
addItemButton.addEventListener('click', function () {
	createItem();
})

function createItem() {
	if (itemInput.value !== '') {
		listItems.push(itemInput.value);
		renderList();
		itemInput.value = '';
	}
}

function removeItem() {
	listItems.filter()
}

const listContainer = document.createElement('ul')
listContainer.classList.add('listContainer');
document.body.prepend(listContainer);

function renderList() {
	console.log(listItems);

	if (document.querySelectorAll('.listItem')) {
		document.querySelectorAll('.listItem').forEach(item => {
			item.remove();
		});
	}

	for (let i = 0; i < listItems.length; i++) {

		let item = listItems[i]

		const listItem = document.createElement('li');
		listItem.classList.add('listItem');
		listItem.innerHTML = listItems[i];
		listContainer.append(listItem);

		const editButton = document.createElement('button');
		editButton.innerHTML = `Edit`;
		listItem.append(editButton);
		editButton.addEventListener('click', function() {
			// Add input to element
		})

		const deleteButton = document.createElement('button')
		deleteButton.innerHTML = `Delete`;
		listItem.append(deleteButton);
		deleteButton.addEventListener('click', function(item) {
			this.parentNode.remove();
			listItems.splice(i, 1);
		})
	}
}
renderList();