'use strict';

function PrintZ() {
	let star = '';
	for (let i = 0; i < 5; i++) {
		star = '';
		for (let j = 0; j < 5; j++) {
			if (i === 0 || i === 4) star += '*';
			else if (!(i + j === 4)) {
				star += ' ';
			} else if (i + j === 4) {
				star += '*';
			}
		}
		console.log(star);
	}
}

PrintZ();
