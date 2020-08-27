

//ask user to enter (papers, rock, scissors)
function playerInput() {
	let userPlay = prompt("Paper, Rock, or  Scissors?").toLowerCase();
	return userPlay;
}
//function to allow computer to return (rock, papers, scissors)
function computerPlay() {
	let option = ["paper", "rock", "scissors"];
	const randomOption = option[Math.floor(Math.random() * option.length)]
	return randomOption;

}
//takes user's play and compare with computer's play and determins the winner 
function playRound(playerSelection, computerSelection) {
	if (playerSelection === computerSelection) {
		return "Its a tie, try again";
	}
	if (playerSelection === "paper") {
			if (computerSelection === "rock") {
				return "You win";
			}else {
				return "You lose";
			}
	}
	if (playerSelection === "rock") {
			if (computerSelection === "paper") {
				return "You lose";
			}else {
				return "You win";
			}
	}
	if (playerSelection === "scissors") {
			if (computerSelection === "paper") {
				return "You win";
			}else {
				return "You lose";
			}
	}
}
//creates 5 rounds and count scores of each rounds
function game() {
	let cs = 0;
	let ps = 0;

	for (let i = 1; i <= 5; i++) {
		switch (playRound(playerInput(), computerPlay())) {
			case "You lose":
				cs += 1;
				break;
			case "You win":
				ps += 1;
				break;
			default:
		}
	}	

	function scoreCount() {
		if (cs === ps) {
			return "Its a tie";
		}else if (cs > ps) {
			return "Computer Won, Try again next time";
		}else {
			return "You Won, Congratulations!";
		}

	}


	console.log(`computer scores ${cs} and your score ${ps}`, scoreCount());
}

console.log(game());





