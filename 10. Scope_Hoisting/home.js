// SCOPE

const app = {
	productId: 1234,
	userName: 'Joe',
	orderNumber: 678,
};

function showProductId() {
	console.log(app.productId);
}

showProductId(); // 1234

// Functional Scope

function outer() {
	let productId = 456;

	function inner() {
		let productId = 789;

		console.log("In inner() : ", productId);
	}

	inner(); // 789

	console.log("In outer() : ", productId);
}

outer(); // 456

// Hoisting
console.log(foo);	// undefined
var foo;

console.log(bar);	// undefined
var bar = 6;
console.log(bar);	// 6

// Function Hoisting

showUserName();

function showUserName() {
	console.log(app.userName);
}

// Strict Mode 
'use strict'

let person = {
	name: "shakeeb",
	age: 22,
};

console.log(person)

/*
	using the strict mode makes it necessary for the 
	programmer to use the declaration keywords such as
	'let', 'const', 'var'.
*/
