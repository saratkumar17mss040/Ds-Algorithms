'use strict';

// const readline = require('../readInput');
const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout,
});

function isANumberPrime(numberOfTestCases) {
	const numbers = [];
	for (let i = 1; i <= numberOfTestCases; i++) {
		readline.on('line', (n) => {
			numbers.push(n);
		});
	}

	for (let j = 0; j < numbers.length; j++) {
		let isPrime = true;
		if (numbers[j] === 1) console.log('not prime');
		else if (numbers[j] > 1) {
			for (let k = 2; k < numbers[j]; k++) {
				if (numbers[j] % k === 0) isPrime = false;
			}
			if (isPrime) console.log('prime');
			else console.log('not prime');
		} else console.log('not prime');
	}
}

readline.on('line', (t) => isANumberPrime(t));
