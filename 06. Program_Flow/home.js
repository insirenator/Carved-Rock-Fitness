// If Conditional

let num = 18;

if (num > 10) {
	showMessage("num > 10");
}

// Truthy and Falsy
/*
	Falsy values :  false
					0
					"" or ''
					null
					undefined
					NaN

	Truthy values : Everything not falsy

*/

// Empty arrays and objects are also truthy

if (num > 10) {
	showMessage("num > 10");
}
else {
	showMessage("num < 10");
}

// Ternary Operator
let price = 89;

let message = (price > 50) ? "Expensive" : "Cheap";
showMessage(message); // Expensive

// Block Scope using 'let'
if (true) {
	let discount = 20;
	showMessage(discount);
}

// console.log(discount); // This line will create an error

// For loop
for (let i = 0; i < 10; i++) {
	console.log(i);
}

// While loop
let n = 10;
while(n !== 0) {
	console.log(n);
	n--;
}

// Do While loop
 n = 10;

 do {
 	n *= 3;
 } while (n < 100);

 // n = 270