// Types in Javascript

// positive number
let num = 10;
showMessage(num);

// negative number
num = -7;
showMessage(num);

// Operator precedence

let res0 = 10 * 2 + 5;		// 25
let res1 = 10 * (2 + 5);	// 70

// strings
let str = 'hello world';
showMessage(str);

showMessage(parseFloat("213.14"));	// string -> float
showMessage(parseInt("213"));		// string -> int

let flag = true;
showMessage(flag);
showMessage(!Flag);

// null and undefined

showMessage(null == undefined);		 // true
showMessage(null === undefined);	 // false

// Objects

const person = {name: "john", age: 20};

showMessage(`Name is ${person.name} and Age is ${person.age}`);