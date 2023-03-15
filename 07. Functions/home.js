// A function is a piece of code that can run independently
// A function can be created using the keyword 'function'

function sayHello() {
	console.log("Hello");
}

sayHello();	// Function call

// Function expression

const greet = function (name) {
	console.log(`Hello, ${name}`);
};

greet('Shakeeb'); // Hello, Shakeeb

// Functions can also return values.

function add(a, b) {
	return a + b;
}

console.log(add(10, 30));	// 40

// Function scope

function calcDiscount(price) {
	let discount = 0.2; // only accessible from inside the function
	return price * discount;
}

console.log(calcDiscount(299));

// console.log(discount); // Error, discount is not defined.

// Changing the percentage off
changePercentOff(40);
