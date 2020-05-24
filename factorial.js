const myFactorial = function(n) {
	result = 1;
	
	if(n===0) return 1;
	else {
		num = 1;
		while(num <= n) {
			result *= num;
			num += 1;
		}
	}
	return result;
}

//number = console.input('Enter a number');

for(i=1; i<5; i++){
	//let x = `100 divided by 5 is ${100/5}`;
	let factorialResult = `input = ${i}, output = ${myFactorial(i)}`;
	console.log(factorialResult);
	//console.log(x);
}
