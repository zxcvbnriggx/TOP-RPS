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

function playGame() {
	let humanScore = 0;
	let computerScore = 0;
	let round = 0;

	function playRound(humanChoice, computerChoice) {
		if (!humanChoice) {
			round = 99;
			return 'Game cancelled';
		}

		if (humanChoice === computerChoice)
			return `Tie!, you both chose ${humanChoice}`;

		const winAgainst = {
			rock: 'scissor',
			paper: 'rock',
			scissor: 'paper',
		};

		if (winAgainst[humanChoice] === computerChoice) {
			humanScore++;
			return 'You win the round';
		}

		computerScore++;
		return 'You lose the round';
	}

	while (round < 5) {
		console.log(`Round ${round + 1}`);

		const humanSelection = getHumanChoice();
		const computerSelection = getComputerChoice();

		console.log(playRound(humanSelection, computerSelection));

		round++;
	}

	console.log('--- Game over ---');
	console.log(`Your score: ${humanScore}`);
	console.log(`Computer score: ${computerScore}`);
}

playGame();
