const username = document.getElementsByClassName('username')[0];
const password = document.getElementsByClassName('password')[0];
const confirmPassword = document.getElementsByClassName('confirmPassword')[0];
const submit = document.getElementsByClassName('submit')[0];
const nonMatchPassword = document.createElement('p');
document.forms[0].append(nonMatchPassword);

submit.addEventListener('click', function (e) {
	e.preventDefault();
	if (username.value != ''|| password.value != '' || confirmPassword.value != '') {
		if (password.value === confirmPassword.value && username.value != '' && password.value != '') {
			console.log(`passwords match!`)
			localStorage.setItem('Username', username.value);
			localStorage.setItem('Password', password.value);
			console.log(localStorage.getItem('Username'));
			console.log(localStorage.getItem('Password'));
			nonMatchPassword.innerHTML = '';
		} else if (password.value !== confirmPassword.value) {
			console.log(`passwords do not match`)
			nonMatchPassword.innerHTML = `Passwords do not match`;
		};
	}
});