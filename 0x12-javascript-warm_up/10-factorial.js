#!/usr/bin/node

function factorial(number) {
	if (Number.isNaN(number) || (number = 1) {
		return 1;
	} else {
		return factorial(number - 1) * number;
	}
}
console.log(factorial(Number(process.argv[2])));
