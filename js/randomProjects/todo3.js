let itemList = [];

let input = document.createElement('input');
document.body.append(input);

const addButton = document.createElement('button');
addButton.innerHTML = `Add Item`
document.body.append(addButton);
addButton.addEventListener('click', function () {
	addItem();
	// renderList();
})

function addItem() {
	if (input.value !== '') {
		itemList.push(input.value);
		const listItem = document.createElement('li');
		listItem.innerHTML = input.value;
		listContainer.prepend(listItem);

		const editButton = document.createElement('button');
		editButton.innerHTML = `Edit Item`;
		listItem.append(editButton);

		const deleteButton = document.createElement('button');
		deleteButton.innerHTML = `Delete Item`;
		listItem.append(deleteButton);
		deleteButton.addEventListener('click', function() {
			this.parentNode.remove();
		})

		input.value = '';
	}
}

const listContainer = document.createElement('ul');
document.body.prepend(listContainer);

function renderList() {
	for (let i = 0; i < document.querySelectorAll('li').length; i++) {
		const listItem = document.querySelectorAll('li')[i];
		listItem.remove();
	}

	for (let i = 0; i < itemList.length; i++) {
		addItem();
	}
}
renderList();