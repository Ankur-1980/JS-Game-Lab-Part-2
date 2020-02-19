(function() {
	let userName;
	let weapon;
	function startGame() {
		// play the game, yes or no
		let playGame = confirm('Do you dare challenge The Almighty Grant?');
		if (playGame == true) {
			userName = playerName();
			startCombat();
		} else {
			alert('I knew you were too scared to fight me');
			console.log('%c Come back when you have the nerve.', 'background: #444; color: #f77000');
		}
		return; // stop the script
	}
	// get player's name
	function playerName() {
		let userName = confirm('Do I really need to know your name?');
		if (userName == true) {
			userName = prompt('Fine, tell me your name');
		} else {
			userName = prompt("Don't be coy, tell me your name");
		}

		if (userName === '') {
			while (userName === '') {
				console.warn("%c EXCUSE ME! You're going to ignore me?", 'background: #000; color: #f00');
				userName = prompt('I asked you what your name was.');
			}
		}
		return userName;
	}

	// begin combat sequence
	function startCombat() {
		// global variables
		let grantHP = 10;
		let wins = 0;
		let fight = true;
		let userHP = getArmor();
		let weapon = weaponType();
		// loop for battle
		while (userHP > 0 && wins < 3 && fight === true) {
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

	function weaponType() {
		let weaponType = prompt('Select your weapon:\nBare Hands\nSword\nBattle-Axe\nAK-47').toLowerCase();
		if (weaponType === null || weaponType === '') {
			alert('Seriously!? Just answer the question');
			getArmor();
			return;
		}
		weaponType = weaponType.toLocaleLowerCase();
		switch (weaponType) {
			case 'bare hands':
				weapon = { type: 'bare hands', attack: 'punched' };
				break;
			case 'sword':
				weapon = { type: 'sword', attack: 'hacked' };
				break;
			case 'battle-axe':
				weapon = { type: 'battle-axe', attack: 'gashed' };
				break;
			case 'ak-47':
				weapon = { type: 'ak-47', attack: 'shot' };
				break;
			default:
				weapon = { type: 'rocks', attack: 'hit' };
				console.error("You're going to throw rocks at me? Fine, good luck");
		}
		return weapon;
	}
	function getDamage() {
		let weaponDamage;
		switch (weapon.type) {
			case 'bare hands':
				weaponDamage = Math.floor(Math.random() * 2 + 1);
				break;
			case 'sword':
				weaponDamage = Math.floor(Math.random() * 3 + 2);
				break;
			case 'battle-axe':
				weaponDamage = Math.floor(Math.random() * 6 + 4);
				break;
			case 'ak-47':
				weaponDamage = Math.floor(Math.random() * 50 + 25);
				break;
			case 'rocks':
				weaponDamage = Math.floor(Math.random());
				break;
		}
		return weaponDamage;
	}
	function getArmor() {
		let armorType = prompt(
			'How much armor are you wearing going into battle:\nAll the Armor\nNormal\nBarely Any\nNone'
		);
		let userHP = 40;

		if (armorType === null || armorType === '') {
			alert('Oh come now, answer the question!');
			getArmor();
			return;
		}
		armorType = armorType.toLocaleLowerCase();

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
				userHP = 40;
				return userHP;
		}
	}
	startGame();
})();
