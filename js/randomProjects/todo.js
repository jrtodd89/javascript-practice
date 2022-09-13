const input = document.createElement('input');
document.body.append(input);

const submit = document.createElement('button');
submit.innerHTML = `Add Item`;
document.body.append(submit);
submit.addEventListener('click', function (e) {
	e.preventDefault();
	createItem();
});

const clear = document.createElement('button');
clear.innerHTML = `Clear List`;
document.body.append(clear);
clear.addEventListener('click', function (e) {
	e.preventDefault();
	clearList();
});

function createItem() {
	if (input.value !== '') {
		const date = new Date;
		const listItemID = date.getTime()
		localStorage.setItem(listItemID, input.value);

		const listItem = document.createElement('p');
		listItem.classList.add('listItem');
		listItem.innerHTML = localStorage.getItem(listItemID);
		document.body.prepend(listItem);
		editItem(listItem, listItemID);
		deleteItem(listItem, listItemID);
	}
}

function editItem(listItem, listItemID) {
	const editItem = document.createElement('button');
	editItem.innerHTML = `Edit Item`;
	listItem.append(editItem);

	editItem.addEventListener('click', function (e) {
		e.preventDefault();
		localStorage.removeItem(listItemID);
		localStorage.setItem(listItemID, prompt('Edit item:'));
		this.parentNode.remove();

		renderList();

	})
}

function deleteItem(listItem, listItemID) {
	const deleteItem = document.createElement('button');
	deleteItem.innerHTML = `Delete Item`;
	listItem.append(deleteItem);
	deleteItem.addEventListener('click', function (e) {
		e.preventDefault();
		this.parentNode.remove();
		localStorage.removeItem(listItemID);
	})
}

function clearList() {
	localStorage.clear();
	const listItems = document.querySelectorAll('.listItem');
	listItems.forEach(listItem => {
		listItem.remove();
	})
}

function renderList() {
	for (let i = 0; i < Object.keys(localStorage).length; i++) {
		const listItem = document.createElement('p');
		listItem.innerHTML = Object.values(localStorage)[i];
		document.body.prepend(listItem);
		editItem(listItem, Object.keys(localStorage)[i]);
		deleteItem(listItem, Object.keys(localStorage)[i]);
	}
}
renderList();