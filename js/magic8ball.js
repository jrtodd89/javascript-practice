function random(range) {
	const random = Math.floor(Math.random() * range)
	return random;
}

const answers = [
	"It is certain",
	"Reply hazy, try again",
	"Don't count on it",
	"It is decidedly so",
	"Ask again later",
	"My reply is no",
	"Without a doubt",
	"Better not tell you now",
	"My sources say no",
	"Yes definitely",
	"Cannot predict now",
	"Outlook not so good",
	"You may rely on it",
	"Concentrate and ask again",
	"Very doubtful",
	"As I see it, yes",
	"Most likely",
	"Outlook good",
	"Yes",
	"Signs point to yes"
]

const answersContainer = document.createElement('div');
answersContainer.setAttribute('id', 'answers')
answersContainer.classList.add('hide');
answersContainer.innerHTML = answers[random(answers.length)];
document.body.prepend(answersContainer);

const form = document.createElement('form');
form.classList.add('askForm');
form.setAttribute('name', 'questionForm');
document.body.append(form);

const label = document.createElement('label');
label.innerHTML = `Ask me anything!`;
label.setAttribute('for', 'question');
document.getElementsByClassName('askForm')[0].append(label);

const input = document.createElement('input');
input.type = 'text';
input.setAttribute('name', 'question')
input.classList.add('question');
document.getElementsByClassName('askForm')[0].append(input);

const submit = document.createElement('button');
submit.type = 'submit';
submit.innerHTML = `Ask`;
submit.addEventListener('click', function (event) {
	event.preventDefault();
	var inputValue = document.getElementsByClassName('question')[0].value;
	answersContainer.classList.toggle('hide');
	label.classList.toggle('hide');
	input.classList.toggle('hide');
	submit.classList.toggle('hide');
	let questionContainer = document.createElement('span');
	questionContainer.innerHTML = inputValue;
	document.body.append(questionContainer);
});
document.getElementsByClassName('askForm')[0].append(submit);