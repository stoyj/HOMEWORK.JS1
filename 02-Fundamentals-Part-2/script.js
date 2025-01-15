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
// const calcAgeCal = function (birthYeah) {
// 	return 2037 - birthYeah;
// }

// const years = [1990, 1967, 2002, 2010, 2018];

// const age1 = calcAgeCal(years[0]);
// const age2 = calcAgeCal(years[1]);
// const age3 = calcAgeCal(years[years.length - 1]);

// console.log(age1, age2, age3);



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

// function calcTip(bill) {
// 	return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }

// console.log(calcTip(100)); // result: 15

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

// const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

// console.log(bills, tips, total);
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


// Challenge

// const jonas = {
// 	firstName: 'Jonas',
// 	friends: ['Michael', 'Steven', 'Peter']
// };

// console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);


// Object Methods

// const jonas = {
// 	firstName: 'Jonas',
// 	lastName: 'Schmedtmann',
// 	birthYeah: 1991,
// 	job: 'teacher',
// 	friends: ['Michael', 'Peter', 'Steven'],
// 	hasDriversLicense: true,

// calcAge: function (birthYeah) {
//   return 2037 - birthYeah;
// }

// calcAge: function () {
//   // console.log(this);
//   return 2037 - this.birthYeah;
// }

// calcAge: function () {
// 	this.age = 2037 - this.birthYeah;
// 	return this.age;
// },

// getSummary: function () {
// 	return `${this.firstName} is a ${this.calcAge()}-year old ${jonas.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
// }
// };

// console.log(jonas.calcAge());

// console.log(jonas.age);
// console.log(jonas.age);
// console.log(jonas.age);


// Challenge

// "Jonas is a 46-year old teacher, and he has a driver's license"
// console.log(jonas.getSummary());


const jonas = {
	firstName: 'Jonas',
	age: 46,
	job: 'teacher',
	hasDriversLicense: true,

	// Метод, който връща обобщение за Jonas A method that returns an aggregate for Jonas
	getSummary: function () {
		return `${this.firstName} is a ${this.age}-year old ${this.job}, and he has ${this.hasDriversLicense ? "a" : "no"
			} driver's license.`;
	}
};

console.log(jonas.getSummary());


// Coding Challenge

// Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)

// 1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
// 2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.
// 3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

// TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

const mark = {
	fullName: 'Mark Miller',
	mass: 78,
	height: 1.69,
	calcBMI: function () {
		this.bmi = this.mass / (this.height * this.height);
		return this.bmi;
	}
};

const john = {
	fullName: 'John Smith',
	mass: 92,
	height: 1.95,
	calcBMI: function () {
		this.bmi = this.mass / (this.height * this.height);
		return this.bmi;
	}
};

mark.calcBMI();
john.calcBMI();

if (mark.bmi > john.bmi) {
	console.log(`${mark.fullName}'s BMI (${mark.bmi.toFixed(1)}) is higher than ${john.fullName}'s (${john.bmi.toFixed(1)})!`);
} else if (john.bmi > mark.bmi) {
	console.log(`${john.fullName}'s BMI (${john.bmi.toFixed(1)}) is higher than ${mark.fullName}'s (${mark.bmi.toFixed(1)})!`);
} else {
	console.log(`${mark.fullName} and ${john.fullName} have the same BMI (${mark.bmi.toFixed(1)})!`);
}


// Iteration: The for Loop

// console.log('Lifting weights repetition 1 🏋️‍♀️');
// console.log('Lifting weights repetition 2 🏋️‍♀️');
// console.log('Lifting weights repetition 3 🏋️‍♀️');
// console.log('Lifting weights repetition 4 🏋️‍♀️');
// console.log('Lifting weights repetition 5 🏋️‍♀️');
// console.log('Lifting weights repetition 6 🏋️‍♀️');
// console.log('Lifting weights repetition 7 🏋️‍♀️');
// console.log('Lifting weights repetition 8 🏋️‍♀️');
// console.log('Lifting weights repetition 9 🏋️‍♀️');
// console.log('Lifting weights repetition 10 🏋️‍♀️');

// for loop keeps running while condition is TRUE
// for (let rep = 1; rep <= 30; rep++) {
//   console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
// }


// Looping Arrays, Breaking and Continuing

const maria = [
	'Maria',
	'Schmedtmann',
	2037 - 1991,
	'teacher',
	['Michael', 'Peter', 'Steven'],
	true
];
const types = [];

// console.log(jonas[0])
// console.log(jonas[1])
// ...
// console.log(jonas[4])
// jonas[5] does NOT exist

for (let i = 0; i < maria.length; i++) {
	// Reading from maria array
	console.log(maria[i], typeof maria[i]);

	// Filling types array
	// types[i] = typeof maria[i];
	types.push(typeof maria[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
	ages.push(2037 - years[i]);
}
console.log(ages);

// continue and break

console.log('--- ONLY STRINGS ---')
for (let i = 0; i < maria.length; i++) {
	if (typeof maria[i] !== 'string') continue;

	console.log(maria[i], typeof maria[i]);
}


console.log('--- BREAK WITH NUMBER ---')
for (let i = 0; i < maria.length; i++) {
	if (typeof maria[i] === 'number') break;

	console.log(maria[i], typeof maria[i]);
}


// Looping Backwards and Loops in Loops

// Looping Backwards and Loops in Loops
const eli = [
	'Eli',
	'Schmedtmann',
	2037 - 1991,
	'teacher',
	['Michael', 'Peter', 'Steven'],
	true
];

// 0, 1, ..., 4
// 4, 3, ..., 0

for (let i = eli.length - 1; i >= 0; i--) {
	console.log(i, eli[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
	console.log(`-------- Starting exercise ${exercise}`);

	for (let rep = 1; rep < 6; rep++) {
		console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} 🏋️‍♀️`);
	}
}


// The while Loop

for (let rep = 1; rep <= 10; rep++) {
	console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
}

let rep = 1;
while (rep <= 10) {
	// console.log(`WHILE: Lifting weights repetition ${rep} 🏋️‍♀️`);
	rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
	console.log(`You rolled a ${dice}`);
	dice = Math.trunc(Math.random() * 6) + 1;
	if (dice === 6) console.log('Loop is about to end...');
}


// Coding Challenge

// Let's improve Steven's tip calculator even more, this time using loops!

// 1. Create an array 'bills' containing all 10 test bill values
// 2. Create empty arrays for the tips and the totals ('tips' and 'totals')
// 3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!

// TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52

// HINT: Call calcTip in the loop and use the push method to add values to the tips and totals arrays 😉

// 4. BONUS: Write a function 'calcAverage' which takes an array called 'arr' as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it:
// 4.1. First, you will need to add up all values in the array. To do the addition, start by creating a variable 'sum' that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the 'sum' variable. This way, by the end of the loop, you have all values added together
// 4.2. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements)
// 4.3. Call the function with the 'totals' array


const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];


const calcTip = function (bill) {
	return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

for (let i = 0; i < bills.length; i++) {
	const tip = calcTip(bills[i]);
	tips.push(tip);
	totals.push(bills[i] + tip);
}

console.log('Bills:', bills);
console.log('Tips:', tips);
console.log('Totals:', totals);


const calcAverage = function (arr) {
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
	}
	return sum / arr.length;
};

console.log('Average total:', calcAverage(totals));

// Bills: [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
// Tips: [4.4, 44.25, 26.4, 88, 7.4, 15.75, 2, 220, 12.9, 7.8]
// Totals: [26.4, 339.25, 202.4, 528, 44.4, 120.75, 12, 1320, 98.9, 59.8]
// Average total: 275.2














