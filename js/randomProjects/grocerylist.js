// const form = document.createElement('form');

// const listContainer = document.createElement('div');
// listContainer.classList.add('listContainer');
// document.body.append(listContainer);

// const addItem = document.createElement('button');
// addItem.innerHTML = `Add Item`;
// addItem.type = 'submit'
// document.body.append(addItem);
// addItem.addEventListener('click', function(event) {
// 	event.preventDefault();
// 	createListItem();
// })


// function createListItem() {
// 	const listItem = document.createElement('div');
// 	listItem.classList.add('listItem');

// 	const itemInput = document.createElement('input')
// 	const editItem = document.createElement('button');
// 	const deleteItem = document.createElement('button');
// 	editItem.innerHTML = `Edit Item`
// 	deleteItem.innerHTML = `Delete Item`
// 	listContainer.append(listItem);
// 	listItem.append(itemInput);
// 	listItem.append(editItem);
// 	listItem.append(deleteItem);

// 	deleteItem.addEventListener('click', deleteListItem);
// }

// function deleteListItem() {
// 	return this.parentNode.remove();
// }


const listContainer = document.createElement('div');
document.body.append(listContainer);
const input = document.createElement('input');
listContainer.append(input);
const submit = document.createElement('button');
submit.innerHTML = 'Add Item';
listContainer.append(submit);
const clear = document.createElement('button');
clear.innerHTML = 'Clear List';
listContainer.append(clear);

function showItems() {
	for (let i = 0; i < Object.values(localStorage).length; i++) {

		const element = Object.values(localStorage)[i];
		let item = document.createElement('p');
		item.classList.add('item');
		item.innerHTML = element;
		listContainer.prepend(item);
		const itemDelete = document.createElement('button');
		itemDelete.innerHTML = 'Delete';
		item.append(itemDelete);
		itemDelete.addEventListener('click', function(e) {
			e.preventDefault();
			this.parentNode.remove();
			
		})
	}
};
	
showItems();

submit.addEventListener('click', function(e) {
	e.preventDefault();
	const key = new Date();
	localStorage.setItem(key.getTime(), input.value);
	let item = document.createElement('p');
	item.classList.add('item');
	item.innerHTML = input.value;
	listContainer.prepend(item);
	const itemDelete = document.createElement('button');
	itemDelete.innerHTML = 'Delete';
	item.append(itemDelete);
});

function deleteItem() {
	return this.parentNode.remove();
}

clear.addEventListener('click', function(e) {
	e.preventDefault();
	localStorage.clear();
})