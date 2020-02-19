const defeatQuotes = [
	`In my perfect world, there would exist no one as weak as you, !`,
	`, can\'t you see how pathetic you are?`,
	`Learn from your defeat, `,
	`Next time I suggest fighting back, `,
	` are a weakling!`,
	`, that was a pathetic`,
	`For wimps like , using my full strength is unnecessary.`,
	`, that was your best?`,
	`Don't be such a baby, !`,
	`, even by the lowest standards, that was really bad!`,
];

const victoryQuotes = [
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

let randomDefeatQuote = defeatQuotes[Math.floor(Math.random() * defeatQuotes.length)];
let randomVictoryQuote = victoryQuotes[Math.floor(Math.random() * victoryQuotes.length)];

console.log(randomDefeatQuote);
console.log(randomVictoryQuote);
