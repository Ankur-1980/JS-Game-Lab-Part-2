let weaponType;
// start the game
function startGame() {
	const newGame = confirm("You're back to do battle against the Almighty Grant?");
	// if yes
	if (newGame === true) {
		playerName();
		startCombat();
	} else {
		alert('Run away COWARD!!!');
		console.log('%c Run away COWARD!!! ', 'background: #444; color: #f77000');
		// console.error('Run away COWARD!!!');
	}
}
// call the function to start the game
function playerName() {
	let userName = prompt("Who are you again? I couldn't be bothered to remember your name");
	if (userName === '') {
		while (userName === '') {
			console.warn("%c EXCUSE ME! You're going to ignore me?", 'background: #000; color: #f00');
			userName = prompt('I asked you what your name was.');
		}
	}
	return userName;
}

startGame();

function startCombat() {
	let grantHP = 10;
	let userHP = armorType;
	let wins = 0;
	let flight = false;
	let weapon = weaponType;

	while (userHP > 0 && (wins < 3) & (flight === false)) {
		let fightFlight = confirm('Are you going to come at me bro?\n[OK]\nOr are you going to run away?\n[CANCEL]');
		if (fightFlight === false) {
			console.log("Run away COWARD!!! You know you're no match for THE ALMIGHTY GRANT!!!");
			break;
		}
		userHP -= getDamage();
	}
}

function getDamage() {
	let randomHP = Math.floor(Math.random() * 5 + 1);
	return randomHP;
}
// function startGame() {
// 	// start the game
// 	const newGame = confirm('Would you like to battle against the Almighty Grant?');
// 	// user name
// 	if (newGame == true) {
// 		const userName = prompt('Poor fool, what is your name?');
// 		// basic game values
// 		let userHP = 40;
// 		let grantHP = 10;
// 		let wins = 0;
// 		let getDamage = Math.floor(Math.random() * 5 + 1);
// 	} else {
// 		alert('Run away COWARD!!!');
// 	}
// }
// function startCombat {
// 	// battle begins
// 	console.log(`${userName} starts off with ${userHP} \n Grant starts off with ${grantHP}`);
// 	// what happens during battle
// 	while (userHP > 0 && wins < 3) {
// 		userHP -= getDamage;
// 		grantHP -= getDamage;
// 		console.log(`${userName} has ${userHP} remaining`);
// 		console.log(`Grant has ${grantHP} remaining`);
// 		let fightFlight = prompt('Are you brave enough to attack again, or are you going to run away?\n"Attack or Run Away')
// 		// if both user & grant get to zero in the same loop
// 		if (grantHP <= 0 && userHP <= 0) {
// 			console.log('DOUBLE KO!!!');
// 			// if only Grant's health points get to zero
// 		} else if (grantHP <= 0) {
// 			console.log(`I'm not dead yet, let's do this again!`);
// 			grantHP = 10;
// 			wins++;
// 		}
// 	}
// 	// if you get three wins
// 	if (wins === 3) {
// 		console.log(`Nope, I am really dead this time \n ${userName} is VICTORIOUS!!!`);
// 	}

// 	// if you lose all of you health points before getting three wins
// 	else {
// 		console.log(`${userName}, you lose, you get nothing, good day sir!`);
// 	}

// 	// if you say no to a new game
// }
// startGame();
