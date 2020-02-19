function javaLab2() {
	let userName;

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
		return;

		// get player's name
		function playerName() {
			let userName = confirm('Do I really need to know your name?');
			if (userName == true) {
				userName = prompt('Fine, tell me your name');
			} else {
				userName = prompt("Don't be coy, tell me your name");
			}

			// do not allow a blank or cancel
			if (userName === null || userName === '') {
				while (userName === '') {
					console.error("%c EXCUSE ME! You're going to ignore me?", 'background: #000; color: #f00');
					userName = prompt('I asked you what your name was.');
				}
			}
			return userName;
		}

		// begin combat sequence
		function startCombat() {
			// global variables
			let grantHP = getArmor();
			let wins = 0;
			let flight = false;
			let userHP = 40;
			let weapon = weaponType();
			let plural = 'time';
			// random quotes for when the user loses
			let defeatQuotes = [
				`In my perfect world, there would exist no one as weak as you, ${userName}!`,
				`${userName}, can\'t you see how pathetic you are?`,
				`Learn from your defeat, ${userName}`,
				`Next time I suggest fighting back, ${userName}`,
				`${userName} are a weakling!`,
				`${userName}, that was a pathetic`,
				`For wimps like ${userName}, using my full strength is unnecessary.`,
				`${userName}, that was your best?`,
				`Don't be such a baby, ${userName}!`,
				`${userName}, even by the lowest standards, that was really bad!`,
			];
			// random quotes for when the user wins
			let victoryQuotes = [
				`No matter how much you try, you still won't beat me`,
				`Did you believe your pitiful powers could defeat me`,
				`Weak! You're going to have to do better than that.`,
				`My apologies, but I don't have any time to waste playing with you.`,
				`You're all bite and no bark, Grant. This fight almost bored me to tears.`,
				`Did you let me win? No one can be THAT bad!`,
				`L-O-S-E-R`,
				`Don't waste my time with your weak skills, scrub!`,
				`What's the matter? You don't like losing? Well, that's not my problem. Ha, ha, ha, ha, ha!`,
			];
			// random quote generator

			let randomDefeatQuote = defeatQuotes[Math.floor(Math.random() * defeatQuotes.length)];
			let randomVictoryQuote = victoryQuotes[Math.floor(Math.random() * victoryQuotes.length)];

			// loop for battle
			while (userHP > 0 && wins < 3 && flight === false) {
				let fightFlight = confirm("Are you steppin'?\n[OK]\nOr are you runnin'?\n[CANCEL]");
				if (fightFlight === false) {
					flight = false;
					console.log("Run away COWARD!!! You know you're no match for THE ALMIGHTY GRANT!!!");
					break;
				}
				// random damage for user
				let weapon;
				userHP -= Math.floor(Math.random() * 5 + 1);

				// getDamage function uses weapon selection to adjust the damage dealt
				grantHP -= getDamage(weapon.type);

				// User hits points
				if (userHP > 0) {
					console.log(`${userName} has ${userHP} health left.`);
				} else if (userHP <= 0) {
					console.error(`You have been defeated by THE ALMIGHTY GRANT!!!`);
					console.error(randomDefeatQuote);
					break;
				}

				// Grant hit points
				if (grantHP > 0) {
					console.error(`The Almighty Grant has ${grantHP} health left.`);
				} else if (grantHP <= 0) {
					console.error(`WEAK! You\'re going to have to do better than that. You\'ve only knocked me down`);
					grantHP = 10;
					wins++;
					if (wins > 1) {
						plural = 'times';
					}
					if (wins <= 2) {
						console.log(`${userName} has defeated The Almighty Grant ${wins} ${plural}.`);
						console.error(`As they say, when I get knocked down, I get up again.`);
					} else if (grantHP <= 0 && userHP <= 0) {
						console.warn(
							`%c Double KO!!! ${userName} & The Almighty Grant killed each other at the same time.\n There are no winners today. 'background: #000; color: #f00'`
						);
						break;
					} else if (wins === 3 && userHP > 0);
					{
						console.log(`${userName} has defeated The Almighty Grant!`);
						console.error(randomVictoryQuote);
						break;
					}
				}
			}
			function weaponType() {
				let weaponType = prompt('Select your weapon:\nBare Hands\nSword\nBattle-Axe\nAK-47');
				if (weaponType === null) {
					alert('Seriously!? Just answer the question');
					weaponType();
					return;
				}
				weaponType = weaponType.toLowerCase();
				/* I don't know what I'm doing wrong here
			if (
				weaponType != 'bare hands' ||
				weaponType != 'sword' ||
				weaponType != 'battle-axe' ||
				weaponType != 'ak-47'
			) {
				alert('Say again? Do you have marbles in your mouth?');
				weaponType();
				return;
			}
	*/

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
						weaponDamage = Math.floor(Math.random() + 1);
						break;
				}
				return weaponDamage;
			}

			function getArmor() {
				let armorType = prompt(
					'How much armor shall The Almight Grant wear into battle? You decide\nAll the Armor\nA little Extra\nNormal\nNone'
				);
				let grantHP = 10;

				if (armorType === null || armorType === '') {
					alert('Oh come now, answer the question!');
					getArmor();
					return;
				}

				armorType = armorType.toLowerCase();

				/* I don't know what I'm doing wrong here
			if (
				armorType != 'all the armor' ||
				armorType != 'a little extra' ||
				armorType != 'normal' ||
				armorType != 'none'
			) {
				alert("You're mumbling, could you speak a little more clearly");
				getArmor();
				return;
			}
	*/

				switch (armorType) {
					case 'all the armor':
						grantHP = 100;
						return grantHP;
					case 'a little extra':
						grantHP = 20;
						return grantHP;
					case 'normal':
						grantHP = 10;
						return grantHP;
					case 'none':
						grantHP = 1;
						return grantHP;

					default:
						grantHP = 40;
						return grantHP;
				}
			}
		}
	}
	startGame();
}
javaLab2();
