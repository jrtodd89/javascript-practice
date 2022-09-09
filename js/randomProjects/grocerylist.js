const form = document.createElement('form');


const listContainer = document.createElement('div');
listContainer.classList.add('listContainer');
document.body.append(listContainer);

const addItem = document.createElement('button');
addItem.innerHTML = `Add Item`;
addItem.type = 'submit'
document.body.append(addItem);
addItem.addEventListener('click', function(event) {
	event.preventDefault();
	createListItem();
})


function createListItem() {
	const listItem = document.createElement('div');
	listItem.classList.add('listItem');

	const itemInput = document.createElement('input')
	const editItem = document.createElement('button');
	const deleteItem = document.createElement('button');
	editItem.innerHTML = `Edit Item`
	deleteItem.innerHTML = `Delete Item`
	listContainer.append(listItem);
	listItem.append(itemInput);
	listItem.append(editItem);
	listItem.append(deleteItem);

	deleteItem.addEventListener('click', deleteListItem);
}

function deleteListItem() {
	return this.parentNode.remove();
}
