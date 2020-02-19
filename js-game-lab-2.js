// (function() {
let weaponType;
const userName = '';
// start the game
function startGame() {
	const newGame = confirm('You dare challenge The Almighty Grant?');
	// if yes
	if (newGame == true) {
		playerName();
		startCombat();
	} else {
		alert('Walk away scaredy cat');
		console.log('%c Come back when you have the nerve.', 'background: #444; color: #f77000');
		// console.error('Run away COWARD!!!');
	}

	// player name
	function playerName() {
		const userName = prompt('Who are you? Do I really need to know your name?');
		if (userName == '') {
			while (userName == '') {
				console.warn("%c EXCUSE ME! You're going to ignore me?", 'background: #000; color: #f00');
				userName = prompt('I asked you what your name was.');
			}
		}
		console.log(userName);

		// begin combat sequence
		function startCombat() {
			let grantHP = 10;
			let userHP = armorType;
			let wins = 0;
			let fight = true;
			let weapon = weaponType;

			// loop for battle
			while (userHP > 0 && (wins < 3) & (fight === true)) {
				// confirm pop-up to fight or run away
				let fightFlight = confirm(
					'Are you going to come at me bro?\n[OK]\nOr are you going to run away?\n[CANCEL]'
				);
				if (fightFlight === false) {
					fight = true;
					console.log("Run away COWARD!!! You know you're no match for THE ALMIGHTY GRANT!!!");
					break;
				}
				userHP -= Math.floor(Math.random() * 5 + 1);
				grantHP -= getDamage(weapon.type);
				// log remaining health for Grant & user
				console.error(`${userName} has ${userHP} remaining`);
				console.log(
					`Grant has been ${weapon.attack} with ${userName}'s ${weapon.type}.\n\tGrant's HP = ${grantHP}`
				);
				if (grantHP <= 0) {
					console.warn(`I'm not dead yet, let's do this again!`);
					grantHP = 10;
					wins++;
				}
			}
			if (wins === 3 && userHP <= 0) {
				console.warn(
					`Double KO!!! ${userName} & The Almighty Grant killed each other at the same time.\n There are no winners today.`
				);
			} else if (wins === 3 && userHP > 0) {
				console.log(`${userName} has defeated The Almighty Grant!`);
			} else if (wins < 3) {
				console.warn(`${userName}, you lose, you get nothing, good day sir!`);
			}
		}

		// user chooses a weapon
		function weaponSelection() {
			let weaponType = prompt('Select your weapon:\nBare hands\nSword\nBattle-Axe\nAK-47').toLowerCase();
			switch (weaponType) {
				case 'bare hands':
					userWeapon = { type: 'bare hands', attack: 'punched' };
					break;
				case 'sword':
					userWeapon = { type: 'sword', attack: 'hacked' };
					break;
				case 'battle-axe':
					userWeapon = { type: 'battle-axe', attack: 'gashed' };
					break;
				case 'ak-47':
					userWeapon = { type: 'ak-47', attack: 'shot' };
					break;
				default:
					console.error('ERROR');
					break;
			}
			return userWeapon;
		}

		// damage function based on weapon type
		function getDamage() {
			let attackDamage;
			switch (userWeapon.type) {
				case 'bare hands':
					attackDamage = Math.floor(Math.random() * 2);
					break;
				case 'sword':
					attackDamage = Math.floor(Math.random() * 5 + 1);
					break;
				case 'battle-axe':
					attackDamage = Math.floor(Math.random() * 10 + 3);
					break;
				case 'ak-47':
					attackDamage = Math.floor(Math.random() * 50 + 25);
					break;
				default:
					console.error('ERROR');
			}
			return attackDamage;
		}

		// level of difficulty
		function armorType() {
			let armorType = prompt(
				'How much armor are you wearing going into battle:\nAll the Armor\nNormal\nBarely Any\nNone'
			).toLowerCase();
			let userHP = 40;
			switch (armorType) {
				case 'all the armor':
					userHP = 100;
					return userHP;
				case 'normal':
					userHP = 40;
					return userHP;
				case 'barely any':
					userHP = 20;
					return userHP;
				case 'none':
					userHP = 1;
					return userHP;
				default:
					console.log('ERROR');
					return;
			}
		}
	}
}
// call the function to start the game
startGame();
// })();

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
