function startGame() {
	// start the game
	const newGame = confirm('Would you like to battle against the Almighty Grant?');
	// user name
	if (newGame == true) {
		const userName = prompt('Poor fool, what is your name?');
		// basic game values
		let userHP = 40;
		let grantHP = 10;
		let wins = 0;
		// battle begins
		console.log(`${userName} starts off with ${userHP} \n Grant starts off with ${grantHP}`);
		// what happens during battle
		while (userHP > 0 && wins < 3) {
			userHP -= Math.floor(Math.random() * 2 + 1);
			grantHP -= Math.floor(Math.random() * 2 + 1);
			console.log(`${userName} has ${userHP} remaining`);
			console.log(`Grant has ${grantHP} remaining`);
			// if both user & grant get to zero in the same loop
			if (grantHP <= 0 && userHP <= 0) {
				console.log('DOUBLE KO!!!');
				// if only Grant's health points get to zero
			} else if (grantHP <= 0) {
				console.log(`I'm not dead yet, let's do this again!`);
				grantHP = 10;
				wins++;
			}
		}
		// if you get three wins
		if (wins === 3) {
			console.log(`Nope, I am really dead this time \n ${userName} is VICTORIOUS!!!`);
		}

		// if you lose all of you health points before getting three wins
		else {
			console.log(`${userName}, you lose, you get nothing, good day sir!`);
		}

		// if you say no to a new game
	} else {
		alert('Run away COWARD!!!');
	}
}
startGame();
