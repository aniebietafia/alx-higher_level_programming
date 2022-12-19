#!/usr/bin/node

for (let i = 0; i < process.argv; i++){
	if (process.argv === undefined){
		console.log('No argument');
	} else {
		console.log(process.argv[0]);
	}
}
