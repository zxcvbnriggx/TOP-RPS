const choices = ['rock', 'paper', 'scissor'];

function getComputerChoice() {
	const index = Math.floor(Math.random() * choices.length);
	return choices[index];
}

function getHumanChoice() {
	while (true) {
		const input = window.prompt('Enter rock, paper, or scissor: ');

		if (input === null) return null;

		const choice = input.trim().toLowerCase();

		const isInputValid = choices.includes(choice);

		if (isInputValid) return choice;
	}
}

console.log(getHumanChoice());
