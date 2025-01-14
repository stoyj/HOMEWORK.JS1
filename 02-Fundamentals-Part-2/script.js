'use strict';

// Activating Strict Mode

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log('I can drive :D');


// const interface = 'Audio'; // Wrong
// const privete = 534; // Wrong


// Functions

function logger() {
	console.log('My name is Annie'); // it's just a message
}

// calling / running / invoking function

logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
	const juice = `Juice with ${apples} apples and ${oranges} oranges`;
	return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
console.log(fruitProcessor(5, 8));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number('23');


// Function Declarations vs. Expressions

// Function declaration
// function calcAge1(birthYeah) {
// 	return 2037 - birthYeah;
// }
// const age1 = calcAge1(1991);

// Function expression
// Function expression is much clearer to me
// const calcAge2 = function (birthYeah) {
// 	return 2037 - birthYeah;
// }
// const age2 = calcAge2(1991);

// console.log(age1, age2);



// Arrow functions
// const calcAge3 = birthYeah => 2037 - birthYeah;
// const age3 = calcAge3(1991);
// console.log(age3);
// const yearsUntilRetirement = (birthYeah, firstName) => {
// 	const age = 2037 - birthYeah;
// 	const retirement = 65 - age;
// 	// return retirement;
// 	return `${firstName} retires in ${retirement} years`;
// }
// console.log(yearsUntilRetirement(1991, 'Annie')); console.log(yearsUntilRetirement(1980, 'Bob'));


// Functions Calling Other Functions
function cutFruitPieces(fruit) {
	return fruit * 4;
}

function fruitProcessor(apples, oranges) {
	const applePieces = cutFruitPieces(apples);
	const orangesPieces = cutFruitPieces(oranges);

	const juice = `Juice with ${applePieces} piece of apple and ${orangesPieces} pieces of orange.`;
	return juice;
}
console.log(fruitProcessor(2, 3));


// Reviewing Functions
const calcAge = function (birthYeah) {
	return 2037 - birthYeah;
}

const yearsUntilRetirement = function (birthYeah, firstName) {
	const age = calcAge(birthYeah);
	const retirement = 65 - age;

	if (retirement > 0) {
		console.log(`${firstName} retires in ${retirement} years`);
	} else {
		console.log(`${firstName} has already retired 🎉`);
		return - 1;
	}
}
console.log(yearsUntilRetirement(1991, 'Annie'));
console.log(yearsUntilRetirement(1950, 'Mike'));



// Introduction to Arrays
const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friendes = ['Michael', 'Steven', 'Peter'];
console.log(friendes);

const y = new Array(1991, 1984, 2008, 2020);

console.log(friendes[0]);
console.log(friendes[2]);

console.log(friendes.length);
console.log(friendes[friendes.length - 1]);

// friends[2] = 'Jay';
// console.log(friends);
// // friends = ['Bob', 'Alice'];

// const firstName = 'Jonas';
// const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];

// console.log(jonas);
// console.log(jonas.length);


// Exercise
const calcAgeCal = function (birthYeah) {
	return 2037 - birthYeah;
}

const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAgeCal(years[0]);
const age2 = calcAgeCal(years[1]);
const age3 = calcAgeCal(years[years.length - 1]);

console.log(age1, age2, age3);



// Basic Array Operations (Methods)

const friends = ['Michael', 'Steven', 'Peter'];

// Add elements
const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);

friends.unshift('John');
console.log(friends);

// Remove elements
friends.pop(); // Last
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); // First
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));

friends.push(23);
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes(23));

if (friends.includes('Steven')) {
	console.log('You have a friend called Steven');
}

// Coding Challenge

function calcTip(bill) {
	return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

console.log(calcTip(100)); // result: 15

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills, tips, total);
;

// Explanation of the result:
// 1. calcTip(125) → 125 * 0.15 = 18.75
// 2. calcTip(555) → 555 * 0.2 = 111
// 3. calcTip(44) → 44 * 0.2 = 8.8

// Bills, tips and totals will be:

// Bills: [125, 555, 44]
// Tips: [18.75, 111, 8.8]
// Total: [143.75, 666, 52.8]



// Introduction to Objects

const anniesArray = [
	'Annie',
	'Kamenova',
	2037 - 1991,
	'teacher',
	['Noah', 'Joanne', 'Asen']
];

const annies = {
	firstName: 'Annie',
	lastName: 'Kamenova',
	age: 2037 - 1991,
	job: 'teacher',
	friends: ['Noah', 'Joanne', 'Asen']
};

console.log(anniesArray, annies);



// Dot vs. Bracket Notation

// const noah = {
// 	firstName: 'Noah',
// 	lastName: 'Ramos',
// 	age: 2037 - 1991,
// 	job: 'pastor',
// 	friends: ['Vladi', 'Iva', 'Andrea']
// };

// console.log(noah);

// console.log(noah.lastName);
// console.log(noah['lastName']);

// const nameKey = 'Name';
// console.log(noah['first' + nameKey]);
// console.log(noah['last' + nameKey]);

// console.log(noah.'last' + nameKey);

// const interestedln = prompt('What do you want to know about Noah? Chose between firstName, lastName, age, job, and friends');

// if (noah[interestedln]) {
// 	console.log(noah[interestedln]);
// } else {
// 	console.log('Wrong request! Choose between firstName, lastName, age, job, friends');
// }

// noah.location = 'America';
// noah['twitter'] = '@noahramos';
// console.log(noah);


// Solution without prompt
const noah = {
	firstName: 'Noah',
	lastName: 'Ramos',
	age: 25,
	job: 'Developer',
	friends: ['Vladi', 'Iva', 'Andrea']
};

const interestedIn = 'job'; // (Можеш да промениш това на 'age', 'friends' и т.н.)) You can change this to 'age', 'friends' etc.

if (noah[interestedIn]) {
	console.log(noah[interestedIn]);
} else {
	console.log('Wrong request! Choose between firstName, lastName, age, job, friends');
}

noah.location = 'America';
noah['twitter'] = '@noahramos';

console.log(noah);









