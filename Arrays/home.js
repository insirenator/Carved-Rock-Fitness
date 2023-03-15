// Arrays in javascript

let arr = [1,2,3,4,5,6,7,8,9];

console.log(arr);

console.log(arr[0]);	// 1st Element
console.log(arr[4]);	// 5th Element
console.log(arr[8]);	// 9th Element

// Convert into comma separated string.
console.log(arr.toString());

//join() method
console.log(arr.join("-"));

// popping and pushing

let popped = arr.pop(); // Return popped value
console.log(arr);
console.log("Popped Value = ", popped);

let newLen = arr.push(4); // Returns new length
console.log(arr);

// Shift and Unshift
let shifted = arr.shift(); // Returns the shifted value
console.log(shifted);
console.log(arr);

arr.unshift(0);
console.log(arr);

// Concatenation
let a1 = [1,2,3];
let a2 = [6,7,8];
let a3 = [9,4,3];

let A1 = a1.concat(a2);
let A2 = a1.concat(a2, a3);
let A3 = a1.concat(a1, a2, a3);

console.log(A1);
console.log(A2);
console.log(A3);

//Splicing
let lang = ["html", "css", "js", "python"];
console.log(lang);

console.log("Splicing with no removal : ");
lang.splice(2, 0, "c++");
console.log(lang);

console.log("Splicing by removing 1 element : ")
console.log(lang);
lang.splice(2, 1, "golang");
console.log(lang);

console.log("Splicing by removing 2 element : ")
console.log(lang);
lang.splice(2, 2, "php");
console.log(lang);

// Slicing
console.log("-------------------------------------");
let lang0 = ["html", "css", "js", "python", "c++", "go"];
console.log(lang0)
console.log(lang0.slice(1,4));
console.log(lang0.slice(3));
console.log(lang0.slice(-4));

// Searching
// find the first element that satisfies the condition.
let ages = [12, 34, 55, 60, 23];

let old = ages.find((age) => age > 50);

console.log(old);

// Looping
let squared = [];

arr.forEach(function (val) {
	squared.push(val**2);
});

console.log(squared);