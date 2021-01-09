'use strict';

const readline = require('../readInput');

function grade(marks) {
	if (marks > 90) console.log('excellent');
	else if (marks > 80 && marks <= 90) console.log('good');
	else if (marks > 70 && marks <= 80) console.log('fair');
	else if (marks > 60 && marks <= 70) console.log('meets expectations');
	else console.log('below par');
}

readline.on('line', (marks) => grade(marks));

