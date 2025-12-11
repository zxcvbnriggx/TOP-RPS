const choices = ['rock', 'paper', 'scissor'];

function getComputerChoice() {
	const index = Math.floor(Math.random() * choices.length);
	return choices[index];
}
